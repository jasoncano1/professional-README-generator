module.exports =
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installations are required for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will your project be used?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Are there any licenses associated with your project?',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to your project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are there any tests required for your project?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?'
        }
    ];