// take a name , the button label and return an element
module.exports = (buttonName) => {
	return `Button ${buttonName}`
}

// Ovo je CommonJS module, koji ima module.epoxrts
// ne mogu se kombinovati ESM i CommonJS moduli,
// webpack to ne dozvoljava
