import React from 'react';

class ProductView extends React.Component
{
    constructor(props)
    {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    render()
    {
        return (
            <div className="column is-3 is-desktop">                    
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img 
                                style={{width: 'auto', height: '90%', margin: 'auto'}} 
                                src={`/images/${this.props.product.image}`} 
                                alt="Placeholder image">
                            </img>
                        </figure>
                    </div>
                    <div className="card-content">                           
                        <p className="title is-4">{this.props.product.name}</p>
                        <div className="columns">
                            <div className="column">
                                <p className="title is-6">Price</p>
                                <p className="subtitle is-5">Rs. {this.props.product.price}</p>
                            </div>
                            <div className="column">
                                <p>
                                    <a className={this.props.inCart ? "button is-info": "button is-info is-outlined"} onClick={this.addToCart}>
                                        <span className="icon">
                                            <i className="fa fa-cart-plus"></i>
                                        </span>
                                        <span>Add to cart</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }

    addToCart()
    {
        this.props.addToCart(this.props.product.id);
    }
}

export default ProductView;