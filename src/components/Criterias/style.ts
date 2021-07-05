import { FelaStyle } from "react-fela";

export const list: FelaStyle<{}, {}> = () => ({
    margin: '0',
    padding: '0',
    listStyle: 'none',
    '& li': {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            margin: '10px 0'
        }
    }
});