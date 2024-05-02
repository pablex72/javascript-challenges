const { JSDOM } = require('jsdom');

const animate_string = (id) => {
    // Crear un DOM simulado

    
    // Crear un elemento con el texto especificado
    const element = document.createElement('div');
    element.textContent = id;

    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(element);

    // Obtener el nodo de texto del primer hijo del elemento
    const textNode = element.childNodes[0]; // Suponiendo que no hay otros hijos

    // Obtener el texto inicial del nodo de texto
    let text = textNode.data;

    // Usar setInterval para animar el texto cada 100 milisegundos
    setInterval(() => {
        // Mover el último carácter al principio del texto
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        // Actualizar el nodo de texto con el nuevo texto
        textNode.data = text;
    }, 100);
};

// Llamar a la función con un ID de ejemplo
animate_string('abcdefghijkl');
