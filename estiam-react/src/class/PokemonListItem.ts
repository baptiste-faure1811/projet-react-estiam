export class PokemonListItem{

    private name: string;
    private id: string;
    private types: string;

    constructor(id: string, name: string, types: string) {
      this.name = name;
      this.id = id;
      this.types = types
    }
}