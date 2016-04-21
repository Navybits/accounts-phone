Package.describe({
  name: 'navybits:accounts-phone',
  version: '0.0.24',
  summary: 'A login service based on mobile phone number, For Meteor.',
  git: 'https://github.com/Navybits/accounts-phone.git',
  documentation: 'README.md'
})

Npm.depends({
  "phone": "1.0.3",
  "stream-buffers": "0.2.5"
})

Package.onUse(function (api) {
  api.use('npm-bcrypt@=0.7.8_2', 'server')

  api.use('accounts-base@1.0.2', ['client', 'server'])
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.0.2', ['client', 'server'])
  api.use('srp@1.0.2', ['client', 'server'])
  api.use('sha@1.0.2', ['client', 'server'])
  api.use('random@1.0.2', ['server'])
  api.use('ejson@1.0.5', 'server')
  api.use('callback-hook@1.0.2', 'server')
  api.use('check@1.0.4')
  api.use('underscore@1.0.2')
  api.use('ddp@1.0.14', ['client', 'server'])
  api.addFiles('sms_server.js', 'server')
  api.addFiles('phone_server.js', 'server')
  api.addFiles('phone_client.js', 'client')

  api.export('SMS', 'server')
  api.export('SMSTest', 'server', {testOnly: true})
})

Package.onTest(function (api) {
  api.use([
    'yang2007chun:accounts-phone',
    'tinytest',
    'test-helpers',
    'tracker',
    'accounts-base',
    'random',
    'underscore',
    'check',
    'ddp'
  ])
  api.addFiles('phone_tests_setup.js', 'server')
  api.addFiles('phone_tests.js', ['client', 'server'])
  api.addFiles('sms_tests_setup.js', 'server')
  api.addFiles('sms_tests.js', 'client')
})
