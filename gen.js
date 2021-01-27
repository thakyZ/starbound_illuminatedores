const fs = require('fs');

const cfg = {
	'aegisalt': 		{ color: [46, 77, 46] },
	'coal': 			{ color: [61, 61, 61] },
	'copper':			{ color: [64, 51, 46] },
	'corefragment': 	{ color: [96, 51, 46] },
	'crystal': 			{ color: [46, 51, 64] },
	'diamond': 			{ color: [46, 51, 64] },
	'durasteel': 		{ color: [46, 51, 64] },
	'ferozium': 		{ color: [46, 51, 64] },
	'gold': 			{ color: [64, 64, 38] },
	'iron': 			{ color: [51, 51, 51] },
	'platinum': 		{ color: [51, 51, 51] },
	'plutonium': 		{ color: [64, 38, 59] },
	'prisilite': 		{ color: [51, 51, 51] },
	'rubium': 			{ color: [77, 46, 46] },
	'silver': 			{ color: [81, 81, 81] },
	'solarium': 		{ color: [59, 64, 38] },
	'titanium': 		{ color: [51, 51, 51] },
	'trianglium': 		{ color: [56, 59, 48] },
	'tungsten': 		{ color: [46, 51, 64] },
	'uranium': 			{ color: [51, 120, 51] },
	'violium': 			{ color: [77, 46, 77] },

	'algaeore': 		{ color: [64, 64, 46] },
	'berlinite': 		{ color: [104, 91, 86] },
	'cinnabar': 		{ color: [46, 51, 64] },
	'corruption': 		{ color: [64, 46, 51] },
	'densinium': 		{ color: [96, 91, 94] },
	'effigium': 		{ color: [51, 51, 51] },
	'erchius': 			{ color: [46, 51, 64] },
	'fublooddiamond': 	{ color: [77, 46, 46] },
	'irradium': 		{ color: [46, 51, 64] },
	'isogen': 			{ color: [46, 51, 64] },
	'lazulite': 		{ color: [76, 81, 114] },
	'lead': 			{ color: [91, 91, 91] },
	'lunariore': 		{ color: [76, 111, 74] },
	'magnesium': 		{ color: [46, 51, 64] },
	'mascagnite': 		{ color: [116, 111, 134] },
	'moonstone': 		{ color: [51, 64, 38] },
	'neptunium': 		{ color: [111, 71, 111] },
	'penumbrite': 		{ color: [46, 51, 64] },
	'protocite': 		{ color: [64, 64, 46] },
	'pyreite': 			{ color: [64, 51, 46] },
	'quietus': 			{ color: [77, 46, 46] },
	'sulphur': 			{ color: [124, 124, 86] },
	'thorium':			{ color: [46, 51, 64] },
	'xithricite': 		{ color: [46, 51, 64] },
	'zerchesium': 		{ color: [53, 45, 52] },
  "sivite":         { color: [73, 80, 119] },
  "nocxium":        { color: [45, 124, 38] },
  "koanite":        { color: [45, 80, 103] },

	'ise4amethyst': 	{ color: [64, 46, 51] },
	'ise4electrum': 	{ color: [64, 64, 46] },
	'ise4emerald': 		{ color: [46, 64, 51] },
	'ise4ruby': 		{ color: [64, 51, 51] },
	'ise4salt': 		{ color: [51, 51, 51] },
	'ise4sapphire': 	{ color: [46, 46, 64] },
	'ise4tin': 			{ color: [51, 51, 46] },
	'ise4topaz': 		{ color: [64, 64, 46] },
	'ise4uranium': 		{ color: [51, 64, 46] },
}

const settings = {
	'default': 1,
	'dim': 0.5,
	'bright': 2
}

for(var setting in settings) {
	for(var ore in cfg) {
		if(cfg.hasOwnProperty(ore)) {
			generate(ore, cfg[ore], setting);
		}
	}
}

function generate(ore, cfg, setting) {

	var convert = function(color, setting) {
		return Math.max(0, Math.min(255, Math.floor(color * settings[setting])));
	}

	const patch = [
		{
			"op": "add",
		  	"path": "/renderParameters/radiantLight",
		  	"value": [convert(cfg.color[0], setting), convert(cfg.color[1], setting), convert(cfg.color[2], setting)],
		}];

	fs.writeFile("./src/" + setting + "/tiles/mods/" + ore + ".matmod.patch", JSON.stringify(patch, null, 2), 'utf8', function (err) {
	    if (err) {
	        return console.log(err);
	    }
	    else console.log('- ' + setting + ': ' + ore);
	});

}
