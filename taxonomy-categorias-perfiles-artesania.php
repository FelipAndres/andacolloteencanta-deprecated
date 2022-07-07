<?php get_header(); ?>

<section class="grid-categorias grid-categorias--section1">
    <h1 class="color-categoria--artesania">Artesania</h1>
    <aside class="aside--left bkcolor-categoria--artesania">
        <div class="aside--left-content">
            <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
        </div>
        <img class="icon-aside--left" src="<?php echo get_template_directory_uri();  ?>/src/images/letras/A.svg" alt="">
    </aside>
    <!-- CARTAS -->
    <div class="sub-grid-content">
    <?php get_template_part('template-parts/section', 'artesania'); ?>
    </div>
    <!-- FIN CARTAS -->
    <?php if (function_exists('pagination')) { pagination();
    } ?>
    <?php //get_template_part('template-parts/section', 'paginacion'); ?>

    <aside class="aside--right">
        <picture>
            <img src="<?php echo get_template_directory_uri();  ?>/src/images/icons/icono-artesania.svg" alt="">
        </picture>
    </aside>
</section>
<div class="border-bottom"></div>
<section class="grid-categorias grid-categorias-section2 section-info">
    <h1 class="color-categoria--artesania">Encántese con los Sabores Locales</h1>
    <p>La principal actividad artesanal la constituye la venta de piedras de metal, miniaturas en bronce, imitando
        las
        herramientas de la pequeña minería y de la gran minería Andacollina. Artesanía religiosa propias de la
        fiesta de
        Andacollo, que permiten llevar un recuerdo de la intensa religiosidad que se vive en esta comuna. Se destaca
        la
        Artesanía en Piedra Andacollita, piedra única en el mundo que es trabajada y representada en objetos
        decorativos
        y utilitarios. La orfebrería representada en las joyas con metales y piedras preciosas, y la Artesanía en
        Greda
        del sector el Toro, quienes rescatan técnicas ancestrales en sus diseños y confecciones. Te invitamos a
        recorrer
        y conocer este hermoso arte Andacollino.
    </p>
    <picture class="collage--servicios">
        <img class="border-categoria--artesania"
            src="<?php echo get_template_directory_uri();  ?>/src/images/collage-cat/collage-artesania.png" alt="">
    </picture>
    <aside class="aside-right--2 bkcolor-categoria--artesania">
        <?php get_template_part('template-parts/section', 'map'); ?>
        <img src="<?php echo get_template_directory_uri();  ?>/src/images/letras/A.svg" alt="">
    </aside>
</section>

<?php get_footer(); ?>
