var input = document.querySelector('input');
var albumHolder = document.querySelector('.album-flexbox-holder');

//input.style.opacity = 0;
input.addEventListener('change', createPictureList);


function createPictureList() {
    
  //  while(albumHolder.firstChild) {
  //    albumHolder.removeChild(albumHolder.firstChild);
  //  }
  
    const currentFiles = input.files;
    if (currentFiles.length === 0) {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'No files currently selected for upload';
      albumHolder.appendChild(paragraph);
    } else {
     
      let counter = localStorage.length;
      console.log(counter);

      for (const file of currentFiles) {
        const reader = new FileReader();
        let divElement = document.createElement("div");
        divElement.className='album-flexbox';
        const paragraph = document.createElement('p');
        
        paragraph.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
        const image = document.createElement('img');

        reader.readAsDataURL(file);
        reader.onloadend = () => {
        image.src = reader.result; 
        localStorage.setItem(counter, reader.result); 
        counter++;
        divElement.appendChild(image);
        divElement.appendChild(paragraph);
        albumHolder.appendChild(divElement);
        };
      }
    }
  }
  function returnFileSize(number) {
    if(number < 1024) {
      return number + 'bytes';
    } else if(number > 1024 && number < 1048576) {
      return (number/1024).toFixed(1) + 'KB';
    } else if(number > 1048576) {
      return (number/1048576).toFixed(1) + 'MB';
    }
  }