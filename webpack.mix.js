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
    .sass('resources/sass/scss/_all.scss', 'public/css')
    .webpackConfig({
      externals: {
        "isomorphic-fetch": "fetch"
      }
    });
