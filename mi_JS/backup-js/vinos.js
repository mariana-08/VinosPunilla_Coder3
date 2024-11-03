// Datos de usuario
const user = "mariana";
const pass = "mari1234";

// Clase Vino
class Vino {
    constructor(id, nombre, precio, bajada = "", imagen = "") {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.bajada = bajada;
        this.imagen = imagen;
    }
}

// Datos de vinos
const vinos = [
    new Vino(1, "Caroya", 700),
    new Vino(2, "Viarago", 800),
    new Vino(3, "Prima Terra", 900),
    new Vino(4, "Paso Viejo", 1000),
    new Vino(5, "Isabella", 1100),
    new Vino(6, "Socavones Cabernet", 1200),
    new Vino(7, "Viarago Blend", 1300),
    new Vino(8, "Paso Viejo Tannat", 1400),
    new Vino(9, "Navira Blend", 1500),
    new Vino(10, "Paso Viejo Malbec", 1600),
    new Vino(11, "Viñas de Caroya", 1700),
    new Vino(12, "Navira Malbec", 1800),
    new Vino(13, "Noble Malbec", 1900),
    new Vino(14, "Socavones", 2000),
    new Vino(15, "Noble Merlot", 2100),
    new Vino(16, "Socavones Blend", 2200),
    new Vino(17, "Ladrones de Corazones", 2300),
    new Vino(18, "Noble MM", 2400),
    new Vino(19, "Esperando Vientos", 2500),
    new Vino(20, "Dicandi Malbec", 2600),
    new Vino(21, "Dicandi Merlot", 2700),
    new Vino(22, "Dicandi Tannat", 2800)
];
