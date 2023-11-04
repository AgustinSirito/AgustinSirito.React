import ProductCard from "../productCard/productCard"
import '../plantas/plantas.css'


const Plantas = () => {
    let plantas = [
        {
        "id": 1,
        "tipo":"suculenta", 
        "nombre":"Suculenta Haworthia", 
        "descripcion":"Pequeña planta suculenta", 
        "precio": 10.5,
        "stock":  5, 
        "size": "Pequeño",
        "imagen": "../src/components/img/Haworthia.jpg"
        },
        {
        "id":2,
        "tipo":"helecho", 
        "nombre":"Helecho Nephrolepis exaltata", 
        "descripcion":"Helecho colgante", 
        "precio": 15.0,
        "stock":  4, 
        "size": "Mediano",
        "imagen": "../src/components/img/Nephrolepis.jpg"
        },
        {
        "id":3,
        "tipo":"Orquídea", 
        "nombre":"Orquídea Phalaenopsis", 
        "descripcion":"Orquídea de flores grandes", 
        "precio": 20.75,
        "stock":  4, 
        "size": "Grande",
        "imagen": "../src/components/img/phalaenopsis.jpg"
        },
        {
        "id":4,
        "tipo":"trepadora", 
        "nombre":"Poto Epipremnum aureum", 
        "descripcion":"Planta trepadora de hojas verdes", 
        "precio": 12.99,
        "stock":  2, 
        "size": "Mediano",
        "imagen": "../src/components/img/epipremnum.png"
        },
        {
        "id":5,
        "tipo":"cactus", 
        "nombre":"Cactus Echinocactus grusonii", 
        "descripcion":"Orquídea de flores grandes", 
        "precio": 20.75,
        "stock":  4, 
        "size": "Grande",
        "imagen": "../src/components/img/Echinocactus.jpeg"
        }
    ]

    //react array loop
    return(
        <div class="cardContainer">
            {plantas.map(planta=>(
                <ProductCard data={planta} ></ProductCard>
            ))}
        </div>
    )
}

export default Plantas

// import Item from "./Item";
// import { Container, Row, Col } from "react-bootstrap";

// function Plantas({ products }) {
//     return (
//         <Container>
//             <Row>
//                 {products.map((product) => (
//                     <Col key={product.id} className="mt-5" xs={12} lg={4}>
//                         <Item {...product} />
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Plantas;