app
	.controller('navigationController', function($scope, AppServices){

		var self = this;
		self.info = {};

		$scope.$on('AppServices:loadConfiguration', function(){
			self.info = AppServices.site.navigation.header;

			console.log(self.info);
		})
	})