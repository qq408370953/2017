<?php
header("Content-Type:text/plain;charset=utf-8");
require_once("../init.php");
@$uphone=$_REQUEST["uphone"];
if($uphone){
	$sql="select uid from wl_user where uphone='$uphone'";
	if(count(sql_execute($sql,MYSQLI_ASSOC))==0){
		echo "true";
  }else{
    echo "false";
	}
}else{
	@$uemail=$_REQUEST["uemail"];
	$sql="select uid from wl_user where uemail='$uemail'";
	if(count(sql_execute($sql,MYSQLI_ASSOC))==0)
		echo "true";
  else
    echo "false";
}
?>