var albumHolder = document.querySelector('.album-flexbox-holder');
var string = [];

    if(localStorage.getItem('pictures') !== null){

    let urlString = localStorage.getItem('pictures');
    if(urlString.includes("-")){
    string = urlString.split("-");
    } else string[0] = urlString;
    let counter = 0;

    for(let i = 0; i<string.length; i++){
    let divElement = document.createElement("div");
    divElement.className='album-flexbox';
    const image = document.createElement('img');
    image.src = string[counter];
    console.log(image.src);
    divElement.appendChild(image);
    albumHolder.appendChild(divElement);
    counter++;
    }
}
  