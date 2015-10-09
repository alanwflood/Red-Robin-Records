//Selecting track from playlist thats outside the music player
$("table").delegate("tr td.playtrack", "click", function(){
	$("table tr.active").removeClass('active');
	$(this).parents("tr").addClass('active');
    audio.pause();
    initAudio($(this).parents("tr"));
	$('.duration').fadeIn(400);
	$('.play').children().removeClass("fa-play").addClass("fa-pause");
	audio.play();
	showDuration();
});