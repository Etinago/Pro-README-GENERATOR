const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the title of your project: ', (title) => {
  rl.question('Enter a description of your project: ', (description) => {
    rl.question('Enter installation instructions: ', (installation) => {
      rl.question('Enter usage information: ', (usage) => {
        rl.question('Enter contribution guidelines: ', (contributing) => {
          rl.question('Enter the project license: ', (license) => {
            const readmeContent = `
# ${title}

${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## License
This project is licensed under the ${license} License.

---

**Note:** This is a generated README.md file.
`;

            fs.writeFile('README.md', readmeContent, (err) => {
              if (err) throw err;
              console.log('README.md file has been created successfully.');
              rl.close();
            });
          });
        });
      });
    });
  });
});
