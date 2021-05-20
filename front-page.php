<?php get_header(); ?>
    <picture class="carousel">
      <!-- <source srcset="https://dummyimage.com/414x675/000/fff.jpg" type="image/jpg" media="(max-width:414px)">
      <source srcset="https://dummyimage.com/1920x792/000/fff.jpg"/> -->
      <img src="<?php echo get_template_directory_uri('slide');  ?>/images/fiesta_andacollo792.jpg" alt="">
      
    </picture>

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
        <p>¡Visita Andacollo!
          <br>
          Diversos Servicios 
          que le permitirá
          una grata estadía en la Comuna</p>
        <figure>
          <img class="aside--s" src="<?php echo get_template_directory_uri();  ?>/images/S.svg" alt="">
        </figure>
      </aside>
    </section>

    <section class="productos grid--12-2">
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
        <p>Aquí podrás adquirir productos con identidad local y el trabajo de los habitantes de Andacollo</p>
        <figure>
          <img class="aside--p" src="<?php echo get_template_directory_uri();  ?>/images/P.svg" alt="">
        </figure>
      </aside>
    </section>
  </main>
<?php get_footer(); ?>