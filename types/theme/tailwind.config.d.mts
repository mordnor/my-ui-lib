declare namespace _default {
    let darkMode: string[];
    let content: string[];
    let safelist: {
        pattern: RegExp;
    }[];
    namespace theme {
        namespace extend {
            let colors: {
                'ds-text-primary': string;
                'ds-text-secondary': string;
                'ds-text-inverse': string;
                'ds-text-muted': string;
                'ds-bg-app': string;
                'ds-bg-surface': string;
                'ds-bg-card': string;
                'ds-bg-inverse': string;
                'ds-border-default': string;
                'ds-border-strong': string;
                'ds-border-focus': string;
                'ds-accent-primary': string;
                'ds-accent-hover': string;
                'ds-accent-active': string;
                'ds-state-success': string;
                'ds-state-danger': string;
                'ds-state-warning': string;
                'ds-state-info': string;
            };
            let spacing: any;
            let gap: any;
            let padding: any;
            let margin: any;
            namespace fontFamily {
                let sans: any;
            }
            let fontSize: any;
            let fontWeight: any;
            let lineHeight: any;
            namespace borderRadius {
                let DEFAULT: any;
                let sm: string;
                let lg: string;
                let xl: string;
            }
            let boxShadow: {
                'ds-sm': any;
                'ds-md': any;
                'ds-lg': any;
            };
            let opacity: any;
            namespace height {
                let button: any;
                let input: any;
            }
            let width: {
                icon: any;
                'avatar-sm': any;
                'avatar-md': any;
                'avatar-lg': any;
            };
        }
    }
    let plugins: never[];
}
export default _default;
