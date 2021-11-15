<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="<?php echo get_template_directory_uri();  ?>/assets/images/favicon.png" type="png" sizes="32x32">
  <title>Andacollo te encanta</title>
  <?php wp_head(); ?>
</head>

<body class="background container">
  <div id="nav--onscroll" class="nav--onscroll">

    <nav id="nav-secondary">
      <?php wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav__secondary')); ?>
    </nav>

    <!-- <nav class="nav-mobile">
      <a href="javascript:void(0);" class="icon-onscroll" onclick="myFunction()">
        <i class="uil uil-angle-double-down"></i>
      </a>
      <?php //wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav__mobile')); ?>
    </nav> -->

  </div>

  <header class="custom-header">
  <a href="<?php echo home_url();?>">
        <picture>
          <source media="(max-width: 1200px )" srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-webp.webp">
          <source media="(max-width: 900px )" srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-web-medium.webp">
          <source media="(max-width: 780px )" srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-web-mobile.webp">
          <source media="(max-width: 512px )" srcset="<?php echo get_template_directory_uri();  ?>/src/images/header/Banner-web-mobile.webp">
          <img src="<?php echo get_template_directory_uri();  ?>/assets/images/Banner-web.jpg" alt="">
          <!-- <img class="header__image" src="https://dummyimage.com/1920x150/000/fff" alt=""> -->
        </picture>
      </a>

      <!-- Fixed Navbar -->
      <nav id="nav-fixed">
        <?php wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav')); ?>
      </nav>

      <nav class="nav-mobile">
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i id="down-arrow" class="uil uil-angle-double-down"></i>
          <i id="up-arrow" class="uil uil-angle-double-up"></i>
        </a>
        <?php wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav__mobile', 'menu_id' => 'nav__mobile')); ?>
      </nav>

    </header>

  <main>
    