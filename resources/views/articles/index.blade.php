@extends('layouts.app')

@section('content')
    <!-- ナビ -->
    <div class="siimple-navbar siimple-navbar--extra-large siimple-navbar--dark">
        <a class="siimple-navbar-title" href="#">Navbar</a>
        <a class="siimple-navbar-item" href="#">Home</a>
        <a class="siimple-navbar-item" href="#">About</a>
    </div>

    <div id="app">
        <ul>
            <li>@{{ users }}</li>
        </ul>
    </div>

    <script src="{{ asset('js/wikiAPI.js') }}"></script>
    <!-- メインコンテンツのヘッダー -->
    <div class="siimple-jumbotron siimple-jumbotron--extra-large siimple-jumbotron--light">
        <div class="siimple-jumbotron-title">Welcome!</div>
        <div class="siimple-jumbotron-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>

    <div class="siimple-content siimple-content--extra-large">
        <div class="siimple-grid">
            <div class="siimple-grid-row">
                <!-- 各記事 -->
                @foreach( $articles as $article)
                    <div class="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-12">
                        <div class="siimple-h2">{{ $article->title }}</div>
                        <div class="siimple-paragraph siimple--text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <!-- Show -->
                        <a href="/articles/{{ $article->id }}" class=
                            "siimple-btn siimple-btn--primary" style="margin-bottom:15px;">Show</a>
                        <!-- Edit -->
                        <a href="/articles/{{ $article->id }}/edit" class=
                            "siimple-btn siimple-btn--success" style="margin-bottom:15px;">Edit</a>
                        <!-- delete -->
                        <form action="/articles/{{ $article->id }}" id=
                            "form_{{ $article->id }}" method="post" style="display:inline">
                            {{ csrf_field() }}
                            {{ method_field('delete') }}
                            <a href="#" data-id="{{ $article->id }}" class=
                                "siimple-btn siimple-btn--warning" style=
                                "margin-bottom:15px;" onclick="deletePost(this);">Delete</a>
                        </form>
                        <script>
                            function deletePost(e) {
                                'use strict';
                                /* 確認に対し「OK」を押した場合（trueを返す)場合に実行 */
                                if (confirm('are you sure?')) {
                                　/* getElementByIdでform（Elementオブジェクト)を呼び出し、submitする */
                                document.getElementById('form_' + e.dataset.id).submit();
                                }
                            }
                        </script>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="siimple-rule"></div>
        <!-- 記事新規作成 -->
        <a href="/articles/create" class="siimple-btn siimple-btn--primary" style=
            "margin-bottom:15px;">New Article</a>
    </div>

    <div class="siimple-footer siimple-footer--extra-large">
        &copy; 2018 Your company name.
    </div>
@endsection
