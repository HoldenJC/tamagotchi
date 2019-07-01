import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pet } from './backend-code';

let tamagotchi;

export function updateLabels(){
  if (!tamagotchi.dead) {
    $("#feedLabel").html(`Food Level: ${tamagotchi.food}`);
    $("#playWithLabel").html(`Happiness Level: ${tamagotchi.play}`);
    $("#restLabel").html(`Energy Level: ${tamagotchi.energy}`);
    $("#bathroomLabel").html(`Potty Satisfaction: ${tamagotchi.potty}`);
    $("#lovePetLabel").html(`Pet's affection level: ${tamagotchi.love}`);
    if(tamagotchi.dead === true){
      $("button").hide();
    }
  }
}

function addListeners() {
  $("#startGame").click(function(){
    tamagotchi = new Pet();
    $("#startGame").hide();
    $("#feed, #playWith, #rest, #bathroom, #lovePet").show();
    tamagotchi.reduceStats();
  });

  $("#feed").click(function(){
    tamagotchi.feed();
    updateLabels();
  });
  $("#playWith").click(function(){
    tamagotchi.playWith();
    updateLabels();
  });
  $("#rest").click(function(){
    tamagotchi.rest();
    updateLabels();
  });
  $("#bathroom").click(function(){
    tamagotchi.bathroom();
    updateLabels();
  });
  $("#lovePet").click(function(){
    tamagotchi.lovePet();
    updateLabels();
  });
}

export function statusUpdate() {
  if (tamagotchi.sick) {
    $("#sickMessage").text("Oh no!!! Your Tamagotchi is sick :(");
  } else {
    $("#sickMessage").empty();
  }
  if (tamagotchi.unconscious) {
    $("#unconsciousMessage").text("Your Tamagotchi has passed out from exhaustion and must recover!");
  } else {
    $("#unconsciousMessage").empty();
  }
  if (tamagotchi.dead) {
    $("#deadMessage").text("Your Tamagotchi is dead! Oh no!!!");
  } else {
    $("#deadMessage").empty();
  }
  if (tamagotchi.pooped) {
    $("#poopedMessage").text("Oh my! Your Tamagotchi had an accident and pooped itself!");
  } else {
    $("#poopedMessage").empty();
  }
  if (tamagotchi.flee) {
    $("#fleeMessage").text("Your Tamagotchi felt no love from you and fleed to find a new owner! So sad!!");
  } else {
    $("#fleeMessage").empty();
  }
  if (tamagotchi.unhappy) {
    $("#unhappyMessage").text("Your Tamagotchi is unhappy. No love for you for 5 seconds.");
  } else {
    $("#unhappyMessage").empty();
  }
}

$(function() {
  addListeners();


});
