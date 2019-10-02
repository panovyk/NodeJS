const {newDir, StudentDir} = require('./StudentsModule');

newDir('jscx-1800', 'jscx-2000');

StudentDir('jscx-1800', 'Atrtur Pirozhkov',
    {name: 'Artur', surname: 'Pirozhkov', skill: 'cook'});

StudentDir('jscx-1800', 'Oksana Owl',
    {name: 'Oksana', surname: 'Owl', skill: 'not sleep'});

StudentDir('jscx-2000', 'Olya Lama',
    {name: 'Olya', surname: 'Lama', skill: 'eat'});

StudentDir('jscx-2000', 'Pavlo Zibrov',
    {name: 'Pavlo', surname: 'Zibrov', skill: 'singing'});