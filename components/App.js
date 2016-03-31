var React = require('react');
var ReactDOM = require('react-dom');
var NewRestaurantForm = require('./newRestaurantForm.js');

var restaurantInfo = {
	name : 'somename',
	address: 'some street'
}

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        
        <NewRestaurantForm restaurantInfo={restaurantInfo}/>
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
