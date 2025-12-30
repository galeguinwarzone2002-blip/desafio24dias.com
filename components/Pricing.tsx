import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-white py-20 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-gold mb-4">Tu Nueva Vida Comienza Aquí</h2>
        <p className="text-xl text-gray-600 mb-10">Todo lo que necesitas por menos de lo que cuesta un café y un postre.</p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 shadow-2xl relative">
          <p className="text-gray-400 line-through text-2xl mb-2">Precio Normal: US$ 49.00</p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-5xl md:text-7xl font-bold text-gray-900">US$ 9.90</span>
          </div>
          
          <ul className="text-left space-y-4 mb-10 max-w-sm mx-auto">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span> Pago único, sin mensualidades
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span> Acceso inmediato al material
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span> Bono exclusivo incluido
            </li>
          </ul>
          
          <a 
            href="https://pay.hotmart.com/N103583682S?checkoutMode=10" 
            className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-5 px-8 rounded-2xl text-2xl transition-all shadow-lg mb-4 animate-cta"
          >
            SÍ, QUIERO EL DESAFÍO AHORA
          </a>
          
          <p className="text-sm text-red-500 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="animate-pulse">●</span> Oferta limitada por tiempo limitado
          </p>
        </div>
      </div>
    </section>
  );
};