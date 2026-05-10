<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfFrontendAuthenticated
{
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie(EnsureFrontendAuthenticated::COOKIE_NAME);

        if ((!is_string($token) || $token === '') && isset($_COOKIE[EnsureFrontendAuthenticated::COOKIE_NAME])) {
            $rawToken = urldecode((string) $_COOKIE[EnsureFrontendAuthenticated::COOKIE_NAME]);
            $token = $rawToken !== '' ? $rawToken : null;
        }

        if (!is_string($token) || $token === '') {
            return $next($request);
        }

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken || !$accessToken->tokenable) {
            return $next($request);
        }

        Auth::setUser($accessToken->tokenable);

        return redirect('/dashboard');
    }
}
