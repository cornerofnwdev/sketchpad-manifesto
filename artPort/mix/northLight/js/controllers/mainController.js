app.controller('mainController', ['$scope', 
	function($scope){
		$scope.paintings = [
			{
				name: "Day 1",
				blurb: "The first day of painting after the primer was laid was exciting and dove right in with a few characters.  The earlier days I didn't leave much space around characters for other images.",
				image: "img/mural1.jpg",
				pubdate: new Date('2018', '4', '23')
			},
			{
				name: "Day 2",
				blurb: 'By the end of day two I started realizing I had to make the characters lower to leave space for backgrounds and other characters.',
				image: 'img/mural2.jpg',
				pubdate: new Date('2018', '4', '24')
			},
			{
				name: "Day 2",
				blurb: 'Closer look at three charcters',
				image: 'img/mural2a.jpg',
				pubdate: new Date('2018', '4', '24')

			},
			{
				name: "Day 2",
				blurb: "Three additional charcters",
				image: 'img/mural2b.jpg',
				pubdate: new Date('2018', '4', '24')
			},
			{
				name: "Day 3",
				blurb: 'Added Pigeons and first instance of multi layered characters. From this point characters start to become smaller.',
				image: 'img/mural3.jpg',
				pubdate: new Date('2018', '4', '26')
			},
			{
				name: "Day 3",
				blurb: 'Picture from across the street in a church parkinglot.',
				image: 'img/mural3a.jpg',
				pubdate: new Date('2018', '4', '26')
			},
			{
				name: "Day 3",
				blurb: "Close up of main piegon and old man.",
				image: 'img/mural3b.jpg',
				pubdate: new Date('2018', '4', '26')
			},
			{
				name: "Day 4",
				blurb: 'Continue characters and reach the end of section one.',
				image: 'img/mural4.jpg',
				pubdate: new Date('2018', '4', '28')
			},
			{
				name: "Day 5",
				blurb: 'Details with donuts and sunflowers',
				image:'img/mural5.jpg',
				pubdate: new Date('2018', '4', '30')
			}, 
			{
				name: "Day 5",
				blurb: "Close up on detailed pigeons and old man",
				image: 'img/mural5a.jpg'
			}, 
			{
				name: "Day 6",
				blurb: 'Added detail to sunflowers and pigeons',
				image: 'img/mural6.jpg',
				pubdate: new Date('2018', '5', '5')
			},
			{
				name: "Day 6",
				blurb: 'Added detail to donuts',
				image: 'img/mural6a.jpg',
				pubdate: new Date('2018', '5', '5')
			},
			{
				name: "Day 7",
				blurb: 'At this point people of the community started stopping by to say hello.  One person was Pat, owner of River City Outpost in Manayunk. He specifically requested squirrels, so I painted squirrels and Jason Kelce.',
				image: 'img/mural7.jpg',
				pubdate: new Date('2018', '5', '7')
			},
			{
				name: "Day 7",
				blurb: 'Picture from across the street in church parking lot',
				image: 'img/mural7a.jpg',
				pubdate: new Date('2018', '5', '7')
			},
			{
				name: "Day 8",
				blurb: 'Added clouds, rolling hills with pine trees, and two new charcters.  These new characters are based on my good friend Justin and his friend Johnny.',
				image: 'img/mural8.jpg',
				pubdate: new Date('2018', '5', '8')
			},
			{
				name: "Day 9",
				blurb: 'Picture from across the street in the church parking lot. Detailing previous two charactesr and adding three more including the creature from the Schuyhkill Lagoon',
				image: 'img/mural9.jpg',
				pubdate: new Date('2018', '5', '10')
			},
			{
				name: "Day 10",
				blurb: 'Added detail to the creature and other charactes with buildings in background and the start of the lagoon.  In addition the mummy made an appearence.',
				image: 'img/mural10.jpg',
				pubdate: new Date('2018', '5', '12')

			},
			{
				name: "Day 11",
				blurb: 'Added detail to lagoon, buildings, and characters. In this picture you can see part of another small project at the community center with parking poles. Also the ledge has become to high off the ground to continue painting without ladders. Next I start the section closest to the entrance',
				image: 'img/mural11.jpg',
				pubdate: new Date('2018', '5', '18')
			},
			{
				name: "Day 12",
				blurb: 'Started bookshelf that caddy corners steps and wall.  Also four new characters including my cat Cruton!  Check out more Cruton art in Paintings',
				image: 'img/mural12.jpg',
				pubdate: new Date('2018', '5', '20')
			},
			{
				name: "Day 13",
				blurb: 'Added isle for the pizzas and detail to all characters.',
				image: 'img/mural13.jpg',
				pubdate: new Date('2018', '5', '27')
			},
			{
				name: "Day 13",
				blurb: 'Bookshelf, pencil, Isle of Pizza',
				image: 'img/mural13a.jpg',
				pubdate: new Date('2018', '5', '27')
			},
			{
				name: "Day 14",
				blurb: 'Added two new characters, detail to the Isle of Pizza, North Light Stars, and soon to come the Death Star!',
				image: 'img/mural14.jpg',
				pubdate: new Date ('2018', '6', '5')
			},
			{
				name: "Day 14",
				blurb: 'Getting close to connecting sections one and three, weather permitting it should take two days to complete.',
				image: 'img/mural14a.jpg',
				pubdate: new Date('2018', '6', '5')
			},
			{
				name: "Day 14",
				blurb: 'View from church parking lot across the street.',
				image: 'img/mural14b.jpg',
				pubdate: new Date('2018', '6', '5')
			},
			{
				name: "Day 15",
				blurb: 'Added dog in suit, mountains, flowers, bees, and detail to all other characters up to Ben Franklin.',
				image: 'img/mural15.jpg',
				pubdate: new Date('2018', '6', '6')
			},
			{
				name: "Day 15",
				blurb: "At this point I ran into an issue.  When I started the latest face I found a bubble under the paint.  For this I'll have to pop, scrape, sand, and reprimer/paint section.",
				image: 'img/mural15a.jpg',
				pubdate: new Date('2018', '6', '6')
			},
			{
				name: "Day 16",
				blurb: "Added detail, mountains, and more bees.",
				image: 'img/mural16.jpg',
				pubdate: new Date('2018', '6', '7')
			}

		];
	}]);