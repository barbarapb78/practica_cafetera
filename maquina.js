const prompt = require("prompt-sync")();
const fs= require ("fs");
const ruta= "./datos.json";
const datos= fs.readFileSync(ruta, "utf8");
const cafeteria=JSON.parse(datos);

class MaquinaCafe{
    constructor(){
 //Nombre, agua, lecha, azucar, cafe??
    }
/*5 metodos:
estado maquina (estado inicial)
nueva bebida (añadir a Json)
recargar maquina (cuando no quedan ingredientes rellenar sin superar la cant. maxima)
pedir bebida (selccionar entre diferentes bebidas o ingredientes y vendar, restar los ingredientes a os iniciales)
*/
pedirBebida(){

    console.log("Elige un tipo de cafe:");
    console.log("1.Expresso");
    console.log("2.Latte");
    console.log("3.Americano");
    console.log("4.Cortado");
     
    let eleccion= prompt ("Elige el numero de café que desees tomar: ")
    switch (eleccion){
        case "1":
          console.log("Has elegido Expresso");            
        case "2":
            console.log("Has elegido Cafe latte"); 
        break;
        case "3":
            console.log("Has elegido americano");
            //20 agua, 10 cafe, 5 leche
        break;
        case "4":
            console.log("Has elegido cortado");
            //unidad azucar es 5 siempre
        default:
            console.log("Esa opcion no existe");
            //pregunat x prompt??
        break;
        //todo esto restarlo al estado inicial y estas suma no puede ser superior al máximo      
    }
}
/*recargarMaquina(){
    if (agua.estado_inicial==0 || cafe.estado_inicial==0 || ){
        //push agua, cafe, etc 
    }
}*/
nuevaBebida(){
    
    console.log("Prepara tu cafe: ");
    const agua= prompt ("Introduce la cantidad de agua: ")
    const leche= prompt ("introduce la cantidad de leche: ")
    const cafe= prompt ("Introduce la cantidad de cafe: ")
    const azucar= prompt ("Introduce la cantidad de azucar: ")

    const cafeNuevo ={
        agua:parseInt(agua),
        leche:parseInt(leche),
        cafe:parseInt(cafe),
        azucar:parseInt(azucar),
    }
    cafeteria.push(cafeNuevo);
    const datosparseados = JSON.stringify(cafeNuevo, null, 2);
    fs.writeFileSync(ruta, datosparseados, 'utf8');

console.log('Café añadido correctamente.'); 
// estos datos restarlos del total
}
}
function gestionMaquina() {
    const gestion= new MaquinaCafe()
    let acciones;
    while (acciones!=="6"){
        console.log("Bienvenido a Máquina Café");
        console.log(".........................");
        console.log("1.Bebidas disponibles");
        console.log("2.Estado de la máquina");
        console.log("3.Nueva Bebida");
        console.log("4.Recargar máquina");
        console.log("5.Pedir bebida");
        console.log("6.Salir");

        acciones=prompt ("Elige el numero de la accion que desees realizar: ")
        console.clear();
    
    switch (acciones){
        case "1":
            console.log(cafeteria.bebidas);
            break;
        case "2":
            console.log(cafeteria.estado_inicial);
            break;
        case "3":
            gestion.pedirBebida()
            console.log();
            break;
        case "4":
            console.log();
            break;
        case "5":
            gestion.nuevaBebida()
            console.log();
            break;
        case "6":
            console.log("Has salido de la máquina");
            break;
        default:
            console.log("Esa opcion no existe");
            break;               
    }               
    }    
}
gestionMaquina();