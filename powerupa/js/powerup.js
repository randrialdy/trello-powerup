var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({

  'authorization-status': function (t) {
    return t.get('member', 'private', 'token')
      .then(function (token) {
        return { authorized: !!token };
      });
  },

  'authorize': function (t) {
    return t.popup({
      title: 'Authorize Power-Up',
      url: 'https://randrialdy.github.io/trello-powerup/powerupa/authorize.html',
      height: 220
    });
  },

  'board-buttons': function (t) {
    return [{
      text: 'Power-Up Home',
      callback: function (t) {
        return t.popup({
          title: 'Home',
          url: 'https://randrialdy.github.io/trello-powerup/powerupa/home.html',
          height: 300
        });
      }
    }];
  }

});
