app.controller('mainController', ['$scope', 
	function($scope){
		$scope.paintings = [
			{
				blurb: "Pencil #1-4",
				image: "img/pencil4.jpg"
			},
			{
				blurb: "Pencil #1-4",
				image: "img/pencil3.jpg"
			},
			{
				blurb: "Pencil #1", 
				image: "img/pencil1.jpg"
			},
			{
				blurb: "Four of Five Pencils completed",
				image: "img/pencil2.jpg"
			},
			{
				blurb: "Pencil #1, street view",
				image: "img/pencil1a.jpg"

			}		
		];
	}]);