export type PasswordStrength = 'Bad' | 'Weak' | 'Good' | 'Strong' | '';

export interface InitialState {
    value: string;
    passwordStrength: PasswordStrength;
    percent: number;
    touched: boolean;
    criteria: {
        sixChars: boolean;
        specialChar: boolean;
        uppercaseChar: boolean;
        greaterThan20Chars: boolean;
    }
}