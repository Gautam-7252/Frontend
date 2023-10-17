console.log("Welcome to Spotify");

// INITIALIZE VARIABLES
let songIndex=0;
let index=0;
let audioelement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterplay");
let progressbar = document.getElementById("progressbar");
let songlist= Array.from(document.getElementsByClassName("song"));
let showduration=document.getElementById("showduration");
let currentsong = document.getElementById("c_songname");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let songs=[
    {songName: "Alone - Marshmello",filepath: "song/1.mp3", coverpath: "image/Capture001.png"},
    {songName: "I can fly - Marshmello",filepath: "song/2.mp3", coverpath: "image/Capture001.png"},
    {songName: "Thunder - Imagine Dragon",filepath: "song/3.mp3", coverpath: "image/Capture001.png"},
    {songName: "Love U - Marshmello",filepath: "song/4.mp3", coverpath: "image/Capture001.png"},
    {songName: "Alone - Alan Walker",filepath: "song/5.mp3", coverpath: "image/Capture001.png"},
    {songName: "Faded - Alan Walker",filepath: "song/6.mp3", coverpath: "image/Capture001.png"},
    {songName: "On my way - Alan Walker",filepath: "song/7.mp3", coverpath: "image/Capture001.png"},
    {songName: "Teri ho na saki - King",filepath: "song/8.mp3", coverpath: "image/Capture001.png"}
];

// PLAY/PAUSE
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused  || audioelement.currentTime <=0){
        audioelement.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('bi-pause-circle-fill');
        masterPlay.classList.add('bi-play-circle-fill');
    }
})

// LISTEN TO EVENTS.

audioelement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value= progress;
    showduration.innerText=("("+audioelement.currentTime+")--");
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value * audioelement.duration/100;
})

//PLAYSONG AND DISPLAY SONG NAMES ON LIST AS WELL AS BOTTOM.
songlist.forEach((element,i) =>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        currentsong.innerText=songs[i].songName;
        audioelement.src=`song/${songIndex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.style.color('green');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
       
    })
        
        
    document.getElementsByClassName("songname")[i].innerText=songs[i].songName;
});



//PREVIOUS SONGS AND NEXT SONG.
next.addEventListener("click",()=>{
    if(songIndex<8){
        songIndex=songIndex+1;
    }
    else{
        songIndex=1;
    }
        currentsong.innerText=songs[songIndex-1].songName;
        audioelement.src=`song/${songIndex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
});

previous.addEventListener("click",()=>{
    if(songIndex<=8 && songIndex>1){
        songIndex=songIndex-1;
    }
    else{
        songIndex=8;
    }
    currentsong.innerText=songs[songIndex-1].songName;
    audioelement.src=`song/${songIndex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
});