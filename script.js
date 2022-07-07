/* Script */


/* Add product to basket */

let add_btns=document.querySelectorAll('.add_btn');
for(let i=0; i< add_btns.length; i++){
add_btns[i].addEventListener('click',addToBasket);
}

function addToBasket(event){

/* Add new item */
let add_btn=event.target;
let add_btn_parent=add_btn.parentElement;
let add_btn_grandparent=add_btn_parent.parentElement;
let itemCaption=add_btn_grandparent.children[1].innerText;
let itemPrice=add_btn_grandparent.children[2].innerHTML;
let itemImage=add_btn_grandparent.children[0].src;

let basket_modal=document.getElementById('basket_modal');
let info_product=document.createElement('div');
info_product.classList.add('info_product');
info_product.innerHTML=`<div class="itemCaption">${itemCaption}</div>
<div class="itemImage"><img src=${itemImage}></div>
<div class="itemPrice"><span>Price:</span><span class="numberPrice"> ${itemPrice}</span></div>
<div class="itemQuantity">Quantity:
<input type="number" class="number" value="1">
</div>

<div class="itemTotalPrice"><span>Total Price:</span><span class="numberTotalPrice">${itemPrice}</span></div>

<div class="itemRemove"><input type="button" class="remove_btn" value="Remove"></div>
`


basket_modal.appendChild(info_product);


/* Add count of items in basket */
let info_products_length=document.querySelectorAll('.info_product').length;

let count_items=document.querySelector('.count_items');
count_items.innerHTML=info_products_length;

let basket_count=document.querySelector('.basket_count');
basket_count.innerHTML=count_items.innerHTML;
let text_items=document.querySelector('.text_items');
if (count_items.innerHTML==0 || count_items.innerHTML==1){
text_items.innerHTML=' '+'item';
}
else if (count_items.innerHTML>1){
basket_count.innerHTML=count_items.innerHTML+' ';
text_items.innerHTML='items';
}



/* Update info_cart, count Total Price */

let quantity_fields=document.querySelectorAll('.number');
for (let i=0; i< quantity_fields.length; i++){
quantity_fields[i].addEventListener('change', updateTotalPrice);
grandTotal();
}
function updateTotalPrice(event){
number=event.target;
number_parent=number.parentElement.parentElement;
price_field=number_parent.getElementsByClassName('numberPrice')[0].innerHTML;
total_price_field=number_parent.getElementsByClassName('numberTotalPrice')[0];
price_field_number=price_field.substring(0,price_field.length-1);
total_price_field.innerHTML=+price_field_number*number.value+'Є';
grandTotal();
if (isNaN(number.value) || number.value <= 0){
	number.value = 1;
}
}


/* Addition price to basket */
function grandTotal(){
let grand_total_price=document.querySelectorAll('.total_price')[0];

let total_price_fields=document.querySelectorAll('.numberTotalPrice');
let suma=0;
for(let i=0; i< total_price_fields.length; i++){
	let total_price_field_string=total_price_fields[i].innerHTML;
	price_field_number=+total_price_field_string.substring(0,total_price_field_string.length-1);	
	suma+=price_field_number;
}
grand_total_price.innerHTML=suma + 'Є';
}





/* Remove item */


let remove_btns=document.querySelectorAll('.remove_btn');
for(let i=0; i< remove_btns.length; i++){
remove_btns[i].addEventListener('click',removeItem);
}

function removeItem(event){
remove_btn=event.target;
remove_btn.grandparent=remove_btn.parentElement.parentElement;
remove_btn.grandparent.remove();
let info_products_length=document.querySelectorAll('.info_product').length;
grandTotal();

/* Change count of items in basket */
count_items.innerHTML=info_products_length;
basket_count.innerHTML=count_items.innerHTML;

if (count_items.innerHTML==0 ||  count_items.innerHTML==1){
text_items.innerHTML=' '+'item';
}
else if (count_items.innerHTML>1){
basket_count.innerHTML=count_items.innerHTML+' ';
text_items.innerHTML='items';
}
}













}














/* Show and hide modal_basket */

let basket = document.querySelector('.basket');
basket.addEventListener('click', openBasket);
	
function openBasket(){
     if(basket_modal.style.display ==='none'){
            basket_modal.style.display = "block";
			basket_modal.classList.add('modal_show');
      }else{
            basket_modal.style.display = "none";
      }
}





