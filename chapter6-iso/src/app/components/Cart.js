var React = require('react');
var Item = require('./Item');

var Cart = React.createClass({
  getDefaultProps: function() {
    return {
      cart: {
        title: '',
        items: []
      }            
    }
  },  
  render: function() {
    var cartItems = this.props.cart.items.map(function(c, index) {
      return (
        <Item key={index} item={c} />
      );
    });
    return (
      <div id="cart">
        <h2>{this.props.cart.title}</h2>
        <div id="total">Total: <b>{this.props.cart.items.length}</b></div>
        <div>{cartItems}</div>        
      </div>
    );
  }
});

module.exports = Cart;