<!-- Loop para traer todo los post(noticias) por fechas de subida en Front-page.php y archive.php -->

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="cards--servicios">
    <?php if (has_post_thumbnail()) : ?>
    <img class="img--servicios img--noticias-post" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
    <?php endif; ?>
    <div class="card-info">
        <h2><?php the_title(); ?></h2>
        <p class="card-extracto"><?php the_field('bajada_noticia');?></p>
        <p class="autor__noticias">Publicado <?php echo get_the_date(); ?> por <?php the_author(); ?></p>
        <a href="<?php the_permalink(); ?>">
            <button class="card-btn card-btn--noticias"><label for="Seguir  Leyendo">Leer más</label></button>
        </a>
    </div>
</div>

<?php endwhile; ?>
<?php else : ?>
OOPS Nada por aquí...
<?php endif; ?>
<?php wp_reset_query(); ?>