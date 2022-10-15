# Andacollo te encanta

## Descripción

Wordpress theme para el sitio web andacolloteencanta.cl


## Requisitos

## Release

## Changelog


14-10-2022 1.0.9

* Validaciones a RRSS, Sellos, Galleria en Single Perfil
* Separacion de RRSS, sellos y galleria de productos en Template Parts
* 

03-10-22 / 1.0.8

* cambio posicion sellos perfiles
* cambios icones redes sociales
* cambios single perfil grids, (bug en 860)
* cambios en AFC form, subir nuevo json


24-08-09 / v1.0.7
* cambiado rango de paginacion a 3 en functions.php para menor tamaño en pantalla
* cambio tambien en lectura de blog post en wordpress de 10 a 3, por esta razon no se mostrar mas paginacion
* agregado text con total de perfiles, pero falta acomodarlo en otras vistas.....(PENDIENTE)

22-7-06 / v1.0.6
* Paginas : saque algunos elemtnos html para que sea bien es algo provisorio
* Agrege una nueva mediaquery para tener un ajuste del with general mas preciso
* Noticias Single: idem de arriba
* Ajuste Width general del sitio web
* Ajuste cartas de Front Page segun el ajuste del width general
* cambie el total de columnas del single por 6 en vez de 7, asi queda un poco mas "apretado"
* cambie el el tamaño de la query del navbar hamburgesa, ahora aparece a los 859px
* cambie nombres en los formularios de noticias y paginas.
* cambio de color slideshow subtitulo y subryado a anchor tags
* añadi pequeña animacion a las cartas del front page

23-07-07 / 1.0.7
* cambio a rutas de imagenes


## Development

### Prerequisites

Because I compile and bundle assets via NPM scripts, basic knowledge of the command line and the following dependencies are required:

- [Node](https://nodejs.org) (v14+)
- [NPM](https://npmjs.com) (v7+)
- [Composer](https://getcomposer.org/)

### Installation

* npm install
* importar acf json para los campos personalizados.
* use dumy_data.xml on wordpress instalation for testing

From the command line, type any of the following to perform an action:

Command | Action
:- | :-
`npm run dev` | Builds assets and watch for files changes
`npm run webpack:dev` | Builds assets, compile sass to css in development mode
`npm run webpack:prod` | Builds production-ready assets for a deployment
`npm run build` | Build zip ready for deploy
