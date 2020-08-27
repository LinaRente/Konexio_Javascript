var prompt = require('prompt');

var properties = [
  {
    name: 'username',
    validator: /^[a-zA-Z0-9-]+$/,
    // warning: 'Username must be only letters, numbers, or dashes'
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
    // message: 'Must be a valid email address',
  }
];



prompt.start();

prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }
  //   if (err) {
  //   console.log('error')
  // } else {
  //   console.log('Ok')
  // }

  console.log('Command-line input received:');
  console.log('  Username: ' + result.username);
  console.log('  Password: ' + result.password);
  console.log('  email: ' + result.email);
});

function onErr(err) {
  console.log(err);
  return 1;
}

