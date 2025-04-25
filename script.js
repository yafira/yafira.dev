const drawer = document.getElementById('myDrawer')
const drawerTab = document.getElementById('drawerTab')
const arrow = document.querySelector('.drawer-arrow')
const drawerClose = document.querySelector('.drawer-close')

// Open/Close drawer when clicking the tab
drawerTab.onclick = function () {
	if (drawer.classList.contains('open')) {
		closeDrawer()
	} else {
		openDrawer()
	}
}

// Close drawer with arrow inside
if (arrow) arrow.onclick = closeDrawer
if (drawerClose) drawerClose.onclick = closeDrawer

function openDrawer() {
	drawer.classList.add('open')
	drawerTab.textContent = 'X'
}

function closeDrawer() {
	drawer.classList.remove('open')
	drawerTab.textContent = 'ϟ + more about me'
}

// Click outside drawer to close
window.onclick = function (event) {
	if (
		drawer.classList.contains('open') &&
		!drawer.querySelector('.drawer-content').contains(event.target) &&
		event.target !== drawerTab
	) {
		closeDrawer()
	}
}

// Close drawer when scrolling significantly
let lastScrollTop = 0
window.addEventListener('scroll', function () {
	if (!drawer.classList.contains('open')) return

	let currentScroll = window.scrollY || document.documentElement.scrollTop
	if (Math.abs(currentScroll - lastScrollTop) > 100) {
		closeDrawer()
	}
	lastScrollTop = currentScroll
})

// ───── Show/Hide drawerTab based on scroll position ───── //
function checkScrollPosition() {
	if (window.scrollY > 50) {
		drawerTab.style.opacity = '0'
		drawerTab.style.pointerEvents = 'none'
	} else {
		drawerTab.style.opacity = '1'
		drawerTab.style.pointerEvents = 'auto'
	}
}

window.addEventListener('scroll', checkScrollPosition)
document.addEventListener('DOMContentLoaded', checkScrollPosition)
