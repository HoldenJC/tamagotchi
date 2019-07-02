import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pet } from './backend-code';

let tamagotchi;

export function updateLabels() {
  if (!tamagotchi.dead && !tamagotchi.flee) {
    $("#feedLabel").html(`Food Level<br><span class="statLabels">${tamagotchi.food}</span>`);
    $("#playWithLabel").html(`Happiness Level<br><span class="statLabels">${tamagotchi.play}</span>`);
    $("#restLabel").html(`Energy Level<br><span class="statLabels">${tamagotchi.energy}</span>`);
    $("#bathroomLabel").html(`Potty Satisfaction<br><span class="statLabels">${tamagotchi.potty}</span>`);
    $("#lovePetLabel").html(`Affection level<br><span class="statLabels">${tamagotchi.love}</span>`);
    if (tamagotchi.pooped) {
      $("#feed").hide();
    } else {
      $("#feed").show();
    }
    if (tamagotchi.unhappy) {
      $("#lovePet").hide();
    } else {
      $("#lovePet").show();
    }
    if (tamagotchi.unconscious) {
      $("#feed, #playWith, #rest, #bathroom, #lovePet").hide();
    } else {
      $("#playWith, #rest, #bathroom").show();
      if (!tamagotchi.unhappy) {
        $("#lovePet").show();
      }
      if (!tamagotchi.pooped) {
        $("#feed").show();
      }
    }
    $("#timeElapsed").text(tamagotchi.gameTimeCounter);
    $("#actionCount").text(tamagotchi.actionCounter);
  }
}

function getGIF(action, idNum) {
  if (!tamagotchi.dead && !tamagotchi.flee) {
    let imgNum = Math.floor(Math.random() * 100);
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${action}&limit=100`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function (response) {
        $('#gif' + idNum).show().html(`<img src="${response.data[imgNum].images.fixed_width.url}">`);
        $('#gif' + idNum).delay(1000).fadeOut(500);
      },
      error: function () {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  }
}

function addListeners() {
  $("#startGame").click(function () {
    tamagotchi = new Pet();
    $("#startGame, #gameRules").hide();
    $("#timeArea, #clickCount, #feed, #playWith, #rest, #bathroom, #lovePet, #statusMessages").delay(800).fadeIn();
    tamagotchi.reduceStats();
  });

  $("#feed").click(function () {
    tamagotchi.feed();
    updateLabels();
    getGIF("food", 1);
  });
  $("#playWith").click(function () {
    tamagotchi.playWith();
    updateLabels();
    getGIF("play puppy", 2);
  });
  $("#rest").click(function () {
    tamagotchi.rest();
    updateLabels();
    getGIF("sleep", 3);
  });
  $("#bathroom").click(function () {
    tamagotchi.bathroom();
    updateLabels();
    getGIF("toilet", 4);
  });
  $("#lovePet").click(function () {
    tamagotchi.lovePet();
    updateLabels();
    getGIF("happy dog", 5);
  });
}

export function statusUpdate() {
  if (tamagotchi.sick) {
    $("#sickMessage").text("Oh no!!! Your Tamagotchi is sick :( Stats are decreasing faster.");
  } else {
    $("#sickMessage").empty();
  }
  if (tamagotchi.unconscious) {
    $("#unconsciousMessage").text("Your Tamagotchi has passed out from exhaustion and must recover!");
  } else {
    $("#unconsciousMessage").empty();
  }
  if (tamagotchi.dead) {
    $("#deadMessage").html("Your Tamagotchi starved to death! Oh no!!!<br><br>GAME OVER");
    $("#statusMessages").addClass("deathMsg");
  } else {
    $("#deadMessage").empty();
  }
  if (tamagotchi.pooped) {
    $("#poopedMessage").html(`Oh my! Your Tamagotchi had an accident and pooped itself! No feeding for 3 seconds. Clean up the mess to get back to feeding sooner!`);
    $("#poopedMessage").append(`<button id="cleanUp" type="button" class="btn btn-warning">Clean!</button>`);
    $("#cleanUp").click(function () {
      tamagotchi.cleanUp();

      updateLabels();
    });
  } else {
    $("#poopedMessage").empty();
  }
  if (tamagotchi.flee) {
    $("#fleeMessage").html("Your Tamagotchi felt no love from you and fled to find a new owner! So sad!!<br><br>GAME OVER");
    $("#statusMessages").addClass("fleeMsg");
  } else {
    $("#fleeMessage").empty();
  }
  if (tamagotchi.unhappy) {
    $("#unhappyMessage").text("Your Tamagotchi is unhappy. No love for you until you play with it.");
  } else {
    $("#unhappyMessage").empty();
  }
}

$(function () {
  addListeners();
});