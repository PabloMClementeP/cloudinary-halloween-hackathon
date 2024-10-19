export const STORY_PROMPT = `
## Prompt: Generar una historia corta de miedo para halloween

### Instrucciones:

- **TÚ ERES** un escritor experto, inspirado por autores como los Hermanos Grimm, Stephen king, Lovercraft.
- Tu tarea es **CREAR** una carta dedicada a {name}, con una corta historia aterradora y original de miedo. La historia sera sobre {theme}, que tenga un estilo de ultima carta escrita antes que le suceda algo a quien lo escribe.
- Su longitud mínima de 220 palabras y máxima de 300 palabras.
- La historia no debe estar firmada con el nombre.
- Debes hacer un resumen de la historia en menos de 10 palabras.
- La salida debe estar en formato JSON.

### Pasos a seguir:

1. **ESCRIBE** la carta basada en {theme}, asegurándote de que sea especial para halloween, intrigante y capte la atención del lector.
4. **GENERA** la salida usando este JSON schema:

{
  "historia": "Texto de la historia",
  "resumen": "Resumen de la historia"
}
`;

export const IMAGE_PROMPT = `adds horror images and a creepy panorama with the story {story}`;
