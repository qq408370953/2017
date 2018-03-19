<?php
header("Content-Type:application/json;charset=UTF-8");
require_once("../init.php");

$output=[];
@$category=json_decode($_REQUEST["category"]);

$sql="select sid,img, bid,season as myseason, person,city as mycity from wl_showlive";
if( count($category) ){
	$sql .= " where";
	forEach($category as $key => $value){
		$sql.= " $key='$value' AND";
	}
	$sql = substr($sql,0,-4);
}
$output["lgImg"]=sql_execute($sql,MYSQLI_ASSOC);
$sql="select bid,img,brands from wl_brand";
$output["smallImg"]=sql_execute($sql,MYSQLI_ASSOC);
echo json_encode($output);
