<?php get_header(); ?>

<section class="grid-categorias grid-categorias--section1">
    <h1 class="color-categoria--productores">Productores</h1>
    <aside class="aside--left bkcolor-categoria--productores">
        <div class="aside--left-content">
            <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
        </div>
        <img class="icon-aside--left" src="<?php echo get_template_directory_uri();  ?>/assets/images/P.svg" alt="">
    </aside>
    <!-- CARTAS -->
    <div class="sub-grid-content">
        <?php get_template_part('template-parts/section', 'productor'); ?>
    </div>
    <!-- FIN CARTAS -->
    <?php if (function_exists('pagination')) { pagination();
    } ?>
    <?php //get_template_part('template-parts/section', 'paginacion'); ?>

    <aside class="aside--right">
        <picture>
            <img src="<?php echo get_template_directory_uri();  ?>/assets/images/icono-productor.svg" alt="">
        </picture>
    </aside>
</section>
<div class="border-bottom"></div>
<section class="grid-categorias grid-categorias-section2 section-info">
    <h1 class="color-categoria--productores">Disfrute el Sabor de Nuestra Tierra</h1>
    <p>Andacollo cuenta con una amplia zona rural perteneciente a las comunidades agrícolas, entre ellas Caldera y
        Damas, La Jarilla y el Azogue, la comunidad Cuesta el Manzano y el Comité Campesino de la Cortadera. En
        estos lugares podemos observar un paisaje distinto, caracterizado por pequeñas plantaciones de frutas y
        crianza de caprinos. Se destaca la producción de frutas y hortalizas de excelente calidad, y donde existen
        las queseras familiares, curtimbres, deshidratados de frutas, aceite de jojoba y oliva, elaboración de
        mermeladas y dulces. Un trayecto de gran belleza natural que conduce al visitante por quebradas, cerros y
        pueblos con tradiciones propias de la zona.
    </p>
    <picture class="collage--servicios">
        <img class="border-categoria--productores"
            src="<?php echo get_template_directory_uri();  ?>/assets/images/collage-productor.png" alt="">
    </picture>
    <aside class="aside-right--2 bkcolor-categoria--productores">
        <?php get_template_part('template-parts/section', 'map'); ?>
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/P.svg" alt="">
    </aside>
</section>

<?php get_footer(); ?>