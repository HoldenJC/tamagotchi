# Tamagotchi

#### _Take care of your little computer animal, Tamagotchi - July 1, 2019_

#### _By **Na Hyung Choi and Holden Clark**_

## Description

Keep your Tamagotchi fed, played with, and well-rested to keep it alive.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **New Tamagotchi starts with max stats** | Start new game | Food: 30<br/>Play: 30<br/>Energy: 30<br/>Potty: 30<br/>Love: 30 |
| **Each stat decreases by 1 every second** | 1 second elapses | Food: 29<br/>Play: 29<br/>Energy: 29<br/>Potty: 29<br/>Love:29 |
| **Feeding, playing with, resting, pottying, or petting Tamagotchi increases corresponding stat by 5** | Feed Tamagotchi (when Food: 20) | Food: 25 |
| **Stats must range from 0 to 30** | Feed Tamagotchi (when Food: 29) | Food: 30 |
| **If total stat count dips below 100, Tamagotchi becomes sick** | N/A | Sick Tamagotchi 🤒 🤧 |
| **If Tamagotchi is sick, each stat decreases by 2 every second** | 1 second elapses (Food: 14) | Food: 12 |
| **If Potty reaches 0, Tamagotchi has an accident and cannot be fed for the next 3 seconds for sanitary reasons** | N/A (Potty: 0) | Feed action unavailable for 5 seconds |
| **User can clean up the accident to be able to feed Tamagotchi again in less than 3 seconds (user can perform clean up more than once)** | Clicks "Clean Up" one time | Feed action unavailable for 2.5 seconds instead of 3 |
| **When Play level reaches 0, Tamagotchi becomes unhappy and unable to be pet until it is played with again** | N/A (Play: 0) | Unhappy Tamagotchi :disappointed: :confounded:; Pet action unavailable |
| **If Energy reaches 0, Tamagotchi passes out; no actions are available for 5 seconds and Energy replenishes to 25** | N/A (Energy: 0) | Dead Tamagotchi :dizzy_face: :skull:|
| **If Food reaches 0, Tamagotchi dies** | N/A (Food: 0) | Dead Tamagotchi :dizzy_face: :skull:|
| **If Love reaches 0, Tamagotchi runs away** | N/A (Love: 0) | Tamagotchi ran away! :broken_heart: :sob: |
| **Displays time elapsed since game began** | N/A (10 seconds elapsed) | Tamagotchi Age: 10 seconds |


## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/schoinh/tamagotchi.git
    ```
2. Install dependencies:
    ```
    $ npm install
    ```
3. Build distribution files:
    ```
    $ npm run build
    ```
4. Open the web page (dist/index.html)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* Jasmine/Karma
* ESLint
* Babel
* webpack
* npm

## Support and contact details

_Please contact Na Hyung and Holden with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi and Holden Clark_**
