<?php
        $rrss_otros = get_field('plataformas'); // parent group
        $location = $rrss_otros['URL_360'];
        $youtube = $rrss_otros['URL_youtube'];
        $website = $rrss_otros['URL_web'];
        
        $rrss_contacto = get_field('rrss'); // parent group
        $facebook = $rrss_contacto['link_facebook']; 
        $instagram = $rrss_contacto['link_instagram']; 
        $email = $rrss_contacto['link_email'];
        $whatsapp = $rrss_contacto['link_whatsapp'];
        $nua = null;
?>


<?php 

        if(!$facebook && !$instagram && !$whatsapp && !$location && !$youtube && !$website){
                ?>
                <p>No tengo Redes Sociales por el momento!</p>
                <?php      
       }?>
        <div class="flex-rrss">
        <?php
                if ($facebook){
                        ?>
                        <a href="<?php echo $facebook; ?>"><img class="info-perfil--icons"
                        src="<?php echo get_template_directory_uri();  ?>/src/images/icons/colors/facebook.png" alt=""></a> 
                <?php
                }
                if ($instagram){ ?>
                        <a href="<?php echo $instagram; ?>"><img class="info-perfil--icons"
                        src="<?php echo get_template_directory_uri();  ?>/src/images/icons/colors/instagram.png" alt=""></a>
                <?php       
                }
                if ($whatsapp){?>
                        <a href="<?php echo $whatsapp; ?>"><img class="info-perfil--icons"
                        src="<?php echo get_template_directory_uri();  ?>/src/images/icons/colors/whatsapp.png" alt=""></a>

                <?php
                }
        ?>
        </div>
        <div class="flex-rrss">
        <?php
                if ($location){?>
                        <a href="<?php echo $location; ?>"><img class="info-perfil--icons"
                        src="<?php echo get_template_directory_uri();  ?>/src/images/icons/colors/map.png" alt=""></a>
                <?php
                }
                if ($youtube){?>
                        <a href="<?php echo $youtube; ?>"><img class="info-perfil--icons"
                        src="<?php echo get_template_directory_uri();  ?>/src/images/icons/colors/youtube.png" alt=""></a>
                <?php        
                }
                if ($website){?>
                        <a href="<?php echo $website; ?>"><img class="info-perfil--icons"
                        src="<?php echo get_template_directory_uri();  ?>/src/images/icons/colors/internet.png" alt=""></a>
                <?php        
                }
        ?>
        </div>






