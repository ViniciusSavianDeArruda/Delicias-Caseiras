// Component loader functionality
export function loadComponents() {
    // Load header component
    fetch('src/components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load hero component
    fetch('src/components/hero.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('hero-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading hero:', error));

    // Load footer component
    fetch('src/components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
}