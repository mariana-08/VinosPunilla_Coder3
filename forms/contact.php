<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'Exception.php';
require 'SMTP.php';

date_default_timezone_set('America/Argentina/Buenos_Aires');

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$fecha = date("d/m/Y h:i:sa");

header('Content-type: application/json');

if ($nombre == '' || $telefono == '' || $email == '' || $mensaje == '') {
    return print(json_encode("Por favor complete todos los campos."));
} else {

// Email para el cliente.
    $asunto1 = "Muchas Gracias por contactarte con Marian Carballo";
    $carta1 .= "<table width='100%' border='0' cellpadding='12' cellspacing='0' style='font-family:Arial, Helvetica, sans-serif; border: 1px #555 solid; border-radius: 5px;'><tr><td style='color: #042791;border-radius: 10px 10px 0 0;background:#eee;'><img src='https://vinospunilla.com.ar/VP.png' style='float:left;max-height:60px;'><p style='color:#042791 !important;text-decoration:none;font-size:25px; line-height:10px;float:right;'>Contacto Vinos Punilla</p>";
    $carta1 .= "</td></tr><tr><td style='font-size:13px;color:#042791'><strong><p>He recibido su mensaje. Pronto me pondré en contacto con usted. </strong><br>";
    $carta1 .= "A continuación le enviamos una copia del mensaje recibido.</p> <hr><br>";
    $carta1 .= "De: $nombre <br>";    
    $carta1 .= "Mi teléfono es: $telefono <br>";
    $carta1 .= "Correo electrónico: $email <br>";
    $carta1 .= "Mi mensaje es: $mensaje  <br><br><hr><br>";
    $carta1 .= "<strong> Muchas gracias por contactarte. </strong> <br></td></tr></table>";

// Email para el receptor.
    $asunto2 = "Mensaje de contacto a través de la página web";
    $carta2 .= "<table width='100%' border='0' cellpadding='12' cellspacing='0' style='font-family:Arial, Helvetica, sans-serif; border: 1px #555 solid; border-radius: 5px;'><tr><td style='color: #042791;border-radius: 10px 10px 0 0;background:#eee;'><img src='https://vinospunilla.com.ar/VP.png' style='float:left;max-height:60px;'><p style='color:#042791 !important;text-decoration:none;font-size:25px; line-height:10px;float:right;'>Contacto Vinos Punilla</p>";
    $carta2 .= "</td></tr><tr><td style='font-size:13px;color:#042791'><strong><p>Hemos recibido un mensaje de contacto a través de la página web de: $nombre </strong><br> <hr><br>";
    $carta2 .= "Estos son los datos que hemos recibido: <br><br>";
    $carta2 .= "De: $nombre <br> ";   
    $carta2 .= "Teléfono: $telefono <br>";
    $carta2 .= "Correo electrónico: $email <br>";
    $carta2 .= "Mensaje: $mensaje <br><br><hr><br><br>";
    $carta2 .= "<strong> Muchas gracias por contactarte</strong> <br></td></tr></table>";

    $mail = new PHPMailer(true);  

        //Server
        $mail->CharSet = 'UTF-8';
        $mail->SMTPDebug = 0; 
        $mail->isSMTP(); 
        $mail->Host = "mail.mariancarballo.com.ar"; 
        $mail->SMTPAuth = true;
        $mail->Username = "consultas@mariancarballo.com.ar";
        $mail->Password = "Marian_86";
        $mail->SMTPSecure = 'ssl'; 
        $mail->Port = 465;
    
        //Recibe
        $mail->setFrom('consultas@mariancarballo.com.ar', 'Vinos punilla');
        $mail->addAddress($email);
    
        //Contenido
        $mail->isHTML(true);
        $mail->Subject = $asunto1;
        $mail->Body = $carta1;
    
        $mail->send();
    
        $mail_user = new PHPMailer(true);  
    
        //Server
         $mail_user->CharSet = 'UTF-8';
         $mail_user->SMTPDebug = 0; 
         $mail_user->isSMTP(); 
         $mail_user->Host = "mail.mariancarballo.com.ar"; 
         $mail_user->SMTPAuth = true;
         $mail_user->Username = "consultas@mariancarballo.com.ar";
         $mail_user->Password = "Marian_86";
         $mail_user->SMTPSecure = 'ssl'; 
         $mail_user->Port = 465;
    
        //Recibe
         $mail_user->setFrom('consultas@mariancarballo.com.ar', 'Vinos Punilla');
         $mail_user->addAddress('consultas@mariancarballo.com.ar');
    
        //Contenido
         $mail_user->isHTML(true);
         $mail_user->Subject = 'Contacto desde el sitio de: '.$nombre.' ';
         $mail_user->Body = $carta2;
    
         $mail_user->send();



 $db = mysqli_connect('localhost', 'daniponc_car', 'Marian_86', 'daniponc_mc_form');
    
 mysqli_set_charset($db, 'utf8');
 $query = "INSERT INTO consulta (nombre, telefono, email, mensaje, fecha) VALUES ('$nombre', '$telefono', '$email', '$mensaje', '$fecha')";

 mysqli_query($db, $query);
 echo("OK");
  
}

?>
