<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.25">
  <title>Andacollo te encanta</title>
  <?php wp_head(); ?>
</head>
<body class="background">
  <div id="nav--onscroll" class="nav--onscroll">
    <nav>
      <?php wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav__secondary')); ?>
    </nav>
  </div>
  <main>
    <header>
      <figure>
        <!-- <img class="header__image" src="https://dummyimage.com/1920x150/000/fff" alt=""> -->
        <a href="<?php echo home_url();?>"><img class="header__image" src="<?php echo get_template_directory_uri();  ?>/images/Banner-web.jpg" alt=""></a>
      </figure>
      <!-- Fixed Navbar -->
      <nav>
        <?php wp_nav_menu(array('theme_location' => 'top-menu', 'menu_class' => 'nav')); ?>
      </nav>
    </header>