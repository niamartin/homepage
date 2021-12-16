/* PERSONAL HOMEPAGE */

console.log('Welcome to my personal homepage!')

/* OFFSCREEN MENU */
function nav(tgl = 'toggle' , cls = 'nav-active') {
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click', 
            () => { document.body.classList.toggle(cls) }
        )
    }
} 
nav()


/* OFFSCREEN MENU */
const designs = document.querySelector ('.designs');
const motion = document.querySelector ('.motion');
const photo = document.querySelector ('.photo');
const portbar = document.querySelector ('.port-bar');

const dactive = document.querySelector ('#des');
const mactive = document.querySelector ('#mot');
const pactive = document.querySelector ('#pho');
const back = document.querySelector ('#back');


dactive.addEventListener('click',() => {
    designs.classList.add('designs-active'),
    portbar.classList.add('port-active')
}
)
mactive.addEventListener('click',() => {
    motion.classList.add('motion-active'),
    portbar.classList.add('port-active')
}
)
pactive.addEventListener('click',() => {
    photo.classList.add('photo-active'),
    portbar.classList.add('port-active')
}
)
back.addEventListener('click',() => {
    designs.classList.remove('designs-active','motion-active','photo-active'),
    motion.classList.remove('designs-active','motion-active','photo-active'),
    photo.classList.remove('designs-active','motion-active','photo-active'),
    portbar.classList.remove('port-active')
}
)
// FORWARDS CLICKS

function toggle(clickTarget, toggleTarget, toggleClass) {
	if (document.querySelector(clickTarget) && document.querySelector(toggleTarget)) {
		let ct = document.querySelector(clickTarget)
		let tt = document.querySelector(toggleTarget)
		let tc = toggleClass.replace('.', '')
		ct.addEventListener('click', () => {
			tt.classList.toggle(tc)
		})
	} else { 
		if (!document.querySelector(clickTarget) && !document.querySelector(toggleTarget)) {
		console.error(`unable to find ${clickTarget} and ${toggleTarget}, check your code`)
		} else if (!document.querySelector(clickTarget)) {
			console.error(`unable to find ${clickTarget}`)
		} else {
			console.error(`unable to find ${toggleTarget}`)
		}
	}
	
}






