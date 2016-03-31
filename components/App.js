var React = require('react');
var ReactDOM = require('react-dom');
var Restaurant = require('./Restaurant');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
        <Restaurant />
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
