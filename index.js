const inquirer = require('inquirer')
const fs = require('fs')
const questions = [];
inquirer
.prompt([
    {
        type: 'input',
    message: 'what is the title of this project.',
    name: 'title'
    },
    {
        type: 'input',
    message: 'what is your Github username.',
    name: 'github'
    },
    {
        type: 'input',
    message: 'what is the github email .',
    name: 'githubemail'
    },
    {
        type:'input',
            message: 'write a short description of this project.',
     name: 'Description'},

    {
        type: 'input',
    message: 'how do I install this project?',
     name: 'Installation'
    },

    {
        type: 'input',
    message: 'give some examples or instructions for use.',
     name: 'Usage'
    },

    {
        type: 'list',
    message: 'what kind of license does this project have?',
    choices: ['MIT', 'Apache License 2.0.', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL', 'LGPL','Other'],
     name: 'License'
    },

    {
        type: 'input',
    message: 'Who contributed to this project?',
     name: 'Contributing'
    },

    {
        type: 'input',
    message: 'give a few examples of tests for this project and instructions on how to run them .',
     name: 'Tests'
    },
    {
        type : 'input',
        message : 'type or copy and paste the url for your Github here',
        name : 'gitimg'    
    }


])
.then(function(answers){
const data = answers
writeToFile('readMe.md',data)
})

function writeToFile(fileName, data) {
    let write = 
`## ${data.title}
figure out badge
 ## Description
 ${data.Description}

## Table of Contents
* [intsallation](#Installation)
* [usage](#Usage)
* [license](#License)
* [contributing](#Contributing)
* [Tests](#Tests)
* [Github](#Github)

## Installation
${data.Installation} to install

## Usage
${data.Usage}

## License
used the ${data.License} license

## Contributing
${data.Contributing} contributed to the design.

## Tests
try these test commands: ${data.Tests}

## Github
profile picture:${data.github}
email: ${data.githubemail}
profile picture ${data.gitimg}`
  fs.writeFile('ReadMe2.md',write,function(err){
      if (err) {console.log(err)}
      console.log('Writting!')
  })
}

function init() {
}

init();
