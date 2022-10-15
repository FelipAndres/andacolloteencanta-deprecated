<?php
/*
Template Name: Emprendedor
Template Post Type: perfil
*/
?>
<?php get_header(); ?>
<section class="grid--single-perfil">
    <?php if (function_exists('the_breadcrumb')) { the_breadcrumb(); } ?>
    <div class="info-perfil">
        <div class="info-perfil--content card-styles">
            <h1 class="emprendedor"><?php the_title(); ?></h1>
            <picture>
                <img class="" src="<?php the_post_thumbnail_url(); ?>" alt="">
            </picture>
            <?php
              $informacion_contacto = get_field('info_contacto'); // parent group
              $nombre = $informacion_contacto['contacto']; 
              $numero = $informacion_contacto['fono']; 
              $direccion = $informacion_contacto['direccion']; 
              $email = $informacion_contacto['email']; 
              $descripcion_larga = $informacion_contacto['descripcion_larga']; // 'descripcion' is your child field
            ?>
            <div class=""><?php echo $descripcion_larga;?></div>
        </div>
        <h2 class="titulo-sections-perfil--contacto">Contacto</h2>
        <div class="info-contacto card-styles">
            <p><?php echo $nombre;?></p>
            <p><?php echo $direccion;?></p>
            <p><?php echo "+569 " . $numero;?></p>
            <p><?php echo $email;?></p>
        </div>

        <h2 class="titulo-sections-perfil--rrss">Redes Sociales</h2>
        <div class="info-perfil--rrss card-styles">
            <?php get_template_part('template-parts/section', 'singlep-rrss'); ?>
        </div>
        <h2 class="titulo-sections-perfil--sellos">Sellos de Calidad</h2>
        <div class="info-perfil--sellos card-styles">
            <?php get_template_part('template-parts/section', 'singlep-sellos'); ?>
        </div>
        <h2 class="titulo-sections-perfil--fotos">Galería de Fotos</h2>
        <div class="galeria--productos card-styles">
            <?php get_template_part('template-parts/section', 'singlep-gallery'); ?>
        </div>

        <aside class="aside--right donde-comer">
            <h1>Servicio de Alimentación</h1>
            <img class="aside-r-img" src="<?php echo get_template_directory_uri();  ?>/src/images/E.svg" alt="">
        </aside>

        <a class="btn-posicion" href="<?php site_url(); ?>/categorias-perfiles/emprendedor">
            <button class="card-btn card-btn--noticias btn-single--noticia "><label for="Volver">Volver</label></button>
        </a>
    </div>
</section>
</main>
<?php get_footer(); ?>