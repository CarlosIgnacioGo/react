import './ItemDetail.css';

export const ItemDetail = ({producto}) => {
   
    return (
        <div>

            <img src={producto.img} />
            <h1>{producto.name}</h1>
            <p>{producto.valor}</p>
            <p>{producto.stock}</p>
            <p>{producto.detail}</p>
        </div>
    )
}