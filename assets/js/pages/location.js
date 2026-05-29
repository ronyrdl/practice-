import { loadHTML } from '../utils/helpers.js';
import { getLocation } from '../services/api.js';
import { characterLocation } from '../components/characterCard.js';

/**
 * Renderiza Home
 */
export async function renderLocation() {
    const content = document.getElementById('content');
    content.innerHTML = await loadHTML(
        './assets/js/views/location.html'
    );
    const container = document.getElementById(
        'location-container'
    );
    const location = await getLocation();
    container.innerHTML = location
        .map(locations => characterLocation(locations))
        .join('');
}