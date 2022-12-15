import {IResolvers} from "@graphql-tools/utils"
import {data} from "../data";
import {ICharacter} from "../interfaces/ICharacter";
import {IEpisode} from "../interfaces/IEpisode";
import {ILocation} from "../interfaces/ILocation";

export const queryResolvers: IResolvers = {
    Query: {
        charactersList: (): Array<ICharacter> => {
            return data.characters
        },
        episodeList: (): Array<IEpisode> => {
            return data.episodes
        },
        locationList: (): Array<ILocation> => {
            return data.locations
        },
        character: (_: void, args: {id: number, name: string}) => {
            console.log(args.id)
            return data.characters.filter(
                (value) => value.id == args.id || value.name === args.name
            )[0]
        }
    },
}
