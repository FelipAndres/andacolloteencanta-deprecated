<?php 
/* Template Name: Formato Noticias */ 
?>

<?php get_header(); ?>
<section class="section-single--noticia">
    <div class="breadcrumb">
        <?php if (function_exists('the_breadcrumb')) the_breadcrumb(); ?>
    </div>

    <div class="container-descripcion ">
        <picture class="img-noticias--1">
            <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
        </picture>

        <div class="texto-descripcion">
            <aside class="title-noticia--single">
                <h1><?php the_title(); ?></h1>
            </aside>
            <?php 
                // $datos__array = get_field('grupo__desarollo');
                $bajada_noticia = get_field('cabecera_paginas');
                $link_imagen = get_field('foto_cabecera_paginas');
                $imagen_link = get_field('imagen_link');
                $pie_de_foto_1 = get_field('Pie_cabecera_paginas');
                $autor_de_foto_1 = get_field('creditos_foto_cabecera');
                $pie_de_foto_2 = get_field('titulo_fotocomplementaria_paginas');
                $autor_de_foto_2 = get_field('creditos_foto_complementaria');

                $img_featured_footer = get_field('imagen_complementaria_paginas');
                $img_size = 'lead-entrada';
                $img_size_featured_footer = '';
                ?>
            <div class="container-descripcion--noticia">
                <p><?php echo $bajada_noticia; ?></p>
            </div>
            <div class="container-meta-data--noticia">
                <!-- <div class="categorias-textos"><span>Categorías: </span><?php the_category(' - '); ?></div> -->
                <div class="flex-row">
                    <p><strong><?php echo get_the_date("j F, Y"); ?></strong><br> por
                        <?php the_author_meta('display_name', $post->post_author ); ?>
                    </p>
                    <picture>
                        <img class="descripcion-n"
                            src="<?php echo get_template_directory_uri();  ?>/assets/images/P.svg" alt="">
                    </picture>
                </div>
            </div>
        </div>
    </div>

    <div class="container-contenido--noticias mt-0">
        <p><?php the_field('cuerpo_noticia'); ?></p>
    </div>

    <div class="container-img--2">
        <picture class="">
            <?php echo wp_get_attachment_image($img_featured_footer,$img_size_featured_footer); ?>
        </picture>

        <div class="pie_de_foto--1">
            <p><?php echo $pie_de_foto_1 ?></p>
            <p>Autor: <?php echo $autor_de_foto_1 ?></p>
        </div>
    </div>



    <div class="container-img--3 dp-none">
        <picture class="">
            <?php echo wp_get_attachment_image($imagen_link); ?>
        </picture>

        <div class="pie_de_foto--2">
            <p><?php echo $pie_de_foto_2 ?></p>
            <p>Autor: <?php echo $autor_de_foto_2 ?></p>
        </div>
    </div>


    <aside class="aside-noticas--footer dp-none">
        <p class="texto-infografia"><?php the_field('infografia_noticia'); ?></p>
        <picture class="flex">
            <!-- <img class="aside--n" src="<?php echo get_template_directory_uri();  ?>/assets/images/N.svg" alt=""> -->
            <!-- <div class="footer__datos">
                <div class="footer__categoria"><?php the_category(' - '); ?></div>
                <div class="footer__fecha">
                    <p><strong><?php echo get_the_date("j F, Y"); ?></strong><br> por
                        <?php the_author_meta('display_name', $post->post_author ); ?>
                    </p>
                </div>
            </div> -->
        </picture>
    </aside>

    <!-- <a class="justify-flex-end" href="<?php site_url(); ?>/noticias/">
        <button class="card-btn card-btn--noticias btn-single--noticia"><label for="Volver">Volver</label></button>
    </a> -->

</section>














</main>
<?php get_footer(); ?>