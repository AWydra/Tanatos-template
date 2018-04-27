<? 
	$to = 'arkadiusz.wydra@hivelion.pl';
	$name = $_GET ['name'];
	$subject = $_GET['subject'];
	$message = $_GET['message']; 
	$headers = 'From:' . $name;
	
	mail($to, $subject, $message, $headers);
?>