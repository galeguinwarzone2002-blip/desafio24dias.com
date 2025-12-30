
import React from 'react';

const benefitList = [
  {
    title: "Guía Digital Paso a Paso",
    description: "Un manual estructurado que te dice exactamente qué hacer cada día. Sin adivinanzas."
  },
  {
    title: "Plan de Acción Diario",
    description: "Tareas pequeñas y manejables diseñadas para generar un impacto acumulativo masivo."
  },
  {
    title: "Acceso Inmediato y de por Vida",
    description: "Compra una vez y accede para siempre desde cualquier dispositivo, en cualquier lugar."
  },
  {
    title: "Metodología de Transformación",
    description: "Enfoque en cambios de hábitos reales que perduran mucho después de los 24 días."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-gold text-center mb-12">
          ¿Qué recibirás al unirte hoy?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefitList.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="mt-1 bg-amber-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
