# Hasnain Ahmad — Portfolio & CV

Personal portfolio website and ATS-friendly CV for **Hasnain Ahmad, Full Stack Developer | React.js Developer**.

Both are generated from one file, [`src/data/profile.js`](src/data/profile.js): edit it once and the
website and the CV stay identical.

## Stack

Same setup as `GstClub-UserSide`: React 18 + Vite 5, Tailwind CSS 3 with shadcn/ui-style components,
React Router, lucide icons and Sonner toasts. The CV is generated with the `docx` package.

## Run the website

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle in dist/
npm run preview    # serve the production bundle locally
```

## Rebuild the CV

```bash
npm run cv
```

This writes `cv/Hasnain_Ahmad_CV.docx`, exports `cv/Hasnain_Ahmad_CV.pdf` through the installed
Word-compatible engine (WPS Office or Microsoft Word, via COM on Windows), and copies the PDF to
`public/` for the website's **Download CV** button. Run it after every change to `profile.js`, then rebuild the site.

## Contact form

Messages are delivered to `profile.email` by [FormSubmit](https://formsubmit.co) (no account needed).

1. Deploy the site, then send one test message from the live contact form.
2. FormSubmit emails an **activation link** to `a.hasnain@gstsa1.org`. Click it. Messages are only
   delivered after activation.
3. Optional: FormSubmit then gives you a private token address. Put it in `.env` as
   `VITE_CONTACT_ENDPOINT=https://formsubmit.co/ajax/<token>` (see `.env.example`) and rebuild, so the
   email address isn't visible in the page source.

If the relay is unreachable, the form opens the visitor's email app with the message filled in.

## Structure

```
src/
  data/profile.js          single source of truth (profile, skills, experience, projects, education)
  data/navigation.js       section links
  components/ui/           button, badge, input (shadcn-style primitives)
  components/shared/       Section, SectionHeading, Reveal, ExternalLink
  components/layout/       Header, Footer, SocialLinks
  components/sections/     Hero, About, Skills, Experience, Projects, Education, Contact
  hooks/                   useReveal, useActiveSection, useScrolled
  layouts/SiteLayout.jsx
  pages/                   Home, NotFound
  routes/routes.jsx
cv/
  build-cv.mjs             generates the .docx
  export-pdf.ps1           .docx → .pdf with the same layout engine
  render-pages.ps1         QA helper: renders PDF pages to PNG
```

## Deployment

`web.config` (IIS SPA rewrite) and `vercel.json` are included, the same as GstClub-UserSide. Publish `dist/`.
