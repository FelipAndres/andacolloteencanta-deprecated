<?php
    $productos = get_field('productos_servicios');// parent group
    $nombre_producto = $productos['nombre_producto_1'];
    $descripcion_producto = $productos['descripcion_producto_1'];
    $img_producto_1 = $productos['producto_1'];
    $img_producto_2 = $productos['producto_2'];
    $img_producto_3 = $productos['producto_3'];
    $img_producto_4 = $productos['producto_4'];
    $img_producto_5 = $productos['producto_5'];
    $img_producto_6 = $productos['producto_6'];
    $img_size = "productos-img"

?>
<?php
    if(!$img_producto_1 && !$img_producto_2 && !$img_producto_3 && !$img_producto_4 && !$img_producto_5 && !$img_producto_6){
        ?>
        <p style="padding: 1rem; text-align:center;">No tengo Fotos por el momento!</p>
        <?php
    }
    ?>
    <div class="producto--img">
    <?php
                    if ($img_producto_1) {
                        echo wp_get_attachment_image($img_producto_1, $image_size);
                    } 
    ?>
</div>
<div class="producto--img">
    <?php 
                    if ($img_producto_2) {
                        echo wp_get_attachment_image($img_producto_2, $image_size);
                    } 
                    ?>
</div>
<div class="producto--img">
    <?php 
                    if ($img_producto_3) {
                        echo wp_get_attachment_image($img_producto_3, $image_size);
                    } 
                    ?>
</div>
<div class="producto--img">
    <?php 
                    if ($img_producto_4) {
                        echo wp_get_attachment_image($img_producto_4, $image_size);
                    } 
                    ?>
</div>
<div class="producto--img">
    <?php 
                    if ($img_producto_5) {
                        echo wp_get_attachment_image($img_producto_5, $image_size);
                    } 
                    ?>
</div>
<div class="producto--img">
    <?php 
                    if ($img_producto_6) {
                        echo wp_get_attachment_image($img_producto_6, $image_size);
                    } 
                    ?>
</div>