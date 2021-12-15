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
function designs(tgl = 'des-enter' , cls = 'designs-active') {
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click', 
            () => { document.body.classList.toggle(cls) }
        )
    }
} 
designs()
function motion(tgl = 'mot-enter' , cls = 'motion-active') {
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click', 
            () => { document.body.classList.toggle(cls) }
        )
    }
} 
motion()
function photo(tgl = 'photo-enter' , cls = 'photo-active') {
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click', 
            () => { document.body.classList.toggle(cls) }
        )
    }
} 
photo()
function back(tgl = 'port-back' , cls = 'designs-active') {
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click', 
            () => { document.body.classList.toggle(cls) }
        )
    }
} 
back()
function back2(tgl = 'port-back' , cls = 'motion-active') {
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click', 
            () => { document.body.classList.toggle(cls) }
        )
    }
} 

back2()
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







