/*var imageArray = ["/img/8913468~small.jpg"
, "/img/0700064~orig.jpg"
, "/img/8913467~orig.jpg"
, "/img/0301627~orig.jpg"
, "/img/GSFC_20171208_Archive_e000117~orig.jpg"
, "/img/GSFC_20171208_Archive_e000226~orig.jpg"
, "/img/8913467~orig.jpg"];*/
function enable(){
    
    var check = document.getElementById("check");
    const check1 = document.getElementById("check1");
    const check2 = document.getElementById("check2");
    const check3 = document.getElementById("check3");
    const check4 = document.getElementById("check4");
    const check5 = document.getElementById("check5");
    const check6 = document.getElementById("check6");
    var btn = document.getElementById("buttonEnable")
    
    if (check.checked){
        btn.removeAttribute("disabled")
        
    } else if (check1.checked){
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
    } else {
        btn.disabled = "true";
    }
}
