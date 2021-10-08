export const CartWidget = ({iconCart}) => {
    return (
        <div className="cartWidget">
            <img
                alt="logo"
                src="https://i.ibb.co/XkPbBpy/carrito-ferreteria-amarillo.png"
                width="52"
                height="45"
                className="d-inline-block aling-top"
            />
            <p style={{ opacity: (iconCart === 0) ? "0" : "1" }}>{iconCart}</p>
        </div>
    );
}