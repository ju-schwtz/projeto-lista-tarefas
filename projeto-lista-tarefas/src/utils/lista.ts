// lista.ts

export function adicionaTarefa(lista: string[], novaTarefa: string): string[] {
  if (novaTarefa.trim() === '') return lista;
  return [...lista, novaTarefa];
}

export function removeTarefa(lista: string[], index: number): string[] {
  return lista.filter((_, i) => i !== index);
}
