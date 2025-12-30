import React from 'react';

export const Bonus: React.FC = () => {
  return (
    <section className="bg-amber-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border-2 border-dashed border-amber-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 text-sm font-bold rounded-bl-xl z-10">
          GRATIS HOY
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-0">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-800 font-gold">Bono Exclusivo: "Mente de Hierro"</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Recibe nuestra guía complementaria para fortalecer tu disciplina y mantener el enfoque incluso en los días más difíciles. Es el compañero perfecto para asegurar que no te detengas.
            </p>
            <p className="text-xl md:text-2xl font-bold text-amber-600">
              Valor: <span className="line-through text-gray-400 mr-2">US$ 27.00</span> ¡Incluido Gratis!
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              {/* Sombra suave para el mockup del bono */}
              <div className="absolute inset-0 bg-amber-200/50 blur-2xl rounded-full transform translate-y-8 scale-75 group-hover:scale-90 transition-transform duration-500"></div>
              <img 
                src="https://i.imgur.com/94j1WgL.png" 
                alt="Bono Mente de Hierro" 
                className="relative w-48 h-auto drop-shadow-2xl rounded-lg transform transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};