import { ButtonProps as PrimeButtonProps } from 'primereact/button';
import React from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'success' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
export interface ButtonProps extends Omit<PrimeButtonProps, 'size' | 'iconPos'> {
    variant?: ButtonVariant;
    dsSize?: ButtonSize;
    loading?: boolean;
    iconPosition?: ButtonIconPosition;
    label?: string;
    children?: React.ReactNode;
}
