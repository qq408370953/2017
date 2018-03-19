<?php
require("../init.php");
$sql="select  cid,src,href from wl_carousel where f_id=1 and fz_id=1 and addr=1 ";
echo json_encode(sql_execute($sql,MYSQLI_ASSOC));
?>