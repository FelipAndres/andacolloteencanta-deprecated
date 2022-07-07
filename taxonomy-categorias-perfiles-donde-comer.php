<?php get_header(); ?>

<section class="grid-categorias grid-categorias--section1">
    <h1 class="color-categoria--dondecomer">¿Dónde Comer?</h1>
    <aside class="aside--left bkcolor-categoria--dondecomer">
        <div class="aside--left-content">
            <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
        </div>
        <img class="icon-aside--left" src="<?php echo get_template_directory_uri();  ?>/src/images/letras/R.svg" alt="">
    </aside>
    <!-- CARTAS -->
    <div class="sub-grid-content">
    <?php get_template_part('template-parts/section', 'donde-comer'); ?>
    </div>
    <!-- FIN CARTAS -->
    <?php if (function_exists('pagination')) { pagination();
    } ?>
    <?php //get_template_part('template-parts/section', 'paginacion'); ?>

    <aside class="aside--right">
        <picture>
            <img src="<?php echo get_template_directory_uri();  ?>/src/images/icons/icono-dondecomer.svg" alt="">
        </picture>
    </aside>
</section>
<div class="border-bottom"></div>
<section class="grid-categorias grid-categorias-section2 section-info">
    <h1 class="color-categoria--dondecomer">Encántese con los Sabores Locales</h1>
    <p>Buscamos preservar nuestras tradiciones, rescatando nuestra gastronomía tradicional, a través de sabrosos
        platosD
        típicos Andacollino así como la comida típica chilena, a través de la preparación de cazuelas, porotos,
        guatitas,
        charquicán y diferentes tipos de carnes, además contamos con restaurantes dedicados a la elaboración de
        platos
        originales e internacionales, en espacios ideales para la familia y grupos de amigos, y si buscas de gustar
        platos
        con preparaciones diferentes impresiónate ver como se cocina el arroz, las carnes y otros ingredientes
        gracias
        al
        sabroso y acogedor sol de Andacollo. Te Invitados a conocer y probar los sabores de la cocina Andacollina.
    </p>
    <picture class="collage--servicios">
        <img class="border-categoria--dondecomer"
            src="<?php echo get_template_directory_uri();  ?>/src/images/collage-cat/collage-comer.png" alt="">
    </picture>
    <aside class="aside-right--2 bkcolor-categoria--dondecomer">
        <?php get_template_part('template-parts/section', 'map'); ?>
        <img src="<?php echo get_template_directory_uri();  ?>/src/images/letras/R.svg" alt="">
    </aside>
</section>

<?php get_footer(); ?>
