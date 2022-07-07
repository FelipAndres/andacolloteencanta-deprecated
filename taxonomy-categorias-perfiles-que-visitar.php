<?php get_header(); ?>

<section class="grid-categorias grid-categorias--section1">
    <h1 class="color-categoria--quevisitar">¿Qué Visitar?</h1>
    <aside class="aside--left bkcolor-categoria--quevisitar">
        <div class="aside--left-content">
            <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
        </div>
        <img class="icon-aside--left" src="<?php echo get_template_directory_uri();  ?>/src/images/letras/S.svg" alt="">
    </aside>
    <!-- CARTAS -->
    <div class="sub-grid-content">
        <?php get_template_part('template-parts/section', 'que-visitar'); ?>
    </div>
    <!-- FIN CARTAS -->
    <?php if (function_exists('pagination')) { pagination();
    } ?>
    <?php //get_template_part('template-parts/section', 'paginacion'); ?>

    <aside class="aside--right">
        <picture>
            <img src="<?php echo get_template_directory_uri();  ?>/src/images/icons/icono-quevisitar.svg" alt="">
        </picture>
    </aside>
</section>
<div class="border-bottom"></div>
<section class="grid-categorias grid-categorias-section2 section-info">
    <h1 class="color-categoria--quevisitar">Visite Nuestros Sitios de Interés</h1>
    <p>Te invitamos a visitar lo auténtico, con un gran valor espiritual, una tierra religiosa, minera y Astronómica, a
        vivir una experiencia única, a través de su cultura, la conexión con la naturaleza y el universo. Podrás conocer
        sus impresionantes templos religiosos y un majestuoso encuentro con nuestra Virgen del Rosario de Andacollo.
        Conocer Nuestro patrimonio cultural, antiguas costumbres y tradiciones que se manifiestan en cada uno de sus
        rincones, como las tradiciones mineras que aún son utilizadas por pirquineros donde se extraen las riquezas que
        proporciona esta tierra.
    </p>
    <picture class="collage--servicios">
        <img class="border-categoria--quevisitar"
            src="<?php echo get_template_directory_uri();  ?>/src/images/collage-cat/collage-visitar.png" alt="">
    </picture>
    <aside class="aside-right--2 bkcolor-categoria--quevisitar">
        <?php get_template_part('template-parts/section', 'map'); ?>
        <img src="<?php echo get_template_directory_uri();  ?>/src/images/letras/S.svg" alt="">
    </aside>
</section>

<?php get_footer(); ?>