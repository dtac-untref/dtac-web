import ej_1 from "../pdfs/Ejercitacion 01-1.pdf";
import ej_2 from "../pdfs/Ejercitacion 01-2.pdf";
import ej_3 from "../pdfs/Ejercitacion 01-3.pdf";
import ej2_1 from "../pdfs/Ejercitacion 02-en clase.pdf";
import ej2_2 from "../pdfs/Ejercitacion 02-flor.pdf";
import ej3_1 from "../pdfs/Ejercitacion 03-en clase.pdf";
import ej3_2 from "../pdfs/Ejercitacion 03-en clase-Consigna.pdf";
import ej3_3 from "../pdfs/Ejercitacion 03 Flor.pdf";
import ej3_4 from "../pdfs/Ejercitacion 03 Flor-Desarrollo.pdf";
import ej3_5 from "../pdfs/Ejercitacion 03 Flor-Consigna.pdf";
import ej3_6 from "../pdfs/Ejercitacion 03-Cubo-Consigna.pdf";
import ej3_7 from "../pdfs/Ejercitacion 03-Cubo.pdf";
import ej3_8 from "../pdfs/Ejercitacion 03-Cubo-Desarrollo.pdf";

// const archivoRAR = `${process.env.PUBLIC_URL}/public/rar/Ejercitacion-01.rar`;


const ejercitaciones = [
  {
    id: 1,
    titulo: "Ejercitación 1",
    consigna: `
          Estimados,<br><br>
          Comenzaremos compartiendo los Videos de la cursada, que determinan el sentido que le daremos al manejo del programa, es decir, a la metodolog&iacute;a de trabajo que proponemos, esta modalidad de uso ser&aacute; considerada a la hora de corregir. En algunas ocasiones, iremos compartiendo otros videos que tambi&eacute;n muestran los temas de cada clase, que est&aacute;n subidos a YouTube, y que no han sido generados por nosotros, pero en todos los casos no dejen de ver el video espec&iacute;fico de la materia para entender c&oacute;mo establecemos las pautas de uso o flujo de trabajo.&nbsp;<br><br>
          Para arrancar les solicitamos que vean este tutorial sobre Introducci&oacute;n y familiarizaci&oacute;n con el programa AutoCAD: <a href="https://drive.google.com/file/d/1TasLgPJK9hKXU4yjfFIyKDtDAzpn2cQL/view?usp=sharing" target="_blank">Ver Video</a><br>
          <br>
          Aqu&iacute; tienen un video de la Universidad Polit&eacute;cnica de Valencia sobre la apariencia de del entorno<strong>&nbsp;Dibujo 2D y anotaci&oacute;n</strong>, en este caso de AutoCAD 2018, en espa&ntilde;ol:&nbsp; 
          <a href="https://youtu.be/sIoyDF_1k-8" target="_blank">Ver Video</a>
          <br><br>
          En este video se reiteran algunas cuestiones, pero explicamos el modo de activar la Barra de Men&uacute;s desplegables propios del entorno Autocad Cl&aacute;sico dentro del entorno Dibujo 2D y anotaci&oacute;n e insisto con la manera de desactivar las ayudas de dibujo:
          <a href="https://youtu.be/bQ5_o5XPjR0" target="_blank">Ver Video</a>
          <br><br>
          Por &uacute;ltimo, enviamos este&nbsp;Videotutorial sobre Ingreso de datos por coordenadas:
          <a href="https://drive.google.com/file/d/1ddxd_21ZiwuUU458PNpB9zuB5o-WIH-l/view?usp=sharing" target="_blank">Ver Video</a><br><br>
          Adjuntamos los 3 archivos de las ejercitaciones, para que las ejecuten y puedan practicar la generaci&oacute;n de vectores por medio del ingreso de datos por coordenadas utilizando, el comando l&iacute;nea, el comando borrar, el zoom en tiempo real con la ruedita del mouse y el paneo, panor&aacute;mico o encuadre (presionando la ruedita del mouse). Para trabajar en esta instancia donde nos encontramos, es fundamental que recuerden <strong>desactivar todas las ayudas de dibujo ubicadas en la barra de estado</strong>, debajo de la l&iacute;nea de comandos. ESPECIALMENTE LES SOLICITAMOS QUE DESACTIVEN <strong>ENTRADA DINAMICA</strong> (F12). Los archivos adjuntos se componen por tres figuras, la primera (<strong><em>Ejercitacion 01- 1.pdf</em></strong>) es la que se explica en el video, las otras dos (<strong><em>Ejercitacion 01- 2.pdf&nbsp;</em></strong>y <strong><em>Ejercitacion 01- 3.pdf</em></strong>) son de similares caracter&iacute;sticas, la &uacute;ltima se puede comenzar a dibujar en cualquier parte de nuestro espacio de trabajo, pues no tiene especificado una coordenada absoluta de arranque. NO se debe acotar, las cotas y la anotaci&oacute;n de los distintos puntos son solo para poder ejecutar las figuras. Por cada actividad deben abrir un archivo o plantilla nueva de dibujo. Para esta primera pr&aacute;ctica es obligatorio la entrega de las 3 ejercitaciones.
          <br><br>
          En este video reitero el tema de las <em>plantillas</em> o <em>template</em> (drawing1.dwg o dibujo1.dwg), adem&aacute;s de insistir sobre el posicionamiento, con el comando zoom y encuadre que nos permite estar ubicados dentro del espacio de trabajo: <a href="https://youtu.be/GVo94OtE2_s" target="_blank">Ver Video</a>
          <br><br>
          <strong>Repetimos que&nbsp;la realizaci&oacute;n de las ejercitaciones es requisito para la aprobaci&oacute;n de la cursada, y deben ser entregadas en tiempo y forma a la casilla:</strong> <strong>dtacun3f@gmail.com</strong><strong>. Recuerden que las actividades son individuales y que existe la manera de corroborar la computadora donde han sido generados los archivos.</strong>
          <br><br>          
          No olviden salvar los archivos para versi&oacute;n 2013
          (<a href="https://drive.google.com/file/d/19tifCLbG-fIVA6BMZsos1IZmk-ayZiv6/view?
          usp=sharing" target="_blank">Ver Video</a>) y denominarlos adecuadamente:
          <br><br>
          <strong><em>Ejercitacion 01-1Apellido.dwg</em></strong>
          <br><br>
          <strong><em>Ejercitacion 01-2 Apellido.dwg</em></strong>
          <br><br>
          <strong><em>Ejercitacion 01-3 Apellido.dwg</em></strong>
          <br><br>
          La fecha l&iacute;mite de entrega queda pautada para luego del pr&oacute;ximo encuentro, considerando el plazo m&aacute;ximo para el <strong>Jueves 15/8 (comision Miercoles)</strong> y <strong>Viernes 16/8 (comisi&oacute;n Jueves)</strong>, para exponer el trabajo, plantear las dudas y luego de la clase enviar los archivos, por si deben corregir algo. As&iacute; no atestamos la casilla de correo con dos versiones de la misma actividad, porque eso puede generar confusi&oacute;n.&nbsp;<br><br>          
          Consideramos que es altamente beneficioso que participen y se expresen en el foro o en el grupo de WhatsApp, formulando sus impresiones, dificultades o alternativas encontradas para poder llevar adelante las ejercitaciones, es interesante que puedan formar contactos y v&iacute;nculos entre ustedes para ayudarse y no sentirse solos frente a la m&aacute;quina mientras estudian. Creemos que interviniendo en este espacio, manifestando las consultas o las dudas para que los propios compa&ntilde;eros puedan ayudarnos, es un excelente h&aacute;bito de socializaci&oacute;n y de formar comunidad para acompa&ntilde;arnos entre todos, si alguien sabe de un tema o puede compartir c&oacute;mo lo hizo, no solo est&aacute; ayudando a uno o m&aacute;s compa&ntilde;eros, sino que tambi&eacute;n nos est&aacute; dando una mano, ya que esa respuesta o sugerencia entre compa&ntilde;eros tal vez llega antes de que nosotros podamos verla y dedicarnos a responderla o tal vez aporta otro punto de vista u otra manera de resolver la situaci&oacute;n.<br><br>
          Les mandamos saludos y seguimos en contacto.<br><br>`,
    videos: [
      "https://drive.google.com/file/d/1TasLgPJK9hKXU4yjfFIyKDtDAzpn2cQL/preview",
      "https://www.youtube.com/embed/sIoyDF_1k-8",
      "https://www.youtube.com/embed/bQ5_o5XPjR0",
      "https://drive.google.com/file/d/1ddxd_21ZiwuUU458PNpB9zuB5o-WIH-l/preview",
      "https://www.youtube.com/embed/GVo94OtE2_s",
      "https://drive.google.com/file/d/19tifCLbG-fIVA6BMZsos1IZmk-ayZiv6/preview",
    ],
    pdfs: [ej_1, ej_2, ej_3],
    powerpoints: [],
  },


    {
      id: 2,
      titulo: 'Ejercitación 2',
      consigna: `
          Estimados,<br><br>
          Para continuar con la cursada les solicitamos que vean los siguientes videos:<br><br>
          <a href="https://drive.google.com/file/d/1chJ-4pgtjRgNIvLDYe11Pz99r_dhBV_B/view?usp=sharing" target="_blank">Ver Video</a><br><br>
          <a href="https://drive.google.com/file/d/1Wor7QjxjyHJ6r5el9tADaeaLEdtHOJ_A/view?usp=sharing" target="_blank">Ver Video</a><br><br>
          Compartimos los 2 archivos <em>Ejercitacion 02-en clase.pdf</em> y <em>Ejercitacion 02-flor.pdf</em>. La primera se compone de algunas figuras que utilizamos para practicar en clase, dado que no debe ser entregada. La segunda es para desarrollar la Ejercitacion 02, que será de entrega obligatoria, con fecha límite de envío estipulada para el <strong>Jueves 22/8 (comision Miercoles)</strong> y <strong>Viernes 23/8 (comision Jueves)</strong> inclusive.
          <br><br>
          Estas actividades nos comprometen a practicar los comandos línea, arco y círculo (comandos Básicos de Dibujo) todavía no utilizamos el comando rectángulo.
          Por otro lado, es fundamental que comencemos a valernos de las ayudas de dibujo (ubicadas en la barra de estado) sin depender directamente del ingreso de coordenadas cartesianas o polares, es decir que a partir de ahora debemos comenzar a dibujar de <em>manera implícita</em>, indagando en el mejor modo de dibujar para cada uno de nosotros.<br><br>
          <strong>Reiteramos que la realización de las ejercitaciones es requisito para la aprobación del curso, y deben ser entregadas en tiempo y forma al correo: dtacun3f@gmail.com.</strong>
          <br><br>
          Les mandamos saludos y seguimos en contacto.

      `,
      videos: [
          'https://drive.google.com/file/d/1chJ-4pgtjRgNIvLDYe11Pz99r_dhBV_B/preview',
          'https://drive.google.com/file/d/1Wor7QjxjyHJ6r5el9tADaeaLEdtHOJ_A/preview'
      ],
      pdfs: [ej2_1, ej2_2],
      powerpoints: [],
  },
  
  
  {
    id: 3,
    titulo: 'Ejercitación 3',
    consigna: `
        Estimados y estimadas,<br><br>
        En relación a la clase referida a Capas o Layers les dejamos esta serie de videos:<br><br>
        <a href="https://drive.google.com/file/d/1S3qr_Ln53XYi4o7_EtRqMl01E7rxnwDC/view?usp=sharing" target="_blank">Propiedades de Entidades</a><br><br>
        <a href="https://drive.google.com/file/d/1bOoTkyScgnc5rKvYulNH_CHKN1VGreeB/view?usp=sharing" target="_blank">Administrador de Capas</a><br><br>
        <a href="https://drive.google.com/file/d/1NCaj3aE4Z08lSAK6zPY6iukZtv7Po3kt/view?usp=sharing" target="_blank">Ejemplo de uso a través de 2 actividades</a><br><br>
        Compartimos las ejercitaciones <em>Ejercitacion 03-en clase.pdf</em> y <em>Ejercitacion 03-en clase-Consigna.pdf</em> para que puedan practicar cuando vean el videotutorial, esta actividad <strong>no se debe entregar.</strong>
        <br><br>
        También les adjuntamos 3 archivos para rehacer la Flor, pero ahora con las entidades dispuestas y organizadas en distintas capas (<em>Ejercitacion 03 Flor.pdf</em>; <em>Ejercitacion 03 Flor-desarrollo.pdf</em> y <em>Ejercitacion 03 Flor-consigna.pdf</em>) esta actividad <strong>tampoco debe ser entregada.</strong>
        <br><br>
        Por último, les dejamos 3 archivos para la ejecución de la ejercitación 03 (<em>Ejercitacion 03 -Cubo.pdf</em>; <em>Ejercitacion 03 -Cubo-desarrollo.pdf</em> y <em>Ejercitacion 03 –Cubo-consigna.pdf</em>) esta actividad deberá ser entregada  con la fecha límite <strong>indicada en el calendario</strong>.
        <br><br>
        <strong>Esta debe ser enviada a la casilla de correo electrónico dtacun3f@gmail.com, denominada: <em>Ejercitacion 03 Apellido.dwg</em>. Los archivos que no tengan este formato no serán recepcionados.</strong>
        <br><br>
        Saludos.
    `,
    videos: [
        'https://drive.google.com/file/d/1S3qr_Ln53XYi4o7_EtRqMl01E7rxnwDC/preview',
        'https://drive.google.com/file/d/1bOoTkyScgnc5rKvYulNH_CHKN1VGreeB/preview',
        'https://drive.google.com/file/d/1NCaj3aE4Z08lSAK6zPY6iukZtv7Po3kt/preview'
    ],
    pdfs: [ej3_1, ej3_2, ej3_3, ej3_4, ej3_5, ej3_6, ej3_7, ej3_8],
    powerpoints: [],
}

  
  
  
  
];

export default ejercitaciones;
