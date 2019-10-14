@extends('layouts.app')

@section('content')
    @component('components.nav')
    @endcomponent

    <div id='app'>
        <div class="wikipedia-container">
            <wiki-show></wiki-show>
        <div class="wikipedia-container">
    </div>
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="{{ asset('js/selectedText.js') }}"></script>
@endsection
