$(function(){

var $ulOrder=$('#ulOrder');
var $name=$('#name');
var $drink=$('#drink');

function addOrder(order)
{
$ulOrder.append('<li><strong>Name</strong>: '+ order.name+'<br><strong>Drink</strong>: '+order.drink+'<br><button class="remove" data-id="'+order.id+'">X</button></li>');
}
$.ajax({
	type: 'GET',
	url: 'http://rest.learncode.academy/api/learncode/friends',
	success: function(orders){
	//orders is an array of orders, where each element of an array has two components(index, name of item)
		
		$.each(orders, function(i, order){

						addOrder(order);										
				});
	 	},
	error: function()
	 { alert('Error occured');
	}

});

$('#addOrder').on('click', function(){

var order={
	name: $name.val(),
	drink: $drink.val(),
};


$.ajax({
type: 'POST',
url: 'http://rest.learncode.academy/api/learncode/friends',
data: order,
success: function(newOrder)
{
addOrder(newOrder);
},
//Two things that are happening
//1. TYPE POST will post to the API
//2. Success will display the item in the <ul>
error: function()
	 { alert('Error occured while entering');
	}
});

});

$ulOrder.delegate('.remove', 'click', function(){

var $li= $(this).closest('li');

$.ajax({

type: 'DELETE',
url: 'http://rest.learncode.academy/api/learncode/friends/'+ $(this).attr('data-id'),
success: function(){
	$li.remove();
}

});

});

});



