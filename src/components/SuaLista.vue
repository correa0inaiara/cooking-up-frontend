<script lang="ts">
import { PropType } from 'vue';
import Tag from './Tag.vue';


export default {
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true }
  },
  components: { Tag }
}
</script>

<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto">
      Sua lista:
    </span>

    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
      <!-- é uma boa prática utilizar o key junto ao v-for -->
      <!-- v-bind permite escrever javascript dentro das aspas -->
      <!-- v-bind:key="ingrediente" pode ser utilizado como :key="ingrediente" -->
      <li v-for="ingrediente in ingredientes" :key="ingrediente">
        <!-- ao invés de escrever :ativa"true", pelo valor ser verdadeiro, eu poderia escrever assim: ativa -->
        <Tag :texto="ingrediente" :ativa="true" />
      </li>
    </ul>

    <p v-else class="paragrafo lista-vazia">
      <img src="../assets/imagens/lista-vazia.svg" alt="ícone de pesquisa">
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<style scoped>
.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>