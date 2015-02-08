/* TIC TAC TOE APP */ 

$(document).ready(function() {
	'use strict';

	function TicTacToe() {

		var $c = $(".container"); // selector shorthand

		/* INITIALISE THE GAME */
		$(".win").text("0"); // reset results 
		$(".loose").text("0"); // reset results 
		$(".draw").text("0"); // reset results 
		var computerMark, // 'o' or 'x' for computer
		 	humanMark, // 'o' or 'x' for human
		 	lastMovement; // last movement was made by 'human' or 'pc'
		/* */

		/* 'SETTINGS' PANE */
		$(".wrapper-1").hide();
		$(".settings").on("click", function() {
			$(".wrapper-1").slideToggle(700);
		})
		/* */

		try { 
			startGame();
		}
		catch(e) {
			alert("Wystąpił błąd: " + e.message);
		}

		function startGame() {

			lastMovement = null;
			$(":radio").off("change"); // remove event handler to avoid memory leaks!

			$c.text(""); // clean up containers

			if ($(".cross-mark-human").is(":checked")) {
				computerMark = "o";
				humanMark = "x";
			}
			else if ($(".circle-mark-human").is(":checked")) {
				computerMark = "x";
				humanMark = "o";
			}

			if ($(".first-move-pc").is(":checked")) { // PC moves first
				try { 
					computerMove();
				}
				catch(e) {
					alert("Wystąpił błąd: " + e.message);
				}
			}
			else if ($(".first-move-human").is(":checked")) { // Human moves first
				try { 
					humanMove();
				}
				catch(e) {
					alert("Wystąpił błąd: " + e.message);
				}
			}
		}
		
		function humanMove() { // human makes move
			$c.on("click", function(e) {
				if ($(this).text() == "") {
					$(this).off("click");
					e.stopImmediatePropagation();
					$(this).text(humanMark);
					
					lastMovement = "human";
					try { 
						checkGameStatus();
					}
					catch(e) {
						alert("Wystąpił błąd: " + e.message);
					}
				}	
				else {
					$(this).fadeTo(500, .4).fadeTo(500, 1);
					e.stopImmediatePropagation();
				}	
			});

			$(".new-game").on("click", function(e) { // start new game
				$(".new-game").off("click");
				e.stopImmediatePropagation();
				startGame();
			});

			$(":radio").on("change", startGame);
		}

		function computerMove() { // PC makes move

			lastMovement = "pc";

			if ($c.eq(0).text() == "" && $c.eq(1).text() == humanMark && $c.eq(2).text() == humanMark) { // smart move 1
				$c.eq(0).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == humanMark && $c.eq(1).text() == "" && $c.eq(2).text() == humanMark) { // smart move 2
				$c.eq(1).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == humanMark && $c.eq(1).text() == humanMark && $c.eq(2).text() == "") { // smart move 3
				$c.eq(2).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(3).text() == "" && $c.eq(4).text() == humanMark && $c.eq(5).text() == humanMark) { // smart move 4
				$c.eq(3).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(3).text() == humanMark && $c.eq(4).text() == "" && $c.eq(5).text() == humanMark) { // smart move 5
				$c.eq(4).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(3).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(5).text() == "") { // smart move 6
				$c.eq(5).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(6).text() == "" && $c.eq(7).text() == humanMark && $c.eq(8).text() == humanMark) { // smart mark 7
				$c.eq(6).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(6).text() == humanMark && $c.eq(7).text() == "" && $c.eq(8).text() == humanMark) { // smart move 8
				$c.eq(7).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(6).text() == humanMark && $c.eq(7).text() == humanMark && $c.eq(8).text() == "") { // smart move 9
				$c.eq(8).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == "" && $c.eq(3).text() == humanMark && $c.eq(6).text() == humanMark) { // smart mark 10
				$c.eq(0).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == humanMark && $c.eq(3).text() == "" && $c.eq(6).text() == humanMark) { // smart move 11
				$c.eq(3).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == humanMark && $c.eq(3).text() == humanMark && $c.eq(6).text() == "") { // smart move 12
				$c.eq(6).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(1).text() == "" && $c.eq(4).text() == humanMark && $c.eq(7).text() == humanMark) { // smart move 13
				$c.eq(1).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(1).text() == humanMark && $c.eq(4).text() == "" && $c.eq(7).text() == humanMark) { // smart move 14
				$c.eq(4).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(1).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(7).text() == "") { // smart move 15
				$c.eq(7).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(2).text() == "" && $c.eq(5).text() == humanMark && $c.eq(8).text() == humanMark) { // smart move 16
				$c.eq(2).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(2).text() == humanMark && $c.eq(5).text() == "" && $c.eq(8).text() == humanMark) { // smart move 17
				$c.eq(5).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(2).text() == humanMark && $c.eq(5).text() == humanMark && $c.eq(8).text() == "") { // smart move 18
				$c.eq(8).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == "" && $c.eq(4).text() == humanMark && $c.eq(8).text() == humanMark) { // smart move 19
				$c.eq(0).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == humanMark && $c.eq(4).text() == "" && $c.eq(8).text() == humanMark) { // smart move 20
				$c.eq(4).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(0).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(8).text() == "") { // smart move 21
				$c.eq(8).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(2).text() == "" && $c.eq(4).text() == humanMark && $c.eq(6).text() == humanMark) { // smart move 22
				$c.eq(2).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(2).text() == humanMark && $c.eq(4).text() == "" && $c.eq(6).text() == humanMark) { // smart move 23
				$c.eq(4).text(computerMark);
				checkGameStatus();
					return;
			}
			else if ($c.eq(2).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(6).text() == "") { // smart move 24
				$c.eq(6).text(computerMark);
				checkGameStatus();
					return;
			}
			else { // random move
				var random = Math.floor(Math.random() * 9);

				if ($c.eq(random).text() == "") {
					$c.eq(random).text(computerMark);
					checkGameStatus();
					return;
				}
				else {
					computerMove(); // safe from infinite loop beceause of checkGameStatus()
				}
			}
		}

		function checkGameStatus() { // after EACH movement check status of the game

			if (($c.eq(0).text() == humanMark && $c.eq(1).text() == humanMark && $c.eq(2).text() == humanMark) ||
				($c.eq(3).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(5).text() == humanMark) ||
				($c.eq(6).text() == humanMark && $c.eq(7).text() == humanMark && $c.eq(8).text() == humanMark) || 
				($c.eq(0).text() == humanMark && $c.eq(3).text() == humanMark && $c.eq(6).text() == humanMark) || 
				($c.eq(1).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(7).text() == humanMark) ||
				($c.eq(2).text() == humanMark && $c.eq(5).text() == humanMark && $c.eq(8).text() == humanMark) ||
				($c.eq(0).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(8).text() == humanMark) ||
				($c.eq(2).text() == humanMark && $c.eq(4).text() == humanMark && $c.eq(6).text() == humanMark)) {
				finishGame(1); // human wins!
				return;
			}
			if (($c.eq(0).text() == computerMark && $c.eq(1).text() == computerMark && $c.eq(2).text() == computerMark) ||
				($c.eq(3).text() == computerMark && $c.eq(4).text() == computerMark && $c.eq(5).text() == computerMark) ||
				($c.eq(6).text() == computerMark && $c.eq(7).text() == computerMark && $c.eq(8).text() == computerMark) || 
				($c.eq(0).text() == computerMark && $c.eq(3).text() == computerMark && $c.eq(6).text() == computerMark) || 
				($c.eq(1).text() == computerMark && $c.eq(4).text() == computerMark && $c.eq(7).text() == computerMark) ||
				($c.eq(2).text() == computerMark && $c.eq(5).text() == computerMark && $c.eq(8).text() == computerMark) ||
				($c.eq(0).text() == computerMark && $c.eq(4).text() == computerMark && $c.eq(8).text() == computerMark) ||
				($c.eq(2).text() == computerMark && $c.eq(4).text() == computerMark && $c.eq(6).text() == computerMark)) {
				finishGame(2); // computer wins!
				return;
			}
		
			else { // no winner yet!

				for (var i = 0; i < $c.length; i++) { // check if there are empty containers
					if ($c.eq(i).text() == "") {
						break; // there is at least 1 empty container, co let's play
					}
					else if (i == 8 && $c.eq(i).text() != "") { // no more empty containers!
						try { 
							finishGame(0); // draw
						}
						catch(e){
							alert("Wystąpił błąd: " + e.message);
						}
						return;
					}
				}
	
				if (lastMovement == "human") {
					computerMove();
				}
				else if (lastMovement == "pc"){
					humanMove();
				}
			}
		}

		function finishGame(winner) { // when it's not possible to perform another movement, finish the game

			switch (winner) { // refresh counters
				case 0: $(".draw").text(Number($(".tie").text()) + 1); // draw
				break;
				case 1: $(".win").text(Number($(".win").text()) + 1); // human won
				break;
				case 2: $(".loose").text(Number($(".loose").text()) + 1); // computer won
				break;
			}

			$c.off("click"); // detach event handler to disable next movements
		}
	}; // the end of TicTacToe

	TicTacToe();
});