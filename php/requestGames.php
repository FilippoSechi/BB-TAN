<?php
require 'database/DBmanager.php';
$username = $_POST['Username'];
$diff = $_POST['Difficolta'];
$order = $_POST['Ordine'];

$result = loadGames($username,$diff,$order);
//costruisco la tabella con il risultato ottenuto
echo '<thead>
        <tr><th></th>
        <th>Username</th>
        <th>Data</th>
        <th>Punteggio</th>
        </tr><tbody>';
while($row = $result->fetch_assoc())
{
    echo'<tr>
            <td><img src="'.$row['immagine'].'" alt ="img profilo"></td>
            <td>'.$row['username'].'</td>
            <td>'.$row['data'].'</td>
            <td>'.$row['punteggio'].'</td></tr>';
}
echo '</tbody>';

function loadGames($username,$diff,$order)
{
    global $DBmanager;
    $username = $DBmanager->sqlInjectionFilter($username);
    if($username != '') //query 'personale'
        $query = "SELECT username,data,immagine,punteggio from partite natural join profili where username ='$username' and difficolta=$diff order by $order DESC limit 10";
    else    //query 'globale'
        $query = "SELECT username,data,immagine,punteggio from partite natural join profili where difficolta=$diff order by $order DESC limit 10";

    $result = $DBmanager->performQuery($query);
    $DBmanager->closeConnection();
    return $result;
}
?>