const playBtns = document.querySelectorAll('.playlist .box-container .box .play');
const musicPlayer = document.querySelector('.music-player');
const musicAlbum = musicPlayer.querySelector('.album');
const musicName = musicPlayer.querySelector('.name');
const musicArtist = musicPlayer.querySelector('.artist');
const music = musicPlayer.querySelector('.music');
const closeBtn = document.querySelector('#close');

let currentIndex = 0;

playBtns.forEach((play, index) => {

   play.addEventListener('click', () => {

      currentIndex = index;

      const src = play.getAttribute('data-src');
      const album = play.getAttribute('data-album');
      const box = play.closest('.box');

      const name = box.querySelector('.name').innerText;
      const artist = box.querySelector('.artist').innerText;

      musicAlbum.src = album;
      musicName.innerText = name;
      musicArtist.innerText = artist;
      music.src = src;

      musicPlayer.classList.add('active');
      music.play();
   });

});

// Auto play next song
music.addEventListener('ended', () => {
   currentIndex++;
   if(currentIndex >= playBtns.length){
      currentIndex = 0;
   }
   playBtns[currentIndex].click();
});

// Close player
if(closeBtn){
   closeBtn.addEventListener('click', () => {
      musicPlayer.classList.remove('active');
      music.pause();
      music.currentTime = 0;
   });
}
