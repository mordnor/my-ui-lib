# Guide de Navigation - Application Demo

Ce document explique comment fonctionne la navigation entre les différentes pages de l'application de démonstration.

---

## 📍 Structure de Navigation

L'application demo comprend 3 pages principales :

1. **Landing Page** (`NomadeCreation`) - Page d'accueil
2. **Product Gallery** (`ProductGallery`) - Galerie de tous les produits
3. **Product Detail** (`ProductDetailEnhanced`) - Détail d'un produit spécifique

---

## 🔄 Flux de Navigation

```
Landing Page (Home)
    ↓
    ├─→ Cliquer sur "Produits" dans navbar → Product Gallery
    │
    └─→ Cliquer sur une ProductCard → Product Detail
                                         ↑
                                         │
Product Gallery ─────────────────────────┘
    (cliquer sur une ProductCard)
```

---

## 🎯 Comment ça fonctionne

### 1. **App.tsx** - Gestionnaire de navigation

Le composant principal gère l'état de navigation :

```tsx
const [currentPage, setCurrentPage] = useState<Page>('home')
const [selectedProductId, setSelectedProductId] = useState<number | null>(null)

const handleNavigate = (page: 'home' | 'gallery' | 'product', productId?: number) => {
  setCurrentPage(page)
  if (productId !== undefined) {
    setSelectedProductId(productId)
  }
}
```

**États gérés :**
- `currentPage` : Page actuellement affichée ('home' | 'gallery' | 'product')
- `selectedProductId` : ID du produit sélectionné (pour la page détail)

---

### 2. **Landing Page** - Points de navigation

#### Navbar
```tsx
<Navbar
  links={[
    { label: 'Accueil', active: true },
    { label: 'Produits', onClick: () => onNavigate?.('gallery') },
    // ...
  ]}
/>
```

#### ProductCards
```tsx
<ProductCard
  title="Le Voyageur"
  // ...
  badge="Bestseller"
  onClick={() => onNavigate?.('product', 1)} // ID produit = 1
/>
```

**6 produits affichés** avec IDs 1-6 :
- ID 1: Le Voyageur (Bestseller)
- ID 2: L'Élégant
- ID 3: Le Nomade (Nouveau)
- ID 4: La Citadine
- ID 5: Le Baroudeur (Premium)
- ID 6: Le Raffiné

---

### 3. **Product Gallery** - Navigation vers détail

```tsx
<ProductCard
  // ...
  badge={product.badge}
  badgeVariant="solid"
  badgeColorScheme={
    product.badge === 'Bestseller' ? 'success' :
    product.badge === 'Nouveau' ? 'info' :
    product.badge === 'Premium' ? 'warning' : 'primary'
  }
  onClick={() => onNavigate?.('product', product.id)}
/>
```

**Mapping des badges :**
- Bestseller → Badge vert (success)
- Nouveau → Badge bleu (info)
- Premium → Badge jaune (warning)
- Edition Limitée → Badge primaire

---

### 4. **Product Detail** - Navigation retour

#### Navbar
```tsx
<Navbar
  links={[
    { label: 'Accueil', onClick: () => onNavigate?.('home') },
    { label: 'Produits', onClick: () => onNavigate?.('gallery') },
    // ...
  ]}
/>
```

#### Breadcrumb
```tsx
<Breadcrumb
  items={[
    { label: 'Accueil', href: '#', icon: <i className="pi pi-home"></i> },
    { label: 'Produits', href: '#' },
    { label: 'Le Voyageur', isCurrentPage: true },
  ]}
/>
```

---

## 🎨 ProductCard - Props de navigation

Le composant `ProductCard` a été étendu avec de nouvelles props :

```tsx
interface ProductCardProps {
  // Props existantes
  image: string
  title: string
  description: string
  price: string

  // Nouvelles props
  badge?: string                    // Texte du badge
  badgeVariant?: 'solid' | 'soft' | 'outline'
  badgeColorScheme?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  onClick?: () => void              // Navigation vers détail
  onAddToCart?: () => void          // Ajouter au panier (optionnel)

  // Props techniques
  variant?: 'elevated' | 'outlined' | 'filled'
  hoverable?: boolean
  className?: string
}
```

**Utilisation complète :**
```tsx
<ProductCard
  image="/product.jpg"
  title="Le Voyageur"
  description="Sac à dos en cuir..."
  price="289 €"
  badge="Bestseller"
  badgeVariant="solid"
  badgeColorScheme="success"
  onClick={() => navigate('product', 1)}
  onAddToCart={() => addToCart(1)}
/>
```

---

## 🚀 Comment tester la navigation

### Étape 1 : Lancer le serveur
```bash
pnpm run dev
```

### Étape 2 : Ouvrir l'application
Ouvrir http://localhost:5173 dans votre navigateur

### Étape 3 : Tester les flux

#### Flux 1 : Home → Gallery → Product Detail
1. Vous êtes sur la **Landing Page**
2. Cliquez sur "Produits" dans la navbar
3. Vous arrivez sur la **Product Gallery**
4. Cliquez sur une **ProductCard**
5. Vous arrivez sur la **Product Detail**

#### Flux 2 : Home → Product Detail (direct)
1. Vous êtes sur la **Landing Page**
2. Scrollez vers les produits en bas
3. Cliquez directement sur une **ProductCard**
4. Vous arrivez sur la **Product Detail**

#### Flux 3 : Navigation retour
1. Depuis la **Product Detail**
2. Cliquez sur "Accueil" dans la navbar → retour à **Home**
3. OU cliquez sur "Produits" dans la navbar → retour à **Gallery**
4. OU cliquez sur le breadcrumb → navigation contextuelle

---

## 💡 Points importants

### 1. **Gestion d'état centralisée**
La navigation est gérée au niveau de `App.tsx` avec `useState` :
- Simple et efficace pour une démo
- Facile à débugger
- Pas de dépendances externes

### 2. **Props forwarding**
Chaque page reçoit la fonction `onNavigate` :
```tsx
interface PageProps {
  onNavigate?: (page: 'home' | 'gallery' | 'product', productId?: number) => void
}
```

### 3. **ProductCard réutilisable**
Le composant `ProductCard` est agnostique de la navigation :
- Reçoit un callback `onClick`
- Ne connaît pas la structure de navigation
- Peut être utilisé dans n'importe quel contexte

### 4. **Type-safe navigation**
TypeScript garantit la sécurité des types :
```tsx
type Page = 'home' | 'gallery' | 'product' | 'showcase'
```

---

## 🔮 Améliorations futures

### 1. **React Router**
Pour une vraie application, utiliser React Router :
```tsx
<Routes>
  <Route path="/" element={<NomadeCreation />} />
  <Route path="/gallery" element={<ProductGallery />} />
  <Route path="/product/:id" element={<ProductDetail />} />
</Routes>
```

### 2. **URL Parameters**
Partager des liens directs vers les produits :
```
https://example.com/product/1  → Le Voyageur
https://example.com/product/2  → L'Élégant
```

### 3. **Back button du navigateur**
Gérer le bouton retour du navigateur avec `useNavigate` et `useParams`

### 4. **Deep linking**
Permettre d'ouvrir directement un produit depuis un lien externe

### 5. **Loading states**
Ajouter des états de chargement pendant la navigation

### 6. **Transitions**
Ajouter des animations de transition entre les pages avec Framer Motion

---

## 📚 Fichiers concernés

- **demo/src/App.tsx** - Gestionnaire principal de navigation
- **demo/src/pages/NomadeCreation.tsx** - Landing page avec navigation
- **demo/src/pages/ProductGallery.tsx** - Galerie avec navigation
- **demo/src/pages/ProductDetailEnhanced.tsx** - Détail avec breadcrumb
- **src/components/molecules/product-card/ProductCard.tsx** - Composant avec onClick

---

## ✅ Résumé

La navigation fonctionne maintenant **de bout en bout** :

✅ Landing Page → Gallery
✅ Gallery → Product Detail
✅ Landing Page → Product Detail (direct)
✅ Breadcrumb de navigation
✅ Badges sur les ProductCards
✅ Navigation retour depuis Product Detail
✅ Type-safe avec TypeScript
✅ ProductCard réutilisable et flexible

**Le flow e-commerce est complet !** 🎉
