<?php get_header(); ?>

<section class="grid-categorias">
    <h1 class="color-categoria--emprendedores">Emprendedores</h1>
    <aside class="aside--left">
        <div class="">
            <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
        </div>
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/E.svg" alt="">
    </aside>
    <!-- CARTAS -->
    <?php get_template_part('template-parts/section', 'emprendedor'); ?>
    <!-- FIN CARTAS -->
    <?php if (function_exists('pagination')) pagination(); ?>


    <aside class="aside--right">
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/icono-emprendedor.svg" alt="">
    </aside>
</section>
<div class="border-bottom"></div>
<section class="grid-categorias section-info">
        <h1 class="color-categoria--emprendedores">Conoce a Nuestros Emprendedores</h1>
        <p>Andacollo cuenta con una gran red de emprendedores que se abren camino en la creación y elaboración de sus
            propias propuestas, en la confección y creaciones propias, del área de la gastronomía, productos y
            servicios. Podrás encontrar productos utilitarios y decorativos, confeccionados en diferentes materiales,
            elaboración de alimentos artesanales, y servicios complementarios. Los invitamos a conocer partes de sus
            propuestas y visitar esta vitrina informativa, apoyando a nuestros creadores locales.</p>
        <picture class="collage--servicios">
            <img class="border-categoria--emprendedores" src="<?php echo get_template_directory_uri();  ?>/assets/images/collage-emprendedor.png" alt="">
        </picture>

    <aside class="aside-right--2">
        <?php get_template_part('template-parts/section', 'map'); ?>
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/E.svg" alt="">
    </aside>
</section>

<?php get_footer(); ?>