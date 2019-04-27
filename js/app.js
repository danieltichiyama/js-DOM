/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift
Find the div with the id of "name1" and replace the n/a with the following:
Tay-Tay*/

var nameOne = document.getElementById ('name1');
nameOne.innerHTML = 'Tay Tay';


/*2. DJ Khaled
Find the div with the id of "position2" and replace the n/a with the following: 
Project Manager*/

var positionTwo = document.getElementById ('position2');
positionTwo.innerHTML = 'Project Manager';


/*3. Piko Taro
Find the div with the id of "alias3" and replace the n/a with the following:
Concatenation*/

document.getElementById ('alias3').innerHTML = 'Concatenation';

/*4. Prince
Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var profile = 
document.getElementsByClassName ('profile');

profile[0].innerHTML = 'Act your age, mama (not your shoe size)';

/*5. Bruce Lee
Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

profile[1].innerHTML = "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend."

/*6. Samuel L Jackson
Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var alias = document.getElementsByClassName ('alias');
alias[2].innerHTML = 'Nick Fury';

/*7. David Ige
Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".
Append this div element to the nameParent div*/

var newDiv = document.createElement ('div');
newDiv.id='name7';
newDiv.innerHTML = 'David Ige';

nameParent.appendChild (newDiv);
 
/*8. The Dos Equis Dude
Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".
Append this div element to the aliasParent div.*/

var newDiv2 = document.createElement ('div');
newDiv2.id ='alias8';
newDiv2.innerHTML = 'Stay Thirsty MyFriends';

aliasParent.appendChild (newDiv2);

// Final Boss
// 9. Create your own profile


var newImg = 'https://snworksceo.imgix.net/upb/7c7afbda-ca81-492d-ac6a-296c0eefe795.sized-1000x1000.jpg?w=1000';

var newProfileImg = document.getElementsByClassName ('block3 col-sm-4');


newProfileImg[2].querySelector('img').src = 'https://snworksceo.imgix.net/upb/7c7afbda-ca81-492d-ac6a-296c0eefe795.sized-1000x1000.jpg?w=1000';

// 	"<img src = 'https://snworksceo.imgix.net/upb/7c7afbda-ca81-492d-ac6a-296c0eefe795.sized-1000x1000.jpg?w=1000' alt=''></img>";

// can I make it so that the innerHTML points to another variable that contains an img


