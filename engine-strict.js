// Programatic alernative to putting engine-strict=true in an .npmrc file
// engine-strict works fine - but not consistently across all versions of npm, which defeats the purpose somewhat
// Therefore this script is used instead
const { execSync } = require("child_process");
const red = "\x1b[31m";
const reset = "\x1b[0m";
const bright = "\x1b[1m";
const package = require("./package.json");

function getSemverMajor(versionString) {
  return versionString.split(".")[0];
}

const requiredNodeVersion = getSemverMajor(package.engines.node);
const requiredNpmVersion = getSemverMajor(package.engines.npm);

const installedNodeVersion = getSemverMajor(process.versions.node);
const installedNpmVersion = getSemverMajor(
  execSync("npm -v", { encoding: "utf8" })
);

// Check major versions of required / installed nodejs match
if (requiredNodeVersion === installedNodeVersion) {
  console.log(`NodeJS ${installedNodeVersion} found ✔️`);
} else {
  console.error(
    `${red}This app is intended to be built with ${bright}NodeJS ${requiredNodeVersion}${reset}${red} but ${bright}NodeJS ${installedNodeVersion}${reset}${red} was found.\nPlease install NodeJS ${requiredNodeVersion}${reset}`
  );

  process.exit(1);
}

// Check major versions of required / installed npm match
if (requiredNpmVersion === installedNpmVersion) {
  console.log(`npm ${installedNpmVersion} found ✔️`);
} else {
  console.error(
    `${red}This app is intended to be built with ${bright}npm ${requiredNpmVersion}${reset}${red} but ${bright}npm ${installedNpmVersion}${reset}${red} was found.\nPlease install npm ${requiredNpmVersion}${reset}`
  );

  process.exit(1);
}
