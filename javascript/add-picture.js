function uploadPictureFunction(){
    //<input type="file" name="file" id="file"></input>
    
    const selectedFile = document.getElementById('file').files[0];
    document.getElementById("album-flexbox").
    appendChild(`<img class="img" src="${selectedFile.result}" title="${selectedFile.name}"/>`);
    output.innerHTML = "selectedFile";
    const pictureArray = [];
    pictureArray.push("file");
    
    
    //const divPicture = document.createElement("div");
    //divPicture.files = selectedFile;
} 