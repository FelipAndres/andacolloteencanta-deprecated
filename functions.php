<?php
// cargamos nuestro archivo css
function load_css(){
    
    //cargamos nuestro principal. // HEADER FOOTER PAGE SINGLE ARCHVE
    wp_enqueue_style(
        'main', 
        get_template_directory_uri() . '/css/main.css', 
        array(), 
        filemtime( get_stylesheet_directory()  . '/css/main.css' )
    );
    
    //cargamos nuestro propio estilo personalizado para páginas.
    if (is_page('front-page') ) {
        wp_enqueue_style(
            'main', 
            get_template_directory_uri() . '/css/main.css', 
            array(), 
            filemtime( get_stylesheet_directory()  . '/css/main.css' )
        );
    } else{
        wp_enqueue_style(
            'page', 
            get_template_directory_uri() . '/css/page.css', 
            array(), 
            filemtime( get_stylesheet_directory()  . '/css/page.css' )
        );
    }
    //cargamos nuestro propio estilo personalizado para páginas.
    if (is_home()) {
        wp_enqueue_style(
            'home', 
            get_template_directory_uri() . '/css/home.css', 
            array(), 
            filemtime( get_stylesheet_directory()  . '/css/home.css' )
        );
    }
    //cargamos nuestro propio estilo personalizado para páginas.
    if (is_single()) {
        wp_enqueue_style(
            'single', 
            get_template_directory_uri() . '/css/single.css', 
            array(), 
            filemtime( get_stylesheet_directory()  . '/css/single.css' )
        );
    }
    //CSS for singular post from custom post type "perfil"
    if (is_singular('perfil')) {
        wp_enqueue_style(
            'perfil', 
            get_template_directory_uri() . '/css/single-perfil.css', 
            array(), 
            filemtime( get_stylesheet_directory()  . '/css/single-perfil.css' )
        );
    }
    // //CSS for custom posty type archive "perfil"
    // if (is_post_type_archive("perfil")) {
    //     wp_enqueue_style('perfil', get_template_directory_uri() . '/css/archive-perfil.css');
    // }
    //CSS for custom taxonomy "categorias-perfiles/artesania.."   
    if (is_tax("categorias-perfiles")) {
        wp_enqueue_style(
        'perfiles', 
        get_template_directory_uri() . '/css/archive-perfiles.css',
        array(),  
        filemtime(get_stylesheet_directory() . '/css/archive-perfiles.css'));
    }
    if (is_tax( 'categorias-perfiles', 'donde-comer')) {
        wp_enqueue_style(
        'donde-comer', 
        get_template_directory_uri() . '/css/archive-perfiles-dondecomer.css', 
        array(), 
        filemtime(get_stylesheet_directory() . '/css/archive-perfiles-dondecomer.css'));
    }
    if (is_tax( 'categorias-perfiles', 'donde-dormir')) {
        wp_enqueue_style(
        'donde-dormir', 
        get_template_directory_uri() . '/css/archive-perfiles-dondedormir.css',
        array(),  
        filemtime(get_stylesheet_directory() . '/css/archive-perfiles-dondedormir.css'));
    }
    
    if (is_tax( 'categorias-perfiles', 'que-visitar')) {
        wp_enqueue_style(
        'que-visitar', 
        get_template_directory_uri() . '/css/archive-perfiles-quevisitar.css', 
        array(), 
        filemtime(get_stylesheet_directory() . '/css/archive-perfiles-quevisitar.css'));
    }
    
    if (is_tax( 'categorias-perfiles', 'artesania')) {
        wp_enqueue_style(
        'artesania', 
        get_template_directory_uri() . '/css/archive-perfiles-artesania.css', 
        array(), 
        filemtime(get_stylesheet_directory() . '/css/archive-perfiles-artesania.css'));
    }
    
    if (is_tax( 'categorias-perfiles', 'emprendedor')) {
        wp_enqueue_style(
        'emprendedor',
         get_template_directory_uri() . '/css/archive-perfiles-emprendedor.css', 
         array(), 
        filemtime(get_stylesheet_directory() . '/css/archive-perfiles-emprendedor.css'));
    }
    
    if (is_tax( 'categorias-perfiles', 'productor')) {
        wp_enqueue_style(
        'productor', 
        get_template_directory_uri() . '/css/archive-perfiles-productor.css', 
        array(), 
        filemtime(get_stylesheet_directory() . '/css/archive-perfiles-productor.css'));
    }
    
}
add_action('wp_enqueue_scripts', 'load_css');
//Carga de JS
function load_js(){
    
    wp_register_script('scrollnav',get_template_directory_uri() . '/js/scroll-nav.js', false);
    wp_enqueue_script('scrollnav');

    // wp_register_script('animations',, true);
    wp_enqueue_script('animations',
    get_template_directory_uri() .'/js/animation.js',array(), 
    filemtime(get_template_directory() . '/js/animation.js'), true);

    wp_register_script('slideshow', get_template_directory_uri() . '/js/slideshow.js', '', '', true);
    wp_enqueue_script('slideshow');
}
add_action('wp_enqueue_scripts', 'load_js');


function load_google_fonts(){
    $url ="https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&family=Bebas+Neue&family=Boogaloo&family=Raleway:wght@300;400;700&display=swap";
    wp_enqueue_style('load_google_fonts', $url);
}
add_action( "wp_enqueue_scripts", "load_google_fonts" );

//añadir soporte para logo perosnalizado. https://developer.wordpress.org/themes/functionality/custom-logo/
add_theme_support("custom-logo");
//añadir parametros al logo perosnalizado. 
function temacustom_custom_logo_setup()
{
    $defaults = array(

        "height" => 60,
        "width"  => 60,
    );
    add_theme_support("custom-logo", $defaults);
}
add_action("after_setup_theme", "temacustom_custom_logo_setup");
//fin logo personalizado.

// habilitar creación de menus desde wordpress
function register_my_menu() {
    register_nav_menus(
        array(
            "top-menu" => 'Top Menu Location',
            "mobile-nav" => 'Mobile Menu Location'
        )
    );
}
add_action( 'init', 'register_my_menu' );

// Habilitar backgrounds personalizados. https://developer.wordpress.org/themes/functionality/custom-backgrounds/
add_theme_support("custom_background");
// configuraciones para nuestro backgorund personalizado
$args = array(
    "default-image" => get_template_directory_uri() . "/images/Trama70.jpg",
);
add_theme_support("custom-background", $args);

// Soporte para imagenes
add_theme_support( 'post-thumbnails' );

// ----------------- Custom Images Sizes
//Slideshow
add_image_size('slide', 1920, 792, false); 
add_image_size('post-img', 210, 160, true); 
// Imagen de Single Perfil 
add_image_size('perfil-img', 291, 194, true);
// Imagen de Productos Perfil
add_image_size('productos-img', 210, 157 , true);
// Imagen del Archive de categorias vitrina
add_image_size('img-carta-noticias', 255, 149, true);
add_image_size('slide-img', 1440, 750, true);

//Imagen de single entrada featured imagen
add_image_size('featured-entrada', 1020, 516, true);

//Imagen lead de entrada
add_image_size('lead-entrada', 443, 675, true);
// //Imagen de single entrada featured imagen
// add_image_size('featured-entrada-2', 1020, 504, true);

//Imagen lead de entrada
// add_image_size('lead-entrada', 1020, 504, true);

//Imagen mobile navbar header
add_image_size('mobile-header', 360, 85, true);

// Definiendo el Custom Post Type - Perfiles (Servicios y Productos locales)
function perfil_post()
{
    $args = array(
        'labels' => array(
            'name' => 'Perfiles',
            'singular_name' => 'Perfil',
            'add_new' => 'Añadir Nuevo', 'Perfil',
            'add_new_item' => 'Añadir nuevo Perfil',
            'edit_item' => 'Editar Perfil',
            'new_item' => 'Nuevo Perfil',
            'view_item' => 'Ver Perfil',
            'search_items' => 'Buscar Perfil',
            'not_found' => 'No Encontrado',
            'not_found_in_trash' => 'No encontrado en la papelera',
        ),
        'hierarchical' => false,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'query_var' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-screenoptions',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'rewrite' => array('slug' => 'perfiles'),
        'exclude_from_search' => false,
        'menu_position' => 5,
    );
    register_post_type('perfil', $args);
}
add_action('init', 'perfil_post');


//Taxonmy Cat y Tags
function categorias_perfiles()
{
    $args = array(
        'labels' => array(
            'name' => 'Categorias Perfiles',
            'singular_name' => 'Categoria Perfil',
        ),
        'public' => true,
        'hierarchical' => true,
    );
    register_taxonomy('categorias-perfiles', array('perfil'), $args);
}
add_action('init', 'categorias_perfiles');


//Largo del excerpt
function my_excerpt_length($length)
{
    return 15;
}
add_filter('excerpt_length', 'my_excerpt_length');


//Cambio de nombre metabox imagen destacada
function perfil_image_box()
{
    remove_meta_box('postimagediv', 'perfil', 'side');
    add_meta_box('postimagediv', 'Imagen de Perfil', 'post_thumbnail_meta_box', 'perfil', 'side');
}
add_action('do_meta_boxes', 'perfil_image_box');

//Slideshow
function custom_bootstrap_slider() {
	$labels = array(
		'name'               => _x( 'Slideshow', 'post type general name'),
		'singular_name'      => _x( 'slideshow', 'post type singular name'),
		'menu_name'          => _x( 'Slideshow', 'admin menu'),
		'name_admin_bar'     => _x( 'Slideshow', 'add new on admin bar'),
		'add_new'            => _x( 'Add New', 'Slide'),
		'add_new_item'       => __( 'Name'),
		'new_item'           => __( 'Nueva Slideshow'),
		'edit_item'          => __( 'Editar Slideshow'),
		'view_item'          => __( 'Ver Slideshow'),
		'all_items'          => __( 'Todas las Slideshow'),
		'featured_image'     => __( 'Imagen de Slideshow', 'text_domain' ),
		'search_items'       => __( 'Buscar Slideshow'),
		'parent_item_colon'  => __( 'Slideshow Padre:'),
		'not_found'          => __( 'Slideshow no encontrada.'),
		'not_found_in_trash' => __( 'Sin slideshow en el papelero.'),
	);

	$args = array(
		'labels'             => $labels,
		'menu_icon'	     => 'dashicons-images-alt2',
    	'description'        => __( 'Description.'),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => true,
		'menu_position'      => 6,
		'supports'           => array('title','editor','thumbnail')
	);

    register_post_type( 'slideshow', $args );
    
    flush_rewrite_rules();
}
add_action( 'init', 'custom_bootstrap_slider' );

// add_filter('show_admin_bar', '__return_false');

function special_nav_class($classes, $item){
    if( in_array('current-menu-item', $classes) ){
            $classes[] = 'active-item';
    }elseif (in_array('current-menu-parent', $classes) and in_array('menu-item-has-children', $classes)) {
        $classes[] = 'active-item';
    }elseif (in_array('', $classes)){
        $classes[] = 'active-item';
    }
    return $classes;
}add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);


function pagination($pages = '', $range = 4)
{
    $showitems = ($range * 2)+1;
 
    global $paged;
    if(empty($paged)) $paged = 1;
 
    if($pages == '')
    {
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if(!$pages)
        {
            $pages = 1;
        }
    }
 
    if(1 != $pages)
    {   
        echo "<div class=\"paginacion\"><span>Página ".$paged." de  ".$pages."  </span> ";
        if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; First</a>";
        if($paged > 1 && $showitems < $pages) echo "<a href='".get_pagenum_link($paged - 1)."'>&lsaquo; Previous</a>";
 
        for ($i=1; $i <= $pages; $i++)
        {
            if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
            {
                echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";
            }
        }
 
        if ($paged < $pages && $showitems < $pages) echo "<a href=\"".get_pagenum_link($paged + 1)."\">Next &rsaquo;</a>";
        if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
        echo "</div>\n";
    }
}

/*=============================================
                BREADCRUMBS
=============================================*/
//  to include in functions.php
function the_breadcrumb()
{
    $showOnHome = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show
    $delimiter = '&raquo;'; // delimiter between crumbs
    $home = 'Inicio'; // text for the 'Home' link
    $showCurrent = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
    $before = '<span class="current">'; // tag before the current crumb
    $after = '</span>'; // tag after the current crumb

    global $post;
    $homeLink = get_bloginfo('url');
    if (is_home() || is_front_page()) {
        if ($showOnHome == 1) {
            echo '<div id="crumbs"><a href="' . $homeLink . '">' . $home . '</a></div>';
        }
    } else {
        echo '<div id="crumbs"><a href="' . $homeLink . '">' . $home . '</a> ' . $delimiter . ' ';
        if (is_category()) {
            $thisCat = get_category(get_query_var('cat'), false);
            if ($thisCat->parent != 0) {
                echo get_category_parents($thisCat->parent, true, ' ' . $delimiter . ' ');
            }
            echo $before . 'Archive by category "' . single_cat_title('', false) . '"' . $after;
        } elseif (is_search()) {
            echo $before . 'Search results for "' . get_search_query() . '"' . $after;
        } elseif (is_day()) {
            echo '<a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
            echo '<a href="' . get_month_link(get_the_time('Y'), get_the_time('m')) . '">' . get_the_time('F') . '</a> ' . $delimiter . ' ';
            echo $before . get_the_time('d') . $after;
        } elseif (is_month()) {
            echo '<a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
            echo $before . get_the_time('F') . $after;
        } elseif (is_year()) {
            echo $before . get_the_time('Y') . $after;
        } elseif (is_single() && !is_attachment()) {
            if (get_post_type() != 'post') {
                $post_type = get_post_type_object(get_post_type());
                $slug = $post_type->rewrite;
                echo '<a href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a>';
                if ($showCurrent == 1) {
                    echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
                }
            } else {
                $cat = get_the_category();
                $cat = $cat[0];
                $cats = get_category_parents($cat, true, ' ' . $delimiter . ' ');
                if ($showCurrent == 0) {
                    $cats = preg_replace("#^(.+)\s$delimiter\s$#", "$1", $cats);
                }
                echo $cats;
                if ($showCurrent == 1) {
                    echo $before . get_the_title() . $after;
                }
            }
        } elseif (!is_single() && !is_page() && get_post_type() != 'post' && !is_404()) {
            $post_type = get_post_type_object(get_post_type());
            echo $before . $post_type->labels->singular_name . $after;
        } elseif (is_attachment()) {
            $parent = get_post($post->post_parent);
            $cat = get_the_category($parent->ID);
            $cat = $cat[0];
            echo get_category_parents($cat, true, ' ' . $delimiter . ' ');
            echo '<a href="' . get_permalink($parent) . '">' . $parent->post_title . '</a>';
            if ($showCurrent == 1) {
                echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
            }
        } elseif (is_page() && !$post->post_parent) {
            if ($showCurrent == 1) {
                echo $before . get_the_title() . $after;
            }
        } elseif (is_page() && $post->post_parent) {
            $parent_id  = $post->post_parent;
            $breadcrumbs = array();
            while ($parent_id) {
                $page = get_page($parent_id);
                $breadcrumbs[] = '<a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
                $parent_id  = $page->post_parent;
            }
            $breadcrumbs = array_reverse($breadcrumbs);
            for ($i = 0; $i < count($breadcrumbs); $i++) {
                echo $breadcrumbs[$i];
                if ($i != count($breadcrumbs)-1) {
                    echo ' ' . $delimiter . ' ';
                }
            }
            if ($showCurrent == 1) {
                echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
            }
        } elseif (is_tag()) {
            echo $before . 'Posts tagged "' . single_tag_title('', false) . '"' . $after;
        } elseif (is_author()) {
            global $author;
            $userdata = get_userdata($author);
            echo $before . 'Articles posted by ' . $userdata->display_name . $after;
        } elseif (is_404()) {
            echo $before . 'Error 404' . $after;
        }
        if (get_query_var('paged')) {
            if (is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author()) {
                echo ' (';
            }
            echo __('Page') . ' ' . get_query_var('paged');
            if (is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author()) {
                echo ')';
            }
        }
        echo '</div>';
    }
} // end the_breadcrumb()

//  to include in functions.php
function the_breadcrumbdos() {

    $sep = ' > ';

    if (!is_front_page()) {
	
	// Start the breadcrumb with a link to your homepage
        echo '<div class="breadcrumbs">';
        echo '<a href="';
        echo get_option('home');
        echo '">';
        bloginfo('name');
        echo '</a>' . $sep;
	
	// Check if the current page is a category, an archive or a single page. If so show the category or archive name.
        if (is_category() || is_single() ){
            the_category('title_li=');
        } elseif (is_archive() || is_single()){
            if ( is_day() ) {
                printf( __( '%s', 'text_domain' ), get_the_date() );
            } elseif ( is_month() ) {
                printf( __( '%s', 'text_domain' ), get_the_date( _x( 'F Y', 'monthly archives date format', 'text_domain' ) ) );
            } elseif ( is_year() ) {
                printf( __( '%s', 'text_domain' ), get_the_date( _x( 'Y', 'yearly archives date format', 'text_domain' ) ) );
            } else {
                _e( 'Blog Archives', 'text_domain' );
            }
        }
	
	// If the current page is a single post, show its title with the separator
        if (is_single()) {
            echo $sep;
            the_title();
        }
	
	// If the current page is a static page, show its title.
        if (is_page()) {
            echo the_title();
        }
	
	// if you have a static page assigned to be you posts list page. It will find the title of the static page and display it. i.e Home >> Blog
        if (is_home()){
            global $post;
            $page_for_posts_id = get_option('page_for_posts');
            if ( $page_for_posts_id ) { 
                $post = get_page($page_for_posts_id);
                setup_postdata($post);
                the_title();
                rewind_posts();
            }
        }

        echo '</div>';
    }
}
/*
* Credit: http://www.thatweblook.co.uk/blog/tutorials/tutorial-wordpress-breadcrumb-function/
*/

// Breadcrumbs
function custom_breadcrumbs() {
       
    // Settings
    $separator          = '&gt;';
    $breadcrums_id      = 'breadcrumbs';
    $breadcrums_class   = 'breadcrumbs';
    $home_title         = 'Homepage';
      
    // If you have any custom post types with custom taxonomies, put the taxonomy name below (e.g. product_cat)
    $custom_taxonomy    = 'product_cat';
       
    // Get the query & post information
    global $post,$wp_query;
       
    // Do not display on the homepage
    if ( !is_front_page() ) {
       
        // Build the breadcrums
        echo '<ul id="' . $breadcrums_id . '" class="' . $breadcrums_class . '">';
           
        // Home page
        echo '<li class="item-home"><a class="bread-link bread-home" href="' . get_home_url() . '" title="' . $home_title . '">' . $home_title . '</a></li>';
        echo '<li class="separator separator-home"> ' . $separator . ' </li>';
           
        if ( is_archive() && !is_tax() && !is_category() && !is_tag() ) {
              
            echo '<li class="item-current item-archive"><strong class="bread-current bread-archive">' . post_type_archive_title($prefix, false) . '</strong></li>';
              
        } else if ( is_archive() && is_tax() && !is_category() && !is_tag() ) {
              
            // If post is a custom post type
            $post_type = get_post_type();
              
            // If it is a custom post type display name and link
            if($post_type != 'post') {
                  
                $post_type_object = get_post_type_object($post_type);
                $post_type_archive = get_post_type_archive_link($post_type);
              
                echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $post_type_object->labels->name . '">' . $post_type_object->labels->name . '</a></li>';
                echo '<li class="separator"> ' . $separator . ' </li>';
              
            }
              
            $custom_tax_name = get_queried_object()->name;
            echo '<li class="item-current item-archive"><strong class="bread-current bread-archive">' . $custom_tax_name . '</strong></li>';
              
        } else if ( is_single() ) {
              
            // If post is a custom post type
            $post_type = get_post_type();
              
            // If it is a custom post type display name and link
            if($post_type != 'post') {
                  
                $post_type_object = get_post_type_object($post_type);
                $post_type_archive = get_post_type_archive_link($post_type);
              
                echo '<li class="item-cat item-custom-post-type-' . $post_type . '"><a class="bread-cat bread-custom-post-type-' . $post_type . '" href="' . $post_type_archive . '" title="' . $post_type_object->labels->name . '">' . $post_type_object->labels->name . '</a></li>';
                echo '<li class="separator"> ' . $separator . ' </li>';
              
            }
              
            // Get post category info
            $category = get_the_category();
             
            if(!empty($category)) {
              
                // Get last category post is in
                $last_category = end(array_values($category));
                  
                // Get parent any categories and create array
                $get_cat_parents = rtrim(get_category_parents($last_category->term_id, true, ','),',');
                $cat_parents = explode(',',$get_cat_parents);
                  
                // Loop through parent categories and store in variable $cat_display
                $cat_display = '';
                foreach($cat_parents as $parents) {
                    $cat_display .= '<li class="item-cat">'.$parents.'</li>';
                    $cat_display .= '<li class="separator"> ' . $separator . ' </li>';
                }
             
            }
              
            // If it's a custom post type within a custom taxonomy
            $taxonomy_exists = taxonomy_exists($custom_taxonomy);
            if(empty($last_category) && !empty($custom_taxonomy) && $taxonomy_exists) {
                   
                $taxonomy_terms = get_the_terms( $post->ID, $custom_taxonomy );
                $cat_id         = $taxonomy_terms[0]->term_id;
                $cat_nicename   = $taxonomy_terms[0]->slug;
                $cat_link       = get_term_link($taxonomy_terms[0]->term_id, $custom_taxonomy);
                $cat_name       = $taxonomy_terms[0]->name;
               
            }
              
            // Check if the post is in a category
            if(!empty($last_category)) {
                echo $cat_display;
                echo '<li class="item-current item-' . $post->ID . '"><strong class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</strong></li>';
                  
            // Else if post is in a custom taxonomy
            } else if(!empty($cat_id)) {
                  
                echo '<li class="item-cat item-cat-' . $cat_id . ' item-cat-' . $cat_nicename . '"><a class="bread-cat bread-cat-' . $cat_id . ' bread-cat-' . $cat_nicename . '" href="' . $cat_link . '" title="' . $cat_name . '">' . $cat_name . '</a></li>';
                echo '<li class="separator"> ' . $separator . ' </li>';
                echo '<li class="item-current item-' . $post->ID . '"><strong class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</strong></li>';
              
            } else {
                  
                echo '<li class="item-current item-' . $post->ID . '"><strong class="bread-current bread-' . $post->ID . '" title="' . get_the_title() . '">' . get_the_title() . '</strong></li>';
                  
            }
              
        } else if ( is_category() ) {
               
            // Category page
            echo '<li class="item-current item-cat"><strong class="bread-current bread-cat">' . single_cat_title('', false) . '</strong></li>';
               
        } else if ( is_page() ) {
               
            // Standard page
            if( $post->post_parent ){
                   
                // If child page, get parents 
                $anc = get_post_ancestors( $post->ID );
                   
                // Get parents in the right order
                $anc = array_reverse($anc);
                   
                // Parent page loop
                if ( !isset( $parents ) ) $parents = null;
                foreach ( $anc as $ancestor ) {
                    $parents .= '<li class="item-parent item-parent-' . $ancestor . '"><a class="bread-parent bread-parent-' . $ancestor . '" href="' . get_permalink($ancestor) . '" title="' . get_the_title($ancestor) . '">' . get_the_title($ancestor) . '</a></li>';
                    $parents .= '<li class="separator separator-' . $ancestor . '"> ' . $separator . ' </li>';
                }
                   
                // Display parent pages
                echo $parents;
                   
                // Current page
                echo '<li class="item-current item-' . $post->ID . '"><strong title="' . get_the_title() . '"> ' . get_the_title() . '</strong></li>';
                   
            } else {
                   
                // Just display current page if not parents
                echo '<li class="item-current item-' . $post->ID . '"><strong class="bread-current bread-' . $post->ID . '"> ' . get_the_title() . '</strong></li>';
                   
            }
               
        } else if ( is_tag() ) {
               
            // Tag page
               
            // Get tag information
            $term_id        = get_query_var('tag_id');
            $taxonomy       = 'post_tag';
            $args           = 'include=' . $term_id;
            $terms          = get_terms( $taxonomy, $args );
            $get_term_id    = $terms[0]->term_id;
            $get_term_slug  = $terms[0]->slug;
            $get_term_name  = $terms[0]->name;
               
            // Display the tag name
            echo '<li class="item-current item-tag-' . $get_term_id . ' item-tag-' . $get_term_slug . '"><strong class="bread-current bread-tag-' . $get_term_id . ' bread-tag-' . $get_term_slug . '">' . $get_term_name . '</strong></li>';
           
        } elseif ( is_day() ) {
               
            // Day archive
               
            // Year link
            echo '<li class="item-year item-year-' . get_the_time('Y') . '"><a class="bread-year bread-year-' . get_the_time('Y') . '" href="' . get_year_link( get_the_time('Y') ) . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' Archives</a></li>';
            echo '<li class="separator separator-' . get_the_time('Y') . '"> ' . $separator . ' </li>';
               
            // Month link
            echo '<li class="item-month item-month-' . get_the_time('m') . '"><a class="bread-month bread-month-' . get_the_time('m') . '" href="' . get_month_link( get_the_time('Y'), get_the_time('m') ) . '" title="' . get_the_time('M') . '">' . get_the_time('M') . ' Archives</a></li>';
            echo '<li class="separator separator-' . get_the_time('m') . '"> ' . $separator . ' </li>';
               
            // Day display
            echo '<li class="item-current item-' . get_the_time('j') . '"><strong class="bread-current bread-' . get_the_time('j') . '"> ' . get_the_time('jS') . ' ' . get_the_time('M') . ' Archives</strong></li>';
               
        } else if ( is_month() ) {
               
            // Month Archive
               
            // Year link
            echo '<li class="item-year item-year-' . get_the_time('Y') . '"><a class="bread-year bread-year-' . get_the_time('Y') . '" href="' . get_year_link( get_the_time('Y') ) . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' Archives</a></li>';
            echo '<li class="separator separator-' . get_the_time('Y') . '"> ' . $separator . ' </li>';
               
            // Month display
            echo '<li class="item-month item-month-' . get_the_time('m') . '"><strong class="bread-month bread-month-' . get_the_time('m') . '" title="' . get_the_time('M') . '">' . get_the_time('M') . ' Archives</strong></li>';
               
        } else if ( is_year() ) {
               
            // Display year archive
            echo '<li class="item-current item-current-' . get_the_time('Y') . '"><strong class="bread-current bread-current-' . get_the_time('Y') . '" title="' . get_the_time('Y') . '">' . get_the_time('Y') . ' Archives</strong></li>';
               
        } else if ( is_author() ) {
               
            // Auhor archive
               
            // Get the author information
            global $author;
            $userdata = get_userdata( $author );
               
            // Display author name
            echo '<li class="item-current item-current-' . $userdata->user_nicename . '"><strong class="bread-current bread-current-' . $userdata->user_nicename . '" title="' . $userdata->display_name . '">' . 'Author: ' . $userdata->display_name . '</strong></li>';
           
        } else if ( get_query_var('paged') ) {
               
            // Paginated archives
            echo '<li class="item-current item-current-' . get_query_var('paged') . '"><strong class="bread-current bread-current-' . get_query_var('paged') . '" title="Page ' . get_query_var('paged') . '">'.__('Page') . ' ' . get_query_var('paged') . '</strong></li>';
               
        } else if ( is_search() ) {
           
            // Search results page
            echo '<li class="item-current item-current-' . get_search_query() . '"><strong class="bread-current bread-current-' . get_search_query() . '" title="Search results for: ' . get_search_query() . '">Search results for: ' . get_search_query() . '</strong></li>';
           
        } elseif ( is_404() ) {
               
            // 404 page
            echo '<li>' . 'Error 404' . '</li>';
        }
       
        echo '</ul>';
           
    }
       
}


function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
  }