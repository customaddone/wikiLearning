@extends('layouts.app')

@section('content')
    <!-- ナビ -->
    <div class="siimple-navbar siimple-navbar--extra-large siimple-navbar--dark">
        <a class="siimple-navbar-title" href="#">Navbar</a>
        <a class="siimple-navbar-item" href="#">Home</a>
        <a class="siimple-navbar-item" href="#">About</a>
    </div>



        <div id="app">
            <!-- formはいらないみたい -->
            キーワード：<input type="text" v-model="query.srsearch" size="60" placeholder="" />
            <input type="button" name="search" value="検索" v-on:click="wikiapi()" />

            <div v-for="(user, index) in users" v-bind:key="index">
                <div class="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-12">
                    <div class="siimple-h2">@{{ user.title }}</div>
                    <div class="siimple-paragraph siimple--text-justify">
                        <div v-html="user.snippet"></div>
                    </div>
                    <!-- Show -->
                    <form action="/api/wikishow" method="post">
                        <input type="hidden" name="title" v-model="query.srsearch">
                        <input type="hidden" name="body" v-model="usersshow">
                        <div class="siimple-btn siimple-btn--primary" style=
                            "margin-bottom:15px;"  v-on:click="wikiapishow(user)">HTML生成</div>
                        <input type="submit" class="siimple-btn siimple-btn--success" style=
                            "margin-bottom:15px;" value="詳細">
                    </form>
                </div>
            </div>
        </div>
        <script src="{{ asset('js/wikiAPI.js') }}"></script>
        <div class="siimple-rule"></div>

        <!-- 記事新規作成 -->
        <a href="/articles/create" class="siimple-btn siimple-btn--primary" style=
            "margin-bottom:15px;">New Article</a>
    </div>

    <div class="siimple-footer siimple-footer--extra-large">
        &copy; 2018 Your company name.
    </div>
@endsection
