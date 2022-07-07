/* Script */
















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





