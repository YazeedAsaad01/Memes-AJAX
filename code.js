const div = document.querySelector('.container');
const footer = document.querySelector('.footer');
const newImage = document.querySelector('.new');
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
        const json = JSON.parse(this.responseText);
        let html = '';
		for(let i = 0; i < json.length; i++) {
            html += `<div><img src="${json[i].image}"></div>`;
        }
        div.innerHTML += html; 
	}
});

newImage.addEventListener("click", function () {
    xhr.open('GET', 'https://programming-memes-images.p.rapidapi.com/v1/memes');
    xhr.setRequestHeader('X-RapidAPI-Key', '1e6e1a7859mshad92a80f23efaf7p16c0cfjsnbd7034d9054b');
    xhr.setRequestHeader('X-RapidAPI-Host', 'programming-memes-images.p.rapidapi.com');
    xhr.send(data);
});

xhr.send(data);
