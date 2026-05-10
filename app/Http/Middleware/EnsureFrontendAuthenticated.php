<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class EnsureFrontendAuthenticated
{
    public const COOKIE_NAME = 'umkm_access_token';

    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie(self::COOKIE_NAME);

        if ((!is_string($token) || $token === '') && isset($_COOKIE[self::COOKIE_NAME])) {
            $rawToken = urldecode((string) $_COOKIE[self::COOKIE_NAME]);
            $token = $rawToken !== '' ? $rawToken : null;
        }

        if (!is_string($token) || $token === '') {
            return redirect('/login');
        }

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken || !$accessToken->tokenable) {
            return redirect('/login')->withCookie(cookie()->forget(self::COOKIE_NAME));
        }

        Auth::setUser($accessToken->tokenable);

        return $next($request);
    }
}
