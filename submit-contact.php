<?php
	// captura de variables
	$nombre=$_POST['name'];
	$email=$_POST['email'];
	$asunto=$_POST['subject'];
	$comentarios=$_POST['comments'];

	// cuerpo del email
	$mensaje="
	<strong>Nombre completo:</strong> $nombre<br><br>
	<strong>Correo electrónico:</strong> $email<br><br>
	<strong>Asunto:</strong> $asunto<br><br>
	<strong>Comentarios:</strong> $comentarios<br><br>
	";

	// envío del email
	mail("kevin@digitalhouse.com", "Contacto desde la web", $mensaje, "From: $nombre <'javier@digitalhouse.com'>\nReply-To:$email\nContent-Type: text/html; charset=iso-8859-1\n");
?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<title>Gracias</title>
	</head>

	<body>
		<h1>Gracias por enviar sus comentarios</h1>
		<a href="index.html">Volver</a>
	</body>
</html>
