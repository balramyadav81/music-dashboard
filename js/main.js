console.log("Welcome to Dream Music World");
// intial variables
let songIndex = 0;
let audioElement = new Audio(`Songs/${songIndex+1}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let recentSongItems = Array.from(document.getElementsByClassName('recentSongItem'));
let arTists = Array.from(document.getElementsByClassName('artistPics'));

let songs = [
    {songName : "Unstopable", filePath: "Songs/1.mp3", coverPath: "images/1.jpg"},
    {songName : "Sorry", filePath: "Songs/2.mp3", coverPath: "images/2.jpg"},
    {songName : "Let me", filePath: "Songs/3.mp3", coverPath: "images/3.jpg"},
    {songName : "Duniya", filePath: "Songs/4.mp3", coverPath: "images/4.jpg"},
    {songName : "Love me, like you Do", filePath: "5.mp3", coverPath: "images/5.jpg"},
    {songName : "Diamond", filePath: "Songs/6.mp3", coverPath: "images/6.jpg"},
    {songName : "Diamond", filePath: "Songs/1.mp3", coverPath: "images/7.jpg"}
]

let artists = [
    {artistName : "Kaka" ,   coverpath: "images/1.jpg"},
    {artistName : "Mankirt" ,   coverpath: "images/2.jpg"},
    {artistName : "Kaka" ,   coverpath: "images/1.jpg"},
    {artistName : "Mankirt" ,   coverpath: "images/2.jpg"},
    {artistName : "Kaka" ,   coverpath: "images/1.jpg"},
    {artistName : "Mankirt" ,   coverpath: "images/2.jpg"},
    {artistName : "Kaka" ,   coverpath: "images/1.jpg"},
    {artistName : "Mankirt" ,   coverpath: "images/2.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;    
})
arTists.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = artists[i].coverpath;
    element.getElementsByClassName("arTistName")[0].innerText = artists[i].artistName;    
})


// audioElement.play();

// Handle Play/Pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

// listen to Event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update slidebar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllplay();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songItems>6){
        songIndex ==0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songItems<=0){
        songIndex ==0;
    }
    else{
        songIndex = songIndex-1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})