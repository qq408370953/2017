<?php
header("Content-Type:application/json;charset=utf-8");
require("../init.php");
@$uphone=$_REQUEST["uphone"];
@$uemail=$_REQUEST["uemail"];
@$upwd=$_REQUEST["upwd"];
$sql="insert into wl_user (uphone,uemail,upwd) values('$uphone','$uemail','$upwd')";
$result=mysqli_query($conn,$sql);
if($result===true)
echo '{"code":1,"msg":"注册成功"}';
else 
echo '{"code":-1,"msg":"注册失败"}';

?>