<?php
// Recipient settings
$to = "your@email.com"; // ← replace with your email address
$subject = "New message from the contact form";

// Get data from the form
$firstName = htmlspecialchars(trim($_POST['first-name']));
$lastName = htmlspecialchars(trim($_POST['last-name']));
$email = htmlspecialchars(trim($_POST['email']));
$topic = htmlspecialchars(trim($_POST['subject']));
$message = htmlspecialchars(trim($_POST['message']));

// Check for empty fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($topic) || empty($message)) {
    echo "Please fill in all fields.";
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format.";
    exit;
}

// Create the email body
$body = "First Name: $firstName $lastName\n";
$body .= "Email: $email\n";
$body .= "Subject: $topic\n\n";
$body .= "Message:\n$message";

// Send the email
$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
} else {
    echo "Error sending message.";
}
?>

