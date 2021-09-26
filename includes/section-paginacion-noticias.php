<p class="mobile-title-noticias">Noticias</p>
<?php if( get_previous_posts_link() ) {
  ?>
  <button class="btn-posts"><?php previous_posts_link('Anterior'); ?> </button>
<?php
} 
?>
<?php if( get_next_posts_link() ) {
  ?>
  <button class="btn-posts"><?php next_posts_link('Siguiente'); ?> </button>
<?php
} 
?>