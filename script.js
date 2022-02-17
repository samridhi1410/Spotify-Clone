console.log("spotify");
//All the variables
let songIndex=1;
let audioPlay=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let playbar=document.getElementById('playbar');
let gif=document.getElementById('gif');
let masterPlayPause=document.getElementById('masterPlayPause');
let songItems= Array.from (document.getElementsByClassName('songsItem'));
//List of songs and their covers

let songList=[
    {song:"River Of Tears" , filepath:"songs/1.mp3",covers:"covers/1.jpg"},
    {song:"Kalle Kalle" , filepath:"songs/2.mp3",covers:"covers/2.jpg"},
    {song:"Doobey" , filepath:"songs/3.mp3",covers:"covers/3.jfif"},
    {song:"Bheege Hoth tere" , filepath:"songs/4.mp3",covers:"covers/4.jfif"},
    {song:"Tune Mere Jana" , filepath:"songs/5.mp3",covers:"covers/5.jfif"},
    {song:"Mann Mere" , filepath:"songs/6.mp3",covers:"covers/6.jfif"},
    {song:"Kaho Na Kaho" , filepath:"songs/7.mp3",covers:"covers/7.jpg"},
    {song:"Beethe Lamhe" , filepath:"songs/8.mp3",covers:"covers/8.jpg"},
    
    
    ]
  
        songItems.forEach((element,i)=> {
        element.getElementsByTagName('img')[0].src=songList[i].covers;
        element.getElementsByClassName('songname')[0].innerText=songList[i].song;

        
    });






   //Event listners for play and pause
masterPlay.addEventListener('click',()=>{
    if(audioPlay.paused||audioPlay.currentTime<=0){
        console.log("play");
        audioPlay.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;

    }
    else{
        audioPlay.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity=0;

    }
   // Event listner for playbar
  audioPlay.addEventListener('timeupdate',()=>{
      progress = parseInt((audioPlay.currentTime/audioPlay.duration)*100);
      playbar.value=progress; 
  })
    
  playbar.addEventListener('change',()=>{
      audioPlay.currentTime=(playbar.value * audioPlay.duration)/100;
  })

})

const makeAllPause=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
     
        })

 
} 

   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
       
       makeAllPause();
       songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioPlay.src=`songs/${songIndex}.mp3`;
       masterPlayPause.innerText=songList[songIndex-1].song;
       audioPlay.currentTime=0;
       audioPlay.play();
       gif.style.opacity=1;
       masterPlay.classList.add("fa-pause-circle");
       masterPlay.classList.remove("fa-play-circle");


   })


 })

 document.getElementById('next').addEventListener('click',()=>{
     if(songIndex>=8)
     {
         songIndex=0;
     }
     else
     {
         songIndex+=1;
     }

       audioPlay.src=`songs/${songIndex}.mp3`;
       masterPlayPause.innerText=songList[songIndex-1].song;
       audioPlay.currentTime=0;
       audioPlay.play();
       gif.style.opacity=1;
       masterPlay.classList.add("fa-pause-circle");
       masterPlay.classList.remove("fa-play-circle");
 })

 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
       audioPlay.src=`songs/${songIndex}.mp3`;
       masterPlayPause.innerText=songList[songIndex-1].song;
       audioPlay.currentTime=0;
       audioPlay.play();
       gif.style.opacity=1;
       masterPlay.classList.add("fa-pause-circle");
       masterPlay.classList.remove("fa-play-circle");
})
