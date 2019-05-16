let items;

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'));
} else {
  items = [];
}

//inicializacion arreglo
var x = 0;
var array = Array();

//clase cliente
class Cliente{
    
    constructor(nombre,apellido,dni,balance){
        this.nombre= nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.balance=balance;
    }
    
    nombreCompleto(){
        return this.apellido + ',' + this.nombre;
    }
}

document.getElementById('guardar').addEventListener("click",function(arg){

    //evito que se recargue la pagina
    arg.preventDefault();

    //Recogo datos del form y creo objeto
    let nombreForm= document.getElementById('nombre').value;
    let apellidoForm= document.getElementById('apellido').value;
    let dniForm= document.getElementById('dni').value;
    let balanceForm= document.getElementById('balance').value;

    const ul = document.querySelector('ul');

    let nuevoCliente= new Cliente(nombreForm,apellidoForm,dniForm,balanceForm);

    agregaLista(nuevoCliente.nombreCompleto());

    //cargo el arreglo y lo convierto a string
    array[x] = nuevoCliente.nombreCompleto();

    localStorage.setItem("clientes", JSON.stringify(array));

    var storedNames = JSON.parse(localStorage.getItem("clientes"));

    x++;
});

//fn que agrega lista con nombres de clientes
function agregaLista(valor){

    var lista = document.createElement("li");
  
    var contenido = document.createTextNode(valor);

    lista.appendChild(contenido);

    ul.appendChild(lista);
}
