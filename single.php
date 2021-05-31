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
      $datos__array = get_field('grupo__desarollo');
      $lead_parrafo = $datos__array['lead_parrafo'];
      $img_lead = $datos__array['imagen_lead'];
      $img_featured_footer = get_field('imagen_noticia_3');
      $img_size = 'lead-entrada';
      $img_size_featured_footer = 'featured-entrada';
      ?>

    <div class="copete__noticia">
    <h1><?php echo $lead_parrafo; ?></h1>
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
        <?php echo wp_get_attachment_image($img_lead, $img_size); ?>
        <div class="pie_de_foto">
          <?php $datos__array = get_field('grupo__desarollo');
            $pie = $datos__array['Pie_Foto_noticia'];
            $autor = $datos__array['creditos'];
          ?>
          <p><?php echo $pie ?></p>
          <p>Autor: <?php echo $autor ?></p>
    </div> 
     </figure>
     
    <div class="footer__noticia">
      <figure class="content__footer">
        <img class="aside-n" src="<?php echo get_template_directory_uri();  ?>/images/N.svg" alt="">
        <div class="footer__datos">
          <div class="footer__categoria"><?php the_category(); ?></div>
          <div class="footer__fecha">
            <p><?php echo get_the_date("j F, Y"); ?>, por <?php the_author_meta('display_name', $post->post_author ); ?> </p>
          </div>
        </div>
      </figure>
    </div> 
    
  </section>
    
  <section class="position-4-1 grid--12-3-1">
    <aside class="aside--noticias-2">
      <figure>
        <img class="aside--n" src="<?php echo get_template_directory_uri();  ?>/images/N.svg" alt="">
      </figure>
    </aside> 
    <div class="titulo__imagen--footer">
      
    </div> 
    <figure class="img--noticias2">
      <?php echo wp_get_attachment_image($img_featured_footer,$img_size_featured_footer); ?>
      </figure>
  </section>
</main> 
<?php get_footer(); ?>

