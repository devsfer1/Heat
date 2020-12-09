<?php

if(isset($_POST['email']) && !empty()){

$nome = addslashes($_POST['name'])
$email = addslashes($_POST['email'])
$mensagem = addslashes($_POST['message'])

$to = "fernando.chaves16@hotmail.com";
$subject = "Contato - Heat Page";
$body = "Nome: ".$nome. "\n".
        "Email: ".$email. "\n".
        "Mensagem: ".$mensagem;
$header = "From:feppatin@hotmail.com"."\r\n"
            ."Reply-To:".$email."\r\n"
            ."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    echo("Email enviado com sucesso!");
}else {
    echo("Erro ao enviar email");
}


}

?>