<?php get_header(); ?>

  <section class="position-2-2 grid--12-2 ">
    <aside class="aside--left">
    <div class="cartas-cat">
      <?php get_template_part('includes/section', 'menu-categorias'); ?>
    </div>
      <img src="<?php echo get_template_directory_uri();  ?>/images/S.svg" alt="">
    </aside>
   
    <div class="cartas__container--servicios">
      <?php get_template_part('includes/section', 'que-visitar'); ?>
    </div>
    <div class="paginacion2">
      <?php get_template_part('includes/section', 'paginacion'); ?>
    </div>
    <?php if (function_exists('pagination')) pagination(); ?>
    <aside class="aside--right">
        <h1>Sitios de Interés</h1>
        <img src="<?php echo get_template_directory_uri();  ?>/images/icono-quevisitar.svg" alt="">
    </aside>
    <div class="border-bottom"></div>
  </section> 
  <section class="position-3-1 grid--12-2">
    <h1>Visite Nuestros Sitios de Interés</h1>
     <p>Te invitamos a visitar lo auténtico, con un gran valor espiritual, una tierra religiosa, minera y Astronómica, a vivir una experiencia única, a través de su cultura, la conexión con la naturaleza y el universo. Podrás conocer sus impresionantes templos religiosos y un majestuoso encuentro con nuestra Virgen del Rosario de Andacollo. Conocer Nuestro patrimonio cultural, antiguas costumbres y tradiciones que se manifiestan en cada uno de sus rincones, como las tradiciones mineras que aún son utilizadas por pirquineros donde se extraen las riquezas que proporciona esta tierra. </p>
    <figure class="collage--servicios">
      <img src="<?php echo get_template_directory_uri();  ?>/images/collage-visitar.png" alt="">
    </figure>
    <aside class="aside--right--color">
    <?php get_template_part('includes/section', 'map'); ?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/S.svg" alt="">
    </aside>
  </section>
</main> 
<?php get_footer(); ?>

