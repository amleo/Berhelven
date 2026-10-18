  const video = document.querySelector('.hero-video-player');
  const playBtn = document.getElementById('playBtn');
  const volumeSlider = document.getElementById('volumeSlider');

  // Obsługa przycisku Play / Pause
  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = '⏸ Pause';
    } else {
      video.pause();
      playBtn.textContent = '▶ Play';
    }
  });

  // Obsługa suwaka głośności
  volumeSlider.addEventListener('input', (e) => {
    const volumeValue = e.target.value;
    video.volume = volumeValue;
    
    // Jeśli zmienisz głośność powyżej 0, wideo przestanie być wyciszone
    if (volumeValue > 0) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  });
