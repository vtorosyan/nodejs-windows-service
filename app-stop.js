var Service = require('node-windows').Service;

// Init the service
var svc = new Service({
  name:'Node.js Windows Custom Service',
  description: 'Starts sample app as a windows service',
  script: 'app.js'
});

svc.on('uninstall',function() {  
  console.log('Uninstalling the ' + svc.name + ' service has completed');
});

// Uninstall the app as a service.
svc.uninstall();  
