const {NewStudents, newDir} = require('./NewStudents');

newDir('jscx-1800', 'jscx-2000');

NewStudents('jscx-1800', 'Atrtur Pirozhkov',
    {name: 'Artur', surname: 'Pirozhkov', skill: 'cook'});

NewStudents('jscx-1800', 'Oksana Owl',
    {name: 'Oksana', surname: 'Owl', skill: 'not sleep'});

NewStudents('jscx-2000', 'Olya Lama',
    {name: 'Olya', surname: 'Lama', skill: 'eat'});

NewStudents('jscx-2000', 'Pavlo Zibrov',
    {name: 'Pavlo', surname: 'Zibrov', skill: 'singing'});