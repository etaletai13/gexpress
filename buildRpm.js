var buildRpm = require('rpm-builder');

var options = {
  name: 'GExpress',
  version: '1.0.0',
  release: '1',
  buildArch: 'x86_64',
  summary: 'Google Express client',
  rpmDest: 'Build/Release/',
  verbose: true,
  files: [
    {src: './g-express-linux-x64/', dest: '/Applications/'},
  ]
};

buildRpm(options, function(err, rpm) {
  if (err) {
    throw err;
  }

  console.log(rpm);
});
