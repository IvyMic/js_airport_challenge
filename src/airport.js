function Airport(){
	this.planes = [];
};

Airport.prototype.land = function(plane) {
	this.planes.push(plane);
	return "Plane Landed"
};

Airport.prototype.takeoff = function(plane){
	this.planes.pop(plane);
};
