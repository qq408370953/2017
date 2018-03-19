<?php
header("Content-Type:application/json;charset=utf-8");
require("../init.php");
$output=[
	"recordCount"=>0,
	"pageCount"=>0,
	"pageSize"=>12,
	"pno"=>1,
	"data"=>null
];
@$pno=$_REQUEST["pno"];
if($pno){
$output["pno"]=$pno;
}
$sql="select count(*) from show_pic";
$output["recordCount"]=sql_execute($sql,1)[0]["count(*)"];
$output["pageCount"]=ceil($output["recordCount"]/$output["pageSize"]);
$start=($output["pno"]-1)*$output["pageSize"];
$count=$output["pageSize"];
$sql="select * from show_pic limit $start,$count";
$output["data"]=sql_execute($sql,MYSQLI_ASSOC);
echo json_encode($output);
?>