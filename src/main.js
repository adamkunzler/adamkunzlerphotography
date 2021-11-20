
// lightGallery(document.getElementById('lightgallery'), {
// 	plugins: [lgFullscreen, lgZoom, lgThumbnail],
// 	mobileSettings: {
// 		controls: false,
// 		showCloseIcon: false,
// 		download: false,
// 		rotate: false
// 	}

// });


$("#lightgallery")
	.justifiedGallery({
		captions: false,
		rowHeight: 240,
		margins: 10
	})
	.on("jg.complete", function () {
		console.log('do it');
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
	});