var valueList = document.getElementById('valueList');
var listArray = [];

listArray[0] = new Image();
listArray[0].src = '/img/8913468~small.jpg';

listArray[1] = new Image();
listArray[1].src = '/img/0700064~orig.jpg';

console.log(listArray);
/*
"/img/8913468~small.jpg"
, "/img/0700064~orig.jpg"
, "/img/8913467~orig.jpg"
, "/img/0301627~orig.jpg"
, "/img/GSFC_20171208_Archive_e000117~orig.jpg"
, "/img/GSFC_20171208_Archive_e000226~orig.jpg"
, "/img/8913467~orig.jpg"
*/
/*var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            listArray.push(this.value);
            
        } else {
            listArray = listArray.filter(e => e !== this.value);
            
        }
    }) */

    function nextImage(buttonEnable){
        var list = document.getElementById(buttonEnable);

        for (var i = 0; i < listArray.length; i++) {
            if(listArray[i].src == list.src){
                if(i == listArray.length){
                    document.getElementById(buttonEnable).src = listArray[0].src;
                    break;
                }
                document.getElementById(buttonEnable).src = listArray[i+1].src;
                break;
            }
        }
    }

function showInFullscreen(){

}
function slideShowView(){
    document.slide.src = Image [i];
}
function imgArrayfunction(){

}

/*
"/img/8913468~small.jpg"
, "/img/0700064~orig.jpg"
, "/img/8913467~orig.jpg"
, "/img/0301627~orig.jpg"
, "/img/GSFC_20171208_Archive_e000117~orig.jpg"
, "/img/GSFC_20171208_Archive_e000226~orig.jpg"
, "/img/8913467~orig.jpg"
*/
/*var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes){
    checkbox.addEventListener('click', function(){
        if(this.checked == true){
            listArray.push(this.value);
            
        } else {
            listArray = listArray.filter(e => e !== this.value);
            
        }
    }) */