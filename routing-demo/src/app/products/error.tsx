"use client";
export default function ErrorBoundary({error, reset}:{
    error: Error;
    reset: () => void;
}) {
    /**
     * Executing reset function attempts to re-render error boundaries contents, 
     * if successful, fallback error component is replaced with rerendered content of page.tsx
     * This is how we recover from app.router  
     * 
     */
    return <div>{error.message} <button onClick={reset}>Try again</button></div>
}