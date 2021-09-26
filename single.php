<?php get_header(); ?>
<section class="position-2-3 grid--12-3">
  <div class="breadcrumb">
    <?php if (function_exists('the_breadcrumb')) the_breadcrumb(); ?>
    <?php //custom_breadcrumbs(); ?>
  </div>
  <aside class="aside--noticias">
    <h1><?php the_title(); ?></h1>
    <figure>
      <img class="aside--n" src="<?php echo get_template_directory_uri();  ?>/images/N.svg" alt="">
    </figure>
  </aside>
  <figure class="img--noticias">
    <img src="<?php the_post_thumbnail_url('featured-entrada'); ?>" alt="<?php the_title(); ?>">
  </figure>

  <?php 
      // $datos__array = get_field('grupo__desarollo');
      $bajada_noticia = get_field('bajada_noticia');
      $link_imagen = get_field('link_noticia');
      $imagen_link = get_field('imagen_link');
      $pie_de_foto_1 = get_field('Pie_link_complementario');
      $autor_de_foto_1 = get_field('creditos_link');
      $pie_de_foto_2 = get_field('Titulo_imagen_complemento');
      $autor_de_foto_2 = get_field('creditos_foto_complementaria');

      $img_featured_footer = get_field('imagen_noticia_3');
      $img_size = 'lead-entrada';
      $img_size_featured_footer = 'featured-entrada';
      ?>

  <div class="copete__noticia">
    <h1><?php echo $bajada_noticia; ?></h1>
    <div class="footer__datos-2">
      <img class="aside--n-2" src="<?php echo get_template_directory_uri();  ?>/images/N.svg" alt="">
      <div class="flex-end">
        <div class="footer__categoria"><?php the_category(' - '); ?></div>
        <div class="footer__fecha">
          <p><strong><?php echo get_the_date("j F, Y"); ?></strong><br> por
            <?php the_author_meta('display_name', $post->post_author ); ?>
          </p>
        </div>
      </div>

    </div>
  </div>

</section>

<section class="position-3-2 grid--12-3-0">
  <div class="titulo__noticia">
    <h1><?php the_title(); ?></h1>
  </div>
  <div class="content__noticia">
    <p><?php the_field('cuerpo_noticia'); ?></p>
  </div>
  <figure class="img2__noticia">
    <?php echo wp_get_attachment_image($imagen_link, $img_size); ?>
  </figure>

  <div class="footer__noticia">
    <figure class="content__footer">
      <img class="aside-n" src="<?php echo get_template_directory_uri();  ?>/images/N.svg" alt="">
      <div class="footer__datos">
        <div class="footer__categoria"><?php the_category(' - '); ?></div>
        <div class="footer__fecha">
          <p><strong><?php echo get_the_date("j F, Y"); ?></strong><br> por
            <?php the_author_meta('display_name', $post->post_author ); ?>
          </p>
        </div>

      </div>
      <div class="pie_de_foto">
        <p><?php echo $pie_de_foto_1 ?></p>
        <p>Autor: <?php echo $autor_de_foto_1 ?></p>
      </div>
    </figure>
  </div>

</section>

<section class="position-4-1 grid--12-3-1">
  <aside class="aside--noticias-2">
    <p class="texto-infografia"><?php the_field('infografia_noticia'); ?></p>
    <figure class="flex">
      <img class="aside--n" src="<?php echo get_template_directory_uri();  ?>/images/N.svg" alt="">
      <div class="footer__datos">
        <div class="footer__categoria"><?php the_category(' - '); ?></div>
        <div class="footer__fecha">
          <p><strong><?php echo get_the_date("j F, Y"); ?></strong><br> por
            <?php the_author_meta('display_name', $post->post_author ); ?>
          </p>
        </div>
      </div>
    </figure>

  </aside>
  <figure class="img--noticias2">
    <?php echo wp_get_attachment_image($img_featured_footer,$img_size_featured_footer); ?>
  </figure>
  <div class="pie_de_foto-2">
    <p><?php echo $pie_de_foto_2 ?></p>
    <p>Autor: <?php echo $autor_de_foto_2 ?></p>
  </div>
</section>
</main>
<?php get_footer(); ?>