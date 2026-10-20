const fs = require("fs");
const path = require("path");

const bootstrapCssPath = require.resolve("bootstrap/dist/css/bootstrap.min.css");
const css = fs.readFileSync(bootstrapCssPath, "utf8");

// Bootstrap 5.1's compiled stylesheet uses the deprecated color-adjust
// shorthand. Replace only the unprefixed property before CRA's Autoprefixer
// processes it; leave -webkit-print-color-adjust untouched.
const patchedCss = css.replace(/(^|[;{]\s*)color-adjust\s*:/gm, "$1print-color-adjust:");

if (patchedCss !== css) {
  fs.writeFileSync(bootstrapCssPath, patchedCss, "utf8");
  console.log("Patched Bootstrap's deprecated color-adjust declaration.");
}
