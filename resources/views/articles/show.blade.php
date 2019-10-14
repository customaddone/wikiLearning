@extends('layouts.app')

@section('content')
    @component('components.nav')
    @endcomponent


    <div id="app">
        <div class="uk-container">
            <wiki-show></wiki-show>
        </div>
    </div>

    <script src="{{ asset('js/main.js') }}"></script>

@endsection
