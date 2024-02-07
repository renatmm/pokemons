export const getPokemonNames = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()
  return data;
}

export const getPokemonByName = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()
  return data;
} 