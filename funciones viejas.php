// cargamos nuestro archivo css
function load_css()
{
    
    //cargamos nuestro principal. // HEADER FOOTER PAGE SINGLE ARCHVE
    wp_enqueue_style(
        'main', 
        get_template_directory_uri() . '/assets/css/main.css', 
        array(), 
        filemtime(get_stylesheet_directory()  . '/assets/css/main.css')
    );
    //cargamos nuestro principal. // HEADER FOOTER PAGE SINGLE ARCHVE
    wp_enqueue_style(
        'main-scss', 
        get_template_directory_uri() . '/dist/css/style.css', 
        array(), 
        filemtime(get_stylesheet_directory()  . '/dist/css/style.css')
    );
    
    //cargamos nuestro principal. // HEADER FOOTER PAGE SINGLE ARCHVE
    wp_enqueue_style('unicons', 'https://unicons.iconscout.com/release/v4.0.0/css/line.css', array(), null);

    //cargamos nuestro propio estilo personalizado para páginas.
    if (is_page('front-page') ) {
        wp_enqueue_style(
            'main', 
            get_template_directory_uri() . '/assets/css/main.css', 
            array(), 
            filemtime(get_stylesheet_directory()  . '/assets/css/main.css')
        );
    } elseif (is_page_template('page-templates/informaciones.php') ) {
        wp_enqueue_style(
            'page-informaciones', 
            get_template_directory_uri() . '/assets/css/informaciones.css', 
            array(), 
            filemtime(get_stylesheet_directory()  . '/assets/css/informaciones.css')
        );

    }else{
        wp_enqueue_style(
            'page', 
            get_template_directory_uri() . '/assets/css/page.css', 
            array(), 
            filemtime(get_stylesheet_directory()  . '/assets/css/page.css')
        );
    }

    //cargamos nuestro propio estilo personalizado para páginas(Noticias).
    if (is_home()) {
        wp_enqueue_style(
            'home', 
            get_template_directory_uri() . '/assets/css/home.css', 
            array(), 
            filemtime(get_stylesheet_directory()  . '/assets/css/home.css')
        );
    }
    //cargamos nuestro propio estilo personalizado para páginas(Single Noticia).
    if (is_single()) {
        wp_enqueue_style(
            'single', 
            get_template_directory_uri() . '/assets/css/single.css', 
            array(), 
            filemtime(get_stylesheet_directory()  . '/assets/css/single.css')
        );
    }
    //CSS for singular post from custom post type "perfil"
    if (is_singular('perfil')) {
        wp_enqueue_style(
            'perfil', 
            get_template_directory_uri() . '/assets/css/single-perfil.css', 
            array(), 
            filemtime(get_stylesheet_directory()  . '/assets/css/single-perfil.css')
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
            get_template_directory_uri() . '/assets/css/archive-perfiles.css',
            array(),  
            filemtime(get_stylesheet_directory() . '/assets/css/archive-perfiles.css')
        );
    }
    if (is_tax('categorias-perfiles', 'donde-comer')) {
        wp_enqueue_style(
            'donde-comer', 
            get_template_directory_uri() . '/assets/css/archive-perfiles-dondecomer.css', 
            array(), 
            filemtime(get_stylesheet_directory() . '/assets/css/archive-perfiles-dondecomer.css')
        );
    }
    if (is_tax('categorias-perfiles', 'donde-dormir')) {
        wp_enqueue_style(
            'donde-dormir', 
            get_template_directory_uri() . '/assets/css/archive-perfiles-dondedormir.css',
            array(),  
            filemtime(get_stylesheet_directory() . '/assets/css/archive-perfiles-dondedormir.css')
        );
    }
    
    if (is_tax('categorias-perfiles', 'que-visitar')) {
        wp_enqueue_style(
            'que-visitar', 
            get_template_directory_uri() . '/assets/css/archive-perfiles-quevisitar.css', 
            array(), 
            filemtime(get_stylesheet_directory() . '/assets/css/archive-perfiles-quevisitar.css')
        );
    }
    
    if (is_tax('categorias-perfiles', 'artesania')) {
        wp_enqueue_style(
            'artesania', 
            get_template_directory_uri() . '/assets/css/archive-perfiles-artesania.css', 
            array(), 
            filemtime(get_stylesheet_directory() . '/assets/css/archive-perfiles-artesania.css')
        );
    }
    
    if (is_tax('categorias-perfiles', 'emprendedor')) {
        wp_enqueue_style(
            'emprendedor',
            get_template_directory_uri() . '/assets/css/archive-perfiles-emprendedor.css', 
            array(), 
            filemtime(get_stylesheet_directory() . '/assets/css/archive-perfiles-emprendedor.css')
        );
    }
    
    if (is_tax('categorias-perfiles', 'productor')) {
        wp_enqueue_style(
            'productor', 
            get_template_directory_uri() . '/assets/css/archive-perfiles-productor.css', 
            array(), 
            filemtime(get_stylesheet_directory() . '/assets/css/archive-perfiles-productor.css')
        );
    }
    //cargamos nuestro propio estilo personalizado para páginas.
    if (is_404()) {
        wp_enqueue_style(
            '404', 
            get_template_directory_uri() . '/assets/css/404.css', 
            array(), 
            filemtime(get_stylesheet_directory()  . '/assets/css/404.css')
        );
    }
}
add_action('wp_enqueue_scripts', 'load_css');
//Carga de JS
function load_js()
{
    
    wp_register_script('scrollnav', get_template_directory_uri() . '/dist/prod.bundle.js', true);
    wp_enqueue_script('scrollnav');

    // // wp_register_script('animations',, true);
    // wp_enqueue_script('animations',
    // get_template_directory_uri() .'/assets/js/animation.js',array(), 
    // filemtime(get_template_directory() . '/assets/js/animation.js'), true);

    // wp_register_script('slideshow', get_template_directory_uri() . '/assets/js/slideshow.js', '', '', true);
    // wp_enqueue_script('slideshow');
}
add_action('wp_enqueue_scripts', 'load_js');
