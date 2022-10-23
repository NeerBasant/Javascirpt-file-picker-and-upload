<?php

if(isset($_FILES['image'])){

    $img_name = $_FILES['image']['name'];
    $img_type = $_FILES['image']['type'];
    $tmp_name = $_FILES['image']['tmp_name'];
    $img_explode = explode('.',$img_name);

    $img_ext = end($img_explode);
    $extensions = ["jpeg", "png", "jpg"];

    if(in_array($img_ext, $extensions) === true){

        $types = ["image/jpeg", "image/jpg", "image/png"];
        if(in_array($img_type, $types) === true){

            $time_and_random = mt_rand(1, 500000000000000).time();
            $new_img_name = $time_and_random.$img_name;

            if(move_uploaded_file($tmp_name,$new_img_name)){
                echo 200;
            }else{
                echo "Sorry , but we Can't upload Image due to an internal server error";
            }

        }else{
            echo "Please upload an image file - jpeg, png, jpg";
        }

    }else{
        echo "Please upload an image file - jpeg, png, jpg";
    }

}else{
    echo 'something went wrong';
}

?>
