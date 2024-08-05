import * as m from './Lehmer.mjs';
import * as c from '../../CLI/twoFiftySix.mjs';


let defaultSample = [];

beforeAll(() => {
	for (let i=0; i< 10; i++) {
		defaultSample.push(m.random());
	}
	// we won't run the analysis tool, but if you want to, uncomment this
	// analysisTool(); //WARNING: This logs to the console.
});
const NUMBER_OF_ITERATIONS = 100000; //For the analysis tool.

describe('Lehmer::setSeed():',()=> {
	it('Shall throw if given invalid input',() => {
		expect(() => {m.setSeed()}).toThrow();
		expect(() => {m.setSeed('0')}).toThrow();
		expect(() => {m.setSeed(null)}).toThrow();
		expect(() => {m.setSeed([100])}).toThrow();
		expect(() => {m.setSeed({val:100})}).toThrow();
		expect(() => {m.setSeed(()=>{console.log('hello world')})}).toThrow();
	});
	it('Shall set seed to 1 if given seed of 0',() => {
		m.setSeed(1);
		expect(m.random()).toBeCloseTo(0.08503244914348818);
		expect(m.random()).toBeCloseTo(0.6013526053174179);
		expect(m.random()).toBeCloseTo(0.8916112770753034);
		expect(m.random()).toBeCloseTo(0.9679557019695433);
		expect(m.random()).toBeCloseTo(0.18968977182623453);
		expect(m.random()).toBeCloseTo(0.514975824167475);
		expect(m.random()).toBeCloseTo(0.39800838818680884);
		expect(m.random()).toBeCloseTo(0.26290616545030204);
		expect(m.random()).toBeCloseTo(0.7435124515292758);
		expect(m.random()).toBeCloseTo(0.0895477696738894);

		m.setSeed(0);
		expect(m.random()).toBeCloseTo(0.08503244914348818);
		expect(m.random()).toBeCloseTo(0.6013526053174179);
		expect(m.random()).toBeCloseTo(0.8916112770753034);
		expect(m.random()).toBeCloseTo(0.9679557019695433);
		expect(m.random()).toBeCloseTo(0.18968977182623453);
		expect(m.random()).toBeCloseTo(0.514975824167475);
		expect(m.random()).toBeCloseTo(0.39800838818680884);
		expect(m.random()).toBeCloseTo(0.26290616545030204);
		expect(m.random()).toBeCloseTo(0.7435124515292758);
		expect(m.random()).toBeCloseTo(0.0895477696738894);
	});
	it('Shall have a default seed of 8675309',() => {
		m.setSeed(8675309);
		expect(m.random()).toBeCloseTo(defaultSample[0]);
		expect(m.random()).toBeCloseTo(defaultSample[1]);
		expect(m.random()).toBeCloseTo(defaultSample[2]);
		expect(m.random()).toBeCloseTo(defaultSample[3]);
		expect(m.random()).toBeCloseTo(defaultSample[4]);
		expect(m.random()).toBeCloseTo(defaultSample[5]);
		expect(m.random()).toBeCloseTo(defaultSample[6]);
		expect(m.random()).toBeCloseTo(defaultSample[7]);
		expect(m.random()).toBeCloseTo(defaultSample[8]);
		expect(m.random()).toBeCloseTo(defaultSample[9]);
	});
	it('Shall consistently output the same value when seed is reset.',() => {
		m.setSeed(2);
		expect(m.random()).toBeCloseTo(0.17006489828697635);
		m.setSeed(2);
		expect(m.random()).toBeCloseTo(0.17006489828697635);
		m.setSeed(2);
		expect(m.random()).toBeCloseTo(0.17006489828697635);
		m.setSeed(2);
		expect(m.random()).toBeCloseTo(0.17006489828697635);
		m.setSeed(2);
		expect(m.random()).toBeCloseTo(0.17006489828697635);
		
	});
});


function analysisTool() { //Intentionally unused is normal test cases.
	let bins = [];
	for (let i=0; i<100; i++) {
		bins.push(0);
	}
	let max = 0;
	for (let i=0; i<NUMBER_OF_ITERATIONS; i++) {
		let value = Math.floor(m.random()*bins.length);
		bins[value] = bins[value]+1;
		if (bins[value] > max) {
			max = bins[value];
		}
	}
	let min = max;
	bins.forEach((e) => {
		if (e < min) {
			min = e;
		}
	});
	
	const ROWS_LENGTH = 10;
	let str = ``;
	function printNum(num) {
		const colors = [c.afa,c.bfa,c.cfa,c.dfa,c.efa,c.ffa,c.fea,c.fda,c.fca,c.fba,c.faa];
		let index = Math.floor((num-min)/(max-min)*(colors.length-1));
		return `${colors[index]}${num}${c.rr}\t`;
	}
	
	for (let i=0; i< bins.length; i++) {
		if ((i+1)%ROWS_LENGTH === 1) {
			str += `${i+1}-${i+ROWS_LENGTH}:\t`
		}
		str += printNum(bins[i]);
		if ((i+1)%ROWS_LENGTH===0) {
			str += '\n';
		}
	}
	console.log('==============================\nrandom algorithm report\n==============================');
	console.log(str);
	
	
}