var React = require('react');


//props: restaurantInfo = {
//	name : 'somename',
//	address: 'some street'
//}

var NewRestaurantForm = React.createClass({
  render: function () {
    return (
      <div id='NewRestaurantForm'>
        <form action="http://localhost:3000/createRestaurant" method="post" enctype="application/x-www-form-urlencoded">
		Restaurant Name:
		<input type="text" name="name" value={this.props.restaurantInfo.name}/>

		<br/><br/>
		Address:<br/>
		
		Building Number:<input type="text" name="buildingNumber"/><br/>
		Street:<input type="text" name="streetName"/><br/>
		Zipcode:<input type="text" name="zipcode"/><br/><br/>
		
		Borough:<br/>
		<input type="radio" name="borough" value="Manhattan"/>Manhattan<br/>
		<input type="radio" name="borough" value="Brooklyn"/>Brooklyn<br/>
		<input type="radio" name="borough" value="Bronx"/>Bronx<br/>
		<input type="radio" name="borough" value="Queens"/>Queens<br/>
		<input type="radio" name="borough" value="Staten Island"/>Staten Island
		<br/><br/>
		Cuisine:
		<input type="text" name="cuisine"/><br/>

		<input type="submit"/>
	</form>
      </div>
    )
  }
});

module.exports = NewRestaurantForm;


