/*
Simple implementation of Lehmer pseudo random algorithm.

Future plans:
Allow for the creation of a seed object through a constructor function.  This can be passed as option parameter to existing functions to allow for local controlled seeds.
*/

const RANDOM_SEED = 8675309;

const Lehmer = {
	m: 0x7fffffff,
	a: 48271,
	c: 12345,
	seed: RANDOM_SEED,
	state: RANDOM_SEED,
}
export function random() {
	Lehmer.state = (Lehmer.a * Lehmer.state) % Lehmer.m;
	return Lehmer.state / (Lehmer.m);
}
export function setSeed(val) {
	if (typeof val !== 'number') {
		throw new Error(`Lehmer::setSeed(): Received invalid input: ${val}`);
	}
	if (val === 0) {
		val ++;
	}
	Lehmer.seed = val;
	Lehmer.state = val;
	random();
}

random();
