function navigateToContacts() {
    window.location.href = './contact.html';
}

const roundedBg = document.querySelector('.rounded-bg');


function updateRotation(event) {
    const rect = roundedBg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = (mouseX - centerX) / rect.width;
    const deltaY = (mouseY - centerY) / rect.height;

    const rotateX = deltaY * 15;
    const rotateY = -deltaX * 15;

    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 270;

    roundedBg.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    roundedBg.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, 0.3), transparent), #1f1f1f`;
}

roundedBg.addEventListener('mousemove', updateRotation);

roundedBg.addEventListener('mouseleave', () => {
    roundedBg.style.transform = `translateY(-10px) rotateX(0deg) rotateY(0deg)`;
    roundedBg.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent), #1f1f1f`;
});
