<?php
require('phpmailer/src/SMTP.php');
require('phpmailer/src/PHPMailer.php');
// Check if data was posted
if($_SERVER["REQUEST_METHOD"]=="POST")
{   
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= 'From:shubhamsharma.mj@gmail.com' . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $fname=$_POST["fname"];
    $lname=$_POST["lname"];
    $email=$_POST["email"];
    $mobile=$_POST["mobile"];
    $error=""; 
    //Prepare mail using the data
    $body="Applicant Name : <b>".$fname." ".$lname."</b><br><br>";
    $body.="Email ID : <b>".$email."</b><br><br>";
    $body.="Mobile No. : <b>".$mobile."</b><br><br>";
    $body.="<i>Please find below the attached resume of the applicant.</i>";
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    // Enter email id which you want to use for sending mails below  :
    $mail->Username = "sukritimails@gmail.com";
    
    // Password for above email :
    $mail->Password = "sukriti29";
    
    // Change these settings if your mail server is other than Gmail
    $mail->Host     = "smtp.gmail.com";
    $mail->Mailer   = "smtp";
    $mail->IsSMTP();
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = "ssl";
    $mail->Port     = 465;


    // Email message construction :

    $mail->SetFrom("sukritimails@gmail.com", "Sukriti Ngo");
    $mail->AddReplyTo("sukritimails@gmail.com", "Sukriti Ngo");
    $mail->AddAddress("divyangna123@gmail.com");
    $mail->Subject = "Job Application - ".$fname." ".$lname;
    $mail->WordWrap   = 80;
    $mail->MsgHTML($body);
    $mail->IsHTML(true);
    
    //Uploading file
    $target_dir = "resume/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo(basename($_FILES["fileToUpload"]["name"]),PATHINFO_EXTENSION));

    // Check if file already exists
    if (file_exists($target_file)) {
        $error.="File already exists.<br>";
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 2097152) {
        $error.="Your file is too large.<br>";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "docx" && $imageFileType != "doc" && $imageFileType != "pdf") {
        $error.="Only DOC,DOCX & PDF files are allowed.<br>";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        $error.="Your file was not uploaded.<br>";
        echo $error;
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            $error.="The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
            $mail->AddAttachment($target_file,strtoupper($fname." ".$lname)." Resume");

            //Sending mail
            if($mail->Send()) 
            {   // Do -- if mail was sent 
                 echo "Mail sent";
                // Delete file after sending it
                 unlink($target_file);
            }
            else 
            {   // If mail was not sent

            }
        } else {
            $error.="There was an error uploading your file.";
        }
    }
}
else
{
    header("Location: ../career.html", true, 301);
    exit();
}
?>