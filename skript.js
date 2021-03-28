document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#volume').oninput  = videoVolume;
document.querySelector('#speed').oninput  = videoSpeed;


let video;
let progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');

video.ontimeupdate  = progressUpdate;
progress.onclick = videoRewind;


function play (){
    video.play();
}
function pause (){
    video.pause();
}
function stop (){
    video.pause();
    video.currentTime = 0;
}

function videoVolume (){
    let vol = this.value;
    video.volume = vol / 100;
    console.log(vol);
}
function videoSpeed(){
let sp = this.value
    video.play();
video.playbackRate = sp;
console.log(sp);
document.querySelector('#out_speed').innerHTML = 'X' + sp;





}

function progressUpdate () {
    let videoTime = video.duration;
    let current = video.currentTime;
    progress.value = current / videoTime * 100;
    document.querySelector('#out').innerHTML = Math.trunc(video.currentTime) + " sec.";
}
function videoRewind (){
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = o / w * 100;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();

}
