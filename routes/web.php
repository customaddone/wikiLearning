<?php

use App\Http\Middleware\ArticleFormattingMiddleware;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ArticlesController@index');

Route::resource('/articles', 'ArticlesController');

Route::match(["get", "options"],'/articles/wikishow/{pass?}', 'ArticlesController@wikishow');
