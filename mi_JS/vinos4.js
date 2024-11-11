
// Clase Vino
class Vino {
    constructor(id, nombre, precio, anioProduccion,bodega, bajada ="", imagen= "") {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.anioProduccion = anioProduccion; 
        this.bodega = bodega;      
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

// Datos de vinos
const vinos = [
    new Vino(1, "Caroya",750, 2020, "Bodega Caroyense", "Ofrece un atractivo color rojo rubí con tintes negros y un aroma intenso y frutado, destacando notas de frutos rojos como frambuesa y cereza.", "assets/img/vinos/Caroyense/caroya-MalbecCabernet.jpg"),

    new Vino(2, "Viarago",850, 2019,"Bodega Viarago", "Se destaca por ser un varietal 100% Malbec, que ha tenido una crianza en barricas de roble por 12 meses.", "assets/img/vinos/Viarago/Viarago-MalbecRoble.jpg"),

    new Vino(3, "Prima Terra",950, 2021,"Bodega Famiglia Furfaro", "Presenta un color rojo profundo y brillante, con una lágrima bien densa. \nTiene un envejecimiento de 12 meses en barricas de madera, lo que le aporta estructura en boca y notas de tabaco y vainilla.", "assets/img/vinos/Famiglia/Primaterra.jpg"),

    new Vino(4, "Paso Viejo",1000, 2022,"Bodega Caroyense", "De color rojo púrpura, con matices rubí y aromas reminiscentes a pequeños frutos rojos como frambuesas, grosellas y ciruelas.", "assets/img/vinos/Caroyense/PasoViejo-Cabernet.jpg"),
    
    new Vino(5, "Isabella",1500, 2020,"Bodega Terra Camiare", "Es un vino exótico y refrescante, elaborado con la variedad de uva americana Isabella.", "assets/img/vinos/Terra/Isabella.jpg"),
    
    new Vino(6, "Socavones Cabernet",1220, 2021,"Bodega Terra Camiare", "Su sabor es intenso y complejo, destacando nuevamente las notas de frutos rojos y negros, junto con especias y toques de roble.", "assets/img/vinos/Terra/Socavones-Cabernet.jpg" ),
    
    new Vino(7, "Viarago Blend", 1150, 2018,"Bodega Viarago", "es un vino premium que se caracteriza por su mezcla exclusiva de variedades, ofreciendo un sabor profundo y sofisticado, ideal para ocasiones especiales.", "assets/img/vinos/Viarago/Viaragoblend.jpg"),
    
    new Vino(8, "Paso Viejo Tannat", 1450, 2017, "Bodega Caroyense", "Presenta aromas a frutos rojos y negros maduros, además de notas especiadas, lo que lo convierte en una opción de alta calidad para los amantes del vino.", "assets/img/vinos/Caroyense/Pasoviejo-Tannat.jpg"),
   
    new Vino(9, "Navira Blend", 1630, 2016,"Bodega Caroyense", "combina diferentes variedades de uva. ofrece un perfil de sabor con notas de frutas rojas, hierbas y especias.", "assets/img/vinos/Terra/Navira-Blend.jpg"),
    
    new Vino(10, "Paso Viejo Malbec",1600, 2015,"Bodega Caroyense", "Su color rojo rubí intenso con tintes violáceos. El aroma es intenso, recuerda a fresas y frambuesa seguido de frutos secos como nueces y avellanas. Vino de cuerpo medio, elegante, aterciopelado y bien equilibrado.","assets/img/vinos/Caroyense/Pasoviejo-Malbec.jpg" ),
    
    new Vino(11, "Viñas de Caroya", 1710, 2002, "Bodega Caroyense", "Tinto Frambua. Con aromas frutales", "assets/img/vinos/Caroyense/Vinas-Caroya.jpg"),
   
    new Vino(12, "Navira Malbec", 1900, 2004,"Bodega Terra Camiare", "De color rojo rubi profundo, en aroma se perciben notas de mermeladas de frutos rojos, especias y frutos silvestres. En boca es joven, vivaz y frutado, de pesistencia media.", "assets/img/vinos/Terra/Navira-Malbec.jpg"),
   
    new Vino(13, "Noble Malbec", 2300, 2012,"Bodega Noble", "En nariz  fruta roja madura y hierbas como tomillo y orégano que hace prevalecer un perfil aromático muy fresco. En boca con mucho sabor, taninos muy redondos, fresco y con una persistencia media.", "assets/img/vinos/Noble/Malbec.jpg"),
    
    new Vino(14, "Socavones", 2235, 2020,"Bodega Terra Camiare", "tiene un sabor intenso y complejo, con notas de frutos rojos y negros, especias y toques de roble. Este vino tiene un cuerpo completo y una estructura bien equilibrada, con taninos suaves y un final prolongado y agradable.", "assets/img/vinos/Terra/Socavones-Malbec.jpg"),
    
    new Vino(15, "Noble Merlot", 2675, 2017,"Bodega Noble", "Color rojo intenso con destellos violáceos. Sus aromas recuerdan a pimiento dulce, coco, tabaco y frutas rojas. En boca es suave, aterciopelado, de sabores especiados y taninos dulces.", "assets/img/vinos/Noble/Merlot.jpg"),
    
    new Vino(16, "Socavones Blend", 2750, 2017,"Bodega Terra Camiare", "Aromas a frutos rojos y negros maduros, higo, frutilla, especias, acomplejadas con las notas aportadas por su permanencia en roble. En boca: Es frutado, de estructura media, voluminoso y de final prolongado.", "assets/img/vinos/Terra/Socavones.jpg"),
   
    new Vino(17, "Ladrones de Corazones", 2950, 2016,"Bodega La Matilde", "Vino de color rubí intenso, brillante.Aroma muy frutal, frutos rojos frescos, ciruela y jarilla. En boca es un vino fresco de acidez equilibrada, final especiado y astringencia.", "assets/img/vinos/Matilde/Ladron-Malbec.jpg"),    
    
    new Vino(18, "Esperando Vientos", 3080, 2022, "Bodega La Matilde", "Es un vino tinto orgánico y biodinámico. Este vino refleja el compromiso con la naturaleza y la tradición vitivinícola, ofreciendo un perfil equilibrado y auténtico que seduce a los paladares más exigentes ","assets/img/vinos/Matilde/EsperandoVientos.jpg"),
   
    new Vino(19, "Ladron de Corazones - Corte de Tintas", 3040, 2019, "Bodega La Matilde", "Vino de color rubí intenso, brillante. Aroma muy frutal, frutos rojos maduros. En boca es un vino de intensidad media, acidez equilibrada, final largo.", "assets/img/vinos/Matilde/Ladron.jpg" ),
];
