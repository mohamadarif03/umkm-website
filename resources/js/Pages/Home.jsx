import React from 'react';

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-semibold">Inertia + React is ready</h1>
                <p className="mt-3 text-slate-600">
                    Your first Inertia route is now running through Vite with React.
                </p>
            </div>
        </main>
    );
}
