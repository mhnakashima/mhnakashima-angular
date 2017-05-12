app.
	service('AppServices', ['$http', '$rootScope', function ($http, $rootScope) {
	    var self = this;
	    self.site = {};

	    self.loadConfiguration = function () {
	        $http.get('./data/config.json').then(function (result) {
	            self.site = result.data;
	            $rootScope.$broadcast('AppServices:loadConfiguration');
	        });
	    };

	    self.loadConfiguration();
	}]);