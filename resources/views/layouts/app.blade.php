<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts　あとで変更する -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Markdown Editor -->
    <!-- jQuery UIKit使う時にJQuery必要 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- UI Kit -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.5/css/uikit.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.5/js/uikit.min.js"></script>

    <!-- Codemirror and marked dependencies -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/codemirror.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/codemirror.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/mode/markdown/markdown.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/addon/mode/overlay.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/mode/xml/xml.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.38.0/mode/gfm/gfm.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.js'></script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- HTML editor CSS and JavaScript -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.5/css/components/htmleditor.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.27.5/js/components/htmleditor.js"></script>
</head>
<body>
    <div id="app">
        <nav class="uk-navbar uk-margin-large-bottom">
            <a class="uk-navbar-brand uk-hidden-small" href="layouts_frontpage.html">Brand</a>
            <ul class="uk-navbar-nav uk-hidden-small">
                <li class="uk-active">
                    <a href="layouts_frontpage.html">Frontpage</a>
                </li>
                <li>
                    <a href="layouts_portfolio.html">Portfolio</a>
                </li>
                <li>
                    <a href="layouts_blog.html">Blog</a>
                </li>
                <li>
                    <a href="layouts_documentation.html">Documentation</a>
                </li>
                <li>
                    <a href="layouts_contact.html">Contact</a>
                </li>
                <li>
                    <a href="layouts_login.html">Login</a>
                </li>
            </ul>
            <a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
            <div class="uk-navbar-brand uk-navbar-center uk-visible-small">Brand</div>
        </nav>
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
