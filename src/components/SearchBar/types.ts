import { InputHTMLAttributes } from 'react';

export interface ISearch extends InputHTMLAttributes<HTMLInputElement> {
    onHandleChange: (...args: any[]) => void;
}