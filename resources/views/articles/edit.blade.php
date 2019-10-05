@extends('layouts.app')

@section('content')
    <!-- ナビ -->
    @component('components.editNav')
    @endcomponent

    <div class="siimple-content siimple-content--large siimple--mt-5">
        <!-- メインコンテンツのヘッダー -->
        @component('components.showHeader')
        @endcomponent
        <div class="siimple-grid">
            <div class="siimple-form">
                <div class="siimple-form-title">Edit Article</div>
                <div class="siimple-form-detail">Fill the form</div>
                <!-- 各入力画面 -->
                <form action="/articles/{{ $article->id }}" method="post">
                    {{ method_field('patch') }}
                    {{ csrf_field() }}
                    <input type="hidden" name="id" value="{{ $article->id }}">
                    <div class="siimple-form-field">
                        <div class="siimple-form-field-label">Title</div>
                        <input type="text" name="title"class=
                            "siimple-input siimple-input--fluid" value="{{ $article->title}}">
                    </div>
                    <div class="siimple-form-field">
                        <div class="siimple-form-field-label">Your name</div>
                        <input type="text" name="userId" class=
                            "siimple-input siimple-input--fluid" value="{{ $article->userId}}">
                    </div>
                    <div class="siimple-form-field">
                        <div class="siimple-field-label">Status</div>
                        <select name="status" class=
                            "siimple-select siimple-select--fluid" value="{{ $article->status }}">
                            <option>Select one...</option>
                            <option>Draft</option>
                            <option>Member_only</option>
                            <option>Public</option>
                        </select>
                    </div>
                    <div class="siimple-form-field">
                        <div class="siimple-form-field-label">Date</div>
                        <div class="siimple-input siimple-input--fluid">{{
                            $article->created_at }}</div>
                    </div>
                    <div class="siimple-grid-row">
                        <div class="siimple-form-field-label"></div>
                        <textarea name="article" data-uk-htmleditor=
                            "{markdown:true, maxsplitsize: 600}">{{ $article->article }}</textarea>
                    </div>
                    <input style="float: left;" type="submit" class=
                        "siimple-btn siimple-btn--primary" value="Edit Article">
                </form>
                <div class="siimple-footer siimple-footer--large" align="center">
                    <div class="siimple-rule"></div>
                    <div class="siimple--my-5" align="center">
                        <div class="siimple-footer-title">Store Name</div>
                        <div class="siimple-footer-subtitle">&copy; 2019 store company name</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
