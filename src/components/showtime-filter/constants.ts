import { CSSObjectWithLabel, GroupBase, OptionProps } from "react-select";

export const LANGUAGE_OPTIONS = [
    {
        label: 'Español',
        value: 'ESP',
    },
    {
        label: 'Subtitulada',
        value: 'SUBT'
    }
];

export const TEATHER_OPTIONS = [
    {
        label: 'Cinehoyts',
        value: 'CH',
    },
    // {
    //     label: 'Cinemark',
    //     value: 'CM',
    // },
    // {
    //     label: 'Cineplanet',
    //     value: 'CP',
    // },
]

type State = OptionProps<{
    label: string;
    value: string;
}, false, GroupBase<{
    label: string;
    value: string;
}>>;

export const SELECT_STYLES = {
    control: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        background: 'black',
    }),
    menu: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        background: 'black',
    }),
    singleValue: (baseStyles: CSSObjectWithLabel) => ({
        ...baseStyles,
        color: 'white',
    }),
    option: (baseStyles: CSSObjectWithLabel, state: State) => ({
        ...baseStyles,
        color: 'white',
        background: state.isFocused ? 'gray' : 'black'
    }),
}