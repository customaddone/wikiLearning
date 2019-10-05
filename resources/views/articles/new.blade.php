@extends('layouts.app')

@section('content')
    <div class="siimple-navbar siimple-navbar--large siimple-navbar--light">
        <a class="siimple-navbar-title" href="#">Store Checkout</a>
        <a class="siimple-btn siimple-btn--dark siimple--float-right siimple--ml-2 siimple--text-bold">
            Go back to store
        </a>
    </div>
    <div class="siimple-content siimple-content--large siimple--mt-5">
        <div class="siimple--mb-5" align="center">
            <div class="siimple-h1 siimple--text-normal siimple--mb-1">Checkout</div>
            <div class="siimple-paragraph siimple-paragraph--lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
        <div class="siimple-grid">
            <div class="siimple-grid-row">
                <textarea data-uk-htmleditor="{markdown:true, maxsplitsize: 600}"></textarea>
            </div>
        </div>
        <div class="siimple-footer siimple-footer--large" align="center">
            <div class="siimple-rule"></div>
            <div class="siimple--my-5" align="center">
                <div class="siimple-footer-title">Store Name</div>
                <div class="siimple-footer-subtitle">&copy; 2019 store company name</div>
            </div>
        </div>
@endsection
