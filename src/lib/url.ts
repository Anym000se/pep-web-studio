// Builds links that still work when the site lives in a sub-folder
// (e.g. your-name.github.io/pep-web-studio/) as well as on its own domain.
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
