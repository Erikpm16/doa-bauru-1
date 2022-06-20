import { Carousel, Image } from 'react-bootstrap';
import banner1 from '../telas/img/banner1.jpg';
import banner2 from '../telas/img/banner2.jpg';
import banner3 from '../telas/img/banner3.jpg';
import { useState } from 'react';

function Carouseltela() {

  const [images, setImages] = useState([banner1, banner2, banner3]);

  return (
    <Carousel fade className='banner' >
      {images.map((image) => (
        <Carousel.Item>
          <Image src={image} fluid={true} className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carouseltela;