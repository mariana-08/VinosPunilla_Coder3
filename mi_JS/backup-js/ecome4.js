const usuario = "mariana";
const clave = "mari1234";

const cod_caroya = 1;
const precio_caroya = 700;
const cod_viarago = 2;
const precio_viarago = 800;
const cod_primaterra = 3;   
const precio_primaterra = 900;
const cod_pasoViejo = 4;
const precio_pasoViejo = 1000;
const cod_Isabella = 5;
const precio_Isabella = 1100;
const cod_SocavonesCabernet = 6;
const precio_SocavonesCabernet = 1200;
const cod_viaragoB = 7;
const precio_viaragoB = 1300;
const cod_pasoViejoT = 8;
const precio_pasoViejoT = 1400;
const cod_naviraB = 9;
const precio_naviraB = 1500;
const cod_pasoViejoM = 10;
const precio_pasoViejoM = 1600;
const cod_Vinas_de_Caroya = 11;
const precio_Vinas_de_Caroya = 1700;
const cod_NaviraM = 12;
const precio_NaviraM = 1800;
const cod_NobleMalbec = 13;
const precio_NobleMalbec = 1900;
const cod_Socavones = 14;
const precio_Socavones = 2000;
const cod_NobleMerlot = 15;  
const precio_NobleMerlot = 2100;
const cod_SocavonesBlend = 16;
const precio_SocavonesBlend = 2200;
const cod_LadronesCorazones = 17;   
const precio_LadronesCorazones = 2300;
const cod_NobleMM = 18;
const precio_NobleMM = 2400;
const cod_EsperandoVientos = 19;
const precio_EsperandoVientos = 2500;
const cod_DicandiMalbec = 20;
const precio_DicandiMalbec = 2600;
const cod_DicandiMerlot = 21;
const precio_DicandiMerlot = 2700;
const cod_DicandiTannat = 22;
const precio_DicandiTannat = 2800;

//funcion para iniciar 
function iniciarTienda() {
    alert ("Bienvenidos a la tienda de Vinos Punilla. \n Ingresa tu usuario y contraseña para continuar");

    const user = prompt("Ingresa tu usuario");
    const pass = prompt("Ingresa tu contraseña");

    if(validarUsuario(user, pass)) {
        alert("Bienvenido " + user + " a la tienda de Vinos Punilla. \n A continuación podrás ver los vinos disponibles");

        iniciarCarrito();
    }else {
        alert("Usuario y/o contraseña incorrectos. Recarga la página.");
    }
}
 //funcion para validar usuario
 function validarUsuario(user, pass) {
     if (user !== "" && pass !== "") {
         return user === usuario && pass === clave;
     } else {
         alert("El usuario y/o contraseña no deben estar vacíos. Recarga la página.");
         return false;
     }
 }

//funcion para iniciar carrito
function iniciarCarrito() {
    let sumaCarrito =0;
    let lista_vinos = "";

    while (true) {
        let cod_vino = prompt("Ingresa el código del vino que deseas comprar (o presiona Cancelar para finalizar):");   
        
        if (cod_vino === null) {
            break;
        }

        cod_vino = parseInt(cod_vino);

        if (isNaN(cod_vino)) {
            alert("Debe ingresar un número válido.");   
            continue;
        }

        const prod_vino = obtenervino(cod_vino);

        if (prod_vino) {
            alert("Compraste el vino \n" + prod_vino);

            lista_vinos = lista_vinos + prod_vino + "\n";
            sumaCarrito = sumaCarrito + obtenerPrecio(cod_vino);
        } else {
            alert("Código de vino inválido.");
        }
    }

    if (sumaCarrito > 0) {
        alert("Compraste: \n" + lista_vinos + "\nPrecio total: $" + sumaCarrito);
    }else {
        alert("No compraste ningún vino.");
    }

}

//funcion para obtener el vino
function obtenervino(cod_vino) {
    switch (cod_vino) {
        case 1:
            return "Caroya";
        case 2:
            return "Viarago";
        case 3:
            return "Prima Terra";
        case 4:
            return "Paso Viejo";
        case 5:
            return "Isabella";
        case 6:
            return "Socavones Cabernet";
        case 7:
            return "Viarago Blend";
        case 8:
            return "Paso Viejo Tannat";
        case 9:
            return "Navira Blend";
        case 10:
            return "Paso Viejo Malbec";
        case 11:
            return "Viñas de Caroya";
        case 12:
            return "Navira Malbec";
        case 13:
            return "Noble Malbec";
        case 14:
            return "Socavones";
        case 15:
            return "Noble Merlot";
        case 16:
            return "Socavones Blend";
        case 17:
            return "Ladrones de Corazones";
        case 18:
            return "Noble MM";
        case 19:
            return "Esperando Vientos";
        case 20:
            return "Dicandi Malbec";
        case 21:
            return "Dicandi Merlot";
        case 22:
            return "Dicandi Tannat";
        default:
            return null;
    }
}

//funcion para obtener el precio
function obtenerPrecio(cod_vino) {
    switch (cod_vino) {
        case 1:
            return precio_caroya;
        case 2:
            return precio_viarago;
        case 3:
            return siisprecio_primaterra;
        case 4:
            return precio_pasoViejo;
        case 5:
            return precio_Isabella;
        case 6:
            return precio_SocavonesCabernet;
        case 7:
            return precio_viaragoB;
        case 8:
            return precio_pasoViejoT;
        case 9:
            return precio_naviraB;
        case 10:
            return precio_pasoViejoM;
        case 11:
            return precio_Vinas_de_Caroya;
        case 12:
            return precio_NaviraM;
        case 13:
            return precio_NobleMalbec;
        case 14:
            return precio_Socavones;
        case 15:
            return precio_NobleMerlot;
        case 16:
            return precio_SocavonesBlend;
        case 17:
            return precio_LadronesCorazones;
        case 18:
            return precio_NobleMM;
        case 19:
            return precio_EsperandoVientos;
        case 20:
            return precio_DicandiMalbec;
        case 21:
            return precio_DicandiMerlot;
        case 22:
            return precio_DicandiTannat;
        default:
            return 0;
    }
}

// Inicia el proceso solicitando datos al usuario
iniciarTienda();
//

