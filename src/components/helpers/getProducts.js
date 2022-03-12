import lagerArgia from '../../assets/images/lager/pilsener/pilsener-argia.png'
import lagerArriacaCenteno from '../../assets/images/lager/pilsener/pilsener-arriaca-centeno.png'
import lagerSantaRita from '../../assets/images/lager/pilsener/pilsener-santa-rita.jpg'
import lagerCelebrator from '../../assets/images/lager/pilsener/pilsener-celebrator.png'
import lagerBlanche from '../../assets/images/lager/pilsener/pilsener-blanche.png'
import ipaDevil from '../../assets/images/ale/ipa/ipa-devil.png'
import ipaArriaca from '../../assets/images/ale/ipa/ipa-arriaca.png'
import ipaArgentum from '../../assets/images/ale/ipa/ipa-delirium-argentum.png'
import ipaVoladores from '../../assets/images/ale/ipa/ipa-cerdo-voladores.png'
import ipaVicBriew from '../../assets/images/ale/ipa/ipa-vic-briew.png'
import stoutArriacaRusian from '../../assets/images/ale/stout/stout-arriaca-russian.png'
import stoutHardDecision from '../../assets/images/ale/stout/stout-hard-decision.png'
import stoutOrganicChoco from '../../assets/images/ale/stout/stout-organic-chocolate.png'
import stoutVicimperial from '../../assets/images/ale/stout/stout-vic-imperial.png'

const productos = [
    {id: '1', category:'pilsener', title: 'Argia', description: 'Cerveza rubia elaborada con malta pilsen alavesa y lúpulo Columbus de Olite junto a Chinook, Citra y Sterling de USA.', price: '330', pictureURL: lagerArgia, stock: 35},
    {id: '2', category:'pilsener', title: 'Arriaca Centeno', description: 'Cerveza color dorado pajizo con espuma blanca y cremosa de buena retención, los toques derivados del centeno, especias y naranja, se combinan con notas pináceas y un peculiar aroma a lúpulo.', price: 470, pictureURL: lagerArriacaCenteno, stock: 27},
    {id: '3', category:'pilsener', title: 'Santa Rita', description: 'Una clásica cerveza de trigo belga, turbia, suave y melosa, aromatizada con piel de naranja y semillas de cilantro.', price: 390, pictureURL: lagerSantaRita, stock: 'sin stock'},
    {id: '4', category:'pilsener', title:'Celebrator', description: 'Cerveza rubia con espuma blanca y cremosa de buena retención, aromatizada con piel de naranja y semillas de cilantro.', price: 400, pictureURL: lagerCelebrator, stock: 16},
    {id: '5', category:'pilsener', title: 'Blanche de Namur', description: 'Una clásica cerveza de trigo belga, turbia, suave y melosa, aromatizada con piel de naranja y semillas de cilantro. Fue elegida la mejor cerveza blanca del mundo en 2009, 2013, 2014 y 2019.', price: 450, pictureURL: lagerBlanche, stock: 32},
    {id: '6', category:'ipa', title: 'Devil', description: 'Una IPA con Doble Dry Hopped, donde el sabor y el aroma del lúpulo afloran en una sensación única.', price: 440, pictureURL: ipaDevil, stock: 12},
    {id: '7', category:'ipa', title: 'Arriaca', description: 'Presenta un amargor medio que se disipa rápidamente dejando paso al cítrico, al pino y al caramelo y galleta propio del grano utilizado. Final balanceado hacia la malta y sin amargor astringente. ', price: 540, pictureURL: ipaArriaca, stock: 46},
    {id: '8', category:'ipa', title: 'Delirium Argentum', description: 'Creada por primera vez para la celebración del 25º aniversario de Delirium Tremens. Elaborada con tres tipos de levadura y cinco tipos de maltas distintas, dando como resultado una cerveza de cuerpo intenso y unos aromas y sabores a cítricos, pomelo y caramelo.', price: 380, pictureURL: ipaArgentum, stock: 23},
    {id: '9', category:'ipa', title: 'Cerdo Voladores', description: 'Cerdo VoladoresSpencer Trappist IPA se inspira en la tradición cervecera de la Costa Oeste, pero dándole el toque tradicional belga a esta cerveza que aun siendo muy aromática, ya que ha sido elaborada con lúpulos German Perle, Apollo y Cascade, aportando una clara presencia a cítricos y pino.', price: 430, pictureURL: ipaVoladores, stock: 'sin stock'},
    {id: '10', category:'ipa', title: 'Vic Briew', description: 'La Vic Briew es una cerveza donde destacan los aromas a frutas tropicales como papaya, guayaba y piña, en cambio, en boca se aprecia un sabor a pino con toques resinosos.', price: 370, pictureURL: ipaVicBriew, stock: 9},
    {id: '11',category:'stout', title: 'Arriaca Russian', description: 'Russian Imperial Stout con un denso cuerpo, equilibrada, con notas de café y regaliz en aroma y un sabor en boca donde apreciamos notas a chocolate negro, café y regaliz.', price: 439, pictureURL: stoutArriacaRusian, stock: 22},
    {id: '12',category:'stout', title: 'Hard decision', description: 'Extra Pale Ale, Oats, Chocolate, Black & Carafa Special III Malts, Roasted Barley, Flaked Oats & Barley.', price: 459, pictureURL: stoutHardDecision, stock: 3},
    {id: '13',category:'stout', title: 'Organic Chocolate', description: 'Lanzada al mercado en el 2012, esta Stout elaborada con ingredientes organicos, destaca por la presencia del cacao que domina el conjunto, aunque no resulta empalagosa gracias al equilibrio del dulzor y el amargor, consiguiendo una excelente cerveza de cuerpo ligero y sabrosa,.', price: 570, pictureURL: stoutOrganicChoco, stock: 37},
    {id: '14',category:'stout', title: 'Vic Imperial', description: 'Cerveza negra de gran densidad y con una compacta espuma. De aromas penetrantes a torrefacto, café, regaliz y moras.', price: 310, pictureURL: stoutVicimperial, stock: 11},
]

export const getProduct = new Promise ( resolve => {
    setTimeout ( ()=> {
        resolve(productos)
    }, 2000)
})