import React from 'react'
import { Button } from './button/Button'

export default function App() {
  return (
    <div className="bg-surface text-text flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-primary text-3xl font-bold">🎨 Buttons avec Thème</h1>

      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Outline" variant="outline" />
      <Button label="Success" variant="success" />
      <Button label="Danger" variant="danger" />
    </div>
  )
}
