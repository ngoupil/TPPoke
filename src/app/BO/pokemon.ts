import { PokeRace } from "src/app/BO/poke-race";
import { PokeMove } from "src/app/BO/poke-move";

export class Pokemon {
    id: number;
    name: string; // alias
    pokeRace: PokeRace;
    pokeMove: PokeMove[];
}
