<?php get_header(); ?>

  <section class="position-2-2 grid--12-2">

    <div class="title--noticias">
      <h2>Descubre las novedades de Andacollo</h2>
    </div>

    <div class="cartas__container--noticias">
      <?php get_template_part("template-parts/section", "indexblogposts"); ?>
    </div>
    <div class="paginacion2">
      <?php get_template_part('template-parts/section', 'paginacion-noticias'); ?>
    </div>
    <?php if (function_exists('pagination')) pagination(); ?>

    <aside class="aside--noticias">
      <p class="aside-title">Conoce aquí las novedades que 
        ofrece nuestra comuna de Andacollo</p>
        <p class="aside-title-mobile">Noticias</p>
      <figure>
        <img class="aside--n" src="<?php echo get_template_directory_uri();  ?>/assets/images/N.svg" alt="">
      </figure>
    </aside>

  </section>  

</main> 
<?php get_footer(); ?>

