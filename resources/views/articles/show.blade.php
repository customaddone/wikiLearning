@extends('layouts.app')

@section('content')
    @component('components.nav')
    @endcomponent


    <div id="app">
        <wiki-show></wiki-show>
    </div>

    <script src="{{ asset('js/main.js') }}"></script>

@endsection
