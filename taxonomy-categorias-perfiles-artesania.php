<?php get_header(); ?>
  <section class="position-2-2 grid--12-2 ">
    <aside class="aside--left">
    <div class="cartas-cat">
      <?php get_template_part('includes/section', 'menu-categorias'); ?>
    </div>
      <img src="<?php echo get_template_directory_uri();  ?>/images/A.svg" alt="">
    </aside>
   
    <div class="cartas__container--servicios">
      <?php get_template_part('includes/section', 'artesania'); ?>        
    </div>
    <div class="paginacion2">
      <?php get_template_part('includes/section', 'paginacion-secondary'); ?>
    </div>
    <?php if (function_exists('pagination')) pagination(); ?>
    <aside class="aside--right">
        <h1>Artesanos Locales</h1>
        <img src="<?php echo get_template_directory_uri();  ?>/images/icono-artesania.svg" alt="">
    </aside>
    <div class="border-bottom"></div>
  </section> 
  <section class="position-3-1 grid--12-2">
    <h1>Ruta de la Artesanía</h1>
      <p>La principal actividad artesanal la constituye la venta de piedras de metal, miniaturas en bronce, imitando las herramientas de la pequeña minería y de la gran minería Andacollina. Artesanía religiosa propias de la fiesta de Andacollo, que permiten llevar un recuerdo de la intensa religiosidad que se vive en esta comuna. Se destaca la Artesanía en Piedra Andacollita, piedra única en el mundo que es trabajada y representada en objetos decorativos y utilitarios. La orfebrería representada en las joyas con metales y piedras preciosas, y la Artesanía en Greda del sector el Toro, quienes rescatan técnicas ancestrales en sus diseños y confecciones. Te invitamos a recorrer y conocer este hermoso arte Andacollino.</p>
    <figure class="collage--servicios">
      <img src="<?php echo get_template_directory_uri();  ?>/images/collage-artesania.png" alt="">
    </figure>
    <aside class="aside--right--color">
    <?php get_template_part('includes/section', 'map'); ?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/A.svg" alt="">
    </aside>
  </section>
</main> 
<?php get_footer(); ?>
