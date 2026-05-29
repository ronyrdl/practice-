/**
 * Helpers reutilizables
 */
export async function loadHTML(path) {

    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Error cargando HTML: ${path}`);
        }
        return await response.text();
    } catch (error) {
        console.error(error);
        return '<h2>Error cargando contenido</h2>';
    }
}

/**
 * Funcion para validar prompts
 */
export function promptRequired(message, currentValue = "") {

    const value = prompt(message, currentValue);

    if (!value || value.trim() === "") {

        alert("This field must be filled");
        error("[Error]: this field must be filled");

        return null;
    }
    return value;
}





