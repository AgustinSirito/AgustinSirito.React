import Carousel from 'react-bootstrap/Carousel';
import '../home/home.css'

const Home = ({greeting}) => {
    return (
        <>
        <div className='bienvenida'>
            <h1 className='saludoBienvenida'>{greeting}</h1>
        </div>
            <Carousel>
                <Carousel.Item >
                    <div className="d-flex align-items-center justify-content-center" >
                        <img
                            style={{ height: '400px' }}
                            src="../src/components/img/plantasdeinterior.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3 >Plantas</h3>
                    <p>Las plantas mas bellas para interior y exterior.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            style={{ height: '400px' }}
                            src="../src/components/img/macetas.jpg"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Macetas</h3>
                    <p>Las mejores macetas y para todos los gustos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center" >
                        <img
                            style={{ height: '400px' }}
                            src="../src/components/img/fertilizantes.jpg"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Fertilizantes</h3>
                    <p>Los mejores suplenetos para tus plantas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="black d-flex align-items-center justify-content-center">
                        <img
                            style={{ height: '400px' }}
                            src="../src/components/img/herramientas.jpg"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Herramientas</h3>
                    <p>Encontra todas las herramientas para tu jardin.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Home