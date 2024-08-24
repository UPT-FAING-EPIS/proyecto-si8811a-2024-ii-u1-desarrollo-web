import React, { useState } from 'react';

const Eventos = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      nombre: "Concurso de Poesía",
      equipos: ["Equipo A", "Equipo B"],
      resultadoId: "101",
      fixtureId: "201",
      actividades: ["Lectura de poemas", "Discusión crítica"]
    },
    {
      id: "2",
      nombre: "Exposición de Pintura",
      equipos: ["Equipo C", "Equipo D"],
      resultadoId: "102",
      fixtureId: "202",
      actividades: ["Presentación de obras", "Visitas guiadas"]
    },
    {
      id: "3",
      nombre: "Festival de Música",
      equipos: ["Equipo E", "Equipo F"],
      resultadoId: "103",
      fixtureId: "203",
      actividades: ["Conciertos en vivo", "Talleres musicales"]
    },
    {
      id: "4",
      nombre: "Competencia de Danza",
      equipos: ["Equipo G", "Equipo H"],
      resultadoId: "104",
      fixtureId: "204",
      actividades: ["Presentaciones de danza", "Clases maestras"]
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Juegos Florales</div>
          <ul className="flex space-x-6">
            <li><a href="#events" className="hover:text-yellow-400 ">Eventos</a></li>
            <li><a href="#about" className="hover:text-yellow-400">Acerca de</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Banner */}
      <header className="bg-gradient-to-r from-purple-800 to-indigo-600 text-white text-center py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">Juegos Florales</h1>
          <p className="text-xl mb-6">Celebrando la creatividad y la excelencia en las artes.</p>
          <a href="#events" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">Ver Eventos</a>
        </div>
      </header>

      {/* Main Content */}
      <main id="events" className="py-16 px-6">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Eventos Destacados</h2>

          {events.length === 0 ? (
            <p className="text-center text-gray-700 text-lg">No hay eventos disponibles en este momento.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
              {events.reduce((acc, event, index) => {
                if (index % 2 === 0) {
                  acc.push([event, events[index + 1]]);
                }
                return acc;
              }, []).map((eventPair, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200">
                  {eventPair.map((event) => (
                    <div key={event.id} className="mb-6">
                      <h3 className="text-2xl font-semibold mb-4 text-purple-800">{event.nombre || 'Nombre del Evento'}</h3>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-purple-600">Equipos:</strong> {event.equipos.length > 0 ? event.equipos.join(', ') : 'N/A'}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-purple-600">Resultado ID:</strong> {event.resultadoId || 'N/A'}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong className="text-purple-600">Fixture ID:</strong> {event.fixtureId || 'N/A'}
                      </p>
                      <p className="text-gray-700">
                        <strong className="text-purple-600">Actividades:</strong> {event.actividades.length > 0 ? event.actividades.join(', ') : 'N/A'}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Juegos Florales. Todos los derechos reservados. | @SistemasUPT</p>
        </div>
      </footer>
    </div>
  );
};

export default Eventos;
