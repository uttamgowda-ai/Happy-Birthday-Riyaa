// Start the Sequence
function initSequence() {
    document.getElementById('gatekeeper').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('gatekeeper').style.display = 'none';
        document.getElementById('cake-section').style.display = 'flex';
        document.getElementById('cake-section').style.opacity = '1';
    }, 500);
    startHeartRain();
}

// Blow out candle & Reveal
function celebrate() {
    document.getElementById('flame').style.display = 'none';
    document.getElementById('wish-text').innerText = "Wish Granted! ✨";
    
    // Confetti explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f7d794', '#fd79a8', '#ffffff']
    });

    setTimeout(() => {
        document.getElementById('cake-section').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('cake-section').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.getElementById('main-content').style.opacity = '1';
        }, 500);
    }, 2000);
}

// Modals
function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// Heart Rain Logic (Limited for performance)
function startHeartRain() {
    setInterval(() => {
        if (document.querySelectorAll('.bg-heart').length > 20) return;
        const heart = document.createElement('div');
        heart.className = 'bg-heart';
        heart.innerHTML = ['❤️', '💖', '✨'][Math.floor(Math.random() * 3)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.opacity = Math.random() * 0.4;
        document.getElementById('heart-container').appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }, 600);
}