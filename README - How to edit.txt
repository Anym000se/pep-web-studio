PEP WEB STUDIO - YOUR PORTFOLIO SITE
====================================

PREVIEW IT
  Double-click "Preview Website.bat". It opens http://localhost:4321/pep-web-studio/
  Changes you save show up straight away.

CHANGE YOUR DETAILS, PRICES, WORK OR FAQS
  Everything is in one file:  src\data\site.ts
  - Lines marked TODO still have placeholder details (phone, email, ABN, form key).
  - To hide or show a portfolio piece, change  show: true / false
  - The "private" folder stays on this computer and is never uploaded.
  - To add a portfolio piece, copy one of the blocks in "work" and put a
    screenshot (1440 x 720 works best) in  public\work\

CONNECT THE "FREE WEBSITE CHECK" FORM (free, takes 2 minutes)
  1. Go to https://web3forms.com and enter the email you want enquiries sent to.
  2. They email you an Access Key.
  3. Paste it into src\data\site.ts as  formKey: "your-key-here"
  Submissions then arrive in your inbox.

PUT IT ONLINE WITH GITHUB PAGES (free)
  1. Create a new repository on github.com called  pep-web-studio
     (GitHub Pages needs it to be Public on a free account.)
  2. Your GitHub username (anym000se) is already set in astro.config.mjs.
  3. Upload this folder to the repository (GitHub Desktop is the easiest way).
     node_modules and dist are skipped automatically.
  4. On GitHub: Settings > Pages > under "Source" choose  GitHub Actions
  5. Every time you push changes, the site rebuilds by itself (about a minute).
     Watch it in the "Actions" tab. Your site will be at:
       https://anym000se.github.io/pep-web-studio/

USING YOUR OWN DOMAIN LATER (e.g. pepweb.com.au)
  1. In astro.config.mjs set  SITE = "https://pepweb.com.au"  and  BASE = "/"
  2. Create a file  public\CNAME  containing just:  pepweb.com.au
  3. On GitHub: Settings > Pages > Custom domain > enter it, tick "Enforce HTTPS".
  4. At your domain provider, point the domain at GitHub Pages. GitHub's
     instructions are on that same Settings > Pages screen.

BEFORE YOU GO LIVE
  - Fill in the TODO lines in src\data\site.ts and astro.config.mjs
  - Check the Wooden Boatshop owners are happy to be shown
