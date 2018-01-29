document.addEventListener("DOMContentLoaded", function() {
	var start = document.getElementById("start-button");
	var container = document.querySelector("#container");
	var cards = document.getElementsByClassName("back-card");
	var cardGrid = document.querySelector("#cardgrid")
	var scroll = document.getElementById("scrollup");
	var colors = ["one", "one", "two", "two", "three", "three", "four", "four", "five", "five", "six", "six", "seven", "seven", "eight", "eight"];
	var cardz = Array.from(cards);
	var win = document.getElementById("win");
	var again = document.getElementById("play-again");
	var wincards = document.querySelectorAll(".column div");
	var count = 0;
	var highscore = document.getElementById("highscore");
	localStorage.setItem("highscore", 100);


	function shuffle(array) {
			var m = array.length, t, j;
			while (m) {
				j = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[j];
				array[j] = t;
			}			
			return array;
	};

	function addColors() {
		for (let v = 0; v < cardz.length; v++) {
			cardz[v].classList.add(colors[v]);
		};
	}

	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}

	start.addEventListener("click", function(event) {
		var top = document.getElementById("top-part");
		top.classList.add("hidden");
		scroll.classList.add("hidden");
		shuffle(colors);
		addColors();


		setTimeout(
			function gameplay() {

			cardGrid.scrollIntoView({behavior: "smooth"});
			cardGrid.classList.remove("hidden");
			container.style.background = "linear-gradient(to top,white,white )";
			var counter = document.createElement('h2');
			counter.classList.add("counter");
			container.appendChild(counter);			
			counter.innerText = count;
			var counterInGame = document.querySelector(".counter");
			var clicked = 0;
			var currentClass;
			var firstCard;
			
			for (let i = 0; i < cards.length; i++) {
				cards[i].addEventListener("click", function(event) {
					if (clicked === 0 && String(event.target.classList).includes("back-card")) {
							clicked++;
							event.target.classList.remove("back-card");
							count++;
							counterInGame.innerText = count;
							currentClass = event.target.className;
							firstCard = event.target;
							return;
					}

					if (clicked === 1) {
						if (String(event.target.classList).includes("back-card")) {
									event.target.classList.remove("back-card");
									clicked++;
									count++;
									counterInGame.innerText = count;
									}
									if (String(event.target.classList).includes(currentClass)) {
										setTimeout( function(event){
											var nonsense = nonsense;
										},500);
										clicked = 0; 
										if(cards.length === 0) {
											localStorage.getItem(highscore);
											highscore.style.visibility = "visibile";
												if (count < highscore) {localStorage.setItem("highscore", count);
													}
												// again.style.visibility = "visible";
												// win.style.visibility = "visible";
												container.style.animation = "winner 5s infinite";
												cardGrid.style.background = "black"
												cardGrid.style.borderRadius = "10px white"
												cardGrid.style.boxShadow = "5px 5px 30px white"
												again.addEventListener("click", function(event) {
												top.scrollIntoView({behavior: "smooth"});
												location.reload();
												});
											}
										return;
									} if (!String(event.target.classList).includes(currentClass)) {
										setTimeout(
											function () {
												event.target.classList.add("back-card");
												firstCard.classList.add("back-card");
												clicked = 0;
												firstCard = 0;
												}
												, 800);

									}
										}
								if (clicked > 2) {
									clicked = 0;
									return;
								}
				});
			};
			}, 1000);
		});
	});

