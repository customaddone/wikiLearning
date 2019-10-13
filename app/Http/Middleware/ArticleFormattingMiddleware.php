<?php

namespace App\Http\Middleware;

use Closure;

class ArticleFormattingMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $pattern = '/<a href="\/wiki\/(.*?)".*?>(.+?)<\/a>/';
        $replace = '<a href="/$1">$2</a>';

        $request->body = preg_replace($pattern, $replace, $request->body);
        return $next($request);
    }
}
