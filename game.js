const canvas = document.getElementById("canvas_rider")
	, ctx = canvas.getContext('2d', { alpha: false, desynchronized: true })
	, dpr = window.devicePixelRatio;

const resizeCanvas = () => {
	if (!canvas || !ctx) return;

	const rect = canvas.getBoundingClientRect();
	const width = Math.floor(rect.width * dpr);
	const height = Math.floor(rect.height * dpr);

	// if (width === canvas.width && height === canvas.height) return;

	canvas.width = width;
	canvas.height = height;

	configCtx();
};

const configCtx = () => {
	ctx.fillStyle = '#fff';
	ctx.lineCap = 'round';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 2 * dpr;
	ctx.strokeStyle = '#000';
};

new ResizeObserver(resizeCanvas)
	.observe(canvas, { box: 'border-box' });
resizeCanvas();

!function(track = loop = null) {
	const tool = {
		draw: {
			boxSize: 25,
			config() {
				ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
				ctx.lineWidth = 1;
				ctx.globalAlpha = 1;
				ctx.fillStyle = '#fff';
				ctx.strokeStyle = '#000';
			},
			left() {
				for (let i = 0; i < this.boxSize * 8; i += this.boxSize) {
					if (i == this.boxSize * 3 || i == this.boxSize * 5) continue;
					ctx.beginPath();
					ctx.moveTo(this.boxSize, i);
					ctx.lineTo(this.boxSize, i + this.boxSize);
					ctx.lineTo(0, i + this.boxSize);
					ctx.stroke();
					ctx.fillStyle = "#fff";
					ctx.fillRect(0, i, this.boxSize, this.boxSize);
					ctx.strokeStyle = ctx.fillStyle = "#000";
					ctx.beginPath();
					switch (i / this.boxSize) {
					case 0:
						ctx.fillRect(7, 5, 4, 14);
						ctx.fillRect(14, 5, 4, 14);
						break;
					case 1:
						ctx.fillRect(7, i + 5, 2, 16);
						ctx.moveTo(9, i + 12.5);
						ctx.lineTo(18, i + 20);
						ctx.lineTo(18, i + 5);
						ctx.fill();
						break;
					case 2:
						ctx.fillRect(3, i + 5, 2, 16);
						ctx.moveTo(5, i + 12.5);
						ctx.lineTo(13, i + 20);
						ctx.lineTo(13, i + 5);
						ctx.moveTo(13, i + 12.5);
						ctx.lineTo(21, i + 20);
						ctx.lineTo(21, i + 5);
						ctx.fill();
						break;
					case 4:
						ctx.moveTo(0, i);
						ctx.lineTo(this.boxSize, i);
						ctx.stroke();
						ctx.strokeStyle = "#777";
						ctx.beginPath();
						for (var s = 0; s < 360; s+=30) {
							ctx.moveTo(12.5, i + 12.5);
							ctx.lineTo(12.5 + 8 * Math.cos(s * Math.PI / 180), i + 12.5 + 8 * Math.sin(s * Math.PI / 180));
						}
						ctx.stroke();
						ctx.strokeStyle = "#000";
						ctx.lineWidth = 2.5;
						ctx.beginPath();
						ctx.arc(12.5, i + 12.5, 8, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.lineWidth = 1;
						break;
					case 6:
						ctx.moveTo(0, i);
						ctx.lineTo(this.boxSize, i);
						ctx.stroke();
						ctx.fillStyle = "#000";
						ctx.lineWidth = 2;
						ctx.shadowColor = "#000";
						ctx.shadowOffsetX = 1;
						ctx.shadowOffsetY = 1;
						ctx.shadowBlur = 3;
						ctx.beginPath();
						ctx.moveTo(6, i + 19);
						ctx.lineTo(19, i + 6);
						ctx.stroke();
						ctx.shadowColor = "#ffffff00";
						break;
					case 7:
						ctx.lineWidth = 2;
						ctx.moveTo(6, i + 14.5);
						ctx.lineTo(6, i + 19);
						ctx.lineTo(9.5, i + 19);
						ctx.moveTo(19, i + 14.5);
						ctx.lineTo(19, i + 19);
						ctx.lineTo(14.5, i + 19);
						ctx.moveTo(19, i + 9.5);
						ctx.lineTo(19, i + 6);
						ctx.lineTo(14.5, i + 6);
						ctx.moveTo(9.5, i + 6);
						ctx.lineTo(6, i + 6);
						ctx.lineTo(6, i + 9.5);
						ctx.stroke()
					}
					ctx.strokeStyle = "#000";
				}
				ctx.fillStyle = '#fff';
			},
			right() {
				const right = canvas.width / dpr;
				for (let i = 0; i < this.boxSize * 18; i += this.boxSize) {
					if (i == this.boxSize * 7 || i == this.boxSize * 16) continue;
					// ctx.rect(right - this.boxSize, i, this.boxSize, this.boxSize);
					// ctx.stroke();
					// ctx.fill();
					ctx.beginPath();
					ctx.moveTo(right - this.boxSize, i);
					ctx.lineTo(right - this.boxSize, i + this.boxSize);
					ctx.lineTo(right, i + this.boxSize);
					ctx.stroke();
					ctx.fillStyle = "#fff";
					ctx.fillRect(right - this.boxSize, i, this.boxSize, this.boxSize);
					ctx.beginPath();
					switch (i / this.boxSize) {
					case 0:
						ctx.fillStyle = "#000";
						ctx.arc(right - 12.5, i + 12.5, 2.5, 0, 2 * Math.PI);
						ctx.fill();
						break;
					case 1:
						ctx.fillStyle = "#CCC";
						ctx.arc(right - 12.5, i + 12.5, 2.5, 0, 2 * Math.PI);
						ctx.fill();
						break;
					case 2:
						ctx.strokeStyle = ctx.fillStyle = "#000";
						ctx.lineWidth = 2;
						ctx.beginPath();
						ctx.moveTo(right - 7, i + 8);
						ctx.lineTo(right - 16, i + 17);
						ctx.stroke();
						ctx.fill();
						break;
					case 3:
						ctx.lineWidth = 2;
						ctx.fillStyle = ctx.strokeStyle = "#CCC";
						ctx.beginPath();
						ctx.moveTo(right - 7, i + 8);
						ctx.lineTo(right - 16, i + 17);
						ctx.stroke();
						ctx.fill();
						break;
					case 4:
						ctx.strokeStyle = ctx.fillStyle = "#FFB6C1";
						ctx.beginPath();
						ctx.arc(right - 12.5, i + 12.5, 6, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						break;
					case 5:
						ctx.fillRect(right - 13, i + 8, 2, 10);
						ctx.fillRect(right - 17, i + 12, 10, 2);
						ctx.beginPath();
						ctx.moveTo(right - 16, i + 8);
						ctx.lineTo(right - 8, i + 8);
						ctx.lineTo(right - 12, i + 14 - 12 * Math.cos(Math.PI / 6));
						ctx.moveTo(right - 16, i + 18);
						ctx.lineTo(right - 8, i + 18);
						ctx.lineTo(right - 12, i + 12 + 12 * Math.cos(Math.PI / 6));
						ctx.moveTo(right - 17, i + 9);
						ctx.lineTo(right - 17, i + 17);
						ctx.lineTo(right - 11 - 12 * Math.cos(Math.PI / 6), i + 13);
						ctx.moveTo(right - 7, i + 9);
						ctx.lineTo(right - 7, i + 17);
						ctx.lineTo(right - 13 + 12 * Math.cos(Math.PI / 6), i + 13);
						ctx.fill();
						break;
					case 6:
						ctx.strokeStyle = "#CCC";
						ctx.beginPath();
						ctx.moveTo(right - 17, i + 5);
						ctx.lineTo(right - 17, i + 19);
						ctx.moveTo(right - 12, i + 5);
						ctx.lineTo(right - 12, i + 19);
						ctx.moveTo(right - 7, i + 5);
						ctx.lineTo(right - 7, i + 19);
						ctx.moveTo(right - 4, i + 16);
						ctx.lineTo(right - 20, i + 16);
						ctx.moveTo(right - 4, i + 12);
						ctx.lineTo(right - 20, i + 12);
						ctx.moveTo(right - 4, i + 8);
						ctx.lineTo(right - 20, i + 8);
						ctx.stroke();
						break;
					case 8:
						ctx.moveTo(canvas.width, i);
						ctx.lineTo(right - this.boxSize, i);
						ctx.stroke();
						ctx.lineWidth = 2;
						ctx.fillStyle = "#ff0";
						ctx.beginPath();
						ctx.arc(right - 12.5, i + 12.5, 3, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						break;
					case 9:
						ctx.lineWidth = 2;
						ctx.fillStyle = "#00f";
						ctx.arc(right - 12.5, i + 12.5, 3, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						break;
					case 10:
						ctx.lineWidth = 2;
						ctx.fillStyle = "#ff0";
						ctx.moveTo(right - 17, i + 10);
						ctx.lineTo(right - 17, i + 16);
						ctx.lineTo(right - 17 + 12 * Math.cos(Math.PI / 6), i + 13);
						ctx.closePath();
						ctx.stroke();
						ctx.fill();
						break;
					case 11:
						ctx.lineWidth = 2;
						ctx.fillStyle = "#0f0";
						ctx.moveTo(right - 9, i + 8);
						ctx.lineTo(right - 15, i + 8);
						ctx.lineTo(right - 12, i + 17 + 1 * Math.cos(Math.PI / 6));
						ctx.closePath();
						ctx.stroke();
						ctx.fill();
						break;
					case 12:
						ctx.lineWidth = 2;
						ctx.fillStyle = "#f00";
						ctx.arc(right - 12.5, i + 12.5, 3, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						break;
					case 13:
						ctx.lineWidth = 2;
						ctx.fillStyle = "#eee";
						ctx.arc(right - 12.5, i + 12.5, 3, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						break;
					case 14:
						ctx.lineWidth = 2;
						ctx.fillStyle = "#0ff";
						ctx.arc(right - 12.5, i + 12.5, 3, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						break;
					case 15:
						ctx.lineWidth = 2;
						ctx.fillStyle = "#f0f";
						ctx.arc(right - 12.5, i + 12.5, 3, 0, 2 * Math.PI);
						ctx.stroke();
						ctx.fill();
						break;
					case 17:
						ctx.beginPath();
						ctx.moveTo(canvas.width, i);
						ctx.lineTo(right - tool.draw.boxSize, i);
						ctx.stroke();
						ctx.lineWidth = 3;
						ctx.strokeStyle = "#f90000";
						ctx.beginPath();
						ctx.moveTo(right - 8, i + 8);
						ctx.lineTo(right - 18, i + 18);
						ctx.moveTo(right - 18, i + 8);
						ctx.lineTo(right - 8, i + 18);
						ctx.stroke()
					}
					ctx.fillStyle = ctx.strokeStyle = "#000";
					ctx.lineWidth = 1 * dpr
				}
			},
			bottomLeft() {
				ctx.moveTo(0, 300);
				ctx.lineTo(this.boxSize, 300);
				ctx.lineTo(this.boxSize, 350);
				ctx.lineTo(0, 350);
				ctx.stroke();
				if (tool.selected == "eraser") {
					ctx.moveTo(0, 375);
					ctx.lineTo(this.boxSize, 375);
					ctx.lineTo(this.boxSize, 450);
					ctx.lineTo(0, 450);
					ctx.stroke();
					ctx.fillRect(0, 375, this.boxSize, 75);
				}
				ctx.fillRect(0, 300, this.boxSize, this.boxSize * 2);
				ctx.fillStyle = "#000";
				ctx.fillRect(11.5, 306, 2, 12.5);
				ctx.fillRect(6, 311.5, 12.5, 2);
				ctx.fillRect(6, 338, 12.5, 2);
				if (tool.selected != "eraser") return;
				ctx.beginPath();
				ctx.arc(12.5, 387.5, 3, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.fill();
				ctx.fillStyle = ctx.strokeStyle = "#aaa";
				ctx.beginPath();
				ctx.arc(12.5, 412.5, 3, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.fill();
				ctx.lineWidth = 2;
				ctx.strokeStyle = "#000";
				ctx.fillStyle = "#ff0";
				ctx.beginPath();
				ctx.arc(12.5, 437.5, 3, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.fill();
				ctx.fillStyle = ctx.strokeStyle = "#000"
			}
		},
		descriptions: {
			left: {
				0: "Pause ( SPACE )",
				1: "Restart ( ENTER )",
				2: "Cancel Checkpoint ( BACKSPACE )",
				4: "Switch Bike ( Ctrl + B - Arrows to control, Z to turn )",
				6: "Enable line shading",
				7: "Enable fullscreen ( F )",
				12: "Increase Size ( A + SCROLL )",
				13: "Decrease Size ( A + SCROLL )",
				get 15() { return "Erase Physics ( " + tool.eraser.settings.physics + " )" },
				get 16() { return "Erase Scenery ( " + tool.eraser.settings.scenery + " )" },
				get 17() { return "Erase Powerups ( " + tool.eraser.settings.powerups + " )" }
			},
			right: {
				0: "Brush ( A - Hold to snap, hold & scroll to adjust size )",
				1: "Scenery brush ( S - Hold to snap, hold & scroll to adjust size )",
				2: "Lines ( backWheel - Hold to snap )",
				3: "Scenery lines ( W - Hold to snap )",
				4: "Eraser ( E - Hold & scroll to adjust size )",
				5: "Camera ( R - Release or press again to switch back, scroll to zoom )",
				6: "Enable grid snapping ( G )",
				8: "Goal",
				9: "Checkpoint",
				10: "Booster",
				11: "Gravity Modifier",
				12: "Bomb",
				13: "Slow-Mo",
				14: "Antigravity",
				15: "Teleporter",
				17: "Undo ( Z )"
			}
		},
		selected: "camera",
		selectedCache: "camera",
		toggleCamera: !1,
		eraser: {
			size: 15,
			settings: {
				physics: !0,
				scenery: !0,
				powerups: !0
			},
			draw() {
				ctx.fillStyle = "#ffb6c199";
				ctx.beginPath();
				ctx.arc(R.toPixel().x, R.toPixel().y, (this.size - 1) * track.zoom, 0, 2 * Math.PI, !0);
				ctx.fill();
			}
		},
		brush: { length: 20 },
		grid: 1,
		powerups: 0
	};

	class Vector {
		constructor(a, b) {
			this.x = a;
			this.y = b
		}
		toPixel() {
			return new Vector((this.x - track.camera.x) * track.zoom + canvas.width / 2,(this.y - track.camera.y) * track.zoom + canvas.height / 2)
		}
		adjustToCanvas() {
			return new Vector((this.x - canvas.width / 2) / track.zoom + track.camera.x,(this.y - canvas.height / 2) / track.zoom + track.camera.y)
		}
		copy(a) {
			this.x = a.x;
			this.y = a.y;
			return this
		}
		addToSelf(a) {
			this.x += a.x;
			this.y += a.y;
			return this
		}
		subtractFromSelf(a) {
			this.x -= a.x;
			this.y -= a.y;
			return this 
		}
		scaleSelf(a) {
			this.x *= a;
			this.y *= a;
			return this
		}
		oppositeScaleSelf(a) {
			this.x /= a;
			this.y /= a;
			return this
		}
		clone() {
			return new Vector(this.x,this.y)
		}
		add(a) {
			return new Vector(this.x + a.x,this.y + a.y)
		}
		sub(a) {
			return new Vector(this.x - a.x,this.y - a.y)
		}
		scale(a) {
			return new Vector(this.x * a,this.y * a)
		}
		oppositeScale(a) {
			return new Vector(this.x / a,this.y / a)
		}
		dot(a) {
			return this.x * a.x + this.y * a.y
		}
		getLength() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		}
		lengthSquared() {
			return this.x * this.x + this.y * this.y
		}
		distanceTo(a) {
			var b = this.x - a.x,
				a = this.y - a.y;
			return Math.sqrt(b * b + a * a)
		}
		distanceToSquared(a) {
			var b = this.x - a.x,
				a = this.y - a.y;
			return b * b + a * a
		}
		toString() {
			return Math.round(this.x).toString(32) + " " + Math.round(this.y).toString(32)
		}
		toJSON() {
			return [this.x, this.y]
		}
	}

	var records = [{}, {}, {}, {}, {}],
		U = new Vector(40,50),
		R = new Vector(0,0),
		Z = !1, Hb = !1, V = !1, Ib = !1,
		Lb = new Vector(40,50),
		Mb = new Vector(-40,10),
		charCount = document.getElementById("charcount"),
		code = document.getElementById("trackcode");
		code.oninput = (t) =>  Game.loadRide(t.target.value);

	class Mass {
		constructor(t = new Vector(0, 0), e = new Vector(0, 0)) {
			this.pos = t.clone();
			this.old = t.clone();
			this.real = t.add(e)
			this.vel = e.clone();
		}
		update(t) {
			this.real = this.pos.add(this.vel.scale(t));
		}
	}

	class BodyPart extends Mass {
		constructor(t, e) {
			super(t);
			this.parent = e;
			this.size = 10;
			this.friction = 0;
			this.collide = !0;
		}
		drive(t) {
			this.pos.addToSelf(t.scale(-t.dot(this.vel) * this.friction));
			this.touching = !0
		}
		update(t) {
			this.vel.addToSelf(this.parent.gravity).scaleSelf(.99);
			this.pos.addToSelf(this.vel);
			this.touching = !1;
			if (this.collide) {
				this.parent.track.collide(this);
			}
			this.vel = this.pos.sub(this.old);
			this.old.copy(this.pos);
			// super.update(t);
		}
		clone() {
			var t = new BodyPart(this.pos, this.parent);
			t.old = this.old.clone();
			t.vel = this.vel.clone();
			t.size = this.size;
			t.friction = this.friction;
			return t;
		}
	}

	class Wheel extends Mass {
		constructor(t, e) {
			super(t);
			this.parent = e;
			this.size = 10;
			this.friction = 0;
			this.gravity = !0;
			this.collide = !0;
			this.motor = 0;
			this.pedalSpeed = 0;
		}
		drive(a) {
			this.pos.addToSelf(a.scale(this.motor * this.parent.dir));
			if (this.brake) {
				this.pos.addToSelf(a.scale(0.3 * -a.dot(this.vel)));
			}
			this.pedalSpeed = a.dot(this.vel) / this.size;
			this.touching = !0
		}
		update(t) {
			this.vel.addToSelf(this.parent.gravity).scaleSelf(.99);
			this.pos.addToSelf(this.vel);
			this.touching = !1;
			if (this.collide) {
				this.parent.track.collide(this);
			}
			this.vel = this.pos.sub(this.old);
			this.old.copy(this.pos);
			// super.update(t);
		}
		clone() {
			var a = new Wheel(this.pos, this.track);
			a.old = this.old.clone();
			a.vel = this.vel.clone();
			a.motor = this.motor;
			return a
		}
	}

	class Shard {
		constructor(a, b) {
			this.pos = new Vector(a.x + 5 * (Math.random() - Math.random()),a.y + 5 * (Math.random() - Math.random()));
			this.old = new Vector(this.pos.x,this.pos.y);
			this.vel = new Vector(11 * (Math.random() - Math.random()),11 * (Math.random() - Math.random()));
			this.parent = b;
			this.track = b.track;
			this.size = 2 + 9 * Math.random();
			this.rotation = 6.2 * Math.random();
			this.da = Math.random() - Math.random();
			this.friction = 0.05;
			this.collide = !0;
			this.shape = [1, 0.7, 0.8, 0.9, 0.5, 1, 0.7, 1]
		}
		draw() {
			var a = this.pos.toPixel(),
				b = this.size * this.track.zoom,
				c = this.shape[0] * b,
				d = a.x + c * Math.cos(this.rotation),
				c = a.y + c * Math.sin(this.rotation),
				e = 2;
			for (ctx.beginPath(),ctx.moveTo(d, c),ctx.fillStyle = "#000"; 8 > e; e++)
				c = this.shape[e - 1] * b / 2,
				d = a.x + c * Math.cos(this.rotation + 6.283 * e / 8),
				c = a.y + c * Math.sin(this.rotation + 6.283 * e / 8),
				ctx.lineTo(d, c);
			ctx.fill()
		}
		drive(a) {
			this.pedalSpeed = a.dot(this.vel) / this.size;
			this.pos.addToSelf(a.scale(-a.dot(this.vel) * this.friction));
			this.rotation += this.da;
			var b = a.getLength();
			if (b > 0) {
				a = new Vector(-a.y / b,a.x / b),
				this.old.addToSelf(a.scale(0.8 * a.dot(this.vel)));
			}
		}
		update() {
			this.rotation += this.da;
			this.vel.addToSelf(this.parent.gravity);
			this.vel = this.vel.scale(0.99);
			this.pos.addToSelf(this.vel);
			this.touching = !1;
			if (this.collide) {
				this.track.collide(this);
			}
			this.vel = this.pos.sub(this.old);
			this.old.copy(this.pos)
		}
	}

	class Spring {
		constructor(a, b, c) {
			this.a = a;
			this.b = b;
			this.track = c;
			this.leff = this.lrest = 40;
			this.dampConstant= 0.5;
			this.springConstant = 0.7
		}
		lean(a) {
			this.leff += (this.lrest - a - this.leff) / 5
		}
		rotate(a) {
			var b = this.b.pos.sub(this.a.pos),
				b = new Vector(-b.y / this.leff,b.x / this.leff);
			this.a.pos.addToSelf(b.scale(a));
			this.b.pos.addToSelf(b.scale(-a))
		}
		update() {
			var a = this.b.pos.sub(this.a.pos),
				b = a.getLength();
			if (1 > b)
				return this;
			a = a.scale(1 / b);
			b = a.scale((b - this.leff) * this.springConstant);
			b.addToSelf(a.scale(this.b.vel.sub(this.a.vel).dot(a) * this.dampConstant));
			this.b.vel.addToSelf(b.scale(-1));
			this.a.vel.addToSelf(b);
			return this
		}
		swap() {
			var a = new Vector;
			a.copy(this.a.pos);
			this.a.pos.copy(this.b.pos);
			this.b.pos.copy(a);
			a.copy(this.a.old);
			this.a.old.copy(this.b.old);
			this.b.old.copy(a);
			a.copy(this.a.vel);
			this.a.vel.copy(this.b.vel);
			this.b.vel.copy(a);
			a = this.a.rotation;
			this.a.rotation = this.b.rotation;
			this.b.rotation = a
		}
		getLength() {
			return this.b.pos.sub(this.a.pos).getLength()
		}
		clone() {
			var a = new Spring(this.a,this.b,this.track);
			a.lrest = this.lrest;
			a.leff = this.leff;
			a.dampConstant= this.dampConstant;
			a.springConstant = this.springConstant;
			return a
		}
		toJSON() {
			return {
				type: "Spring",
				a: this.a,
				b: this.b,
				lrest: this.lrest,
				leff: this.leff,
				dampConstant: this.dampConstant,
				springConstant: this.springConstant
			}
		} 
	}

	class Vehicle {
		constructor(t) {
			this.track = t,
			this.gravity = new Vector(0,.3),
			this.complete = !1,
			this.crashed = !1,
			this.dir = 1,
			this.ghost = !1,
			this.explosion = !1,
			this.motor = 0,
			this.powerupsEnabled = !0
		}
		createCosmetics() {
			var t = null || this.firstPlayer && this.firstPlayer._user
			, e = {head: "hat"} || t.cosmetics;
			this.cosmetics = e
		}
		trackComplete() {
			var a = this.track;
			this.collide("hitTarget");
			if (this.pastCheckpoint & 2) {
				if (this.collide("hitGoal"),
				a.targets && a.firstPlayer.targetsCollected === a.targets && 0 < a.currentTime && (!a.time || this.time < a.time) && a.id !== void 0) {
					for (var b = "", c, d = 0, e = records.length; d < e; d++) {
						for (c in records[d]) {
							isNaN(c) || (b += c + " ");
						}
						b += ","
					}
					c = new XMLHttpRequest;
					c.open("POST", "/tracks/ghost_save", true);
					c.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					c.onload = function() {
						if (c.readyState === c.DONE) {
							if (c.status === 200) {
								if (c.response.startsWith("Ghost")) {
									alert(c.response)
								}
							}
						}
					};
					c.send("id=" + window.location.pathname.split("/")[2] + "&vehicle=" + this.vehicle + "&time=" + a.currentTime + "&code=" + b + a.currentTime + "," + this.vehicle);
					a.firstPlayer.gamepad.left = a.firstPlayer.gamepad.right = a.firstPlayer.gamepad.up = a.firstPlayer.gamepad.down = 0
				}
			} else if (this.pastCheckpoint & 1) {
				this.collide("hitCheckpoint");
				for (var i in a.players) {
					a.players[i].checkpoints.push(a.players[i].snapshot())
				}
			}
			this.pastCheckpoint = 0
		}
		die() {
			this.dead = !0;
			this.head.drive = () => {};
			this.rearWheel.motor = 0;
			this.rearWheel.brake = !1;
			this.frontWheel.brake = !1;
			this.head.collide = !1;
			for (var i in this.track.players) {
				if (this.track.players[i].dead) {
					this.track.players[i] = new DeadBike(this, this.getStickMan(), this.track, this.checkpoints);
					this.track.players[i].hat = new Shard(this.head.pos.clone(), this);
					this.track.players[i].hat.vel = this.head.vel.clone();
					this.track.players[i].hat.size = 10;
					this.track.players[i].hat.da = .1;
					if (i == 0) {
						this.track.firstPlayer = this.track.players[i];
					}
				}
			}
		}
		getStickMan() {
			var a = {}
			, b = this.frontWheel.pos.sub(this.rearWheel.pos)
			, c = new Vector(b.y * this.dir,-b.x * this.dir);
			a.head = this.rearWheel.pos.add(b.scale(0.35)).add(this.head.pos.sub(this.frontWheel.pos.add(this.rearWheel.pos).scale(0.5)).scale(1.2));
			a.hand = a.shadowHand = this.rearWheel.pos.add(b.scale(0.8)).add(c.scale(0.68));
			var d = a.head.sub(a.hand)
			, d = new Vector(d.y * this.dir,-d.x * this.dir);
			a.elbow = a.shadowElbow = a.head.add(a.hand).scale(0.5).add(d.scale(130 / d.lengthSquared()));
			a.hip = this.rearWheel.pos.add(b.scale(0.2)).add(c.scale(0.5));
			var e = new Vector(6 * Math.cos(this.pedalSpeed),6 * Math.sin(this.pedalSpeed));
			a.foot = this.rearWheel.pos.add(b.scale(0.4)).add(c.scale(0.05)).add(e);
			d = a.hip.sub(a.foot);
			d = new Vector(-d.y * this.dir,d.x * this.dir);
			a.knee = a.hip.add(a.foot).scale(0.5).add(d.scale(160 / d.lengthSquared()));
			a.shadowFoot = this.rearWheel.pos.add(b.scale(0.4)).add(c.scale(0.05)).sub(e);
			d = a.hip.sub(a.shadowFoot);
			d = new Vector(-d.y * this.dir,d.x * this.dir);
			a.shadowKnee = a.hip.add(a.shadowFoot).scale(0.5).add(d.scale(160 / d.lengthSquared()));
			return a
		}
		setButtonDown(a) {
			this.gamepad[a] = 1
		}
		setButtonUp(a) {
			this.gamepad[a] = 0
		}
		isButtonDown(a) {
			return this.gamepad[a] == 1
		}
		update(t) {
			var a = this.track.currentTime;
			if (this.pastCheckpoint) {
				this.trackComplete()
			}
			if (!!this.ghost_data) {
				if (this.ghost_data[0][a]) {
					this.gamepad.left = this.gamepad.left ? 0 : 1;
				}
				if (this.ghost_data[1][a]) {
					this.gamepad.right = this.gamepad.right ? 0 : 1;
				}
				if (this.ghost_data[2][a]) {
					this.gamepad.up = this.gamepad.up ? 0 : 1;
				}
				if (this.ghost_data[3][a]) {
					this.gamepad.down = this.gamepad.down ? 0 : 1;
				}
				if (this.ghost_data[4][a]) {
					this.swap();
				}
			} else {
				if (this.gamepad.left !== this.oldGamepad.left)
					records[0][a] = 1,
					this.oldGamepad.left = this.gamepad.left;
				if (this.gamepad.right !== this.oldGamepad.right)
					records[1][a] = 1,
					this.oldGamepad.right = this.gamepad.right;
				if (this.gamepad.up !== this.oldGamepad.up)
					records[2][a] = 1,
					this.oldGamepad.up = this.gamepad.up;
				if (this.gamepad.down !== this.oldGamepad.down)
					records[3][a] = 1,
					this.oldGamepad.down = this.gamepad.down;
				if (this.isButtonDown("swap")) {
					this.swap();
					records[4][a] = 1
				}
			}
			if (!this.dead) {
				this.updateControls()
			}
			for (a = this.springs.length - 1; a >= 0; a--)
				this.springs[a].update();
			for (a = this.masses.length - 1; a >= 0; a--)
				this.masses[a].update(t);
			if (this.rearWheel.touching && this.frontWheel.touching) {
				this.slow = !1
			}
			if (!this.slow && !this.dead) {
				this.updateControls();
				for (a = this.springs.length - 1; a >= 0; a--)
					this.springs[a].update();
				for (a = this.masses.length - 1; a >= 0; a--)
					this.masses[a].update()
			}
		}
		collide(a) {
			if (this.checkpoints) {
				if (this.checkpoints[a]) {
					for (var i in b) {
						this.checkpoints[i].apply(this, _slice.call(arguments, 1))
					}
				}
			}
		}
		moveVehicle(a, b) {
			for (var i = this.masses, s = i.length, n = s - 1; n >= 0; n--)
				i[n].pos.x = i[n].pos.x + a,
				i[n].pos.y = i[n].pos.y + b,
				i[n].old.x = i[n].old.x + a,
				i[n].old.y = i[n].old.y + b
		}
		moveVehicleAbsolute(a, b, c) {
			this.masses[0].pos.copy(a.pos),
			this.masses[0].old.copy(a.old),
			this.masses[0].vel.copy(a.vel),
			this.masses[1].pos.copy(b.pos),
			this.masses[1].old.copy(b.old),
			this.masses[1].vel.copy(b.vel),
			this.masses[2].pos.copy(c.pos),
			this.masses[2].old.copy(c.old),
			this.masses[2].vel.copy(c.vel)
		}
		toJSON() {
			return {
				type: this.toString(),
				keys: records.map(Object.keys),
				rearWheel: this.rearWheel,
				frontWheel: this.frontWheel,
				head: this.head,
				chasse: this.chasse,
				rearSpring: this.rearSpring,
				frontSpring: this.frontSpring,
				direction: this.dir,
				gravity: this.gravity,
				slow: this.slow,
				time: this.time
			}
		}
		toString() {
			return "BikeGeneric"
		}
	}

	class BMXBike extends Vehicle {
		constructor(a, b, c = [], d = !1) {
			super(a);
			this.ghost = !!d;
			this.ghost_data = d;
			this.checkpoints = c;
			this.createMasses(),
			this.createSprings(),
			this.createCosmetics(),
			-1 === b && this.swap(),
			this.pastCheckpoint = !1;
			if (this.checkpoints.length > 0) {
				c = this.checkpoints[this.checkpoints.length - 1];
				this.dir = c.dir;
				this.gravity = new Vector(c.gravity.x, c.gravity.y);
				this.slow = c.slow;
				this.targetsCollected = c.targetsCollected;
				this.time = c.time;
				for (var i in c.oldGamepad) {
					this.oldGamepad[i] = c.oldGamepad[i];
				}
				for (var i in this.track.powerups) {
					this.track.powerups[i].used = c.powerups[i];
				}
				for (var i in records) {
					for (var x in records[i]) {
						if (x >= this.time) {
							delete records[i][x];
						}
					}
				}
			} else {
				this.slow = !1,
				this.time = 0,
				this.targetsCollected = 0;
				for (var i in this.track.powerups) {
					this.track.powerups[i].used = 0
				}
			}
		}
		vehicle = "BMX";
		vehicleName = "BMX";
		slow = !1;
		dead = !1;
		pedalSpeed = 0;
		targetsCollected = 0;
		powerupsConsumed = 0;
		swapped = !0;
		checkpointsCache = [];
		gamepad = { up: 0, down: 0, left: 0, right: 0, swap: 0 };
		oldGamepad = { up: 0, down: 0, left: 0, right: 0, swap: 0 };
		createMasses() {
			var a = 0, b = -1,
				c = 21, d = 38,
				e = -21, f = 38,
				g = new Vector(0,0),
				h = new Vector(0,0),
				i = new Vector(0,0),
				j = 0,
				k = 0;
			if (this.checkpoints.length > 0) {
				var cp = this.checkpoints[this.checkpoints.length - 1];
				a = cp.masses[0].pos.x, b = cp.masses[0].pos.y,
				c = cp.masses[1].pos.x, d = cp.masses[1].pos.y,
				e = cp.masses[2].pos.x, f = cp.masses[2].pos.y,
				g = new Vector(cp.masses[0].vel.x,cp.masses[0].vel.y),
				h = new Vector(cp.masses[1].vel.x,cp.masses[1].vel.y),
				i = new Vector(cp.masses[2].vel.x,cp.masses[2].vel.y),
				j = cp.masses[1].motor,
				k = cp.masses[2].motor;
			}
			this.masses = [this.head = new BodyPart(new Vector(a,b), this), this.frontWheel = new Wheel(new Vector(c,d), this), this.rearWheel = new Wheel(new Vector(e,f), this)];
			this.head.drive = () => this.die(),
			this.head.size = 14,
			this.frontWheel.size = this.rearWheel.size = 11.7,
			this.head.vel = g,
			this.frontWheel.vel = h,
			this.rearWheel.vel = i,
			this.frontWheel.motor = j,
			this.rearWheel.motor = k;
			if (this.checkpoints.length > 0)
				this.head.old = new Vector(cp.masses[0].old.x,cp.masses[0].old.y),
				this.frontWheel.old = new Vector(cp.masses[1].old.x,cp.masses[1].old.y),
				this.rearWheel.old = new Vector(cp.masses[2].old.x,cp.masses[2].old.y)
		}
		createSprings() {
			var a = 45,
				b = 42,
				c = 45;
			if (this.checkpoints.length > 0) {
				var cp = this.checkpoints[this.checkpoints.length - 1];
				a = cp.springs[0].leff,
				b = cp.springs[1].leff,
				c = cp.springs[2].leff;
			}
			this.springs = [
				this.rearSpring = new Spring(this.head,this.rearWheel,this),
				this.chasse = new Spring(this.rearWheel,this.frontWheel,this),
				this.frontSpring = new Spring(this.frontWheel,this.head,this)
			];
			this.rearSpring.lrest = 45,
			this.chasse.lrest = 42,
			this.frontSpring.lrest = 45,
			this.chasse.springConstant = this.rearSpring.springConstant = this.frontSpring.springConstant = .35,
			this.chasse.dampConstant = this.rearSpring.dampConstant = this.frontSpring.dampConstant = .3,
			this.rearSpring.leff = a
			this.chasse.leff = b,
			this.frontSpring.leff = c
		}
		swap() {
			this.swapped = !this.swapped;
			this.gamepad.swap = !1;
			this.dir *= -1;
			this.chasse.swap();
			var rearSpring = this.rearSpring.leff;
			this.rearSpring.leff = this.frontSpring.leff;
			this.frontSpring.leff = rearSpring;
			this.collide("turn");
		}
		updateControls() {
			if (this.gamepad.swap) {
				this.swap();
			}
			if (this.gamepad.up) {
				this.pedalSpeed += this.rearWheel.pedalSpeed / 5;
			}
			this.rearWheel.motor += (this.gamepad.up - this.rearWheel.motor) / 10;
			this.rearWheel.brake = this.frontWheel.brake = this.gamepad.down;
			var rotate = this.gamepad.left - this.gamepad.right;
			this.rearSpring.lean(rotate * this.dir * 5);
			this.frontSpring.lean(-rotate * this.dir * 5);
			this.chasse.rotate(rotate / 6);
			if (!rotate && this.gamepad.up) {
				this.rearSpring.lean(-7);
				this.frontSpring.lean(7);
			}
		}
		draw() {
			var a, b, c, d,
				e = this.track.zoom,
				f = this.dir,
				h = this.rearWheel.pos.toPixel(),
				i = this.frontWheel.pos.toPixel();
			ctx.globalAlpha = this.ghost ? .5 : 1;
			ctx.strokeStyle = "#000";
			ctx.lineWidth = 3.5 * e;
			ctx.beginPath(),
			ctx.arc(h.x, h.y, 10 * e, 0, 2 * Math.PI, !0),
			ctx.moveTo(i.x + 10 * e, i.y),
			ctx.arc(i.x, i.y, 10 * e, 0, 2 * Math.PI, !0),
			ctx.stroke();
			var l = i.x - h.x
			, m = i.y - h.y
			, i = new Vector((i.y - h.y) * f,(h.x - i.x) * f);
			a = h.x + 0.3 * l + 0.25 * i.x;
			b = h.y + 0.3 * m + 0.25 * i.y;
			var n = h.x + 0.84 * l + 0.42 * i.x
			, x = h.y + 0.84 * m + 0.42 * i.y;
			c = h.x + 0.84 * l + 0.37 * i.x;
			d = h.y + 0.84 * m + 0.37 * i.y;
			var w = h.x + 0.4 * l + 0.05 * i.x
			, y = h.y + 0.4 * m + 0.05 * i.y;
			ctx.lineWidth = 3 * e;
			ctx.beginPath(),
			ctx.moveTo(h.x, h.y),
			ctx.lineTo(a, b),
			ctx.lineTo(n, x),
			ctx.moveTo(c, d),
			ctx.lineTo(w, y),
			ctx.lineTo(h.x, h.y);
			c = 6 * Math.cos(this.pedalSpeed) * e;
			d = 6 * Math.sin(this.pedalSpeed) * e;
			n = w + c;
			x = y + d;
			c = w - c;
			d = y - d;
			var C = h.x + 0.17 * l + 0.38 * i.x
			, M = h.y + 0.17 * m + 0.38 * i.y
			, X = h.x + 0.3 * l + 0.45 * i.x
			, ya = h.y + 0.3 * m + 0.45 * i.y
			, T = h.x + 0.25 * l + 0.4 * i.x
			, Y = h.y + 0.25 * m + 0.4 * i.y;
			ctx.moveTo(n, x),ctx.lineTo(c, d),ctx.moveTo(C, M),ctx.lineTo(X, ya),ctx.moveTo(w, y),ctx.lineTo(T, Y);
			var C = h.x + 0.97 * l
			, M = h.y + 0.97 * m
			, X = h.x + 0.8 * l + 0.48 * i.x
			, ya = h.y + 0.8 * m + 0.48 * i.y
			, T = h.x + 0.86 * l + 0.5 * i.x
			, Y = h.y + 0.86 * m + 0.5 * i.y
			, za = h.x + 0.82 * l + 0.65 * i.x
			, rc = h.y + 0.82 * m + 0.65 * i.y
			, w = h.x + 0.78 * l + 0.67 * i.x
			, y = h.y + 0.78 * m + 0.67 * i.y;
			ctx.moveTo(h.x + l, h.y + m),ctx.lineTo(C, M),ctx.lineTo(X, ya),ctx.lineTo(T, Y),ctx.lineTo(za, rc),ctx.lineTo(w, y),ctx.stroke();
			if (!this.dead) {
				i = this.head.pos.toPixel();
				i = {
					x: i.x - h.x - 0.5 * l,
					y: i.y - h.y - 0.5 * m
				};
				h = a - 0.1 * l + 0.3 * i.x;
				C = b - 0.1 * m + 0.3 * i.y;
				T = n - h;
				Y = x - C;
				za = T * T + Y * Y;
				M = h + 0.5 * T + 200 * Y * f * e * e / za;
				X = C + 0.5 * Y + 200 * -T * f * e * e / za;
				T = c - h;
				Y = d - C;
				za = T * T + Y * Y;
				ya = h + 0.5 * T + 200 * Y * f * e * e / za;
				T = C + 0.5 * Y + 200 * -T * f * e * e / za;
				ctx.lineWidth = 6 * e;
				ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
				ctx.beginPath(),ctx.moveTo(c, d),ctx.lineTo(ya, T),ctx.lineTo(h, C),ctx.stroke();
				ctx.strokeStyle = "#000";
				ctx.beginPath(),ctx.moveTo(n, x),ctx.lineTo(M, X),ctx.lineTo(h, C),ctx.stroke();
				n = a + 0.05 * l + 0.88 * i.x;
				x = b + 0.05 * m + 0.88 * i.y;
				ctx.lineWidth = 8 * e;
				ctx.beginPath(),ctx.moveTo(h, C),ctx.lineTo(n, x),ctx.stroke();
				c = a + 0.15 * l + 1.05 * i.x;
				d = b + 0.15 * m + 1.05 * i.y;
				ctx.lineWidth = 2 * e;
				ctx.beginPath(),ctx.moveTo(c + 5 * e, d),ctx.arc(c, d, 5 * e, 0, 2 * Math.PI, !0),ctx.stroke(),ctx.beginPath();
				switch (this.cosmetics.head) {
				case "cap":
					c = a + 0.4 * l + 1.1 * i.x;
					d = b + 0.4 * m + 1.1 * i.y;
					a = a + 0.05 * l + 1.05 * i.x;
					b = b + 0.05 * m + 1.05 * i.y;
					ctx.moveTo(a, b),ctx.lineTo(c, d),ctx.stroke();
					break;
				case "hat":
					c = a + 0.35 * l + 1.15 * i.x;
					d = b + 0.35 * m + 1.15 * i.y;
					h = a - 0.05 * l + 1.1 * i.x;
					C = b - 0.05 * m + 1.1 * i.y;
					M = a + 0.25 * l + 1.13 * i.x;
					X = b + 0.25 * m + 1.13 * i.y;
					a = a + 0.05 * l + 1.11 * i.x;
					b = b + 0.05 * m + 1.11 * i.y;
					ya = c - 0.1 * l + 0.2 * i.x;
					T = d - 0.1 * m + 0.2 * i.y;
					l = h + 0.02 * l + 0.2 * i.x;
					m = C + 0.02 * m + 0.2 * i.y;
					ctx.fillStyle = "#000";
					ctx.moveTo(c, d),ctx.lineTo(M, X),ctx.lineTo(ya, T),ctx.lineTo(l, m),ctx.lineTo(a, b),ctx.lineTo(h, C),ctx.stroke(),ctx.fill();
					break;
				case "ninja":
					c = a + 0.26 * l + 1.1 * i.x,
					d = b + 0.26 * m + 1.1 * i.y,
					a = a + 0.05 * l + 1.05 * i.x,
					b = b + 0.05 * m + 1.05 * i.y,
					ctx.lineWidth = 5 * e,
					ctx.moveTo(c, d),ctx.lineTo(a, b),ctx.stroke(),ctx.lineWidth = 2 * e,
					ctx.lineTo(a - (8 + Math.random()) * e * f, b - (4 + Math.random()) * e * f),ctx.moveTo(a, b),ctx.lineTo(a - (8 + Math.random()) * e * f, b + (4 + Math.random()) * e * f),ctx.stroke()
				}
				l = n - w;
				m = x - y;
				i = {
					x: m * f * e * e,
					y: -l * f * e * e
				};
				f = l * l + m * m;
				l = w + 0.4 * l + 130 * i.x / f;
				m = y + 0.4 * m + 130 * i.y / f;
				ctx.lineWidth = 5 * e;
				ctx.beginPath(),ctx.moveTo(n, x),ctx.lineTo(l, m),ctx.lineTo(w, y),ctx.stroke()
			}
			ctx.globalAlpha = 1;
		}
		snapshot() {
			var oldGamepad = {}, powerups = [];
			for (var i in this.oldGamepad)
				oldGamepad[i] = this.oldGamepad[i];
			for (var i in this.track.powerups)
				powerups.push(this.track.powerups[i].used);
			return {
				oldGamepad: oldGamepad,
				masses: [
					this.head.clone(),
					this.frontWheel.clone(),
					this.rearWheel.clone()
				],
				springs: [
					this.rearSpring.clone(),
					this.chasse.clone(),
					this.frontSpring.clone()
				],
				dir: this.dir,
				gravity: new Vector(this.gravity.x, this.gravity.y),
				slow: this.slow,
				targetsCollected: this.targetsCollected,
				powerups: powerups,
				time: this.track.currentTime
			}
		}
		clone() {
			const t = new BMXBike(this.track, this.dir, this.checkpoints, this.ghost_data);
			for (var e in t.masses) {
				t.masses[e] = this.masses[e].clone();
			}
			return t;
		}
	}

	class MountainBike extends Vehicle {
		constructor(a, b, c = [], d) {
			super(a);
			this.ghost = !!d;
			this.ghost_data = d;
			this.checkpoints = c;
			this.createMasses(),
			this.createSprings(),
			this.createCosmetics(),
			-1 === b && this.swap(),
			this.pastCheckpoint = !1;
			if (this.checkpoints.length > 0) {
				var cp = this.checkpoints[this.checkpoints.length - 1];
				this.dir = cp.dir;
				this.gravity = new Vector(cp.gravity.x, cp.gravity.y);
				this.slow = cp.slow;
				this.targetsCollected = cp.targetsCollected;
				this.time = cp.time;
				for (var i in c.oldGamepad) {
					this.oldGamepad[i] = c.oldGamepad[i];
				}
				for (var i in this.track.powerups) {
					this.track.powerups[i].used = cp.powerups[i];
				}
				for (var i in records) {
					for (var x in records[i]) {
						if (x >= this.time) {
							delete records[i][x];
						}
					}
				}
			} else {
				this.slow = !1,
				this.time = 0,
				this.targetsCollected = 0;
				for (var i in this.track.powerups) {
					this.track.powerups[i].used = 0
				}
			}
		}
		vehicle = "MTB";
		vehicleName = "MTB";
		slow = !1;
		dead = !1;
		pedalSpeed = 0;
		targetsCollected = 0;
		powerupsConsumed = 0;
		swapped = !0;
		checkpointsCache = [];
		gamepad = { up: 0, down: 0, left: 0, right: 0, swap: 0 };
		oldGamepad = { up: 0, down: 0, left: 0, right: 0, swap: 0 };
		createMasses() {
			var a = 2, b = -3,
				c = 23, d = 35,
				e = -23, f = 35,
				g = new Vector(0,0),
				h = new Vector(0,0),
				i = new Vector(0,0),
				j = 0,
				k = 0;
			if (this.checkpoints.length > 0) {
				var cp = this.checkpoints[this.checkpoints.length - 1];
				a = cp.masses[0].pos.x, b = cp.masses[0].pos.y,
				c = cp.masses[1].pos.x, d = cp.masses[1].pos.y,
				e = cp.masses[2].pos.x, f = cp.masses[2].pos.y,
				g = new Vector(cp.masses[0].vel.x,cp.masses[0].vel.y),
				h = new Vector(cp.masses[1].vel.x,cp.masses[1].vel.y),
				i = new Vector(cp.masses[2].vel.x,cp.masses[2].vel.y),
				j = cp.masses[1].motor,
				k = cp.masses[2].motor;
			}
			this.masses = [this.head = new BodyPart(new Vector(a,b), this), this.frontWheel = new Wheel(new Vector(c,d),this), this.rearWheel = new Wheel(new Vector(e,f),this)];
			this.head.drive = () => this.die(),
			this.head.size = this.rearWheel.size = this.frontWheel.size = 14,
			this.head.vel = g,
			this.frontWheel.vel = h,
			this.rearWheel.vel = i,
			this.frontWheel.motor = j,
			this.rearWheel.motor = k;
			if (this.checkpoints.length > 0)
				this.head.old = new Vector(cp.masses[0].old.x,cp.masses[0].old.y),
				this.frontWheel.old = new Vector(cp.masses[1].old.x,cp.masses[1].old.y),
				this.rearWheel.old = new Vector(cp.masses[2].old.x,cp.masses[2].old.y)
		}
		createSprings() {
			var a = 47,
				b = 45,
				c = 45;
			if (this.checkpoints.length > 0) {
				var cp = this.checkpoints[this.checkpoints.length - 1];
				a = cp.springs[0].leff,
				b = cp.springs[1].leff,
				c = cp.springs[2].leff;
			}
			this.springs = [
				this.rearSpring = new Spring(this.head,this.rearWheel,this),
				this.chasse = new Spring(this.rearWheel,this.frontWheel,this),
				this.frontSpring = new Spring(this.frontWheel,this.head,this)
			];
			this.rearSpring.lrest = 47,
			this.chasse.lrest = 45,
			this.frontSpring.lrest = 45,
			this.chasse.springConstant = this.rearSpring.springConstant = this.frontSpring.springConstant = .2,
			this.chasse.dampConstant = this.rearSpring.dampConstant = this.frontSpring.dampConstant = .3,
			this.rearSpring.leff = a
			this.chasse.leff = b,
			this.frontSpring.leff = c
		}
		swap() {
			this.gamepad.swap = !1;
			this.dir *= -1;
			this.chasse.swap();
			var a = this.rearSpring.leff;
			this.rearSpring.leff = this.frontSpring.leff;
			this.frontSpring.leff = a;
			this.swapped = !this.swapped;
			this.collide("turn")
		}
		updateControls() {
			this.gamepad.swap && this.swap();
			this.rearWheel.motor += (this.gamepad.up - this.rearWheel.motor) / 10;
			this.gamepad.up && (this.pedalSpeed += this.rearWheel.pedalSpeed / 5);
			this.rearWheel.brake = this.frontWheel.brake = this.gamepad.down;
			var a = this.gamepad.left - this.gamepad.right;
			this.rearSpring.lean(5 * a * this.dir);
			this.frontSpring.lean(5 * -a * this.dir);
			this.chasse.rotate(a / 8);
			!a && this.gamepad.up && (this.rearSpring.lean(-7),
			this.frontSpring.lean(7))
		}
		draw() {
			var a = this.track
			, b = this.rearWheel.pos.toPixel()
			, c = this.frontWheel.pos.toPixel()
			, d = this.head.pos.toPixel()
			, e = c.sub(b)
			, f = new Vector((c.y - b.y) * this.dir,(b.x - c.x) * this.dir)
			, h = d.sub(b.add(e.scale(0.5)));
			ctx.globalAlpha = this.ghost ? .5 : 1;
			ctx.strokeStyle = "#000";
			ctx.lineWidth = 3.5 * a.zoom;
			ctx.beginPath(),ctx.arc(b.x, b.y, 12.5 * a.zoom, 0, 2 * Math.PI, !0),ctx.moveTo(c.x + 12.5 * a.zoom, c.y),ctx.arc(c.x, c.y, 12.5 * a.zoom, 0, 2 * Math.PI, !0),ctx.stroke(),ctx.beginPath(),ctx.fillStyle = "grey";
			ctx.moveTo(b.x + 5 * a.zoom, b.y),ctx.arc(b.x, b.y, 5 * a.zoom, 0, 2 * Math.PI, !0),ctx.moveTo(c.x + 4 * a.zoom, c.y),ctx.arc(c.x, c.y, 4 * a.zoom, 0, 2 * Math.PI, !0),ctx.fill(),ctx.beginPath(),ctx.lineWidth = 5 * a.zoom;
			ctx.moveTo(b.x, b.y),ctx.lineTo(b.x + 0.4 * e.x + 0.05 * f.x, b.y + 0.4 * e.y + 0.05 * f.y),ctx.moveTo(b.x + 0.72 * e.x + 0.64 * h.x, b.y + 0.72 * e.y + 0.64 * h.y),ctx.lineTo(b.x + 0.46 * e.x + 0.4 * h.x, b.y + 0.46 * e.y + 0.4 * h.y),ctx.lineTo(b.x + 0.4 * e.x + 0.05 * f.x, b.y + 0.4 * e.y + 0.05 * f.y),ctx.stroke(),ctx.beginPath(),ctx.lineWidth = 2 * a.zoom;
			var i = new Vector(6 * Math.cos(this.pedalSpeed) * a.zoom,6 * Math.sin(this.pedalSpeed) * a.zoom);
			ctx.moveTo(b.x + 0.72 * e.x + 0.64 * h.x, b.y + 0.72 * e.y + 0.64 * h.y),ctx.lineTo(b.x + 0.43 * e.x + 0.05 * f.x, b.y + 0.43 * e.y + 0.05 * f.y),ctx.moveTo(b.x + 0.45 * e.x + 0.3 * h.x, b.y + 0.45 * e.y + 0.3 * h.y),ctx.lineTo(b.x + 0.3 * e.x + 0.4 * h.x, b.y + 0.3 * e.y + 0.4 * h.y),ctx.lineTo(b.x + 0.25 * e.x + 0.6 * h.x, b.y + 0.25 * e.y + 0.6 * h.y),ctx.moveTo(b.x + 0.17 * e.x + 0.6 * h.x, b.y + 0.17 * e.y + 0.6 * h.y),ctx.lineTo(b.x + 0.3 * e.x + 0.6 * h.x, b.y + 0.3 * e.y + 0.6 * h.y),ctx.moveTo(b.x + 0.43 * e.x + 0.05 * f.x + i.x, b.y + 0.43 * e.y + 0.05 * f.y + i.y),ctx.lineTo(b.x + 0.43 * e.x + 0.05 * f.x - i.x, b.y + 0.43 * e.y + 0.05 * f.y - i.y),ctx.stroke(),ctx.beginPath(),ctx.lineWidth = a.zoom;
			ctx.moveTo(b.x + 0.46 * e.x + 0.4 * h.x, b.y + 0.46 * e.y + 0.4 * h.y),ctx.lineTo(b.x + 0.28 * e.x + 0.5 * h.x, b.y + 0.28 * e.y + 0.5 * h.y),ctx.stroke(),ctx.beginPath(),ctx.lineWidth = 3 * a.zoom;
			ctx.moveTo(c.x, c.y),ctx.lineTo(b.x + 0.71 * e.x + 0.73 * h.x, b.y + 0.71 * e.y + 0.73 * h.y),ctx.lineTo(b.x + 0.73 * e.x + 0.77 * h.x, b.y + 0.73 * e.y + 0.77 * h.y),ctx.lineTo(b.x + 0.7 * e.x + 0.8 * h.x, b.y + 0.7 * e.y + 0.8 * h.y),ctx.stroke();
			if (!this.dead) {
				var f = d.sub(b.add(e.scale(0.5)))
				, c = b.add(e.scale(0.3)).add(f.scale(0.25))
				, h = b.add(e.scale(0.4)).add(f.scale(0.05))
				, d = h.add(i)
				, l = h.sub(i)
				, b = b.add(e.scale(0.67)).add(f.scale(0.8))
				, i = c.add(e.scale(-0.05)).add(f.scale(0.42))
				, m = d.sub(i)
				, h = (new Vector(m.y * this.dir,-m.x * this.dir)).scaleSelf(a.zoom * a.zoom)
				, n = i.add(m.scale(0.5)).add(h.scale(200 / m.lengthSquared()))
				, m = l.sub(i)
				, h = (new Vector(m.y * this.dir,-m.x * this.dir)).scaleSelf(a.zoom * a.zoom)
				, h = i.add(m.scale(0.5)).add(h.scale(200 / m.lengthSquared()));
				ctx.beginPath(),ctx.lineWidth = 6 * a.zoom;
				ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
				ctx.moveTo(l.x, l.y),ctx.lineTo(h.x, h.y),ctx.lineTo(i.x, i.y),ctx.stroke(),ctx.beginPath(),ctx.strokeStyle = "#000";
				ctx.moveTo(d.x, d.y),ctx.lineTo(n.x, n.y),ctx.lineTo(i.x, i.y),ctx.stroke(),ctx.lineWidth = 8 * a.zoom;
				h = c.add(e.scale(0.1)).add(f.scale(0.93));
				d = c.add(e.scale(0.2)).add(f.scale(1.09));
				ctx.beginPath(),ctx.moveTo(i.x, i.y),ctx.lineTo(h.x, h.y),ctx.stroke(),ctx.beginPath(),ctx.lineWidth = 2 * a.zoom;
				ctx.moveTo(d.x + 5 * a.zoom, d.y),ctx.arc(d.x, d.y, 5 * a.zoom, 0, 2 * Math.PI, !0),ctx.stroke(),ctx.beginPath();
				switch (this.cosmetics.head) {
				case "cap":
					d = c.add(e.scale(0.4)).add(f.scale(1.15));
					e = c.add(e.scale(0.1)).add(f.scale(1.05));
					ctx.moveTo(d.x, d.y),ctx.lineTo(e.x, e.y),ctx.stroke();
					break;
				case "hat":
					d = c.add(e.scale(0.37)).add(f.scale(1.19)),
					i = c.sub(e.scale(0.02)).add(f.scale(1.14)),
					l = c.add(e.scale(0.28)).add(f.scale(1.17)),
					c = c.add(e.scale(0.09)).add(f.scale(1.15)),
					n = d.sub(e.scale(0.1)).addToSelf(f.scale(0.2)),
					e = i.add(e.scale(0.02)).addToSelf(f.scale(0.2)),
					ctx.fillStyle = "#000",
					ctx.moveTo(d.x, d.y),ctx.lineTo(l.x, l.y),ctx.lineTo(n.x, n.y),ctx.lineTo(e.x, e.y),ctx.lineTo(c.x, c.y),ctx.lineTo(i.x, i.y),ctx.stroke(),ctx.fill()
				}
				e = h.sub(b);
				f = new Vector(e.y * this.dir,-e.x * this.dir);
				f = f.scale(a.zoom * a.zoom);
				e = b.add(e.scale(0.3)).add(f.scale(80 / e.lengthSquared()));
				ctx.lineWidth = 5 * a.zoom;
				ctx.beginPath(),ctx.moveTo(h.x, h.y),ctx.lineTo(e.x, e.y),ctx.lineTo(b.x, b.y),ctx.stroke()
			}
		}
		snapshot() {
			var oldGamepad = {}, powerups = [];
			for (var i in this.oldGamepad)
				oldGamepad[i] = this.oldGamepad[i];
			for (var i in this.track.powerups)
				powerups.push(this.track.powerups[i].used);
			return {
				oldGamepad: oldGamepad,
				masses: [
					this.head.clone(),
					this.frontWheel.clone(),
					this.rearWheel.clone()
				],
				springs: [
					this.rearSpring.clone(),
					this.chasse.clone(),
					this.frontSpring.clone()
				],
				dir: this.dir,
				gravity: new Vector(this.gravity.x, this.gravity.y),
				slow: this.slow,
				targetsCollected: this.targetsCollected,
				powerups: powerups,
				time: this.track.currentTime
			}
		}
		clone() {
			const t = new BMXBike(this.track, this.dir, this.checkpoints, this.ghost_data);
			for (var e in t.masses) {
				t.masses[e] = this.masses[e].clone();
			}
			return t;
		}
	}

	class DeadRider {
		dead = !0;
		dir = 1;
		constructor(a, b, c) {
			var vector = new Vector(0,0);
			this.ghost = c;
			this.masses = b;
			this.track = b;
			this.points = [
				this.head = new BodyPart(vector, this),
				this.hip = new BodyPart(vector, this),
				this.elbow = new BodyPart(vector, this),
				this.shadowElbow = new BodyPart(vector, this),
				this.hand = new BodyPart(vector, this),
				this.shadowHand = new BodyPart(vector, this),
				this.knee = new BodyPart(vector, this),
				this.shadowKnee = new BodyPart(vector, this),
				this.foot = new BodyPart(vector, this),
				this.shadowFoot = new BodyPart(vector, this)
			];
			this.joints = [
				new Spring(this.head,this.hip,this),
				new Spring(this.head,this.elbow,this),
				new Spring(this.elbow,this.hand,this),
				new Spring(this.head,this.shadowElbow,this),
				new Spring(this.shadowElbow,this.shadowHand,this),
				new Spring(this.hip,this.knee,this),
				new Spring(this.knee,this.foot,this),
				new Spring(this.hip,this.shadowKnee,this),
				new Spring(this.shadowKnee,this.shadowFoot,this)
			];
			for (var point in this.points) {
				this.points[point].size = 3,
				this.points[point].friction = .05;
			}
			this.head.size = this.hip.size = 8;
			for (var joint in this.joints) {
				this.joints[joint].springConstant = .4,
				this.joints[joint].dampConstant= .7;
			}
			for (var part in a) {
				if (a.hasOwnProperty(part)) {
					this[part].pos.copy(a[part])
				}
			}
		}
		draw() {
			var a = this.track,
				head = this.head.pos.toPixel(),
				elbow = this.elbow.pos.toPixel(), 
				hand = this.hand.pos.toPixel(), 
				shadowElbow = this.shadowElbow.pos.toPixel(),
				shadowHand = this.shadowHand.pos.toPixel(),
				knee = this.knee.pos.toPixel(),
				foot = this.foot.pos.toPixel(),
				shadowKnee = this.shadowKnee.pos.toPixel(),
				shadowFoot = this.shadowFoot.pos.toPixel(),
				hip = this.hip.pos.toPixel();
			ctx.globalAlpha = this.ghost ? .5 : 1;
			ctx.lineWidth = 5 * a.zoom;
			ctx.strokeStyle = "rgba(0,0,0,0.5)";
			ctx.beginPath(),ctx.moveTo(head.x, head.y),ctx.lineTo(shadowElbow.x, shadowElbow.y),ctx.lineTo(shadowHand.x, shadowHand.y),ctx.moveTo(hip.x, hip.y),ctx.lineTo(shadowKnee.x, shadowKnee.y),ctx.lineTo(shadowFoot.x, shadowFoot.y),ctx.stroke();
			ctx.strokeStyle = "#000";
			ctx.beginPath(),ctx.moveTo(head.x, head.y),ctx.lineTo(elbow.x, elbow.y),ctx.lineTo(hand.x, hand.y),ctx.moveTo(hip.x, hip.y),ctx.lineTo(knee.x, knee.y),ctx.lineTo(foot.x, foot.y),ctx.stroke();
			ctx.lineWidth = 8 * a.zoom;
			ctx.beginPath(),ctx.moveTo(hip.x, hip.y),ctx.lineTo(head.x, head.y),ctx.stroke();
			head.addToSelf(head.sub(hip).scale(0.25));
			ctx.lineWidth = 2 * a.zoom;
			ctx.beginPath(),ctx.moveTo(head.x + 5 * a.zoom, head.y),ctx.arc(head.x, head.y, 5 * a.zoom, 0, 2 * Math.PI, !0),ctx.stroke()
		}
		update() {
			for (var a = this.joints.length - 1; a >= 0; a--)
				this.joints[a].update();
			for (a = this.points.length - 1; a >= 0; a--)
				this.points[a].update()
		}
		setVelocity(a, b) {
			a.scaleSelf(0.7);
			b.scaleSelf(0.7);
			var c, d, e, f;
			c = 0;
			for (d = this.joints.length; c < d; c++)
				e = this.joints[c].getLength(),
				20 < e && (e = 20),
				this.joints[c].lrest = this.joints[c].leff = e;
			for (c = 1; 5 > c; c++)
				this.joints[c].lrest = 13,
				this.joints[c].leff = 13;
			e = [this.head, this.elbow, this.shadowElbow, this.hand, this.shadowHand];
			f = [this.hip, this.knee, this.shadowKnee, this.foot, this.shadowFoot];
			c = 0;
			for (d = e.length; c < d; c++)
				e[c].old = e[c].pos.sub(a);
			c = 0;
			for (d = f.length; c < d; c++)
				f[c].old = f[c].pos.sub(b);
			for (c = this.points.length - 1; 0 <= c; c--)
				this.points[c].vel.copy(this.points[c].pos.sub(this.points[c].old)),
				this.points[c].vel.x += Math.random() - Math.random(),
				this.points[c].vel.y += Math.random() - Math.random()
		}
	}

	class DeadBike extends Vehicle {
		dead = !0;
		constructor(a, b, c, d = []) {
			super(c);
			this.checkpoints = d;
			this.rider = new DeadRider(b, c, a.ghost);
			this.rider.setVelocity(a.head.vel, a.rearWheel.vel);
			this.rider.dir = a.dir;
			this.rider.gravity = this.gravity = a.gravity;
			this.time = a.time;
			this.head = this.rider.head;
			this.masses = a;
		}
		draw() {
			this.masses.draw();
			this.rider.draw();
			if (this.hat) {
				this.hat.draw()
			}
		}
		update() {
			this.masses.update();
			this.rider.update();
			if (this.hat) {
				this.hat.update()
			}
		}
	}
	
	class Explosion {
		dead = !0;
		motor = 30 + 20 * Math.random();
		Vb = 0;
		constructor(a, b, c, d, e = []) {
			this.track = d;
			this.checkpoints = e;
			this.$a = [
				new Shard(a,this),
				new Shard(a,this),
				new Shard(a,this),
				new Shard(a,this),
				new Shard(a,this)
			];
			this.pos = a.clone();
			this.gravity = b;
			this.time = c;
			this.head = new BodyPart(a, this);
			this.head.vel.x = 20
		}
		draw() {
			var a, b;
			if (0 < this.motor) {
				this.motor -= 10;
				b = this.pos.toPixel();
				var e = b.x + this.motor / 2 * Math.cos(Math.random() * 2 * Math.PI)
				, d = b.y + this.motor / 2 * Math.sin(Math.random() * 2 * Math.PI);
				ctx.fillStyle = "#ff0";
				ctx.beginPath(),ctx.moveTo(b.x + this.motor / 2 * Math.cos(Math.random() * 2 * Math.PI), d);
				for (a = 1; 16 > a; a++) {
					d = (this.motor + 30 * Math.random()) / 2,
					e = b.x + d * Math.cos(Math.random() * 2 * Math.PI + 2 * Math.PI * a / 16),
					d = b.y + d * Math.sin(Math.random() * 2 * Math.PI + 2 * Math.PI * a / 16),
					ctx.lineTo(e, d);
				}
				ctx.fill()
			}
			a = 0;
			for (b = this.$a.length; a < b; a++)
				this.$a[a].draw()
		}
		update() {
			for (var a = this.$a.length - 1; 0 <= a; a--)
				this.$a[a].update()
		}
	}

	class Item {
		id = tool.powerups++;
		constructor(a, b, c) {
			this.pos = new Vector(a, b);
			this.track = c;
		}
		draw(t = this.color, e = this.pos.toPixel()) {
			var i = this.track;
			ctx.fillStyle = t;
			ctx.beginPath();
			ctx.moveTo(e.x + 7 * i.zoom, e.y);
			ctx.arc(e.x, e.y, 7 * i.zoom, 0, 2 * Math.PI, !0);
			ctx.fill();
			ctx.stroke();
		}
		collide(t) {
			if (t.pos.distanceToSquared(this.pos) < 500 && !t.parent.tb) {
				this.activate(t);
			}
		}
		erase(t) {
			if (t.distanceTo(this.pos) < tool.eraser.size + 7) {
				this.remove();
				return this
			}
			return false;
		}
		remove() {
			this.Remove = !0;
			this.track.remove(this.pos);
			this.ub();
			return this
		}
		toString() {
			return this.d ? this.type + " " + this.pos.toString() + " " + this.d.toString() : this.type + " " + this.pos.toString()
		}
		ub() {}
	}

	class SingleUseItem extends Item {
		used = !1;
		draw() {
			super.draw(this.used ? this.newColor : this.color);
			if (this.d) {
				super.draw(this.used ? this.newColor : this.color, this.d.toPixel());
			}
		}
		collide(a) {
			if (a.pos.distanceToSquared(this.pos) < 500) {
				this.Ea(a);
			}
			if (this.d) {
				if (a.pos.distanceToSquared(this.d) < 500) {
					this.Ea(a);
				}
			}
		}
		Ea(a) {
			if (a.parent.tb) {
				this.vb(a)
			} else {
				if (!this.used) {
					if (a.parent.isGhost) {
						if (!a.parent.powerupsConsumed[this.id]) {
							a.parent.powerupsConsumed[this.id] = this;
							this.activate(a)
						}
					} else {
						this.used = !0;
						this.activate(a)
					}
				}
			}
		}
	}

	class Triangle extends Item {
		constructor(a, b, c, d) {
			super(a, b, d);
			this.rotation = c;
			this.dir = new Vector(-Math.sin(c * Math.PI / 180), Math.cos(c * Math.PI / 180))
		}
		draw() {
			var a = this.track,
				b = this.pos.toPixel();
			ctx.fillStyle = this.color;
			ctx.beginPath(),
			ctx.save();
			ctx.translate(b.x, b.y);
			ctx.rotate(this.rotation * Math.PI / 180);
			ctx.moveTo(-7 * a.zoom, -10 * a.zoom),ctx.lineTo(0, 10 * a.zoom),ctx.lineTo(7 * a.zoom, -10 * a.zoom),ctx.lineTo(-7 * a.zoom, -10 * a.zoom),ctx.fill(),ctx.stroke(),ctx.restore()
		}
		collide(a) {
			if (a.pos.distanceToSquared(this.pos) < 1E3) {
				this.activate(a);
			}
		}
		toString() {
			return this.type + " " + this.pos.toString() + " " + (this.rotation - 180).toString(32)
		}
	}
	
	class Target extends SingleUseItem {
		color = '#ff0';
		newColor = '#ffa';
		type = 'T';
		activate(a) {
			if (this.track.players.length > 1) {
				this.track.players[1].targetsCollected++
			} else {
				this.track.firstPlayer.targetsCollected++;
				if (this.track.firstPlayer.targetsCollected === this.track.targets) {
					a.parent.pastCheckpoint = 2
				}
			}
		}
		vb() {
			a.parent.ha.hasOwnProperty(this.id) || (a.parent.ha[this.id] = ++a.parent.firstPlayer.targetsCollected)
		}
		ub() {
			this.track.targets--
		}
	}

	class Checkpoint extends SingleUseItem {
		color = '#00f';
		newColor = '#aaf';
		type = 'C';
		activate(a) {
			if (this.track.players.length > 1) {
				this.track.players[1].pastCheckpoint |= 1;
			} else
				this.track.firstPlayer.pastCheckpoint |= 1;
			//console.log("Checkpoint", a.parent.time, JSON.stringify(a.parent))
		}
	}

	class Boost extends Triangle {
		color = '#ff0';
		type = 'B';
		activate(a) {
			for (var a = a.parent.masses, b = 0, c = a.length; b < c; b++) {
				a[b].pos.addToSelf(this.dir);
			}
		}
	}

	class Gravity extends Triangle {
		color = '#0f0';
		type = 'G';
		constructor(a, b, c, d) {
			super(a, b, c, d);
			this.dir.scaleSelf(.3);
		}
		activate(t) {
			t.parent.gravity.copy(this.dir);
		}
	}

	class Slowmo extends Item {
		color = '#eee';
		type = 'S';
		activate(t) {
			t.parent.slow = !0;
		}
	}

	class Antigravity extends Item {
		color = '#0ff';
		type = 'A';
		activate(t) {
			t.parent.gravity.copy({ x: 0, y: 0});
		}
	}

	class Teleporter extends SingleUseItem {
		color = '#f0f';
		newColor = '#faf';
		type = 'W';
		constructor(a, b, c) {
			super(a, b, c);
			this.a = a;
			this.b = b
		}
		tpb(t, e) {
			this.d = new Vector(t, e);
			this.x = t;
			this.y = e;
		}
		activate(a) {
			a.parent.moveVehicle(this.x - this.a, this.y - this.b)
		}
	}

	class Bomb extends Item {
		color = '#f00';
		type = 'O';
		activate(a) {
			this.track.firstPlayer = this.track.players[0] = new Explosion(this.pos, a.parent.gravity, a.parent.time, this.track, a.parent.checkpoints)
		}
	}

	class Line {
		Remove = false;
		constructor(t, e, i, s, n) {
			this.a = t instanceof Vector ? t : new Vector(t, e);
			this.b = e instanceof Vector ? e : new Vector(i, s);
			this.vector = this.b.sub(this.a);
			this.len = this.vector.getLength();
			this.track = n;
		}
		draw(t, e, i) {
			t.beginPath();
			t.moveTo(this.a.x * this.track.zoom - e, this.a.y * this.track.zoom - i);
			t.lineTo(this.b.x * this.track.zoom - e, this.b.y * this.track.zoom - i);
			t.stroke()
		}
		erase(t) {
			var b = t.sub(this.a).dot(this.vector.oppositeScale(this.len)),
				c = new Vector(0,0);
			if (b <= 0) {
				c.copy(this.a)
			} else if (b >= this.len) {
				c.copy(this.b)
			} else {
				c.copy(this.a.add(this.vector.oppositeScale(this.len).scale(b)));
			}
			return t.sub(c).getLength() <= tool.eraser.size ? (this.remove(),
			this) : !1
		}
		remove() {
			this.Remove = !0;
			this.track.remove(this.a, this.b);
			return this
		}
		xb() {
			this.track.addLineInternal(this)
		}
		toString() {
			return this.a + this.getEnd()
		}
		toJSON(t) {
			return {
				type: t,
				a: this.a.toJSON(),
				b: this.b.toJSON()
			}
		} 
	}

	class PhysicsLine extends Line {
		collide(a) {
			if (this.yb) return this;
			this.yb = !0;
			var b = a.pos,
				c = a.vel,
				d = a.size,
				e = new Vector(0,0),
				f = 0,
				e = b.sub(this.a),
				h = e.dot(this.vector) / this.len / this.len;
			if (0 <= h && 1 >= h && (c = 0 > (e.x * this.vector.y - e.y * this.vector.x) * ((e.x - c.x) * this.vector.y - (e.y - c.y) * this.vector.x) ? -1 : 1,
			e = e.sub(this.vector.scale(h)), f = e.getLength(), (f < d || 0 > c) && (0 !== f || 514 === this.track.id)))
				return b.addToSelf(e.scale((d * c - f) / f)),
				a.drive(new Vector(-e.y / f,e.x / f)),
				this;
			if (h * this.len < -d || h * this.len > this.len + d)
				return this;
			e = b.sub(0 < h ? this.b : this.a);
			f = e.getLength();
			if (f < d && 0 !== f)
				return b.addToSelf(e.scale((d - f) / f)),
				a.drive(new Vector(-e.y / f,e.x / f)),
				this
		}
		getEnd() {
			this.ma = !0;
			var a = " " + this.b.toString(),
				b = this.track.grid[Math.floor(this.b.x / this.track.scale)][Math.floor(this.b.y / this.track.scale)].search(this.b, "line");
			b !== void 0 && (a += b.getEnd());
			return a
		}
		toString() {
			return this.a + this.getEnd()
		}
		toJSON() {
			return this.toJSON.call(this, "SolidLine")
		}
	}

	class SceneryLine extends Line {
		hb = !0;
		getEnd() {
			this.ma = !0;
			var t = " " + this.b.toString(),
			e = this.track.grid[Math.floor(this.b.x / this.track.scale)][Math.floor(this.b.y / this.track.scale)].search(this.b, "sline");
			if (e !== void 0) {
				t += e.getEnd()
			}
			return t
		}
		toString() {
			return this.a + this.getEnd()
		}
		toJSON() {
			return this.toJSON.call(this, "SceneryLine")
		}
	}

	class Sector {
		constructor() {
			this.physics = [];
			this.scenery= [];
			this.powerups = []
		}
		collide(a) {
			for (var b = this.physics.length - 1; 0 <= b; b--) {
				this.physics[b].collide(a);
			}
			if (!a.parent.dead) {
				for (b = this.powerups.length - 1; 0 <= b; b--) {
					this.powerups[b].collide(a);
				}
			}
			return this;
		}
		za() {
			for (var a = 0, b = this.physics.length; a < b; a++) {
				this.physics[a].yb = !1;
			}
		}
		remove() {
			for (var a = [], b = 0, c = this.physics.length; b < c; b++) {
				this.physics[b] && this.physics[b].Remove && a.push(this.physics.splice(b--, 1)[0]);
			}
			b = 0;
			for (c = this.scenery.length; b < c; b++) {
				this.scenery[b] && this.scenery[b].Remove && a.push(this.scenery.splice(b--, 1)[0]);
			}
			b = 0;
			for (c = this.powerups.length; b < c; b++) {
				this.powerups[b] && this.powerups[b].Remove && a.push(this.powerups.splice(b--, 1)[0]);
			}
			return a
		}
		search(a, b) {
			var c = 0, d, e, f = "sline" === b ? this.scenery: this.physics;
			for (d = f.length; c < d; c++) {
				if ((e = f[c]) && e.a.x === a.x && e.a.y === a.y && !e.ma) {
					return e;
				}
			}
		} 
	}

	class UndoManager {
		constructor() {
			this.undoStack = [];
			this.undoPosition = 0
		}
		push(a) {
			this.undoStack.length = Math.min(this.undoStack.length, this.undoPosition + 1);
			this.undoPosition = this.undoStack.push(a) - 1;
			return this
		}
		undo() {
			if (this.undoPosition >= 0) {
				var a = this.undoStack[this.undoPosition--].undo;
				if (typeof a == "function") {
					a(this);
				}
			}
			return this
		}
		redo() {
			if (this.undoPosition < this.undoStack.length - 1) {
				var a = this.undoStack[++this.undoPosition].redo;
				if (typeof a == "function") {
					a(this);
				}
			}
			return this
		}
	}

	class Track {
		camera = new Vector(0,0);
		cameraLock = !1;
		currentTime = 0;
		editor = 1;
		grid = {};
		paused = !1;
		players = [];
		powerups = [];
		scale = 100;
		sectors = {};
		targets = 0;
		undoManager = new UndoManager();
		vehicle = "BMX";
		zoom = dpr;
		constructor(a) {
			this.canvas = canvas;
			this.id = a;
			if (!!this.id) {
				this.editor = 0;
			} else {
				a = "-18 1i 18 1i###BMX";
				tool.selected = "line";
			}
			this.code = a;
			this.read(this.code);
			Game.watchGhost = this.watchGhost
		}
		zoomIn() {
			if (4 > this.zoom) {
				this.zoom = Math.round(10 * this.zoom + 2) / 10;
				this.sectors = {}
			}
		}
		zoomOut() {
			if (0.2 < this.zoom) {
				this.zoom = Math.round(10 * this.zoom + 2 * -1) / 10;
				this.sectors = {}
			}
		}
		switchBike() {
			this.vehicle = "BMX" === this.vehicle ? "MTB" : "BMX";
			this.reset()
		}
		gotoCheckpoint() {
			this.removeCollectedItems();
			this.paused = !1; // JSON.parse(localStorage.pauseOnEnter) ? true : !1;
			var checkpoints = this.firstPlayer.checkpoints,
				checkpointsCache = this.firstPlayer.checkpointsCache;
			this.firstPlayer = this.players[0] = this.vehicle === "BMX" ? new BMXBike(this, 1, this.firstPlayer.checkpoints) : new MountainBike(this, 1, this.firstPlayer.checkpoints);
			if (this.firstPlayer) {
				if (checkpoints.length > 0) {
					var cp = checkpoints[checkpoints.length - 1];
					this.firstPlayer.checkpointsCache = checkpointsCache;
					this.currentTime = cp.time;
				} else
					this.currentTime = 0;
				this.cameraFocus = this.firstPlayer.head,
				this.camera = this.firstPlayer.head.pos.clone();
			}
			if (this.players.length > 1) {
				for (var i = 1; i < this.players.length; i++) {
					checkpoints = this.players[i].checkpoints,
					checkpointsCache = this.players[i].checkpointsCache;
					this.players[i] = this.ghost_data[6] === "BMX" ? new BMXBike(this, 1, this.players[i].checkpoints, this.ghost_data) : new MountainBike(this, 1, this.players[i].checkpoints, this.ghost_data);
					this.players[i].checkpoints = checkpoints;
					this.players[i].checkpointsCache = checkpointsCache;
					if (!this.firstPlayer || this.currentTime == 0) {
						this.cameraFocus = this.players[i].head
					}
				}
			}
		}
		removeCheckpoint() {
			for (var i in this.players) {
				if (this.players[i].checkpoints.length > 0) {
					if (this.players[i].checkpointsCache !== void 0) {
						this.players[i].checkpointsCache.push(this.players[i].checkpoints[this.players[i].checkpoints.length - 1]);
					}
					this.players[i].checkpoints.pop()
				}
			}
		}
		removeCheckpointUndo() {
			for (var i in this.players) {
				if (this.players[i].checkpointsCache.length > 0) {
					if (this.players[i].checkpoints !== void 0) {
						checkpoints.push(checkpointsCache[checkpointsCache.length - 1]);
						this.players[i].checkpoints.push(this.players[i].checkpointsCache[this.players[i].checkpointsCache.length - 1]);
					}
					this.players[i].checkpointsCache.pop()
				}
			}
		}
		reset() {
			this.firstPlayer.checkpoints = [];
			this.firstPlayer.checkpointsCache = [];
			if (this.players.length > 1) {
				for (var i = 1; i < this.players.length; i++) {
					this.players[i].checkpoints = [];
					this.players[i].checkpointsCache = [];
				}
			}
			this.gotoCheckpoint()
		}
		removeCollectedItems() {
			var a, b, c, d, e;
			for (a in this.grid) {
				if (this.grid.hasOwnProperty(a)) {
					for (b in this.grid[a]) {
						if (this.grid[a].hasOwnProperty(b)) {
							e = this.grid[a][b];
							c = 0;
							for (d = e.powerups.length; c < d; c++) {
								if (e.powerups[c].used !== void 0) {
									e.powerups[c].used = !1
								}
							}
						}
					}
				}
			}
		}
		watchGhost(a, b) {
			var b = b || track
			, e = [], c, d;
			!function(a) {
				e.push(a);
				d && (c = a(c));
				return {
					ab
				}
			}(function(a) {
				var c = [{}, {}, {}, {}, {}];
				5 < a.split(",").length && (c = c.concat(a.split(",").slice(5)));
				for (var d = 0, e, m, n; 5 > d; d++) {
					n = a.split(",")[d].split(" ");
					e = 0;
					for (m = n.length - 1; e < m; e++)
						c[d][n[e]] = 1
				}
				b.ghost_data = c
				b.players.push(b.ghost_data[6] === "BMX" ? new BMXBike(this, 1, [], b.ghost_data) : new MountainBike(this, 1, [], b.ghost_data))
				b.reset()
			});
			!function(a) {
				d = !0;
				c = a;
				for (var b = 0, f = e.length; b < f; b++) {
					e[b](a)
				}
			}(a);
			track.paused = !1;
		}
		collide(a) {
			var x = Math.floor(a.pos.x / this.scale - 0.5),
				y = Math.floor(a.pos.y / this.scale - 0.5),
				grid = this.grid;
			if (grid[x] !== void 0) {
				if (grid[x][y] !== void 0) {
					grid[x][y].za()
				}
				if (grid[x][y + 1] !== void 0) {
					grid[x][y + 1].za()
				}
			}
			if (grid[x + 1] !== void 0) {
				if (grid[x + 1][y] !== void 0) {
					grid[x + 1][y].za()
				}
				if (grid[x + 1][y + 1] !== void 0) {
					grid[x + 1][y + 1].za()
				}
			}
			if (grid[x] !== void 0 && grid[x][y] !== void 0) {
				grid[x][y].collide(a)
			}
			if (grid[x + 1] !== void 0) {
				if (grid[x + 1][y] !== void 0) {
					grid[x + 1][y].collide(a)
				}
				if (grid[x + 1][y + 1] !== void 0) {
					grid[x + 1][y + 1].collide(a)
				}
			}
			if (grid[x] !== void 0 && grid[x][y + 1] !== void 0) {
				grid[x][y + 1].collide(a)
			}
			return this
		}
		update() {
			if (!this.paused) {
				for (const p of this.players)
					p.update(...arguments);
				this.currentTime += 1e3 / 25
			}
			this.cameraFocus && this.camera.addToSelf(this.cameraFocus.pos.sub(this.camera).scale(0.3));
			return this
		}
		render() {
			this.draw();
			for (var i in this.players)
				this.players[i].draw();
			ctx.save();
			tool.draw.config();
			tool.draw.left();
			"eraser\\brush\\scenery brush".split(/\\/).includes(tool.selected) && tool.draw.bottomLeft();
			this.editor && tool.draw.right();
			ctx.restore();
		}
		draw() {
			var b = this.firstPlayer
			, c = this.currentTime
			, d = this.zoom
			, e = this.scale
			, f = R.toPixel()
			, h = this.grid;
			ctx.fillStyle = '#fff';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.lineWidth = Math.max(2 * d, 0.5);
			if (track.cameraLock && !Hb && "line\\scenery line\\brush\\scenery brush\\teleporter".split(/\\/).includes(tool.selected))
				50 > f.x ? (this.camera.x -= 10 / d,
				R.x -= 10 / d) : f.x > canvas.width - 50 && (this.camera.x += 10 / d,
				R.x += 10 / d),
				50 > f.y ? (this.camera.y -= 10 / d,
				R.y -= 10 / d) : f.y > canvas.height - 50 && (this.camera.y += 10 / d,
				R.y += 10 / d),
				ctx.strokeStyle = "#f00",
				f = R.toPixel(),
				ctx.beginPath(),
				ctx.moveTo(U.toPixel().x, U.toPixel().y),
				ctx.lineTo(f.x, f.y),
				ctx.stroke();
			var i = (new Vector(0,0)).adjustToCanvas()
			, l = (new Vector(canvas.width,canvas.height)).adjustToCanvas();
			i.x = Math.floor(i.x / e);
			i.y = Math.floor(i.y / e);
			l.x = Math.floor(l.x / e);
			l.y = Math.floor(l.y / e);
			var m = [], n, x, w, y, C;
			for (w = i.x; w <= l.x; w++) {
				for (y = i.y; y <= l.y; y++) {
					if (h[w] !== void 0 && h[w][y] !== void 0) {
						if (0 < h[w][y].physics.length || 0 < h[w][y].scenery.length) {
							m[C = w + "_" + y] = 1;
							if (this.sectors[C] === void 0) {
								n = this.sectors[C] = document.createElement("canvas");
								n.width = e * d;
								n.height = e * d;
								var M = n.getContext("2d");
								M.lineCap = "round";
								M.lineWidth = Math.max(2 * d, 0.5);
								M.strokeStyle = "#aaa";
								n = 0;
								for (x = h[w][y].scenery.length; n < x; n++)
									h[w][y].scenery[n].draw(M, w * e * d, y * e * d);
								M.strokeStyle = "#000";
								Ib && (M.shadowOffsetX = M.shadowOffsetY = 2,
								M.shadowBlur = Math.max(2, 10 * d),
								M.shadowColor = "#000");
								n = 0;
								for (x = h[w][y].physics.length; n < x; n++)
									h[w][y].physics[n].draw(M, w * e * d, y * e * d)
							}
							ctx.drawImage(this.sectors[C], Math.floor(canvas.width / 2 - this.camera.x * d + w * e * d), Math.floor(canvas.height / 2 - this.camera.y * d + y * e * d))
						}
						ctx.strokeStyle = "#000";
						n = 0;
						for (x = h[w][y].powerups.length; n < x; n++) {
							h[w][y].powerups[n].draw();
						}
					}
				}
			}
			for (var X in this.sectors)
				m[X] === void 0 && delete this.sectors[X];
			if (250 !== canvas.width) {
				if (Hb) {
					tool.eraser.draw();
				} else if ("camera" !== tool.selected && !this.cameraFocus)
					switch (tool.selected) {
					case "line":
					case "scenery line":
					case "brush":
					case "scenery brush":
						ctx.lineWidth = 1;
						ctx.strokeStyle = "#000";
						w = f.x;
						y = f.y;
						const size = 10 * dpr;
						ctx.beginPath(),
						ctx.moveTo(w - size, y),
						ctx.lineTo(w + size, y),
						ctx.moveTo(w, y + size),
						ctx.lineTo(w, y - size),
						ctx.stroke();
						break;
					case "eraser":
						tool.eraser.draw();
						break;
					case "goal":
					case "checkpoint":
					case "bomb":
					case "slow-mo":
					case "antigravity":
					case "teleporter":
						ctx.fillStyle = tool.selected == "goal" ? "#ff0" : tool.selected == "checkpoint" ? "#00f" : tool.selected == "bomb" ? "#f00" : tool.selected == "slow-mo" ? "#eee" : tool.selected == "antigravity" ? "#0ff" : "#f0f";
						ctx.beginPath(),
						ctx.arc(f.x, f.y, 7 * d, 0, 2 * Math.PI, !0),
						ctx.fill(),
						ctx.stroke();
						break;
					case "boost":
					case "gravity":
						ctx.beginPath(),
						ctx.fillStyle = tool.selected == "boost" ? "#ff0" : "#0f0",
						ctx.save();
						if (track.cameraLock) {
							ctx.translate(U.toPixel().x, U.toPixel().y),
							ctx.rotate(Math.atan2(-(R.x - U.x), R.y - U.y));
						} else {
							ctx.translate(f.x, f.y);
						}
						ctx.moveTo(-7 * d, -10 * d),
						ctx.lineTo(0, 10 * d),
						ctx.lineTo(7 * d, -10 * d),
						ctx.lineTo(-7 * d, -10 * d),
						ctx.fill(),
						ctx.stroke(),
						ctx.restore()
					}
				ctx.beginPath();
				ctx.fillStyle = "#ff0";
				ctx.lineWidth = 1;
				const left = tool.draw.boxSize * dpr + 15;
				ctx.arc(left, 12, 3.5, 0, 2 * Math.PI, !0),
				ctx.fill(),
				ctx.stroke(),
				ctx.beginPath();
				ctx.lineWidth = 10;
				ctx.strokeStyle = "#fff";
				ctx.fillStyle = "#000";
				e = Math.floor(c / 6E4);
				h = Math.floor(c % 6E4 / 1E3);
				c = Math.floor((c - 6E4 * e - 1E3 * h) / 100);
				i = "";
				10 > e && (e = "0" + e);
				10 > h && (h = "0" + h);
				i = e + ":" + h + "." + c;
				if (this.paused && !window.autoPause) {
					i += " - Game paused";
				} else if (b && b.dead) {
					i = "Press ENTER to restart";
					if (this.firstPlayer.checkpoints.length > 1) {
						i += " or BACKSPACE to cancel Checkpoint"
					}
				} else if (this.id === void 0) {
					if (tool.grid === 10 && "line\\scenery line\\brush\\scenery brush".split(/\\/).includes(tool.selected)) {
						i += " - Grid ";
					}
					i += " - " + tool.selected;
					if ("brush\\scenery brush".split(/\\/).includes(tool.selected)) {
						i += " ( size " + tool.brush.length + " )";
					}
				}
				if (V && V[2] !== void 0 && !V[0] && !V[1]) {
					i += " - " + (this.paused ? "Unp" : "P") + "ause ( SPACE )";
				}
				ctx.strokeText(i = ": " + this.firstPlayer.targetsCollected + " / " + this.targets + "  -  " + i, left + 10, 16);
				ctx.fillText(i, left + 10, 16);
				if (this.players.length > 1) {
					for (var i = 1; i < this.players.length; i++) {
						ctx.fillStyle = "#aaa";
						ctx.textAlign = "right";
						ctx.strokeText(i = (this.players[i].name || "Ghost") + (this.players[i].targetsCollected === this.targets ? " finished!" : ": " + this.players[i].targetsCollected + " / " + this.targets), canvas.width - 7, 16);
						ctx.fillText(i, canvas.width - 7, 16);
						ctx.textAlign = "left";
						ctx.fillStyle = "#000";
					}
				}
				if (V && V[2] !== void 0) {
					if (V[0]) {
						ctx.textAlign = "right";
						if (document.documentElement.offsetHeight <= window.innerHeight) {
							ctx.strokeText(V[2], canvas.width - left - 1, 15 + tool.draw.boxSize * dpr * V[1]);
							ctx.fillText(V[2], canvas.width - left - 1, 15 + tool.draw.boxSize * dpr * V[1]);
						} else {
							ctx.strokeText(V[2], canvas.width - left - 11, 15 + tool.draw.boxSize * dpr * V[1]);
							ctx.fillText(V[2], canvas.width - left - 11, 15 + tool.draw.boxSize * dpr * V[1]);
						}
						ctx.textAlign = "left";
					} else {
						ctx.strokeText(V[2], left - 4, 15 * dpr + tool.draw.boxSize * dpr * V[1]);
						ctx.fillText(V[2], left - 4, 15 * dpr + tool.draw.boxSize * dpr * V[1]);
					}
				}
				if (this.Ab) {
					b = (canvas.width - 250) / 2;
					c = (canvas.height - 150) / 2;
					ctx.lineWidth = 1;
					ctx.strokeStyle = "#fff";
					ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
					ctx.fillRect(0, 0, canvas.width, c);
					ctx.fillRect(0, c + 150, canvas.width, c);
					ctx.fillRect(0, c, b, 150);
					ctx.fillRect(b + 250, c, b, 150);
					ctx.strokeRect(b, c, 250, 150);
				}
			}
		}
		erase(a) {
			function b(b) {
				(b = b.erase(a)) && l.push(b)
			}
			var c = Math.floor(a.x / this.scale - 0.5), d = Math.floor(a.y / this.scale - 0.5), e = this.grid[c], c = this.grid[c + 1], f, h, i, l = [];
			if (e !== void 0) {
				f = e[d];
				h = e[d + 1];
				if (f !== void 0) {
					if (tool.eraser.settings.physics) {
						for (e = 0, i = f.physics.length; e < i; e++) {
							f.physics[e] && b(f.physics[e]);
						}
					}
					if (tool.eraser.settings.scenery) {
						for (e = 0, i = f.scenery.length; e < i; e++) {
							f.scenery[e] && b(f.scenery[e]);
						}
					}
					if (tool.eraser.settings.powerups) {
						for (e = 0, i = f.powerups.length; e < i; e++) {
							f.powerups[e] && b(f.powerups[e]);
						}
					}
				}
				if (h !== void 0) {
					if (tool.eraser.settings.physics) {
						for (e = 0, i = h.physics.length; e < i; e++) {
							h.physics[e] && b(h.physics[e]);
						}
					}
					if (tool.eraser.settings.scenery) {
						for (e = 0, i = h.scenery.length; e < i; e++) {
							h.scenery[e] && b(h.scenery[e]);
						}
					}
					if (tool.eraser.settings.powerups) {
						for (e = 0, i = h.powerups.length; e < i; e++) {
							h.powerups[e] && b(h.powerups[e])
						}
					}
				}
			}
			if (c !== void 0) {
				f = c[d];
				d = c[d + 1];
				if (f !== void 0) {
					if (tool.eraser.settings.physics) {
						for (e = 0, i = f.physics.length; e < i; e++) {
							f.physics[e] && b(f.physics[e]);
						}
					}
					if (tool.eraser.settings.scenery) {
						for (e = 0, i = f.scenery.length; e < i; e++) {
							f.scenery[e] && b(f.scenery[e]);
						}
					}
					if (tool.eraser.settings.powerups) {
						for (e = 0, i = f.powerups.length; e < i; e++) {
							f.powerups[e] && b(f.powerups[e])
						}
					}
				}
				if (d !== void 0) {
					if (tool.eraser.settings.physics) {
						for (e = 0, i = d.physics.length; e < i; e++) {
							d.physics[e] && b(d.physics[e]);
						}
					}
					if (tool.eraser.settings.scenery) {
						for (e = 0, i = d.scenery.length; e < i; e++) {
							d.scenery[e] && b(d.scenery[e]);
						}
					}
					if (tool.eraser.settings.powerups) {
						for (i = d.powerups.length; e < i; e++) {
							d.powerups[e] && b(d.powerups[e]);
						}
					}
				}
			}
			e = 0;
			for (i = this.powerups.length; e < i; e++) {
				this.powerups[e] && this.powerups[e].Remove !== void 0 && l.push(this.powerups.splice(e--, 1)[0]);
			}
			return l
		}
		addLine(a, b, c) {
			a = new (c ? SceneryLine : PhysicsLine)(a.x,a.y,b.x,b.y,this);
			if (2 <= a.len && 1E5 > a.len && (this.addLineInternal(a), "line\\scenery line\\brush\\scenery brush".split(/\\/).includes(tool.selected)))
				if ("line\\brush".split(/\\/).includes(tool.selected)) {
					Lb.copy(R)
				} else {
					Mb.copy(R)
				}
				U.copy(R);
			return a
		}
		addLineInternal(a) {
			var b = function(a, b, c) {
				var zb = {};
				zb[c] || (zb[c] = {});
				var d = a + ";" + b;
				if (zb[c][d]) {
					return zb[c][d];
				}
				var d = zb[c][d] = []
				, e = new Vector(a.x,a.y)
				, f = (b.y - a.y) / (b.x - a.x)
				, h = new Vector(a.x < b.x ? 1 : -1,a.y < b.y ? 1 : -1)
				, i = 0;
				for (d.push(a); 5E3 > i && !(Math.floor(e.x / c) === Math.floor(b.x / c) && Math.floor(e.y / c) === Math.floor(b.y / c));) {
					var l = new Vector(0 > h.x ? Math.round(Math.ceil((e.x + 1) / c + h.x) * c) - 1 : Math.round(Math.floor(e.x / c + h.x) * c),0);
					l.y = Math.round(a.y + (l.x - a.x) * f);
					var m = new Vector(0,0 > h.y ? Math.round(Math.ceil((e.y + 1) / c + h.y) * c) - 1 : Math.round(Math.floor(e.y / c + h.y) * c));
					m.x = Math.round(a.x + (m.y - a.y) / f);
					if (Math.pow(l.x - a.x, 2) + Math.pow(l.y - a.y, 2) < Math.pow(m.x - a.x, 2) + Math.pow(m.y - a.y, 2)) {
						e = l;
						d.push(l);
					} else {
						e = m;
						d.push(m);
					}
					i++
				}
				return d
			}(a.a, a.b, this.scale), c, d, e, f;
			e = 0;
			for (f = b.length; e < f; e++)
				c = Math.floor(b[e].x / this.scale),
				d = Math.floor(b[e].y / this.scale),
				this.grid[c] === void 0 && (this.grid[c] = {}),
				this.grid[c][d] === void 0 && (this.grid[c][d] = new Sector),
				a.hb ? this.grid[c][d].scenery.push(a) : this.grid[c][d].physics.push(a),
				delete this.sectors[c + "_" + d]
		}
		read(a = "-18 1i 18 1i###BMX") {
			ctx.fillText("Loading track... Please wait.", 36, 16);
			var e = a.split("#")
			, i = e[0].split(",")
			, s = []
			, n = [];
			if (e.length > 2)
				var s = e[1].split(",")
				, n = e[2].split(",");
			else if (e.length > 1)
				var n = e[1].split(",");
			this.addLines(i, this.addLine),
			this.addLines(s, this.addLine, !0);
			for (var t in n) {
				e = n[t].split(/\s+/g);
				var i, b = parseInt(e[1], 32);
				var d = parseInt(e[2], 32);
				switch (e[0]) {
					case "T":
						i = new Target(b, d, this);
						this.targets++;
						this.powerups.push(i);
						break;
					case "C":
						i = new Checkpoint(b,d,this);
						this.powerups.push(i);
						break;
					case "B":
						i = new Boost(b, d, parseInt(e[3], 32) + 180,this);
						break;
					case "G":
						i = new Gravity(b, d, parseInt(e[3], 32) + 180,this);
						break;
					case "O":
						i = new Bomb(b, d, this);
						break;
					case "S":
						i = new Slowmo(b, d, this);
						break;
					case "A":
						i = new Antigravity(b, d, this);
						break;
					case "W":
						i = new Teleporter(b, d, this);
						i.tpb(parseInt(e[3], 32), parseInt(e[4], 32));
						this.powerups.push(i);
				}
				if (i) {
					b = Math.floor(b / this.scale);
					d = Math.floor(d / this.scale);
					if (this.grid[b] === void 0) this.grid[b] = {};
					if (this.grid[b][d] === void 0) this.grid[b][d] = new Sector;
					this.grid[b][d].powerups.push(i);
				}
			}
		}
		addLines(t, e, scenery = !1) {
			for (var i = t.length, s = 0; i > s; s++) {
				var n = t[s].split(" ")
				, r = n.length;
				if (r > 3) {
					for (var o = 0; r - 2 > o; o += 2) {
						var a = parseInt(n[o], 32)
						, h = parseInt(n[o + 1], 32)
						, l = parseInt(n[o + 2], 32)
						, c = parseInt(n[o + 3], 32)
						, u = a + h + l + c;
						isNaN(u) || e.call(this, { x: a, y: h }, { x: l, y: c }, scenery)
					}
				}
			}
		}
		addToSelf(a, b) {
			for (var i = 0, d = a.length; i < d; i++) {
				if (a[i].type) {
					a[i] = new a[i].type(a[i].x,a[i].y,this)
				}
				if (b) {
					this.addLineInternal(a[i])
				} else {
					this.addLine(a[i].a, a[i].b, a[i].hb)
				}
			}
		}
		remove(a, b) {
			b === void 0 && (b = a);
			for (var c = function(a, b, c) {
				var zb = {};
				zb[c] || (zb[c] = {});
				var d = a + ";" + b;
				if (zb[c][d])
					return zb[c][d];
				var d = zb[c][d] = []
				, e = new Vector(a.x,a.y)
				, f = (b.y - a.y) / (b.x - a.x)
				, h = new Vector(a.x < b.x ? 1 : -1,a.y < b.y ? 1 : -1)
				, i = 0;
				for (d.push(a); 5E3 > i && !(Math.floor(e.x / c) === Math.floor(b.x / c) && Math.floor(e.y / c) === Math.floor(b.y / c)); ) {
					var l = new Vector(0 > h.x ? Math.round(Math.ceil((e.x + 1) / c + h.x) * c) - 1 : Math.round(Math.floor(e.x / c + h.x) * c),0);
					l.y = Math.round(a.y + (l.x - a.x) * f);
					var m = new Vector(0,0 > h.y ? Math.round(Math.ceil((e.y + 1) / c + h.y) * c) - 1 : Math.round(Math.floor(e.y / c + h.y) * c));
					m.x = Math.round(a.x + (m.y - a.y) / f);
					Math.pow(l.x - a.x, 2) + Math.pow(l.y - a.y, 2) < Math.pow(m.x - a.x, 2) + Math.pow(m.y - a.y, 2) ? (e = l,
					d.push(l)) : (e = m,
					d.push(m));
					i++
				}
				return d
			}(a, b, this.scale), d = [], e = 0, f = c.length; e < f; e++) {
				var h = Math.floor(c[e].x / this.scale),
					i = Math.floor(c[e].y / this.scale),
					d = d.concat(this.grid[h][i].remove());
				delete this.sectors[h + "_" + i]
			}
			e = 0;
			for (f = d.length; e < f; e++)
				d[e].Remove = !1
		}
		pushUndo(a, b) {
			this.undoManager.push({
				undo: a,
				redo: b
			});
			return this
		}
		undo() {
			if ("scenery line" === tool.selected || "scenery brush" === tool.selected) {
				var a = Math.floor(Mb.x / this.scale)
				, b = Math.floor(Mb.y / this.scale);
				(a = this.grid[a][b].scenery[this.grid[a][b].scenery.length - 1]) && a.b.x === Math.round(Mb.x) && a.b.y === Math.round(Mb.y) ? (a.Remove = !0,
				Mb.copy(a.a),
				this.remove(a.a, a.b)) : alert("No more scenery line to erase!")
			} else
				a = Math.floor(Lb.x / this.scale),
				b = Math.floor(Lb.y / this.scale),
				a = this.grid[a][b].physics[this.grid[a][b].physics.length - 1],
				a !== void 0 && a.b.x === Math.round(Lb.x) && a.b.y === Math.round(Lb.y) ? (a.Remove = !0,
				Lb.copy(a.a),
				this.remove(a.a, a.b)) : alert("No more line to erase!")
		}
		toString() {
			var a = "", b = "", c = "", d;
			for (d in this.grid)
				for (var e in this.grid[d])
					if (this.grid[d][e].physics) {
						for (var f = 0; f < this.grid[d][e].physics.length; f++)
							this.grid[d][e].physics[f].ma || (a += this.grid[d][e].physics[f].a + this.grid[d][e].physics[f].getEnd() + ",");
						for (f = 0; f < this.grid[d][e].scenery.length; f++)
							this.grid[d][e].scenery[f].ma || (b += this.grid[d][e].scenery[f].a + this.grid[d][e].scenery[f].getEnd() + ",");
						for (f = 0; f < this.grid[d][e].powerups.length; f++)
							c += this.grid[d][e].powerups[f] + ","
					}
			for (d in this.grid)
				for (e in this.grid[d])
					if (this.grid[d][e].physics) {
						for (f = 0; f < this.grid[d][e].physics.length; f++)
							this.grid[d][e].physics[f].ma = !1;
						for (f = 0; f < this.grid[d][e].scenery.length; f++)
							this.grid[d][e].scenery[f].ma = !1
					}
			return a.substr(0, a.length - 1) + "#" + b.substr(0, b.length - 1) + "#" + c.substr(0, c.length - 1) + "#" + this.vehicle
		} 
	}

	class Ride {
		#frame = null;
		#lastFrameTime = -1;
		render = [];
		update = [];
		constructor(t) {
			Game.track = track = this.track = new Track(t);
			this.track.players.push(this.track.firstPlayer = this.track.vehicle === "BMX" && new BMXBike(this.track, 1, []) || new MountainBike(this.track, 1, []));
			this.track.cameraFocus = this.track.firstPlayer.head;
			this.update.push((t) => this.track.update(t));
			this.render.push(() => this.track.render());
			requestAnimationFrame(this.startTicker.bind(this))
		}
		startTicker(time) {
			this.delta = time - this.#lastFrameTime;
			if (time - this.#lastFrameTime < 1e3 / 25) {
				for (var a = this.render.length; a--;)
					this.render[a]();
				this.#frame = requestAnimationFrame(this.startTicker.bind(this));
				return;
			}
			for (var a = this.update.length; a--;)
				this.update[a](this.delta);
			for (var a = this.render.length; a--;)
				this.render[a]();
			this.#lastFrameTime = time;
			this.#frame = requestAnimationFrame(this.startTicker.bind(this));
		}
		close() {
			cancelAnimationFrame(this.#frame);
		}
	}

	document.onkeydown = function(a) {
		switch (a.keyCode) {
		case 8:
			250 !== canvas.width && a.preventDefault();
			track.removeCheckpoint();
			track.gotoCheckpoint();
			break;
		case 13:
			a.preventDefault();
			track.gotoCheckpoint();
			break;
		case 190:
			a.preventDefault();
			track.removeCheckpointUndo();
			track.gotoCheckpoint();
			break;
		case 37:
			track.firstPlayer && (a.preventDefault(),
			track.cameraFocus = track.firstPlayer.head,
			!track.firstPlayer.dead && track.firstPlayer.setButtonDown("left"),
			window.autoPause ? (track.paused = false, window.autoPause = false) : null,
			track.firstPlayer.checkpointsCache = []);
			break;
		case 39:
			track.firstPlayer && (a.preventDefault(),
			track.cameraFocus = track.firstPlayer.head,
			!track.firstPlayer.dead && track.firstPlayer.setButtonDown("right"),
			window.autoPause ? (track.paused = false, window.autoPause = false) : null,
			track.firstPlayer.checkpointsCache = []);
			break;
		case 38:
			track.firstPlayer && (a.preventDefault(),
			track.cameraFocus = track.firstPlayer.head,
			!track.firstPlayer.dead && track.firstPlayer.setButtonDown("up"),
			window.autoPause ? (track.paused = false, window.autoPause = false) : null,
			track.firstPlayer.checkpointsCache = []);
			break;
		case 40:
			track.firstPlayer && (a.preventDefault(),
			track.cameraFocus = track.firstPlayer.head,
			!track.firstPlayer.dead && track.firstPlayer.setButtonDown("down"),
			window.autoPause ? (track.paused = false, window.autoPause = false) : null,
			track.firstPlayer.checkpointsCache = []);
			break;
		case 70:
		case 122:
			document.fullscreenElement ? document.exitFullscreen() : canvas.requestFullscreen();
			break;
		case 109:
		case 189:
			track.zoomOut();
			break;
		case 107:
		case 187:
			track.zoomIn();
			break;
		case 90:
			!track.cameraFocus && track.id === void 0 ? track.undo() : track.firstPlayer.swapped && (!track.firstPlayer.dead && track.firstPlayer.setButtonDown("swap"));
			window.autoPause ? (track.paused = false, window.autoPause = false) : null;
			break;
		case 32:
			250 !== canvas.width && a.preventDefault(),
			track.paused = window.autoPause ? true : !track.paused,
			window.autoPause = false
		}
		if (track.editor && track.firstPlayer) {
			track.cameraFocus = track.firstPlayer.head;
			track.firstPlayer.checkpointsCache.splice(0);
			if (track.firstPlayer.alive) {
				switch (a.keyCode) {
				case 65:
					a.preventDefault();
					track.firstPlayer.setButtonDown("left");
					break;
				case 68:
					a.preventDefault();
					track.firstPlayer.setButtonDown("right");
					break;
				case 87:
					a.preventDefault();
					track.firstPlayer.setButtonDown("up");
					break;
				case 83:
					a.preventDefault();
					track.firstPlayer.setButtonDown("down");
				}
			}
		}
		if (track.id == void 0)
			switch (a.keyCode) {
			case 65:
				a.preventDefault();
				if (tool.selected !== "brush") {
					tool.selected = "brush";
					canvas.style.setProperty('cursor', 'none');
					Z = !0;
				} else if (!track.cameraLock) {
					track.cameraLock = !0;
					U.copy(Lb);
					Z = !0;
				}
				break;
			case 83:
				a.preventDefault();
				"scenery brush" !== tool.selected ? (tool.selected = "scenery brush",
				canvas.style.setProperty('cursor', 'none'),
				Z = !0) : track.cameraLock || (track.cameraLock = !0,
				U.copy(Mb),
				Z = !0);
				break;
			case 81:
				a.preventDefault();
				"line" !== tool.selected ? (tool.selected = "line",
				canvas.style.setProperty('cursor', 'none')) : track.cameraLock || (track.cameraLock = !0,
				U.copy(Lb),
				Z = !0);
				break;
			case 87:
				a.preventDefault();
				"scenery line" !== tool.selected ? (tool.selected = "scenery line",
				canvas.style.setProperty('cursor', 'none')) : track.cameraLock || (track.cameraLock = !0,
				U.copy(Mb),
				Z = !0);
				break;
			case 69:
				a.preventDefault();
				tool.selected = "eraser";
				canvas.style.setProperty('cursor', 'none');
				Z = !0;
				break;
			case 82:
				a.preventDefault();
				if (tool.selected != "camera") {
					tool.selectedCache = tool.selected;
					tool.selected = "camera";
					canvas.style.setProperty('cursor', 'move');
				} else {
					tool.toggleCamera = !0
				}
				break;
			case 77:
				a.preventDefault();
				track.undoManager.undo();
				break;
			case 78:
				a.preventDefault();
				track.undoManager.redo()
			}
	},
	document.onkeyup = function(a) {
		switch (a.keyCode) {
		case 66:
			a.ctrlKey && track.switchBike();
			break;
		case 37:
			!track.firstPlayer.dead && track.firstPlayer.setButtonUp("left")
			break;
		case 39:
			!track.firstPlayer.dead && track.firstPlayer.setButtonUp("right")
			break;
		case 38:
			!track.firstPlayer.dead && track.firstPlayer.setButtonUp("up")
			break;
		case 40:
			!track.firstPlayer.dead && track.firstPlayer.setButtonUp("down")
			break;
		case 90:
			track.firstPlayer.swapped = !0;
			break;
		case 71:
			if (track.players.length > 1) {
				track.cameraFocus = track.players[1].head === track.cameraFocus && track.firstPlayer ? track.firstPlayer.head : track.players[1].head
			} else {
				tool.grid = 11 - tool.grid,
				tool.descriptions.right[6] = (1 === tool.grid ? "En" : "Dis") + "able grid snapping ( G )";
			}
			break;
		case 82:
			if (!tool.toggleCamera) break;
			tool.selected = tool.selectedCache;
			canvas.style.setProperty('cursor', 'none');
			tool.toggleCamera = !1;
			break;
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
			track.id !== void 0 && track.watchGhost(a.keyCode - 48);
			break;
		case 81:
		case 87:
		case 69:
		case 83:
			track.players.length > 1 && (track.cameraFocus === track.players[1].head && (track.cameraFocus = track.firstPlayer.head),
			track.players[1] = !1);
		case 65:
			Z && (track.cameraLock = Z = !1)
		}
		if (!location.pathname.startsWith('/tracks')) return;
		switch (a.keyCode) {
		case 65: track.firstPlayer.gamepad.left = 0; break;
		case 68: track.firstPlayer.gamepad.right = 0; break;
		case 87: track.firstPlayer.gamepad.up = 0; break;
		case 83: track.firstPlayer.gamepad.down = 0
		}
	},
	canvas.onpointermove = (a, b) => {
		if (tool.selected !== "camera") track.cameraFocus = !1;
		R = (new Vector(a.offsetX * dpr, a.offsetY * dpr)).adjustToCanvas();
		if (tool.selected !== "eraser") {
			if (a.button !== 2) {
				R.x = Math.round(R.x / tool.grid) * tool.grid;
				R.y = Math.round(R.y / tool.grid) * tool.grid;
			}
		}
		if (track.cameraLock) {
			if (tool.selected === "camera") {
				track.camera.addToSelf(U.sub(R)),
				R.copy(U);
			} else if (tool.selected === "eraser" || window.BHR_RCE_ENABLED && a.button === 2) {
				var a = track.erase(R);
				if (a.length) {
					track.pushUndo(() => {
						track.addToSelf(a, !0);
					}, () => {
						for (var b = 0, c = a.length; b < c; b++) {
							a[b].remove();
						}
					});
				}
			} else if (!Z && "brush\\scenery brush".split(/\\/).includes(tool.selected) && U.distanceTo(R) >= tool.brush.length) {
				var b = track.addLine(U, R, "brush" !== tool.selected);
				track.pushUndo(function() {
					b.remove()
				}, function() {
					b.xb()
				})
			}
		}

		let t = Math.round(a.offsetX / tool.draw.boxSize);
		b = Math.floor(a.offsetX / tool.draw.boxSize);
		a = Math.floor(a.offsetY / tool.draw.boxSize);
		if (b < 1) {
			if (a > 11) {
				if ("eraser\\brush\\scenery brush".split(/\\/).includes(tool.selected)) {
					if (a > 13) {
						if (tool.selected == "eraser") {
							V = [0, a, tool.descriptions.left[a]];
						}
					} else {
						V = [0, a, tool.descriptions.left[a]];
					}
				}
			} else {
				V = [0, a, tool.descriptions.left[a]];
			}
			canvas.style.removeProperty('cursor');
		} else if (track.editor && t > Math.floor(canvas.width / dpr / tool.draw.boxSize) - 1) {
			V = [1, a, tool.descriptions.right[a]];
			if (14 === a && ("scenery line" === tool.selected || "scenery brush" === tool.selected)) {
				V[2] = "Shorten last set of scenery lines ( Z )";
			}
			canvas.style.removeProperty('cursor');
		} else {
			V = !1;
			canvas.style.setProperty('cursor', tool.selected == 'camera' ? 'move' : 'none');
		}
	},
	canvas.onmouseover = canvas.onmouseenter = function() {
		V = !1;
		canvas.style.setProperty('cursor', "camera" === tool.selected ? "move" : "none");
	},
	canvas.onpointerdown = function(a) {
		canvas.setPointerCapture(a.pointerId);
		track.cameraLock = !0;
		track.cameraFocus = !1;
		if (Math.floor(a.offsetX / tool.draw.boxSize) < 1) {
			track.cameraLock = !1;
			switch (Math.floor(a.offsetY / tool.draw.boxSize) + 1) {
			case 1:
				track.paused = !track.paused;
				break;
			case 2:
				track.gotoCheckpoint();
				break;
			case 3:
				track.removeCheckpoint();
				break;
			case 5:
				track.switchBike();
				break;
			case 7:
				Ib ? (Ib = !1,
				V[2] = tool.descriptions.left[6] = "Enable line shading") : (Ib = !0,
				V[2] = tool.descriptions.left[6] = "Disable line shading");
				track.sectors = [];
				break;
			case 8:
				if (document.fullscreenElement) {
					document.exitFullscreen();
				} else {
					canvas.requestFullscreen();
				}
				break;
			case 13:
				if (tool.selected == "eraser") {
					if (tool.eraser.size < 500) {
						tool.eraser.size += 5;
					}
				} else if ("brush\\scenery brush".split(/\\/).includes(tool.selected)) {
					if (tool.brush.length < 200) {
						tool.brush.length += 8;
					}
				}
				break;
			case 14:
				if (tool.selected == "eraser") {
					if (tool.eraser.size > 10) {
						tool.eraser.size -= 5;
					}
				} else if ("brush\\scenery brush".split(/\\/).includes(tool.selected)) {
					if (tool.brush.length > 4) {
						tool.brush.length -= 8;
					}
				}
				break;
			case 16:
				if (tool.selected != "eraser") break;
				tool.eraser.settings.physics = !tool.eraser.settings.physics;
				V[2] = tool.descriptions.left[15];
				break;
			case 17:
				if (tool.selected != "eraser") break;
				tool.eraser.settings.scenery = !tool.eraser.settings.scenery;
				V[2] = tool.descriptions.left[16];
				break;
			case 18:
				if (tool.selected != "eraser") break;
				tool.eraser.settings.powerups = !tool.eraser.settings.powerups;
				V[2] = tool.descriptions.left[17];
			}
		} else if (track.editor && Math.round(a.offsetX / tool.draw.boxSize) > (canvas.width / dpr / tool.draw.boxSize) - 1) {
			track.cameraLock = !1;
			switch (Math.floor(a.offsetY / tool.draw.boxSize) + 1) {
			case 1:
				tool.selected = "brush";
				break;
			case 2:
				tool.selected = "scenery brush";
				break;
			case 3:
				tool.selected = "line";
				break;
			case 4:
				tool.selected = "scenery line";
				break;
			case 5:
				tool.selected = "eraser";
				break;
			case 6:
				tool.selected = "camera";
				break;
			case 7:
				if (tool.grid === 1) {
					tool.grid = 10;
					V[2] = tool.descriptions.right[6] = "Disable grid snapping ( G )";
				} else {
					tool.grid = 1;
					V[2] = tool.descriptions.right[6] = "Enable grid snapping ( G )";
				}
				break;
			case 9:
				tool.selected = "goal";
				break;
			case 10:
				tool.selected = "checkpoint";
				break;
			case 11:
				tool.selected = "boost";
				break;
			case 12:
				tool.selected = "gravity";
				break;
			case 13:
				tool.selected = "bomb";
				break;
			case 14:
				tool.selected = "slow-mo";
				break;
			case 15:
				tool.selected = "antigravity";
				break;
			case 16:
				tool.selected = "teleporter";
				break;
			case 18:
				track.undo()
			}
		} else if (a.button === 2 && tool.selected !== "camera") {
			var a = track.erase(R);
			a.length && track.pushUndo(() => {
				track.addToSelf(a, !0);
			}, () => {
				for (var b = 0, c = a.length; b < c; b++) {
					a[b].remove();
				}
			});
			Hb = !0;
		} else {
			var b;
			Z || U.copy(R);
			switch (tool.selected) {
			case "boost":
			case "gravity":
				canvas.style.setProperty('cursor', 'crosshair');
				break;
			case "eraser":
				var a = track.erase(R);
				a.length && track.pushUndo(() => {
					track.addToSelf(a, !0);
				}, () => {
					for (var b = 0, c = a.length; b < c; b++) {
						a[b].remove();
					}
				});
				break;
			case "goal":
				track.powerups.push(b = new Target(U.x,U.y,track));
				track.targets++;
				break;
			case "checkpoint":
				track.powerups.push(b = new Checkpoint(U.x,U.y,track));
				break;
			case "bomb":
				b = new Bomb(U.x,U.y,track);
				break;
			case "slow-mo":
				b = new Slowmo(U.x,U.y,track);
				break;
			case "antigravity":
				b = new Antigravity(U.x,U.y,track);
				break;
			case "teleporter":
				b = new Teleporter(U.x,U.y,track);
				track.teleporter = b;
				break;
			case "brush":
			case "scenery brush":
				Z && track.addLine(U, R, "brush" !== tool.selected),
				Z = !1,
				track.cameraLock = !0
			}
			if (b !== void 0) {
				var c = Math.floor(b.pos.x / track.scale)
				, d = Math.floor(b.pos.y / track.scale);
				track.grid[c] === void 0 && (track.grid[c] = []);
				track.grid[c][d] === void 0 && (track.grid[c][d] = new Sector);
				track.grid[c][d].powerups.push(b);
				track.pushUndo(function() {
					b.remove()
				}, function() {
					b instanceof Target && ++track.targets;
					track.grid[c][d].powerups.push(b)
				})
			}
		}
	},
	canvas.onpointerup = function({ pointerId: p }) {
		canvas.releasePointerCapture(p);
		var a, b, c, d;
		if (Hb)
			return Hb = !1;
		if (!track.cameraLock) return;
		Z || (track.cameraLock = !1);
		if ("line" === tool.selected || "scenery line" === tool.selected || "brush" === tool.selected || "scenery brush" === tool.selected) {
			var e = track.addLine(U, R, "line" !== tool.selected && "brush" !== tool.selected);
			track.pushUndo(
				() => e.remove(),
				() => e.xb()
			);
		} else if ("teleporter" === tool.selected) {
			U.copy(R);
			track.teleporter.tpb(U.x,U.y);
			track.teleporter = undefined;
		} else if ("boost" === tool.selected || "gravity" === tool.selected) {
			canvas.style.setProperty('cursor', 'none');
			d = Math.round(180 * Math.atan2(-(R.x - U.x), R.y - U.y) / Math.PI),
			c = "boost" === tool.selected ? new Boost(U.x,U.y,d,track) : new Gravity(U.x,U.y,d,track),
			a = Math.floor(c.pos.x / track.scale),
			b = Math.floor(c.pos.y / track.scale),
			track.grid[a] === void 0 && (track.grid[a] = []),
			track.grid[a][b] === void 0 && (track.grid[a][b] = new Sector),
			track.grid[a][b].powerups.push(c),
			track.pushUndo(
				() => c.remove(),
				() => track.grid[a][b].powerups.push(c)
			)
		}
	},
	canvas.oncontextmenu = a => a.preventDefault();
	canvas.ondommousescroll = canvas.onmousewheel = (a) => {
		a.preventDefault();
		if (Z) {
			if ("eraser" === tool.selected) {
				if ((0 < a.detail || 0 > a.wheelDelta) && 5 < tool.eraser.size) {
					tool.eraser.size -= 5;
				} else {
					if ((0 > a.detail || 0 < a.wheelDelta) && 40 > tool.eraser.size) {
						tool.eraser.size += 5
					}
				}
			} else {
				if ("brush" === tool.selected || "scenery brush" === tool.selected) {
					if ((0 < a.detail || 0 > a.wheelDelta) && 4 < tool.brush.length) {
						tool.brush.length -= 8;
					} else if ((0 > a.detail || 0 < a.wheelDelta) && 200 > tool.brush.length) {
						tool.brush.length += 8;
					}
				}
			}
		} else {
			if (0 < a.detail || 0 > a.wheelDelta) {
				track.zoomOut()
			} else if (0 > a.detail || 0 < a.wheelDelta) {
				track.zoomIn()
			};
		}
		a = (new Vector(a.offsetX * dpr, a.offsetY * dpr)).adjustToCanvas();
		track.cameraFocus || track.camera.addToSelf(R.sub(a))
	}

	self.Game = {
		defaults: {
			keydown: document.onkeydown,
			keypress: document.onkeypress,
			keyup: document.onkeyup
		},
		ride: function(t) {
			loop = new Ride(t);
		},
		newRide: function() {
			if (confirm("Do you really want to start a new track?")) {
				loop.close();
				loop.update.pop();
				loop.render.pop();
				this.ride();
				charCount.innerHTML = "Trackcode";
				code.value = null;
				track.reset()
			}
		},
		loadRide: function() {
			canvas.style.display = "block";
			document.getElementById("track_menu").style.display = "none";
			if (code.value.includes("#")) {
				var t = track.editor;
				loop.close();
				loop.update.pop();
				loop.render.pop();
				this.ride(code.value);
				charCount.innerHTML = "Trackcode";
				code.value = null;
				track.reset();
				track.editor = t;
			} else {
				alert("No trackcode to load!");
				canvas.style.display = "none";
				document.getElementById("track_menu").style.display = "block";
			}
		},
		saveRide: function() {
			if (track.id === void 0) {
				var a = new Date();
				!function(t, e) {
					if (typeof navigator.msSaveBlob == "function") return navigator.msSaveBlob(t, e);
					var saver = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
					saver.href = URL.createObjectURL(t);
					saver.download = e;
					document.body.appendChild(saver);
					saver.dispatchEvent(new MouseEvent("click"));
					document.body.removeChild(saver);
					URL.revokeObjectURL(saver.href);
				}(new Blob([track.toString()], {type: "txt"}), "black_hat_rider_" + a.getDate() + "-" + a.getMonth() + "-" + a.getFullYear());
			}
		},
		saveGhost: function() {
			if (track.id === void 0) {
				var a = new Date();
				!function(t, e) {
					if (typeof navigator.msSaveBlob == "function") return navigator.msSaveBlob(t, e);
					var saver = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
					saver.href = URL.createObjectURL(t);
					saver.download = e;
					document.body.appendChild(saver);
					saver.dispatchEvent(new MouseEvent("click"));
					document.body.removeChild(saver);
					URL.revokeObjectURL(saver.href);
				}(new Blob([records.map(Object.keys)], {type: "txt"}), "black_hat_ghost_" + a.getDate() + "-" + a.getMonth() + "-" + a.getFullYear());
			}
		},
		attach: function() {
			if (!this.defaults) return;
			document.onkeydown = this.defaults.keydown,
			document.onkeypress = this.defaults.keypress,
			document.onkeyup = this.defaults.keyup,
			this.defaults = !1
		}
	};
}();