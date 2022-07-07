<?php get_header(); ?>
<!-- Carousel Section -->
<section>
    <div class="slideshow-container">
        <?php $args = array(
          'post_type' => array('slideshow'),
          // 'orderby'        => 'slideshow post',
          'posts_per_page' => 4,
          // 'offset' => 4,
          ); ?>

        <?php $slider = get_posts($args); ?>
        <?php $count = 0; ?>
        <?php foreach ($slider as $slide) : ?>
        <!-- Full-width images with number and caption text -->
        <?php 
            // $datoslide = $slide;
            // console_log($datoslide);
            // $type_post = $slide->ID;
            // console_log($type_post);

            // $enlace_url = get_the_permalink($slide);
            // $enlace_url = the_field('link');

            $enlace_url = get_field('link', $slide->ID);
            // console_log($enlace_url);
            ?>
        <div class="mySlides <?php echo ($count == 0) ? 'active' : ''; ?> fade">
            <img src="<?php echo wp_get_attachment_url(get_post_thumbnail_id($slide->ID)); ?>">
            <div class="slide-content">
                <a href="<?php echo $enlace_url; ?>">
                    <h1 class="slide-title"><?php echo get_the_title($slide);?></h1>
                    <p class="slide-subtitle"><?php echo the_field('subtitulo_slide', $slide->ID); ?></p>
                </a>
            </div>
        </div>

        <?php $count++; ?>
        <?php endforeach; ?>
        <!-- Next and previous buttons -->
        <!-- <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a> -->
    </div>
</section>

<section class="pd-1">

    <div class="grid--card">
        <h1 class="title-section title-section--servicios">Encuentra el servicio que más prefieras</h1>
        <!-- revisar uso de icono en el texto para indicar enlace con css afber before content -->
        <a href="<?php site_url();  ?>/categorias-perfiles/donde-comer/">
            <h1><?php console_log(get_template_directory_uri()) ?></h1>
            <picture class="card card-1">
                <source media="(min-width: 860px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Donde-Comer-2.jpg">
                <source media="(min-width: 640px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-l/mobile-l-Donde_Comer.jpg">
                <source media="(min-width: 512px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-m/mobile-m-Donde_Comer.jpg">
                <source media="(min-width: 320px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileDonde_Comer.jpg">
                <img class="card-img"
                    src="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileDonde_Comer.jpg"
                    alt="">

                <div class="card-title donde-comer">
                    <p class="title-card">¿Dónde Comer?</p>
                </div>

            </picture>
        </a>
        <a href="<?php site_url();  ?>/categorias-perfiles/donde-dormir/">
            <picture class="card card-2">

                <source media="(min-width: 860px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Donde-Dormir-2.jpg">
                <source media="(min-width: 640px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-l/mobile-l-Donde_Dormir.jpg">
                <source media="(min-width: 512px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-m/mobile-m-Donde_Dormir.jpg">
                <source media="(min-width: 320px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileDonde_Dormir.jpg">
                <img class="card-img"
                    src="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileDonde_Dormir.jpg"
                    alt="">
                <div class="card-title donde-dormir">
                    <p class="title-card">¿Dónde Dormir?</p>
                </div>
            </picture>
        </a>
        <a href="<?php site_url();  ?>/categorias-perfiles/que-visitar/">
            <picture class="card card-3">
                <source media="(min-width: 860px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Que-Visitar-3.jpg">
                <source media="(min-width: 640px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-l/mobile-l-Que_Visitar.jpg">
                <source media="(min-width: 512px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-m/mobile-m-Que_Visitar.jpg">
                <source media="(min-width: 320px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileQue_Visitar.jpg">
                <img class="card-img"
                    src="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileQue_Visitar.jpg"
                    alt="">
                <div class="card-title que-visitar">
                    <p class="title-card">¿Qué Visitar?</p>
                </div>
            </picture>
        </a>
        <aside class="aside aside--servicios">
            <picture class="aside-img-servicios"><img class="aside-img "
                    src="<?php echo get_template_directory_uri();  ?>/src/images/letras/S.svg" alt=""></picture>
            <p class="aside-text-servicios">¡Conoce Andacollo!<br>
                Diversos Servicios
                que le permitirá
                una grata estadía en la Comuna.
            </p>
        </aside>
    </div>
</section>

<section class="">

    <div class="grid--card">
        <h1 class="title-section title-section--productos">El arte de nuestros productos locales</h1>
        <a href="<?php site_url();  ?>/categorias-perfiles/artesania/">
            <picture class="card card-4">
                <source media="(min-width: 860px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Artesanos-2.jpg">
                <source media="(min-width: 640px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-l/mobile-l-Artesanos.jpg">
                <source media="(min-width: 512px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-m/mobile-m-Artesanos.jpg">
                <source media="(min-width: 320px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileArtesanos.jpg">
                <img class="card-img"
                    src="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Artesanos-2.jpg"
                    alt="">
                <div class="card-title artesania">
                    <p class="title-card">Artesanias</p>
                </div>

            </picture>
        </a>
        <a href="<?php site_url();  ?>/categorias-perfiles/emprendedor/">
            <picture class="card card-5">
                <source media="(min-width: 860px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Emprendedor.jpg">
                <source media="(min-width: 640px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-l/mobile-l-Emprendedor.jpg">
                <source media="(min-width: 512px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-m/mobile-m-Emprendedor.jpg">
                <source media="(min-width: 320px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileEmprendedor.jpg">
                <img class="card-img"
                    src="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Emprendedor.jpg"
                    alt="">
                <div class="card-title emprendedor">
                    <p class="title-card">Emprendedores</p>
                </div>
            </picture>
        </a>
        <a href="<?php site_url();  ?>/categorias-perfiles/productor/">
            <picture class="card card-6">
                <source media="(min-width: 860px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Productores-2.jpg">
                <source media="(min-width: 640px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-l/mobile-l-Productor.jpg">
                <source media="(min-width: 512px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile-m/mobile-m-Productor.jpg">
                <source media="(min-width: 320px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/mobile/mobileProductor.jpg">
                <img class="card-img"
                    src="<?php echo get_template_directory_uri();  ?>/src/images/btn-cat/Cartilla_Productores-2.jpg"
                    alt="">
                <div class="card-title productor">
                    <p class="title-card">Productores</p>
                </div>

            </picture>
        </a>
        <aside class="aside aside--productos">
            <p class="aside-text-productos">
                Revisa productos con identidad local y el trabajo de los
                habitantes de Andacollo.</p>
            <picture>
                <img class="aside-img" src="<?php echo get_template_directory_uri();  ?>/src/images/letras/P.svg"
                    alt="">
            </picture>
        </aside>
    </div>
</section>
</main>
<?php get_footer(); ?>