/* twoFiftySix.  A small and compact RGB color selector for ANSI 256 output.

1) import it how you want
2) use the code for a color.  RGB values range from a-f.
		aaa is black.
		faa is red
		ffa is yellow
		aaf is blue
		fca is orange. get the picture?
3) an underscore before the name sets the background.
		_faa is a red background.
4) use 'rr' to reset the cursor.
5) a single letter sets the greyscale values.  They range from a-x.

Concate them into your strings and you're good to go!
Example usage:

import * as c from './twoFiftySix.mjs';
console.log(`hello! This text is ${c.faa}red${c.rr} and this text is ${c.caf}purple${c.rr}.`);

*/


export const aaa = `\u001b[38;5;16m`;
export const aab = `\u001b[38;5;17m`;
export const aac = `\u001b[38;5;18m`;
export const aad = `\u001b[38;5;19m`;
export const aae = `\u001b[38;5;20m`;
export const aaf = `\u001b[38;5;21m`;
export const aba = `\u001b[38;5;22m`;
export const abb = `\u001b[38;5;23m`;
export const abc = `\u001b[38;5;24m`;
export const abd = `\u001b[38;5;25m`;
export const abe = `\u001b[38;5;26m`;
export const abf = `\u001b[38;5;27m`;
export const aca = `\u001b[38;5;28m`;
export const acb = `\u001b[38;5;29m`;
export const acc = `\u001b[38;5;30m`;
export const acd = `\u001b[38;5;31m`;
export const ace = `\u001b[38;5;32m`;
export const acf = `\u001b[38;5;33m`;
export const ada = `\u001b[38;5;34m`;
export const adb = `\u001b[38;5;35m`;
export const adc = `\u001b[38;5;36m`;
export const add = `\u001b[38;5;37m`;
export const ade = `\u001b[38;5;38m`;
export const adf = `\u001b[38;5;39m`;
export const aea = `\u001b[38;5;40m`;
export const aeb = `\u001b[38;5;41m`;
export const aec = `\u001b[38;5;42m`;
export const aed = `\u001b[38;5;43m`;
export const aee = `\u001b[38;5;44m`;
export const aef = `\u001b[38;5;45m`;
export const afa = `\u001b[38;5;46m`;
export const afb = `\u001b[38;5;47m`;
export const afc = `\u001b[38;5;48m`;
export const afd = `\u001b[38;5;49m`;
export const afe = `\u001b[38;5;50m`;
export const aff = `\u001b[38;5;51m`;
export const baa = `\u001b[38;5;52m`;
export const bab = `\u001b[38;5;53m`;
export const bac = `\u001b[38;5;54m`;
export const bad = `\u001b[38;5;55m`;
export const bae = `\u001b[38;5;56m`;
export const baf = `\u001b[38;5;57m`;
export const bba = `\u001b[38;5;58m`;
export const bbb = `\u001b[38;5;59m`;
export const bbc = `\u001b[38;5;60m`;
export const bbd = `\u001b[38;5;61m`;
export const bbe = `\u001b[38;5;62m`;
export const bbf = `\u001b[38;5;63m`;
export const bca = `\u001b[38;5;64m`;
export const bcb = `\u001b[38;5;65m`;
export const bcc = `\u001b[38;5;66m`;
export const bcd = `\u001b[38;5;67m`;
export const bce = `\u001b[38;5;68m`;
export const bcf = `\u001b[38;5;69m`;
export const bda = `\u001b[38;5;70m`;
export const bdb = `\u001b[38;5;71m`;
export const bdc = `\u001b[38;5;72m`;
export const bdd = `\u001b[38;5;73m`;
export const bde = `\u001b[38;5;74m`;
export const bdf = `\u001b[38;5;75m`;
export const bea = `\u001b[38;5;76m`;
export const beb = `\u001b[38;5;77m`;
export const bec = `\u001b[38;5;78m`;
export const bed = `\u001b[38;5;79m`;
export const bee = `\u001b[38;5;80m`;
export const bef = `\u001b[38;5;81m`;
export const bfa = `\u001b[38;5;82m`;
export const bfb = `\u001b[38;5;83m`;
export const bfc = `\u001b[38;5;84m`;
export const bfd = `\u001b[38;5;85m`;
export const bfe = `\u001b[38;5;86m`;
export const bff = `\u001b[38;5;87m`;
export const caa = `\u001b[38;5;88m`;
export const cab = `\u001b[38;5;89m`;
export const cac = `\u001b[38;5;90m`;
export const cad = `\u001b[38;5;91m`;
export const cae = `\u001b[38;5;92m`;
export const caf = `\u001b[38;5;93m`;
export const cba = `\u001b[38;5;94m`;
export const cbb = `\u001b[38;5;95m`;
export const cbc = `\u001b[38;5;96m`;
export const cbd = `\u001b[38;5;97m`;
export const cbe = `\u001b[38;5;98m`;
export const cbf = `\u001b[38;5;99m`;
export const cca = `\u001b[38;5;100m`;
export const ccb = `\u001b[38;5;101m`;
export const ccc = `\u001b[38;5;102m`;
export const ccd = `\u001b[38;5;103m`;
export const cce = `\u001b[38;5;104m`;
export const ccf = `\u001b[38;5;105m`;
export const cda = `\u001b[38;5;106m`;
export const cdb = `\u001b[38;5;107m`;
export const cdc = `\u001b[38;5;108m`;
export const cdd = `\u001b[38;5;109m`;
export const cde = `\u001b[38;5;110m`;
export const cdf = `\u001b[38;5;111m`;
export const cea = `\u001b[38;5;112m`;
export const ceb = `\u001b[38;5;113m`;
export const cec = `\u001b[38;5;114m`;
export const ced = `\u001b[38;5;115m`;
export const cee = `\u001b[38;5;116m`;
export const cef = `\u001b[38;5;117m`;
export const cfa = `\u001b[38;5;118m`;
export const cfb = `\u001b[38;5;119m`;
export const cfc = `\u001b[38;5;120m`;
export const cfd = `\u001b[38;5;121m`;
export const cfe = `\u001b[38;5;122m`;
export const cff = `\u001b[38;5;123m`;
export const daa = `\u001b[38;5;124m`;
export const dab = `\u001b[38;5;125m`;
export const dac = `\u001b[38;5;126m`;
export const dad = `\u001b[38;5;127m`;
export const dae = `\u001b[38;5;128m`;
export const daf = `\u001b[38;5;129m`;
export const dba = `\u001b[38;5;130m`;
export const dbb = `\u001b[38;5;131m`;
export const dbc = `\u001b[38;5;132m`;
export const dbd = `\u001b[38;5;133m`;
export const dbe = `\u001b[38;5;134m`;
export const dbf = `\u001b[38;5;135m`;
export const dca = `\u001b[38;5;136m`;
export const dcb = `\u001b[38;5;137m`;
export const dcc = `\u001b[38;5;138m`;
export const dcd = `\u001b[38;5;139m`;
export const dce = `\u001b[38;5;140m`;
export const dcf = `\u001b[38;5;141m`;
export const dda = `\u001b[38;5;142m`;
export const ddb = `\u001b[38;5;143m`;
export const ddc = `\u001b[38;5;144m`;
export const ddd = `\u001b[38;5;145m`;
export const dde = `\u001b[38;5;146m`;
export const ddf = `\u001b[38;5;147m`;
export const dea = `\u001b[38;5;148m`;
export const deb = `\u001b[38;5;149m`;
export const dec = `\u001b[38;5;150m`;
export const ded = `\u001b[38;5;151m`;
export const dee = `\u001b[38;5;152m`;
export const def = `\u001b[38;5;153m`;
export const dfa = `\u001b[38;5;154m`;
export const dfb = `\u001b[38;5;155m`;
export const dfc = `\u001b[38;5;156m`;
export const dfd = `\u001b[38;5;157m`;
export const dfe = `\u001b[38;5;158m`;
export const dff = `\u001b[38;5;159m`;
export const eaa = `\u001b[38;5;160m`;
export const eab = `\u001b[38;5;161m`;
export const eac = `\u001b[38;5;162m`;
export const ead = `\u001b[38;5;163m`;
export const eae = `\u001b[38;5;164m`;
export const eaf = `\u001b[38;5;165m`;
export const eba = `\u001b[38;5;166m`;
export const ebb = `\u001b[38;5;167m`;
export const ebc = `\u001b[38;5;168m`;
export const ebd = `\u001b[38;5;169m`;
export const ebe = `\u001b[38;5;170m`;
export const ebf = `\u001b[38;5;171m`;
export const eca = `\u001b[38;5;172m`;
export const ecb = `\u001b[38;5;173m`;
export const ecc = `\u001b[38;5;174m`;
export const ecd = `\u001b[38;5;175m`;
export const ece = `\u001b[38;5;176m`;
export const ecf = `\u001b[38;5;177m`;
export const eda = `\u001b[38;5;178m`;
export const edb = `\u001b[38;5;179m`;
export const edc = `\u001b[38;5;180m`;
export const edd = `\u001b[38;5;181m`;
export const ede = `\u001b[38;5;182m`;
export const edf = `\u001b[38;5;183m`;
export const eea = `\u001b[38;5;184m`;
export const eeb = `\u001b[38;5;185m`;
export const eec = `\u001b[38;5;186m`;
export const eed = `\u001b[38;5;187m`;
export const eee = `\u001b[38;5;188m`;
export const eef = `\u001b[38;5;189m`;
export const efa = `\u001b[38;5;190m`;
export const efb = `\u001b[38;5;191m`;
export const efc = `\u001b[38;5;192m`;
export const efd = `\u001b[38;5;193m`;
export const efe = `\u001b[38;5;194m`;
export const eff = `\u001b[38;5;195m`;
export const faa = `\u001b[38;5;196m`;
export const fab = `\u001b[38;5;197m`;
export const fac = `\u001b[38;5;198m`;
export const fad = `\u001b[38;5;199m`;
export const fae = `\u001b[38;5;200m`;
export const faf = `\u001b[38;5;201m`;
export const fba = `\u001b[38;5;202m`;
export const fbb = `\u001b[38;5;203m`;
export const fbc = `\u001b[38;5;204m`;
export const fbd = `\u001b[38;5;205m`;
export const fbe = `\u001b[38;5;206m`;
export const fbf = `\u001b[38;5;207m`;
export const fca = `\u001b[38;5;208m`;
export const fcb = `\u001b[38;5;209m`;
export const fcc = `\u001b[38;5;210m`;
export const fcd = `\u001b[38;5;211m`;
export const fce = `\u001b[38;5;212m`;
export const fcf = `\u001b[38;5;213m`;
export const fda = `\u001b[38;5;214m`;
export const fdb = `\u001b[38;5;215m`;
export const fdc = `\u001b[38;5;216m`;
export const fdd = `\u001b[38;5;217m`;
export const fde = `\u001b[38;5;218m`;
export const fdf = `\u001b[38;5;219m`;
export const fea = `\u001b[38;5;220m`;
export const feb = `\u001b[38;5;221m`;
export const fec = `\u001b[38;5;222m`;
export const fed = `\u001b[38;5;223m`;
export const fee = `\u001b[38;5;224m`;
export const fef = `\u001b[38;5;225m`;
export const ffa = `\u001b[38;5;226m`;
export const ffb = `\u001b[38;5;227m`;
export const ffc = `\u001b[38;5;228m`;
export const ffd = `\u001b[38;5;229m`;
export const ffe = `\u001b[38;5;230m`;
export const fff = `\u001b[38;5;231m`;
export const a = `\u001b[38;5;232m`;
export const b = `\u001b[38;5;233m`;
export const c = `\u001b[38;5;234m`;
export const d = `\u001b[38;5;235m`;
export const e = `\u001b[38;5;236m`;
export const f = `\u001b[38;5;237m`;
export const g = `\u001b[38;5;238m`;
export const h = `\u001b[38;5;239m`;
export const i = `\u001b[38;5;240m`;
export const j = `\u001b[38;5;241m`;
export const k = `\u001b[38;5;242m`;
export const l = `\u001b[38;5;243m`;
export const m = `\u001b[38;5;244m`;
export const n = `\u001b[38;5;245m`;
export const o = `\u001b[38;5;246m`;
export const p = `\u001b[38;5;247m`;
export const q = `\u001b[38;5;248m`;
export const r = `\u001b[38;5;249m`;
export const s = `\u001b[38;5;250m`;
export const t = `\u001b[38;5;251m`;
export const u = `\u001b[38;5;252m`;
export const v = `\u001b[38;5;253m`;
export const w = `\u001b[38;5;254m`;
export const x = `\u001b[38;5;255m`;
export const _aaa = `\u001b[48;5;16m`;
export const _aab = `\u001b[48;5;17m`;
export const _aac = `\u001b[48;5;18m`;
export const _aad = `\u001b[48;5;19m`;
export const _aae = `\u001b[48;5;20m`;
export const _aaf = `\u001b[48;5;21m`;
export const _aba = `\u001b[48;5;22m`;
export const _abb = `\u001b[48;5;23m`;
export const _abc = `\u001b[48;5;24m`;
export const _abd = `\u001b[48;5;25m`;
export const _abe = `\u001b[48;5;26m`;
export const _abf = `\u001b[48;5;27m`;
export const _aca = `\u001b[48;5;28m`;
export const _acb = `\u001b[48;5;29m`;
export const _acc = `\u001b[48;5;30m`;
export const _acd = `\u001b[48;5;31m`;
export const _ace = `\u001b[48;5;32m`;
export const _acf = `\u001b[48;5;33m`;
export const _ada = `\u001b[48;5;34m`;
export const _adb = `\u001b[48;5;35m`;
export const _adc = `\u001b[48;5;36m`;
export const _add = `\u001b[48;5;37m`;
export const _ade = `\u001b[48;5;48m`;
export const _adf = `\u001b[48;5;39m`;
export const _aea = `\u001b[48;5;40m`;
export const _aeb = `\u001b[48;5;41m`;
export const _aec = `\u001b[48;5;42m`;
export const _aed = `\u001b[48;5;43m`;
export const _aee = `\u001b[48;5;44m`;
export const _aef = `\u001b[48;5;45m`;
export const _afa = `\u001b[48;5;46m`;
export const _afb = `\u001b[48;5;47m`;
export const _afc = `\u001b[48;5;48m`;
export const _afd = `\u001b[48;5;49m`;
export const _afe = `\u001b[48;5;50m`;
export const _aff = `\u001b[48;5;51m`;
export const _baa = `\u001b[48;5;52m`;
export const _bab = `\u001b[48;5;53m`;
export const _bac = `\u001b[48;5;54m`;
export const _bad = `\u001b[48;5;55m`;
export const _bae = `\u001b[48;5;56m`;
export const _baf = `\u001b[48;5;57m`;
export const _bba = `\u001b[48;5;58m`;
export const _bbb = `\u001b[48;5;59m`;
export const _bbc = `\u001b[48;5;60m`;
export const _bbd = `\u001b[48;5;61m`;
export const _bbe = `\u001b[48;5;62m`;
export const _bbf = `\u001b[48;5;63m`;
export const _bca = `\u001b[48;5;64m`;
export const _bcb = `\u001b[48;5;65m`;
export const _bcc = `\u001b[48;5;66m`;
export const _bcd = `\u001b[48;5;67m`;
export const _bce = `\u001b[48;5;68m`;
export const _bcf = `\u001b[48;5;69m`;
export const _bda = `\u001b[48;5;70m`;
export const _bdb = `\u001b[48;5;71m`;
export const _bdc = `\u001b[48;5;72m`;
export const _bdd = `\u001b[48;5;73m`;
export const _bde = `\u001b[48;5;74m`;
export const _bdf = `\u001b[48;5;75m`;
export const _bea = `\u001b[48;5;76m`;
export const _beb = `\u001b[48;5;77m`;
export const _bec = `\u001b[48;5;78m`;
export const _bed = `\u001b[48;5;79m`;
export const _bee = `\u001b[48;5;80m`;
export const _bef = `\u001b[48;5;81m`;
export const _bfa = `\u001b[48;5;82m`;
export const _bfb = `\u001b[48;5;83m`;
export const _bfc = `\u001b[48;5;84m`;
export const _bfd = `\u001b[48;5;85m`;
export const _bfe = `\u001b[48;5;86m`;
export const _bff = `\u001b[48;5;87m`;
export const _caa = `\u001b[48;5;88m`;
export const _cab = `\u001b[48;5;89m`;
export const _cac = `\u001b[48;5;90m`;
export const _cad = `\u001b[48;5;91m`;
export const _cae = `\u001b[48;5;92m`;
export const _caf = `\u001b[48;5;93m`;
export const _cba = `\u001b[48;5;94m`;
export const _cbb = `\u001b[48;5;95m`;
export const _cbc = `\u001b[48;5;96m`;
export const _cbd = `\u001b[48;5;97m`;
export const _cbe = `\u001b[48;5;98m`;
export const _cbf = `\u001b[48;5;99m`;
export const _cca = `\u001b[48;5;100m`;
export const _ccb = `\u001b[48;5;101m`;
export const _ccc = `\u001b[48;5;102m`;
export const _ccd = `\u001b[48;5;103m`;
export const _cce = `\u001b[48;5;104m`;
export const _ccf = `\u001b[48;5;105m`;
export const _cda = `\u001b[48;5;106m`;
export const _cdb = `\u001b[48;5;107m`;
export const _cdc = `\u001b[48;5;108m`;
export const _cdd = `\u001b[48;5;109m`;
export const _cde = `\u001b[48;5;110m`;
export const _cdf = `\u001b[48;5;111m`;
export const _cea = `\u001b[48;5;112m`;
export const _ceb = `\u001b[48;5;113m`;
export const _cec = `\u001b[48;5;114m`;
export const _ced = `\u001b[48;5;115m`;
export const _cee = `\u001b[48;5;116m`;
export const _cef = `\u001b[48;5;117m`;
export const _cfa = `\u001b[48;5;118m`;
export const _cfb = `\u001b[48;5;119m`;
export const _cfc = `\u001b[48;5;120m`;
export const _cfd = `\u001b[48;5;121m`;
export const _cfe = `\u001b[48;5;122m`;
export const _cff = `\u001b[48;5;123m`;
export const _daa = `\u001b[48;5;124m`;
export const _dab = `\u001b[48;5;125m`;
export const _dac = `\u001b[48;5;126m`;
export const _dad = `\u001b[48;5;127m`;
export const _dae = `\u001b[48;5;128m`;
export const _daf = `\u001b[48;5;129m`;
export const _dba = `\u001b[48;5;130m`;
export const _dbb = `\u001b[48;5;131m`;
export const _dbc = `\u001b[48;5;132m`;
export const _dbd = `\u001b[48;5;133m`;
export const _dbe = `\u001b[48;5;134m`;
export const _dbf = `\u001b[48;5;135m`;
export const _dca = `\u001b[48;5;136m`;
export const _dcb = `\u001b[48;5;137m`;
export const _dcc = `\u001b[48;5;148m`;
export const _dcd = `\u001b[48;5;139m`;
export const _dce = `\u001b[48;5;140m`;
export const _dcf = `\u001b[48;5;141m`;
export const _dda = `\u001b[48;5;142m`;
export const _ddb = `\u001b[48;5;143m`;
export const _ddc = `\u001b[48;5;144m`;
export const _ddd = `\u001b[48;5;145m`;
export const _dde = `\u001b[48;5;146m`;
export const _ddf = `\u001b[48;5;147m`;
export const _dea = `\u001b[48;5;148m`;
export const _deb = `\u001b[48;5;149m`;
export const _dec = `\u001b[48;5;150m`;
export const _ded = `\u001b[48;5;151m`;
export const _dee = `\u001b[48;5;152m`;
export const _def = `\u001b[48;5;153m`;
export const _dfa = `\u001b[48;5;154m`;
export const _dfb = `\u001b[48;5;155m`;
export const _dfc = `\u001b[48;5;156m`;
export const _dfd = `\u001b[48;5;157m`;
export const _dfe = `\u001b[48;5;158m`;
export const _dff = `\u001b[48;5;159m`;
export const _eaa = `\u001b[48;5;160m`;
export const _eab = `\u001b[48;5;161m`;
export const _eac = `\u001b[48;5;162m`;
export const _ead = `\u001b[48;5;163m`;
export const _eae = `\u001b[48;5;164m`;
export const _eaf = `\u001b[48;5;165m`;
export const _eba = `\u001b[48;5;166m`;
export const _ebb = `\u001b[48;5;167m`;
export const _ebc = `\u001b[48;5;168m`;
export const _ebd = `\u001b[48;5;169m`;
export const _ebe = `\u001b[48;5;170m`;
export const _ebf = `\u001b[48;5;171m`;
export const _eca = `\u001b[48;5;172m`;
export const _ecb = `\u001b[48;5;173m`;
export const _ecc = `\u001b[48;5;174m`;
export const _ecd = `\u001b[48;5;175m`;
export const _ece = `\u001b[48;5;176m`;
export const _ecf = `\u001b[48;5;177m`;
export const _eda = `\u001b[48;5;178m`;
export const _edb = `\u001b[48;5;179m`;
export const _edc = `\u001b[48;5;180m`;
export const _edd = `\u001b[48;5;181m`;
export const _ede = `\u001b[48;5;182m`;
export const _edf = `\u001b[48;5;183m`;
export const _eea = `\u001b[48;5;184m`;
export const _eeb = `\u001b[48;5;185m`;
export const _eec = `\u001b[48;5;186m`;
export const _eed = `\u001b[48;5;187m`;
export const _eee = `\u001b[48;5;188m`;
export const _eef = `\u001b[48;5;189m`;
export const _efa = `\u001b[48;5;190m`;
export const _efb = `\u001b[48;5;191m`;
export const _efc = `\u001b[48;5;192m`;
export const _efd = `\u001b[48;5;193m`;
export const _efe = `\u001b[48;5;194m`;
export const _eff = `\u001b[48;5;195m`;
export const _faa = `\u001b[48;5;196m`;
export const _fab = `\u001b[48;5;197m`;
export const _fac = `\u001b[48;5;198m`;
export const _fad = `\u001b[48;5;199m`;
export const _fae = `\u001b[48;5;200m`;
export const _faf = `\u001b[48;5;201m`;
export const _fba = `\u001b[48;5;202m`;
export const _fbb = `\u001b[48;5;203m`;
export const _fbc = `\u001b[48;5;204m`;
export const _fbd = `\u001b[48;5;205m`;
export const _fbe = `\u001b[48;5;206m`;
export const _fbf = `\u001b[48;5;207m`;
export const _fca = `\u001b[48;5;208m`;
export const _fcb = `\u001b[48;5;209m`;
export const _fcc = `\u001b[48;5;210m`;
export const _fcd = `\u001b[48;5;211m`;
export const _fce = `\u001b[48;5;212m`;
export const _fcf = `\u001b[48;5;213m`;
export const _fda = `\u001b[48;5;214m`;
export const _fdb = `\u001b[48;5;215m`;
export const _fdc = `\u001b[48;5;216m`;
export const _fdd = `\u001b[48;5;217m`;
export const _fde = `\u001b[48;5;218m`;
export const _fdf = `\u001b[48;5;219m`;
export const _fea = `\u001b[48;5;220m`;
export const _feb = `\u001b[48;5;221m`;
export const _fec = `\u001b[48;5;222m`;
export const _fed = `\u001b[48;5;223m`;
export const _fee = `\u001b[48;5;224m`;
export const _fef = `\u001b[48;5;225m`;
export const _ffa = `\u001b[48;5;226m`;
export const _ffb = `\u001b[48;5;227m`;
export const _ffc = `\u001b[48;5;228m`;
export const _ffd = `\u001b[48;5;229m`;
export const _ffe = `\u001b[48;5;230m`;
export const _fff = `\u001b[48;5;231m`;
export const _a = `\u001b[48;5;232m`;
export const _b = `\u001b[48;5;233m`;
export const _c = `\u001b[48;5;234m`;
export const _d = `\u001b[48;5;235m`;
export const _e = `\u001b[48;5;236m`;
export const _f = `\u001b[48;5;237m`;
export const _g = `\u001b[48;5;238m`;
export const _h = `\u001b[48;5;239m`;
export const _i = `\u001b[48;5;240m`;
export const _j = `\u001b[48;5;241m`;
export const _k = `\u001b[48;5;242m`;
export const _l = `\u001b[48;5;243m`;
export const _m = `\u001b[48;5;244m`;
export const _n = `\u001b[48;5;245m`;
export const _o = `\u001b[48;5;246m`;
export const _p = `\u001b[48;5;247m`;
export const _q = `\u001b[48;5;248m`;
export const _r = `\u001b[48;5;249m`;
export const _s = `\u001b[48;5;250m`;
export const _t = `\u001b[48;5;251m`;
export const _u = `\u001b[48;5;252m`;
export const _v = `\u001b[48;5;253m`;
export const _w = `\u001b[48;5;254m`;
export const _x = `\u001b[48;5;255m`;
export const rr = `\u001b[36;0m`;