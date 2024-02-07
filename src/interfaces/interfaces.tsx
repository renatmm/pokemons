export interface IPokemonsNames {
    name: string,
    url: string
}

export interface IPokemon {
    id: number,
    name: string,
    isActive: boolean,
    sprites: ISprites
}

interface ISprites {
    other: IOther
}

interface IOther {
    'official-artwork': IArtwork
}

interface IArtwork {
    front_default: string
}
