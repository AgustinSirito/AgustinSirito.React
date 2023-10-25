
import '../productCard/ProductCard.css'

const ProductCard = ({data}) => {
let link = 'plantas/' + data.id
    return(
        <div class="card"> 
            
            <div class="cardContainer">
                <a href={link}>
                    <h4><b>{data.nombre}</b></h4>
                    <p>imagen</p>
                </a>
                <p><b>{data.descripcion}</b></p>
                <p>Precio: <b>{data.precio} $ </b></p>
                <p>Cantidad: </p>
                <input value={data.cantidad} min="0" type="number"/>
            </div>
        </div>
    )
}

export default ProductCard