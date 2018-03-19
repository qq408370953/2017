<?php
require_once("../init.php");
$output=[
	'recordCount'=>0,
	'pageCount'=>1,
	'pageSize'=>12,
	'pno'=>1,
	'data'=>null
];
@$pno=$_REQUEST["pno"];
if($pno){
	$output["pno"]=$pno;
}
$sql="select count(*) from wl_fashionnews";
$output["recordCount"]=sql_execute($sql,1)[0]["count(*)"];
$output["pageCount"]=ceil($output["recordCount"]/$output["pageSize"]);
$start=($output["pno"]-1)*$output["pageSize"];
$count=$output["pageSize"];
$sql="select * from wl_fashionnews limit $start,$count";
$output["data"]=sql_execute($sql,MYSQLI_ASSOC);
echo json_encode($output);