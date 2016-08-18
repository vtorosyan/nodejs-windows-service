var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Windows Customer Service',
  description: 'Starts sample app as a windows service',
  script: 'app.js'
});

// Event indicates that the process is available as a service.
svc.on('install',function() {
  svc.start();
});

// Event indicates that the service has started successfully.
svc.on('start',function() {
  console.log(svc.name + ' has successfully started');
});

// Install the app as a service.
svc.install();  