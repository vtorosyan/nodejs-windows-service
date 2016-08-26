# nodejs-windows-service
An example how to install Node.js program as a service on Windows machine

#### How-To
1. Install (node.js)[https://nodejs.org/en/download/]
2. Clone/Download the project
3. Run `node app_start.js`. 
   - Go to the Windows Services and check the 'Node.js Windows Custom Service' service is running
   - Try `http://127.0.0.1:8000/` URL in your favourite browser.
4. Run `node app_stop.js`
   - Go to the Windows Services and verify that the service is not running
