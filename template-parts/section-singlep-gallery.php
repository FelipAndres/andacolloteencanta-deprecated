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
    if(!$img_producto_1 && !$img_producto_2 && !$img_producto_3 && !$img_producto_4 && !$img_producto_5 && !$img_producto_6):?>
        <p style="padding: 1rem; text-align:center;">No tengo Fotos por el momento!</p>
    <?php endif; ?>
    
    <?php if ($img_producto_1) :?>
        <a data-fslightbox="fslightbox" class="producto--img" href="<?php echo esc_url($img_producto_1['url']);?>">
        <img src="<?php echo esc_url($img_producto_1['url']); ?>" alt="" />  
    <?php endif; ?></a>
    <?php if ($img_producto_2) :?>
        <a data-fslightbox="fslightbox" class="producto--img" href="<?php echo esc_url($img_producto_2['url']);?>">
        <img src="<?php echo esc_url($img_producto_2['url']); ?>" alt="" />  
    <?php endif; ?></a>
    <?php if ($img_producto_3) :?>
        <a data-fslightbox="fslightbox" class="producto--img" href="<?php echo esc_url($img_producto_3['url']);?>">
        <img src="<?php echo esc_url($img_producto_3['url']); ?>" alt="" />  
    <?php endif; ?></a>
    <?php if ($img_producto_4) :?>
        <a data-fslightbox="fslightbox" class="producto--img" href="<?php echo esc_url($img_producto_4['url']);?>">
        <img src="<?php echo esc_url($img_producto_4['url']); ?>" alt="" />  
    <?php endif; ?></a>
    <?php if ($img_producto_5) :?>
        <a data-fslightbox="fslightbox" class="producto--img" href="<?php echo esc_url($img_producto_5['url']);?>">
        <img src="<?php echo esc_url($img_producto_5['url']); ?>" alt="" />  
    <?php endif; ?></a>
    <?php if ($img_producto_6) :?>
        <a data-fslightbox="fslightbox" class="producto--img" href="<?php echo esc_url($img_producto_6['url']);?>">
        <img src="<?php echo esc_url($img_producto_6['url']); ?>" alt="" />  
    <?php endif; ?></a>