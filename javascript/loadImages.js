var albumHolder = document.querySelector('.album-flexbox-holder');

    if(localStorage.length){
    let sizeOfstorage = localStorage.length;
    console.log(sizeOfstorage);
    for(let i = 0; i<sizeOfstorage; i++){
    let divElement = document.createElement("div");
    divElement.className='album-flexbox';
    const image = document.createElement('img');

    image.src = localStorage.getItem(i);
    console.log(image.src);
    divElement.appendChild(image);
    albumHolder.appendChild(divElement);
    }
}
  