import maletin from '../../../assets/images/info.png'
import audiovisual from '../../../assets/images/que-voy.png'
import mascaras from '../../../assets/images/edades.png'
import digital from '../../../assets/images/consumicion.png'

const howToPlayData = [
    {
      title: 'Info general',
      description: 'La función tiene una duracion de 2 horas aproximadamente, se conforman equipos de hasta 6 personas, si son un grupo de 5 o más se cierra mesa, siendo menos nosotros armamos los equipos con otros grupos. Es con reserva previa, abonando el total de la entrada',
      icon: maletin,
      alignment: 'left',
    },
    {
      title: '¿Que voy a ver?',
      description: 'Vas a ver una obra de teatro, donde el inspector va a interrogar a los acusados. Vas a poder participar interrogando vos también. Además vas a tener un maletín de evidencias para resolver y jugar. Al final, vas a responder las tres incógnitas para resolver el caso. Si vos y tu grupo lo hicieron bien, ¡ganarán el juego!',
      icon:audiovisual,
      alignment: 'right',
    },
    {
        title: 'Edades',
        description: 'Recomendamos la función para mayores de 13 años, sin embargo menores hasta los 8 pueden ingresar siendo parte de un grupo de adultos.',
        icon: mascaras,
        alignment: 'left',
      },
      {
        title: 'Consumición',
        description: 'Dependerá de la hora de la función (merienda o cena) y lugar a realizarse, la función incluye un receso donde se consume. Consultanos si queres saber puntualmente la carta disponible por función, y solicitar vegetariano, vegano o celíaco. Si la entrada incluye la consumición será especificado en la info de la función.',
        icon: digital,
        alignment: 'right',
      },
  ];
  
  export default howToPlayData;