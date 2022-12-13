const priceLink = document.querySelectorAll('.price-link');
const priceList = document.querySelectorAll('.price-list-box')

for (let i=0; i<priceLink.length; i++) {
	priceLink[i].addEventListener('click', () => {
		priceList[i].classList.toggle('active');
	})
}