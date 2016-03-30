process.env.DISABLE_NOTIFIER=true;
var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss'),
    mix.scripts([
    	'vendor/vue.js',
    	'vendor/vue-resource.min.js'
    ], 'public/js/vendor.js'),
    mix.browserify('main.js');
});
