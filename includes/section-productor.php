<!-- Loop con custom query para fetchear la categoria productor -->
<?php
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$args = array(
    'posts_per_page' => 3,
    'orderby' => 'date',
    'post_type' => 'perfil',
    'paged' => $paged,
    'tax_query' => array(
        array(
            'taxonomy' => 'categorias-perfiles',
            'field'    => 'slug',
            'terms'    => 'productor',
        ),
    ),
);
$query = new WP_Query($args);
?>

  <?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
    <figure class="cartas--servicios">
      <div class="texto__container">
        <h1><?php the_title(); ?></h1>
        <?php
          $informacion_contacto = get_field('info_contacto'); // parent group
          $descripcion_corta = $informacion_contacto['descripcion_corta']; // 'descripcion' is your child field
        ?>
        <p class="extracto__descripcion"><?php echo $descripcion_corta;?></p>
        <a href="<?php the_permalink(); ?>">
          <button class="btn__servicios">
            <label for="Ver productos">Ver Productos</label>
          </button>
        </a>
      </div>
      <?php if (has_post_thumbnail()) : ?>
        <img class="img--servicios" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
      <?php endif; ?>
    </figure>
  <?php endwhile; ?>

<?php wp_link_pages(); ?>

<?php else : ?>
    Disculpa no hay perfiles que mostrar
<?php endif; ?>