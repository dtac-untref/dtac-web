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
import ej4_1 from "../pdfs/Ejercitacion 04-A3.pdf";
import ej4_2 from "../pdfs/Lamina 04-Apellido.pdf";
import ej5_1 from "../pdfs/Lamina 05 Apellido.pdf";
import ej5_2 from "../pdfs/Lamina 05 Consigna.pdf";
import ej6 from "../pdfs/Lamina_06_Apellido.pdf";
import ej7_1 from "../pdfs/Lamina 07 Apellido.pdf";
import ej7_2 from "../pdfs/Lamina 07 Pieza.pdf";
import ej8_1 from "../pdfs/Ejercitacion_08_-_Rotulos.pdf";
import ej11_1 from "../pdfs/Lamina_11_Apellido-A2.pdf";
import ej11_2 from "../pdfs/Lamina_11_Apellido-A2_1.pdf";
// const archivoRAR = `${process.env.PUBLIC_URL}/public/rar/Ejercitacion-01.rar`;


const ejercitaciones = [
  {
    id: 1,
    titulo: "Ejercitación 1",
    consigna: `
          Estimados y estimadas,<br><br>
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
          La fecha l&iacute;mite de entrega queda pautada para luego del pr&oacute;ximo encuentro, considerando el plazo m&aacute;ximo para el <strong>Jueves 28/8 (comisi&oacute;n Miercoles)</strong> y <strong>Viernes 29/8 (comisi&oacute;n Jueves)</strong>, para exponer el trabajo, plantear las dudas y luego de la clase enviar los archivos, por si deben corregir algo. As&iacute; no atestamos la casilla de correo con dos versiones de la misma actividad, porque eso puede generar confusi&oacute;n.&nbsp;<br><br>          
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
          Estimados y estimadas,<br><br>
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
},

  
{
  id: 4,
  titulo: 'Ejercitación 4',
  consigna: `
      Estimados y estimadas,<br><br>
      La temática que abordaremos se refiere a las maneras o modos de selección de entidades para poder modificarlas o editarlas, para ello les compartimos estos dos videos:<br><br>
      <a href="https://drive.google.com/file/d/1UNdprHGF_9PUUojT7o0Eh4_FoxgtAbSj/view?usp=sharing" target="_blank">Modos de selección de objetos</a><br><br>
      <a href="https://drive.google.com/file/d/12oUYGfetlfxhAnCccabNEqEClPhQEQAg/view?usp=sharing" target="_blank">Comandos de edición y modificación</a><br><br>
      Nuestra clase sobre el uso del software se estructura de la siguiente manera: primero les solicitamos que presten atención a los “modos de selección” o “métodos de selección de objetos” a partir de invocar los distintos comandos de edición (Ventana o Windows, Captura o Crossing, Borde o Fence, Todos o ALL, Previo o Previous, etc.), considerando la posibilidad de deseleccionar presionando la tecla SHIFT para eliminar entidades seleccionadas. A continuación, nos centramos en los comandos de Edición o Modificación: el comando BORRAR o ERASE, el comando COPIAR, el comando DESPLAZAR o MOVE, posteriormente DESFASE (OFFSET) junto con el comando RECORTAR o TRIM (recuerden el sutil cambio que presenta a partir de la versión 2021: <a href="https://youtu.be/4K1mp4Y-2OI?si=ZMJdEzCE1kXp81os" target="_blank">ver video</a>).<br><br>
      Con estas pocas herramientas de edición, hemos ejecutado el Formato A3, que adjuntamos en el archivo <em>Ejercitacion 04-A3.pdf</em>. Esta actividad nos permite comenzar a componer la ejercitación 04 de entrega obligatoria que denominaremos <em>Lamina 04 -Apellido.dwg</em>. Para realizarla deben crear la capa “Formato” en color magenta, no se debe realizar en el layer o capa “0”, tener presente que se debe ejecutar con 18 líneas (incluyendo las líneas interiores del rótulo) y que sugerimos que se comience a dibujar desde la coordenada absoluta 0,0 hacia la derecha.<br><br>
      Luego de la práctica, ejecutando el formato A3, en el segundo video pueden seguir viendo el funcionamiento del comando ALARGAR o EXTEND, y a continuación el comando SIMETRIA o MIRROR, el comando GIRAR o ROTATE, CHANFLE o CHANFER, EMPALME o FILLET y ESCALAR o SCALE. En la última parte expongo dos maneras de poder dividir el cubo de 100 milímetros en 3 partes iguales para desarrollar la grilla de igual manera que se solicita hacer en el modelo de telgopor para poder representarlo.<br><br>
      A continuación, compartimos la consigna para la realización de la lámina. Deben crear su pieza a partir del cubo de poliestireno expandido (o del sustituto que les permita desarrollar la consigna). Se puede conformar el cubo a partir de superponer planchas, o recurrir a cualquier material que les permita generar la maqueta, según el instructivo compartido.<br><br>
      A partir de esta pieza, vamos a comenzar a ver la forma de representar objetos, figuras o cuerpos que ocupan 3 dimensiones en el espacio, pero que deben ser mostrados en soportes de 2 dimensiones. Antiguamente sobre papel, pero hoy todavía necesitamos del mismo recurso gráfico para compartir información digital. Es decir que, cuando vemos un plano o una documentación en un monitor, un proyector o cualquier dispositivo, sigue siendo una representación bidimensional. Más allá de que tenemos cada vez más y mejores recursos para representar en 3 dimensiones, técnicamente sigue vigente esta antiquísima forma de compartir información y comunicar en los distintos campos técnicos, a partir de vistas parciales de los objetos que solo muestran 2 dimensiones por vez, y en conjunción con otras vistas nos permiten interpretar la totalidad. Una de las condiciones que propuso el matemático Gaspar Monge (les sugerimos que indaguen un poco en esta personalidad que sistematizó un conjunto de métodos y procedimientos que se utilizaban desde hacía mucho tiempo y sentó las bases de la Geometría Descriptiva), contempla eliminar la fuga o la deformación propia de nuestra visión.<br><br>
      Haciendo un resumen abrupto del proceso histórico, podemos decir que esa teoría se fue sistematizando y actualmente existen reglas de uso común en todas partes del mundo a partir de las Normas ISO y, en nuestro país, de las Normas IRAM. Las que refieren específicamente al dibujo técnico están agrupadas en algunos manuales, aquí les dejamos el link a este viejo manual para que lo puedan leer: <a href="https://drive.google.com/file/d/1mOUavzjbe2z705GD-QvhEmhPIR5KC2DQ/view?usp=sharing" target="_blank">Manual de dibujo técnico</a>.<br><br>
      También les proponemos que vean estas presentaciones que resumen las siguientes Normas:<br><br>
      <a href="https://docs.google.com/presentation/d/15zATCX9Vblj31uSmENjrr7iK_G0uVOzw/edit?usp=sharing&ouid=100185054680830678346&rtpof=true&sd=true" target="_blank">Norma IRAM 4501: Definición de Vistas</a><br><br>
      <a href="https://docs.google.com/presentation/d/1iknW3X8OaSKLxbrgT4iC-iTBnB4QZrx-/edit?usp=sharing&ouid=100185054680830678346&rtpof=true&sd=true" target="_blank">Norma IRAM 4502: Líneas</a><br><br>
      <a href="https://docs.google.com/presentation/d/1HhLF4xxY4kLA4b7A7CuBFXUm8qmPwqTQ/edit?usp=sharing&ouid=100185054680830678346&rtpof=true&sd=true" target="_blank">Norma IRAM 4504: Formatos y elementos gráficos</a><br><br>
      <a href="https://drive.google.com/file/d/1hAZH7k9vYhPRzQRvNHx4T-R7RHuHKW58/view?usp=sharing" target="_blank">Norma IRAM 4505: Uso de Escalas</a><br><br>
      <a href="https://docs.google.com/presentation/d/13JVlv3eU4_iNMov-tV59CGKMPwFbdQ4x/edit?usp=sharing&ouid=100185054680830678346&rtpof=true&sd=true" target="_blank">Norma IRAM 4508: Rótulo, lista de materiales y despiece</a><br><br>
      Aquí les dejamos un par de videos que grabó Carina para contarles el sistema de representación de vistas:<br><br>
      <a href="https://drive.google.com/file/d/1FpuC3BVE2yh6GCvqSWJ0or2SRp2JSoF9/view?usp=sharing" target="_blank">Sistema de representación de vistas - Parte 1</a><br><br>
      <a href="https://drive.google.com/file/d/16_jYp7xjpLMZHCxebsR4t_ljtsWsEV0k/view?usp=sharing" target="_blank">Sistema de representación de vistas - Parte 2</a><br><br>
      En este video, un colega docente explica la mayoría de los conceptos que hemos estado compartiendo: <a href="https://youtu.be/TfUk_GLbtko" target="_blank">Explicación de conceptos de representación técnica</a>.<br><br>
      Por último, compartimos las instrucciones para la actividad de entrega obligatoria, que cada uno deberá presentar en el próximo encuentro. La dinámica para la exposición del trabajo implica que puedan compartir la pantalla para mostrar el archivo CAD con las vistas y poder alternar mostrando el cubo que intervinieron con la cámara para ir cotejando que las vistas se condicen con el modelo. En caso de no contar con cámara web, les sugerimos que tengan fotografiado el cubo en sus seis caras (preferentemente indicadas con marcador sobre cada cara, VF, VLI, VS, etc.).<br><br>
      En el archivo adjunto <em>Lamina 04-Apellido.pdf</em> tienen la apariencia de toda la composición, además de las medidas (en color gris). Aclaramos que no es necesario dibujar las cotas dado que todavía no hemos visto los comandos necesarios y las configuraciones para acotar. Por otro lado, la ubicación de todo el sistema de vistas debe ser ajustado por ustedes para lograr una disposición equilibrada.<br><br>
      Para comenzar con la ejecución deben generar 3 Capas: el layer Formato en color magenta (6) y línea CONTINUA; el layer Pieza en color blanco/negro (7) y línea CONTINUA; y, por último, el layer Línea Trazos Ocultos en color cyan (4) y línea DASHED2 (TRAZOS2).<br><br>
      <strong>Esta debe ser enviada a la casilla de correo electrónico dtacun3f@gmail.com, denominada: <em>Lámina 04 - Apellido.dwg</em>. La fecha límite de entrega está indicada en el calendario. Los archivos que no tengan este formato no serán recepcionados.</strong>
      <br><br>
      Saludos.
  `,
  videos: [
        'https://drive.google.com/file/d/1UNdprHGF_9PUUojT7o0Eh4_FoxgtAbSj/preview',
        'https://drive.google.com/file/d/12oUYGfetlfxhAnCccabNEqEClPhQEQAg/preview',
        'https://youtube.com/embed/4K1mp4Y-2OI?si=ZMJdEzCE1kXp81os',
        "https://drive.google.com/file/d/1mOUavzjbe2z705GD-QvhEmhPIR5KC2DQ/preview",
        "https://docs.google.com/presentation/d/15zATCX9Vblj31uSmENjrr7iK_G0uVOzw/preview",
        "https://docs.google.com/presentation/d/1iknW3X8OaSKLxbrgT4iC-iTBnB4QZrx-/preview",
        "https://docs.google.com/presentation/d/1HhLF4xxY4kLA4b7A7CuBFXUm8qmPwqTQ/preview",
        "https://drive.google.com/file/d/1hAZH7k9vYhPRzQRvNHx4T-R7RHuHKW58/preview",
        "https://docs.google.com/presentation/d/13JVlv3eU4_iNMov-tV59CGKMPwFbdQ4x/preview",
        'https://drive.google.com/file/d/1FpuC3BVE2yh6GCvqSWJ0or2SRp2JSoF9/preview',
        'https://drive.google.com/file/d/16_jYp7xjpLMZHCxebsR4t_ljtsWsEV0k/preview',
        'https://youtube.com/embed/TfUk_GLbtko'
    ],
  pdfs: [ej4_1, ej4_2],
  powerpoints: [],
},

{
  id: 5,
  titulo: 'Ejercitación 5',
  consigna: `
      Estimados y estimadas,<br><br>
      Les enviamos el tutorial sobre los comandos avanzados de dibujo: Polilínea (Polyline), Polígono (Polygon), Rectángulo (Rectangle): <a href="https://drive.google.com/file/d/1SHP-w6ILGRqaJ_CtFaYIE4aZ43P4E5NX/view?usp=sharing" target="_blank">Ver tutorial</a><br><br>
      También les dejamos este tutorial sobre el comando Hatch o Relleno en la antigua visualización de Autocad Clásico: <a href="http://youtu.be/XQw6NOjnfN4" target="_blank">Ver tutorial</a><br><br>
      Por otro lado, compartimos este video con la actual disposición del comando Hatch en la cinta de comandos del entorno Dibujo 2D y Anotación (Drafting & Annotation): <a href="https://youtu.be/jVLcmJ8TxTE" target="_blank">Ver tutorial</a><br><br>
      Adjuntamos los archivos de la ejercitacion que constan de las instrucciones para la próxima actividad de entrega obligatoria. El archivo <em>Lamina 05 Consigna.pdf</em>, expone los criterios para la ejecución, y el archivo <em>Lamina 05 Apellido.pdf</em>, ejemplifica la apariencia final a lograr, donde pueden variar los colores del mandala.
      <br><br>
      <strong>Esta actividad deberá ser mostrada en el próximo encuentro virtual (indicado en el calendario). Luego se debe enviar a la casilla: dtacun3f@gmail.com, con la denominación: <em>Lamina 05 Apellido.dwg</em>. Los archivos que no tengan este formato no serán recepcionados.</strong>
      <br><br>
      Saludos.
  `,
    videos: [
        "https://drive.google.com/file/d/1SHP-w6ILGRqaJ_CtFaYIE4aZ43P4E5NX/preview",
        'http://youtube.com/embed/XQw6NOjnfN4',
        'https://youtube.com/embed/jVLcmJ8TxTE',

    ],
    pdfs: [ej5_1, ej5_2],
    powerpoints: [],
},

{
  id: 6,
  titulo: 'Ejercitación 6',
  consigna: `
      Estimados y estimadas,<br><br>
      En este video nos explayamos sobre el uso de comandos avanzados de edición:<br>
      <a href="https://drive.google.com/file/d/1tnYG-PatU3pCgMOZgfkTYeecugvgYXoC/view?usp=sharing" target="_blank">Ver tutorial de comandos avanzados</a><br><br>
      Por otro lado, compartimos estos dos videos grabados por Carina sobre los sistemas de representación por Perspectivas:<br><br>
      <a href="https://drive.google.com/file/d/1wFNVprVZCN0DyTxsFKnbaNInFk2x7QWS/view?usp=sharing" target="_blank">Ver Video 1</a> 
      <br><br>
      <a href="https://drive.google.com/file/d/1IihkQfAEtUtqHlobYBK6lPa8TXC42TQO/view?usp=sharing" target="_blank">Ver Video 2</a><br><br>
      También, les solicitamos que vean la presentación sobre la Norma IRAM 4540, referida a la representación de Vistas en Perspectiva:<br>
      <a href="https://drive.google.com/file/d/1Wu_JMuKuNZpw3SdFRuFAbdERv3rYjNIL/view?usp=sharing" target="_blank">Ver Norma IRAM 4540</a><br><br>
      Por otro lado, exponemos la consigna para la ejecución de la <em>Lamina 06</em>. En principio, volveremos a utilizar las mismas 3 Capas generadas para realizar la <em>Lamina 04</em>: el layer Formato en color magenta (6) y línea CONTINUA; el layer Pieza en color blanco/negro (7) y línea CONTINUA; y, por último, el layer Línea Trazos Ocultos en color cyan (4) y línea DASHED2 (TRAZOS2).<br><br>
      El trabajo consiste en la confección de 1 Perspectiva Isométrica y 1 Perspectiva Caballera Reducida del modelo confeccionado por cada uno de Ustedes por medio del cubo de Telgopor, representado en la <em>Lamina 04</em>. La escala de representación debe ser 1:1. Se requiere que los puntos de observación para la representación de las perspectivas sean opuestos. Adjuntamos un ejemplo en el archivo <em>Lamina 06 Apellido.pdf</em>.
      <br><br>
      En el próximo encuentro virtual deberán compartir la pantalla para mostrar el archivo CAD con las perspectivas y poder alternar mostrando el cubo que intervinieron con la cámara para ir cotejando que las representaciones se condicen con el modelo. En caso de no contar con cámara web, les sugerimos que tengan fotografiado el cubo.
      <br><br>
      <strong>Esta actividad deberá ser mostrada en el próximo encuentro virtual (indicado en el calendario). Luego se debe enviar a la casilla: dtacun3f@gmail.com, con la denominación: <em>Lamina 06 Apellido.dwg</em>. Los archivos que no tengan este formato no serán recepcionados.</strong>
      <br><br>
      Saludos.
  `,
  videos: [
      'https://drive.google.com/file/d/1tnYG-PatU3pCgMOZgfkTYeecugvgYXoC/preview',
      'https://drive.google.com/file/d/1wFNVprVZCN0DyTxsFKnbaNInFk2x7QWS/preview',
      'https://drive.google.com/file/d/1IihkQfAEtUtqHlobYBK6lPa8TXC42TQO/preview',
      'https://drive.google.com/file/d/1Wu_JMuKuNZpw3SdFRuFAbdERv3rYjNIL/preview',
  ],
  pdfs: [ej6
  ],
  powerpoints: [ ],
},

{
  id: 7,
  titulo: 'Ejercitación 7',
  consigna: 
      `Estimados y estimadas,<br><br>
      Les adelantamos las presentaciones de las normativas que vamos a requerir conocer para poder desarrollar la próxima actividad 07.<br><br>
      En principio, les solicitamos que vean la presentación sobre la Norma IRAM 4508, que expone la necesidad de que todos los planos tengan una rotulación en función de su contenido:<br><br>
      <a href="https://drive.google.com/file/d/13JVlv3eU4_iNMov-tV59CGKMPwFbdQ4x/view?usp=sharing" target="_blank">Norma IRAM 4508</a><br><br>
      A continuación, les proponemos que vean la presentación sobre la Norma IRAM 4503, dedicada a la Caligrafía Técnica:<br><br>
      <a href="https://drive.google.com/file/d/1fhpEr9ncMhB0lsSRXZXXC5tJuG7XSF9C/view?usp=sharing" target="_blank">Norma IRAM 4503</a><br><br>
      Asimismo, los instamos a ver la presentación sobre la Norma IRAM 4513, que expone toda la información necesaria sobre acotación:<br><br>
      <a href="https://drive.google.com/file/d/1-c3nCOlTSk5dDoE3quRsw4dCCAEo-HLI/view?usp=sharing" target="_blank">Norma IRAM 4513</a><br><br>
      Por otro lado, compartimos el video donde se exponen los pasos para desarrollar la Lamina 07, recuerden que el video ha sido grabado en otro cuatrimestre anterior y hemos cambiado algunas actividades, por ello se menciona que es la lámina 08:<br><br>
      <a href="https://youtu.be/DIUkfTAVWl4" target="_blank">Video Lamina 07 (Parte 1)</a><br><br>
      En esta segunda parte nos referimos a la aplicación de los Textos dentro de la lámina, nuevamente recuerden que el contenido debe ser ajustado según el archivo adjunto Lamina 07 Apellido.pdf, que tiene el rótulo con los datos actualizados, colocando el número de comisión pertinente:<br><br>
      <a href="https://youtu.be/koZD34ZsI6g" target="_blank">Video Lamina 07 (Parte 2)</a>.<br><br>
      Reiteramos que deben dibujar la pieza, pero considerando una vista principal, distinta de la ejecutada en el video y en el archivo con la lámina de ejemplo (Lamina 07 Apellido.pdf), en consecuencia, la Vista Lateral Izquierda y la Vista Superior también variarán. De igual manera, las perspectivas deben estar generadas desde un vértice distinto al mostrado en el modelo enviado (Lamina 07 Pieza.pdf) y en el video.<br><br>
      Según se expresa, en principio se deben generar 5 Capas: el layer Formato en color blanco y línea CONTINUA; el layer Pieza en color magenta y línea CONTINUA; el layer Línea Trazos Ocultos en color cyan y línea DASHED2 (TRAZOS2); el layer Cotas en color 2 (amarillo) y línea CONTINUA; y, por último, el layer Texto en color verde y línea CONTINUA.<br><br>
      En este vínculo encontrarán el video sobre todos los parámetros que nos permiten configurar un ESTILO DE COTAS (Cota -Estilo e Texto-, Línea Auxiliar de Cota -Línea de Referencia para AutoCAD-, Línea de Cota y Flechas –Símbolos-), luego de diseñar nuestro estilo, exploraremos las herramientas de acotado:<br><br>
      <a href="https://drive.google.com/file/d/1hfoLg3X-BxaD2WfGs1W3AOp-qB6lpJMC/view?usp=sharing" target="_blank">Video Configuración de Estilo de Cotas</a><br><br>
      A partir de ello, debemos agregar las cotas necesarias a la Lamina 07 (cotas numericas, no se debe agregar una cota de texto), generando la capa o el layer Cotas en color amarillo y línea CONTINUA.<br><br>
      Fecha de Entrega indicada en el calendario.<br><br>
      Denominación: Lamina 07-Apellido.dwg<br><br>
      Enviar a la casilla: dtacun3f@gmail.com<br><br>
      Saludos.`,
  videos: [
      'https://drive.google.com/file/d/13JVlv3eU4_iNMov-tV59CGKMPwFbdQ4x/preview',
      'https://drive.google.com/file/d/1fhpEr9ncMhB0lsSRXZXXC5tJuG7XSF9C/preview',
      'https://drive.google.com/file/d/1-c3nCOlTSk5dDoE3quRsw4dCCAEo-HLI/preview',
      'https://youtube.com/embed/DIUkfTAVWl4',
      'https://youtube.com/embed/koZD34ZsI6g',
      'https://drive.google.com/file/d/1hfoLg3X-BxaD2WfGs1W3AOp-qB6lpJMC/preview'
  ],
  pdfs: [ej7_1, ej7_2],
  powerpoints: [],
},

{
  id: 8,
  titulo: 'Ejercitación 8',
  consigna: `
    Estimados y estimadas,<br><br>
    Como soporte audiovisual sobre las cuestiones de impresión, les compartimos la explicación grabada durante la cursada el miércoles 13/9/2023:<br><br>
    <a href="https://drive.google.com/file/d/18Cl841ZMQEmlUyfzdXDTt0rt5pHMXIdd/view?usp=sharing" target="_blank">Explicación sobre impresión</a><br><br>
    Allí expusimos los comandos y acciones sobre este nuevo tema, además de los pasos y procedimientos para desarrollar la Ejercitación 8.<br><br>
    En esta nueva clase veremos la potencialidad de armar presentaciones para organizar nuestros archivos y poder imprimir documentación técnica a partir del Espacio de Papel.<br><br>
    Según hemos expresado, deben enviar la Lámina 07, y luego de su corrección, comenzar con la configuración en el archivo DWG para el armado de la presentación.<br><br>
    La consigna del TP 8 postula abrir el archivo CAD correspondiente (corregirlo según la devolución vía mail de cada actividad), guardarlo anteponiéndole <strong>TP8-</strong> a cada uno de los archivos (TP8-Lamina 04 Apellido.dwg, TP8-Lamina 05 Apellido.dwg, TP8-Lamina 06 Apellido.dwg y TP8-Lamina 07 Apellido.dwg), y luego deberán recortar el formato dibujado en ModelSpace, para ubicarlo en el PaperSpace (Presentación o Layout). Allí deben colocarle el texto a cada rótulo con el layer de texto activo, previo haber generado el Estilo de Texto con tipografía ISOCPEUR. Compartimos el archivo <em>Ejercitación 08 - Rótulos.pdf</em> con la información para rotular.<br><br>
    Luego deben generar la hoja de presentación modificando las propiedades de impresión desde Page Setup Manager o Administrador de configuraciones de página. El tamaño de hoja recomendado es ISO full bleed A3 (420.00 297.00 MM), la relación de escala siempre es 1 mm por cada unidad de dibujo, es decir: 1:1.<br><br>
    Como recordatorio, para generar un estilo de puntas acorde al criterio que hemos estado proponiendo desde el principio, compartimos la siguiente tabla. Dicho archivo debe denominarse: <em>Puntas [n° de comisión] Apellido.ctb</em><br><br>
    <strong>Línea/Punta      Espesor                  Color</strong><br>
    01 (rojo)                0.1                         Negro<br>
    02 (amarillo)          0.2                         Negro<br>
    03 (verde)              0.3                         Negro<br>
    04 (cian)                 0.4                         Negro<br>
    05 (azul)                 0.5                         Negro<br>
    06 (magenta)          0.6                         Negro<br>
    07 (negro/blanco)   0.7                         Negro<br>
    08 (gris)                  0.8                         Negro<br>
    09 (gris)                  1.0                         Negro<br><br>
    Para la creación y/o ubicación del Viewport (Ventana Gráfica), deben generar el layer o Capa VP o VG que deberá estar impedido de impresión. Luego, desde las propiedades de ese Viewport, deben definir la relación de escala colocándola en 1, de esta manera, por cada unidad de dibujo realizada en el Modelo, obtendremos un milímetro impreso en el papel. Recuerden renombrar la pestaña de la Presentación (Layout) con el número de la lámina que estamos representando.<br><br>
    Para finalizar, deben generar los archivos PDF como si estuvieran imprimiendo/trazando/ploteando las láminas, resultando en 4 archivos que deberán denominar:<br><br>
    <strong>TP8-Lamina 04 Apellido.pdf</strong><br>
    <strong>TP8-Lamina 05 Apellido.pdf</strong><br>
    <strong>TP8-Lamina 06 Apellido.pdf</strong><br>
    <strong>TP8-Lamina 07 Apellido.pdf</strong><br><br>
    Reiteramos que antes de comenzar a formatear la Lámina 07, esperen tener la devolución y contemplen todos los cambios sugeridos. Luego se deben adecuar las representaciones en el Espacio de Modelo para que nuestra figura o pieza quede dibujada en escala natural o real, es decir, 1:1, y posteriormente, ajustaremos las escalas de ampliación 2:1 de las vistas fundamentales y el ajuste de representación al 82% de la perspectiva isométrica configurando las escalas de las ventanas gráficas (Viewport). También se debe acotar en el Espacio del Papel con el estilo de Cotas generado originalmente ISO 40 o Cota 4.<br><br>
    Para el próximo encuentro en Caseros II, deberán llevar impresas en soporte papel, tamaño A3, las 4 láminas para revisarlas de forma conjunta.<br><br>
    Luego del encuentro, con fecha límite hasta la indicada en el calendario, deberán enviar por correo a la casilla <a href="mailto:dtacun3f@gmail.com">dtacun3f@gmail.com</a>, los 8 archivos:<br><br>
    <strong>TP8-Lamina 04 Apellido.dwg</strong><br>
    <strong>TP8-Lamina 04 Apellido.pdf</strong><br>
    <strong>TP8-Lamina 05 Apellido.dwg</strong><br>
    <strong>TP8-Lamina 05 Apellido.pdf</strong><br>
    <strong>TP8-Lamina 06 Apellido.dwg</strong><br>
    <strong>TP8-Lamina 06 Apellido.pdf</strong><br>
    <strong>TP8-Lamina 07 Apellido.dwg</strong><br>
    <strong>TP8-Lamina 07 Apellido.pdf</strong><br><br>
    Tal como mencionamos, el Arq. Sergio Manes tiene un video en su canal de Youtube, referido a impresión, donde expone distintas posibilidades. Las que nosotros hemos propuesto y otras que hemos mencionado, aunque el modelo que usa (Guggenheim de Nueva York del Arq. Frank Lloyd Wright) está generado considerando la Unidad de Dibujo como 1 metro, y nosotros, por ahora estamos trabajando en milímetros. De todas maneras, es una interesante exposición de recursos que vamos a utilizar en próximas actividades. Lo compartimos para que puedan ampliar conceptos y formas de abordar esta cuestión.<br><br>
    <a href="https://youtu.be/pwI6zR-BsUk" target="_blank">Video del Arq. Sergio Manes sobre impresión</a><br><br>
    Por último, reiteramos el listado de materiales para trabajar en el próximo encuentro presencial:<br><br>
    - Instrumentos de medición para relevar los gabinetes de madera (regla, cinta métrica, calibre, etc.)<br>
    - Hojas para dibujar<br>
    - Lápices<br>
    - Cubo de telgopor intervenido<br>
    - Cutter para cortar<br>
    - Cinta de papel<br><br>
    Saludos.
  `,
  videos: [
    'https://drive.google.com/file/d/18Cl841ZMQEmlUyfzdXDTt0rt5pHMXIdd/preview',
    'https://www.youtube.com/embed/pwI6zR-BsUk'
  ],
  pdfs: [ej8_1],
  powerpoints: [],
},

{
  id: 9,
  titulo: 'Ejercitación 9',
  consigna: 
    `Estimados y estimadas,<br><br>
    Veremos otra cuestión importante a la hora de representar por medio del dibujo técnico, expondremos los temas referidos a la utilización de los Cortes para mostrar el interior de los objetos o piezas, este recurso es fundamental para poder representar espacios, una planta arquitectónica es en definitiva un corte.<br><br>
    Compartimos las presentaciones de las normativas que vamos a requerir conocer para poder desarrollar la próxima actividad, la Lamina 9, que se basa en el modelo que reciben con todos los parámetros y dimensiones para trabajar.<br><br>
    En principio les solicitamos que vean la presentación sobre la Norma IRAM 4507, donde se expone la representación de secciones y cortes en dibujo: <a href="https://drive.google.com/file/d/1RU1kGq6kxLqeweDqj8_GnY6Cx5otv9gP/view?usp=sharing" target="_blank">Norma IRAM 4507</a><br><br>
    Por otro lado, compartimos la presentación sobre la Norma IRAM 4509, que presenta la forma de indicar los cortes por medio de rayados o texturas:<br>
    <a href="https://drive.google.com/file/d/12cQ-ZS2WkM6m9YmUj-yFeGPQEi1Zn52x/view?usp=sharing" target="_blank">Norma IRAM 4509</a><br><br>
    Aquí <a href="https://youtu.be/vDd9BKj7Vz4" target="_blank">video explicativo</a>, encontramos una explicación del tema cortes, que presenta algunas sutiles diferencias en cuanto a la interpretación y aplicación de la normativa, dado que cada región y campo profesional específico presenta pequeños cambios en los usos y “reglas del arte” en cuanto a la forma de comunicar. En este sentido podríamos hacer un paralelo respecto del lenguaje, de igual manera que todos los hispanoparlantes hablamos español, cada país, cada región, tiene sus modismos. Una cuestión a remarcar es que en el video se menciona que la línea que indica el plano de corte se representa con línea gruesa en su totalidad y con un trazo largo y dos trazos cortos, según la Norma IRAM 4502, el tipo de trazo G es de líneas de trazos largos y trazos cortos, cuyos extremos se representan en el valor más grueso (como el trazo tipo A) y las rayas intermedias en un grosor o valor medio, del 0.5 respecto al trazo grueso.<br><br>
    Otra discrepancia que queremos remarcar respecto del video está en la diferencia entre corte y sección. Según lo que se expresa en la normativa, un corte es una vista, donde se representan todas las líneas de contorno que contiene la pieza, incluyendo el seccionamiento y las líneas que quedan por detrás, una vez que eliminamos (imaginariamente) la parte que queda entre el plano de corte y el observador. Mientras que en una sección se verá únicamente la parte de la pieza por donde pasa el plano de seccionamiento. En el video queda poco clara esta diferenciación, muchas veces aparecen ejemplos de cortes denominados, o mal denominados como sección, según nuestro modo de trabajar.<br><br>
    En este link: <a href="https://youtu.be/NZZ87exrOfw" target="_blank">otro video sobre cortes en Dibujo Técnico</a>, hay otro video que aporta datos interesantes sobre los cortes en Dibujo Técnico.<br><br>
    En este último vínculo encontrarán el video sobre los procedimientos para poder poner en práctica, estas cuestiones relativas a la representación de cortes a partir del modelo que hayan recibido para confeccionar la Lamina 9 Apellido.dwg y su respectiva impresión que denominaremos Lamina 9 Apellido.pdf. Recuerden que este video ha sido grabado durante un cuatrimestre anterior y hemos modificado el orden y la numeración de algunas actividades, por ello verán que se menciona que la actividad es la numero 11, desestimen esta cuestión:<br>
    <a href="https://drive.google.com/file/d/1wqs0inTCVJcFYSNS2TW4jiMTLXNDBWiH/view?usp=sharing" target="_blank">Video procedimientos Lamina 9</a><br><br>
    Tal como surge de la explicación, debemos contar con 7 Capas: el layer Formato en color blanco y línea CONTINUA; el layer Pieza o Modelo en color magenta y línea CONTINUA; el layer Línea Trazos Ocultos en color cyan y línea DASHED2 (TRAZOS2); el layer Texto en color verde y línea CONTINUA; el layer Hatch Rayado en color 253 y línea CONTINUA; el layer Línea de corte en color 9 y línea CONTINUA; y, por último, el layer VP o VG en color verde y línea CONTINUA (Impedido/ de imprimirse).<br><br>
    Como habrán notado hemos restringido la indicación del plano de corte o línea de corte a una línea gruesa (color 9 que al momento de imprimirse asumirá un grosor de 1mm) que aparece solo en los extremos y es acompañada por un triángulo equilátero de 5 unidades de dibujo y relleno con un sólido.<br><br>
    Recuerden que deben suplir las 2 axonometricas que están dibujadas en el Modelo, por una perspectiva isométrica y una perspectiva caballera reducida, tomando cualquier vértice como punto de vista para su ejecución.<br><br>
    Esta actividad, compuesta por ambos archivos, deberá ser enviada en la fecha que indica el calendario.<br><br>
    Lamina 9 Apellido.dwg<br>
    Lamina 9 Apellido.pdf.<br><br>
    Saludos.
    `,
  videos: [
    'https://drive.google.com/file/d/1RU1kGq6kxLqeweDqj8_GnY6Cx5otv9gP/preview',
    'https://drive.google.com/file/d/12cQ-ZS2WkM6m9YmUj-yFeGPQEi1Zn52x/preview',
    'https://drive.google.com/file/d/1wqs0inTCVJcFYSNS2TW4jiMTLXNDBWiH/preview'
  ],
  pdfs: [],
  powerpoints: [],
},

{
  id: 10,
  titulo: 'Ejercitación 10',
  consigna: 
      `Estimados y estimadas,<br><br>
      Compartimos estos 2 videos, con múltiples temas entremezclados, la propuesta requiere desarrollar la anteúltima actividad generando la documentación necesaria para comunicar la apariencia morfológica de un gabinete para que un interlocutor pueda entenderlo, cortar las partes y armarlo:
      <br><br>
      <a href="https://drive.google.com/file/d/1tIJveTFbbYjEfQp-0VFilNnOiM_yAb7D/view?usp=sharing" target="_blank">Video 1</a>
      <br><br>
      <a href="https://drive.google.com/file/d/1FhDkONI19fwseVd5XRSjdwwA8o47KlIm/view?usp=sharing" target="_blank">Video 2</a><br><br>
      Tal como lo mencionamos, esta tarea es libre, por lo que Ustedes deben decidir cómo ejecutarla, a partir del gabinete relevado en el último encuentro presencial o eligiendo algún modelo de gabinete para representar o diseñando uno. Sugerimos generar una volumetría 3D y a partir de ella armar las vistas; en ese caso, les sugerimos que indaguen en el comando Flatshot. La volumetría se puede generar usando el comando Extrud – Extrusión o el comando Pulsar o Estirar, siempre en el ModelSpace (Espacio del Modelo).<br><br>
      El desarrollo implica trabajar con un archivo dwg que contenga las capas necesarias para una correcta gestión del plano, es decir, que deben generar los distintos layer o capas en función de las necesidades de representación. Luego, en PaperSpace (Espacio del Papel), se deben confeccionar los Layout (Presentación) necesarios para mostrar toda la información. En cada hoja se debe colocar el Formato A3 con su respectivo rótulo relleno con el texto en el estilo ISOCPEUR, en el layer Texto. Allí deberán consignar los datos de Lamina 10 – 01 y sucesivas, Escala 1:2, 1:4, 1:5, etc., Fecha: Campo automático con Fecha de impresión, Título: Gabinete, Placas para Corte, Volumetría de Gabinete, etc.<br><br>
      En este espacio se deben generar la cantidad de Viewport (ventanas gráficas) en un layer que esté impedido de imprimirse, denominado VP o VG. En cada una de ellas se debe mostrar la pieza en la escala indicada en el rótulo, de lo contrario, se debe especificar la escala. En caso de mostrar alguna perspectiva del modelo en 3D a puntos de fuga, en un estilo de visualización conceptual o Rayos X, no lleva escala.<br><br>
      Como consecuencia de la escala de presentación, se debe crear un estilo de cotas o reciclar el que ya hemos creado, para acotar de forma lógica la representación, considerando toda la información necesaria para que se entienda cabalmente el objeto, imaginando que lo enviaremos a una maderera o carpintería para que nos corten todas las placas necesarias para el ensamblado. Es fundamental que se consignen los centros de los círculos para que se entienda donde se debe colocar el centro de la herramienta para ejecutar ese calado.<br><br>
      Ejemplos de herramientas o métodos utilizados:<br><br>
      <a href="https://youtu.be/w65iunobaqA" target="_blank">Video 3</a>
      <br><br>
      <a href="https://youtu.be/zK_P5Qi65oo" target="_blank">Video 4</a><br><br>
      Para terminar de formalizar la consigna que se expone en los videos tutoriales, esta última actividad propuesta solicita la ejecución de todas las láminas necesarias para poder confeccionar el gabinete, que deberán llevar impresa para su corrección el próximo encuentro presencial. Luego de la exposición, se requiere el envío del archivo CAD: Lamina 10 Apellido.dwg, hasta la fecha indicada en el calendario, junto a las impresiones de las presentaciones: Lamina 10-01 Apellido.pdf; Lamina 10-02 Apellido.pdf; Lamina 10-03 Apellido.pdf; etc.<br><br>
      Aquí compartimos algunos ejemplos sobre el armado o mecanizado de cajas:<br><br>
      <a href="https://www.youtube.com/watch?v=i-_3rDkeJG0" target="_blank">Video 5</a>
      <br><br>
      <a href="https://youtu.be/CtV3RYdt5XM" target="_blank">Confección carpintería de Subwoofer ruso</a>
      <br><br>
      <a href="https://youtu.be/KaidnBRh_gc?si=A_C2pcJTGWuZRRPQ" target="_blank">Bass Array</a>
      <br><br>
      Por otro lado, hemos mencionado el uso de bloques, la manera en que AutoCAD nos permite generar bloques y administrar una biblioteca de bloques. Para ello, les dejamos este video tutorial:<br><br>
      <a href="https://drive.google.com/file/d/1aAFI8cX7kJv8Tc2ehHcojxe3pO8kjEGB/view?usp=sharing" target="_blank">Video 6</a><br><br>
      Aquí les dejamos otro video del Arq. Manes con otra explicación relacionada a los bloques:<br><br>
      <a href="https://youtu.be/cX1oL3hqzxA" target="_blank">Video 7</a><br><br>
      Compartimos este video, que comentamos en la clase, del Arq. Manes. Recuerden que nosotros hemos desestimado el uso de las cotas anotativas.<br><br>
      <a href="https://www.youtube.com/watch?v=hZhUotH9_GI&t=1490s" target="_blank">Video 8</a><br><br>
      Articulando lo que hemos estado viendo con el último TP, les solicitamos que vean este video sobre cuestiones de representación arquitectónica:<br><br>
      <a href="https://youtu.be/U1cCesRKbfo" target="_blank">Video 9</a><br><br>
      Por último, en el mismo canal de YouTube, encontrarán muy buena información sobre distintos programas para generar presentaciones arquitectónicas. En especial, les recomendamos que indaguen sobre el software SketchUp:<br><br>
      <a href="https://youtu.be/fqn8dFTU4fI" target="_blank">Video 10</a><br><br>
      Saludos.<br><br>
      Recuerden llevar instrumentos de medición, cinta métrica o distanciometro láser para relevar el aula. Hojas y lápiz para bosquejar y registrar todas las medidas del espacio.`
  ,
  videos: [
      'https://drive.google.com/file/d/1tIJveTFbbYjEfQp-0VFilNnOiM_yAb7D/preview',
      'https://drive.google.com/file/d/1FhDkONI19fwseVd5XRSjdwwA8o47KlIm/preview',
      'https://youtube.com/embed/w65iunobaqA',
      'https://youtube.com/embed/zK_P5Qi65oo',
      'https://www.youtube.com/embed/i-_3rDkeJG0',
      'https://youtube.com/embed/CtV3RYdt5XM',
      'https://youtube.com/embed/KaidnBRh_gc?si=A_C2pcJTGWuZRRPQ',
      'https://drive.google.com/file/d/1aAFI8cX7kJv8Tc2ehHcojxe3pO8kjEGB/preview',
      'https://youtube.com/embed/cX1oL3hqzxA',
      'https://youtube.com/embed/hZhUotH9_GI?si=xbL2QzUqVO8lhrlS',
      'https://youtube.com/embed/U1cCesRKbfo',
      'https://youtube.com/embed/fqn8dFTU4fI'
  ],
  pdfs: [],
  powerpoints: [],
},

{
  id: 11,
  titulo: 'Ejercitación 11',
  consigna: 
      `Estimados y estimadas,<br><br>
      La consigna del trabajo del relevamiento arquitectónico que realizamos la última clase presencial implica generar una planta arquitectónica y dos cortes del aula replanteada, indicando el lugar de realización de los cortes en la planta con el tipo de línea G que propone la Norma IRAM 4502 según lo que establece la Norma IRAM 4507 en el punto 4.1 INDICACIONES DE PLANO DE CORTE. Para ello debemos crear todos los layer que consideremos necesarias para una correcta gestión de la documentación, algunas capas posibles son:<br><br>
      Layer Muros en color 7 (blanco/negro) y tipo de línea continua.<br><br>
      Layer Aberturas en color 5 (azul) y tipo de línea continua.<br><br>
      Layer Equipamiento en color 3 (verde) y tipo de línea continua.<br><br>
      Layer Cotas en color 1 (rojo) y tipo de línea continua.<br><br>
      Layer Texto en algún color entre el 1 y el 9 dado que se imprimirán en color negro.<br><br>
      Layer VP o VG en cualquier color dado que estará impedido de imprimirse.<br><br>
      Layer Formato en color 7 (blanco/negro) y tipo de línea continua.<br><br>
      Layer Línea de Corte en color 6 (magenta) y tipo de línea trazo largo y trazo corto.<br><br>
      Layer Relleno en color 252 (Gris) y tipo de línea continua.<br><br>
      Consideraremos la unidad de dibujo como un metro, por ende, será menester establecer la escala de impresión, el tamaño del texto en las cotas, etc. El producto final debe ser una impresión digital, uno o más archivos pdf’s, dependiendo del armado que cada uno de ustedes establezca. A partir de las correcciones que surjan en el próximo encuentro virtual se deberá corregir y entregar por correo electrónico hasta la fecha indicada en el calendario. La denominación sugerida es: Lamina 11 Apellido.dwg y Lamina 11 Apellido.pdf<br><br>
      Compartimos este plano actualizado con el cuartito detrás de los ascensores para quienes quieran utilizar ese espacio en su propuesta de intervención.<br><br>
      Recuerden compartir los bloques que hemos desarrollado en la clase para que puedan incorporarlos.<br><br>
      Saludos.`,
  videos: [],
  pdfs: [ej11_1, ej11_2],
  powerpoints: [],
},

];

export default ejercitaciones;
