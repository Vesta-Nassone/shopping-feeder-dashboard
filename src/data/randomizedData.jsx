export const randomize = () => {
	let randomizedBest = [];
	let randomizedLeast = [];
	let randomizedRef = [];
	for (let i = 0; i < 7; i++) {
		let best = {
			s1: Math.floor(Math.random() * (150 - 0 + 1) + 0),
			s2: Math.floor(Math.random() * (150 - 0 + 1) + 0),
			s3: Math.floor(Math.random() * (150 - 0 + 1) + 0),
			s4: Math.floor(Math.random() * (150 - 0 + 1) + 0),
			s5: Math.floor(Math.random() * (150 - 0 + 1) + 0),
		};
		let least = {
			s1: Math.floor(Math.random() * (100 - 0 + 1) + 0),
			s2: Math.floor(Math.random() * (100 - 0 + 1) + 0),
			s3: Math.floor(Math.random() * (100 - 0 + 1) + 0),
			s4: Math.floor(Math.random() * (100 - 0 + 1) + 0),
			s5: Math.floor(Math.random() * (100 - 0 + 1) + 0),
		};
		let ref = {
			m1: Math.floor(Math.random() * (100 - 0 + 1) + 0),
			m2: Math.floor(Math.random() * (100 - 0 + 1) + 0),
		};
		randomizedBest.push(best);
		randomizedLeast.push(least);
		randomizedRef.push(ref);
	}
};
