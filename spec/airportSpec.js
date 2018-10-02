
describe("Airport", function(){

	describe("land", function() {
		it('lands the plane', function(){
			let airport = new Airport;
			let plane = new Plane;
			expect(airport.land(plane)).toEqual("Plane Landed");
		});
		
		it('adds a landed plane to the Airports list of planes', function(){
			let airport = new Airport;
			let plane = new Plane;
			airport.land(plane);
			expect(airport.planes).toEqual([plane])
		});
	});

	describe("takeoff", function(){
		it('takes off a plane', function(){
			let airport = new Airport;
			let plane = new Plane;
			let secondPlane = new Plane;
			airport.land(secondPlane)
			airport.land(plane)
			airport.takeoff(secondPlane)
			expect(airport.planes).toEqual([plane])
		});
	});
});

