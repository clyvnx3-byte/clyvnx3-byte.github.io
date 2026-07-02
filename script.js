// Custom glowing cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Hide cursor when mouse leaves window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

// Music player toggle
const musicToggle = document.getElementById('musicToggle');
const audioPlayer = document.getElementById('audioPlayer');

musicToggle.addEventListener('click', () => {
    if (audioPlayer.src) {
        if (audioPlayer.style.display === 'none') {
            audioPlayer.style.display = 'block';
            audioPlayer.play();
            musicToggle.textContent = '⏸️ Music Playing';
        } else {
            audioPlayer.style.display = 'none';
            audioPlayer.pause();
            musicToggle.textContent = '🎵 Music (Add Later)';
        }
    } else {
        alert('Music URL not configured yet. Update the audio src in the HTML.');
    }
});

// Prevent default cursor
document.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'none';
});

document.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'auto';
});