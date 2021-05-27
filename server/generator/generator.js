const fs = require('fs')
const fsExtra = require('fs-extra')

const generator = (patternsArray, outputDir) => {
	const arr = [1, 2, 3]
	patternsArray.forEach(element => {
		let dir = element.split('\\')
		dir = dir[dir.length - 1]
		const elemDir = `${outputDir}\\${dir}`
		console.log(elemDir);
		fsExtra.copy(element, elemDir, (err) => {
			if (err) {
				console.log('An error occured while copying the folder.')
				return console.error(err)
			}
			console.log(`Copy completed! ${element} => ${elemDir}`)
		});
	});
	// fsExtra.copy(patternPaths, outputDir, (err) => {
	// 	if (err) {
	// 		console.log('An error occured while copying the folder.')
	// 		return console.error(err)
	// 	}
	// 	console.log('Copy completed!')
	// });

}

module.exports = generator