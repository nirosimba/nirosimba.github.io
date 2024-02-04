const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const projectsBtn = document.getElementById('projectsBtn');
const homePg = document.getElementById('homePg');
const aboutPg = document.getElementById('aboutPg');
const projectsPg = document.getElementById('projectsPg');
const avatar = document.getElementById('avatar');

function c(x) {
	if (x.classList.contains('hide')) {
		x.classList.toggle('hide');
	}
}

function n(x) {
	if (!x.classList.contains('hide')) {
		x.classList.toggle('hide');
	}
}

function rez(a, b, c, d, e, f, g, h, i) {
	a.classList.toggle('hide');
	b.classList.toggle('hide');
	if (a === homeBtn) {
		c.classList.add('avatar1');
		c.classList.remove('hide');
	} else {
		c.classList.remove('avatar1');
		c.classList.add('hide');
	}
	d(f);
	d(g);
	e(h);
	e(i);
}

homeBtn.addEventListener('click', () => {
	rez(
		homeBtn,
		homePg,
		avatar,
		c,
		n,
		aboutBtn,
		projectsBtn,
		aboutPg,
		projectsPg
	);
});

aboutBtn.addEventListener('click', () => {
	rez(
		aboutBtn,
		aboutPg,
		avatar,
		c,
		n,
		homeBtn,
		projectsBtn,
		homePg,
		projectsPg
	);
});

projectsBtn.addEventListener('click', () => {
	rez(
		projectsBtn,
		projectsPg,
		avatar,
		c,
		n,
		homeBtn,
		aboutBtn,
		homePg,
		aboutPg
	);
});
