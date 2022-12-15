import {IResolvers} from "@graphql-tools/utils/typings";
import {ICharacter} from "../interfaces/ICharacter";
import {data} from "../data";

export const mutationResolvers: IResolvers = {
    Mutation: {
        updateCharacter: (_: void, args: {character: ICharacter}) => {
            for (let i = 0; i < data.characters.length; i++) {
                if (data.characters[i].id === parseInt(String(args.character.id))) {
                    (data.characters[i] as ICharacter) = args.character;
                    break;
                }
            }
            return args.character
        }
    }
}
