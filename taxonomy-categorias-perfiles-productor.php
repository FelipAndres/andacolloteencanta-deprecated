<?php get_header(); ?>

  <section class="position-2-2 grid--12-2 ">
    <aside class="aside--left">
    <div class="cartas-cat">
      <?php get_template_part('includes/section', 'menu-categorias'); ?>
    </div>
      <img src="<?php echo get_template_directory_uri();  ?>/images/P.svg" alt="">
    </aside>
   
    <div class="cartas__container--servicios">
      <?php get_template_part('includes/section', 'productor'); ?>            
    </div>
    <div class="paginacion2">
      <?php get_template_part('includes/section', 'paginacion-secondary'); ?>
      <p class="mobile-title-servicios">Productores</p>
    </div>
    <?php if (function_exists('pagination')) pagination(); ?>
    <aside class="aside--right">
        <h1>Productores Locales</h1>
        <img src="<?php echo get_template_directory_uri();  ?>/images/icono-productor.svg" alt="">
    </aside>
    <div class="border-bottom"></div>
  </section> 
  <section class="position-3-1 grid--12-2">
    <h1>Disfrute el Sabor de Nuestra Tierra</h1>
      <p>Andacollo cuenta con una amplia zona rural perteneciente a las comunidades agrícolas, entre ellas Caldera y Damas, La Jarilla y el Azogue, la comunidad Cuesta el Manzano y el Comité Campesino de la Cortadera. En estos lugares podemos observar un paisaje distinto, caracterizado por pequeñas plantaciones de frutas y crianza de caprinos. Se destaca la producción de frutas y hortalizas de excelente calidad, y donde existen las queseras familiares, curtimbres, deshidratados de frutas, aceite de jojoba y oliva, elaboración de mermeladas y dulces. Un trayecto de gran belleza natural que conduce al visitante por quebradas, cerros y pueblos con tradiciones propias de la zona. </p>
   <figure class="collage--servicios">
      <img src="<?php echo get_template_directory_uri();  ?>/images/collage-productor.png" alt="">
    </figure>
    <aside class="aside--right--color">
    <?php get_template_part('includes/section', 'map'); ?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/P.svg" alt="">
    </aside>
  </section>
</main> 
<?php get_footer(); ?>

