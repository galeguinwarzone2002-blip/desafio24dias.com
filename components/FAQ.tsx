
import React, { useState } from 'react';

const faqs = [
  {
    q: "¿Para quién es el Desafío?",
    a: "Para cualquier persona que sienta que necesita un impulso, una guía clara o que simplemente quiera mejorar sus resultados actuales con un plan práctico."
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Los cambios internos comienzan el día 1. Los resultados externos suelen ser visibles para la segunda semana si sigues el plan."
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "Para nada. El método está diseñado para ser seguido por principiantes absolutos o personas con experiencia previa."
  },
  {
    q: "¿Cómo recibo el acceso?",
    a: "Inmediatamente después del pago, recibirás un correo electrónico con todos los enlaces de acceso al material digital."
  },
  {
    q: "¿Es un pago único?",
    a: "Sí. No hay suscripciones, ni cargos ocultos. Pagas $9.90 una vez y tienes acceso para siempre."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold font-gold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-200 pb-6">
              <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-lg hover:text-amber-600 transition-colors">
                {faq.q}
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
