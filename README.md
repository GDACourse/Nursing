# Sigma Nursing Institute — Admission Website

Static website (HTML + CSS + JS, no build step needed).

## Files
- `index.html` — full website
- `style.css` — all styling
- `script.js` — nav, counters, FAQ accordion, animations

## Before going live — update these
1. **Admission form email**: open `index.html`, find:
   `action="https://formsubmit.co/your-email@example.com"`
   Replace with your real email. FormSubmit sends a confirmation email the first time — click the link inside it to activate the form (free, no signup needed).
2. **Google Map**: the map is currently a placeholder (OpenStreetMap, roughly centered on Sindhudurg). Replace the `iframe src` in the Contact section with your exact location — go to Google Maps → Share → Embed a map → copy the `src` URL.
3. **Photos**: the Hospital Training section uses icon cards as placeholders. Swap them for real photos of your tie-up hospitals when available (drop images into an `images/` folder and update the CSS backgrounds).
4. **Phone numbers / WhatsApp**: currently set to `9850845094` and `8668502903` — already wired into Call, WhatsApp, and floating buttons.

## Host it free on GitHub Pages
1. Create a new GitHub repository (e.g. `sigma-nursing-website`).
2. Upload these 3 files (`index.html`, `style.css`, `script.js`) to the repository root — either via GitHub's web "Add file → Upload files", or with git:
   ```
   git init
   git add .
   git commit -m "Sigma Nursing Institute website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/sigma-nursing-website.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment" → Source, select **Deploy from a branch**.
5. Branch: `main`, Folder: `/ (root)` → **Save**.
6. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR-USERNAME.github.io/sigma-nursing-website/`
7. (Optional) Add a custom domain in the same Pages settings if you own one (e.g. `sigmanursinginstitute.in`).

That's it — every time you push new changes to `main`, the live site updates automatically.
