export const CartWidget = ({iconCart}) => {
    return (
        <div className="cartWidget" style={ {display: (iconCart === 0) ? "none" : "flex" } }>
            <img
                alt="logo"
                src="https://i.ibb.co/XkPbBpy/carrito-ferreteria-amarillo.png"
                width="52"
                height="45"
                className="d-inline-block aling-top"
            />
            <p>{iconCart}</p>
        </div>
    );
}