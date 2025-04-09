<script lang="ts">
import { PropType } from 'vue';

export default {
  props: {
    texto: { type: String, required: true },
    // ingredientes: { type: Array as PropType<string[]>, required: true }
  },
  methods: {
    buscarReceitas() {
      // console.log('this.ingredientes', this.ingredientes)
    }
  }
}
</script>

<template>
  <button @click="buscarReceitas" type="button" class="botao-principal paragrafo-lg">Buscar Receitas!</button>
</template>

<style scoped>
.botao-principal {
  width: 19.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  cursor: pointer;
  transition: 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
}

.botao-principal:hover {
  background: var(--ocre-hover, #D1451E);
}
</style>