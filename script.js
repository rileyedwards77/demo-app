document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const greeting = document.getElementById('greeting');
    
    const greetings = [
        "Thanks for visiting!",
        "Hope you're having a great day!",
        "Welcome to my dark-themed page!",
        "Hello there, nice to see you!",
        "Glad you stopped by!"
    ];
    
    greetButton.addEventListener('click', () => {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greeting.textContent = randomGreeting;
        greeting.classList.add('show');
        
        setTimeout(() => {
            greeting.classList.remove('show');
        }, 3000);
    });
});
