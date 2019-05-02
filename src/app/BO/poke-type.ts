import { PokeRace } from "src/app/BO/poke-race";

export class PokeType {
    id: number;
    name: string;
    damageClass: string;
    doubleDamageFrom: PokeType[];
    doubleDamageTo: PokeType[];
    halfDamageFrom: PokeType[];
    halfDamageTo: PokeType[];
    noDamageFrom: PokeType[];
    noDamageTo: PokeType[];

    pokemons: PokeRace[];
}
