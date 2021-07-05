export function updateText(text: string) {
    return {
        type: 'setValue',
        payload: {
            value: text
        }
    }
}

export function setTouched() {
    return {
        type: 'setTouched',
    }
}

export function addPercent(percent: number) {
    return {
        type: 'addPercent',
        payload: {
            value: percent
        }
    }
}

export function subtractPercent(percent: number) {
    return {
        type: 'subtractPercent',
        payload: {
            value: percent
        }
    }
}

export function setStrength(strength: string) {
    return {
        type: 'setStrength',
        payload: {
            value: strength
        }
    }
}