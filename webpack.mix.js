const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .scripts('resources/js/wikiAPI.js', 'public/js/wikiAPI.js')
    .scripts('resources/js/wikilinkto.js', 'public/js/wikilinkto.js')
    .scripts('resources/js/selectedText.js', 'public/js/selectedText.js')
    .sass('resources/sass/scss/_all.scss', 'public/css')
    .webpackConfig({
      externals: {
        "isomorphic-fetch": "fetch"
      }
    });
