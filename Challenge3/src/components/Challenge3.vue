<template>
  <div>
    <button class="refreshButton" @click="refresh()">Refresh</button>
    <div class="border">
      <div v-if="!gameOver">
        <div v-for="(data, index) in new_state">
          <div class="tile" v-bind:style="tileValue" v-for="(tileValue, index) in data":class="'tile'.concat(tileValue)">
            <label v-if="tileValue > 0">{{tileValue}}</label>
          </div>
        </div>
        <button class="addButton" @click="moveLeft()">Move Left</button>
        <button class="addButton" @click="moveUp()">Move Up</button>
        <button class="addButton" @click="moveRight()">Move Right</button>
        <button class="addButton" @click="moveDown()">Move Down</button>
      </div>
      <div v-else>
        <div class="overlay"> Game Over</div>
      </div>
    </div>
  </div>
</template>

<script>
import placeNew from '../game';
import swipe from '../tileMovement';
let initial_state = [
  [0, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let new_state = placeNew(initial_state);
export default {
  name: 'Challenge3',
  data () {
    return {
      new_state : new_state,
      gameOver : false,
      tileValue : ''
    }
  },
  methods: {
    addTile(new_state) {
      let current_state = placeNew(new_state);
      if (-1 == current_state) {
        this.gameOver = true;
      } else {
        let array = [];
        current_state.forEach(function(element) {
          let elementObject = Object.assign({}, element);

          let arr = Object.keys(elementObject).map(i => elementObject[i]);
          array.push(arr);
        });
        this.new_state = array;
      }
    },
    moveLeft() {
      let current_state = swipe(this.new_state, "LEFT");
      this.removeObserve(current_state);
      this.addTile(this.new_state);
    },
    moveRight() {
      let current_state = swipe(this.new_state, "RIGHT")
      this.removeObserve(current_state);
      this.addTile(this.new_state);
    },
    moveDown() {
      //let old_state = [...this.new_state];
      let current_state = swipe(this.new_state, "DOWN");
      this.removeObserve(current_state);
      // if (JSON.stringify(old_state) === JSON.stringify(this.new_state)) {
      //   this.addTile(this.new_state);
      // }
      this.addTile(this.new_state);
    },
    moveUp() {
      let current_state = swipe(this.new_state, "UP");
      this.removeObserve(current_state);
      this.addTile(this.new_state);
    },
    refresh() {
      this.new_state = initial_state;
    },
    removeObserve(current_state) {
      let array = [];
      current_state.forEach(function(element) {
        let elementObject = Object.assign({}, element);
        let arr = Object.keys(elementObject).map(i => elementObject[i]);
        array.push(arr);
      });
      this.new_state = array;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/game.css" scoped>

</style>
