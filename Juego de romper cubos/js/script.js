// globalConfig.js
// ================================================ ============================
// ================================================ ============================

// Proporciona variables globales utilizadas por todo el programa.
// La mayor parte de esto debería ser configuración.

// Multiplicador de tiempo para todo el motor del juego
let velocidadJuego = 1


//Colores
const azul = { r: 0x67, v: 0xd7, a: 0xf0 };
const verde =  { r: 0xa6, v: 0xe0, a: 0x2c };
const rosa =   { r: 0xfa, v: 0x24, a: 0x73 };
const naranja = { r: 0xfe, v: 0x95, a: 0x22 };
const colores = [azul,verde,rosa,naranja]


//Como se juega
const aparicionCubos = () => {
    const retrasoAparicionMax = 1400;
    const retrasoAparicionMin = 550;

    const retrasoAparicion = retrasoAparicionMax - estado.juego.contarCubos * 3.1;
    return Math.Max(retrasoAparicion,retrasoAparicionMin);
}

const puntuacionBloqueSuperFuerte = 2000;

// Número de cubos que deben romperse antes de activar una función.
const bloquecamaralenta = 10;
const bloquefuerte = 25;
const bloqueGiratorio = 25;


//Estado de interaccion 
let PunteroAbajo = false;


// La última posición conocida del puntero principal en las coordenadas de la pantalla
let PosicionPunteroPantalla = { x: 0, y: 0}


// Igual que `PosicionPunteroPantalla`, pero convertido a coordenadas de escena en rAF
let PunteroEscena = { x: 0, y: 0}


// Velocidad mínima del puntero antes de que se cuenten los "golpes".
const velocidadMinimaPuntero = 60;


// La velocidad del golpe afecta la dirección del objetivo después del golpe. Este número amortigua esa fuerza.
const amortiguarGolpe = 0.1;

// El tablero recibe sombras y es la posición Z negativa más lejana de las entidades.

