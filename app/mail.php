<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Собираем данные из формы
    $firstName = filter_input(INPUT_POST, 'name1', FILTER_SANITIZE_STRING);
    $lastName = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'Phone', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'Email', FILTER_SANITIZE_EMAIL);

    // Подготовка и отправка email
    $to = 'Uliamintenko@gmail.com'; // Замените на ваш реальный email адрес
    $subject = 'Запрос на получение предложения';
    $message = "Имя: {$firstName}\nФамилия: {$lastName}\nТелефон: {$phone}\nEmail: {$email}";
    $headers = [
        'From' => 'noreply@example.com', // Email, с которого будет отправлено письмо
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    ];

    // Функция mail для отправки письма
    if (mail($to, $subject, $message, $headers)) {
        // Перезагрузка страницы после успешной отправки
        header('Location: ' . $_SERVER['REQUEST_URI']);
        exit;
    } else {
        echo 'Произошла ошибка при отправке сообщения.';
    }
}
?>