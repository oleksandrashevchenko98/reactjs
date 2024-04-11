import pizzas from './data'; 
import '../../css/menu.css';


const Menu = () => {
    return (
        <ul>
            {pizzas.map(pizza => (
                <li key={pizza.id} className="pizza">
                    <img src={pizza.imageUrl} alt={pizza.name} className="pizza__image" />
                    <div className="pizza__info">
                        <p className="pizza__name">{pizza.name}</p>
                        <p className="pizza__ingredients">{pizza.ingredients.join(', ')}</p>
                        <div className="pizza__actions">
                            {pizza.soldOut ? (
                                <p className="pizza__price">Sold out</p>
                            ) : (
                                <>
                                    <p className="pizza__price">€{pizza.unitPrice.toFixed(2)}</p>
                                    <button className="button">Add to cart</button>
                                </>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Menu