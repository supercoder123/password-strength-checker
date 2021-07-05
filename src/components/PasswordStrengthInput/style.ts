import { FelaStyle } from "react-fela";

export const label: FelaStyle<{}, {}> = () => ({
    display: 'flex',
    flexDirection: 'column',
});

export const input: FelaStyle<{}, {}> = () => ({
    flexDirection: 'column',
    paddingRight: '65px',
    height: '40px',
    fontSize: '20px',
    borderRadius: '8px',
    border: '1px solid gray',
    padding: '8px 40px 8px 8px',
    width: '100%'
});

export const container: FelaStyle<{}, {}> = () => ({
    width: '600px'
});

export const eye: FelaStyle<{}, {}> = () => ({
    position: 'absolute',
    right: '10px',
    top: '18px'
});

export const inputWithEye: FelaStyle<{}, {}> = () => ({
    position: 'relative',
    display: 'flex',
});

export const progressBarRow: FelaStyle<{}, {}> = () => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    margin: '10px 0',
    alignItems: 'center'
});


