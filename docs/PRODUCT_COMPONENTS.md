# Composants Produit - E-commerce

Ce document décrit les nouveaux composants créés pour améliorer les pages produit et e-commerce.

## 📦 Composants créés

### 1. **ImageGallery** 🖼️
Galerie d'images interactive avec thumbnails et badges.

**Emplacement:** `src/components/molecules/image-gallery/`

**Props principales:**
- `images`: Array d'objets `{ src, alt, badge? }`
- `aspectRatio`: `'square' | 'portrait' | 'landscape' | 'wide'`
- `thumbnailCols`: Nombre de colonnes (2-6)
- `showThumbnails`: Afficher les miniatures
- `onImageChange`: Callback lors du changement d'image

**Exemple:**
```tsx
<ImageGallery
  images={[
    { src: '/image1.jpg', alt: 'Vue 1', badge: <Badge>New</Badge> },
    { src: '/image2.jpg', alt: 'Vue 2' }
  ]}
  aspectRatio="square"
  thumbnailCols={4}
/>
```

---

### 2. **QuantitySelector** 🔢
Sélecteur de quantité avec incrémentation/décrémentation.

**Emplacement:** `src/components/molecules/quantity-selector/`

**Props principales:**
- `value`: Quantité actuelle
- `onChange`: Callback lors du changement
- `min`: Valeur minimale (défaut: 1)
- `max`: Valeur maximale (défaut: 99)
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: Désactiver le composant

**Exemple:**
```tsx
<QuantitySelector
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={10}
  size="md"
/>
```

---

### 3. **ColorPicker** 🎨
Sélecteur de couleur pour variantes de produit.

**Emplacement:** `src/components/molecules/color-picker/`

**Props principales:**
- `colors`: Array d'objets `{ value, label, hex, disabled? }`
- `selectedColor`: Couleur sélectionnée
- `onChange`: Callback lors de la sélection
- `size`: `'sm' | 'md' | 'lg'`
- `showLabel`: Afficher le label de la couleur

**Exemple:**
```tsx
<ColorPicker
  colors={[
    { value: 'noir', label: 'Noir', hex: '#000000' },
    { value: 'blanc', label: 'Blanc', hex: '#ffffff' },
    { value: 'rouge', label: 'Rouge', hex: '#ff0000', disabled: true }
  ]}
  selectedColor={selectedColor}
  onChange={setSelectedColor}
  size="lg"
/>
```

---

### 4. **SizeSelector** 📏
Sélecteur de taille pour variantes de produit.

**Emplacement:** `src/components/molecules/size-selector/`

**Props principales:**
- `sizes`: Array d'objets `{ value, label, disabled? }`
- `selectedSize`: Taille sélectionnée
- `onChange`: Callback lors de la sélection
- `variant`: `'outline' | 'solid'`
- `size`: `'sm' | 'md' | 'lg'`
- `showLabel`: Afficher le label de sélection

**Exemple:**
```tsx
<SizeSelector
  sizes={[
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL', disabled: true }
  ]}
  selectedSize={selectedSize}
  onChange={setSelectedSize}
  variant="outline"
/>
```

---

## 🎯 ProductCard Amélioré

Le composant **ProductCard** a été amélioré avec de nouvelles props :

**Nouvelles props:**
- `badge`: Texte du badge
- `badgeVariant`: Variant du badge
- `badgeColorScheme`: Couleur du badge
- `onClick`: Callback au clic sur la card
- `onAddToCart`: Callback pour ajouter au panier

**Exemple:**
```tsx
<ProductCard
  image="/product.jpg"
  title="Le Voyageur"
  description="Sac à dos en cuir..."
  price="289 €"
  badge="Bestseller"
  badgeVariant="solid"
  badgeColorScheme="success"
  onClick={() => navigate('/product/1')}
  onAddToCart={() => addToCart(product)}
/>
```

---

## 🏗️ Page ProductDetail Améliorée

Une nouvelle page de détail produit a été créée : `demo/src/pages/ProductDetailEnhanced.tsx`

### Fonctionnalités :
- ✅ Galerie d'images interactive avec ImageGallery
- ✅ Breadcrumb de navigation
- ✅ Sélecteur de couleur (ColorPicker)
- ✅ Sélecteur de taille (SizeSelector)
- ✅ Sélecteur de quantité (QuantitySelector)
- ✅ Tabs pour organiser les informations (Caractéristiques, Entretien, Avis)
- ✅ Accordion pour l'entretien du produit
- ✅ Section d'avis clients avec notes
- ✅ Features mis en avant
- ✅ Informations de livraison/garantie

### Structure :
1. **Navbar** sticky avec logo et navigation
2. **Breadcrumb** : Accueil > Produits > Le Voyageur
3. **Section Produit** (Grid 2 colonnes)
   - Gauche : Galerie d'images
   - Droite : Infos, prix, variantes, CTA
4. **Section Détails** avec Tabs
   - Caractéristiques techniques
   - Guide d'entretien (Accordion)
   - Avis clients
5. **Footer**

---

## 🚀 Utilisation

Pour voir la nouvelle page produit dans la démo :

1. Ouvrir `demo/src/App.tsx`
2. Changer `currentPage` à `'product'`
3. Lancer `pnpm run dev`
4. Ouvrir http://localhost:5173

```tsx
const [currentPage, setCurrentPage] = useState<Page>('product')
```

---

## 📚 Export des composants

Tous les nouveaux composants sont exportés dans `src/components/molecules/index.ts` et disponibles via :

```tsx
import {
  ImageGallery,
  QuantitySelector,
  ColorPicker,
  SizeSelector,
  ProductCard
} from '@dorian-ui/my-ui-lib'
```

---

## 🎨 Design System Ready

Ces composants suivent le design system existant :
- Utilisation des tokens de design (`ds-*`)
- Responsive et accessible
- Support des thèmes (light/dark)
- Cohérent avec les autres composants
- TypeScript avec types complets

---

## 📦 Ready for NPM

Ces composants sont prêts à être partagés dans votre bibliothèque npm :
- Build réussi ✅
- Types générés ✅
- Documentation ✅
- Exemples d'utilisation ✅
