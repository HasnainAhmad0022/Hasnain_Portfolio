import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Reveal, Section, SectionHeading } from "@/components/shared";
import { profile } from "@/data/profile";

const channels = [
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: "Phone (Saudi Arabia)", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: Linkedin, label: "LinkedIn", value: profile.name, href: profile.linkedin, external: true },
  { Icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
  { Icon: MapPin, label: "Location", value: profile.location },
];

const empty = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
  return e;
}

// The site is static, so messages are relayed to Hasnain's inbox by FormSubmit
// (formsubmit.co, no account needed). Override with VITE_CONTACT_ENDPOINT, e.g.
// with the private https://formsubmit.co/ajax/<token> address FormSubmit issues
// after the first submission is confirmed. If the relay fails, the visitor's
// email app opens with the message prefilled so nothing is lost.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || `https://formsubmit.co/ajax/${profile.email}`;

function mailtoFallback({ name, email, subject, message }) {
  const body = `${message}\n\n— ${name}\n${email}`;
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [honey, setHoney] = useState(""); // spam trap: humans never see or fill it

  const update = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    const msg = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim() || `Portfolio enquiry from ${values.name.trim()}`,
      message: values.message.trim(),
    };
    setSending(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: msg.name,
          email: msg.email,
          message: msg.message,
          _subject: `[Portfolio] ${msg.subject}`,
          _replyto: msg.email,
          _template: "table",
          _honey: honey,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") throw new Error(data.message || `HTTP ${res.status}`);
      toast.success("Thank you — your message has been sent.");
      setValues(empty);
    } catch {
      toast.error("The message couldn't be sent from the site, so your email app is opening with it ready to send.");
      mailtoFallback(msg);
    } finally {
      setSending(false);
    }
  };

  const field = (k) => ({
    id: `contact-${k}`,
    name: k,
    value: values[k],
    onChange: update(k),
    "aria-invalid": errors[k] ? "true" : undefined,
    "aria-describedby": errors[k] ? `contact-${k}-error` : undefined,
  });
  const err = (k) =>
    errors[k] && (
      <p id={`contact-${k}-error`} className="text-sm text-red-600">
        {errors[k]}
      </p>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-2xl border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <div className="grid gap-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input {...field("name")} autoComplete="name" placeholder="Your name" />
        {err("name")}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input {...field("email")} type="email" autoComplete="email" placeholder="you@company.com" />
        {err("email")}
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="contact-subject">
          Subject <span className="font-normal text-ink-400">(optional)</span>
        </Label>
        <Input {...field("subject")} placeholder="Job opportunity, project, collaboration…" />
      </div>
      <input
        type="text"
        name="_honey"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea {...field("message")} placeholder="Tell me a little about the role or project." />
        {err("message")}
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">Your message goes straight to my inbox.</p>
        <Button type="submit" variant="accent" size="lg" disabled={sending} aria-busy={sending}>
          {sending ? <Loader2 className="animate-spin" /> : <Send />} {sending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <Section id="contact" className="bg-white" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16 [&>*]:min-w-0">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={<span id="contact-title">Let's work together</span>}
            intro="Open to full-stack and React.js opportunities in Saudi Arabia and internationally. The fastest way to reach me is email or LinkedIn."
            className="mb-8 sm:mb-10"
          />
          <ul className="grid grid-cols-1 gap-3">
            {channels.map(({ Icon, label, value, href, external }, i) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink-800 text-white transition-colors group-hover:bg-jade-600">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-ink-400">{label}</span>
                    <span className="block truncate font-medium text-ink-800">{value}</span>
                  </span>
                  {href && <ArrowUpRight className="size-4 text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-jade-700" aria-hidden />}
                </>
              );
              const cls = "group flex items-center gap-4 rounded-2xl border bg-background p-4 transition-all duration-200";
              return (
                <Reveal as="li" key={label} delay={i * 60}>
                  {href ? (
                    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${cls} hover:border-jade-200 hover:bg-white hover:shadow-md`}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </div>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
