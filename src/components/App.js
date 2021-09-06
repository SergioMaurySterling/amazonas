import React from 'react';
import '../css/App.css';
import { Navbar } from '../components/Navbar';
import {SecondNavbar} from '../components/SecondNavbar'
import {ThirthNavbar} from '../components/ThirthNavbar'
import {ProductDetails} from '../components/ProductDetails'
import { RelatedProductContainer } from './RelatedProductContainer';
import {Product} from '../components/Product'


/*Photos*/
import shoot from '../images/shooter.png'
import shoot2 from '../images/shooter.png'
import camtouch from '../images/camtouch.png'
import cameraandmic from '../images/cameraandmic.png'
import ps5 from '../images/ps5.png'
import ps4 from '../images/ps4.png'
import ps5_2 from '../images/ps5-2.png'
import jd from '../images/jd.png'


function App() {

  const ofertas = [
    {name:'Bigking Lente Full Fame, Aviación Aluminio 11 mm F2.8 Lente Ojo de pez de Enfoque Manual...' , price:3.449 , photo:shoot },
    {name:'Lente Manual Ojo de pez Full Fame TTArtisan Aviation Aluminio 11 mm F2.8 Marco Completo...' , price:5.699 , photo:shoot2 },
    {name:'VAK Videocamara 809 Fhd Microfono Nocturna 24mp Touch Hdmi Lente Gran Angular - Negro' , price:1.899 , photo:cameraandmic },
    {name:"VAK Cámara Digital Dsrl 3500 LCD 3' 24mp App Lentes Intercambiables" , price:8.329 , photo:camtouch },
  ]

  const history = [
    {name:'PS5 Call of Duty Black Ops: Cold War - Standard Edition - PlayStation 5' , price:1.453 , photo:ps5 },
    {name:'Ghost of Tsushima - Standard Edition - PlayStation 4' , price:999 , photo:ps4 },
    {name:'Mortal Kombat 11 Ultimate - Standard Edition - PlayStation 5' , price:1.359 , photo:ps5_2 },
    {name:"Just Dance 2021 - PS5 - Standard Edition - PlayStation 5" , price:1.019 , photo:jd },
  ]

  return (
    <React.Fragment>
      <Navbar/>
      <SecondNavbar/>
      <ThirthNavbar/>
      <ProductDetails/>
      <RelatedProductContainer>
        {ofertas.map((f) =>{
          return(
            <Product
              key={f.index}
              disscountbadge={f.disscountbadge}
              photo={f.photo}
              price={f.price}
              name={f.name}
            />
          )
        })}
      </RelatedProductContainer>
      <RelatedProductContainer>
        {history.map((f) =>{
          return(
            <Product
              key={f.index}
              disscountbadge={f.disscountbadge}
              photo={f.photo}
              price={f.price}
              name={f.name}
            />
          )
        })}
      </RelatedProductContainer>
    </React.Fragment>
  );
}

export default App;
