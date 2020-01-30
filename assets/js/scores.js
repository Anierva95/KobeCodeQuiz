/**
 * Function to print high scores
 * 
 * @description
 * This function will:
 *  - [ ] Retrieve the high scores
 *  - [ ] Display high scores in descending order
 * 
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @see https://www.w3schools.com/jsref/jsref_sort.asp
 * @see https://www.w3schools.com/jsref/met_node_appendchild.asp
 * @see https://www.w3schools.com/jsref/met_document_createelement.asp
 * 
 
 */
var arrayOfValues = [];
for(var i in localStorage){
    if(localStorage.hasOwnProperty(i)){
        arrayOfValues.push(localStorage[i]);
    }
}

var highScore = document.getElementById('highscores');
function printHighscores() {
  for (var i = 0; i < localStorage.length; i++) {
    hiscore = document.createElement('li');
    hiscore.innerText = localStorage.key(i) + "             " + arrayOfValues[i];
    highScore.append(hiscore);
  }  

  
}


/**
 * Function to clear high scores
 * 
 * @description
 * This function will:
 *  - [x] Clear all the high scores
 *  - [x] Reload the window
 * 
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 */
function clearHighscores() {
  localStorage.clear();
  /*
    @TODO: write the rest of your function code here
  */

  // reload window
  window.location.reload();

}


// user clicks button to clear high scores
document.getElementById("clear").onclick = clearHighscores;

// run function when page loads
printHighscores();
