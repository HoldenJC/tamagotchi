import { updateLabels, statusUpdate } from './main';

export class Pet {
  constructor(){
    this.food = 30;
    this.play = 30;
    this.energy = 30;
    this.potty = 30;
    this.love = 30;
    this.sick = false;
    this.pooped = false;
    this.unhappy = false;
    this.unconscious = false;
    this.dead = false;
    this.flee = false;
    this.poopedCounter = 0;
  }

  reduceStats(){
    let interval = setInterval(() => {
      updateLabels();
      if(this.dead || this.flee){
        clearInterval(interval);
        return;
      }
      if(this.sick === true){
        this.food -= 2;
        this.play -= 2;
        this.energy -= 2;
        this.potty -= 2;
        this.love -= 2;
        if(this.unconscious === true){
          this.energy += 7;
        }
      } else {
        this.food--;
        this.play--;
        this.energy--;
        this.potty--;
        this.love--;
        if(this.unconscious === true){
          this.energy += 6;
        }
      }
      if (this.food < 0) {
        this.food = 0;
      }
      if (this.play < 0) {
        this.play = 0;
      }
      if (this.energy < 0) {
        this.energy = 0;
      }
      if (this.potty < 0) {
        this.potty = 0;
      }
      if (this.love < 0) {
        this.love = 0;
      }
      this.checkStatus();
      if (this.pooped === true) {
        this.poopedCounter++;
        console.log(this.poopedCounter);
      }
      if (this.poopedCounter >= 10) {
        this.pooped = false;
        this.poopedCounter = 0;
      }
      statusUpdate();
    }, 1000);
  }

  feed(){
    if(this.food <= 25){
      this.food += 5;
    } else {
      this.food = 30;
    }
    this.checkStatus();
  }
  playWith(){
    if(this.play <= 25){
      this.play += 5;
    } else {
      this.play = 30;
    }
    this.checkStatus();
  }
  rest(){
    if(this.energy <= 25){
      this.energy += 5;
    } else {
      this.energy = 30;
    }
    this.checkStatus();
  }
  bathroom(){
    if(this.potty <= 25){
      this.potty += 5;
    } else {
      this.potty = 30;
    }
    this.checkStatus();
  }
  lovePet(){
    if(this.love <= 25){
      this.love += 5;
    } else {
      this.love = 30;
    }
    this.checkStatus();
  }
  cleanUp(){
    this.poopedCounter += 0.5;
    console.log(this.poopedCounter);
    this.checkStatus();
  }

  checkStatus(){
    if(this.food === 0){
      updateLabels();
      this.dead = true;
    } else if(this.love === 0){
      // updateLabels();
      this.flee = true;
    } else {
      if((this.food + this.play + this.energy + this.potty + this.love) < 100){
        this.sick = true;
      } else {
        this.sick = false;
      }
  
      if(this.potty === 0) {
        this.pooped = true;
        this.potty = 30;
      } 
  
      if(this.play === 0) {
        this.unhappy = true;
      } else {
        this.unhappy = false;
      }
  
      if(this.energy === 0){
        this.unconscious = true;
      } else if (this.unconscious === true && this.energy === 25) {
        this.unconscious = false;
      }
    }
  }
}
