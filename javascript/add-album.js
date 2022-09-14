function newAlbum(){
    
    console.log("Hej hejjjjjjj");

    let divElement = document.createElement("div");
    divElement.className='album-flexbox';
    let imgElement = document.createElement("img");
    imgElement.className='img';
    let buttonElement = document.createElement("button");
    let element = document.getElementById("album-flexbox-holder");
    buttonElement.className='btn', buttonElement.id="btn1";
    buttonElement.onclick = uploadPictureFunction;
    
    imgElement.src = "/img/img7.jpg";
    divElement.appendChild(buttonElement);
    buttonElement.appendChild(imgElement);
    element.appendChild(divElement);
} 