import { useParams } from "react-router-dom";
import plantasDB from "../../DB/plantasDB";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    let datosProducto = plantasDB.filter(planta=>{return(planta.id==id)})[0]
    return (
            <>
                <ItemDetail datosProducto={datosProducto}/>
            </>
    );
};

export default ItemDetailContainer;
