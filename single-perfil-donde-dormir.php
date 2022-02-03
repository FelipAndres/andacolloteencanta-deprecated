<?php
/*
Template Name: Donde Dormir
Template Post Type: perfil
*/
?>
<?php get_header(); ?>
<section class="grid--single-perfil">
    <?php if (function_exists('the_breadcrumb')) { the_breadcrumb();
    } ?>
    <div class="info-perfil">
        <div class="info-perfil--content card-styles">
            <h1 class="donde-dormir"><?php the_title(); ?></h1>
            <picture><img class="" src="<?php the_post_thumbnail_url(); ?>" alt=""></picture>
            <?php
              $informacion_contacto = get_field('info_contacto'); // parent group
              $nombre = $informacion_contacto['contacto']; 
              $numero = $informacion_contacto['fono']; 
              $direccion = $informacion_contacto['direccion']; 
              $email = $informacion_contacto['email']; 
              $descripcion_larga = $informacion_contacto['descripcion_larga']; // 'descripcion' is your child field
            ?>
            <div class="info-contacto--descripcion"><?php echo $descripcion_larga;?></div>
        </div>
        <h2 class="titulo-sections-perfil--contacto">Contacto</h2>
        <div class="info-contacto card-styles">
            <p><?php echo $nombre;?></p>
            <p><?php echo $direccion;?></p>
            <p><?php echo "+569 " . $numero;?></p>
            <p><?php echo $email;?></p>
        </div>
        <div class="info-perfil--rrss card-styles">
            <?php
              $rrss_contacto = get_field('rrss'); // parent group
              $facebook = $rrss_contacto['link_facebook']; 
              $instagram = $rrss_contacto['link_instagram']; 
              $email = $rrss_contacto['link_email'];
              $whatsapp = $rrss_contacto['link_whatsapp'];
            ?>

            <a href="<?php echo $facebook; ?>"><img class="info-perfil--icons"
                    src="<?php echo get_template_directory_uri();  ?>/assets/images/facebook-brands.svg" alt=""></a>
            <a href="<?php echo $instagram; ?>"><img class="info-perfil--icons"
                    src="<?php echo get_template_directory_uri();  ?>/assets/images/instagram-brands.svg" alt=""></a>
            <a href="<?php echo $email; ?>"><img class="info-perfil--icons"
                    src="<?php echo get_template_directory_uri();  ?>/assets/images/envelope-solid.svg" alt=""
                    target="_blank"></a>
            <a href="<?php echo $whatsapp; ?>"><img class="info-perfil--icons"
                    src="<?php echo get_template_directory_uri();  ?>/assets/images/whatsapp-brands.svg" alt=""></a>

        </div>
        <h2 class="titulo-sections-perfil--sellos" >Sellos de Calidad</h2>
        <div class="info-perfil--sellos card-styles">
            <?php
                $grupo_sellos = get_field('certificaciones');// parent group
                // $sello
                $sellos = $grupo_sellos["sellos"];
                // console_log($sellos);
            if($sellos && in_array('Sello 1', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/assets/images/sellos/registro_turístico.svg"
                alt="sello registro turistico">
            <?php
            }
            if($sellos && in_array('Sello 2', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/assets/images/sellos/sello_calidad_turistica.svg"
                alt="sello calidad turistica">
            <?php
            }
            if($sellos && in_array('Sello 3', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/assets/images/sellos/sello_distinción_sustentabilidad.svg"
                alt="sello distincion de sustentabilidad">
            <?php
            }
            if($sellos && in_array('Sello 4', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/assets/images/sellos/sello_confianza.svg"
                alt="sello de confianza">
            <?php
            }
            if($sellos && in_array('Sello 5', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/assets/images/sellos/sello_sigo_turismo.svg"
                alt="Sello Sistema de Gestion Organizacional">
            <?php
            }
            if($sellos && in_array('Sello 6', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/assets/images/sellos/sello_iso_9001.svg"
                alt="Sello Calidad Internacional ISO 9001">
            <?php
            }
            ?>
        </div>

        <!-- <div class="icono--servicio">

        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/icono-dondecomer.svg" alt="">
        <h2 class="donde-comer-title"> Servicios</h2>
    </div> -->
        <h2 class="titulo-sections-perfil--fotos">Galería de Fotos</h2>
        <div class="galeria--productos card-styles">

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

        </div>
        <aside class="aside--right donde-comer">
            <h1>Servicio de Alimentación</h1>

            <img class="aside-r-img" src="<?php echo get_template_directory_uri();  ?>/assets/images/R.svg" alt="">
        </aside>

         <a class="justify-flex-end btn-posicion" href="<?php site_url(); ?>/categorias-perfiles/donde-dormir">
            <button class="card-btn card-btn--noticias btn-single--noticia "><label for="Volver">Volver</label></button>
        </a>
</section>
</main>
<?php get_footer(); ?>