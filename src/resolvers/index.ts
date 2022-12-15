import {queryResolvers} from "./query";
import {mutationResolvers} from "./mutations";

export const resolverIndex = {
    ...queryResolvers,
    ...mutationResolvers
}
