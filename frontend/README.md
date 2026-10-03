# Azrul — Frontend portfolio

A project-index portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The homepage pairs an identity column with Ranaco and Product Catalog, followed by contact. Background, capabilities, and toolkit live at `/about`; project pages remain at `/work/ranaco` and `/work/product-catalog`. The dynamic island navigation uses native scrolling.

## Run locally

Use Node.js 20.9 or newer. All application commands run from `frontend`:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build` and then `npm start`.

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Contact tests use mocked delivery and never send email. After a production build, run `npm run test:e2e` for responsive, accessibility, navigation, and mocked contact-form browser tests. The suite uses installed Google Chrome in headless mode and saves review screenshots in `.preview/`.

## Content and design

- `lib/content.ts` contains the public profile, contact recipient, and Ranaco project details. `lib/product-catalog.ts` contains the Flutter project screenshots, GitHub link, and versioned GitHub Releases APK link.
- `app/globals.css` contains the responsive layouts and palette: slate (#3A405A), blue (#AEC5EB), peach (#F9DEC9), rose (#E9AFA3), and brown (#685044).
- DM Serif Display and Manrope are temporary font choices until the next typography selection; they are loaded with `next/font/google`; building requires access to Google Fonts.
- Keep the portrait, two Ranaco screenshots, and résumé in `public`. `/resume.pdf` rewrites to the existing named PDF.
- Navigation and the image dialog work by keyboard. Decorative motion respects reduced-motion preferences. Main content is server rendered and visible before JavaScript loads.

## Contact email

Set the following server-only variables in `.env.local` for local use or in the hosting environment:

```text
GMAIL_USER=your-sending-account@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

The configured account sends messages to `azrulaqim13@gmail.com`. The visitor's validated email is used for Reply-To. TLS certificate verification remains enabled. Never commit credentials.

`POST /api/contact` accepts JSON with `name` (1–100 characters), `email` (valid address, at most 254 characters), and `message` (1–5000 characters). Responses are 200 on success, 400 for invalid input, 413 for oversized payloads, 503 for missing email configuration, and 502 for delivery failure. The form preserves input after errors and always offers direct email contact.

## Hosting

The repository's Netlify configuration builds the `frontend` directory. The contact route requires a Node.js server runtime; this is not a static export. Existing Vercel Analytics integration is retained. No deployment is performed by local build commands.
