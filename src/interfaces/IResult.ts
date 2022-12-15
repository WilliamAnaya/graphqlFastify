import {ICharacter} from "./ICharacter";
import {ILocation} from "./ILocation";
import {IEpisode} from "./IEpisode";

export interface IResult {
    status: boolean;
    message: string;
    list?: Array<ICharacter | ILocation | IEpisode>;
    item?: ICharacter | ILocation | IEpisode;
}
