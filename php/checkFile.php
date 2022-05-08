<?php
    //controlla la validità del file caricato
    function checkFile()
    {
        if($_FILES['file']['name'] == null)
            return 'uploads/placeholder.png';  //immagine di default 

        $fileName = $_FILES['file']['name'];
        $fileTmpName = $_FILES['file']['tmp_name'];     
        $fileSize = $_FILES['file']['size'];
        $fileError = $_FILES['file']['error'];

        $fileExt = explode('.',$fileName);
        $fileActualExt = strtolower(end($fileExt));         //prendo l'estensione del file

        $allowedExt = array('jpg','jpeg','png');           //estensioni accettate

        if(in_array($fileActualExt, $allowedExt) && !$fileError && $fileSize < 1000000)
        {
            $fileNameNew = uniqid('',true).'.'.$fileActualExt; //non avrò mai due img con nome uguale
            $fileDestionation = 'uploads/'.$fileNameNew;
            return $fileDestionation;
        }
        return '';          //se il file non rispetta le condizioni
    }
?>