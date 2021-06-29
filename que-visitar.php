<?php
/*
Template Name: Que visitar
Template Post Type: perfil
*/
?>
<?php get_header(); ?>
<section class="position-2-1 grid--12-2">
  <div class="carta__container">
    <img class="carta--img" src="<?php the_post_thumbnail_url('perfil-img'); ?>" alt="">
    <div class="carta--titulo que-visitar">
      <h3><?php the_title(); ?></h3>
    </div>
    <div class="carta--content">
      <?php
        $informacion_contacto = get_field('info_contacto'); // parent group
        $nombre = $informacion_contacto['contacto']; 
        $numero = $informacion_contacto['fono']; 
        $direccion = $informacion_contacto['direccion']; 
        $email = $informacion_contacto['email']; 
        $descripcion_larga = $informacion_contacto['descripcion_larga']; // 'descripcion' is your child field
      ?>
      <div class="carta--descripcion"><?php echo $descripcion_larga;?></div>
      <div class="info-contacto carta--nombre"><img src="<?php echo get_template_directory_uri();  ?>/images/user-alt-solid.svg" alt=""> <p><?php echo $nombre;?></p></div>
      <div class="info-contacto carta--direccion"><img src="<?php echo get_template_directory_uri();  ?>/images/location-arrow-solid.svg" alt=""> <p><?php echo $direccion;?></p></div>
      <div class="info-contacto carta--telefono"><img src="<?php echo get_template_directory_uri();  ?>/images/phone-alt-solid.svg" alt=""> <p><?php echo "+569 " . $numero;?></p></div>
      <div class="info-contacto carta--correo"><img src="<?php echo get_template_directory_uri();  ?>/images/envelope-solid.svg" alt=""><p><?php echo $email;?></p></div>
    </div>
    <div class="rrss">
    <?php
      $rrss_contacto = get_field('rrss'); // parent group
      $facebook = $rrss_contacto['link_facebook']; 
      $instagram = $rrss_contacto['link_instagram']; 
      $email = $rrss_contacto['link_email'];
      $whatsapp = $rrss_contacto['link_whatsapp'];
    ?>
      <a href="<?php echo $facebook; ?>"><img src="<?php echo get_template_directory_uri();  ?>/images/facebook-brands.svg" alt="" ></a>
      <a href="<?php echo $instagram; ?>"><img src="<?php echo get_template_directory_uri();  ?>/images/instagram-brands.svg" alt=""></a>
      <a href="<?php echo $email; ?>"><img src="<?php echo get_template_directory_uri();  ?>/images/envelope-solid.svg" alt="" target="_blank"></a>
      <a href="<?php echo $whatsapp; ?>"><img src="<?php echo get_template_directory_uri();  ?>/images/whatsapp-brands.svg" alt=""></a>
    </div>
  </div>
  <div class="icono--servicio">
    
    <img src="<?php echo get_template_directory_uri();  ?>/images/icono-quevisitar.svg" alt="">
    <h2 class="que-visitar-title">Servicios</h2>
  </div>
  <div class="galeria--productos">
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
    <div class="producto position-1">
      <?php 
        if ($img_producto_1) {
          echo wp_get_attachment_image($img_producto_1, $img_size);
      } 
      ?>
    </div>
    <div class="producto position-1">
      <?php 
        if ($img_producto_2) {
          echo wp_get_attachment_image($img_producto_2, $img_size);
      } 
      ?>
    </div>
    <div class="producto position-1">
      <?php 
        if ($img_producto_3) {
          echo wp_get_attachment_image($img_producto_3, $img_size);
      } 
      ?>
    </div>
    <div class="producto position-2">
      <?php 
        if ($img_producto_4) {
          echo wp_get_attachment_image($img_producto_4, $img_size);
      } 
      ?>
    </div>
    <div class="producto position-2">
      <?php 
        if ($img_producto_5) {
          echo wp_get_attachment_image($img_producto_5, $img_size);
      } 
      ?>
    </div>
    <div class="producto position-2">
      <?php 
        if ($img_producto_6) {
          echo wp_get_attachment_image($img_producto_6, $img_size);
      } 
      ?>
    </div>
    
  </div>
  <aside class="aside--right que-visitar">
    <h1>Sitios de Interés</h1> 
    <img src="<?php echo get_template_directory_uri();  ?>/images/S.svg" alt="">
    <div class="sellos">
      <?php
       $grupo_sellos = get_field('certificaciones');// parent group
        // $sello
        $sellos = $grupo_sellos["sellos"];
        console_log($sellos);
        if( $sellos && in_array('Sello 1', $sellos) ) {?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/sellos/registro_turístico.svg"
        alt="sello registro turistico">
      <?php
      }
      if( $sellos && in_array('Sello 2', $sellos) ) {?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/sellos/sello_calidad_turistica.svg"
        alt="sello calidad turistica">
      <?php
      }
      if( $sellos && in_array('Sello 3', $sellos) ) {?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/sellos/sello_distinción_sustentabilidad.svg"
        alt="sello distincion de sustentabilidad">
      <?php
      }
      if( $sellos && in_array('Sello 4', $sellos) ) {?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/sellos/sello_confianza.svg"
        alt="sello de confianza">
      <?php
      }
      if( $sellos && in_array('Sello 5', $sellos) ) {?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/sellos/sello_sigo_turismo.svg"
        alt="Sello Sistema de Gestion Organizacional">
      <?php
      }
      if( $sellos && in_array('Sello 6', $sellos) ) {?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/sellos/sello_iso_9001.svg"
        alt="Sello Calidad Internacional ISO 9001">
      <?php
      }
      ?>


    </div>
  </aside>
</section>
</main> 
<?php get_footer(); ?>

