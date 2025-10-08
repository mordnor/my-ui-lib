import React from 'react';
export type SectionBg = 'app' | 'surface' | 'inverse';
export type SectionSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type SectionVertical = 'sm' | 'md' | 'lg' | 'xl';
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    bg?: SectionBg;
    size?: SectionSize;
    vertical?: SectionVertical;
    className?: string;
    noContainer?: boolean;
}
