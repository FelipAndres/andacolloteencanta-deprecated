<?php get_header(); ?>

<section class="grid-categorias grid-categorias--section1">
    <div class="title--noticias">
        <h1>Descubre las novedades de Andacollo</h1>
    </div>
    <div class="sub-grid-content sub-grid-content--noticias">
        <?php get_template_part("template-parts/section", "indexblogposts"); ?>
    </div>
    <?php if (function_exists('pagination')) pagination(); ?>

    <aside class="aside--right aside-right--noticias">
        <p class="aside-title">Conoce aquí las novedades que
            ofrece nuestra comuna de Andacollo</p>
        <picture>
            <img class="aside--n" src="<?php echo get_template_directory_uri();  ?>/src/images/letras/N.svg" alt="">
        </picture>
    </aside>

</section>

</main>
<?php get_footer(); ?> 

