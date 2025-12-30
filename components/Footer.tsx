
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xl font-bold font-gold mb-6">DESAFÍO 24 DÍAS</p>
        <div className="text-sm text-gray-500 space-y-4">
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="max-w-2xl mx-auto">
            Aviso Legal: Los resultados pueden variar de persona a persona. Este producto no garantiza resultados mágicos, sino una guía estructurada para el trabajo y esfuerzo personal.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="hover:text-amber-600 transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
