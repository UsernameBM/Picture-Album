function Fullview(ImgLink) {
	// Hitta ID för titel, kommentar och betyg som jag behöver för att visa på hela bilden
	//let num = ImgLink.id.slice(-1);
	let num = ImgLink.id;
	let titleId = 'title' + num;
	let commentId = 'comment' + num;
	let rateId = 'rate' + num;

	let checkboxes = document.querySelectorAll('.checkbox');
	for(let checkbox of checkboxes){
    checkbox.style.visibility = 'hidden';
	}
	// Ställa in titel, kommentar och betyg för full bildvy
	$('#full-title').html($('#' + titleId)[0].innerHTML);
	$('#full-comment').html($('#' + commentId)[0].innerHTML);
	if (document.querySelector('input[name=' + rateId + ']:checked')) {
		let rateSelected = document.querySelector(
			'input[name=' + rateId + ']:checked'
		).value;
		document.getElementById('star0' + rateSelected).checked = true;
	}

	document.getElementById('FullImage').src = ImgLink.src;
	document.getElementById('FullImageView').style.display = 'block';
}
function CloseFullView() {
	document.getElementById('FullImageView').style.display = 'none';
	let checkboxes = document.querySelectorAll('.checkbox');
	for(let checkbox of checkboxes){
		checkbox.style.visibility = 'visible';
	}
}
$(document).ready(function () {
	const modal = document.getElementById('simple-modal');
	const editbtn = document.getElementsByClassName('editbtn')[0];
	var modalOpen = '';

	editbtn.addEventListener('click', editModal);

	// Körs när redigeringsikonen klickas
	$('.up-btn').click((event) => {
		openModal(event.currentTarget.id);
	});

	// Körs när stjärnan klickas
	$('.edit-star1').click(starClicked);
	$('.edit-star2').click(starClicked);
	$('.edit-star3').click(starClicked);
	$('.edit-star4').click(starClicked);
	$('.edit-star5').click(starClicked);
	$('.edit-star6').click(starClicked);
	$('.edit-star7').click(starClicked);
	$('.edit-star8').click(starClicked);
	$('.edit-star9').click(starClicked);
	$('.edit-star10').click(starClicked);
	$('.edit-star11').click(starClicked);
	$('.edit-star12').click(starClicked);
	$('.edit-star13').click(starClicked);
	$('.edit-star14').click(starClicked);
	$('.edit-star15').click(starClicked);
	$('.edit-star16').click(starClicked);
	$('.edit-star17').click(starClicked);
	$('.edit-star18').click(starClicked);
	$('.edit-star19').click(starClicked);
	$('.edit-star20').click(starClicked);
	$('.edit-star21').click(starClicked);
	$('.edit-star22').click(starClicked);
	$('.edit-star23').click(starClicked);
	$('.edit-star24').click(starClicked);
	$('.edit-star25').click(starClicked);
	
	

	function starClicked(event) {
		console.log();
		var starId = event.currentTarget.id;
		var starClass = $(this).attr('class');

		// Hämtar den sparade lokala lagringen för stjärnor
		var tempStorage = {};
		tempStorage = JSON.parse(localStorage.getItem('starStorage')) || {};
		tempStorage[starClass] = starId;
		localStorage.setItem('starStorage', JSON.stringify(tempStorage));
		console.log(tempStorage);
	}

	// Öppnar modalen för att redigera titel och kommentar
	function openModal(n) {
		modal.style.display = 'block';
		modalOpen = n;
	}

	// Funktion som anropas efter att redigera knappen på modal har klickats
	function editModal() {
		var titleInput = $('#titleInput')[0].value;
		var commentInput = $('#commentInput')[0].value;
		var titleDisplay = null;
		var commentDisplay = null;
		console.log(modalOpen);
		if (modalOpen == '1') {
			titleDisplay = $('#title1');
			commentDisplay = $('#comment1');
		} else if (modalOpen == '2') {
			titleDisplay = $('#title2');
			commentDisplay = $('#comment2');
		} else if (modalOpen == '3') {
			titleDisplay = $('#title3');
			commentDisplay = $('#comment3');
		} else if (modalOpen == '4') {
			titleDisplay = $('#title4');
			commentDisplay = $('#comment4');
		} else if (modalOpen == '5') {
			titleDisplay = $('#title5');
			commentDisplay = $('#comment5');
		} else if (modalOpen == '6') {
			titleDisplay = $('#title6');
			commentDisplay = $('#comment6');
		} else if (modalOpen == '7') {
			titleDisplay = $('#title7');
			commentDisplay = $('#comment7');
		} else if (modalOpen == '8') {
			titleDisplay = $('#title8');
			commentDisplay = $('#comment8');
		} else if (modalOpen == '9') {
			titleDisplay = $('#title9');
			commentDisplay = $('#comment9');
		} else if (modalOpen == '10') {
			titleDisplay = $('#title10');
			commentDisplay = $('#comment10');
		} else if (modalOpen == '11') {
			titleDisplay = $('#title11');
			commentDisplay = $('#comment11');
		} else if (modalOpen == '12') {
			titleDisplay = $('#title12');
			commentDisplay = $('#comment12');
		} else if (modalOpen == '13') {
			titleDisplay = $('#title13');
			commentDisplay = $('#comment13');
		} else if (modalOpen == '14') {
			titleDisplay = $('#title14');
			commentDisplay = $('#comment14');
		} else if (modalOpen == '15') {
			titleDisplay = $('#title15');
			commentDisplay = $('#comment15');
		} else if (modalOpen == '16') {
			titleDisplay = $('#title16');
			commentDisplay = $('#comment16');
		} else if (modalOpen == '17') {
			titleDisplay = $('#title17');
			commentDisplay = $('#comment17');
		} else if (modalOpen == '18') {
			titleDisplay = $('#title18');
			commentDisplay = $('#comment18');
		} else if (modalOpen == '19') {
			titleDisplay = $('#title19');
			commentDisplay = $('#comment19');
		} else if (modalOpen == '20') {
			titleDisplay = $('#title20');
			commentDisplay = $('#comment20');
		} else if (modalOpen == '21') {
			titleDisplay = $('#title21');
			commentDisplay = $('#comment21');
		} else if (modalOpen == '22') {
			titleDisplay = $('#title22');
			commentDisplay = $('#comment22');
		} else if (modalOpen == '23') {
			titleDisplay = $('#title23');
			commentDisplay = $('#comment23');
		} else if (modalOpen == '24') {
			titleDisplay = $('#title24');
			commentDisplay = $('#comment24');
		} else if (modalOpen == '25') {
			titleDisplay = $('#title25');
			commentDisplay = $('#comment25');
		}
		var keyTitle = '';
		var keyComment = '';

		// Namnge titeln och kommentarsnycklarna från händelsen sparad i modalOpen
		var num = modalOpen;
		keyTitle = 'title' + num;
		keyComment = 'comment' + num;

		// Tillfällig lagring för att göra ändringar
		var tempStorage = {};

		// Hämtar den sparade lokala lagringen och lägger till den nya redigerade titeln och kommentaren
		tempStorage = JSON.parse(localStorage.getItem('storage')) || {};
		tempStorage[keyTitle] = titleInput;
		tempStorage[keyComment] = commentInput;

		// Ställer in lagringen med de nya värdena som just redigerats
		localStorage.setItem('storage', JSON.stringify(tempStorage));

		// Visar de just redigerade värdena
		document.getElementById(keyTitle).innerHTML = titleInput;
		document.getElementById(keyComment).innerHTML = commentInput;

		modal.style.display = 'none';
	}

	// Hämtar lagringsdetaljerna initialt när webbplatsen laddas och visar titlar, kommentarer och betyg
	try {
		let tempStar = JSON.parse(localStorage.getItem('starStorage'));
		let tempStorage = JSON.parse(localStorage.getItem('storage'));

		for (const item in tempStar) {
			console.log(tempStar[item]);
			$('#' + tempStar[item]).trigger('click');
		}

		for (const item in tempStorage) {
			console.log(`${item}: ${tempStorage[item]}`);
			document.getElementById(item).innerHTML = tempStorage[item];
		}
	} catch (e) {
		console.log(e);
	}

	// Knapp för att rensa lagringen
	$('#clearStorage').click(() => {
		localStorage.clear();
		location.reload(true);
	});
});
