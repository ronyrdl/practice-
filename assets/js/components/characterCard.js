/**
 * Character Card Component
 */


export function characterCard(character) {

    return `
        <article class="card">
            <img
                src="${character.image}"
                alt="${character.name}"
            >

            <div class="card-body">
                <h3>${character.name}</h3>
                <p>
                    <strong>Status:</strong>
                    ${character.status}
                </p>
                <p>
                    <strong>Species:</strong>
                    ${character.species}
                </p>
                <p>
                    <strong>Gender:</strong>
                    ${character.gender}
                </p>
                <button data-delete="${character.id}">
                    Delete Character
                </button>

                <button data-edit="${character.id}">
                    Edit Info
                </button>
            </div>
        </article>
    `;
}
export function characterEpisodes(episodes) {

    return `
        <article class="card">
        
            <div class="card-body">
                <h3>${episodes.name}</h3>
                <p>
                    <strong>Air date: </strong>
                    ${episodes.air_date}
                </p>
                <p>
                    <strong>Characters that appear:</strong>
                    ${episodes.characters.length}
                </p>
            </div>
        </article>
    `;
}
export function characterLocation(location) {

    return `
        <article class="card">
        
            <div class="card-body">
                <h3>${location.name}</h3>
                <p>
                    <strong>Type: </strong>
                    ${location.type}
                </p>
                <p>
                    <strong>Dimension:</strong>
                    ${location.dimension}
                </p>
                <p>
                    <strong>Residents: </strong>
                    ${location.residents.length}
                </p>
            </div>
        </article>
    `;
}



