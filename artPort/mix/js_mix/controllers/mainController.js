app.controller('mainController', ['$scope', 
	function($scope){
		$scope.projects = [
			{
				name: "North Light Community Center Bollards",
				location: "Carson Street, Philadelphia, PA",
				blurb: "June 2018",
				image: "img/mural11.jpg",
				url: 'carsonStreet/'
			},
			{
				name: "North Light Community Center Mural",
				location: "Carson Street, Philadelphia, PA",
				blurb: "May 2018 - Present",
				url: 'northLight/',
				image: "img/mural/cover.jpg"
				
			},
			{
				name: "Sketchpad Manifesto",
				location: "Sketch Blog",
				blurb: "January 2018 - Present",
				url: 'sketchPad/',
				image: "img/Jun7.jpg"
			}

		];
	}]);

