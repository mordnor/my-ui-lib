import React from 'react'
import Navbar from './nav'
import HeroSection from './hero-section'
import ProductsSection from './product-section'
import ValuesSection from './value-section'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ds-background-app">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ValuesSection />
    </div>
  )
}
