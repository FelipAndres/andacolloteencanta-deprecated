<?php get_header(); ?>
  <div class="container__404">
  <h1 class="titulo__404">Ooops... No encontrado - 404</h1>
    <h2 class="subtitulo__404">Disculpa, pero la página que estas buscando no existe.</h2>
    <a href="<?php echo home_url() ?>">
      <button class="btn" >
        Volver al Inicio
      </button>
    </a>
  </div>
</main>
<?php get_footer(); ?>