import TeatherModel from "@/storage/models/teathers";
import { Teather, TeatherOption } from "@/@custom-types/teather";


export const getTeathersGroupByTeather = async (): Promise<Record<string, TeatherOption[]>> => {
    const teatherList = await TeatherModel.find({});
    return teatherList.reduce((acm: Record<string, TeatherOption[]>, el: Teather) => {
        const key = el.cinema;
        const alreadyExistKey = acm[key] ? true : false;
        const newElement = {
            label: el.alias,
            value: el.key,
        }

        return {
            ...acm,
            [key]: alreadyExistKey ? acm[key].concat(newElement) : [newElement],
        }
    }, {});
}