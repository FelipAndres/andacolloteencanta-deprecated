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
                $bajada_noticia = get_field('bajada_noticia');
                $imagen_comple_noticia = get_field('imagen_complementaria_noticia');
                $pie_imagen_comple_noticia = get_field('pie_imagen_complementaria_noticia');
                $autor_imagen_comple_noticia = get_field('autor_imagen_complementaria_noticia');

                $cuerpo_noticia = get_field('cuerpo_noticia');
                $frase_complementaria =  get_field('frase_complementaria_Página');
                $imagen_comple_2_noticia =  get_field('imagen_complementaria_2_noticia');
                $pie_comple_2_noticia =  get_field('pie_imagen_complementaria_2_noticia');
                $autor_comple_2_noticia =  get_field('autor_foto_complementaria_2_noticia');


                /* $img_featured_footer = get_field('imagen_noticia_3');
                $img_size = 'lead-entrada';
                $img_size_featured_footer = ''; */
                ?>


            <div class="container-descripcion--noticia">
                <p><?php echo $bajada_noticia; ?></p>
            </div>
            <div class="container-meta-data--noticia">
                <div class="categorias-textos"><span>Categorías: </span><?php the_category(' - '); ?></div>
                <div class="flex-row">
                    <p><strong><?php echo get_the_date("j F, Y"); ?></strong><br> por
                        <?php the_author_meta('display_name', $post->post_author ); ?>
                    </p>
                    <picture>
                        <img class="descripcion-n"
                            src="<?php echo get_template_directory_uri();  ?>/src/images/letras/N.svg" alt="">
                    </picture>
                </div>
            </div>
        </div>
    </div>

    <div class="container-contenido--noticias mt-0">
        <p><?php echo $cuerpo_noticia; ?></p>
    </div>

    <div class="container-img--2">
        <picture class="">
            <?php echo wp_get_attachment_image($imagen_comple_noticia,$img_size_featured_footer); ?>
        </picture>

        <div class="pie_de_foto--1">
            <p><?php echo $pie_imagen_comple_noticia ?></p>
            <p>Autor: <?php echo $autor_imagen_comple_noticia?></p>
        </div>
    </div>

    <a class="justify-flex-end" href="<?php site_url(); ?>/noticias/">
        <button class="card-btn card-btn--noticias btn-single--noticia"><label for="Volver">Volver</label></button>
    </a>

</section>

</main>
<?php get_footer(); ?>