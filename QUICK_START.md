# 🚀 Quick Start - Configuración Rápida

## TL;DR - Pasos Mínimos

### 1️⃣ Crear cuenta en Lemon Squeezy
👉 https://app.lemonsqueezy.com/register

### 2️⃣ Crear 3 productos (Básico, Pro, Enterprise)
```
Products → New Product → Subscription

Plan Básico:     $9/mes
Plan Pro:       $29/mes
Plan Enterprise: $99/mes
```

### 3️⃣ Copiar los Variant IDs
Después de crear cada producto:
```
Products → [Tu Producto] → Ver el Variant ID
```

Ejemplo:
```
✅ Plan Básico    → Variant ID: 123456
✅ Plan Pro       → Variant ID: 789012
✅ Plan Enterprise → Variant ID: 345678
```

### 4️⃣ Actualizar en la app
Edita `src/components/PricingPage.tsx` líneas 9-53:

```typescript
{
  id: 'basic',
  variantId: '123456', // ⬅️ Pega tu Variant ID aquí
  ...
}
```

### 5️⃣ Iniciar la app
```bash
npm run dev
```

### 6️⃣ Probar
- Abre http://localhost:5173
- Haz clic en "Suscribirse"
- Usa tarjeta de prueba: `4242 4242 4242 4242`

---

## 📋 Checklist

- [ ] Cuenta creada en Lemon Squeezy
- [ ] 3 productos creados
- [ ] 3 Variant IDs copiados
- [ ] Variant IDs actualizados en `PricingPage.tsx`
- [ ] App iniciada con `npm run dev`
- [ ] Checkout probado

---

## ❓ Necesitas más detalles?

Lee la guía completa: [LEMON_SQUEEZY_SETUP.md](./LEMON_SQUEEZY_SETUP.md)

---

## 🎯 Estructura Visual de Lemon Squeezy

```
Lemon Squeezy Dashboard
│
├── 📦 Products
│   ├── Plan Básico
│   │   └── Variant: Monthly → Variant ID: 123456 ⭐
│   ├── Plan Pro
│   │   └── Variant: Monthly → Variant ID: 789012 ⭐
│   └── Plan Enterprise
│       └── Variant: Monthly → Variant ID: 345678 ⭐
│
├── ⚙️ Settings
│   ├── General (Store info)
│   ├── Checkout (Personalización)
│   └── API (API keys - opcional)
│
└── 📊 Dashboard
    └── Ver ventas y suscripciones
```

---

## 🔍 Dónde está cada Variant ID en el código

```typescript
// Archivo: src/components/PricingPage.tsx

const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    variantId: 'AQUÍ_VA_EL_ID_DEL_PLAN_BASICO', // 👈 Línea ~12
    ...
  },
  {
    id: 'pro',
    variantId: 'AQUÍ_VA_EL_ID_DEL_PLAN_PRO', // 👈 Línea ~25
    ...
  },
  {
    id: 'enterprise',
    variantId: 'AQUÍ_VA_EL_ID_DEL_PLAN_ENTERPRISE', // 👈 Línea ~40
    ...
  },
];
```

---

## 💡 Tips

1. **Modo Test por defecto**: Lemon Squeezy inicia en modo test, no cobrarás dinero real hasta activar modo producción

2. **No necesitas API key**: Esta app usa checkout directo, solo necesitas los Variant IDs

3. **Precios en el código**: Los precios mostrados en la app son solo visuales. El precio real viene de Lemon Squeezy

4. **Personaliza después**: Primero haz que funcione, luego personaliza colores, textos, etc.

---

## 🐛 Problemas Comunes

| Problema | Solución |
|----------|----------|
| "No se abre el checkout" | Verifica que el Variant ID sea correcto |
| "Product not found" | Asegúrate de que el producto esté publicado |
| "El precio es diferente" | Cambia el precio en Lemon Squeezy o en `PricingPage.tsx` |

---

## 📱 Contacto y Ayuda

- [Documentación Lemon Squeezy](https://docs.lemonsqueezy.com/)
- [Soporte Lemon Squeezy](https://lemonsqueezy.com/help)
