<?php

    require_once("db_acc_click.php");
    try
    {
        $db = new PDO("mysql:dbname=".DB_NAME.";host=".DB_HOST.";charset=".CHARSET,USERNAME,USERPASS);
    }
    catch(PDOExeption $e)
    {
        echo "DB接続エラー" . $e->getMessage();
    }

?>