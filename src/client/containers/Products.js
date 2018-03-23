import React from 'react';
import ProductView from '../components/ProductView';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart, fetchProducts } from '../actions/actionCreators';

class Products extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.addProductToCart = this.addProductToCart.bind(this);
    }

    render()
    {
        const productList = this.props.products.map(product => {
            return (                
               <ProductView 
                key={product.id} 
                product={product} 
                addToCart={this.addProductToCart} 
                inCart={this.props.productsInCart.some(item => item.id === product.id)} />
            )
        });

        return (
            <div className="columns is-multiline product-list" onScroll={this.handleScroll}>                
                {productList}
                <div className="column is-12 has-text-centered">
                    {
                        this.props.loading && 
                        <span className="icon"><i className="fa fa-spinner fa-2x fa-spin"></i></span>
                    }
                </div>
            </div>
        );
    }

    handleScroll(e)
    {
        if (e.target.scrollTop >= (e.target.scrollHeight - e.target.offsetHeight)){
            if(!this.props.complete){
                this.props.fetchProducts(this.props.page);
            }
        }
    }

    addProductToCart(id)
    {
        this.props.addToCart(id, 1)
    }

}

const productsInCart = (cart, products) => {
    return products.filter(product => {
        return cart.some(item => item.id === product.id);
    })
}

const mapStateToProps = function(state) {
    return { 
        products: state.products.data,
        productsInCart: productsInCart(state.cart, state.products.data),
        page: state.products.page,
        loading: state.products.loading,
        complete: state.products.complete
    };
}

const mapDispatchToProps = dispatch => {
    return {
      addToCart: (id, quantity) => {
        dispatch(addToCart(id, quantity))
      },
      fetchProducts: (page) => {
          dispatch(fetchProducts(page));
      }
    }
  }

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Products);