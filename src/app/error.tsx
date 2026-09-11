'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error-page">
      <div className="error-card">
        <AlertTriangle size={40} aria-hidden="true" />
        <h1>Something went wrong</h1>
        <p>An unexpected error occurred. Please try again.</p>
        <button type="button" onClick={reset}>
          <RefreshCw size={16} />
          Try again
        </button>
      </div>
    </main>
  );
}