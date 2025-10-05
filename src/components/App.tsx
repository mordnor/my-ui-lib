import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { applyTheme } from '../theme/theme'
import { motion } from 'framer-motion'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    applyTheme(next ? 'dark' : 'light')
  }

  return (
    <div className="bg-background text-text min-h-screen overflow-hidden transition-colors duration-500">
      {/* NAVBAR */}
      <nav className="bg-surface/70 border-border sticky top-0 z-50 flex items-center justify-between border-b px-10 py-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <i className="pi pi-bolt text-primary text-2xl" />
          <span className="text-xl font-bold tracking-tight">FlowSync</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary">Fonctionnalités</a>
          <a className="hover:text-primary">Tarifs</a>
          <a className="hover:text-primary">FAQ</a>
          <Button
            onClick={toggleTheme}
            label={darkMode ? '☀️' : '🌙'}
            className="text-text border-border hover:bg-primary rounded-md border bg-transparent px-3 py-2 transition hover:text-white"
          />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-between px-10 py-24 md:flex-row md:px-20">
        {/* Background diagonal */}
        <div className="from-primary/20 via-surface to-background absolute inset-0 origin-top-left skew-y-3 bg-gradient-to-br" />

        <div className="relative z-10 flex-1 space-y-8">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold leading-tight"
          >
            Libérez votre productivité
            <br />
            avec <span className="text-primary">FlowSync</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-muted-text max-w-lg text-lg"
          >
            Gagnez du temps et optimisez votre workflow avec une interface
            claire, moderne et rapide.
          </motion.p>

          <div className="flex gap-4">
            <Button
              label="Démarrer gratuitement"
              className="bg-primary hover:bg-primary-hover rounded-lg border-none px-6 py-3 text-white shadow-md"
            />
            <Button
              label="Voir la démo"
              className="bg-surface border-border text-text hover:bg-primary rounded-lg border px-6 py-3 hover:text-white"
            />
          </div>
        </div>

        {/* Image hero */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-12 flex flex-1 justify-center md:mt-0"
        >
          <div className="relative w-full max-w-lg -skew-y-3 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://www.placeholderimage.eu/api"
              alt="Dashboard"
              className="w-full skew-y-3 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* FEATURE GRID */}
      <section
        id="features"
        className="bg-surface/60 px-10 py-24 backdrop-blur-lg md:px-20"
      >
        <h2 className="mb-16 text-center text-3xl font-semibold">
          ⚡ Des outils puissants pour aller plus vite
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: 'pi pi-chart-line',
              title: 'Analytics clairs',
              text: 'Des dashboards limpides et interactifs.'
            },
            {
              icon: 'pi pi-comments',
              title: 'Communication fluide',
              text: 'Collaborez sans friction entre équipes.'
            },
            {
              icon: 'pi pi-lock',
              title: 'Sécurité avancée',
              text: 'Vos données restent entre de bonnes mains.'
            },
            {
              icon: 'pi pi-cloud-upload',
              title: 'Sauvegarde auto',
              text: 'Chaque action est sauvegardée instantanément.'
            },
            {
              icon: 'pi pi-bolt',
              title: 'Performance',
              text: 'Un rendu instantané grâce à React + Tailwind.'
            },
            {
              icon: 'pi pi-cog',
              title: 'Customisation totale',
              text: 'Adaptez FlowSync à votre identité visuelle.'
            }
          ].map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border-border rounded-2xl border p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <i className={`${f.icon} text-primary text-4xl`} />
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="text-muted-text">{f.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="from-primary to-primary-hover relative overflow-hidden bg-gradient-to-br py-28 text-center text-white">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold">
            Prêt à booster votre productivité ?
          </h2>
          <p className="mb-8 text-lg">
            Rejoignez des milliers de professionnels qui utilisent FlowSync
            chaque jour.
          </p>
          <Button
            label="Créer un compte gratuit"
            className="bg-surface text-primary hover:text-primary-hover rounded-lg px-8 py-3 font-semibold shadow-lg hover:bg-white"
          />
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-border border-t py-10 text-center">
        <p className="text-muted-text">
          © {new Date().getFullYear()} FlowSync — Design System by Dorian 🚀
        </p>
      </footer>
    </div>
  )
}
