window.onload = () => {
  // List of video sources
  const videos = [
    'wallpaper/c1.mp4',
    'wallpaper/c2.mp4',
    'wallpaper/c3.mp4',
    'wallpaper/snow1.mp4'
  ];

  // List of song sources
  const songs = [
    'songs/ankhon mai.mp4',  
    'songs/sorry.mp4',
    'songs/tokyodrift.mp3'

  ];

  // Get the visit count from localStorage (default to 0 if not found)
  let visitCount = localStorage.getItem('visitCount') || 0;
  visitCount = parseInt(visitCount);

  // Set the video source based on the visit count
  const videoElement = document.getElementById('backgroundVideo');
  videoElement.src = videos[visitCount % videos.length];  // Cycle through the videos

  // Increment the visit count and store it back in localStorage
  visitCount++;
  localStorage.setItem('visitCount', visitCount);

  // Display user information from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    document.getElementById('greetingMessage').textContent = `𝐻𝒶𝓅𝓅𝓎 𝒩𝑒𝓌 𝒴𝑒𝒶𝓇, ${user.name}!`;
    document.getElementById('userMessage').textContent = user.message;
  }

  // Play a random song
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  const audio = new Audio(randomSong);
  audio.play();

  // Back button functionality
  document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = 'index.html';  // Redirect back to the entry form
  });
};
