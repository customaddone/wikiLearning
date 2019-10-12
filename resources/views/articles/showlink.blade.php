@extends('layouts.app')

@section('content')
    <div id="article">
        <form action="/articles" method="post">
            {{ csrf_field() }}
            <input type="hidden" name="userId" value="1">
            <input type="hidden" v-model="">
            <input type="hidden" v-model="">
            <input type="hidden" name="status" value="wiki">
            <button type="submit" class="siimple-btn siimple-btn--primary" style=
            "margin-bottom:15px;">送信</button>
        </form>
        <div v-html="usersshow"></div>
    </div>
    <script src="{{ asset('js/wikilinkto.js') }}"></script>
    <script src="{{ asset('js/selectedText.js') }}"></script>
@endsection
