<!-- Loop para traer todo los post(noticias) por fechas de subida en Front-page.php y archive.php -->

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
  <figure class="cartas--noticias">
    <?php if (has_post_thumbnail()) : ?>
      <img class="img--noticias" src="<?php the_post_thumbnail_url('img-carta-noticias'); ?>" alt="<?php the_title(); ?>">
    <?php endif; ?>
    <div class="texto__container">
      <h1><?php the_title(); ?></h1>
      <p class="extracto__noticias"><?php the_field('bajada_noticia');?></p>
      <p class="autor__noticias">Publicado <?php echo get_the_date(); ?> por <?php the_author(); ?></p>
      <a href="<?php the_permalink(); ?>">
        <button class="btn__noticias"><label for="Seguir  Leyendo">VER MÁS...</label></button>
      </a>
      </div>
  </figure>

<?php endwhile; ?> 
<?php else : ?> 
  OOPS Nada por aquí...
<?php endif; ?>
<?php wp_reset_query(); ?>