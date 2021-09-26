<?php get_header(); ?>

<section class="position-2-2 grid--12-2 ">
  <aside class="aside--left">
    <div class="cartas-cat">
      <?php get_template_part('includes/section', 'menu-categorias'); ?>
    </div>
    <img src="<?php echo get_template_directory_uri();  ?>/images/H.svg" alt="">
  </aside>


  <div class="cartas__container--servicios">
    <?php get_template_part('includes/section', 'donde-dormir'); ?>
  </div>
  <div class="paginacion2">
    <?php get_template_part('includes/section', 'paginacion'); ?>
    <p class="mobile-title-servicios">¿Dónde Dormir?</p>
  </div>
  <?php if (function_exists('pagination')) pagination(); ?>
  <aside class="aside--right">
    <h1>¿Donde Dormir?</h1>
    <img src="<?php echo get_template_directory_uri();  ?>/images/icono-dondedormir.svg" alt="">
  </aside>
  <div class="border-bottom"></div>
</section>
<section class="position-3-1 grid--12-2 ">
  <h1>Disfute su Estadía en Nuestra Comuna</h1>
  <p>Andacollo cuenta con alojamiento de gran nivel, dispone de distintas categorías de servicios entre hoteles,
    cabañas, hostales, camping, casas familiares y residenciales, que cuentan con una gran variedad de servicios para
    brindar una cálida atención al cliente. Ubicados en los diferentes sectores de la comuna, puedes elegir un servicio
    cerca de los atractivos principales o alrededor de ellos, servicios de primer nivel, con cómodas habitaciones,
    atención personalizada y al mejor precio.</p>
  <figure class="collage--servicios">
    <img src="<?php echo get_template_directory_uri();  ?>/images/collage-dormir.png" alt="">
  </figure>
  <aside class="aside--right--color">
    <?php get_template_part('includes/section', 'map'); ?>
    <img src="<?php echo get_template_directory_uri();  ?>/images/H.svg" alt="">
  </aside>
</section>
</main>
<?php get_footer(); ?>