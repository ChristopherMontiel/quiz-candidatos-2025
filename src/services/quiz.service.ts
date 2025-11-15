import { Injectable } from '@angular/core';
import { Candidate, Topic } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private candidates: Candidate[] = [
    { id: 'kast', name: 'José Antonio Kast', party: 'Partido Republicano', color: 'bg-blue-800', imageUrl: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQioBZHIHWfS6cgthBT_D8z79D9Gqcre8a3JHEv85-ihsP2-A6dXhMoYluSYqykZFBGZUqbf9S7VT9C8O0' },
    { id: 'parisi', name: 'Franco Parisi', party: 'Partido de la Gente', color: 'bg-yellow-500', imageUrl: 'https://pbs.twimg.com/profile_images/859590998325948416/6HAih9Vj_400x400.jpg' },
    { id: 'kaiser', name: 'Johannes Kaiser', party: 'Partido Nacional Libertario', color: 'bg-black', imageUrl: 'https://www.bcn.cl/historiapolitica/getimagenbiografia/Johannes_Kaiser_Barents-von_Hohenhagen.jpg' },
    { id: 'jara', name: 'Jeannette Jara', party: 'Unidad por Chile', color: 'bg-red-600', imageUrl: 'https://imagenes.elpais.com/resizer/v2/Y44IXC2UKVBVXK2D4NK72IOINU.jpg?auth=fa1cd5122f0a1bfdffc0b9f086146adda4e7bfc7a4b9d685bc2781bc94ced40c&width=1960&height=1470&focal=2810%2C1440' },
  ];

  private quizData: Topic[] = [
    {
      id: 'seguridad',
      title: 'Seguridad y Orden Público',
      icon: 'shield-check',
      questions: [
        {
          id: 's1',
          text: 'Se debe implementar un plan de "Mano Dura" y guerra frontal contra el narcotráfico, incluyendo la construcción de cárceles de máxima seguridad.',
          associatedCandidateId: 'kast',
          stances: [
            { candidateId: 'kast', score: 5 },
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'parisi', score: 4 },
            { candidateId: 'jara', score: 2 },
          ],
        },
        {
          id: 's2',
          text: 'La frontera con Bolivia debe cerrarse completamente para detener la inmigración ilegal y el crimen organizado.',
          associatedCandidateId: 'kaiser',
          stances: [
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'kast', score: 4 },
            { candidateId: 'parisi', score: 4 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 's3',
          text: 'La estrategia principal contra el crimen debe ser la inteligencia financiera para "seguir la ruta del dinero", en lugar de solo el control-sanción.',
          associatedCandidateId: 'jara',
          stances: [
            { candidateId: 'jara', score: 5 },
            { candidateId: 'parisi', score: 3 },
            { candidateId: 'kast', score: 2 },
            { candidateId: 'kaiser', score: 1 },
          ],
        },
        {
          id: 's4',
          text: 'Se deberían crear "barcos-cárceles" para albergar a delincuentes, como medida de shock para enfrentar la crisis carcelaria.',
          associatedCandidateId: 'parisi',
          stances: [
            { candidateId: 'parisi', score: 5 },
            { candidateId: 'kast', score: 2 },
            { candidateId: 'kaiser', score: 2 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 's5',
          text: 'Para frenar la inmigración ilegal y el narcotráfico, se debería minar la frontera norte de Chile.',
          associatedCandidateId: 'parisi',
          stances: [
            { candidateId: 'parisi', score: 5 },
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'kast', score: 4 },
            { candidateId: 'jara', score: 1 },
          ],
        },
      ],
    },
    {
      id: 'economia',
      title: 'Economía y Reformas Tributarias',
      icon: 'banknotes',
      questions: [
        {
          id: 'e1',
          text: 'El Estado debe reducirse radicalmente, eliminando múltiples ministerios y bajando el impuesto a las empresas del 27% al 15%.',
          associatedCandidateId: 'kaiser',
          stances: [
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'kast', score: 4 },
            { candidateId: 'parisi', score: 3 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 'e2',
          text: 'El foco económico debe ser el recorte del gasto "político" y la entrega de alivios tributarios a las PYMEs.',
          associatedCandidateId: 'kast',
          stances: [
            { candidateId: 'kast', score: 5 },
            { candidateId: 'kaiser', score: 4 },
            { candidateId: 'parisi', score: 3 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 'e3',
          text: 'Se debe defender y fortalecer la reforma de pensiones que crea un sistema mixto, asegurando el gasto social incluso si requiere una futura reforma tributaria.',
          associatedCandidateId: 'jara',
          stances: [
            { candidateId: 'jara', score: 5 },
            { candidateId: 'parisi', score: 2 },
            { candidateId: 'kast', score: 1 },
            { candidateId: 'kaiser', score: 1 },
          ],
        },
        {
          id: 'e4',
          text: 'El IVA a los medicamentos debe ser eliminado como medida principal de alivio económico para las familias.',
          associatedCandidateId: 'parisi',
          stances: [
            { candidateId: 'parisi', score: 5 },
            { candidateId: 'jara', score: 4 },
            { candidateId: 'kast', score: 2 },
            { candidateId: 'kaiser', score: 1 },
          ],
        },
        {
          id: 'e5',
          text: 'Se debe impulsar un \'Proyecto Topo\' de delación compensada, que premie económicamente a quienes denuncien grandes actos de corrupción.',
          associatedCandidateId: 'parisi',
          stances: [
            { candidateId: 'parisi', score: 5 },
            { candidateId: 'kast', score: 4 },
            { candidateId: 'kaiser', score: 4 },
            { candidateId: 'jara', score: 3 },
          ],
        },
        {
          id: 'e6',
          text: 'Se debería crear una "Zona Franca Bancaria" para atraer capitales extranjeros con exenciones de impuestos, convirtiendo a Chile en un centro financiero internacional.',
          associatedCandidateId: 'parisi',
          stances: [
            { candidateId: 'parisi', score: 5 },
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'kast', score: 3 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 'e7',
          text: 'Para aliviar el costo de la vida, se debe eliminar o devolver el IVA de los productos de la canasta básica familiar.',
          associatedCandidateId: 'parisi',
          stances: [
            { candidateId: 'parisi', score: 5 },
            { candidateId: 'jara', score: 4 },
            { candidateId: 'kast', score: 2 },
            { candidateId: 'kaiser', score: 3 },
          ],
        },
      ],
    },
    {
        id: 'salud',
        title: 'Salud',
        icon: 'heart',
        questions: [
            {
                id: 'h1',
                text: 'Las listas de espera en salud deben ser eliminadas derivando masivamente a los pacientes al sector privado, financiado con fondos públicos.',
                associatedCandidateId: 'kast',
                stances: [
                    { candidateId: 'kast', score: 5 },
                    { candidateId: 'kaiser', score: 4 },
                    { candidateId: 'parisi', score: 3 },
                    { candidateId: 'jara', score: 1 },
                ]
            },
            {
                id: 'h2',
                text: 'Se debe implementar un sistema de "vouchers" de salud para que cada paciente elija libremente dónde atenderse, unificando los sistemas público y privado.',
                associatedCandidateId: 'kaiser',
                stances: [
                    { candidateId: 'kaiser', score: 5 },
                    { candidateId: 'kast', score: 3 },
                    { candidateId: 'parisi', score: 3 },
                    { candidateId: 'jara', score: 1 },
                ]
            },
            {
                id: 'h3',
                text: 'La solución a la crisis de salud es fortalecer el sistema público, estableciendo plazos máximos de espera por ley y expandiendo la Atención Primaria de Salud (APS).',
                associatedCandidateId: 'jara',
                stances: [
                    { candidateId: 'jara', score: 5 },
                    { candidateId: 'parisi', score: 2 },
                    { candidateId: 'kast', score: 1 },
                    { candidateId: 'kaiser', score: 1 },
                ]
            },
            {
                id: 'h4',
                text: 'La digitalización y las "Consultas Médicas Grupales" son las herramientas más eficientes y de bajo costo para mejorar la gestión en salud.',
                associatedCandidateId: 'parisi',
                stances: [
                    { candidateId: 'parisi', score: 5 },
                    { candidateId: 'jara', score: 3 },
                    { candidateId: 'kast', score: 3 },
                    { candidateId: 'kaiser', score: 2 },
                ]
            }
        ]
    },
    {
      id: 'derechos_mujer',
      title: 'Derechos de la Mujer y Aborto',
      icon: 'hand-raised',
      questions: [
        {
          id: 'w1',
          text: 'La ley de aborto en 3 causales (riesgo de vida para la madre, inviabilidad fetal y violación) debe ser derogada para proteger la vida desde la concepción.',
          associatedCandidateId: 'kast',
          stances: [
            { candidateId: 'kast', score: 5 },
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'parisi', score: 2 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 'w2',
          text: 'El derecho al aborto debe ser ampliado más allá de las 3 causales, avanzando hacia un sistema de plazos donde la mujer pueda decidir libremente sobre su cuerpo.',
          associatedCandidateId: 'jara',
          stances: [
            { candidateId: 'jara', score: 5 },
            { candidateId: 'parisi', score: 2 },
            { candidateId: 'kast', score: 1 },
            { candidateId: 'kaiser', score: 1 },
          ],
        },
        {
          id: 'w3',
          text: 'Las instituciones de salud privadas que reciben fondos públicos no deberían tener permitido invocar la \'objeción de conciencia\' para negarse a realizar abortos bajo las 3 causales.',
          associatedCandidateId: 'jara',
          stances: [
            { candidateId: 'jara', score: 5 },
            { candidateId: 'parisi', score: 2 },
            { candidateId: 'kast', score: 1 },
            { candidateId: 'kaiser', score: 1 },
          ],
        },
      ],
    },
    {
      id: 'diplomacia',
      title: 'Diplomacia y Relaciones Exteriores',
      icon: 'globe-alt',
      questions: [
        {
          id: 'd1',
          text: 'Chile debe retirarse de tratados internacionales como el Acuerdo de París y la Corte Interamericana de DD.HH. para priorizar la soberanía nacional.',
          associatedCandidateId: 'kaiser',
          stances: [
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'kast', score: 2 },
            { candidateId: 'parisi', score: 3 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 'd2',
          text: 'La política exterior chilena debe alinearse con la red global de derecha conservadora, fortaleciendo lazos con líderes como Giorgia Meloni o un eventual gobierno de Trump.',
          associatedCandidateId: 'kast',
          stances: [
            { candidateId: 'kast', score: 5 },
            { candidateId: 'kaiser', score: 3 },
            { candidateId: 'parisi', score: 2 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 'd3',
          text: 'Chile debe mantener una política de "no alineamiento activo", buscando un equilibrio pragmático en sus relaciones tanto con EE.UU. como con China.',
          associatedCandidateId: 'jara',
          stances: [
            { candidateId: 'jara', score: 5 },
            { candidateId: 'parisi', score: 4 },
            { candidateId: 'kast', score: 2 },
            { candidateId: 'kaiser', score: 1 },
          ],
        },
      ],
    },
    {
      id: 'valorico',
      title: 'Derechos y Temas Valóricos',
      icon: 'scale',
      questions: [
        {
          id: 'v1',
          text: 'La ley debe proteger la vida desde la concepción, por lo que se debe mantener o aumentar la restricción al aborto.',
          associatedCandidateId: 'kast',
          stances: [
            { candidateId: 'kast', score: 5 },
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'parisi', score: 3 }, // Pragmatic shift towards this
            { candidateId: 'jara', score: 1 }, // Supports decriminalization but not "free abortion" in program
          ],
        },
        {
          id: 'v2',
          text: 'Bajo ciertas circunstancias de crisis institucional, un nuevo golpe militar podría ser justificable.',
          associatedCandidateId: 'kaiser',
          stances: [
            { candidateId: 'kaiser', score: 5 },
            { candidateId: 'kast', score: 2 }, // Avoids topic but has historical links
            { candidateId: 'parisi', score: 1 },
            { candidateId: 'jara', score: 1 },
          ],
        },
        {
          id: 'v3',
          text: 'Para asegurar la gobernabilidad y mantener unida una coalición amplia, es aceptable sacrificar o postergar la agenda de derechos de minorías (ej. aborto libre, derechos trans).',
          associatedCandidateId: 'jara',
          stances: [
            { candidateId: 'jara', score: 4 }, // Pragmatic sacrifice
            { candidateId: 'parisi', score: 4 }, // Pragmatic shifts
            { candidateId: 'kast', score: 2 }, // Does it for different reasons
            { candidateId: 'kaiser', score: 1 }, // No compromise
          ],
        },
        {
            id: 'v4',
            text: 'La violencia en la Macrozona Sur debe ser calificada y tratada como "terrorismo", aplicando medidas de excepción y un combate frontal.',
            associatedCandidateId: 'kast',
            stances: [
              { candidateId: 'kast', score: 5 },
              { candidateId: 'kaiser', score: 5 },
              { candidateId: 'parisi', score: 5 },
              { candidateId: 'jara', score: 1 }, // Defers to courts
            ],
        },
      ],
    },
  ];

  getQuizData(): Topic[] {
    return this.quizData;
  }

  getCandidates(): Candidate[] {
    return this.candidates;
  }
}