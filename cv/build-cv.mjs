// Generates cv/Hasnain_Ahmad_CV.docx from src/data/profile.js.
// Run `npm run cv` to build the .docx and export the matching .pdf.
//
// ATS rules followed: one column, no tables/text boxes/images, real Word
// bullets, standard section names, selectable text, standard font.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  AlignmentType, BorderStyle, Document, ExternalHyperlink, LevelFormat, Packer,
  Paragraph, TabStopType, TextRun,
} from "docx";
import { profile, skills, domainExpertise, experience, projects, education, certifications, languages } from "../src/data/profile.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(here, "Hasnain_Ahmad_CV.docx");

// A4, 0.7" side margins → text width in DXA
const PAGE_W = 11906, MARGIN_X = 1008, MARGIN_Y = 864;
const TEXT_W = PAGE_W - MARGIN_X * 2;

const FONT = "Calibri";
const INK = "111111";   // near-black
const GREY = "4A4A4A";  // dark grey for secondary text
const RULE = "8C8C8C";

const t = (text, o = {}) => new TextRun({ text, font: FONT, color: INK, size: 20, ...o });
const muted = (text, o = {}) => t(text, { color: GREY, ...o });
const link = (label, url, o = {}) =>
  new ExternalHyperlink({ link: url, children: [t(label, { color: INK, underline: {}, ...o })] });
const shortUrl = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function sectionHeading(text) {
  return new Paragraph({
    keepNext: true,
    spacing: { before: 200, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 2 } },
    children: [t(text.toUpperCase(), { bold: true, size: 21, characterSpacing: 20 })],
  });
}

// "Left text ............ right text" on one line, right part on a right tab stop.
function splitLine(left, right, o = {}) {
  return new Paragraph({
    keepNext: true,
    keepLines: true,
    spacing: { before: o.before ?? 0, after: o.after ?? 0 },
    tabStops: [{ type: TabStopType.RIGHT, position: TEXT_W }],
    children: [...left, t("\t"), ...right],
  });
}

const bullet = (children, o = {}) =>
  new Paragraph({
    numbering: { reference: "cv-bullets", level: 0 },
    spacing: { before: 0, after: 30, line: 259 },
    keepLines: true,
    ...o,
    children,
  });

const body = (children, o = {}) =>
  new Paragraph({ spacing: { before: 0, after: 60, line: 264 }, ...o, children });

const content = [];

// ── Header ─────────────────────────────────────────────────────────────
content.push(
  new Paragraph({ spacing: { after: 20 }, children: [t(profile.name, { bold: true, size: 44 })] }),
  new Paragraph({ spacing: { after: 80 }, children: [muted(profile.title, { size: 24 })] }),
  new Paragraph({
    spacing: { after: 20 },
    children: [
      muted(`${profile.location}  |  `),
      link(profile.email, `mailto:${profile.email}`, { color: GREY }),
      muted(`  |  ${profile.phone}  |  ${profile.phoneAlt}`),
    ],
  }),
  new Paragraph({
    spacing: { after: 40 },
    children: [
      muted("LinkedIn: "), link(profile.linkedinLabel, profile.linkedin, { color: GREY }),
      muted("  |  GitHub: "), link(profile.githubLabel, profile.github, { color: GREY }),
    ],
  }),
);

// ── Summary ────────────────────────────────────────────────────────────
content.push(sectionHeading("Professional Summary"), body([t(profile.summary)], { alignment: AlignmentType.JUSTIFIED }));

// ── Technical Skills ───────────────────────────────────────────────────
content.push(sectionHeading("Technical Skills"));
for (const g of skills) {
  content.push(body([t(`${g.title}: `, { bold: true }), t(g.items.join(", "))], { spacing: { after: 30, line: 259 } }));
}
content.push(body([t("Domain Knowledge: ", { bold: true }), t(domainExpertise.join(", "))], { spacing: { after: 30, line: 259 } }));

// ── Experience ─────────────────────────────────────────────────────────
content.push(sectionHeading("Professional Experience"));
experience.forEach((job, i) => {
  const where = [job.location, job.onsite ? "On-site" : ""].filter(Boolean).join(" · ");
  content.push(
    splitLine(
      [t(job.role, { bold: true, size: 21 }), t("  |  "), t(job.company, { bold: true, size: 21 })],
      [t(job.period, { bold: true })],
      { before: i === 0 ? 40 : 140, after: where ? 0 : 40 },
    ),
  );
  // Without a location line the bullets follow the heading directly.
  if (where) content.push(new Paragraph({ keepNext: true, spacing: { after: 40 }, children: [muted(where, { italics: true })] }));
  job.points.forEach((p) => content.push(bullet([t(p)])));
  content.push(body([muted("Technologies: ", { bold: true }), muted(job.tech.join(", "))], { spacing: { before: 20, after: 0 } }));
});

// ── Projects ───────────────────────────────────────────────────────────
content.push(sectionHeading("Selected Projects / Enterprise Platforms"));
projects.forEach((p, i) => {
  const urls = p.links ?? (p.url ? [{ label: shortUrl(p.url), url: p.url }] : []);
  const right = [];
  if (!urls.length) right.push(muted(p.platformNote, { size: 19 }));
  urls.forEach((u, j) => {
    if (j) right.push(muted("  ·  "));
    right.push(link(p.links ? shortUrl(u.url) : u.label, u.url, { color: GREY, size: 19 }));
  });
  content.push(
    splitLine([t(p.name, { bold: true }), muted(`  —  ${p.role}`, { italics: true, size: 19 })], right, { before: i === 0 ? 40 : 90 }),
    new Paragraph({
      spacing: { after: 0, line: 259 },
      keepLines: true,
      children: [t(`${p.contribution} `), muted(`Tech: ${p.tech.join(", ")}.`, { size: 19 })],
    }),
  );
});

// ── Education ──────────────────────────────────────────────────────────
content.push(sectionHeading("Education"));
for (const e of education) {
  content.push(
    splitLine([t(e.degree, { bold: true })], [t(e.period, { bold: true })], { before: 40 }),
    body([muted(`${e.school}, ${e.location}`)], { spacing: { after: 0 } }),
  );
}

if (certifications.length) {
  content.push(sectionHeading("Certifications"));
  certifications.forEach((c) => content.push(bullet([t(c)])));
}

// ── Additional ─────────────────────────────────────────────────────────
content.push(
  sectionHeading("Languages"),
  body([t(languages.join("  ·  "))], { spacing: { after: 0 } }),
);

const doc = new Document({
  creator: profile.name,
  title: `${profile.name} — CV`,
  description: `${profile.name}, ${profile.title}`,
  styles: { default: { document: { run: { font: FONT, size: 20, color: INK } } } },
  numbering: {
    config: [{
      reference: "cv-bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 300, hanging: 220 } }, run: { font: FONT, color: GREY } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_W, height: 16838 },
        margin: { top: MARGIN_Y, bottom: MARGIN_Y, left: MARGIN_X, right: MARGIN_X },
      },
    },
    children: content,
  }],
});

fs.writeFileSync(OUT, await Packer.toBuffer(doc));
console.log("Wrote", OUT);
