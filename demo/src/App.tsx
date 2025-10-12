import { useState, useEffect } from 'react'
import type { ThemeName } from '@dorian-ui/my-ui-lib'
// import { ShowcaseNew } from './pages/ShowcaseNew'
import { NomadeCreation } from './pages/NomadeCreation'
import { ProductGallery } from './pages/ProductGallery'
import { ProductDetailEnhanced } from './pages/ProductDetailEnhanced'

type Page = 'home' | 'gallery' | 'product' | 'showcase'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null)
  const [theme, setTheme] = useState<ThemeName>('light')

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('ds-theme') as ThemeName | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('ds-theme', newTheme)
  }

  const handleNavigate = (page: 'home' | 'gallery' | 'product', productId?: number) => {
    setCurrentPage(page)
    if (productId !== undefined) {
      setSelectedProductId(productId)
    }
  }

  if (currentPage === 'product') {
    return (
      <ProductDetailEnhanced
        productId={selectedProductId}
        onNavigate={handleNavigate}
        theme={theme}
        onThemeChange={handleThemeChange}
      />
    )
  }

  if (currentPage === 'gallery') {
    return (
      <ProductGallery
        onNavigate={handleNavigate}
        theme={theme}
        onThemeChange={handleThemeChange}
      />
    )
  }

  // if (currentPage === 'showcase') {
  //   return <ShowcaseNew />
  // }

  return (
    <NomadeCreation
      onNavigate={handleNavigate}
      theme={theme}
      onThemeChange={handleThemeChange}
    />
  )
}
