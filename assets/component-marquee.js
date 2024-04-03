class Marquee {
  constructor(container, texts, speed) {
    this.container = container;
    this.texts = texts;
    this.speed = speed || 2;
    this.animationIds = [];
    this.offsets = [];

    this.init();
  }

  init() {
    // Create text elements and append them to the container
    this.texts.forEach(text => {
      const element = document.createElement('div');
      element.textContent = text;
      element.classList.add('marquee-text');
      this.container.appendChild(element);
    });

    // Clone text elements for seamless scrolling
    const children = this.container.querySelectorAll('.marquee-text');
    this.offsets = Array.from(children).map(child => child.offsetWidth);
    const cloneTexts = this.texts.slice(); // clone the original texts
    cloneTexts.forEach(text => {
      const clone = document.createElement('div');
      clone.textContent = text;
      clone.classList.add('marquee-text');
      this.container.appendChild(clone);
    });

    // Start the animation loop
    this.animate();
  }

  animate() {
    const children = this.container.querySelectorAll('.marquee-text');
    children.forEach((child, index) => {
      const offset = this.offsets[index];
      const newPos = (this.speed + child.offsetLeft) % offset;
      child.style.transform = `translateX(${-newPos}px)`;
    });

    // Request next frame for continuous animation
    this.animationIds.push(requestAnimationFrame(() => this.animate()));
  }

  stop() {
    // Stop all animation frames
    this.animationIds.forEach(id => cancelAnimationFrame(id));
  }

  resume() {
    // Resume animation
    this.animate();
  }
}

// Usage example:
const marqueeContainer = document.getElementById('marquee-container');
const texts = ['Text 1', 'Text 2', 'Text 3']; // Add your texts here
const marquee = new Marquee(marqueeContainer, texts, 2);
