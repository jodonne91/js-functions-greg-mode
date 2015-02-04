describe("Decimal to Hexidecimal converter functions", function(){

	describe("hex", function(){

		it("should return Hexidecimal value of small numbers", function(){
			
			expect(hex(2)).to.equal('2');
			expect(hex(15)).to.equal('F');
			expect(hex(0)).to.equal('0');

			//occasion of improper input
			expect(hex(17)).to.equal(null);
		});
	});

	describe("numToHex", function(){


		it("should return proper hexidecimal values of larger numbers", function(){
		
			expect(numToHex(3333)).to.equal('14D');
			expect(numToHex(145)).to.equal('91');
			expect(numToHex(2015)).to.equal('7DF');

		)};
	});
});