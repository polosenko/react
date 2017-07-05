var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({
      open: !this.state.open
    });
  },
  getInitialState: function(){
    return {
      open: true,
    }
  },
  handleItemClick: function(item) {
    this.setState({
      open: false,
      itemTitle: item,
    });
  },
  render: function() {
    console.log('1', this.state);
    var list = this.props.items.map(function(item){
      return <ListItem
                item={item}
                whenItemClicked={this.handleItemClick}
                className={() => this.state.itemTitle === item ? "active" : "" }
              />
    }.bind(this));

    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-warning"
        title={this.state.itemTitle || this.props.title}
      />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>
  }
});
