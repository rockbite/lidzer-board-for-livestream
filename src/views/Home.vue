<template>
  <div class="home">
    <!-- <img src="../assets/1.png" alt="robin-dude" class="robin-dude">
    <img src="../assets/2.png" alt="knight" class="knight"> -->
    <div class="vs current">
      <p class="current-name name">{{current.player1}}</p>
      <p class="upcoming-name name">{{current.player2}}</p>
    </div>
    <div class="vs upcoming">
      <p class="current-name name">{{upcoming.player1}}</p>
      <p class="upcoming-name name">{{upcoming.player2}}</p>
    </div>
  </div>
</template>

<script>
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const currentPlayers = doc(db, 'players/current');
const upcomingPlayers = doc(db, 'players/upcoming');

export default {
  name: 'Home',
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
  mounted () {
    // initalize data
    getDoc(currentPlayers).then((data) => {
      this.current.player1 = data.get('player1');
      this.current.player2 = data.get('player2');
    });

    getDoc(upcomingPlayers).then((data) => {
      this.upcoming.player1 = data.get('player1');
      this.upcoming.player2 = data.get('player2');
    });

    // listen to changes from db and update realtime
    onSnapshot(doc(db, 'players', 'current'), (doc) => {
      const { player1, player2 } = doc.data();
      this.current.player1 = player1;
      this.current.player2 = player2;
      console.log("updated data for current players");
    });

    onSnapshot(doc(db, 'players', 'upcoming'), (doc) => {
      const { player1, player2 } = doc.data();
      this.upcoming.player1 = player1;
      this.upcoming.player2 = player2;
      console.log("updated data for upcoming players");
    });
  }
}
</script>

<style lang="less" scoped>
.home {
  // .knight {
  //   position: absolute;
  //   width: 300px;
  //   bottom: 00;
  //   right: 0;
  //   z-index: -1;
  // }

  // .robin-dude {
  //   position: absolute;
  //   width: 300px;
  //   left: 0px;
  //   z-index: -1;
  // }

  .vs {
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 300px;
    background-size: 300px;
    background-repeat: no-repeat;
    background-position: top center;
    position: relative;

    .name {
      color: #f0cdcd;
      font-size: 34px;
      font-weight: 900;
      margin: 0 auto;
      max-width: 200px;
      overflow-wrap: break-word;
      font-size: 22px;
      position: absolute;
      left: 0;
      right: 0;
    }

    .current-name {
      top: 90px;
    }

    .upcoming-name {
      bottom: 65px;
    }
  }

  .current {
    background-image: url('../assets/current.png');
    margin-top: 65px;
  }

  .upcoming {
    background-image: url('../assets/upcoming.png');
    margin-top: -22px;
  }
}
</style>
