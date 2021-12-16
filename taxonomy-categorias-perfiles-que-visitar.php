<?php get_header(); ?>

<section class="grid-categorias">
    <h1 class="color-categoria--quevisitar">¿Qué Visitar?</h1>
    <aside class="aside--left">
        <div class="">
            <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
        </div>
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/S.svg" alt="">
    </aside>
    <!-- CARTAS -->
    <?php get_template_part('template-parts/section', 'productor'); ?>
    <!-- FIN CARTAS -->
    <?php if (function_exists('pagination')) pagination(); ?>

    <aside class="aside--right">
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/icono-quevisitar.svg" alt="">
    </aside>
</section>
<div class="border-bottom"></div>
<section class="grid-categorias section-info">

    <h1 class="color-categoria--quevisitar">Visite Nuestros Sitios de Interés</h1>
    <p>Te invitamos a visitar lo auténtico, con un gran valor espiritual, una tierra religiosa, minera y Astronómica, a
        vivir una experiencia única, a través de su cultura, la conexión con la naturaleza y el universo. Podrás conocer
        sus impresionantes templos religiosos y un majestuoso encuentro con nuestra Virgen del Rosario de Andacollo.
        Conocer Nuestro patrimonio cultural, antiguas costumbres y tradiciones que se manifiestan en cada uno de sus
        rincones, como las tradiciones mineras que aún son utilizadas por pirquineros donde se extraen las riquezas que
        proporciona esta tierra. </p>
    <picture class="collage--servicios">
        <img class="border-categoria--quevisitar"src="<?php echo get_template_directory_uri();  ?>/assets/images/collage-visitar.png" alt="">
    </picture>

    <aside class="aside-right--2">
        <?php get_template_part('template-parts/section', 'map'); ?>
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/S.svg" alt="">
    </aside>
</section>

<?php get_footer(); ?>