<?php get_header(); ?>

<section class="grid-categorias">
    <h1 class="color-categoria--dondedormir">¿Dónde Dormir?</h1>
    <aside class="aside--left">
        <div class="">
            <?php get_template_part('template-parts/section', 'menu-categorias'); ?>
        </div>
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/H.svg" alt="">
    </aside>
    <!-- CARTAS -->
    <?php get_template_part('template-parts/section', 'donde-dormir'); ?>
    <!-- FIN CARTAS -->
    <?php if (function_exists('pagination')) pagination(); ?>


    <aside class="aside--right">
        <img src="<?php echo get_template_directory_uri();  ?>/assets/images/icono-dondedormir.svg" alt="">
    </aside>
</section>
<div class="border-bottom"></div>
<section class="grid-categorias section-info">
    <h1 class="color-categoria--dondedormir">Disfute su Estadía en Nuestra Comuna</h1>
    <p>Andacollo cuenta con alojamiento de gran nivel, dispone de distintas categorías de servicios entre hoteles,
        cabañas, hostales, camping, casas familiares y residenciales, que cuentan con una gran variedad de servicios
        para
        brindar una cálida atención al cliente. Ubicados en los diferentes sectores de la comuna, puedes elegir un
        servicio
        cerca de los atractivos principales o alrededor de ellos, servicios de primer nivel, con cómodas
        habitaciones,
        atención personalizada y al mejor precio.</p>
    <picture class="collage--servicios">
        <img class="border-categoria--dondedormir" src="<?php echo get_template_directory_uri();  ?>/assets/images/collage-dormir.png" alt="">
    </picture>

    <aside class="aside-right--2">
        <?php get_template_part('template-parts/section', 'map'); ?>
        <img  src="<?php echo get_template_directory_uri();  ?>/assets/images/H.svg" alt="">
    </aside>
</section>

<?php get_footer(); ?>