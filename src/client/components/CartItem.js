import React from 'react';

class CartItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.rate}</td>
                <td>
                    <a className="button is-small" onClick={this.decrementQty}>
                        <span className="icon">
                            <i className="fa fa-minus"></i>
                        </span>
                    </a>
                    <span style={{margin: "0 10px"}}>{this.props.item.quantity}</span>
                    <a className="button is-small" onClick={this.incrementQty}>
                        <span className="icon">
                            <i className="fa fa-plus"></i>
                        </span>
                    </a>
                </td>
                <td>{this.props.item.amount}</td>
                <td>
                    <a className="button is-small is-danger" onClick={e => {this.props.removeItem()}}>
                        <span className="icon">
                            <i className="fa fa-trash-alt"></i>
                        </span>
                    </a>
                </td>
            </tr>
        );
    }

    incrementQty()
    {
        let updatedQty = this.props.item.quantity + 1;
        this.props.updateQuantity(updatedQty);
    }

    decrementQty()
    {
        let updatedQty = this.props.item.quantity - 1;
        if(updatedQty > 0){
            this.props.updateQuantity(updatedQty);
        }
    }
}

export default CartItem;