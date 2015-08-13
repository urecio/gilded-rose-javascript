describe("Gilded Rose", function() {

  describe('Item', function () {
    it('should have a sell_in value', function () {
      items.forEach(function(item){
        expect(item.sell_in).toBeDefined();
      });
    });
    it('should have a quality value', function () {
      items.forEach(function(item){
        expect(item.quality).toBeDefined();
      });
    });
  });
  describe('None cheese items', function () {
    describe('the end of each day', function () {
      var initialItemsOnTheDay = [];
      beforeEach(function () {
        items.forEach(function(item) {
          initialItemsOnTheDay.push(
            {sell_in: item.sell_in,
            quality: item.quality}
          );
        });
        update_quality();
      });
      fit('should decrease the quality by 1', function () {

        items.forEach(function(item, index) {
          expect(item.quality).toBe(initialItemsOnTheDay[index].quality - 1);
        });

      });
      it('should decrease the sell_in by 1', function () {
        items.forEach(function(item, index){
          expect(item.quality).toBe(initialItemsOnTheDay[index].sell_in - 1);
        });
      });
    });
  });



});
