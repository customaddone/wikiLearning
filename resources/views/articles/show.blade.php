@extends('layouts.app')

@section('content')
   <form action="/articles" method="post">
       {{ csrf_field() }}
       <input type="hidden" name="userId" value="1">
       <input type="hidden" name="title" value="{{ $title }}">
       <input type="hidden" name="article" value="{{ $article }}">
       <input type="hidden" name="status" value="wiki">
       <button type="submit" class="siimple-btn siimple-btn--primary" style=
        "margin-bottom:15px;">送信</button>
    </form>

    <div id="selectedWord">
        <p>選択中の文字:<span>@{{ selectedText }}</span></p>

        <div
        @select="selected"
        @blur="selected"
        @keyup="selected"
        @click="selected">{!! $article !!}</div>
    </div>
    <div id="article">@{{ usersshow }}</div>
    {{ $title }}
    <script src="{{ asset('js/wikilinkto.js') }}"></script>
    <script src="{{ asset('js/selectedText.js') }}"></script>
@endsection
