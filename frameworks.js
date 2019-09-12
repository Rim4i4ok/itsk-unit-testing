
module.exports.Jasmine = function () {
    const lib = {
        title: 'Jasmine',
        url: 'https://jasmine.github.io/',
        packages: {
            npm: 'npm i --save-dev jasmine'
        }
    };

    console.log(lib);

    return lib;   
};

module.exports.Mocha = function () {
    const lib = {
        title: 'Mocha',
        url: 'https://mochajs.org/',
        packages: {
            npm: 'npm i --save-dev mocha'
        }
    };

    console.log(lib);

    return lib;  
};

module.exports.Jest = function () {
    const lib = {
        title: 'Jest',
        url: 'https://jestjs.io/',
        packages: {
            npm: 'npm i jest --save-dev',
            yarn: 'yarn add --dev jest'
        },
        documentation: 'https://jestjs.io/docs/en/expect'
    };

    console.log(lib);

    return lib;  
};