<template>
    <button>Save</button>
</template>

<style lang="less" scoped>
button {
  padding: 15px;
  font-size: 48px;
  font-weight: 700;
  border: 5px solid #ffbf00;
  border-radius: 15px;
  background-color: #cb0009;
  color: #ffffff;
  cursor: pointer;
  transform: scale(0.9);
}

button:hover {
  transform: scale(1);
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FancyButton'
});
</script>