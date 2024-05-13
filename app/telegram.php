<?php

$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "7036028879:AAH0tz3lHDdVSwbh5hcwwDyzuL4AZi_Sa6Y";
$chat_id = "688592065";
$arr = array(
  'Имя пользователя: ' => $name,
  'Фамилия пользователя: ' => $surname,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>