var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;


module.exports = {
	getOptions: function () {
		return [];
	},

	run: function (directory, options) {
		var packageJsonPath = path.join(directory, 'package.json');
		var packageJson = require(packageJsonPath);

		// We've read in package.json into an object.  See if the detect-cycle script exists on the scripts object
		//  if not, add it to the scripts and edit the preversion script to run it.
		if(!packageJson.scripts["detect-cycle"]) {
			packageJson.scripts["detect-cycle"] = "detect-cyclic-packages";
			if(!~packageJson.scripts.test.indexOf("detect-cycle")) {
				packageJson.scripts.test = "npm run detect-cycle && " + packageJson.scripts.test;
			}
		}

		// Write the edited package.json file out, resolve a promise when finished.
		var writePackageJson = new Promise(function (resolve, reject) {
			fs.writeFile(packageJsonPath, JSON.stringify(packageJson), function (error) {
				error ? reject(error) : resolve();
			});
		});

		// Install nocycle as a dev dependency.  Resove a Promise when finished.
		var installs = function() { 
			return new Promise(function(resolve, reject) {
				exec("npm install --save-dev detect-cyclic-packages", function(error) {
					error ? reject(error) : resolve();
				});
			});
		};

		// Return control to landscaper when everything finishes or something fails.
		return writePackageJson.then(installs).catch(function(err) {
			console.error(err);
		});
	}
};

