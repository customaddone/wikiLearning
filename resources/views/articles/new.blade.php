@extends('layouts.app')

@section('content')
    <div class="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
        <div class="uk-grid" data-uk-grid-margin>
            <div class="uk-width-medium-1-1">

                <div class="uk-vertical-align uk-text-center" style="background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTEzMHB4IiBoZWlnaHQ9IjQ1MHB4IiB2aWV3Qm94PSIwIDAgMTEzMCA0NTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDExMzAgNDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSIxMTMwIiBoZWlnaHQ9IjQ1MCIvPg0KPC9zdmc+DQo=') 50% 0 no-repeat; height: 450px;">
                    <div class="uk-vertical-align-middle uk-width-1-2">
                        <h1 class="uk-heading-large">Sample Heading</h1>
                        <p class="uk-text-large">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo.</p>
                        <p>
                            <a class="uk-button uk-button-primary uk-button-large" href="#">Button</a>
                            <a class="uk-button uk-button-large" href="#">Button</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <hr class="uk-grid-divider">

        <div class="uk-grid" data-uk-grid-margin>
            <div class="uk-width-medium-1-2">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h2>Subheading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a class="uk-button uk-button-primary" href="#">Button</a>
            </div>

            <div class="uk-width-medium-1-2">
                <img width="660" height="400" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjYwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA2NjAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NjAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSI2NjAiIGhlaWdodD0iNDAwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0yNTguMTg0LDE0My41djExM2gxNDMuNjMydi0xMTNIMjU4LjE4NHogTTM5MC4yNDQsMjQ0LjI0N0gyNzAuNDM3di04OC40OTRoMTE5LjgwOEwzOTAuMjQ0LDI0NC4yNDcNCgkJTDM5MC4yNDQsMjQ0LjI0N3oiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjI3Ni44ODEsMjM0LjcxNyAzMDEuNTcyLDIwOC43NjQgMzEwLjgyNCwyMTIuNzY4IDM0MC4wMTYsMTgxLjY4OCAzNTEuNTA1LDE5NS40MzQgDQoJCTM1Ni42ODksMTkyLjMwMyAzODQuNzQ2LDIzNC43MTcgCSIvPg0KCTxjaXJjbGUgZmlsbD0iI0Q4RDhEOCIgY3g9IjMwNS40MDUiIGN5PSIxNzguMjU3IiByPSIxMC43ODciLz4NCjwvZz4NCjwvc3ZnPg0K" alt="">
            </div>
        </div>

        <hr class="uk-grid-divider">

        <div class="uk-grid" data-uk-grid-margin>
            <div class="uk-width-medium-1-3">
                <div class="uk-grid">
                    <div class="uk-width-1-6">
                        <i class="uk-icon-cog uk-icon-large uk-text-primary"></i>
                    </div>
                    <div class="uk-width-5-6">
                        <h2 class="uk-h3">Sample Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div class="uk-width-medium-1-3">
                <div class="uk-grid">
                    <div class="uk-width-1-6">
                        <i class="uk-icon-thumbs-o-up uk-icon-large uk-text-primary"></i>
                    </div>
                    <div class="uk-width-5-6">
                        <h2 class="uk-h3">Sample Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div class="uk-width-medium-1-3">
                <div class="uk-grid">
                    <div class="uk-width-1-6">
                        <i class="uk-icon-cloud-download uk-icon-large uk-text-primary"></i>
                    </div>
                    <div class="uk-width-5-6">
                        <h2 class="uk-h3">Sample Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-grid" data-uk-grid-margin>
            <div class="uk-width-medium-1-3">
                <div class="uk-grid">
                    <div class="uk-width-1-6">
                        <i class="uk-icon-dashboard uk-icon-large uk-text-primary"></i>
                    </div>
                    <div class="uk-width-5-6">
                        <h2 class="uk-h3">Sample Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div class="uk-width-medium-1-3">
                <div class="uk-grid">
                    <div class="uk-width-1-6">
                        <i class="uk-icon-comments uk-icon-large uk-text-primary"></i>
                    </div>
                    <div class="uk-width-5-6">
                        <h2 class="uk-h3">Sample Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div class="uk-width-medium-1-3">
                <div class="uk-grid">
                    <div class="uk-width-1-6">
                        <i class="uk-icon-briefcase uk-icon-large uk-text-primary"></i>
                    </div>
                    <div class="uk-width-5-6">
                        <h2 class="uk-h3">Sample Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>

        <hr class="uk-grid-divider">

        <div class="uk-grid" data-uk-grid-margin>
            <div class="uk-width-medium-1-1">
                <div class="uk-panel uk-panel-box uk-text-center">
                    <p><strong>Phasellus viverra nulla ut metus.</strong> Quisque rutrum etiam ultricies nisi vel augue. <a class="uk-button uk-button-primary uk-margin-left" href="#">Button</a></p>
                </div>
            </div>
        </div>
    </div>

    <div id="offcanvas" class="uk-offcanvas">
        <div class="uk-offcanvas-bar">
            <ul class="uk-nav uk-nav-offcanvas">
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
        </div>
    </div>

@endsection
