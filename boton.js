let iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', function(){
    let nombre = document.getElementById('nombre').value;
    window.location.href = 'calculadora.html?nombre= ' + nombre;
    });