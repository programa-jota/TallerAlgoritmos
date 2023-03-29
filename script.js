let params = new URLSearchParams(window.location.search);
let nombre = params.get("nombre");
console.log(nombre);
let saludo = '¡Es hora de hacer algunos calculos' + nombre +'!';
document.getElementById('saludo').innerHTML = saludo;