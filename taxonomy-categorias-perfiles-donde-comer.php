<?php get_header(); ?>

  <section class="position-2-2 grid--12-2">
    <aside class="aside--left">
      <div class="cartas-cat">
      <h1>Categorías</h1>
      <a href="<?php get_site_url(); ?>/categorias-perfiles/donde-dormir">¿Dónde Dormir?</a>
      <a href="<?php get_site_url(); ?>/categorias-perfiles/que-visitar">¿Que visitar?</a>
      <a href="<?php get_site_url(); ?>/categorias-perfiles/artesania">Artesanías</a>
      <a href="<?php get_site_url(); ?>/categorias-perfiles/emprendedor">Emprendedores</a>
      <a href="<?php get_site_url(); ?>/categorias-perfiles/productor">Productores</a>
      </div>
        <img src="<?php echo get_template_directory_uri();  ?>/images/R.svg" alt="">
    </aside>
   
    <div class="cartas__container--servicios">
      <?php get_template_part('includes/section', 'donde-comer'); ?>
    </div>
    <div class="paginacion2">
      <?php if( get_previous_posts_link() ) {
        ?>
        <button class="btn-posts"><?php previous_posts_link('Anterior'); ?> </button>
      <?php
      } 
      ?>
      <?php if( get_next_posts_link() ) {
        ?>
        <button class="btn-posts"><?php next_posts_link('Siguiente'); ?> </button>
      <?php
      } 
      ?>
    </div>
    <?php if (function_exists('pagination')) pagination(); ?>
    <aside class="aside--right">
        <h1>¿Donde Comer?</h1>
        <img src="<?php echo get_template_directory_uri();  ?>/images/icono-dondecomer.svg" alt="">
    </aside>
    <div class="border-bottom"></div>
  </section> 

  <section class="position-3-1 grid--12-2">
  <h1>Encántese con los Sabores Locales</h1>
  <p>Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta Descripción e invitación a realizar la Ruta </p>
  <figure class="collage--servicios">
    <img src="<?php echo get_template_directory_uri();  ?>/images/collage-comer.png" alt="">
  </figure>
  <aside class="aside--right--color">
  <img src="<?php echo get_template_directory_uri();  ?>/images/R.svg" alt="">
  </aside>
  </section>
</main> 
<?php get_footer(); ?>

