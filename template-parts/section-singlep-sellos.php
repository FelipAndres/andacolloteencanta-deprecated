<?php

$grupo_sellos = get_field('certificaciones');// parent group
// $sello
$sellos = $grupo_sellos["sellos"];

if(count($sellos) <= 0){?>
    <p>No tengo certificaciones por el momento!</p>
<?php
}
?>
<div class="flex-sellos">
    <?php  
    if($sellos && in_array('Sello 1', $sellos) ) {?>
        <img src="<?php echo get_template_directory_uri();  ?>/src/images/sellos/registro_turistico.svg"
                alt="sello registro turistico">
    <?php
        }
            if($sellos && in_array('Sello 2', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/src/images/sellos/sello_calidad_turistica.svg"
                alt="sello calidad turistica">
            <?php
        }
            if($sellos && in_array('Sello 3', $sellos) ) {?>
            <img src="<?php echo get_template_directory_uri();  ?>/src/images/sellos/sello_distinción_sustentabilidad.svg"
                alt="sello distincion de sustentabilidad">
            <?php
        }
    ?>
</div>
<div class="flex-sellos">
    <?php
        if($sellos && in_array('Sello 4', $sellos) ) {?>
        <img src="<?php echo get_template_directory_uri();  ?>/src/images/sellos/sello_confianza.svg" alt="sello de confianza">
        <?php
        }
        if($sellos && in_array('Sello 5', $sellos) ) {?>
        <img src="<?php echo get_template_directory_uri();  ?>/src/images/sellos/sello_sigo_turismo.svg"
            alt="Sello Sistema de Gestion Organizacional">
        <?php
        }
        if($sellos && in_array('Sello 6', $sellos) ) {?>
        <img src="<?php echo get_template_directory_uri();  ?>/src/images/sellos/sello_iso_9001.svg"
            alt="Sello Calidad Internacional ISO 9001">
        <?php
        }
    ?>
</div>

