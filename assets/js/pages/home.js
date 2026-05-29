import { loadHTML, promptRequired } from '../utils/helpers.js';
import { characterCard } from '../components/characterCard.js';
import { getLocalCharacters } from '../services/api.js';

/**
 * Inicializar listeners UNA vez
 */
initializeCharacterEvents();

/**
 * Render principal HOME
 */
export async function renderHome() {

    const content = document.getElementById('content');

    // Cargar estructura HTML
    content.innerHTML = await loadHTML('./assets/js/views/home.html');

    // Renderizar personajes
    console.log("Elementos de la API renderizados con exito")
    await renderCharacters();
}

/**
 * Render SOLO de personajes
 */
async function renderCharacters() {

    const container = document.getElementById('characters-container');
    const secondContainer = document.getElementById('newcharacters-container');

    // Personajes API
    const characters = await getLocalCharacters();

    // Personajes creados
    const newCharacters =
        JSON.parse(localStorage.getItem("newCharacters")) || [];

    // Render API
    container.innerHTML = characters.map(character => characterCard(character)).join('');

    // Render nuevos
    secondContainer.innerHTML = newCharacters.map(character => characterCard(character)).join('');
    console.log("Personajes ficticios creados con exito")
}

/**
 * Eventos globales
 */
function initializeCharacterEvents() {

    document.addEventListener("click", async (event) => {

        /**
         * ============================
         * ADD CHARACTER
         * ============================
         */
        if (event.target.matches("#addBtn")) {

            const image = promptRequired("~ Ingrese una url para la imagen:");
            if (!image){
                console.warn("[AVISO]: No se guardó la información del personaje");
                return;
            }
            const name = promptRequired("~ Ingrese el nombre:");
            if (!name){
                console.warn("[AVISO]: No se guardó la información del personaje");
                return;
            }
            const species = promptRequired("~ Ingrese la especie:");
            if (!species){
                console.warn("[AVISO]: No se guardó la información del personaje");
                return;
            }
            const status = promptRequired("~ Ingrese el estado:");
            if (!status){
                console.warn("[AVISO]: No se guardó la información del personaje");
                return;
            }
            const gender = promptRequired("~ Ingrese el género:");
            if (!gender){
                console.warn("[AVISO]: No se guardó la información del personaje");
                return;
            }


            const characterInfo = {
                id: Date.now().toString(),
                name,
                status,
                species,
                gender,
                image
            };

            let newCharacters = JSON.parse(localStorage.getItem("newCharacters")) || [];

            //Guardar personaje
            newCharacters.push(characterInfo);
            localStorage.setItem("newCharacters", JSON.stringify(newCharacters));
            console.log("[MENSAJE]: Datos guardados con éxito");
            await renderCharacters();
        }

        /**
         * ============================
         * DELETE CHARACTER
         * ============================
         */
        if (event.target.matches("[data-delete]")) {

            const id = event.target.dataset.delete;
            const confirmDelete = confirm("Are you sure?");

            if (!confirmDelete) return;

            // API Characters
            let apiCharacters = await getLocalCharacters();

            apiCharacters = apiCharacters.filter(character => character.id.toString() !== id);
            localStorage.setItem("APIcharacters", JSON.stringify(apiCharacters));

            // New Characters
            let newCharacters = JSON.parse(localStorage.getItem("newCharacters")) || [];

            newCharacters = newCharacters.filter(character => character.id !== id);
            localStorage.setItem("newCharacters", JSON.stringify(newCharacters));
            console.log(`Elemento ${id} eliminado con exito`)
            await renderCharacters();
        }

        /**
         * ============================
         * EDIT CHARACTER
         * ============================
         */
        if (event.target.matches("[data-edit]")) {

            const id = event.target.dataset.edit;
            // API Characters
            let apiCharacters = await getLocalCharacters();
            let character = apiCharacters.find(character => character.id.toString() === id);
            let isNewCharacter = false;

            // Buscar en nuevos si no existe en API
            if (!character) {
                let newCharacters = JSON.parse(localStorage.getItem("newCharacters")) || [];

                character = newCharacters.find(character => character.id === id);
                isNewCharacter = true;
            }

            if (!character) return;

            // Editar
            character.image = promptRequired("~ Nueva Imagen:", character.image);
            if (!character.image) return;

            character.name = promptRequired("~ Nuevo Nombre:", character.name);
            if (!character.name) return;

            character.species = promptRequired("~ Nueva Especie:", character.species);
            if (!character.species) return;

            character.status = promptRequired("~ Nuevo Estado:", character.status);
            if (!character.status) return;

            character.gender = promptRequired("~ Nuevo Género:", character.gender);
            if (!character.gender) return;

            // Guardar
            if (isNewCharacter) {

                let newCharacters = JSON.parse(localStorage.getItem("newCharacters")) || [];

                newCharacters = newCharacters.map(c => c.id === id ? character : c);
                localStorage.setItem("newCharacters", JSON.stringify(newCharacters));
                alert("Personaje editado con exito!")
                console.info("[MENSAJE]: Personaje editado con exito")

            } else {
                apiCharacters = apiCharacters.map(c => c.id.toString() === id ? character : c);
                localStorage.setItem("APIcharacters", JSON.stringify(apiCharacters));
                alert("Personaje editado con exito")
                console.info("[MENSAJE]: Personaje editado con exito")
            }

            await renderCharacters();
        }

    });

}