<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="<?php echo get_template_directory_uri();  ?>/images/favicon.png" type="png" sizes="32x32">
  <title>Andacollo te encanta</title>
  <?php wp_head(); ?>
</head>

<body class="background">
  <div id="nav--onscroll" class="nav--onscroll">

    <nav id="nav-secondary">
      <?php wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav__secondary')); ?>
    </nav>

    <nav class="nav-mobile">
      <a href="javascript:void(0);" class="icon-onscroll">
        <i class="uil uil-angle-double-down"></i>
      </a>
      <?php wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav__mobile')); ?>
    </nav>

  </div>

  
  <main>
    <header>
      <figure>
        <!-- <img class="header__image" src="https://dummyimage.com/1920x150/000/fff" alt=""> -->
        <a href="<?php echo home_url();?>"><img class="header__image"
            src="<?php echo get_template_directory_uri();  ?>/images/Banner-web.jpg" alt=""></a>
      </figure>

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