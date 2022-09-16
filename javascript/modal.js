function Fullview(ImgLink) {
	document.getElementById('FullImage').src = ImgLink;
	document.getElementById('FullImageView').style.display = 'block';
}
function CloseFullView() {
	document.getElementById('FullImageView').style.display = 'none';
}

$(document).ready(function () {
	const modal = document.getElementById('simple-modal');
	const editbtn = document.getElementsByClassName('editbtn')[0];
	var modalOpen = '';

	$('.up-btn').click((event) => {
		console.log(event.currentTarget.id);
		openModal(event.currentTarget.id);
	});

	editbtn.addEventListener('click', editModal);

	function openModal(n) {
		modal.style.display = 'block';
		modalOpen = n;
	}

	function editModal() {
		var titleInput = $('#titleInput')[0].value;
		var commentInput = $('#commentInput')[0].value;
		var titleDisplay = null;
		var commentDisplay = null;
		console.log(modalOpen);
		if (modalOpen == 'modalbtn1') {
			titleDisplay = $('#title1');
			commentDisplay = $('#comment1');
		} else if (modalOpen == 'modalbtn2') {
			titleDisplay = $('#title2');
			commentDisplay = $('#comment2');
		} else if (modalOpen == 'modalbtn3') {
			titleDisplay = $('#title3');
			commentDisplay = $('#comment3');
		} else if (modalOpen == 'modalbtn4') {
			titleDisplay = $('#title4');
			commentDisplay = $('#comment4');
		} else if (modalOpen == 'modalbtn5') {
			titleDisplay = $('#title5');
			commentDisplay = $('#comment5');
		} else if (modalOpen == 'modalbtn6') {
			titleDisplay = $('#title6');
			commentDisplay = $('#comment6');
		} else if (modalOpen == 'modalbtn7') {
			titleDisplay = $('#title7');
			commentDisplay = $('#comment7');
		}

		titleDisplay.html(titleInput);
		commentDisplay.html(commentInput);

		modal.style.display = 'none';
	}
});
