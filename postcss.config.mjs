import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/**
 * 🧩 Configuration PostCSS
 * Compatible avec Vite, React et build de librairie (npm publish)
 */
export default {
  plugins: [
    // 🌀 TailwindCSS : gère les utilitaires et la purge
    tailwindcss('./tailwind.config.mjs'),

    // ⚙️ Autoprefixer : ajoute les préfixes CSS pour compatibilité cross-browser
    autoprefixer()
  ]
}
