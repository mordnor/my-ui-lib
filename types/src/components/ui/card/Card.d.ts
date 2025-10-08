import React from 'react';
import type { DSCardProps } from './Card.types';
type CardSectionProps = {
    children: React.ReactNode;
    className?: string;
};
type CardSubComponents = {
    Header: React.FC<CardSectionProps>;
    Body: React.FC<CardSectionProps>;
    Footer: React.FC<CardSectionProps>;
};
/**
 * 🧱 Card — composant conteneur du Design System
 * Tokenisé via classes `ds-*`, avec sous-composants explicites.
 */
export declare const Card: React.FC<DSCardProps> & CardSubComponents;
export {};
