import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import ejercitaciones from './EjercitacionesData'; // Suponiendo que este archivo tiene las 10 ejercitaciones
import Ejercitacion from './Ejercitacion';
import Actividad from './Actividad';
import actividades from './ActividadData'; // Importar el componente Ejercitacion
import '../App.css';

function Home() {
  const [ejercitacionActual, setEjercitacionActual] = useState(null);

  useEffect(() => {
    const calcularEjercitacion = () => {
      const now = new Date();
      // const startDate = new Date('2024-08-07T00:00:00-03:00'); // 07/08/2024
      const baseDate = new Date('2025-08-27T18:00:00-03:00'); // 15/08/2024 a las 18:00 hs GMT-3

      if (now < baseDate) {
        // Si es antes del 15/08/2024 a las 18:00, mostrar Ejercitación 1
        setEjercitacionActual(ejercitaciones[0]);
      } else {
        // Calcular cuántas semanas han pasado desde el 15/08/2024 a las 18:00
        const weeksPassed = Math.floor((now - baseDate) / (7 * 24 * 60 * 60 * 1000));
        const ejercitacionIndex = Math.min(weeksPassed + 1, ejercitaciones.length - 1); // Asegurarse de no superar el índice de las ejercitaciones

        setEjercitacionActual(ejercitaciones[ejercitacionIndex]);
      }
    };

    calcularEjercitacion(); // Inicializa la ejercitación al cargar el componente

    const intervalId = setInterval(calcularEjercitacion, 60000); // Verifica la hora cada minuto

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  const ultimaActividad = actividades[actividades.length - 1]; // Obtener la última actividades

  return (
    <div className="home">
      <h2>Bienvenid@!</h2>
      <div className="activities">
        <h3>Actividades de esta semana</h3>
        {ejercitacionActual && (
          <Ejercitacion 
            titulo={ejercitacionActual.titulo}
            consigna={ejercitacionActual.consigna}
            videos={ejercitacionActual.videos}
            pdfs={ejercitacionActual.pdfs}
            powerpoints={ejercitacionActual.powerpoints}
          />
         // )}
         //{ultimaActividad && (
         //  <Actividad 
         //    titulo={ultimaActividad.titulo}
         //    consigna={ultimaActividad.consigna}
         //    videos={ultimaActividad.videos}
         //    pdfs={ultimaActividad.pdfs}
         //    powerpoints={ultimaActividad.powerpoints}
         //  />
        )}

        <button
          className="meet-button"
          onClick={() => window.open('https://meet.google.com/ttg-gpgj-aro', '_blank')}
        >
          Unirse a la clase (Miércoles)
        </button>

        <button
          className="meet-button"
          onClick={() => window.open('https://meet.google.com/shf-rqko-sis', '_blank')}
        >
          Unirse a la clase (Jueves)
        </button>

        <br></br>

        <button
          className="wpp-button"
          onClick={() => window.open('https://chat.whatsapp.com/GsWZFuF7sLiKgb5rdx9fyh?mode=ac_t', '_blank')}
        >
          Grupo Wpp
        </button>

      </div>
      <div className="calendar-section">
        <h3>Calendario</h3>
        <Calendar />
      </div>
    </div>
  );
}

export default Home;


// import React from 'react';
// import Calendar from './Calendar';
// import ejercitaciones from './EjercitacionesData';
// import Ejercitacion from './Ejercitacion';
// import Actividad from './Actividad';
// import actividades from './ActividadData'; // Importar el componente Ejercitacion
// import '../App.css';

// function Home() {
//   const ultimaEjercitacion = ejercitaciones[ejercitaciones.length - 1];
//   const ultimaActividad = actividades[actividades.length - 1]; // Obtener la última actividades

//   return (
//     <div className="home">
//       <h2>Bienvenid@!</h2>
//       <div className="activities">
//         <h3>Actividades de esta semana</h3>
//         {ultimaEjercitacion && (
//           <Ejercitacion 
//             titulo={ultimaEjercitacion.titulo}
//             consigna={ultimaEjercitacion.consigna}
//             videos={ultimaEjercitacion.videos}
//             pdfs={ultimaEjercitacion.pdfs}
//             powerpoints={ultimaEjercitacion.powerpoints}
//           />
//         )}
//         {ultimaActividad && (
//           <Actividad 
//             titulo={ultimaActividad.titulo}
//             consigna={ultimaActividad.consigna}
//             videos={ultimaActividad.videos}
//             pdfs={ultimaActividad.pdfs}
//             powerpoints={ultimaActividad.powerpoints}
//           />
//           )}

//         <button
//           className="meet-button"
//           onClick={() => window.open('https://meet.google.com/ttg-gpgj-aro', '_blank')}
//         >
//           Unirse a la clase (Miércoles)
//         </button>

//         <button
//           className="meet-button"
//           onClick={() => window.open('https://meet.google.com/shf-rqko-sis', '_blank')}
//         >
//           Unirse a la clase (Jueves)
//         </button>

//         <br></br>

//         <button
//           className="wpp-button"
//           onClick={() => window.open('https://chat.whatsapp.com/ILfsrssSDkeG8EHrhRVQMr', '_blank')}
//         >
//           Grupo Wpp Miercoles
//         </button>

//         <button
//           className="wpp-button"
//           onClick={() => window.open('https://chat.whatsapp.com/HRu8Q8D4PkHAxfQuYugX36', '_blank')}
//         >
//           Grupo Wpp Jueves
//         </button>

//       </div>
//       <div className="calendar-section">
//         <h3>Calendario</h3>
//         <Calendar />
//       </div>
//     </div>
//   );
// }

// export default Home;
