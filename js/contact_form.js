$(document).ready(function() {
$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
$("#returnmessage").empty(); // Vacía el mensaje anterior
// Chequea campos en blanco
if (name == '' || email == '') {
alert("Por favor, llene los campos obligatorios del formulario.");
} else {
// Retorna un mensaje de envío exitoso cuando la información se guarda en una base de datos
$.post("contact_form.php", {
name1: name,
email1: email,
message1: message
}, function(data) {
$("#returnmessage").append(data); // Adjunta el mensaje retornado al párrafo
if (data == "Tu solicitud ha sido recibida, te contactaré pronto.") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
});
});