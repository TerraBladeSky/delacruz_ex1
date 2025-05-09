// Particle background effect
const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = 0.5 + Math.random();
        this.size = 1 + Math.random() * 2;
        this.direction = Math.random() * Math.PI * 2;
    }

    update() {
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(102, 204, 255, 0.5)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

// Card hover effects
document.querySelectorAll('.game-container, .ref-category').forEach(container => {
    container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(1.02)';
        container.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
    });

    container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
        container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Rating stars animation
document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('mouseover', () => {
        rating.style.transform = 'scale(1.2)';
        rating.style.textShadow = '0 0 10px #ffcc00';
    });

    rating.addEventListener('mouseout', () => {
        rating.style.transform = 'scale(1)';
        rating.style.textShadow = 'none';
    });
});

// Initialize everything
window.addEventListener('load', () => {
    resizeCanvas();
    initParticles();
    animate();
});

window.addEventListener('resize', resizeCanvas);

// Game image hover effect
document.querySelectorAll('.game-image').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.filter = 'brightness(1.2)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.filter = 'brightness(1)';
    });
});

// Nav menu highlight effect
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textShadow = '0 0 10px #ff6600';
        link.style.color = '#ff9933';
    });

    link.addEventListener('mouseout', () => {
        link.style.textShadow = 'none';
        link.style.color = '#ff6600';
    });
});
