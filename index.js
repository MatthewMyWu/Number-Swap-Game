var app = new Vue({
  el: '#game-view',

  data: {
    input_length: 2,
    side_length: 2,
    active_game: new Game(2),
  },

  computed: {
    solved: function() {
      return this.active_game.solved;
    }
  },

  methods: {
    new_board: function () {
      this.side_length = this.input_length;
      this.active_game = new Game(this.side_length);
    },

    should_display_tile: function (i, j) {
      return (i <= j && (j < parseInt(i) + parseInt(this.side_length)));
    },

    is_free_tile: function (tile) {
      return {
        'free-tile': tile.value < 0,
      }
    }
  }
})