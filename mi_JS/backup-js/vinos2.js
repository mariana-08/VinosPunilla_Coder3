// Datos de usuario
const user = "mariana";
const pass = "mari1234";

// Clase Vino
class Vino {
    constructor(id, nombre, precio, anioProduccion, bajada ="", imagen= "") {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.anioProduccion = anioProduccion;       
        this.bajada = bajada;
        this.imagen = imagen;
    }

    //metodo para calcular los años de añejamiento
    calcularAniosCosecha () {
        const anioActual = new Date().getFullYear();
        return anioActual - this.anioProduccion;
    }
}

// Datos de vinos
const vinos = [
    new Vino(1, "Caroya",700, 2020, "Ofrece un atractivo color rojo rubí con tintes negros y un aroma intenso y frutado, destacando notas de frutos rojos como frambuesa y cereza.", ""),
    new Vino(2, "Viarago", 800, 2019, "Se destaca por ser un varietal 100% Malbec, que ha tenido una crianza en barricas de roble por 12 meses.", ""),
    new Vino(3, "Prima Terra", 900,2021, "Presenta un color rojo profundo y brillante, con una lágrima bien densa. \nTiene un envejecimiento de 12 meses en barricas de madera, lo que le aporta estructura en boca y notas de tabaco y vainilla.", ""),
    new Vino(4, "Paso Viejo", 1000, "De color rojo púrpura, con matices rubí y aromas reminiscentes a pequeños frutos rojos como frambuesas, grosellas y ciruelas.", ""),
    new Vino(5, "Isabella", 1100, 2020, "Es un vino exótico y refrescante, elaborado con la variedad de uva americana Isabella.", ""),
    new Vino(6, "Socavones Cabernet", 1200, 2021,"Su sabor es intenso y complejo, destacando nuevamente las notas de frutos rojos y negros, junto con especias y toques de roble.", "" ),
    new Vino(7, "Viarago Blend", 1300,2018, "es un vino premium que se caracteriza por su mezcla exclusiva de variedades, ofreciendo un sabor profundo y sofisticado, ideal para ocasiones especiales.", ""),
    new Vino(8, "Paso Viejo Tannat", 1400, 2017, "Presenta aromas a frutos rojos y negros maduros, además de notas especiadas, lo que lo convierte en una opción de alta calidad para los amantes del vino.", ""),
    new Vino(9, "Navira Blend", 1500,2016, "combina diferentes variedades de uva. ofrece un perfil de sabor con notas de frutas rojas, hierbas y especias.", ""),
    new Vino(10, "Paso Viejo Malbec", 1600, 2015, "Su color rojo rubí intenso con tintes violáceos. El aroma es intenso, recuerda a fresas y frambuesa seguido de frutos secos como nueces y avellanas. Vino de cuerpo medio, elegante, aterciopelado y bien equilibrado.","" ),
    new Vino(11, "Viñas de Caroya", 1700, 2002, "Tinto Frambua. Con aromas frutales", ""),
    new Vino(12, "Navira Malbec", 1800, 2004, "De color rojo rubi profundo, en aroma se perciben notas de mermeladas de frutos rojos, especias y frutos silvestres. En boca es joven, vivaz y frutado, de pesistencia media.", ""),
    new Vino(13, "Noble Malbec", 1900, 2012, "En nariz  fruta roja madura y hierbas como tomillo y orégano que hace prevalecer un perfil aromático muy fresco. En boca con mucho sabor, taninos muy redondos, fresco y con una persistencia media.", ""),
    new Vino(14, "Socavones", 2000, 2020, "tiene un sabor intenso y complejo, con notas de frutos rojos y negros, especias y toques de roble. Este vino tiene un cuerpo completo y una estructura bien equilibrada, con taninos suaves y un final prolongado y agradable.", ""),
    new Vino(15, "Noble Merlot", 2100, 2017, "Color rojo intenso con destellos violáceos. Sus aromas recuerdan a pimiento dulce, coco, tabaco y frutas rojas. En boca es suave, aterciopelado, de sabores especiados y taninos dulces. "),
    new Vino(16, "Socavones Blend", 2200, 2017, "Aromas a frutos rojos y negros maduros, higo, frutilla, especias, acomplejadas con las notas aportadas por su permanencia en roble. En boca: Es frutado, de estructura media, voluminoso y de final prolongado.", ""),
    new Vino(17, "Ladrones de Corazones", 2300, 2016, "Vino de color rubí intenso, brillante.Aroma muy frutal, frutos rojos frescos, ciruela y jarilla. En boca es un vino fresco de acidez equilibrada, final especiado y astringencia.", ""),    
    new Vino(18, "Esperando Vientos", 2500, 2022, "Es un vino tinto orgánico y biodinámico. Este vino refleja el compromiso con la naturaleza y la tradición vitivinícola, ofreciendo un perfil equilibrado y auténtico que seduce a los paladares más exigentes ",""),
    new Vino(19, "Ladron de Corazones - Corte de Tintas", 2600, 2019,"Vino de color rubí intenso, brillante. Aroma muy frutal, frutos rojos maduros. En boca es un vino de intensidad media, acidez equilibrada, final largo.", "" ),
    
];
