import { PokeAbility } from "src/app/BO/poke-ability";
import { PokeMove } from "src/app/BO/poke-move";
import { PokeType } from "src/app/BO/poke-type";

export class PokeRace {
    id: number;
    pokeAbilities: PokeAbility[];
    pokeMoves: PokeMove[];
    pokeTypes: PokeType[];
    height: number;
    name: string;
    order: number;
    weight: number;
}
