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
const sombraEnTablero = -400;
const colorSombra = "#262e36"


// Cuanta resistencia aerodinámica se aplica a los objetos estándar
const resistenciaAerodinamica = 0.022;
const gravedad = 0.3;


//Configuracion de chispa 
const colorChispa = 'rgba(170,221,255,.9)';
const tamañoChispa = 2.2;
const resistenciaAerodinamicaChispa = 0.1;

// Seguimiento de las posiciones del puntero para mostrar el rastro
const rastroPunteroColor = 'rgba(170,221,255,.9)';
const rastroPunteroTamaño = 7;
const vidaUtiPuntero = 120;
const puntosPuntero = [];


// Tamaño de los objetivos en el juego. Esto afecta el tamaño renderizado y el área de impacto.

const radioObjetivo = 40;
const radioImpactoObjetivo = 50;
const hacerColorPegasoObjetivo = objetivo => {
    return 'rgb(170,221,255)';
}


//Tamaño de los fragmentos del objetivo
const radioFragmento = radioObjetivo/3;


//---Elemento canvas necesario para el juego y la interaccion
const canvas = document.getElementById('canvas');


//Configuracion 3D de la camara
//Efectos para la perspectiva de la camara
const distanciaCamara = 900;


//No afecta la perpectiva
const alturaCamara = 1;


// Los objetos que se acerquen demasiado a la cámara se desvanecerán a transparentes en este rango.
const inicioDesvanecimientoCamaraZ = 0.45 * distanciaCamara;
const finDesvanecimientoCamaraZ = 0.65 * distanciaCamara;
const rangoDesvanecimientoCamaraZ = finDesvanecimientoCamaraZ - inicioDesvanecimientoCamaraZ;


//Globales usados ​​para acumular todos los vértices/polígonos en cada marco para renderizarlos en un solo llamado de función.

const todosVortices = [];
const todosPoligonos = [];
const todasSombrasVetices = [];
const todasSombrasPoligonos = [];






// estado.js
// ============================================================================
// ============================================================================

///////////
// Enumeraciones //
///////////



//Modos de juego
const MODO_JUEGO_NORMAL = Symbol('MODO_JUEGO_NORMAL');
const MODO_JUEGO_CASUAL = Symbol('MODO_JUEGO_CASUAL');


//Menus disponibles
const MENU_PRINCIPAL = Symbol('MENU_PRINCIPAL');
const MENU_PAUSA = Symbol('MENU_PAUSA');
const MENU_PUNTUACION = Symbol('MENU_PUNTUACION');




///////////////////
// Estado global //
///////////////////

const estado = {
    juego: {
        modo: MODO_JUEGO_NORMAL,

        tiempo: 0,

        puntos: 0,

        contarCubos: 0
    },
    menus:{
        activo: MENU_PRINCIPAL
    }
};




/////////////////////////////////
// estado global de selectores //
/////////////////////////////////