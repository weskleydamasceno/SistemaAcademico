<?php
	$n1 = $_GET["n1"];
	$n2 = $_GET["n2"];
	$media = $_GET["media"];
	$media = ($n1 * 2 + $n2 * 3) / 5;
	<textarea><?php echo "$media"; ?></textarea>
?>