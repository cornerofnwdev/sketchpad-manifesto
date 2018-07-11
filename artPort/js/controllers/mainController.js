app.controller('mainController', ['$scope', 
	function($scope){
		$scope.paintings = [
			{
				name: "Lonely Seabird",
				blurb: "First painting in the Lonely Seabird series",
				image: "img/seabird.jpg"
			},
			{
				name: "Envy",
				blurb: "1 of 7 deadly sins.",
				image: "img/envy.jpg"
			},
			{
				name: "Wrath",
				blurb: "2 of 7 deadly sins",
				image: "img/wrath.jpg"
			},
			{
				name: "Changing of the Guards",
				blurb: "Candian Mounties sluting the Candian Geese as they fly south",
				image: 'img/guards.jpg'
			},
			{
				name: "Test",
				blurb: "test test test test test",
				image: "img/sloth.jpg"
			},
			{
				name: "Lust",
				blurb: "The fourth in a series of seven that represents the Seven Deadly Sins.",
				image: "img/lust.jpg"

			},
			{
				name: "Dylan",
				blurb: "Water color featuring Mr. Jacob Zimmerman",
				image: "img/dylan.jpg"
			},
			{
				name: "Gluttony",
				blurb: "The fifth painting in a series of seven paitnings each representing one of the Seven Deadly Sins",
				image: "img/gluttony.jpg"
			},
			{
				name: "Pride",
				blurb: "The seventh painting in a series of seven paintings each representing one of the Seven Deadly Sins",
				image: 'img/pride.jpg'
			}
		];
	}]);

