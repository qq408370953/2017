<?php
require('../init.php');
$output=[
	"s1"=>null,
	"s2"=>null,
	"s3"=>null,
	"s4"=>null,
	"s5"=>null,
	"i1"=>null,
	"i2"=>null,
	"i3"=>null,
	"i4"=>null,
];
$sql="select * from wl_floor where sort='s1' ";
$output['s1']=sql_execute($sql,MYSQLI_ASSOC);
$sql="select * from wl_floor where sort='s2' ";
$output['s2']=sql_execute($sql,MYSQLI_ASSOC);
$sql="select * from wl_floor where sort='s3' ";
$output['s3']=sql_execute($sql,MYSQLI_ASSOC);
$sql="select * from wl_floor where sort='s4' ";
$output['s4']=sql_execute($sql,MYSQLI_ASSOC);
$sql="select * from wl_floor where sort='s5' ";
$output['s5']=sql_execute($sql,MYSQLI_ASSOC);
$sql="select * from wl_floor where sort='i1' ";
$output['i1']=sql_execute($sql,MYSQLI_ASSOC);
$sql="select * from wl_floor where sort='i2' ";
$output['i2']=sql_execute($sql,MYSQLI_ASSOC);
$output['i3']=$output['i1'];
$output['i4']=$output['i2'];


echo json_encode($output);