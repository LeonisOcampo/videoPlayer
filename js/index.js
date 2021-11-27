const $video    = document.querySelector('#video');
const $play     = document.querySelector('#play');
const $pause    = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward  = document.querySelector('#forward');
const $progress = document.querySelector('#progress');
const $reload   = document.querySelector('#reload');
const $sound    = document.querySelector('#sound');
const $mute     = document.querySelector('#mute');

$play.addEventListener('click',handlePlay);
$pause.addEventListener('click',handlePause);
$backward.addEventListener('click',handleBackward);
$forward.addEventListener('click',handleForward);
$reload.addEventListener('click',handleReload);
$sound.addEventListener('click',handleSound);
$mute.addEventListener('click',handleMute);

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

$progress.addEventListener('input', handleInput);

function handlePlay() {
	$video.play();

	$play.hidden  = true;
	$pause.hidden = false;
}

function handlePause() {
	$video.pause();

	$pause.hidden = true;
	$play.hidden  = false;
}

function handleBackward() {
    $video.currentTime -= 10;
}

function handleForward() {
    // Con currentTime sé donde está el video en segundos y milisegundos
    $video.currentTime += 10;
}

function handleLoaded() {
    $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;

    if($video.currentTime == $progress.max) {
        $reload.hidden = false;
        $play.hidden   = false;
	    $pause.hidden  = true;
    }
}

function handleInput() {
    $video.currentTime = $progress.value;
}

function handleReload() {
    $video.currentTime = 0;

    $video.play();

    $play.hidden   = true;
	$pause.hidden  = false;
    $reload.hidden = true;
}

function handleSound() {
    $sound.hidden = true;
    $mute.hidden  = false;

    $video.volume = 0;
}

function handleMute() {
    $sound.hidden = false;
    $mute.hidden  = true;

    $video.volume = 1;
}