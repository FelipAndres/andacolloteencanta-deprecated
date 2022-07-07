# Andacollo te encanta

## Descripción

Wordpress theme para el sitio web andacolloteencanta.cl


## Requesisitos

## Release

## Changelog

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
