const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
});

document.addEventListener('DOMContentLoaded', () => {
    const flowerContainer = document.getElementById('flower-container');

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2s - 5s
        flowerContainer.appendChild(flower);

        setTimeout(() => flower.remove(), 5000);
    }

    setInterval(createFlower, 500);
});



