import nav from './nav';
import { top, bottom } from './footer';
// var Button = require('./button');
import Button from './button';
import { makeColorStyle } from './button-styles';

// Ne mogu se kombinovati ESM i CommonJS moduli
/* kad uradimo npm install, imamo node_modules/.bin folder
u tom folderu su executables kojima mozemo da pristupamo
iz scripts sekcije u package.json fajla

Webpack podrzava i commonjs i esm module, zato treba koristiti ESM - vec su podrzani
i sa njima se lako koristi treeshaking*/

/* webpacka pokrece node, i u webpacku su sve commonjs moduli.
module.exports (defualt export)
exports.foo = foo; named export
*/

/* Bolje su named importi nego import R from ramda, jer kad imamo named
onda webpack moze da uradi analizu sta koristimo a sta ne.*/
console.log(nav(), top, bottom, Button('My First Button'));
console.log(makeColorStyle('cyan'));
/*
kad isompajliramo graph, mozemo da pokrenemo sa node dist/main.js
mozemo u nodeu da pokrenemo jer nemamo jos uvek DOM zavisnosti, tako da case nas
program raditi i u node okruzenju
*/
