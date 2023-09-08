const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Intialise an array to store the section headers 

const tableContents = [];

rl.question('Enter the title of your project: ', (title) => {
  sections.push(`# ${title}\n\n`);

  rl.question('Enter a description of your project: ', (description) => {
    sections.push(`## Description\n${description}\n\n`);

    rl.question('Enter installation instructions: ', (installation) => {
      sections.push(`## Installation\n${installation}\n\n`);

      rl.question('Enter usage information: ', (usage) => {
        sections.push(`## Usage\n${usage}\n\n`);

        rl.question('Enter contribution guidelines: ', (contributing) => {
          sections.push(`## Contributing\n${contributing}\n\n`);

          rl.question('Enter the project license: ', (license) => {
            sections.push(`## License\nThis project is licensed under the ${license} License.\n\n`);

            // Create the table of contents using map function
            const tableOfContents = sections.map((section) => {
              
              
              
              // Extract section header
              const sectionHeader = section.match(/## (.+?)\n/);
              if (sectionHeader) {
                return `- [${sectionHeader[1]}](#${sectionHeader[1].toLowerCase().replace(/ /g, '-')})`;
              }
              return '';
            }).join('\n');

            // Combining the sections and table of contents
            const readmeContent = `${tableOfContents}\n\n${sections.join('')}`;

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