app.
	factory('AppServices', AppServices);

	function AppServices($http, $q){
		
		var getSiteInformation = getSiteInformation;
		var siteInfo;

		function getSiteInformation(){

			return $q(function(resolve, reject){
				$http.get('./data/config.json').then(
					function(result){
						console.log(result);
					},
					function(err){
						console.log(err);
					}
				)
			})
		}

		return{
			getSiteInformation: getSiteInformation
		};
	}