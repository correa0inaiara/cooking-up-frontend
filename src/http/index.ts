import ICategoria from "../interfaces/ICategoria"
import IReceita from "../interfaces/IReceita"

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url)
  return resposta.json() as T
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json')
}

// export async function obterCategorias() {
//   const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')
  
//   const categorias: ICategoria[] = await resposta.json() as ICategoria[]

//   return categorias
// }

// export async function obterReceitas() {
//   const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json')
  
//   const receitas: IReceita[] = await resposta.json() as IReceita[]

//   return receitas
// }