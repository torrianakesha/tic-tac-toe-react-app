import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <header className="w-full py-4 bg-blue-600 text-white text-center">
                <h1 className="text-2xl font-bold">Tic Tac Toe</h1>
            </header>
            <main className="flex-grow w-full max-w-md p-4">
                {children}
            </main>
            <footer className="w-full py-4 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Tic Tac Toe. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;