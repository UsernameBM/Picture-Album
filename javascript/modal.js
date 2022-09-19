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
		var keyTitle = '';
		var keyComment = '';

		// Namnge titeln och kommentarsnycklarna från händelsen sparad i modalOpen
		var num = modalOpen.slice(-1);
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
