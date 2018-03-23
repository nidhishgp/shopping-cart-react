import React from 'react';
import {connect} from 'react-redux';
import { 
    removeFromCart, 
    emptyCart, 
    changeQuantity
} from '../actions/actionCreators';
import CartItem from '../components/CartItem';

class Cart extends React.Component
{
    constructor(props)
    {
        super(props);
        this.closeCart = this.closeCart.bind(this);
        this.checkout  = this.checkout.bind(this);
    }

    render()
    {
        const cartItems = this.props.productsInCart.map((item) => {
            return (
                <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={value => this.props.changeQuantity(item.id, value)}
                    removeItem={e => this.props.removeItem(item.id)} />
            );
        });

        return (
            <div className="modal is-active">
                <div className="modal-background" onClick={this.closeCart}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Cart</p>
                        <button className="delete" aria-label="close" onClick={this.closeCart}></button>
                    </header>
                    <section className="modal-card-body">
                        <table className="table is-fullwidth">
                            <thead>
                                <tr>
                                    <th>Product name</th>
                                    <th>Rate(Rs.)</th>
                                    <th>Quantity</th>
                                    <th>Amount(Rs.)</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems}
                            </tbody>
                        </table>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={this.checkout}>Checkout</button>
                        <button className="button" onClick={this.closeCart}>Continue</button>
                    </footer>
                </div>
            </div>
        );
    }

    checkout()
    {
        this.props.emptyCart();
        this.closeCart();
    }

    closeCart()
    {
        this.props.onClose();
    }
}

const productsInCart = (cart, products) => {
    return cart.map(item => {
        let productInCart = products.find(product => product.id == item.id);
        let cartItem = Object.assign({}, item, {
            name: productInCart.name,
            rate: productInCart.price,
            amount: productInCart.price * item.quantity
        });
        return cartItem;
    });
}

const mapStateToProps = function(state) {
    return { 
        productsInCart: productsInCart(state.cart, state.products.data)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem : (id) => {
            dispatch(removeFromCart(id));
        },
        emptyCart : () => {
            dispatch(emptyCart());
        },
        changeQuantity: (id, quantity) => {
            dispatch(changeQuantity(id, quantity))
        }
    }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Cart);