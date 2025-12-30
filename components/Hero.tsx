import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-gold mb-6 leading-tight">
          Transforma Tu Vida por Completo en Solo 24 Días
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-12 max-w-2xl mx-auto">
          El método paso a paso que elimina la confusión y te garantiza resultados reales, sin complicaciones.
        </h2>

        {/* Imagem do Produto centralizada na página */}
        <div className="mb-8 flex justify-center items-center w-full">
          <div className="relative group max-w-[450px] w-full mx-auto">
            {/* Sombra suave para dar profundidade ao mockup */}
            <div className="absolute inset-0 bg-black/10 blur-2xl rounded-full transform translate-y-12 scale-90"></div>
            <img 
              src="https://i.imgur.com/Uw00bYj.png" 
              alt="Capa Desafío 24 Días" 
              className="relative w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] transform transition-transform duration-700 group-hover:scale-[1.02] mx-auto block"
            />
          </div>
        </div>

        {/* Frase movida para baixo da capa, conforme solicitado */}
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          ¿Cansado de empezar algo y nunca terminar? La mayoría de las personas fallan porque no tienen un plan claro. El Desafío 24 Días es el puente entre donde estás hoy y la versión de ti que siempre has deseado.
        </p>

        <a 
          href="https://pay.hotmart.com/N103583682S?checkoutMode=10"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-5 px-12 rounded-full text-2xl transition-all transform hover:scale-105 shadow-2xl active:scale-95 animate-cta"
        >
          Empezar el Desafío Ahora
        </a>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};