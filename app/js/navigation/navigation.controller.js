app
	.controller('navigationController', function(AppServices){

		var self = this;

		self.info = AppServices.getSiteInformation();
		console.log(self.info);
	})