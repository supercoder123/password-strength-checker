import { FelaStyle } from "react-fela";

export const progressBar: FelaStyle<{}, {}> = () => ({
    position: 'relative',
    width: '250px',
    height: '10px',
    overflow: 'hidden',
    borderRadius: '5px'
});

export const progressBarBg: FelaStyle<{}, {}> = () => ({
    backgroundColor: '#ececec',
    height: '10px',
    borderRadius: '5px'
});

const computeColor = (progress: number | undefined) => {
    if (!progress) {
        return 'red';
    }
    if (progress < 30) {
        return 'red';
    } else if (progress < 50) {
        return '#e6e600';
    } else if (progress < 70) {
        return 'orange';
    } else if (progress < 100) {
        return 'green';
    }
}

export const progressMeter: FelaStyle<{}, { progress: number }> = ({ progress }) => ({
    width: progress?.toString() + '%',
    backgroundColor: computeColor(progress),
    height: '10px',
    position: 'absolute',
    top: '0px',
});
