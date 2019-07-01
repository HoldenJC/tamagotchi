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

// function statusUpdate() {
//   if (tamagotchi.sick) {

//   }
// }

$(function() {
  addListeners();


});
