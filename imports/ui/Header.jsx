import React from 'react';

export const Header = () => {
    return (
        <header className="bg-blue-300">
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b lg:border-none">
                    <div className="flex items-center font-bold">
                       <h1>A.I Admin Portal</h1>
                    </div>
                </div>
            </nav>
        </header>
    )
}