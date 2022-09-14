function Fullview(ImgLink){
    document.getElementById("FullImage").src = ImgLink;
    document.getElementById("FullImageView").style.display= "block";
}
function CloseFullView(){
    document.getElementById("FullImageView").style.display = "none";
}




$(document).ready(function () {
    const modalbtn = document.getElementById('modalbtn');
    const modal = document.getElementById('simple-modal');
    const editbtn = document.getElementsByClassName('editbtn')[0];

    modalbtn.addEventListener('click', openModal);
    editbtn.addEventListener('click', editModal);

    function openModal() {
        modal.style.display = 'block';
    }

    function editModal() {
        const titleInput = $('#Input1')[0].value;
        const titleDisplay = $('#title');
        titleDisplay.html(titleInput);

        //

        const commentInput = $('#Textarea1')[0].value;
        const commentDisplay = $('#comments');
        commentDisplay.html(commentInput);

        modal.style.display = 'none';
    }
    //
});