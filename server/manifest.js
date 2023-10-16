const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","icons/Abseiling.png","icons/Archery.png","icons/Australian Football.png","icons/Baseball.png","icons/Basketball.png","icons/Bowls.png","icons/Bush-walking.png","icons/Canoeing.png","icons/Caving.png","icons/Cricket.png","icons/Cycling.png","icons/Equestrian.png","icons/Field Athletics.png","icons/Field Hockey.png","icons/Fishing.png","icons/Football (Soccer).png","icons/Golf.png","icons/HHRI logo.png","icons/Horseback Riding.png","icons/Kayaking.png","icons/Lifesaving surf.png","icons/Long Distance Running.png","icons/Motor Cycling.png","icons/Mountain Biking.png","icons/Netball.png","icons/Oztag.png","icons/pause.png","icons/Rock Climbing.png","icons/Rowing.png","icons/Rugby League.png","icons/Rugby Union.png","icons/Sailing.png","icons/shirt.png","icons/Shooting.png","icons/slush-drink.png","icons/Softball.png","icons/sports.png","icons/stop.png","icons/Tennis.png","icons/Touch Football.png","icons/Triathlon.png","icons/tshirt.png","icons/usyd-logo.png","icons/Volleyball.png","icons/Walking (brisk).png","icons/Walking.png","icons/water-bottle.png","icons/water.png","marker-icon-2x.png","marker-icon.png","marker-shadow.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9890da64.js","app":"_app/immutable/entry/app.38ef2df5.js","imports":["_app/immutable/entry/start.9890da64.js","_app/immutable/chunks/scheduler.c020cdff.js","_app/immutable/chunks/singletons.03afb741.js","_app/immutable/chunks/index.07dc87c9.js","_app/immutable/entry/app.38ef2df5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c020cdff.js","_app/immutable/chunks/index.d67924d6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-3ca56f53.js')),
			__memo(() => import('./chunks/1-ee8e8beb.js')),
			__memo(() => import('./chunks/2-15f6058b.js')),
			__memo(() => import('./chunks/3-281aeb1f.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
