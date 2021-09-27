<?php get_header(); ?>

  <section class="position-2-2 grid--12-2 ">
    <aside class="aside--left">
    <div class="cartas-cat">
      <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
    </div>
      <img src="<?php echo get_template_directory_uri();  ?>/assets/images/E.svg" alt="">
    </aside>
   
    <div class="cartas__container--servicios">
      <?php get_template_part('template-parts/section', 'emprendedor'); ?>      
    </div>
    <div class="paginacion2">
      <?php get_template_part('template-parts/section', 'paginacion-secondary'); ?>
      <p class="mobile-title-servicios">Emprendedores</p>
    </div>
    <?php if (function_exists('pagination')) pagination(); ?>
    <aside class="aside--right">
        <h1>Emprendedores Locales</h1>
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/icono-emprendedor.svg" alt="">
    </aside>
    <div class="border-bottom"></div>
  </section> 
  <section class="position-3-1 grid--12-2">
    <h1>Conoce a Nuestros Emprendedores</h1>
      <p>Andacollo cuenta con una gran red de emprendedores que se abren camino en la creación y elaboración de sus propias propuestas, en la confección y creaciones propias, del área de la gastronomía, productos y servicios. Podrás encontrar productos utilitarios y decorativos, confeccionados en diferentes materiales, elaboración de alimentos artesanales, y servicios complementarios. Los invitamos a conocer partes de sus propuestas y visitar esta vitrina informativa, apoyando a nuestros creadores locales.</p>
   <figure class="collage--servicios">
      <img src="<?php echo get_template_directory_uri();  ?>/assets/images/collage-emprendedor.png" alt="">
    </figure>
    <aside class="aside--right--color">
    <?php get_template_part('template-parts/section', 'map'); ?>
      <img src="<?php echo get_template_directory_uri();  ?>/assets/images/E.svg" alt="">
    </aside>
  </section>
</main> 
<?php get_footer(); ?>

