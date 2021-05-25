<?php get_header(); ?>
    <section class="carousel">
      <!-- <img src="<?php // echo get_template_directory_uri('slide');  ?>/images/fiesta_andacollo792.jpg" alt=""> -->
      <div class="slideshow-container">
        <?php $slider = get_posts(array('post_type' => 'slideshow', 'posts_per_page' => 3)); ?>
        <?php $count = 0; ?>
        <?php foreach ($slider as $slide) : ?>
          <!-- Full-width images with number and caption text -->
          <div class="mySlides <?php echo ($count == 0) ? 'active' : ''; ?> fade">
            <img src="<?php echo wp_get_attachment_url(get_post_thumbnail_id($slide->ID)) ?>"> 
            <!-- <a class="titulo-slide" href=" <?php echo get_the_permalink($slide) ?>">
              <h1><?php //echo get_the_title($slide) ?></h1>
            </a> -->
            <p><?php //echo get_the_post_thumbnail_caption($slide) ?></p>
          </div>
        <?php $count++; ?>
        <?php endforeach; ?>  
        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <br>

      <!-- The dots/circles -->
      <!-- <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>  -->
    </section>

    <section class="servicios grid--12-2">
      <h2>Encuentra el servicio que más prefieras</h2>
      <div class="cartas__container">
        <figure class="cartas">
          <a href="<?php get_site_url();  ?>/categorias-perfiles/donde-comer">
            <img src="<?php echo get_template_directory_uri();  ?>/images/Imagen Donde Comer.png" alt="">
            <div class="titulo__container">
              <p class="titulo--dondecomer">¿Dónde Comer?</p>
            </div>
          </a>
        </figure>
        <figure class="cartas">
          <a href="<?php get_site_url();  ?>/categorias-perfiles/donde-dormir">
            <img src="<?php echo get_template_directory_uri();  ?>/images/Imagen Donde Dormir.png" alt="">
            <div class="titulo__container">
              <p class="titulo--donderdormir">¿Dónde Dormir?</p>
            </div>
          </a>
        </figure>
        <figure class="cartas">
          <a href="<?php get_site_url();  ?>/categorias-perfiles/que-visitar">
            <img src="<?php echo get_template_directory_uri();  ?>/images/imagen que visitar.png" alt="">
            <div class="titulo__container">
              <p class="titulo--quevisitar">¿Qué visitar?</p>
            </div>
          </a>
        </figure>
      </div>
      <aside class="aside--servicios">
        <p class="aside-title-servicios">¡Visita Andacollo!
          <br>
          Diversos Servicios 
          que le permitirá
          una grata estadía en la Comuna</p>
          <p class="mobile-title-servicios">Servicios</p>
          <figure>
          <img class="aside--s" src="<?php echo get_template_directory_uri();  ?>/images/S.svg" alt="">
        </figure>
      </aside>
    </section>

    <section class="productos grid--12-2 grid--12-2-0">
      <h2>El arte de nuestros productos locales</h2>
      <div class="cartas__container--productos">
        <figure class="cartas">
          <a href="<?php get_site_url();  ?>/categorias-perfiles/artesania">
            <img src="<?php echo get_template_directory_uri();  ?>/images/artesania.jpg" alt="">
            <div class="titulo__container">
              <p class="titulo--artesanias">Artesanias</p>
            </div>
          </a>
        </figure>
        <figure class="cartas">
          <a href="<?php get_site_url();  ?>/categorias-perfiles/emprendedor">
            <img src="<?php echo get_template_directory_uri();  ?>/images/emprendedores.jpg" alt="">
            <div class="titulo__container">
              <p class="titulo--emprendedores">Emprendedores</p>
            </div>
          </a>
        </figure>
        <figure class="cartas">
          <a href="<?php get_site_url();  ?>/categorias-perfiles/productor">
            <img src="<?php echo get_template_directory_uri();  ?>/images/productores.jpg" alt="">
            <div class="titulo__container">
              <p class="titulo--productores">Productores</p>
            </div>
          </a>
        </figure>
      </div>
      <aside class="aside--productos">
        <p class="aside-title-productos">Aquí podrás adquirir productos con identidad local y el trabajo de los habitantes de Andacollo</p >
        <p class="mobile-title-productos">Productos</p>
        <figure>
          <img class="aside--p" src="<?php echo get_template_directory_uri();  ?>/images/P.svg" alt="">
        </figure>
      </aside>
    </section>
  </main>
<?php get_footer(); ?>