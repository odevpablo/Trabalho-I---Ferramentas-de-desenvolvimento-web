document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('main section');
    if (!section) return;

    section.style.position = 'absolute';
    section.style.left = section.offsetLeft + 'px';
    section.style.top = '300px';

    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const rect = section.getBoundingClientRect();
        const sectionX = rect.left + rect.width / 2;
        const sectionY = rect.top + rect.height / 2;
        const dx = mouseX - sectionX;
        const dy = mouseY - sectionY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 120;

        if (distance < minDistance) {
            let angle = Math.atan2(dy, dx);
            let moveX = Math.cos(angle) * -100;
            let moveY = Math.sin(angle) * -100;

            let newLeft = section.offsetLeft + moveX;
            let newTop = section.offsetTop + moveY;

            const padding = 10;
            newLeft = Math.max(padding, Math.min(window.innerWidth - rect.width - padding, newLeft));
            newTop = Math.max(padding, Math.min(window.innerHeight - rect.height - padding, newTop));

            section.style.left = newLeft + 'px';
            section.style.top = newTop + 'px';
        }
    });
});
