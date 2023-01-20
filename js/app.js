
//~ THE PIKACHU SOUND 

const fu = document.querySelector('#fu');
const pikachu = document.querySelector('#pikachu');
pikachu.innerText = 'pikachu'.toUpperCase();

function pikachuAudio() {
	let audio = new Audio('sounds/Pikachu.mp3');
	audio.play();
}
function fuAudio() {
	let audio = new Audio('sounds/Fakkyu.mp3');
	audio.play();
}



pikachu.addEventListener('click', () => {
	pikachuAudio();
});

// bu.addEventListener('click', () => {
// 	go()
// 	setTimeout(() => {
// 		// location.reload();
// 		location.replace('pickachu.html')
// 	}, 5500)
// });


// ! the words

const words = document.querySelector('.words');
const theInput = document.querySelector('.theInput');

words.innerText = 'a,r,t,e,l' //alert

fu.addEventListener('click', () => {
	if (theInput.value === 'alert') {
		words.innerText = 'o,o,s,b,t'; //boost
		theInput.value = '';
	}
	else if (theInput.value === 'boost') {
		words.innerText = 'r,r,y,a,c'; //carry
		theInput.value = '';
	}
	else if (theInput.value === 'carry') {
		words.innerText = 'c,e,a,n,d'; //dance
		theInput.value = '';
	}
	else if (theInput.value === 'dance') {
		words.innerText = 'r,a,e,y,l'; //early
		theInput.value = '';
	}
	else if (theInput.value === 'early') {
		words.innerText = 'u,l,t,f,a'; //fault
		theInput.value = '';
	}
	else if (theInput.value === 'fault') {
		words.innerText = 'p,p,a,h,y'; //happy
		theInput.value = '';
	}
	else if (theInput.value === 'happy') {
		words.innerText = 'j,e,c,i,u'; //juice
		theInput.value = '';
	}
	else if (theInput.value === 'juice') {
		words.innerText = 'i,g,t,l,t'; //light
		theInput.value = '';
	}
	else if (theInput.value === 'light') {
		words.innerText = 'r,x,e,i,m'; //mixer
		theInput.value = '';
	}
	else if (theInput.value === 'mixer') {
		words.innerText = 'o,n,e,v,l'; //novel
		theInput.value = '';
	}
	else if (theInput.value === 'novel') {
		words.innerText = 'n,s,e,i,o'; //noise
		theInput.value = '';
	}
	else if (theInput.value === 'noise') {
		words.innerText = 's,e,u,o,h'; //house
		theInput.value = '';
	}
	else if (theInput.value === 'house') {
		words.innerText = 'u,n,t,p,i'; //input
		theInput.value = '';
	}
	else if (theInput.value === 'input') {
		words.innerText = 'i,a,n,r,b'; //brain
		theInput.value = '';
	}
	else if (theInput.value === 'brain') {
		words.innerText = 'x,d,n,i,e'; //index
		theInput.value = '';
	}
	else if (theInput.value === 'index') {
		words.innerText = 'the end)))'; //
		theInput.value = '';
	} else {
		fuAudio();
	}

});





function go() {
	words.innerText = '5'

	let timeValue = 4

	function time() {
		words.innerText = timeValue
		timeValue--
	}

	const stopAd = setInterval(time, 1000)
	setTimeout(() => {
		clearInterval(stopAd)
	}, 5000)
}

