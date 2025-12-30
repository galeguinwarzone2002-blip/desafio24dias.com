
import React from 'react';

export const Comparison: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-gold mb-6">¿Por qué elegir el Desafío 24 Días?</h2>
        <p className="text-gray-600 mb-12 text-lg">A diferencia de otros métodos complicados, nosotros nos enfocamos en lo que realmente funciona.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100 text-left">
            <h3 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-2">
              <span>Antes</span> ❌
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-red-900">
                <span className="text-red-400">•</span> Confusión sobre qué paso dar
              </li>
              <li className="flex items-center gap-2 text-red-900">
                <span className="text-red-400">•</span> Sentimiento de estancamiento
              </li>
              <li className="flex items-center gap-2 text-red-900">
                <span className="text-red-400">•</span> Procrastinación constante
              </li>
              <li className="flex items-center gap-2 text-red-900">
                <span className="text-red-400">•</span> Resultados temporales
              </li>
            </ul>
          </div>
          
          {/* After */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-left">
            <h3 className="text-green-700 font-bold text-xl mb-6 flex items-center gap-2">
              <span>Después</span> ✅
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-green-900">
                <span className="text-green-400">•</span> Claridad absoluta día tras día
              </li>
              <li className="flex items-center gap-2 text-green-900">
                <span className="text-green-400">•</span> Progreso visible y real
              </li>
              <li className="flex items-center gap-2 text-green-900">
                <span className="text-green-400">•</span> Hábitos positivos consolidados
              </li>
              <li className="flex items-center gap-2 text-green-900">
                <span className="text-green-400">•</span> Confianza renovada en ti mismo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
