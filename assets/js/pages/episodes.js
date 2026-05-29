import { loadHTML } from '../utils/helpers.js';
import { getEpisodes } from '../services/api.js';
import { characterEpisodes } from '../components/characterCard.js';

/**
 * Renderiza Home
 */
export async function renderEpisodes() {
    const content = document.getElementById('content');
    content.innerHTML = await loadHTML(
        './assets/js/views/episodes.html'
    );
    const container = document.getElementById(
        'episodes-container'
    );
    const episode = await getEpisodes();
    container.innerHTML = episode
        .map(episodes => characterEpisodes(episodes))
        .join('');
}
