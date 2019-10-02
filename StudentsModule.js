const fs = require('fs');


exports.newDir = function (dir1, dir2) {
    fs.mkdir('./${dir1}', (err) => {
        !err ? console.log('Directory1 CREATED') : console.error('Directory already created!');

    });

    fs.mkdir('./${dir2}', (err) => {
        !err ? console.log('Directory2 CREATED') : console.error('Directory already created!');

    })
};

function NewStudent(group, name) {
    let jsonedData = JSON.stringify(pdata);

    fs.writeFile('./${group}./${name}./PersonalData.txt', jsonedData, err => {
        !err ? console.log(`${name} information added to your data`) : console.error('Data error');
    })
}

function NewStudentData(group, name, pdata = {}) {
    !err ? console.log(`${name} personal data added`) : console.error('Error')
}

exports.NewStudents = async function (group, name, pdata = {}){

    await NewStudent(group, name);

    NewStudentData (group, name, pdata)
};