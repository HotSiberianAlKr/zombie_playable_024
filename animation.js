(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_atlas_P_1", frames: [[0,252,250,202],[0,0,250,250],[252,0,200,200],[252,202,200,200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.boxingglove = function() {
	this.initialize(ss["animation_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.injector = function() {
	this.initialize(ss["animation_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.potion = function() {
	this.initialize(ss["animation_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.virus = function() {
	this.initialize(ss["animation_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.hitarea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("AoLIMQjZjZAAkzQAAkyDZjZQDZjZEyAAQEzAADZDZQDZDZAAEyQAAEzjZDZQjZDZkzAAQkyAAjZjZg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-74,148.1,148.1);


(lib.virus_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit_area
	this.instance = new lib.hitarea();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hitarea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// img
	this.instance_1 = new lib.virus();
	this.instance_1.setTransform(-48,-48,0.4783,0.4783);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AnuHvQhehegzhwQg7iEgBidQAAkhDNjNQDNjMEhAAQEiAADMDMQB4B4AyCUQAkBqAAB4QgBEijNDNQjMDMkiAAQkhAAjNjMg");
	this.shape.setTransform(-0.4,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AoAEhQh3h3gyiUQAzBwBeBeQDNDNEiAAQEhAADMjNQDNjNABkhQAAh5gkhqQA8CEgBCcQAAEhjMDNQjNDNkhAAQkiAAjNjNg");
	this.shape_1.setTransform(3.8,26.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.virus_btn, new cjs.Rectangle(-74,-74,148.1,149.7), null);


(lib.potion_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit_area
	this.instance = new lib.hitarea();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hitarea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// img
	this.instance_1 = new lib.potion();
	this.instance_1.setTransform(-65,-69,0.6502,0.6502);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AnuHvQhehegzhwQg7iEgBidQAAkhDNjNQDNjMEhAAQEiAADMDMQB4B4AyCUQAkBqAAB4QgBEijNDNQjMDMkiAAQkhAAjNjMg");
	this.shape.setTransform(-0.4,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AoAEhQh3h3gyiUQAzBwBeBeQDNDNEiAAQEhAADMjNQDNjNABkhQAAh5gkhqQA8CEgBCcQAAEhjMDNQjNDNkhAAQkiAAjNjNg");
	this.shape_1.setTransform(3.8,26.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.potion_1, new cjs.Rectangle(-74,-74,148.1,149.7), null);


(lib.injector_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit_area
	this.instance = new lib.hitarea();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hitarea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// img
	this.instance_1 = new lib.injector();
	this.instance_1.setTransform(-54,-54,0.4305,0.4305);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AnuHvQhehegzhwQg7iEgBidQAAkhDNjNQDNjMEhAAQEiAADMDMQB4B4AyCUQAkBqAAB4QgBEijNDNQjMDMkiAAQkhAAjNjMg");
	this.shape.setTransform(-0.4,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AoAEhQh3h3gyiUQAzBwBeBeQDNDNEiAAQEhAADMjNQDNjNABkhQAAh5gkhqQA8CEgBCcQAAEhjMDNQjNDNkhAAQkiAAjNjNg");
	this.shape_1.setTransform(3.8,26.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.injector_btn, new cjs.Rectangle(-74,-74,148.1,149.7), null);


(lib.boxing_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit_area
	this.instance = new lib.hitarea();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.hitarea(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// imagemask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnuHuQhehegzhvQg7iEAAidQAAkhDMjNQDNjMEhAAQEiAADMDMQB4B4AyCUQAjBqAAB4QABEijODMQjMDOkigBQkhABjNjOg");

	// img
	this.instance_1 = new lib.boxingglove();
	this.instance_1.setTransform(-58,-39,0.4431,0.4431);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AnuHvQhehegzhwQg7iEgBidQAAkhDNjNQDNjMEhAAQEiAADMDMQB4B4AyCUQAkBqAAB4QgBEijNDNQjMDMkiAAQkhAAjNjMg");
	this.shape.setTransform(-0.4,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("AoAEhQh3h3gyiUQAzBwBeBeQDNDNEiAAQEhAADMjNQDNjNABkhQAAh5gkhqQA8CEgBCcQAAEhjMDNQjNDNkhAAQkiAAjNjNg");
	this.shape_1.setTransform(3.8,26.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boxing_btn, new cjs.Rectangle(-74,-74,148.1,149.7), null);


(lib.buttons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.boxing.addEventListener('click', () => {
		  window.onButton1Click();
		});
		
		this.injector.addEventListener('click', () => {
		  window.onButton2Click();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// virus_png
	this.virus = new lib.virus_btn();
	this.virus.name = "virus";
	this.virus.setTransform(-0.1,114.35,1.0125,1.0125,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.virus).wait(1));

	// potion_png
	this.potion = new lib.potion_1();
	this.potion.name = "potion";
	this.potion.setTransform(-0.1,-322.6,1.0125,1.0125,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.potion).wait(1));

	// injector_png
	this.injector = new lib.injector_btn();
	this.injector.name = "injector";
	this.injector.setTransform(0,324.5,1.0125,1.0125);

	this.timeline.addTween(cjs.Tween.get(this.injector).wait(1));

	// balloon_png
	this.boxing = new lib.boxing_btn();
	this.boxing.name = "boxing";
	this.boxing.setTransform(-0.1,-114.35,1.0125,1.0125,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.boxing).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.576)").s().p("EgKoA91QkakZAAmPIgBAAMAAAhmYIACAAIAAAAQAAmQEakaQEakZGOAAQGOAAEaEZQEbEaAAGQIgCAuMAAABlRIAAAZQAAGPkaEZQkZEamPAAQmOAAkakag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttons, new cjs.Rectangle(-96.3,-423.9,192.7,847.8), null);


(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons
	this.buttons_v = new lib.buttons();
	this.buttons_v.name = "buttons_v";
	this.buttons_v.setTransform(147.3,0.55,0.5446,0.5446);

	this.timeline.addTween(cjs.Tween.get(this.buttons_v).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.game, new cjs.Rectangle(94.8,-230.3,105.00000000000001,461.8), null);


// stage content:
(lib.animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this
		
		resizeBanner = function () {
			var WT = window.innerWidth
			var HT = window.innerHeight
		
			if (WT >= HT) {
		
				var t = 1080 / (window.innerWidth)
				//		root.ui.y= ((window.innerWidth - (window.innerHeight ))/2)*t
				//		root.ui2.y = (((window.innerWidth - (window.innerHeight ))/2)*t) + window.innerHeight*t
				root.game.x	= 0
		
			} else {
		
				var t = 1080/(window.innerHeight)
				//		root.ui.y = 0
				//		root.ui.x = ((window.innerHeight - (window.innerWidth ))/2)*t + window.innerWidth*t	
				root.game.x = ((window.innerHeight - (window.innerWidth ))/2)*t
				//		root.ui2.y = 1080
			}
		}
		
		resizeBanner()
		
		window.onresize = function () {
			resizeBanner()
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// game
	this.game = new lib.game();
	this.game.name = "game";
	this.game.setTransform(0,536.8);

	this.timeline.addTween(cjs.Tween.get(this.game).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(528,528.3,564.0999999999999,563.3);
// library properties:
lib.properties = {
	id: '3AA6032C71BB0E46B012923A4985E5BB',
	width: 1080,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"animation_atlas_P_1.png", id:"animation_atlas_P_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3AA6032C71BB0E46B012923A4985E5BB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;