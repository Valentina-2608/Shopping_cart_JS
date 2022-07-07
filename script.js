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





