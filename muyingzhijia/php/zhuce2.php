<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "muyingzhijia";
	

	// 创建连接
	$conn = new mysqli($servername,$username,$password,$dbname);


	$name=$_POST['user'];
	$password=$_POST['password'];




	$sql = "insert into user(name,password) values('".$name."','".$password."');";
	$result = $conn->query('set names utf8');
	$result = $conn->query($sql);



?>
