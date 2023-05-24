import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Carrito.png/1270px-Carrito.png";
    return (
    <div>
        <img src={imgCarrito} className='imagen' alt="Carrito de compras" />
        <p>10</p>
    </div>
  )
}

export default CartWidget