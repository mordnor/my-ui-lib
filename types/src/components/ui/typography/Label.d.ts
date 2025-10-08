import React from 'react';
export interface LabelProps {
    /** Contenu du label (texte ou éléments JSX) */
    children: React.ReactNode;
    /** ID de l’input associé */
    htmlFor?: string;
    /** Classes personnalisées */
    className?: string;
    /** Désactive visuellement le label */
    disabled?: boolean;
}
/**
 * 🏷️ Label — élément de formulaire basé sur le Design System
 * Full tokenisé (`ds-*`), gère l’état désactivé et la typographie DS.
 */
export declare const Label: React.FC<LabelProps>;
