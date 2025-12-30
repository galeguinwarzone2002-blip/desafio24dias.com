
import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-6">Garantía Incondicional de 7 Días</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Prueba el desafío completo. Si por alguna razón sientes que no es para ti, simplemente envíanos un correo y te devolveremos el 100% de tu dinero. Sin preguntas, sin resentimientos.
        </p>
        <p className="text-amber-500 font-bold text-2xl">No tienes absolutamente nada que perder.</p>
      </div>
    </section>
  );
};
