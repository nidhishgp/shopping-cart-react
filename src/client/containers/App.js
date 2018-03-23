import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../containers/Products';
import Cart from '../containers/Cart';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/actionCreators';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            cartView: false
        }
        this.showCart = this.showCart.bind(this);
        this.closeCart = this.closeCart.bind(this);
    }

    render()
    {
        return (            
            <div className="container main-content">
                <Navbar cartCount={this.props.cart.length} showCart={this.showCart} />
                <div className="section">
                    <Products />
                </div>
                {
                    this.state.cartView && <Cart onClose={this.closeCart} />
                }
            </div>
        );
    }

    componentDidMount()
    {
        this.props.fetchProducts(this.props.page);
    }

    showCart()
    {
        this.setState({
            cartView: true
        });
    }

    closeCart()
    {
        this.setState({
            cartView: false
        })
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        page: state.products.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (page) => {
            dispatch(fetchProducts(page));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);