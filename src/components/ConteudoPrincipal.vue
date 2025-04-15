<script lang="ts">
import { KeepAlive } from 'vue';
import BotaoPrincipal from './BotaoPrincipal.vue';
import MostrarReceitas from './MostrarReceitas.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas'

export default {
  data() {
    return {
      ingredientes: [] as string[],
      conteudo: 'SelecionarIngredientes' as Pagina
    }
  },
  components: { SelecionarIngredientes, Tag, SuaLista, BotaoPrincipal, MostrarReceitas },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
    removerIngrediente(ingrediente: string) {
      const index = this.ingredientes.indexOf(ingrediente)
      this.ingredientes.splice(index, 1)
    },
    navegar(pagina: Pagina) {
      this.conteudo = pagina
    }
  },
  emits: ['adicionarIngrediente', 'removerIngrediente']
}

</script>

<!-- <script setup lang="ts">
import { ref } from 'vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

const ingredientes = ref<string[]>([]);

function adicionarIngrediente(ingrediente: string) {
  ingredientes.value.push(ingrediente)
}
function removerIngrediente(ingrediente: string) {
  ingredientes.value = ingredientes.value.filter(iLista => ingrediente !== iLista);
}
</script> -->

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes v-if="conteudo == 'SelecionarIngredientes'"
        @adicionar-ingrediente="adicionarIngrediente"
        @remover-ingrediente="removerIngrediente"
        @buscar-receitas="navegar('MostrarReceitas')" />
  
      <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'"
        :ingredientes="ingredientes"
        @editar-receitas="navegar('SelecionarIngredientes')" />
    </KeepAlive>

  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>