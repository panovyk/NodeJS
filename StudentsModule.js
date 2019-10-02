const fs = require('fs');


exports.newDir = function (dir1, dir2) {
    fs.mkdir(`./${dir1}`, {}, (err) => {
        !err ? console.log('Directory1 CREATED') : console.error('Directory already created!');

    });

    fs.mkdir(`./${dir2}`, {},(err) => {
        !err ? console.log('Directory2 CREATED') : console.error('Directory already created!');

    })
};

exports.StudentDir = function (group, name, pdata) {

    fs.mkdir(`./node_js/les_1/hw/${group}/${name}`, {}, err => {
        !err? console.log('Created') : console.error('Not created')
    });
    let writeStreamFile = fs.createWriteStream(`./${group}/${name}txt`);
    writeStreamFile.write(JSON.stringify(pdata))
};