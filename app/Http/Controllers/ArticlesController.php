<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{

    public function index() {
        $articles = Article::limit(3)->get();
        return view('articles.index', [ 'articles' => $articles ]);
    }

    public function show($id = "") {
        $article = Article::find($id);
        return view('articles.show', [ 'article' => $article ]);
    }

    public function create() {
        return view('articles.new');
    }

    public function store(Request $request) {
        $article = new Article;
        $form = $request->all();
        unset($form['_token']);
        $article->fill($form)->save();
        return redirect('/articles');
    }

    public function edit($id)
    {
        $article = Article::find($id);
        return view('articles.edit', [ 'article' => $article ] );
    }

    public function update(Request $request)
    {
       $article = Article::find($request->id);
       $form = $request->all();
       unset($form['_token']);
       $article->fill($form)->save();
       return redirect('/articles');
    }


    public function destroy($id)
    {
        $article = Article::find($id)->delete();
        return redirect('/articles');
    }

    public function wikishow(Request $request)
    {
        return response()->view('articles.show')->withHeaders(['hello' => 'world'
        ]);
    }
}
