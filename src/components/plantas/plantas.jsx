import ProductCard from "../productCard/productCard"

const Plantas = () => {
    let plantas = [
        {
        "id":1,
        "tipo":"suculenta", 
        "nombre":"Suculenta Haworthia", 
        "descripcion":"Pequeña planta suculenta", 
        "precio": 10.5,
        "stock":  5, 
        "size": "Pequeño",
        "imagen": "./img/Haworthia.jpg"
        },
        {
        "id":2,
        "tipo":"helecho", 
        "nombre":"Helecho Nephrolepis exaltata", 
        "descripcion":"Helecho colgante", 
        "precio": 15.0,
        "stock":  4, 
        "size": "Mediano",
        "imagen": "./img/Nephrolepis.jpg"
        }
    ]
    
    //react array loop
    return(
        <div>
            {plantas.map(planta=>(
                <ProductCard data={planta} ></ProductCard>
            ))}
        </div>
    )
}

export default Plantas