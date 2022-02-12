/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    randNum = Math.random();
    let newRandNum = 'Your new random number is: ' + randNum + '!';
    let randomNum = document.getElementById('random_num');
    randomNum.innerHTML = newRandNum;
    console.log("Button 1 was clicked"); 
}

function button2Clicked() {
    let curr_color = document.getElementById("c").getAttribute("class"); 
    if (curr_color == "blue") {
        document.getElementById("c").setAttribute("class", "green"); 
    } else {
        document.getElementById("c").setAttribute("class", "blue"); 
    }
}