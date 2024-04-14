// Add any interactive functionality here
// For example, handling clicks on the navigation links
document.querySelector('nav').addEventListener('click', (event) => {
    // Handle navigation link clicks
    const targetSection = event.target.getAttribute('href');
    // Scroll to the target section using smooth scrolling
    document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
});
