# SYTEC Website — Beginner Guide

## Files

- `index.html` — the website structure
- `style.css` — premium dark navy / warm gold design
- `script.js` — editable centre data + website interactions

## 1. How to edit centre information

Open `script.js`.

At the top you will find:

`const SYTEC_DATA = { ... }`

Inside `centre`, edit:

- name
- address
- phones
- email
- openingHours

## 2. How to edit courses

Inside `courses`, each course is one object.

Example:

```js
{
  name:"Python",
  description:"Python programming fundamentals and practical coding skills.",
  duration:"6 Months",
  eligibility:"Your eligibility",
  syllabus:"Your syllabus",
  practical:"Practical training details",
  certificate:"Your certificate information",
  fees:"₹Your fee"
}
```

Only enter claims/information that are actually provided by the centre.

## 3. How to add a course

Copy an existing course object, paste it after the previous object, and change the values.

## 4. Gallery

The current gallery uses visual placeholders. Replace the placeholder blocks in `index.html` with your own images later.

A simple image version can be:

```html
<img src="assets/centre-1.jpg" alt="SYTEC computer classroom">
```

Create an `assets` folder and put your photos there.

## 5. AI Assistant

The floating assistant included in this version is a local demo interface. It does NOT use an external AI API yet.

It intentionally does not pretend that a live AI model is connected.

The next project phase can connect a real AI backend. Do not put private API keys inside `script.js` or `index.html`.

## 6. Run the website on your computer

Double-click `index.html` and open it in a browser.

For basic testing, no Node.js or build system is required.

## 7. Deployment

This is a static website. It can be uploaded to a static hosting service such as Cloudflare Pages.

Before publishing, test:

- mobile layout
- phone links
- email link
- Maps link
- course search
- course details
- FAQ
- AI demo
- all navigation buttons

## 8. Future upgrade plan

Phase 2 can add:

- Google Sheets as an editable data source
- Google Apps Script as a data/API layer
- real AI Agent
- AI knowledge base
- website navigation actions
- admission enquiry form
- admin-friendly update workflow

Never expose secret API keys in frontend files.
