<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function index() {
        return view('articles.index');
    }

    public function create() {
        return view('articles.new');
    }
}
