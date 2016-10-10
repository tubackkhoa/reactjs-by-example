import React from 'react';

var App = React.createClass({

  getDefaultProps:function(){
    return {
      headings:['When happened','Who did it','What they change']
    };
  },

  render: function(){
    return (
      <RecentChangesTable>      
        <RecentChangesTable.Headings headings={this.props.headings} />      
        <RecentChangesTable.Rows changeSets={this.props.changeSets} />
      </RecentChangesTable>
    );          
  }

});

var RecentChangesTable = React.createClass({
  render: function() {
    return (
      <table className="table">
      {this.props.children}
      </table>
    );
  }
});

RecentChangesTable.Heading = React.createClass({
  render: function() {
    var headingStyle = {
      backgroundColor: 'FloralWhite',
      fontSize: '19px'
    };
    return (
      <th style={headingStyle}>{this.props.heading}</th>
    );
  }
});

RecentChangesTable.Headings = React.createClass({
  render: function() {
    var headings = this.props.headings.map(function(name, index) {
      return (
        <RecentChangesTable.Heading key={index} heading={name}/>
      );
    });
    return (
      <thead>
        <tr>
        {headings}
        </tr>
      </thead>
    );
    
  }
});

RecentChangesTable.Rows = React.createClass({
  render: function() {
    var rows = this.props.changeSets.map(function(changeSet,index) {
      return (
        <RecentChangesTable.Row key={index} changeSet={changeSet} />
      );
    });
    return (
      <tbody>{rows}</tbody>
    );
  }
});


RecentChangesTable.Row = React.createClass({
  render: function() {
    var trStyle = {
      backgroundColor: 'aliceblue'
    }
    return (
      <tr style={trStyle}>
        <td>{this.props.changeSet.when}</td> 
        <td>{this.props.changeSet.who}</td> 
        <td>{this.props.changeSet.description}</td> 
      </tr>
    );
  }
});        

module.exports = App;
