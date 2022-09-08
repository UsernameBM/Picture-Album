function newAlbum(){
    
    console.log("Hej hejjjjjjj");


    let divElement = document.createElement("div");
    divElement.className='album-flexbox';
    let imgElement = document.createElement("img");
    imgElement.className='img';
    imgElement.src = "/img/ailbhe-flynn-jkZs3Oi9pq0-unsplash.jpg";
    divElement.appendChild(imgElement);
    let element = document.getElementById("album-flexbox-holder");
    element.appendChild(divElement);
    
} 