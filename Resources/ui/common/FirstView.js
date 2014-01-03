var Cloud = require('ti.cloud');

//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
        backgroundColor: '#232323'
    });
	
	// Create a Button.
	var aButton = Ti.UI.createButton({
		title : 'Send Email',
		height : 'auto',
		width : '200',
		backgroundColor: '#ffffff',
	});
	
	// Listen for click events.
	aButton.addEventListener('click', function() {
		// Send an email by using the ACS Email service
		// 
		// References: 
		// http://stackoverflow.com/questions/12453794/sending-email-through-appcelerator-cloud-api
		// http://docs.appcelerator.com/cloud/latest/#!/api/Emails-method-email_from_template
		//
		//
		// ACS Configuration
		// 1. http://www.screencast.com/t/W8TvD964aXQr
		// 
		// Email settings
		// 1. http://www.screencast.com/t/UmV4ypMlK
		//
		// Email Template
		// 1. http://www.screencast.com/t/OC7NQQxgVq1
		// 2. http://www.screencast.com/t/SNK2xEMSjm

		Cloud.Emails.send({
			template : 'default',
			recipients : 'skounis@gmail.com',
			foo : 'the foo',
			bar : 'the bar'
		}, function(e) {
			if (e.success) {
				alert('Success');
			} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	});
	
	// Add to the parent view.
	self.add(aButton);
	

	return self;
}

module.exports = FirstView;
