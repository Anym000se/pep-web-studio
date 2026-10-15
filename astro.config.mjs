import { defineConfig } from "astro/config";

// ------------------------------------------------------------------
//  WHERE THE SITE LIVES (GitHub Pages)
//
//  Before you have your own domain (site lives at a github.io address):
//    SITE = "https://YOUR-GITHUB-NAME.github.io"
//    BASE = "/pep-web-studio"          <- must match the repository name
//
//  Once you have your own domain (e.g. pepweb.com.au):
//    SITE = "https://pepweb.com.au"
//    BASE = "/"
//    ...and create a file public/CNAME containing just: pepweb.com.au
// ------------------------------------------------------------------
const SITE = "https://pepwebstudio.com";
const BASE = "/";

export default defineConfig({
  site: SITE,
  base: BASE,
});
