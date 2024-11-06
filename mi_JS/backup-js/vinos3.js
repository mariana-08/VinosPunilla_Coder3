
// Clase Vino
class Vino {
    constructor(id, nombre, precio, anioProduccion, bajada ="", imagen= "") {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.anioProduccion = anioProduccion;       
        this.bajada = bajada;
        this.imagen = imagen;
        this.cantidad = 1;
    }

    //metodo para calcular los años de añejamiento
    calcularAniosCosecha () {
        const anioActual = new Date().getFullYear();
        return anioActual - this.anioProduccion;
    }
}

class GestionarVinos {

    iniciar() {

        vinos =[
            {
                "id": 1,
                "nombre": "Caroya",
                "precio": 700,
                "anioProduccion": 2020,
                "bajada": "Ofrece un atractivo color rojo rubí con tintes negros y un aroma intenso y frutado, destacando notas de frutos rojos como frambuesa y cereza.",
                "imagen": "assets/img/vinos/Caroyense/caroya-MalbecCabernet.jpg"
            },
            {
                "id": 2,
                "nombre": "Viarago",
                "precio": 800,
                "anioProduccion": 2019,
                "bajada": "Se destaca por ser un varietal 100% Malbec, que ha tenido una crianza en barricas de roble por 12 meses.",
                "imagen": "assets/img/vinos/Viarago/Viarago-MalbecRoble.jpg"
            },
            {
                "id": 3,
                "nombre": "Prima Terra",
                "precio": 900,
                "anioProduccion": 2021,
                "bajada": "Presenta un color rojo profundo y brillante, con una lágrima bien densa. \nTiene un envejecimiento de 12 meses en barricas de madera, lo que le aporta estructura en boca y notas de tabaco y vainilla.",
                "imagen": "assets/img/vinos/famiglia/Primaterra.jpg"
            },
            {
                "id": 4,
                "nombre": "Paso Viejo",
                "precio": 1000,
                "anioProduccion": 2022,
                "bajada": "De color rojo púrpura, con matices rubí y aromas reminiscentes a pequeños frutos rojos como frambuesas, grosellas y ciruelas.",
                "imagen": "assets/img/vinos/Caroyense/PasoViejo-Cabernet.jpg"
            },
            {
                "id": 5,
                "nombre": "Isabella",
                "precio": 1100,
                "anioProduccion": 2020,
                "bajada": "Es un vino exótico y refrescante, elaborado con la variedad de uva americana Isabella.",
                "imagen": "assets/img/vinos/Terra/Isabella.jpg"
            },   
            {
                "id": 6,
                "nombre": "Socavones Cabernet",
                "precio": 1200,
                "anioProduccion": 2021,
                "bajada": "Su sabor es intenso y complejo, destacando nuevamente las notas de frutos rojos y negros, junto con especias y toques de roble.",
                "imagen": "assets/img/vinos/Terra/Socavones-Cabernet.jpg" 
            },
            {
                "id": 7,
                "nombre": "Viarago Blend",
                "precio": 1300,
                "anioProduccion": 2018,
                "bajada": "es un vino premium que se caracteriza por su mezcla exclusiva de variedades, ofreciendo un sabor profundo y sofisticado, ideal para ocasiones especiales.",
                "imagen": "assets/img/vinos/Viarago/ViaragoBlend.jpg"
            },
            {
                "id": 8,
                "nombre": "Paso Viejo Tannat",
                "precio": 1400,
                "anioProduccion": 2017,
                "bajada": "Presenta aromas a frutos rojos y negros maduros, además de notas especiadas, lo que lo convierte en una opción de alta calidad para los amantes del vino.",
                "imagen": "assets/img/vinos/Caroyense/PasoViejo-Tannat.jpg"
            },
            {
                "id": 9,
                "nombre": "Navira Blend",
                "precio": 1500,
                "anioProduccion": 2016,
                "bajada": "combina diferentes variedades de uva. ofrece un perfil de sabor con notas de frutas rojas, hierbas y especias.",
                "imagen": "assets/img/vinos/Terra/Navira-Blend.jpg"
            },
            {
                "id": 10,
                "nombre": "Paso Viejo Malbec",
                "precio": 1600,
                "anioProduccion": 2015,
                "bajada":"Su color rojo rubí intenso con tintes violáceos. El aroma es intenso, recuerda a fresas y frambuesa seguido de frutos secos como nueces y avellanas. Vino de cuerpo medio, elegante, aterciopelado y bien equilibrado.",
                "imagen": "assets/img/vinos/Caroyense/PasoViejo-Malbec.jpg" 
            },
            {
                "id": 11,
                "nombre": "Viñas de Caroya",
                "precio": 1700,
                "anioProduccion": 2002,
                "bajada": "Tinto Frambua. Con aromas frutales",
                "imagen": "assets/img/vinos/Caroyense/Vinas-Caroya.jpg"
            },
            {
                "id": 12,
                "nombre": "Navira Malbec",
                "precio": 1800,
                "anioProduccion": 2005,
                "bajada":"De color rojo rubi profundo, en aroma se perciben notas de mermeladas de frutos rojos, especias y frutos silvestres. En boca es joven, vivaz y frutado, de pesistencia media.",
                "imagen":  "assets/img/vinos/Terra/Navira-Malbec.jpg" 
            },
            {
                "id": 13,
                "nombre": "Noble Malbec",
                "precio": 1900,
                "anioProduccion": 2004,
                "bajada":"En nariz  fruta roja madura y hierbas como tomillo y orégano que hace prevalecer un perfil aromático muy fresco. En boca con mucho sabor, taninos muy redondos, fresco y con una persistencia media.",
                "imagen": "assets/img/vinos/Noble/Malbec.jpg" 
            },
            {
                "id": 14,
                "nombre": "Socavones",
                "precio": 2000,
                "anioProduccion": 2020,
                "bajada": "tiene un sabor intenso y complejo, con notas de frutos rojos y negros, especias y toques de roble. Este vino tiene un cuerpo completo y una estructura bien equilibrada, con taninos suaves y un final prolongado y agradable.",
                "imagen": "assets/img/vinos/Terra/Socavones-Malbec.jpg" 
            },
            {
                "id": 15,
                "nombre": "Noble Merlot",
                "precio": 2100,
                "anioProduccion": 2017,
                "bajada":"Color rojo intenso con destellos violáceos. Sus aromas recuerdan a pimiento dulce, coco, tabaco y frutas rojas. En boca es suave, aterciopelado, de sabores especiados y taninos dulces.",
                "imagen": "assets/img/vinos/Noble/Merlot.jpg"
            },
            {
                "id": 16,
                "nombre": "Socavones Blend",
                "precio": 2300,
                "anioProduccion": 2013,
                "bajada":"Aromas a frutos rojos y negros maduros, higo, frutilla, especias, acomplejadas con las notas aportadas por su permanencia en roble. En boca: Es frutado, de estructura media, voluminoso y de final prolongado.",
                "imagen": "assets/img/vinos/Terra/Socavones.jpg"
            },
            {
                "id": 17,
                "nombre": "Ladrones de Corazones",
                "precio": 2500,
                "anioProduccion": 2015,
                "bajada":"Vino de color rubí intenso, brillante.Aroma muy frutal, frutos rojos frescos, ciruela y jarilla. En boca es un vino fresco de acidez equilibrada, final especiado y astringencia.",
                "imagen": "assets/img/vinos/Matilde/Ladron-Malbec.jpg"
            },
            {
                "id": 18,
                "nombre": "Esperando Vientos",
                "precio": 2400,
                "anioProduccion": 2022,
                "bajada":"Es un vino tinto orgánico y biodinámico. Este vino refleja el compromiso con la naturaleza y la tradición vitivinícola, ofreciendo un perfil equilibrado y auténtico que seduce a los paladares más exigentes ",
                "imagen": "assets/img/vinos/Matilde/EsperandoVientos.jpg" 
            },
            {
                "id": 19,
                "nombre": "Ladron de Corazones - Corte de Tintas",
                "precio": 10000,
                "anioProduccion": 2019,
                "bajada":"Vino de color rubí intenso, brillante. Aroma muy frutal, frutos rojos maduros. En boca es un vino de intensidad media, acidez equilibrada, final largo.",
                "imagen": "assets/img/vinos/Matilde/Ladron.jpg"
            }           
            
        ]
    }
}

// Datos de vinos
// const vinos = [
//     new Vino(1, "Caroya",700, 2020, "Ofrece un atractivo color rojo rubí con tintes negros y un aroma intenso y frutado, destacando notas de frutos rojos como frambuesa y cereza.", ""),
//     new Vino(2, "Viarago", 800, 2019, "Se destaca por ser un varietal 100% Malbec, que ha tenido una crianza en barricas de roble por 12 meses.", ""),
//     new Vino(3, "Prima Terra", 900,2021, "Presenta un color rojo profundo y brillante, con una lágrima bien densa. \nTiene un envejecimiento de 12 meses en barricas de madera, lo que le aporta estructura en boca y notas de tabaco y vainilla.", ""),
//     new Vino(4, "Paso Viejo", 1000, "De color rojo púrpura, con matices rubí y aromas reminiscentes a pequeños frutos rojos como frambuesas, grosellas y ciruelas.", ""),
//     new Vino(5, "Isabella", 1100, 2020, "Es un vino exótico y refrescante, elaborado con la variedad de uva americana Isabella.", ""),
//     new Vino(6, "Socavones Cabernet", 1200, 2021,"Su sabor es intenso y complejo, destacando nuevamente las notas de frutos rojos y negros, junto con especias y toques de roble.", "" ),
//     new Vino(7, "Viarago Blend", 1300,2018, "es un vino premium que se caracteriza por su mezcla exclusiva de variedades, ofreciendo un sabor profundo y sofisticado, ideal para ocasiones especiales.", ""),
//     new Vino(8, "Paso Viejo Tannat", 1400, 2017, "Presenta aromas a frutos rojos y negros maduros, además de notas especiadas, lo que lo convierte en una opción de alta calidad para los amantes del vino.", ""),
//     new Vino(9, "Navira Blend", 1500,2016, "combina diferentes variedades de uva. ofrece un perfil de sabor con notas de frutas rojas, hierbas y especias.", ""),
//     new Vino(10, "Paso Viejo Malbec", 1600, 2015, "Su color rojo rubí intenso con tintes violáceos. El aroma es intenso, recuerda a fresas y frambuesa seguido de frutos secos como nueces y avellanas. Vino de cuerpo medio, elegante, aterciopelado y bien equilibrado.","" ),
//     new Vino(11, "Viñas de Caroya", 1700, 2002, "Tinto Frambua. Con aromas frutales", ""),
//     new Vino(12, "Navira Malbec", 1800, 2004, "De color rojo rubi profundo, en aroma se perciben notas de mermeladas de frutos rojos, especias y frutos silvestres. En boca es joven, vivaz y frutado, de pesistencia media.", ""),
//     new Vino(13, "Noble Malbec", 1900, 2012, "En nariz  fruta roja madura y hierbas como tomillo y orégano que hace prevalecer un perfil aromático muy fresco. En boca con mucho sabor, taninos muy redondos, fresco y con una persistencia media.", ""),
//     new Vino(14, "Socavones", 2000, 2020, "tiene un sabor intenso y complejo, con notas de frutos rojos y negros, especias y toques de roble. Este vino tiene un cuerpo completo y una estructura bien equilibrada, con taninos suaves y un final prolongado y agradable.", ""),
//     new Vino(15, "Noble Merlot", 2100, 2017, "Color rojo intenso con destellos violáceos. Sus aromas recuerdan a pimiento dulce, coco, tabaco y frutas rojas. En boca es suave, aterciopelado, de sabores especiados y taninos dulces. "),
//     new Vino(16, "Socavones Blend", 2200, 2017, "Aromas a frutos rojos y negros maduros, higo, frutilla, especias, acomplejadas con las notas aportadas por su permanencia en roble. En boca: Es frutado, de estructura media, voluminoso y de final prolongado.", ""),
//     new Vino(17, "Ladrones de Corazones", 2300, 2016, "Vino de color rubí intenso, brillante.Aroma muy frutal, frutos rojos frescos, ciruela y jarilla. En boca es un vino fresco de acidez equilibrada, final especiado y astringencia.", ""),    
//     new Vino(18, "Esperando Vientos", 2500, 2022, "Es un vino tinto orgánico y biodinámico. Este vino refleja el compromiso con la naturaleza y la tradición vitivinícola, ofreciendo un perfil equilibrado y auténtico que seduce a los paladares más exigentes ",""),
//     new Vino(19, "Ladron de Corazones - Corte de Tintas", 2600, 2019,"Vino de color rubí intenso, brillante. Aroma muy frutal, frutos rojos maduros. En boca es un vino de intensidad media, acidez equilibrada, final largo.", "" ),
    
// ];