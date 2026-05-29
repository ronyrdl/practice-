/**
 * Navbar Component
 */

export async function loadNavbar() {

    const navbar = document.getElementById('navbar');

    navbar.innerHTML = `
        <nav class="navbar">
            <a href="/" data-link>Home</a>
            <a href="/episodes" data-link >Episodes</a>
            <a href="/location" data-link >Locations</a>
            <a href="/contacts" data-link>Contact Us</a>
            <a href="/about" data-link>About Us</a>
        </nav>
    `;
}