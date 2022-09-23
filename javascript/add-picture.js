var input = document.querySelector('input');
var albumHolder = document.querySelector('.album-flexbox-holder');
var stringFile = "";
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
     
      counter = 0;
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
        stringFile += image.src;
        console.log(stringFile);
        let name = file.name;
        setStorage(stringFile);
        divElement.appendChild(image);
        divElement.appendChild(paragraph);
        albumHolder.appendChild(divElement);
        
        };
        counter++;
      }
      
    }
  }
  function setStorage(string){
    if(localStorage.getItem('pictures') != null){
    let sumString = localStorage.getItem('pictures');
    sumString += "-"+string;
    localStorage.setItem('pictures', sumString);
    }else localStorage.setItem('pictures', string);
  }
  async function saveImg(imageSrc){
    fetch('/save', {
      method:'POST',
      headers: {'Accept': 'image/png, image/jpeg'},
      body: imageSrc
    })
    .then((res) => res)
    .then((data) => console.log(data))
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