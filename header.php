<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <link rel="icon" href="<?php echo get_template_directory_uri();  ?>/assets/images/favicon.png" type="png"
        sizes="32x32">
    <title>Andacollo te encanta</title>

    <?php wp_head(); ?>

</head>

<body <?php body_class('container'); ?>>

    <?php wp_body_open(); ?>

    <a class="skip-link screen-reader-text"
        href="#main"><?php esc_html_e('Continua al contenido', 'andacolloteencanta'); ?></a>


    <header class="custom-header">
        <a href="<?php echo home_url();?>">
            <picture>
                <source media="(min-width: 1280px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-webp.webp">
                <source media="(min-width: 1024px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-webp.webp">
                <source media="(min-width: 786px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-web-medium.webp">
                <source media="(min-width: 640px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-web-mobile.webp">
                <source media="(min-width: 512px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-web-mobile.webp">
                <source media="(min-width: 320px )"
                    srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-web-mobile.webp">
                <img class="header-logo"
                    src="<?php echo get_template_directory_uri();  ?>/assets/images/Banner-webp.webp"
                    alt="Logo de andacollo te encanta">
            </picture>
        </a>

        <!-- Fixed Navbar -->
        <nav class="nav">
            <button class="mobile-nav-toggle" 
                aria-controls="primary-nav" 
                aria-expanded="false">
                <span class="sr-only">Menu</span>
            </button>
            <?php wp_nav_menu(
                array(
                    'theme_location' => 'top-menu', 
                    'menu_id'        => 'primary-nav',
                    'container'      => 'false',
                    'items_wrap'    => '<ul id="primary-nav" class="menu" data-visible="false">%3$s</ul>')
            );?>
        </nav>

    </header>

    <main class="content">