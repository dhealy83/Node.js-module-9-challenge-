// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return (
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" +
      ["See the deployed version here"]
    );
  }
  if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license === "Creative Commons") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return (
      "(https://opensource.org/licenses/Apache-2.0)" +
      "See the deployed version here"
    );
  }
  if (license === "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license === "Creative Commons") {
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache") {
    return (
      "The Apache License is a permissive free software license written by the Apache Software Foundation (ASF).[4] It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties. The ASF and its projects release their software products under the Apache License. The license is also used by many non-ASF projects." +
      ["See the deployed version here"]
    );
  }
  if (license === "Boost") {
    return "The Boost Software License specifies the terms and conditions of use for the Boost libraries covered by the license. Some Boost libraries have their own licenses. The hope is that eventually all Boost libraries will be covered by the Boost Software License.";
  }
  if (license === "Creative Commons") {
    return "A creative commons license is a license issued by the copyright owner to allow anyone in the world to use his or her copyright work in any manner consistent with that license. Creative Commons licenses are essentially standard form license agreements which can be attached to a work to enable its use under certain circumstances without the need to contact the author or negotiate terms of use.";
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licenses](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [URL Directory](#url-directory)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${data.license}

  ## Contributors

  $${data.contributors}

  ## Tests

  ${data.tests}

  ## URL Directory 

  ${data.URLs}

  ## GitHub URL
  ${data.github}

  ## LinkedIn URL
  ${data.linkedin}
`;
}

module.exports = generateMarkdown;
