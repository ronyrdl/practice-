import httpClient from './httpClient.js';

export async function getCharacters() {
    try {
        const response = await httpClient.get('/character');
        return response.data.results;

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getEpisodes() {
    try {
        const response = await httpClient.get('/episode');
        return response.data.results;

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getLocation() {
    try {
        const response = await httpClient.get('/location');
        return response.data.results;

    } catch (error) {
        console.error(error);
        return [];
    }
}


async function setlocalstorage() {
    try {
        const response = await httpClient.get('/character');
        const characterslc = response.data.results;

        localStorage.setItem("APIcharacters", JSON.stringify(characterslc));
        console.log("The information was saved succesfully")
        return characterslc;
    } catch (error) {
        console.error(error);
        
    }
}

export async function getLocalCharacters() {
    let characterslc = JSON.parse(localStorage.getItem("APIcharacters"));

    // 2. Si NO hay nada (es la primera vez), llamamos a la función que va a la API
    if (!characterslc) {
        console.log("Storage vacío. Yendo a la API...");
        // ¡OJO al await! Esperamos a que la API responda y guarde
        characterslc = await setlocalstorage(); 
    } else {
        console.log("Datos encontrados en LocalStorage, usando copia local.");
    }

    // 3. ¡CRUCIAL! Retornamos el array de objetos para que tu home.js lo pueda usar
    return characterslc;

}

