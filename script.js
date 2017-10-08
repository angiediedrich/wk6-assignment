//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt,
    i = 0,
    oldestSpeechYear = speechesArray[0].year,
    mostRecentSpeechYear = speechesArray[0].year;

//Code for the WHILE loop cycling through speech authors
    while (i < speechesArray.length) {
      console.log ("This speech is written by " + speechesArray[i].author);
      i+=1;
    };

//FOR loop most recent speech vs. oldest speech
  for(i = 0; i < speechesArray.length; i++) {
    if(speechesArray[i].year < oldestSpeechYear) {
      oldestSpeechYear = speechesArray[i].year;
  } else if (speechesArray[i].year > mostRecentSpeechYear) {
    mostRecentSpeechYear = speechesArray[i].year;
  };
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  //FOR loop for Donate Button
  for(i = 0; i < speechesArray.length; i++) {
    if(favoriteSpeechPrompt === speechesArray[i].author) {
      console.log (
        speechesArray[i].author + " was " + 
        speechesArray[i].authorAge + " during this speech.");
    };
  };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

//IF-ELSE statement to compare speech to oldest and most recent speeches
  if(speechesArray[0].year <= oldestSpeechYear) {
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[0].year >= mostRecentSpeechYear){
    console.log('This is the most recent speech on the page.');
  }else{
    console.log ("This speech occurred in the time between the oldest and most recent speech on this site.")
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

//IF-ELSE statement to compare speech to oldest and most recent speeches
  if(speechesArray[1].year <= oldestSpeechYear) {
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[1].year >= mostRecentSpeechYear){
    console.log('This is the most recent speech on the page.');
  }else{
    console.log ("This speech occurred in the time between the oldest and most recent speech on this site.")
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }
  
//IF-ELSE statement to compare speech to oldest and most recent speeches
  if(speechesArray[2].year <= oldestSpeechYear) {
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[2].year >= mostRecentSpeechYear){
    console.log('This is the most recent speech on the page.');
  }else{
    console.log ("This speech occurred in the time between the oldest and most recent speech on this site.")
  }
});

if(typeof userNamePrompt === 'string' && userNamePrompt !== ''){
  console.log('Hi ' + userNamePrompt + '!');
}else{
  console.log('Ok, I\'ll just call you User.');
  userNamePrompt = 'User';
}