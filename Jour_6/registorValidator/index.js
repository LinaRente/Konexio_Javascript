var prompt = require('prompt');

var properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z0-9-]+$/,
    },
    {
        name: 'password',
        validator: /^(?=.*\d)[0-9a-zA-Z\s\-\,\.]{6,}$/,
        hidden: true,
        replace: '*',
    },
    {
        name: 'email',
        format: 'email',
    }
];


prompt.start();

prompt.get(properties, function (err, result) {

    if (err) {
        console.log('error')
    } else {
        console.log('Ok')
    }
});