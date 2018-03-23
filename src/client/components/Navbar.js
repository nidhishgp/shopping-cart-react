import React from 'react';

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            cartCount: 4
        }
        this.showCart = this.showCart.bind(this);
    }

    render()
    {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <p className="title is-5">Shopping Cart</p>
                    </div>
                </div>
                <div className="navbar-menu is-active">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className={(this.props.cartCount > 0) ? 'is-info button': 'button'} onClick={this.showCart}>
                                <span className="icon">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                                <span>Cart {(this.props.cartCount > 0) && <strong>({this.props.cartCount})</strong> }</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    showCart()
    {
        this.props.showCart();
    }
}

export default Navbar;