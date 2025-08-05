function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      minPlayerDamage: 5,
      maxPlayerDamage: 12,
      minMonsterDamage: 8,
      maxMonsterDamage: 15,
      minPlayerSpecialDamage: 10,
      maxPlayerSpecialDamage: 25,
      minHealPlayer: 8,
      maxHealPlayer: 20,
      round: 0,
      winner: null,
      battleLogs: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) return { width: "0%" };
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) return { width: "0%" };

      return { width: this.playerHealth + "%" };
    },
    cannotUseSpecialAttack() {
      return this.round < 3;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value < 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    attackMonster() {
      const damage = getRandomValue(this.minPlayerDamage, this.maxPlayerDamage);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
      this.round += 1;
    },
    attackPlayer() {
      const damage = getRandomValue(
        this.minMonsterDamage,
        this.maxMonsterDamage
      );
      this.playerHealth -= damage;
      this.addLogMessage("monster", "attack", damage);
    },
    specialAttackMonster() {
      if (this.round >= 3) {
        const damage = getRandomValue(
          this.minPlayerSpecialDamage,
          this.maxPlayerSpecialDamage
        );
        this.monsterHealth -= damage;
        this.addLogMessage("player", "special-attack", damage);
        this.attackPlayer();
        this.round = 0;
      }
    },
    healPlayer() {
      const heal = getRandomValue(this.minHealPlayer, this.maxHealPlayer);
      this.playerHealth = Math.min(100, this.playerHealth + heal);
      this.addLogMessage("player", "heal", heal);
      this.attackPlayer();
      this.round += 1;
    },
    reset() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.round = 0;
      this.battleLogs = [];
    },
    surrender() {
      this.winner = "monster";
      this.playerHealth = 0;
    },
    addLogMessage(who, what, value) {
      this.battleLogs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
