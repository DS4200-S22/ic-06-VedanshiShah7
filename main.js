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
    // if color
    let color = document.getElementsByClassId('circle_color').style;
    // color.innerHTML = color2; 
    console.log(color);
}