const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);
    
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                return (nameInput ? true : console.log('Please enter your name!'));
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                return (githubInput ? true : console.log('Please enter your GitHub username!'));
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: "Would you like to enter some information about yourself for an 'About' section?",
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                return (confirmAbout ? true : false);
            }
        }
    ])   
};

const promptProject = portfolioData => {
    // if projects array doesn't exist create it
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    
    console.log(`
+++++++++++++++++
=================
Add a New Project
=================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                return (projectInput ? true : console.log('Please enter the name of your project!'));
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descInput => {
                return (descInput ? true : console.log('Please enter a description for your project!'));
            }
        },
        {
            type: 'checkbox',
            name: 'language',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)',
            validate: linkInput => {
                return (linkInput ? true : console.log('Please enter the link to your GitHub project!'));
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        // push project answers to projects array
        portfolioData.projects.push(projectData);
        // if user wants to add another project run promptProject again
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    })
};

promptUser()
    // send user responses to promptProject
    .then(promptProject)
    // get responses and log them
    .then(portfolioData => {
        console.log(portfolioData);
    });