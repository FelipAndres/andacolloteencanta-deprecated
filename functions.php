<?php
/**
 * andacolloteencanta functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package andacolloteencanta
 */

/**
 * Get all the include files for the theme.
 *
 * @author 4040dev
 */

//  Setup Styles and Scripts
function setup_styles_scripts()
{

    wp_enqueue_style(
        'main', 
        get_template_directory_uri() . '/build/css/style.css', 
        array(), 
        filemtime(get_stylesheet_directory()  . '/build/css/style.css')
    );

    wp_enqueue_script( 
        'app', 
        get_template_directory_uri() . '/build/dev.bundle.js', '', '', true
    );
    wp_enqueue_script( 
        'Font Awesome 5','https://kit.fontawesome.com/408f0c4a1f.js', '', '', true
    );

}
add_action('wp_enqueue_scripts', 'setup_styles_scripts');



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
function register_my_menu()
{
    register_nav_menus(
        array(
            "top-menu" => 'Top Menu Location',
        )
    );
}
add_action('init', 'register_my_menu');

// Habilitar backgrounds personalizados. https://developer.wordpress.org/themes/functionality/custom-backgrounds/
add_theme_support("custom_background");
// configuraciones para nuestro backgorund personalizado
$args = array(
    "default-image" => get_template_directory_uri() . "/src/images/trama270.jpg",
);
add_theme_support("custom-background", $args);

// Soporte para imagenes
add_theme_support('post-thumbnails');

// ----------------- Custom Images Sizes
//Slideshow
add_image_size('slide', 1920, 792, false); 
add_image_size('post-img', 210, 160, true); 
// Imagen de Single Perfil 
add_image_size('perfil-img', 291, 194, true);
// Imagen de Productos Perfil
add_image_size('productos-img', 640, 360, true);
// Imagen del Archive de categorias vitrina
add_image_size('img-carta-noticias', 255, 149, true);
add_image_size('slide-img', 1440, 750, true);

//Imagen de single entrada featured imagen
add_image_size('featured-entrada', 1380, 516, true);

//Imagen lead de entrada
add_image_size('lead-entrada', 461, 818, true);
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
        'show_admin_column' => true,
        'show_in_menu' => true,
    );
    register_taxonomy('categorias-perfiles', array('perfil'), $args);
}
add_action('init', 'categorias_perfiles');

//Filtrar en Perfiles
function filtro_personalizado_taxonomia()
{
    global $typenow;
 
    // En el siguiente array añadimos la taxonomía que queremos mostrar.
    // Hay que poner el slug de la taxonomía
    $taxonomias = array('categorias-perfiles');

    // Debemos seleccionar el tipo de post sobre el que se va a mostrar
    if($typenow == 'perfil' ) {
        foreach ($taxonomias as $slug_taxonomia)
        {
            $taxonomia = get_taxonomy($slug_taxonomia);
            $nombre_taxonomia = $taxonomia->labels->name;
            $terms = get_terms($slug_taxonomia);
            if(count($terms) > 0) {
                echo "<select name='$slug_taxonomia' id='$slug_taxonomia' class='postform'>";
                echo "<option value=''>Mostrar todos $nombre_taxonomia</option>";
                foreach ($terms as $term)
                { 
                    echo '<option value='. $term->slug, $_GET[$slug_taxonomia] == $term->slug ? ' selected="selected"' : '','>' . $term->name .' (' . $term->count .')</option>'; 
                }
                echo "</select>";
            }
        }
    }
}
add_action('restrict_manage_posts', 'filtro_personalizado_taxonomia');

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
function custom_bootstrap_slider()
{
    $labels = array(
    'name'               => _x('Slideshow', 'post type general name'),
    'singular_name'      => _x('slideshow', 'post type singular name'),
    'menu_name'          => _x('Slideshow', 'admin menu'),
    'name_admin_bar'     => _x('Slideshow', 'add new on admin bar'),
    'add_new'            => _x('Add New', 'Slide'),
    'add_new_item'       => __('Name'),
    'new_item'           => __('Nueva Slideshow'),
    'edit_item'          => __('Editar Slideshow'),
    'view_item'          => __('Ver Slideshow'),
    'all_items'          => __('Todas las Slideshow'),
    'featured_image'     => __('Imagen de Slideshow', 'text_domain'),
    'search_items'       => __('Buscar Slideshow'),
    'parent_item_colon'  => __('Slideshow Padre:'),
    'not_found'          => __('Slideshow no encontrada.'),
    'not_found_in_trash' => __('Sin slideshow en el papelero.'),
    );

    $args = array(
    'labels'             => $labels,
    'menu_icon'         => 'dashicons-images-alt2',
        'description'        => __('Description.'),
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

    register_post_type('slideshow', $args);
    
    flush_rewrite_rules();
}
add_action('init', 'custom_bootstrap_slider');

// add_filter('show_admin_bar', '__return_false');

function special_nav_class($classes, $item)
{
    if(in_array('current-menu-item', $classes) ) {
            $classes[] = 'active-item';
    }elseif (in_array('current-menu-parent', $classes) and in_array('menu-item-has-children', $classes)) {
        $classes[] = 'active-item';
    }elseif (in_array('', $classes)) {
        $classes[] = 'active-item';
    }
    return $classes;
}add_filter('nav_menu_css_class', 'special_nav_class', 10, 2);


function pagination($pages = '', $range = 3)
{
    $showitems = ($range * 2)+1;
 
    global $paged;
    if(empty($paged)) { $paged = 1;
    }
 
    if($pages == '') {
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if(!$pages) {
            $pages = 1;
        }
    }
//  deberia al final de los post "desactivar" el boton ">" porque o si no lleva a un 404
    if(1 != $pages) {   
        echo "<div class=\"paginacion\">";
        echo "<a class=\"paginacion-btn\" href='".get_pagenum_link($paged - 1)."'>&lsaquo;</a>";
        //echo "<a href='".get_pagenum_link(1)."'>&laquo; Primero</a>";
        
        
        if($paged > 2 && $paged > $range+1 && $showitems < $pages) {
        } 
        if($paged > 1 && $showitems < $pages) {
        }
        
 
        for ($i=1; $i <= $pages; $i++)
        {
            if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )) {
                echo ($paged == $i)? "<span class=\" paginacion-btn paginacion-current\">".$i."</span>":"<a class=\"paginacion-btn\" href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";
            }
        }
        echo "<a class=\"paginacion-btn\" href=\"".get_pagenum_link($paged + 1)."\"> &rsaquo;</a>";
        if ($paged < $pages && $showitems < $pages) {
        } 
        
        if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) {
        }
        //echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
        echo "</div>\n";
        echo "<span style=\"font-size: .8rem; color:#808080; text-align:center;\">Página $paged de $pages </span>"; 
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
            echo '<div  class="breadcrumbs card-styles" id="crumbs"><a href="' . $homeLink . '">' . $home . '</a></div>';
        }
    } else {
        echo '<div class="breadcrumbs card-styles" id="crumbs"><a href="' . $homeLink . '">' . $home . '</a> ' . $delimiter . ' ';
        if (is_category()) {
            $thisCat = get_category(get_query_var('cat'), false);
            if ($thisCat->parent != 0) {
                echo get_category_parents($thisCat->parent, true, ' ' . $delimiter . ' ');
            }
            echo $before . 'Archive by category"' . single_cat_title('', false) . '"' . $after;
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
                //$slug = $post_type->rewrite;
                $categorias = "categorias";
                echo '<span href="' . $homeLink . '/' . $categorias . '/">' . $post_type->labels->singular_name . '</span>';
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


function console_log( $data )
{
    echo '<script>';
    echo 'console.log('. json_encode($data) .')';
    echo '</script>';
}

// Cambio en los permisos de los Perfiles de Wordpress
 
/* Register template redirect action callback */
add_action('template_redirect', 'meks_remove_wp_archives');
 
/* Remove archives */
function meks_remove_wp_archives()
{
    //If we are on category or tag or date or author archive
    if(is_category() || is_tag() || is_date() || is_author() ) {
        global $wp_query;
        $wp_query->set_404(); //set to 404 not found page
    }
}
