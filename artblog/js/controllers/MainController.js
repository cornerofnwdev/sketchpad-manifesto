app.controller('MainController', ['$scope', 
	function($scope){
		$scope.title = 'Sketchpad Manifesto';
		$scope.subtitle = 'A Daily Sketch and Doodle';
		$scope.logo = 'img/logo334.svg';
		$scope.randomSort = function(contact) {
			  return Math.random();
		};
		$scope.products = [
			{
				name: "Paint Brush Sketch",
				number: 202,
				pubdate: new Date('2018', '6', '7'),
				cover: 'img/Jul7.jpg'
			},
			{
				name: "Lines in the Sand",
				number: 201,
				pubdate: new Date('2018', '6', '6'),
				cover: 'img/Jul6.jpg'
			},
			{
				name: "Jungle Beats (Bobby Schurmda), 200th Sketch!!!!",
				number: "200",
				pubdate: new Date('2018', '6', '5'),
				cover: 'img/Jul5.jpg'
			},
			{
				name: "Fourth of July Welcoming Dog Days",
				number: 199,
				pubdate: new Date('2018', '6', '4'),
				cover: 'img/Jul4.jpg'
			},
			{
				name: "The Scary thing is",
				number: 198,
				pubdate: new Date('2018', '6', '3'),
				cover: 'img/Jul3.jpg'
			},
			{
				name: "Mario Sketch",
				number: 197,
				pubdate: new Date('2018', '6', '2'),
				cover: 'img/Jul2.jpg'
			},
			{
				name: "Novice Mistake",
				number: 196,
				pubdate: new Date('2018', '6', '1'),
				cover: 'img/Jul1.jpg'
			},
			{
				name: "I hate Pigeons",
				number: 195,
				pubdate: new Date('2018', '5', '30'),
				cover: 'img/Jun30.jpg'
			},
			{
				name: "Strong, Independent Woman",
				number: 194,
				pubdate: new Date('2018', '5', '29'),
				cover: 'img/Jun29.jpg'
			},
			{
				name: "Shalom",
				number: 193,
				pubdate: new Date('2018', '5', '28'),
				cover: 'img/Jun28.jpg'
			},
			{
				name: "Squirrel Sketch for NL Mural",
				number: 192,
				pubdate: new Date('2018', '5','27'),
				cover: 'img/Jun27.jpg'
			},
			{
				name: "Pencils, Vines, and Nigel Thornberry Sketch",
				number: 191,
				pubdate: new Date('2018', '5', '26'),
				cover: 'img/Jun26.jpg'
			},
			{
				name: "Flowers Sketch",
				number: 190,
				pubdate: new Date('2018', '5', '25'),
				cover: 'img/Jun25.jpg'
			},
			{
				name: "Potted Plant",
				number: 189,
				pubdate: new Date('2018', '5', '24'),
				cover: 'img/Jun24.jpg'
			},
			{
				name: "Setting Sun",
				number: 188,
				pubdate: new Date('2018', '5', '23'),
				cover: 'img/Jun23.jpg'
			},
			{
				name: "I too like Rap Music",
				number: 187,
				pubdate: new Date('2018', '5', '22'),
				cover: 'img/Jun22.jpg'
			},
			{
				name: "Open Mind",
				number: 186,
				pubdate: new Date('2018', '5', '21'),
				cover: 'img/Jun21.jpg'
			},
			{
				name: "Snow Fall",
				number: 185,
				pubdate: new Date('2018', '5', '20'),
				cover: 'img/Jun20.jpg'
			},
			{
				name: "Justin Sketchs for NL Mural",
				number: 184,
				pubdate: new Date('2018', '5', '19'),
				cover: 'img/Jun19.jpg'
			},
			{
				name: "Isle of Pizza Sketch",
				number: 183,
				pubdate: new Date('2018', '5', '18'),
				cover: 'img/Jun18.jpg'
			},
			{
				name: "Buffallo Bill Sketch with Background",
				number: 182,
				pubdate: new Date('2018', '5', '17'),
				cover: 'img/Jun17.jpg'
			},
			{
				name: "Buffallo Bill Sketch",
				number: 181,
				pubdate: new Date('2018', '5', '16'),
				cover: 'img/Jun16.jpg'
			},
			{
				name: "Dancing Grandpa Onesy",
				number: 180,
				pubdate: new Date('2018', '5', '15'),
				cover: 'img/Jun15.jpg'
			},
			{
				name: "Untitled #10",
				number: 179,
				pubdate: new Date('2018', '5', '14'),
				cover: 'img/Jun14.jpg'
			},
			{
				name: "Sketch Book 2017: Notes for a Portfolio Page",
				number: 178,
				pubdate: new Date('2018', '5', '13'),
				cover: 'img/Jun13.jpg'
			},
			{
				name: "Sketch Book 2014: Candy Tina",
				number: 177,
				pubdate: new Date('2018', '5', '12'),
				cover: 'img/Jun12.jpg'
			},
			{
				name: "Untitled #9",
				number: 176,
				pubdate: new Date('2018', '5', '11'),
				cover: 'img/Jun11.jpg'
			},
			{
				name: "Can Someone Get my Server",
				number: 175,
				pubdate: new Date('2018', '5', '10'),
				cover: 'img/Jun10.jpg'
			},
			{
				name: "Sketch Book 2017: 6/6/17 Front Street Brewery",
				number: 174,
				pubdate: new Date('2018', '5', '9'),
				cover: 'img/Jun9.jpg'
			},
			{
				name: "Former Judith Priest Roadie",
				number: 173,
				pubdate: new Date('2018', '5', '8'),
				cover: 'img/Jun8.jpg'
			},
			{
				name: "Star Gazer",
				number: 172,
				pubdate: new Date('2018', '5', '7'),
				cover: 'img/Jun7.jpg'
			},
			{
				name: "Diabetes",
				number: 171,
				pubdate: new Date('2018', '5', '6'),
				cover: 'img/Jun6.jpg'
			},
			{
				name: "Ned and Ted",
				number: 170,
				pubdate: new Date('2018', '5', '5'),
				cover: 'img/Jun5.jpg'
			},
			{
				name: "Catch",
				number: 169,
				pubdate: new Date('2018', '5', '4'),
				cover: 'img/Jun4.jpg'
			},
			{
				name: "Feral Child",
				number: 168,
				pubdate: new Date('2018', '5', '3'),
				cover: 'img/Jun3.jpg'
			},
			{
				name: "Carrot Touch",
				number: 167,
				pubdate: new Date('2018', '5', '2'),
				cover: 'img/Jun2.jpg'
			},
			{
				name: "Swedish Chef Sketch",
				number: 166,
				pubdate: new Date('2018', '5', '1'),
				cover: 'img/Jun1.jpg'
			},
			{
				name: "Fading",
				number: 165,
				pubdate: new Date('2018', '4', '31'),
				cover: 'img/May31.jpg'
			},
			{
				name: "Squirrel Sketchs",
				number: 164,
				pubdate: new Date('2018', '4', '30'),
				cover: 'img/May30.jpg'
			},
			{
				name: "Faces #4",
				number: 163,
				pubdate: new Date('2018', '4', '29'),
				cover: 'img/May29.jpg' 
			},
			{
				name: "Young Paul Manafort",
				number: 162,
				pubdate: new Date('2018', '4', '28'),
				cover: 'img/May28.jpg'
			},
			{
				name: "Bee Man",
				number: 161,
				pubdate: new Date('2018', '4', '27'),
				cover: 'img/May27.jpg'
			},
			{
				name: "Self Cut Hair",
				number: 160,
				pubdate: new Date('2018', '4', '26'),
				cover: 'img/May26.jpg'
			},
			{
				name: "Jason Kelce and Swamp Thing sketch",
				number: 159,
				pubdate: new Date('2018', '4', '25'),
				cover: 'img/May25.jpg'
			},
			{
				name: "Jogger Fears",
				number: 158,
				pubdate: new Date('2018','4', '24'),
				cover: 'img/May24.jpg'
			},
			{
				name: "Lonely Hitler",
				number: 157,
				pubdate: new Date('2018','4', '23'),
				cover: 'img/May23.jpg'
			},
			{
				name: "Jim Croce",
				number: 156,
				pubdate: new Date('2018', '4', '22'),
				cover: 'img/May22.jpg'
			},
			{
				name: "Off Duty Security Guard",
				number: 155,
				pubdate: new Date('2018', '4',' 21'),
				cover: 'img/May21.jpg'
			},
			{
				name: "Mr. Hindsight",
				number: 154,
				pubdate: new Date('2018', '4', '20'),
				cover: 'img/May20.jpg'
			},
			{
				name: "Foot Soliders",
				number: 153,
				pubdate: new Date('2018', '4', '19'),
				cover: 'img/May19.jpg'
			},
			{
				name: "On Guard",
				number: 152,
				pubdate: new Date('2018', '4', '18'),
				cover: 'img/May18.jpg' 
			},
			{
				name: "Sketch and Notes for Mural",
				number: 151,
				pubdate: new Date('2018',' 4', '17'),
				cover: 'img/May17.jpg'
			},
			{
				name: "What a F'in Chin",
				number: 150,
				pubdate: new Date('2018', '4', '16'),
				cover: 'img/May16.jpg'
			},
			{
				name: "Post Interview",
				number: 149,
				pubdate: new Date('2018', '4', '15'),
				cover: 'img/May15.jpg'
			},
			{
				name: "The Birds and the Trees",
				number: 148,
				pubdate: new Date('2018', '4', '14'),
				cover: 'img/May14.jpg'
			},
			{
				name: "Black and Blue #2",
				number: 147,
				pubdate: new Date('2018', '4', '13'),
				cover: 'img/May13.jpg'
			},
			{
				name: "I'm a Human Bean",
				number: 146,
				pubdate: new Date('2018', '4', '12'),
				cover: 'img/May12.jpg'
			},
			{
				name: "That's like Funny",
				number: 145,
				pubdate: new Date('2018', '4', '11'),
				cover: 'img/May11.jpg'
			},
			{
				name: "Will Penn Sketch",
				number: 144,
				pubdate: new Date('2018', '4', '10'),
				cover: 'img/May10.jpg'
			},
			{
				name: "Pointing Fingers",
				number: 143,
				pubdate: new Date('2018', '4', '9'),
				cover: 'img/May9.jpg'
			},
			{
				name: "Dog in Suit",
				number: 142,
				pubdate: new Date('2018', '4', '8'),
				cover: 'img/May8.jpg'
			},
			{
				name: "No Doubt",
				number: 141,
				pubdate: new Date('2018', '4', '7'),
				cover: 'img/May7.jpg'
			},
			{
				name: "Alone",
				number: 140,
				pubdate: new Date('2018', '4', '6'),
				cover: 'img/May6.jpg'
			},
			{
				name: "US Hotel Bar and Grill: Main Street",
				number: 139,
				pubdate: new Date('2018', '4', '5'),
				cover: 'img/May5.jpg'
			},
			{
				name: "Faces # 3",
				number: 138,
				pubdate: new Date('2018', '4', '4'),
				cover: 'img/May4.jpg'
			},
			{
				name: "William Penn",
				number: 137,
				pubdate: new Date('2018', '4', '3'),
				cover: 'img/May3.jpg'
			},
			{
				name: "Open Season in PA: A Drawing from Fenwick, DE '14",
				number: 136,
				pubdate: new Date('2018', '4', '2'),
				cover: 'img/May2.jpg'
			},
			{
				name: "Nice Shirt",
				number: 135,
				pubdate: new Date('2018', '4', '1'),
				cover: 'img/May1.jpg'
			},
			{
				name: "Joy Again, Necromancer",
				number: 134,
				pubdate: new Date('2018', '3','30'),
				cover: 'img/Apr30.jpg'
			},
			{
				name: "Neorealism kind of Sad",
				number: 133,
				pubdate: new Date('2018', '3', '29'),
				cover: 'img/Apr29.jpg'
			},
			{
				name: "I'm Fucking Fat",
				number: 132,
				pubdate: new Date('2018', '3', '28'),
				cover: 'img/Apr28.jpg'
			},
			{
				name: "Hate/Love Poptart Guy",
				number: 131,
				pubdate: new Date('2018', '3', '27'),
				cover: 'img/Apr27.jpg'
			},
			{
				name: "Decorated Cat Sketch",
				number: 130,
				pubdate: new Date('2018', '3', '26'),
				cover: 'img/Apr26.jpg'
			},
			{
				name: "Aerosmith fans and a Van Hellen",
				number: 129,
				pubdate: new Date('2018', '3', '25'),
				cover: 'img/Apr25.jpg'
			},
			{
				name: "The Light",
				number: 128,
				pubdate: new Date('2018', '3', '24'),
				cover: 'img/Apr24.jpg'
			},
			{
				name: "Clegg, a Rock, and the Highway",
				number: 127,
				pubdate: new Date('2018', '3', '23'),
				cover: 'img/Apr23.jpg'
			},
			{
				name: "Mao: A Ping Pong Player",
				number: 126,
				pubdate: new Date('2018', '3', '22'),
				cover: 'img/Apr22.jpg'
			},
			{
				name: "Disgruntled Prisoner #2",
				number: 125,
				pubdate: new Date('2018', '3', '21'),
				cover: 'img/Apr21.jpg'
			},
			{
				name: "Pigeon Pooping Sketch: 4/20",
				number: 124,
				pubdate: new Date('2018', '3', '20'),
				cover: 'img/Apr20.jpg'
			},
			{
				name: "I'm Steve Bannon",
				number: 123,
				pubdate: new Date('2018', '3', '19'),
				cover: 'img/Apr19.jpg'
			},
			{
				name: "I Love Dave Matthews",
				number: 122,
				pubdate: new Date('2018', '3', '18'),
				cover: 'img/Apr18.jpg'
			},
			{
				name: "Comey and Trump: A Love Story.",
				number: 121,
				pubdate: new Date('2018', '3', '17'),
				cover: 'img/Apr17.jpg'
			},
			{
				name: "Ugly People",
				number: 120,
				pubdate: new Date('2018', '3', '16'),
				cover: 'img/Apr16.jpg'
			},
			{
				name: "Amy Schumer Fans at the Philadelphia Airport",
				number: 119,
				pubdate: new Date('2018', '3', '15'),
				cover: 'img/Apr15.jpg'
			},
			{
				name: "Unfinished Old Lady",
				number: 118,
				pubdate: new Date('2018', '3', '14'),
				cover: 'img/Apr14.jpg'
			},
			{
				name: "Black and Blue",
				number: 117,
				pubdate: new Date('2018', '3', '13'),
				cover: 'img/Apr13.jpg'
			},
			{
				name: "Untitled #8",
				number: 116,
				pubdate: new Date('2018', '3', '12'),
				cover: 'img/Apr12.jpg'
			},
			{
				name: "Prince and Pauper",
				number: 115,
				pubdate: new Date('2018', '3', '11'),
				cover: 'img/Apr11.jpg'
			},
			{
				name: "Girl",
				number: 114,
				pubdate: new Date('2018', '3', '10'),
				cover: 'img/Apr10.jpg'
			},
			{
				name: "Randy Bryce sketches",
				number: 113,
				pubdate: new Date('2018', '3','09'),
				cover: 'img/Apr9.jpg'
			},
			{
				name: "The Horror: A Drawing from Fenwick, DE '14",
				number: 112,
				pubdate: new Date('2018', '3', '08'),
				cover: 'img/Apr8.jpg'
			},
			{
				name: "Dream Academy Critic",
				number: 111,
				pubdate: new Date('2018', '3', '07'),
				cover: 'img/Apr7.jpg'
			},
			{
				name: "Hey",
				number: 110,
				pubdate: new Date('2018', '3', '06'),
				cover: 'img/Apr6.jpg'
			},
			{
				name: "Untitled #7",
				number: 109,
				pubdate: new Date('2018', '3', '05'),
				cover: 'img/Apr5a.jpg'
			},
			{
				name: "Diapers",
				number: 108,
				pubdate: new Date('2018', '3', '05'),
				cover: 'img/Apr5.jpg'
			},
			{
				name: "Hotdog Burglar",
				number: 107,
				pubdate: new Date('2018', '3', '04'),
				cover: 'img/Apr4.jpg'
			},
			{
				name: "Fan of Static-X",
				number: 106,
				pubdate: new Date('2018', '3','03'),
				cover: 'img/Apr3.jpg'
			}, 
			{
				name: "Spring Time",
				number: 105,
				pubdate: new Date('2018', '3', '02'),
				cover: 'img/Apr2.jpg'
			},
			{
				name: "The Crossing",
				number: 104,
				pubdate: new Date('2018','3', '01'),
				cover: 'img/Apr1.jpg'
			},
			{
				name: "Aerosmith #2",
				number: 103,
				pubdate: new Date('2018', '2','31'),
				cover: 'img/Mar31.jpg'
			},
			{
				name: "Jewish Frankie Muniz in a Crowd",
				number: 102,
				pubdate: new Date('2018', '2', '30'),
				cover: 'img/Mar30a.jpg'
			},
			{
				name: "Thumbs Up",
				number: 101,
				pubdate: new Date('2018', '2', '30'),
				cover: 'img/Mar30.jpg'
			},
			{
				name: "Disgruntled Prisoner #6",
				number: 100,
				pubdate: new Date('2018', '2', '29'),
				cover: 'img/Mar29.jpg'
			},
			{
				name: "Cormac McCarthy",
				number: 99,
				pubdate: new Date('2018', '2', '28'),
				cover: 'img/Mar28.jpg'
			},
			{
				name: "Men in Jeans with Sandals",
				number: 98,
				pubdate: new Date('2018', '2', '27'),
				cover: 'img/Mar27.jpg'
			},
			{
				name: "Brian Dennehy Look a Like",
				number: 97,
				pubdate: new Date('2018', '2', '26'),
				cover: 'img/Mar26.jpg'
			},
			{
				name: "Father John Misty",
				number: 96,
				pubdate: new Date('2018', '2', '25'),
				cover: 'img/Mar25.jpg'
			},
			{
				name: "Onion Knight",
				number: 95,
				pubdate: new Date('2018', '2', '24'),
				cover: 'img/Mar24.jpg'
			},
			{
				name: "Pysco-Killer",
				number: 94,
				pubdate: new Date('2018', '2', '23'),
				cover: 'img/Mar23.jpg'
			},
			{
				name: "Steve Bartman Sketchs",
				number: 93,
				pubdate: new Date('2018', '2', '22'),
				cover: 'img/Mar22.jpg'
			},
			{
				name: "Unfinished Punk",
				number: 92,
				pubdate: new Date('2018', '2', '21'),
				cover: 'img/Mar21.jpg'
			},
			{
				name: "Yep",
				number: 91,
				pubdate: new Date('2018', '2','20'),
				cover: 'img/Mar20.jpg'
			},
			{
				name: "Untitled #6",
				number: 90,
				pubdate: new Date('2018', '2', '19'),
				cover: 'img/Mar19.jpg'
			},
			{
				name: "Confused Hipster",
				number: 89,
				pubdate: new Date('2018', '2', '18'),
				cover: 'img/Mar18.jpg'
			}, 
			{
				name: "St. Patty",
				number: 88,
				pubdate: new Date('2018', '2', '17'),
				cover: 'img/Mar17.jpg'
			},
			{
				name: "Meep",
				number: 87,
				pubdate: new Date('2018', '2', '16'), 
				cover: 'img/Mar16.jpg'
			},
			{
				name: "Faces #2",
				number: 86,
				pubdate: new Date('2018', '2', '15'),
				cover: 'img/Mar15.jpg'
			},
			{
				name: "Untitled #5",
				number: 85,
				pubdate: new Date('2018', '2', '14'),
				cover: 'img/Mar14.jpg'
			},
			{
				name: "Echo",
				number: 84,
				pubdate: new Date('2018', '2', '13'),
				cover: 'img/Mar13.jpg'
			},
			{
				name: "Disgruntled Prisoner #4",
				number: 83,
				pubdate: new Date('2018', '2', '12'),
				cover: 'img/Mar12.jpg',
			},
			{
				name: "Jules Verne Sketch",
				number: 82,
				pubdate: new Date('2018', '2', '11'),
				cover: 'img/Mar11.jpg'
			},
			{
				name: "Buck-a-Roe",
				number: 81,
				pubdate: new Date('2018', '2', '10'),
				cover: 'img/Mar10.jpg'
			},
			{
				name: "Paul Manfort Russian Flag Paranoia",
				number: 80,
				pubdate: new Date('2018', '2', '09'),
				cover: 'img/Mar9.jpg'
			},
			{
				name: "Talking on the Quit Train.",
				number: 79,
				pubdate: new Date('2018', '2', '08'),
				cover: 'img/Mar8.jpg'
			},
			{
				name: "Hey",
				number: 78,
				pubdate: new Date('2018', '2', '07'),
				cover: 'img/Mar7.jpg'
			},
			{
				name: "Old Man Big Eyebrows",
				number: 77,
				pubdate: new Date('2018', '2', '06'),
				cover: 'img/Mar6.jpg'
			},
			{
				name: "The Memories, Dancing in My Dreams",
				number: 76,
				pubdate: new Date('2018', '2', '05'),
				cover: 'img/Mar5.jpg' 
			},
			{
				name: "Jules Verne",
				number: 75,
				pubdate: new Date('2018', '2', '04'),
				cover: 'img/Mar4.jpg'
			},
			{
				name: "Doug Martsch",
				number: 74,
				pubdate: new Date('2018', '2', '03'),
				cover: 'img/Mar3.jpg'
			},
			{
				name: "Pizza?",
				number: 73,
				pubdate: new Date('2018', '2', '02'),
				cover: 'img/Mar2.jpg'
			},
			{
				name: "Like What?",
				number: 72,
				pubdate: new Date('2018', '2', '01'),
				cover: 'img/Mar1.jpg'
			},
			{
				name: "Tennis",
				number: 71,
				pubdate: new Date('2018', '1', '28'),
				cover:'img/Feb28.jpg'
			},
			{
				name: "Violent Femme",
				number: 70,
				pubdate: new Date('2018', '1', '27'),
				cover: 'img/Feb27.jpg'
			},
			{
				name: "It's Fine.",
				number: 69,
				pubdate: new Date('2018', '1', '26'),
				cover: 'img/Feb26a.jpg'
			},
			{
				name: "Young Trump: I'm already dead inside.",
				number: 68,
				pubdate: new Date('2018', '1', '26'),
				cover: 'img/Feb26.jpg'
			}, 
			{
				name: "Forget Me Nots #2",
				number: 67,
				pubdate: new Date('2018', '1', '25'),
				cover: 'img/Feb25.jpg'
			},
			{
				name: "Glass of Tempranillo",
				number: 66,
				pubdate: new Date('2018', '1', '24'),
				cover: 'img/Feb24.jpg'
			},
			{
				name: "Above the Wall",
				number: 65,
				pubdate: new Date('2018', '1', '23'),
				cover: 'img/Feb23.jpg'
			},
			{
				name: "Forget Me Nots #1",
				number: 64,
				pubdate: new Date('2018', '1', '22'),
				cover: 'img/Feb22.jpg'
			},
			{
				name: "All about the Plant",
				number: 63,
				pubdate: new Date('2018','1', '21'),
				cover: 'img/Feb21.jpg'
			},
			{
				name: "Fleeting Moment of Friends amongst Fireflys",
				number: 62,
				pubdate: new Date('2018', '1', '20'),
				cover: 'img/Feb20.jpg'
			},
			{
				name:"Unfinished Sad Clown",
				number: 61,
				pubdate: new Date('2018', '1', '19'),
				cover: 'img/Feb19.jpg'
			},
			{
				name: "1 + 1 = 2",
				number: 60,
				pubdate: new Date('2018', '1', '18'),
				cover: 'img/Feb18.jpg'
			},
			{
				name: "Kill 1/5/18",
				number: 59,
				pubdate: new Date('2018', '1', '17'),
				cover: 'img/Feb17.jpg'
			},
			{
				name: "Sea-men",
				number: 58,
				pubdate: new Date('2018', '1', '16'),
				cover: 'img/Feb16.jpg'
			},
			{
				name: "Coffee Stain #4",
				number: 57,
				pubdate: new Date('2018', '1', '15'),
				cover: 'img/Feb15.jpg'
			},
			{
				name: "Dueling Mops",
				number: 56,
				pubdate: new Date('2018', '1', '14'),
				cover: 'img/Feb14.jpg'
			},
			{
				name: "Big Head Big Teeth",
				number: 55,
				pubdate: new Date('2018', '1', '13'),
				cover: 'img/Feb13d.jpg'
			},
			{
				name: "Steve Miller Sketchs 1/10/18",
				number: 54,
				pubdate: new Date('2018', '1', '13'),
				cover: 'img/Feb13c.jpg'
			},
			{
				name: "Untitled #4",
				number: 53,
				pubdate: new Date('2018', '1', '13'),
				cover: 'img/Feb13b.jpg'
			},
			{
				name: "Faces #1",
				number: 52,
				pubdate: new Date('2018', '1', '13'),
				cover: 'img/Feb13a.jpg'
			},
			{
				name: "What's that TV?",
				number: 51,
				pubdate: new Date('2018', '1', '13'),
				cover: 'img/Feb13.jpg'
			},
			{
				name: "When Jump Suit met Overalls",
				number: 50,
				pubdate: new Date('2018', '1', '12'),
				cover: 'img/Feb12.jpg'
			},
			{
				name: "Jason Kelce Mummer sketch #1",
				number: 49,
				pubdate: new Date('2018', '1', '11'),
				cover: 'img/Feb11.jpg'
			},
			{
				name: "Aging Party",
				number: 48,
				pubdate: new Date('2018', '1', '10'),
				cover: 'img/Feb10a.jpg'
			},
			{
				name: "Philadelphia Eagles Fans: 2/8/18",
				number: 47,
				pubdate: new Date('2018', '1', '10'),
				cover: 'img/Feb10.jpg'
			},
			{
				name: "Disgruntled Prisoner #7",
				number: 46,
				pubdate: new Date('2018', '1', '09'),
				cover: 'img/Feb9.jpg'
			},
			{
				name: "Devin Nunes Super Sloath",
				number: 45,
				pubdate: new Date('2018', '1', '08'),
				cover: 'img/Feb8.jpg'
			},
			{
				name: "Untitled #3",
				number: 44,
				pubdate: new Date('2018', '1', '07'),
				cover: 'img/Feb7.jpg'
			},
			{
				name: "Joe Kennedy III with Eagles Fans",
				number: 43,
				pubdate: new Date('2018', '1', '06'),
				cover: 'img/Feb6.jpg'
			},
			{
				name: "What an Idiot",
				number: 42,
				pubdate: new Date('2018', '1', '05'),
				cover: 'img/Feb5.jpg'
			},
			{
				name: "Lavar Ball",
				number: 41,
				pubdate: new Date('2018', '1', '04'),
				cover: 'img/Feb4.jpg'
			},
			{
				name: "Sketch Book 2016: Rise of the Ditka",
				number: 40,
				pubdate: new Date('2018', '1', '03'),
				cover: 'img/Feb3.jpg'
			},
			{
				name: "Sketch Book 2016: Trump on Harambe",
				number: 39,
				pubdate: new Date('2018', '1', '02'),
				cover: 'img/Feb2.jpg'
			},
			{
				name: "Bats",
				number: 38,
				pubdate: new Date('2018', '1', '01'),
				cover: 'img/Feb1.jpg'
			},
			{
				name: "Situation Room",
				number: 37,
				pubdate: new Date('2018', '0', '31'),
				cover: 'img/Jan31.jpg'
			},
			{
				name: "Wellfleet Oysters",
				number: 36,
				pubdate: new Date('2018', '0', '30'),
				cover: 'img/Jan30.jpg'
			},
			{
				name: "Sketch Book 2017: Self Portrait/In Take 2/7/17",
				number: 35,
				pubdate: new Date('2018', '0', '29'),
				cover: 'img/Jan29.jpg'
			},
			{
				name: "A Winter's Wait",
				number: 34,
				pubdate: new Date('2018', '0', '28'),
				cover: 'img/Jan28.jpg'
			},
			{
				name: "Matchstick Man",
				number: 33,
				pubdate: new Date('2018', '0', '27'),
				cover: 'img/Jan27.jpg'

			},
			{
				name: "Untitled #2",
				number: 32,
				pubdate: new Date('2018', '0', '26'),
				cover: 'img/Jan26a.jpg'
			},
			{
				name: "Alaina Moore, Union Transfer 1/25/2018",
				number: 31,
				pubdate: new Date ('2018', '0', '26'),
				cover: 'img/Jan26.jpg'
			},
			{
				name: "See the gull.  Be the gull.",
				number: 30,
				pubdate: new Date('2018', '0', '25'),
				cover: 'img/Jan25c.jpg'
			},
			{
				name: "Coffee Stain #3",
				number: 29,
				pubdate: new Date('2018', '0', '25'),
				cover: 'img/Jan25b.jpg'
			},
			{
				name: "Pack of smokes rolled up in his t-shirt sleeve.",
				number: 28,
				pubdate: new Date('2018', '0', '25'),
				cover: 'img/Jan25a.jpg'
			},
			{
				name: "The Manchurian Candidate. #3",
				number: 27,
				pubdate: new Date('2018', '0', '25'),
				cover: 'img/Jan25.jpg'

			},
			{
				name: "Coffee Stain #2",
				number: 26,
				pubdate: new Date('2018', '0','24'),
				cover: 'img/Jan24.jpg'
			},
			{
				name: "Stuff",
				number: 25,
				pubdate: new Date('2018', '0', '23'),
				cover: 'img/Jan23.jpg'
			},
			{
				name: "Woody Guthrie Doodle #1",
				number: 24,
				pubdate: new Date('2018', '0', '22'),
				cover: 'img/Jan22a.jpg'
			},
			{
				name: "Face Off",
				number: 23,
				pubdate: new Date('2018', '0', '22'),
				cover: 'img/Jan22.jpg'
			},
			{
				name: "Coffee Stain #1: Big Hair 5 Head",
				number: 22,
				pubdate: new Date('2018', '0', '21'),
				cover: 'img/Jan21.jpg'
			},
			{
				name: "Cleg, age: 36, Favorite Band: REO Speedwagon, Description: Missing left thumb from joint., Fun Fact: Also likes to party.",
				number: 21,
				pubdate: new Date('2018', '0', '20'),
				cover: 'img/Jan20.jpg'
			},
			{
				name: "The Manchurian Candidate. #7",
				number: 20,
				pubdate: new Date('2018', '0', '19'),
				cover: 'img/Jan19.jpg'
			},
			{
				name: "Dance Party",
				number: 19,
				pubdate: new Date('2018', '0', '18'),
				cover: 'img/Jan18.jpg'

			},
			{
				name: "Sketch Book 2017: 'Phil Collin's siting. Part 2",
				number: 18,
				pubdate: new Date('2018', '0', '17'),
				cover: 'img/Jan17a.jpg'
			},
			{
				name: "Sketch Book 2017: 'Phil Collin's siting. Part 1'",
				number: 17,
				pubdate: new Date('2018', '0', '17'),
				cover: 'img/Jan17.jpg'
			},
			{
				name: 'Untitled #1',
				number: 16,
				pubdate: new Date ('2018', '0', '16'),
				cover: 'img/Jan16.jpg'
			},
			{
				name:'Disgruntled Prisoner #3',
				number: 15,
				pubdate: new Date('2018', '0', '15'),
				cover: 'img/Jan15.jpg'
			},
			{
				name:'Salt of the Farm',
				number: 14,
				pubdate: new Date('2018', '0', '14'),
				cover: 'img/Jan14.jpg'
			},
			{
				name: 'Ha-Za!',
				number: 13,
				pubdate: new Date('2018', '0', '13'),
				cover: 'img/Jan13.jpg'
			},
			{
				name: 'Holy Roller',
				number: 12,
				pubdate: new Date('2018', '0', '12'),
				cover: 'img/Jan12.jpg'
			},
			{
				name:'Seinfeld Shirt',
				number: 11,
				pubdate: new Date('2018', '0', '11'),
				cover: 'img/Jan11.jpg'
			},
			{
				name: 'Steve Miller & CNN',
				number: 10,
				pubdate: new Date('2018', '0', '10'),
				cover: 'img/Jan10.jpg'
			},
			{
				name: 'Dr. Thornberry I Persume.',
				number: 9,
				pubdate: new Date('2018', '0', '09'),
				cover: 'img/Jan9.jpg'
			},
			{
				name: 'Patty',
				number: 8,
				pubdate: new Date('2018', '0', '08'),
				cover: 'img/Jan8.jpg'
			},
			{
				name: 'Aerosmith #1',
				number: 7,
				pubdate: new Date('2018', '0', '07'),
				cover: 'img/Jan7.jpg'
			},
			{
				name: 'Old Lady and Her Pot Head',
				number: 6,
				pubdate: new Date('2018', '0', '06'),
				cover: 'img/Jan6.jpg'
			},
			{
				name: 'What',
				number: 5,
				pubdate: new Date('2018', '0', '05'),
				cover: 'img/Jan5.jpg'
			},
			{
				name: 'First Snow Day',
				number: 4,
				pubdate: new Date('2018', '0', '04'),
				cover: 'img/Jan4.jpg'
			},
			{
				name: 'Slayer',
				number: 3,
				pubdate: new Date('2018', '0', '03'),
				cover: 'img/Jan3.jpg'
			},
			{
				name: 'Skeptical Man',
				number: 2,
				pubdate: new Date('2018', '0', '02'),
				cover: 'img/Jan2.jpg'
			},
			{
				name: 'A man and his Roaster.',
				number: 1,
				pubdate: new Date('2018', '0', '01'),
				cover: 'img/Jan1.jpg'
			}

		];
}]);
