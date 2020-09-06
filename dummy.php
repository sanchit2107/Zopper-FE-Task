<?php

    // print_r($_POST);

    $name = $_POST['name'];
    $searchBy = $_POST['searchBy'];
    $addedElement = $_POST['addedElement'];
    
    if($searchBy == 'phoneno'){
        $response['error'] = false;
        $response['message'] = 'This runs by phoneno - '.$addedElement;
    }
    else{
        $response['error'] = false;
        $response['message'] = 'This runs by email - '.$addedElement;
    }

    echo json_encode($response); 

?>