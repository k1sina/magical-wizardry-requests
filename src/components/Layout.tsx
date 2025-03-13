
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-wizard-gold/20 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-center">
            <span className="text-wizard-gold">Arcane</span> Assistance
          </h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-wizard-gold/20 py-4 text-center text-sm text-wizard-gold/50">
        <div className="container mx-auto px-4">
          <p>Mystical Services © {new Date().getFullYear()} | For entertainment purposes only</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
