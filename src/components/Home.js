import React from 'react';
import Calendar from './Calendar';
import ejercitaciones from './EjercitacionesData';
import Ejercitacion from './Ejercitacion';
import Actividad from './Actividad';
import actividades from './ActividadData'; // Importar el componente Ejercitacion
import '../App.css';

function Home() {
  const ultimaEjercitacion = ejercitaciones[ejercitaciones.length - 1];
  const ultimaActividad = actividades[actividades.length - 1]; // Obtener la última actividades

  return (
    <div className="home">
      <h2>Bienvenid@!</h2>
      <div className="activities">
        <h3>Actividades de esta semana</h3>
        {ultimaEjercitacion && (
          <Ejercitacion 
            titulo={ultimaEjercitacion.titulo}
            consigna={ultimaEjercitacion.consigna}
            videos={ultimaEjercitacion.videos}
            pdfs={ultimaEjercitacion.pdfs}
            powerpoints={ultimaEjercitacion.powerpoints}
          />
        )}
        {ultimaActividad && (
          <Actividad 
            titulo={ultimaActividad.titulo}
            consigna={ultimaActividad.consigna}
            videos={ultimaActividad.videos}
            pdfs={ultimaActividad.pdfs}
            powerpoints={ultimaActividad.powerpoints}
          />
          )}

        <button
          className="meet-button"
          onClick={() => window.open('https://meet.google.com/mnc-qzxm-fiz', '_blank')}
        >
          Unirse a la clase
        </button>

        <button
          className="wpp-button"
          onClick={() => window.open('https://chat.whatsapp.com/ILfsrssSDkeG8EHrhRVQMr', '_blank')}
        >
          Grupo Wpp Miercoles
        </button>

        <button
          className="wpp-button"
          onClick={() => window.open('https://chat.whatsapp.com/HRu8Q8D4PkHAxfQuYugX36', '_blank')}
        >
          Grupo Wpp Jueves
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
