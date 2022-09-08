
function newAlbum(){
    
    console.log("Hej hejjjjjjj");


    let divElement = document.createElement("div");
    divElement.className='album-flexbox';
    let imgElement = document.createElement("img");
    imgElement.className='img';
    let buttonElement = document.createElement("button");
    //let bodyElement = document.getElementById("body");
    let element = document.getElementById("album-flexbox-holder");
    buttonElement.className='btn', buttonElement.id="btn1";
    buttonElement.onclick = uploadPictureFunction;
    
    imgElement.src = "/img/img7.jpg";
    divElement.appendChild(buttonElement);
    buttonElement.appendChild(imgElement);
    //let scriptElement = document.createElement("script");
    //scriptElement.setAttribute("src", "/javascript/add-picture.js");
    //scriptElement.setAttribute("async", "false");
    /*scriptElement.addEventListener("load", eventHandler(), false);
    function eventHandler(){
        uploadPictureFunction();
    }
    */
    //bodyElement.appendChild(scriptElement);

    
    //let head = document.getElementById("head");
    //head.insertBefore(scriptElement, head.firstElementChild);
    element.appendChild(divElement);

    

} 