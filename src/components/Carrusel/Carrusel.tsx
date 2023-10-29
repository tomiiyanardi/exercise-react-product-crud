import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
    return(
        <Carousel>
        <Carousel.Item>
            <img
            className='d-block w-100'
            style={{maxHeight:"500px", objectFit:'cover'}}
            src= "src/assets/images/img1.jpg" alt= "imagenuno"/>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        <Carousel.Item>
        <img
            className='d-block w-100'
            style={{maxHeight:"500px", objectFit:'cover'}}
            src= "src/assets/images/img2.jpg" alt= "imagendos"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src= "src/assets/images/img3.jpg" alt= "imagentres"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default Carrusel;