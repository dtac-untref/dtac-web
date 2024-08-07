import ej_1 from "../pdfs/Ejercitacion 01-1.pdf";
import ej_2 from "../pdfs/Ejercitacion 01-2.pdf";
import ej_3 from "../pdfs/Ejercitacion 01-3.pdf";

const ejercitaciones = [
  {
    id: 1,
    titulo: "Ejercitación 1",
    consigna: `
          Estimados,<br><br>
          Esperando que se encuentren bien, comenzaremos compartiendo los Videotutoriales
          que guiarán la cursada, les servirá para entender el sentido que le daremos al manejo
          del programa, es decir, a la metodología de trabajo que proponemos, esta modalidad
          de uso, será considerada a la hora de corregir. En algunas ocasiones, iremos
          compartiendo otros videos que también muestran los temas de cada clase, que están
          subidos a YouTube, y que no han sido generados por nosotros, pero en todos los
          casos no dejen de ver el video específico de la materia para entender cómo
          establecemos las pautas de uso o flujo de trabajo.<br><br>
          Para arrancar les solicitamos que vean este tutorial sobre Introducción y
          familiarización con el programa
          AutoCAD: <a href="https://drive.google.com/file/d/1TasLgPJK9hKXU4yjfFIyKDtDAzpn2cQL/view?usp=sharing" target="_blank">Ver Video</a><br>
          Aquí tienen un video de la Universidad Politécnica de Valencia sobre la apariencia de
          del entorno Dibujo 2D y anotación, en este caso de AutoCAD 2018, en español: 
          <a href="https://youtu.be/sIoyDF_1k-8" target="_blank">Ver Video</a><br>
          En este video se reiteran algunas cuestiones, pero explicamos el modo de activar la
          Barra de Menús desplegables propios del entorno Autocad Clásico dentro del entorno
          Dibujo 2D y anotación e insisto con la manera de desactivar las ayudas de dibujo:
          <a href="https://youtu.be/bQ5_o5XPjR0" target="_blank">Ver Video</a><br>
          Por último, enviamos este Videotutorial sobre Ingreso de datos por coordenadas:
          <a href="https://drive.google.com/file/d/1ddxd_21ZiwuUU458PNpB9zuB5o-WIH-l/view?usp=sharing" target="_blank">Ver Video</a><br><br>
          En la Sección Archivos adjuntamos el archivo Ejercitacion 01.rar, al descomprimirlo
          encontrarán 3 ejercitaciones, para que las ejecuten y puedan practicar la generación
          de vectores por medio del ingreso de datos por coordenadas utilizando, el comando
          línea, el comando borrar, el zoom en tiempo real con la ruedita del mouse y el paneo,
          panorámico o encuadre (Presionando la ruedita del mouse). Para trabajar en esta
          instancia donde nos encontramos, es fundamental que recuerden desactivar todas las
          ayudas de dibujo ubicadas en la barra de estado, debajo de la línea de comandos.
          ESPECIALMENTE LES SOLICITAMOS QUE DESACTIVEN ENTRADA DINAMICA (F12).<br><br>
          Los archivos adjuntos se componen por tres figuras, la primera (Ejercitacion 01- 1.pdf) es la que se explica en el video, las otras dos (Ejercitacion 01- 2.pdf y Ejercitacion 01-
3.pdf) son de similares características, la última se puede comenzar a dibujar en
cualquier parte de nuestro espacio de trabajo, pues no tiene especificado una coordenada absoluta de arranque. NO se debe acotar, las cotas y la anotación de los
distintos puntos son solo para poder ejecutar las figuras. Por cada actividad deben
abrir un archivo o plantilla nueva de dibujo. Para esta primera práctica es obligatorio la
entrega de las 3 ejercitaciones.
En este video reitero el tema de las plantillas o template (drawing1.dwg o
dibujo1.dwg), además de insistir sobre el posicionamiento, con el comando zoom y
encuadre que nos permite estar ubicados dentro del espacio de
trabajo: <a href="https://youtu.be/GVo94OtE2_s" target="_blank">Ver Video</a><br><br>
Repetimos que la realización de las ejercitaciones es requisito para la aprobación de
la cursada, y deben ser entregadas en tiempo y forma a la casilla:
dtacun3f@gmail.com. Recuerden que las actividades son individuales y que existe la
manera de corroborar la computadora donde han sido generados los archivos.
No olviden salvar los archivos para versión 2013
(<a href="https://drive.google.com/file/d/19tifCLbG-fIVA6BMZsos1IZmk-ayZiv6/view?
usp=sharing" target="_blank">Ver Video</a>) y denominarlos adecuadamente:
Ejercitacion 01-1 Apellido.dwg.
Ejercitacion 01-2 Apellido.dwg.
Ejercitacion 01-3 Apellido.dwg. <br><br>
La fecha límite de entrega queda pautada para luego del próximo encuentro, para plantear las dudas y luego de
la clase enviar los archivos, por si deben corregir algo. Así no atestamos la casilla de correo con dos versiones de la misma actividad, porque eso puede generar confusión.
Consideramos que es altamente beneficioso que participen y se expresen en el foro o en el grupo de WhatsApp, formulando sus impresiones, dificultades o alternativas encontradas para poder llevar adelante las ejercitaciones, es interesante que puedan
formar contactos y vínculos entre ustedes para ayudarse y no sentirse solos frente a
la máquina mientras estudian. Creemos que interviniendo en este espacio,
manifestando las consultas o las dudas para que los propios compañeros puedan
ayudarnos, es un excelente hábito de socialización y de formar comunidad para
acompañarnos entre todos, si alguien sabe de un tema o puede compartir cómo lo
hizo, no solo está ayudando a uno o más compañeros, sino que también nos está
dando una mano, ya que esa respuesta o sugerencia entre compañeros tal vez llega
antes de que nosotros podamos verla y dedicarnos a responderla o tal vez aporta otro
punto de vista u otra manera de resolver la situación.<br><br>
Les mandamos saludos y seguimos en contacto.
      `,
    videos: [
      "https://www.youtube.com/embed/sIoyDF_1k-8",
      "https://drive.google.com/file/d/1TasLgPJK9hKXU4yjfFIyKDtDAzpn2cQL/preview",
      "https://drive.google.com/file/d/1ddxd_21ZiwuUU458PNpB9zuB5o-WIH-l/preview",
      "https://drive.google.com/file/d/19tifCLbG-fIVA6BMZsos1IZmk-ayZiv6/view?usp=sharing",
    ],
    pdfs: [ej_1, ej_2, ej_3],
    powerpoints: [],
  },
  //   {
  //     id: 2,
  //     titulo: 'Ejercitación 2',
  //     consigna: `
  //         Estimados,<br><br>
  //         Esperando que se encuentren bien, comenzaremos compartiendo los Videotutoriales
  //         que guiarán la cursada, les servirá para entender el sentido que le daremos al manejo
  //         del programa, es decir, a la metodología de trabajo que proponemos, esta modalidad
  //         de uso, será considerada a la hora de corregir. En algunas ocasiones, iremos
  //         compartiendo otros videos que también muestran los temas de cada clase, que están
  //         subidos a YouTube, y que no han sido generados por nosotros, pero en todos los
  //         casos no dejen de ver el video específico de la materia para entender cómo
  //         establecemos las pautas de uso o flujo de trabajo.<br><br>
  //         Para arrancar les solicitamos que vean este tutorial sobre Introducción y
  //         familiarización con el programa
  //         AutoCAD: <a href="https://drive.google.com/file/d/1TasLgPJK9hKXU4yjfFIyKDtDAzpn2cQL/view?usp=sharing" target="_blank">Ver Video</a><br>
  //         Aquí tienen un video de la Universidad Politécnica de Valencia sobre la apariencia de
  //         del entorno Dibujo 2D y anotación, en este caso de AutoCAD 2018, en español:
  //         <a href="https://youtu.be/sIoyDF_1k-8" target="_blank">Ver Video</a><br>
  //         En este video se reiteran algunas cuestiones, pero explicamos el modo de activar la
  //         Barra de Menús desplegables propios del entorno Autocad Clásico dentro del entorno
  //         Dibujo 2D y anotación e insisto con la manera de desactivar las ayudas de dibujo:
  //         <a href="https://youtu.be/bQ5_o5XPjR0" target="_blank">Ver Video</a><br>
  //         Por último, enviamos este Videotutorial sobre Ingreso de datos por coordenadas:
  //         <a href="https://drive.google.com/file/d/1ddxd_21ZiwuUU458PNpB9zuB5o-WIH-l/view?usp=sharing" target="_blank">Ver Video</a><br><br>
  //         En la Sección Archivos adjuntamos el archivo Ejercitacion 01.rar, al descomprimirlo
  //         encontrarán 3 ejercitaciones, para que las ejecuten y puedan practicar la generación
  //         de vectores por medio del ingreso de datos por coordenadas utilizando, el comando
  //         línea, el comando borrar, el zoom en tiempo real con la ruedita del mouse y el paneo,
  //         panorámico o encuadre (Presionando la ruedita del mouse). Para trabajar en esta
  //         instancia donde nos encontramos, es fundamental que recuerden desactivar todas las
  //         ayudas de dibujo ubicadas en la barra de estado, debajo de la línea de comandos.
  //         ESPECIALMENTE LES SOLICITAMOS QUE DESACTIVEN ENTRADA DINAMICA (F12).<br><br>
  //         Los archivos adjuntos se componen por tres figuras, la primera (Ejercitacion 01- 1.pdf)
  //         es la que se explica en el video, las otras dos (Ejercitacion 01- 2.pdf y Ejercitacion 01-
  //         3.pdf) son de similares características, la última se puede comenzar a dibujar en
  //         cualquier parte de nuestro espacio de trabajo.
  //     `,
  //     videos: [
  //         'https://www.youtube.com/embed/sIoyDF_1k-8',
  //         'https://drive.google.com/file/d/1TasLgPJK9hKXU4yjfFIyKDtDAzpn2cQL/preview'
  //     ],
  //     pdfs: [
  //         'https://drive.google.com/file/d/1ddxd_21ZiwuUU458PNpB9zuB5o-WIH-l/preview',
  //     ],
  //     powerpoints: []
  // },
  // Puedes agregar más ejercitaciones aquí
];

export default ejercitaciones;
