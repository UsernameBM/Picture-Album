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
		} else if (modalOpen == 'modalbtn8') {
			titleDisplay = $('#title8');
			commentDisplay = $('#comment8');
		} else if (modalOpen == 'modalbtn9') {
			titleDisplay = $('#title9');
			commentDisplay = $('#comment9');
		} else if (modalOpen == 'modalbtn10') {
			titleDisplay = $('#title10');
			commentDisplay = $('#comment10');
		} else if (modalOpen == 'modalbtn11') {
			titleDisplay = $('#title11');
			commentDisplay = $('#comment11');
		} else if (modalOpen == 'modalbtn12') {
			titleDisplay = $('#title12');
			commentDisplay = $('#comment12');
		} else if (modalOpen == 'modalbtn13') {
			titleDisplay = $('#title13');
			commentDisplay = $('#comment13');
		} else if (modalOpen == 'modalbtn14') {
			titleDisplay = $('#title14');
			commentDisplay = $('#comment14');
		} else if (modalOpen == 'modalbtn15') {
			titleDisplay = $('#title15');
			commentDisplay = $('#comment15');
		} else if (modalOpen == 'modalbtn16') {
			titleDisplay = $('#title16');
			commentDisplay = $('#comment16');
		} else if (modalOpen == 'modalbtn17') {
			titleDisplay = $('#title17');
			commentDisplay = $('#comment17');
		} else if (modalOpen == 'modalbtn18') {
			titleDisplay = $('#title18');
			commentDisplay = $('#comment18');
		} else if (modalOpen == 'modalbtn19') {
			titleDisplay = $('#title19');
			commentDisplay = $('#comment19');
		} else if (modalOpen == 'modalbtn20') {
			titleDisplay = $('#title20');
			commentDisplay = $('#comment20');
		} else if (modalOpen == 'modalbtn21') {
			titleDisplay = $('#title21');
			commentDisplay = $('#comment21');
		} else if (modalOpen == 'modalbtn22') {
			titleDisplay = $('#title22');
			commentDisplay = $('#comment22');
		} else if (modalOpen == 'modalbtn23') {
			titleDisplay = $('#title23');
			commentDisplay = $('#comment23');
		} else if (modalOpen == 'modalbtn24') {
			titleDisplay = $('#title24');
			commentDisplay = $('#comment24');
		} else if (modalOpen == 'modalbtn25') {
			titleDisplay = $('#title25');
			commentDisplay = $('#comment25');
		}

		titleDisplay.html(titleInput);
		commentDisplay.html(commentInput);

		modal.style.display = 'none';
	}
});
