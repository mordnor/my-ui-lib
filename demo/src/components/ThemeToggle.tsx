import { useTheme } from '@dorian-ui/my-ui-lib'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="ds-relative ds-w-14 ds-h-7 ds-bg-ds-surface-tertiary ds-rounded-full ds-transition-colors ds-duration-300 ds-border ds-border-ds-border-default hover:ds-border-ds-accent-primary focus:ds-outline-none focus:ds-ring-2 focus:ds-ring-ds-accent-primary focus:ds-ring-offset-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={`ds-absolute ds-top-0.5 ds-left-0.5 ds-w-6 ds-h-6 ds-bg-white ds-rounded-full ds-transition-transform ds-duration-300 ds-flex ds-items-center ds-justify-center ds-shadow-md ${
          theme === 'dark' ? 'ds-translate-x-7' : 'ds-translate-x-0'
        }`}
      >
        {theme === 'light' ? (
          <svg
            className="ds-w-4 ds-h-4 ds-text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="ds-w-4 ds-h-4 ds-text-slate-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </span>
    </button>
  )
}
