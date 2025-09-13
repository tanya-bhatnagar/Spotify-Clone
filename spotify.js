document.addEventListener('DOMContentLoaded', () => {
    const playPauseButton = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume-control');
    const volumeIcon = document.getElementById('volume-icon');
    
    let isPlaying = false;
    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            playPauseButton.src = 'player_icon3.png'; // Change to play icon
        } else {
            playPauseButton.src = 'pause_icon.png'; // Change to pause icon
        }
        isPlaying = !isPlaying;
    });
    
    volumeControl.addEventListener('input', (e) => {
        const volume = e.target.value;
        if (volume == 0) {
            volumeIcon.className = 'fa-solid fa-volume-mute';
        } else if (volume < 50) {
            volumeIcon.className = 'fa-solid fa-volume-down';
        } else {
            volumeIcon.className = 'fa-solid fa-volume-up';
        }
    });
});
