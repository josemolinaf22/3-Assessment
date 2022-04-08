console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form was successfully submitted");
}

const picAlert = () => {
	alert('It seems our duck loves you')
}

let pictureHover = document.querySelector('img');

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

pictureHover.addEventListener('mouseover', picAlert)