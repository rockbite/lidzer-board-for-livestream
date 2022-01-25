<template>
  <div class="edit">
    <p class='player-type'>Current</p>
    <input v-model="current.player1" placeholder="Player 1"/>
    <input v-model="current.player2" placeholder="Player 2"/>
    <p class='player-type'>Upcoming</p>
    <input v-model="upcoming.player1" placeholder="Player 1"/>
    <input v-model="upcoming.player2" placeholder="Player 2"/>
    <FancyButton v-on:click="save" class='fancy-button' />
  </div>
</template>

<script>
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const currentPlayers = doc(db, 'players/current');
const upcomingPlayers = doc(db, 'players/upcoming');

// @ is an alias to /src
import FancyButton from '@/components/FancyButton.vue';

export default {
  name: 'Edit',
  data () {
    return {
      current: {
        player1: 'loading...',
        player2: 'loading...'
      },
      upcoming: {
        player1: 'loading...',
        player2: 'loading...'
      }
    }
  },
  components: {
    FancyButton,
  },
  methods: {
    save() {
      console.log('starting save');
      this.saveAsync()
        .then((_) => {
          console.log('saved!');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async saveAsync() {
      try {
        await updateDoc(currentPlayers, {
          player1: this.current.player1,
          player2: this.current.player2,
        });
        await updateDoc(upcomingPlayers, {
          player1: this.upcoming.player1,
          player2: this.upcoming.player2,
        });
      } catch (e) {
        throw e;
      }
    }
  },
  mounted () {
    getDoc(currentPlayers).then((data) => {
      this.current.player1 = data.get('player1');
      this.current.player2 = data.get('player2');
    });

    getDoc(upcomingPlayers).then((data) => {
      this.upcoming.player1 = data.get('player1');
      this.upcoming.player2 = data.get('player2');
    });
  }
}
</script>

<style lang="less" scoped>
.edit {
  .player-type {
    margin: 30px;
    color: #f0cdcd;
    font-weight: 400;
    font-size: 48px;
  }
  
  .fancy-button {
    margin-top: 30px;
  }

  input {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 24px;
  }
}
</style>