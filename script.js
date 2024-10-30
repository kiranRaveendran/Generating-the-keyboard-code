document.addEventListener('keydown', function(event) {
    const key = event.key === ' ' ? 'Space' : event.key;
    const keyCode = event.keyCode;
    document.getElementById('key-text').textContent = `You pressed: ${key}`;
    document.getElementById('code-text').textContent = `Key code: ${keyCode}`;

    // setTimeout(() => {
    //     window.location.reload();
    // }, 1000);
});

document.addEventListener('keydown', (event) => {
    const audio = document.getElementById('keypress-sound');
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
});
