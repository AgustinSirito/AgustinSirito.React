const ItemListContainer = ({greeting}) => {
    return(
        <div className="bienvenida">
        <h1 className="saludoBienvenida">{greeting}</h1>
        </div>
    )
}

// export default ItemListContainer

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Spinner } from "react-bootstrap";
// import mock from "../../mock";
// import Plantas from "../plantas/plantas";

// const ItemListContainer = ({ greeting }) => {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const { categoryId } = useParams();

//     useEffect(() => {
//         setIsLoading(true);

//         function getProducts() {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve(mock);
//                 }, 2000);
//             });
//         }

//         getProducts(categoryId) //
//             .then((products) => {
//                 if (categoryId) {
//                     setProducts(
//                         products.filter((product) => product.category === categoryId)
//                     );
//                 } else {
//                     setProducts(products);
//                 }
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     }, [categoryId]);

//     return (
//         <div>
//             <h1>{greeting}</h1>
//             {isLoading ? (
//                 <div className="d-flex justify-content-center">
//                     <Spinner animation="grow" className="m-5" />
//                 </div>
//             ) : (
//                 <Plantas products={products} />
//             )}
//         </div>
//     );
// };

// export default ItemListContainer;
