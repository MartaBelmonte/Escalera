/*
 * Crea una función que dibuje una escalera según su número de escalones.
 * - Si el número es positivo, será ascendente de izquiera a derecha.
 * - Si el número es negativo, será descendente de izquiera a derecha.
 * - Si el número es cero, se dibujarán dos guiones bajos (__).
 * 
 * Ejemplo: 4
 *         _
 *       _|       
 *     _|
 *   _|
 * _|
 * 
 */

function drawStairs(steps) {
    let stairs = '';
    if (steps === 0) {
        stairs = '__';
    } else if (steps > 0) {
        for (let i = 1; i <= steps; i++) {
            stairs += ' '.repeat(steps - i) + '_';
            if (i !== steps) {
                stairs += '|\n';
            }
        }
    } else {
        for (let i = 1; i <= Math.abs(steps); i++) {
            stairs += '_|';
            if (i !== Math.abs(steps)) {
                stairs += '\n' + ' '.repeat(i) + '_|';
            }
        }
    }
    return stairs;
}

const steps = -15; // Cambia valor para subir (núm positivo) o bajar (núm negativo)
const escaleraContainer = document.getElementById('escalera-container');
escaleraContainer.textContent = drawStairs(steps);


// Ejemplo de uso
console.log(drawStairs(4));
console.log(drawStairs(-4));
console.log(drawStairs(0));
