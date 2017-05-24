<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $from_email = 'general@theenglishauthority.com';
    $message = $request->message;
    $from_name = $request->name;

    $to_email = "bradleyjamesahrens@gmail.com";

    $contact = "<p><strong>Name:</strong> $from_name</p>
                            <p><strong>Email:</strong> $request->email;</p>";
    $content = "<p><strong>Message:</strong><p>$message</p>";

    $website = 'Test Website';
    $email_subject = "$website: Received a message from $from_name";

    $email_body = '<html><body>';
    $email_body .= "$contact $content";
    $email_body .= '</body></html>';

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: $from_email\n";
    $headers .= "Reply-To: $from_email";

    $result = mail($to_email,$email_subject,$email_body,$headers);

    $response_array['status'] = 'success';
    $response_array['from'] = $from_email;
    $response_array['result'] = $result;

    echo json_encode($response_array);

    header($response_array);
    return $from_email;
} else {
    $response_array['status'] = 'error';
    echo json_encode($response_array);
    header('Location: /error.html');
}
?>
