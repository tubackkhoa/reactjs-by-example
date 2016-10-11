var React = require('react');

var Item = React.createClass({
  render: function() {
    return(
      <li className="cart-item">
        {this.props.item.title} - ${this.props.item.price}
      </li>
    )
  }
});

module.exports = Item;