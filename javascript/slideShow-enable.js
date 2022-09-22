/*var imageArray = ["/img/8913468~small.jpg"
, "/img/0700064~orig.jpg"
, "/img/8913467~orig.jpg"
, "/img/0301627~orig.jpg"
, "/img/GSFC_20171208_Archive_e000117~orig.jpg"
, "/img/GSFC_20171208_Archive_e000226~orig.jpg"
, "/img/8913467~orig.jpg"];*/


var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');
console.log(checkboxes + " checkbox variabel");
for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            var id = this.id;
            switchOnId(id);
            
        } else {
            listArray = listArray.filter(e => e !== this.id);
            
        }
    })
}
function switchOnId(id){
    console.log(id + " id för switch");
    const idd = id;
    switch(idd){
        case "check1":
        console.log("img1");
        listArray.push(document.getElementById("img1"));
        
        break;
        
        case "check2":
        listArray.push(document.getElementById("img2"));
        break;
        
        case "check3":
        listArray.push(document.getElementById("img3"));
        break;

        case "check4":
        listArray.push(document.getElementById("img4"));
        break;

        case "check5":
        listArray.push(document.getElementById("img5"));
        break;

        case "check6":
        listArray.push(document.getElementById("img6"));
        break;

        case "check7":
        listArray.push(document.getElementById("img7"));
        break;
        
        case "check8":
        listArray.push(document.getElementById("img8"));
        break;

        case "check9":
        listArray.push(document.getElementById("img9"));
        break;
        
        case "check10":
        listArray.push(document.getElementById("img10"));
        break;
        
        case "check11":
        listArray.push(document.getElementById("img11"));
        break;
        
        case "check12":
        listArray.push(document.getElementById("img12"));
        break;
        
        case "check13":
        listArray.push(document.getElementById("img13"));
        break;
        
        case "check14":
        listArray.push(document.getElementById("img14"));
        break;
        
        case "check15":
        listArray.push(document.getElementById("img15"));
        break;
        
        case "check16":
        listArray.push(document.getElementById("img16"));
        break;
        
        case "check17":
        listArray.push(document.getElementById("img17"));
        break;
        
        case "check18":
        listArray.push(document.getElementById("img18"));
        break;
        
        case "check19":
        listArray.push(document.getElementById("img19"));
        break;
        
        case "check20":
        listArray.push(document.getElementById("img20"));
        break;
        
        case "check21":
        listArray.push(document.getElementById("img21"));
        break;
        
        case "check22":
        listArray.push(document.getElementById("img22"));
        break;
        
        case "check23":
        listArray.push(document.getElementById("img23"));
        break;
        
        case "check24":
        listArray.push(document.getElementById("img24"));
        break;
        
        case "check25":
        listArray.push(document.getElementById("img25"));
        break;
        
        
        default:
            break;   
    } 
}

function showSlideShow(){
    const array = listArray.slice();
    listArray = [];
    console.log(array + " this is an array");
    const slideelement = document.getElementById("slideshow");
    console.log("rad 63");
    let counter = 0;
    let elementCounter = document.querySelectorAll(".mySlides");
    array.forEach(element => {
        console.log(element);
        const imgelement1 = document.createElement("img");
        imgelement1.className = 'mySlides';
        imgelement1.src = element.src;
        console.log(counter);
        if (counter == 0 && elementCounter.length == 0){ 
        imgelement1.style.display = "block";
        }
        else { 
        imgelement1.style.display = "none";
        }
        counter++;
        slideelement.appendChild(imgelement1);
        console.log(counter);
    });
    
}
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
  }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
 
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
/*
function enable(){
    
  <img class="mySlides" src="img_mountains_wide.jpg" style="width:100%">


    const check1 = document.getElementById("check1");
    const check2 = document.getElementById("check2");
    const check3 = document.getElementById("check3");
    const check4 = document.getElementById("check4");
    const check5 = document.getElementById("check5");
    const check6 = document.getElementById("check6");
    const check7 = document.getElementById("check7");
    var btn = document.getElementById("buttonEnable")


    if (check1.checked){
        btn.removeAttribute("disabled")
    } else if (check2.checked){
        btn.removeAttribute("disabled")
    } else if (check3.checked){
        btn.removeAttribute("disabled")
    } else if (check4.checked){
        btn.removeAttribute("disabled")
    } else if (check5.checked){
        btn.removeAttribute("disabled")
    } else if (check6.checked){
        btn.removeAttribute("disabled")
    } else if (check7.checked){
        btn.removeAttribute("disabled")
    } else {
        btn.disabled = "true";
    }
}
*/
