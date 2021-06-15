<?php get_header(); ?>

  <section class="position-2-2 grid--12-2">
    <aside class="aside--left">
      <div class="cartas-cat">
        <?php get_template_part('includes/section', 'menu-categorias'); ?>
      </div>
      <img src="<?php echo get_template_directory_uri();  ?>/images/R.svg" alt="">
    </aside>
   
    <div class="cartas__container--servicios">
      <?php get_template_part('includes/section', 'donde-comer'); ?>
    </div>
    <div class="paginacion2">
      <?php get_template_part('includes/section', 'paginacion'); ?>
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
      <p>Buscamos preservar nuestras tradiciones, rescatando nuestra gastronomía tradicional, a través de sabrosos platos típicos Andacollino así como la comida típica chilena, a través de la preparación de cazuelas, porotos, guatitas, charquicán y diferentes tipos de carnes, además contamos con restaurantes dedicados a la elaboración de platos originales e internacionales, en espacios ideales para la familia y grupos de amigos, y si buscas de gustar platos con preparaciones diferentes impresiónate ver como se cocina el arroz, las carnes y otros ingredientes gracias al sabroso y acogedor sol de Andacollo. Te Invitados a conocer y probar los sabores de la cocina Andacollina.</p>
    <figure class="collage--servicios">
      <img src="<?php echo get_template_directory_uri();  ?>/images/collage-comer.png" alt="">
    </figure>
    <aside class="aside--right--color">
      <?php get_template_part('includes/section', 'map'); ?>
      <img src="<?php echo get_template_directory_uri();  ?>/images/R.svg" alt="">
    </aside>
  </section>
</main> 
<?php get_footer(); ?>

