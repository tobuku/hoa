# HOA Member Rights — Session Resume File

Paste this file at the start of a new Claude Code session to pick up where we left off.

---

## What This Project Is

A national HOA member rights directory and resource website, built as a static GitHub Pages site.

- **Live URL:** https://tobuku.github.io/hoa/
- **GitHub Repo:** tobuku/hoa
- **Local Repo:** C:\Users\HDNG_HelpDesk\Documents\GitHub\hoa
- **Custom domain:** Not yet acquired. Top candidate: KnowYourHOA.com
- **Stack:** Static HTML, CSS, JavaScript only (GitHub Pages — no server-side code)
- **Design:** Navy #1a2744 + Gold #c9a227 + White. Fonts: Playfair Display (headings), Source Serif 4 (body), DM Sans (UI) via Google Fonts.

---

## Why This Site Exists (Background — Do Not Publish Identifying Details)

Built by a Hawaii homeowner who:
- Lost their home and possessions in a brush fire
- Had their insurance claim obstructed by their community association's board
- Went through HOA mediation and prevailed
- Took a bill to the Hawaii state legislature to create HOA oversight — it failed due to lobbying by HOA management companies
- **Cannot name the specific association** (mediation agreement)
- Has deep expertise in: Robert's Rules, HOA member rights, Sunshine Clause, Good Faith Clause, CC&Rs/bylaws, mediation, legislative advocacy, insurance claims in HOA contexts, and contract corruption patterns in HOA management

This background informs the "About" page and the site's anonymous first-person voice. No name, no association name, no identifying details are published anywhere on the site.

---

## What Was Built (Session 1 — Completed)

### Full site launched and pushed to GitHub Pages

| File | Status |
|---|---|
| `index.html` | ✅ Complete — Homepage |
| `css/style.css` | ✅ Complete — Full design system |
| `js/main.js` | ✅ Complete — Nav, search, scroll, print/copy |
| `rights/index.html` | ✅ Complete — Know Your Rights hub |
| `rights/sunshine-clause.html` | ✅ Complete |
| `rights/good-faith-clause.html` | ✅ Complete |
| `rights/ccrs-bylaws.html` | ✅ Complete |
| `rights/roberts-rules.html` | ✅ Complete |
| `rights/insurance-claims.html` | ✅ Complete |
| `states/index.html` | ✅ Complete — All 50 states, searchable |
| `states/hawaii.html` | ✅ Complete — Most detailed (HRS 421J, 514B, DCCA) |
| `states/california.html` | ✅ Complete — Davis-Stirling Act |
| `states/florida.html` | ✅ Complete — Chapters 720 & 718 |
| `states/texas.html` | ✅ Complete — Chapter 209, SB 1588 |
| `states/arizona.html` | ✅ Complete — ARS §33-1801, OAH process |
| `states/_template.html` | ✅ Complete — Template for 45 remaining states |
| `attorneys/index.html` | ✅ Complete — Directory with state filter, sample listings |
| `documents/index.html` | ✅ Complete — Document library hub |
| `documents/hoa-rights-checklist.html` | ✅ Complete — Printable 5-section checklist |
| `documents/demand-letter-template.html` | ✅ Complete — Copyable certified mail template |
| `documents/meeting-challenge-guide.html` | ✅ Complete |
| `documents/insurance-claim-guide.html` | ✅ Complete |
| `reviews/index.html` | ✅ Complete — Rating form + sample reviews |
| `about/index.html` | ✅ Complete — Anonymous Hawaii homeowner story |
| `contact/index.html` | ✅ Complete |

**Total: 25 files, 7,163 lines of code. Committed and pushed.**

---

## What Still Needs to Be Done

### Priority 1 — High Impact, Ready to Build

- [ ] **45 remaining state pages** — `states/alabama.html` through `states/wyoming.html`. Use `states/_template.html` as the base. Each needs real state-specific HOA statute info (statute name, key member rights, oversight agency, complaint process). The 5 detailed states (Hawaii, California, Florida, Texas, Arizona) are the model. Nevada, Colorado, Virginia, North Carolina, Georgia, and Washington are the next most-searched states and should be prioritized.

- [ ] **Newsletter backend** — Currently the newsletter form is a placeholder (simulated JS confirm). Options: integrate Beehiiv, ConvertKit, or Mailchimp free tier via their embed code. No backend needed — just replace the form with their embed snippet.

- [ ] **Google Search Console verification** — Add GSC meta tag or `google*.html` verification file to the repo root so the site can be submitted for indexing.

- [ ] **Sitemap** — Create `sitemap.xml` in the repo root listing all pages. Required for SEO and GSC submission.

- [ ] **robots.txt** — Create `robots.txt` in the repo root. Simple allow-all to start.

- [ ] **favicon** — Add a favicon (the gold "H" logo mark). Can be created as a simple SVG or 32x32 PNG.

### Priority 2 — Growth Features

- [ ] **Domain acquisition** — Acquire KnowYourHOA.com (or preferred alternative) and point it to GitHub Pages. Requires: custom CNAME file in repo + DNS configuration at domain registrar.

- [ ] **Google Analytics** — Add GA4 tracking snippet to all pages (add to the shared `<head>` section). Use the same GSC property for both.

- [ ] **Real attorney listings** — The attorney directory currently has 5 sample listings. Reach out to HOA attorneys in the 5 detailed states and offer free listings. Hawaii attorneys familiar with HRS 421J and DCCA process are the highest-value first listings.

- [ ] **State regulatory body directory** — A dedicated page or table listing the correct government contact for HOA complaints in each state. This is highly searched and adds real value.

- [ ] **Forum or community** — A member discussion area. Options without backend: embed a Disqus comment section on a dedicated page, or link to a subreddit or Facebook Group. Longer term: a proper community forum.

- [ ] **HOA news/blog** — A `blog/` section covering HOA law changes, notable court cases, state legislative updates. Even 1 post/month would build SEO over time.

### Priority 3 — Monetization (When Traffic Warrants)

- [ ] **Google AdSense** — Apply once the site has 30+ days of traffic. Add the AdSense snippet to high-traffic pages (state pages, rights guides).
- [ ] **Paid attorney listings** — Upgrade the attorney directory to offer enhanced/verified listings for a monthly fee.
- [ ] **Premium document templates** — Add more advanced templates (HOA recall petition, assessment dispute letter, demand for IDR) as paid downloads ($17–47 each).
- [ ] **Consulting referral system** — Connect users in active disputes with HOA attorneys for a referral arrangement.

---

## Technical Notes

- **GitHub Pages path:** All internal links use `/hoa/` prefix because the site is in a subdirectory. If a custom domain is added at the root level, all internal links will need to be updated to `/` prefix. Do a find-and-replace across all HTML files: `/hoa/` → `/`
- **CSS location:** `css/style.css` — root pages use `css/style.css`, subdirectory pages use `../css/style.css`
- **JS location:** Same pattern — `js/main.js` for root, `../js/main.js` for subdirectory pages
- **No build process** — Pure static HTML. Edit files and `git push` to deploy. Changes live in 1–3 minutes.
- **Git remote:** `origin` = `https://github.com/tobuku/hoa.git`, branch `main`

---

## Design System Quick Reference

```css
--navy:       #1a2744   /* Primary dark — backgrounds, headers */
--navy-dark:  #0f1a30   /* Nav bar, footer */
--gold:       #c9a227   /* Accent — CTAs, highlights, borders */
--gold-pale:  #f5e9c4   /* Light gold — alert backgrounds, card accents */
--white:      #ffffff
--off-white:  #f8f7f4   /* Section backgrounds */

Font stack:
  Display: 'Playfair Display', Georgia, serif
  Body:    'Source Serif 4', Georgia, serif
  UI:      'DM Sans', system-ui, sans-serif
```

Key CSS classes:
- `.page-hero` — Interior page hero (navy bg, angled bottom edge)
- `.card` — Hover-lift card with gold top border on hover
- `.btn--gold` / `.btn--navy` / `.btn--outline` — Button variants
- `.article-content` — Long-form content styles (h2/h3, lists, blockquotes)
- `.alert` — Gold-border callout box
- `.checklist-section` / `.checklist-body` — For checklist pages
- `.state-grid` / `.state-card` — State directory layout
- `.newsletter-strip` — Navy CTA band with form

---

## Legal / Privacy Requirements (Non-Negotiable)

Every page must include the following exact disclaimer in the `.footer__disclaimer` section:

> "The content on this site is for educational and informational purposes only and reflects the personal experiences and opinions of the author. Nothing on this site constitutes legal advice or creates an attorney-client relationship. HOA laws vary significantly by state and local jurisdiction. Always consult a licensed attorney in your state for advice about your specific situation."

**Never publish:** The site owner's name, the name of the community association (mediation agreement prevents this), any specific identifying details about the HOA dispute or the individuals involved.

---

## Where We Left Off

Session 1 complete. Full site built and live.

**Next session priorities:**
1. Verify the live site looks correct at https://tobuku.github.io/hoa/ — review all sections, check mobile
2. Add `sitemap.xml`, `robots.txt`, and favicon to the repo root
3. Set up Google Search Console verification
4. Begin building the next batch of state pages (Nevada, Colorado, Virginia, Georgia, Washington, North Carolina recommended next)
5. Decide on newsletter platform and integrate the embed code

---

*Last updated: 2026-03-17 | Session 1 complete*
