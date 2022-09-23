
function newAlbum(){
    
    let divElement = document.createElement("div");
    divElement.className='album-flexbox';
    let imgElement = document.createElement("img");
    imgElement.className='img';
    imgElement.src = "/img/camera.png";
    
    arrayForElements = [];
        
    if(arrayForElements.length){
        console.log("vi kom in");
        arrayForElements.foreach(addElement());
    }
    function addElement(value){
        element.appendChild(value);
    }
    

    let buttonElement = document.createElement("button");
    buttonElement.className = "btn";
    buttonElement.type = "button";
    
    buttonElement.onclick = yourPicHtml;
    function yourPicHtml(){
        window.location.assign("/html/your-pictures.html");
    }
    buttonElement.appendChild(imgElement);
    
    let element = document.getElementById("album-flexbox-holder");
    divElement.appendChild(buttonElement);
    arrayForElements.push(divElement);
    element.appendChild(divElement);
    
} 