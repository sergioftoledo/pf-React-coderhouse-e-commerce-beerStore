import lagerArgia from '../../assets/images/lager/pilsener/pilsener-argia.png'
import lagerArriacaCenteno from '../../assets/images/lager/pilsener/pilsener-arriaca-centeno.png'
import lagerSantaRita from '../../assets/images/lager/pilsener/pilsener-santa-rita.jpg'
import lagerCelebrator from '../../assets/images/lager/pilsener/pilsener-celebrator.png'
import lagerBlanche from '../../assets/images/lager/pilsener/pilsener-blanche.png'
import ipaDevil from '../../assets/images/lager/ipa/ipa-devil.png'
import ipaArriaca from '../../assets/images/lager/ipa/ipa-arriaca.png'
import ipaArgentum from '../../assets/images/lager/ipa/ipa-delirium-argentum.png'
import ipaVoladores from '../../assets/images/lager/ipa/ipa-cerdo-voladores.png'
import ipaVicBriew from '../../assets/images/lager/ipa/ipa-vic-briew.png'

const productos = [
    {id: 1, title: 'Argia', description: 'Cerveza rubia elaborada con malta pilsen alavesa y lúpulo Columbus de Olite junto a Chinook, Citra y Sterling de USA.', price: '330', pictureURL: lagerArgia, stock: 35},
    {id: 2, title: 'Arriaca Centeno', description: 'Cerveza color dorado pajizo con espuma blanca y cremosa de buena retención, los toques derivados del centeno, especias y naranja, se combinan con notas pináceas y un peculiar aroma a lúpulo.', price: 470, pictureURL: lagerArriacaCenteno, stock: 27},
    {id: 3, title: 'Santa Rita', description: 'Una clásica cerveza de trigo belga, turbia, suave y melosa, aromatizada con piel de naranja y semillas de cilantro.', price: 390, pictureURL: lagerSantaRita, stock: 50},
    {id: 4, title:'Celebrator', description: 'Cerveza rubia con espuma blanca y cremosa de buena retención, aromatizada con piel de naranja y semillas de cilantro.', price: 400, pictureURL: lagerCelebrator, stock: 16},
    {id: 5, title: 'Blanche de Namur', description: 'Una clásica cerveza de trigo belga, turbia, suave y melosa, aromatizada con piel de naranja y semillas de cilantro. Esta cerveza toma el nombre de Blanche de Namur, hija del conde Jean de Namur, que se caso con Magnus IV Eriksson, rey de Suecia y Noruega, y en recuerdo de su belleza, su dulzura y delicadeza, le dedicaron esta cerveza, elegida la mejor cerveza blanca del mundo en 2009, 2013, 2014 y 2019.', price: 450, pictureURL: lagerBlanche, stock: 32},
    {id: 6, title: 'Devil', description: 'Una IPA con Doble Dry Hopped, donde el sabor y el aroma del lúpulo afloran en una sensación única.', price: 440, pictureURL: ipaDevil, stock: 12},
    {id: 7, title: 'Arriaca', description: 'Presenta un amargor medio que se disipa rápidamente dejando paso al cítrico, al pino y al caramelo y galleta propio del grano utilizado. Final balanceado hacia la malta y sin amargor astringente. ', price: 540, pictureURL: ipaArriaca, stock: 46},
    {id: 8, title: 'Delirium Argentum', description: 'Creada por primera vez para la celebración del 25º aniversario de Delirium Tremens. Elaborada con tres tipos de levadura y cinco tipos de maltas distintas, dando como resultado una cerveza de cuerpo intenso y unos aromas y sabores a cítricos, pomelo y caramelo que junto con el amargor del cítrico le confieren a esta cerveza un sabor complejo, fresco y algo amargo.', price: 380, pictureURL: ipaArgentum, stock: 23},
    {id: 9, title: 'Cerdo Voladores', description: 'Cerdo VoladoresSpencer Trappist IPA se inspira en la tradición cervecera de la Costa Oeste, pero dándole el toque tradicional belga a esta cerveza que aun siendo muy aromática, ya que ha sido elaborada con lúpulos German Perle, Apollo y Cascade, aportando una clara presencia a cítricos y pino, todo ello se ve claramente matizado con notas a cereal y caramelo, equilibrando su amargor al no llegar a una presencia tan intensa de las típicas IPA americanas.', price: 430, pictureURL: ipaVoladores, stock: 'sin stock'},
    {id: 10, title: 'Vic Briew', description: 'La Vic Briew es una cerveza donde destacan los aromas a frutas tropicales como papaya, guayaba y piña, en cambio, en boca se aprecia un sabor a pino con toques resinosos.', price: 370, pictureURL: ipaVicBriew, stock: '9'},
]

export const getProduct = new Promise ( resolve => {
    setTimeout ( ()=> {
        resolve(productos)
    }, 2000)
})