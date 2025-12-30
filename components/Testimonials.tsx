
import React from 'react';

const reviews = [
  {
    name: "Mariana R.",
    text: "He intentado cientos de cursos y retos, pero este fue el único que terminé. Las tareas diarias son tan simples que no hay excusa para no hacerlas. ¡Resultados increíbles!"
  },
  {
    name: "José L.",
    text: "Lo que más me gustó fue la claridad. No hay relleno, solo lo que funciona. En 24 días me siento como una persona nueva."
  },
  {
    name: "Sofía V.",
    text: "Por $9.90 no esperaba mucho, pero la calidad es superior a cursos de $100. La mejor inversión que he hecho este año."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold font-gold text-center mb-16 uppercase tracking-widest">Lo que dicen nuestros alumnos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm italic text-gray-700 relative">
              <div className="text-amber-300 text-5xl absolute -top-4 -left-2 opacity-50">“</div>
              <p className="mb-6 relative z-10">{review.text}</p>
              <p className="font-bold text-gray-900 not-italic">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
