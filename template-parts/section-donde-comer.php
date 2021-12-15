<!-- Loop con custom query para fetchear la categoria donde comer -->
<?php

// query to set the posts per page to 3
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
            'terms'    => 'donde-comer',
        ),
    ),
);
$query = new WP_Query($args); ?>
<?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>

<div class="cards--servicios">
    <?php if (has_post_thumbnail()) : ?>
    <img class="img--servicios" src="<?php the_post_thumbnail_url("archive-img"); ?>" alt="<?php the_title(); ?>">
    <?php endif; ?>
    <div class="card-info">
        <h2><?php the_title(); ?></h2>
        <?php
          $informacion_contacto = get_field('info_contacto'); // parent group
          $descripcion_corta = $informacion_contacto['descripcion_corta']; // 'descripcion' is your child field
        ?>
        <p class="card-extracto"><?php echo $descripcion_corta;?></p>
        <a href="<?php the_permalink(); ?>">
            <button class="card-btn">
                <label for="Ver servicios">Ver Servicios</label>
            </button>
        </a>
    </div>
</div>
<?php endwhile; ?>
<?php else : ?>
Disculpa no hay perfiles que mostrar
<?php endif; ?>
<?php wp_reset_query(); ?>