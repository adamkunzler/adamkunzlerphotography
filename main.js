
// lightGallery(document.getElementById('lightgallery'), {
// 	plugins: [lgFullscreen, lgZoom, lgThumbnail],
// 	mobileSettings: {
// 		controls: false,
// 		showCloseIcon: false,
// 		download: false,
// 		rotate: false
// 	}

// });

let allImages = [];
let allTags = [];

$(document).ready(function () {
	allImages = JSON.parse(imageDataJson);
	loadGallery('all');
	loadTagMenu();
});

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

function loadTagMenu() {
	let tempTags = [];
	allImages.forEach((image) => {
		tempTags.push(...image.tags);
	});

	allTags = tempTags.filter(onlyUnique);
	allTags = allTags.sort();

	let tagMenu = $('.tag-menu');
	allTags.forEach((tag) => {
		tagMenu.append(`<span class="badge bg-primary rounded-pill tag-filter" onclick="loadGallery('${tag}')">${tag}</span>`);
	});
}

function loadGallery(tag) {
	let galleryDiv = $('#lightgallery');
	galleryDiv.empty();

	let images = allImages.filter(x => x.tags.includes(tag));
	images.forEach((image) => {
		let newDiv = `<a class="gallery-item" data-src="assets/${image.fullsize}"`;
		
		let html = image.html ?? '';
		newDiv += ` data-sub-html="${html}">`;	

		newDiv += `<img class="img-responsive" src="assets/${image.thumbnail}" />`;
		
		newDiv += '</a>';

		galleryDiv.append(newDiv);
	});

	// init lightgallery
	$("#lightgallery")
		.justifiedGallery({
			captions: false,
			rowHeight: 180,
			margins: 5
		})
		.on("jg.complete", function () {
			window.lightGallery(
				document.getElementById("lightgallery"),
				{
					autoplayFirstVideo: false,
					pager: false,
					galleryId: "nature",
					plugins: [lgFullscreen, lgZoom, lgThumbnail],
					mobileSettings: {
						controls: false,
						showCloseIcon: false,
						download: false,
						rotate: false
					}
				}
			);
		}); // end init lightgallery
} // end loadGallery()