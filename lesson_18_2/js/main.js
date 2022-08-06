const tabs = document.querySelectorAll('.tabs-header-title');
const cont = document.querySelectorAll('.tabs-content');

for (let i=0; i<tabs.length; i++) {
	tabs[i].addEventListener('click', () => {
		for(let t=0; t<tabs.length; t++) {
			tabs[t].classList.remove('active');
			cont[t].classList.remove('active');
		}
		tabs[i].classList.add('active');
		cont[i].classList.add('active')
	})
}