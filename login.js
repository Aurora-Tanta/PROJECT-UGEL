function login(){
let correo=document.getElementById('correo').value;
let password=document.getElementById('password').value;
if(correo==''||password==''){alert('Completa todos los campos');return;}
alert('Login exitoso (demo)');
window.location.href='materiales.html';
}