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
            <!-- 各入力画面 -->
            <form action="/articles" method="post">
                {{ csrf_field() }}
                <div class="siimple-form">
                    <div class="siimple-form-title">Edit Article</div>
                    <div class="siimple-form-detail">Fill the form</div>
                    <div class="siimple-form-field">
                        <div class="siimple-form-field-label">Title</div>
                        <input type="text" name="title" class="siimple-input siimple-input--fluid">
                    </div>
                    <div class="siimple-form-field">
                        <div class="siimple-form-field-label">Your name</div>
                        <input type="text" name="userId" class="siimple-input siimple-input--fluid">
                    </div>
                    <div class="siimple-form-field">
                        <div class="siimple-form-field">
                            <div name="status" class="siimple-field-label">Status</div>
                            <select class="siimple-select siimple-select--fluid">
                                <option>Select one...</option>
                                <option>Draft</option>
                                <option>Member_only</option>
                                <option>Public</option>
                            </select>
                        </div>
                    </div>
                    <div class="siimple-form-field">
                        <div class="siimple-form-field-label">Date</div>
                        <div class="siimple-input siimple-input--fluid">{{
                            \Carbon\Carbon::now()->format("Y年m月d日") }}</div>
                    </div>
                </div>
                <div class="siimple-grid-row">
                    <div class="siimple-form-field-label"></div>
                    <textarea data-uk-htmleditor="{markdown:true, maxsplitsize: 600}"></textarea>
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
@endsection
