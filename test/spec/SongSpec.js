describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
    sinon.spy(model, 'trigger');
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      model.play();
      expect(model.trigger).to.have.been.calledWith('play', model);
    });
  });

  describe('enqueue', function() {
    it('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(model.trigger).to.have.been.calledWith('enqueue', model);
    });
  });

  describe('disenqueue', function() {
    it('triggers a "disenqueue" event', function() {
      model.disenqueue();
      expect(model.trigger).to.have.been.calledWith('disenqueue', model);
    });
  });

  describe('ended', function() {
    it('triggers an "ended" event', function() {
      model.play();
      model.disenqueue();
      expect(model.trigger).to.have.been.calledWith('disenqueue', model);
    });
  });
});
