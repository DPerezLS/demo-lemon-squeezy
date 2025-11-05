# 🔍 Troubleshooting: Error 404 en Checkout

## Problema
Al hacer clic en "Suscribirse", recibes:
```
404: Page Not Found
Sorry, the page you are looking for could not be found.
```

## Causas Comunes

### 1. ❌ El producto está en modo Draft (Borrador)

**Solución:**
1. Ve a tu Lemon Squeezy dashboard
2. Abre **Products**
3. Encuentra tu producto
4. Asegúrate de que esté **Published** (no Draft)
5. Si está en Draft, haz clic en **Publish**

### 2. ❌ El Variant ID es incorrecto

**Cómo verificar el Variant ID correcto:**

1. Ve a https://app.lemonsqueezy.com/products
2. Haz clic en tu producto
3. Busca la sección **Variants**
4. El ID correcto se ve así:

```
Variant: Default
Variant ID: 123456  ← Este es el ID que necesitas
```

**NO confundir con:**
- Product ID (es diferente)
- Store ID (es diferente)

### 3. ❌ El producto no existe

Si acabas de crear tu cuenta en Lemon Squeezy y aún no has creado productos, el ID no funcionará.

**Solución:**
Crear un producto siguiendo esta guía → [LEMON_SQUEEZY_SETUP.md](./LEMON_SQUEEZY_SETUP.md)

### 4. ❌ Estás usando un ID de prueba

Si copiaste un ID de ejemplo o documentación, no funcionará.

**Solución:**
Usa solo IDs de productos que hayas creado en TU cuenta de Lemon Squeezy.

## ✅ Cómo Verificar si el Variant ID es Correcto

### Método 1: Probar la URL manualmente

Abre esta URL en tu navegador (reemplaza 1073875 con tu Variant ID):
```
https://checkout.lemonsqueezy.com/buy/1073875
```

**Si funciona**: Verás la página de checkout de Lemon Squeezy
**Si no funciona**: Verás el error 404 (ID incorrecto)

### Método 2: Verificar en el Dashboard

1. Ve a tu producto en Lemon Squeezy
2. Copia el Variant ID exacto
3. Pégalo en la app
4. Guarda y prueba nuevamente

## 🎯 Pasos para Solucionar

### Paso 1: Verifica tu cuenta de Lemon Squeezy

¿Ya tienes una cuenta? → https://app.lemonsqueezy.com/login

### Paso 2: Verifica tus productos

1. Ve a **Products** en el menú
2. ¿Ves al menos un producto creado?
   - ✅ **Sí**: Continúa al Paso 3
   - ❌ **No**: Crea un producto siguiendo [QUICK_START.md](./QUICK_START.md)

### Paso 3: Verifica el estado del producto

El producto debe estar:
- ✅ **Published** (publicado)
- ✅ Tener un **Variant ID** visible
- ✅ Tener un precio configurado

### Paso 4: Copia el Variant ID correcto

En tu producto de Lemon Squeezy:

```
┌─────────────────────────────────────┐
│ Product: Plan Básico               │
│ Status: Published ✓                │
│                                     │
│ Variants:                           │
│ ├─ Default Variant                 │
│ │  ├─ Price: $9.00                 │
│ │  └─ Variant ID: 1073875   ← COPIAR│
└─────────────────────────────────────┘
```

### Paso 5: Actualiza el código

Edita `src/components/PricingPage.tsx`:

```typescript
{
  id: 'basic',
  variantId: '1073875', // ← Pega el ID correcto aquí
  ...
}
```

### Paso 6: Recarga la app

```bash
# Detén el servidor (Ctrl+C)
# Inicia nuevamente
npm run dev
```

### Paso 7: Prueba nuevamente

Haz clic en "Suscribirse" y deberías ver el checkout de Lemon Squeezy.

## 🧪 Test Rápido

Para probar si tu Variant ID es válido, abre esta URL en tu navegador:

```
https://checkout.lemonsqueezy.com/buy/TU_VARIANT_ID
```

**Ejemplo con el ID que mencionaste:**
```
https://checkout.lemonsqueezy.com/buy/1073875
```

## 📸 Ejemplo Visual

### ✅ Correcto - Checkout funciona:
```
https://checkout.lemonsqueezy.com/buy/123456

┌─────────────────────────────────┐
│  🍋 Lemon Squeezy Checkout     │
│                                 │
│  Plan Básico                   │
│  $9.00 / month                 │
│                                 │
│  [Formulario de pago]          │
└─────────────────────────────────┘
```

### ❌ Incorrecto - Error 404:
```
https://checkout.lemonsqueezy.com/buy/WRONG_ID

┌─────────────────────────────────┐
│  404: Page Not Found           │
│  Sorry, the page you are       │
│  looking for could not be      │
│  found.                        │
└─────────────────────────────────┘
```

## 🆘 Aún no funciona?

### Checklist final:

- [ ] Tengo cuenta en Lemon Squeezy
- [ ] He creado al menos un producto
- [ ] El producto está en modo **Published** (no Draft)
- [ ] He copiado el **Variant ID** correcto
- [ ] He actualizado el código con el ID correcto
- [ ] He guardado los cambios
- [ ] He recargado la app

### Información para debugging:

Comparte esta información si sigues teniendo problemas:

1. **URL del error**: La URL completa que aparece en el navegador
2. **Variant ID usado**: El ID que pusiste en el código
3. **Estado del producto**: ¿Draft o Published?
4. **Screenshot**: Captura de pantalla del producto en Lemon Squeezy Dashboard

## 💡 Tips Adicionales

1. **Modo Test vs Producción**:
   - Lemon Squeezy tiene modo Test y Live
   - En modo Test, los productos de prueba tienen IDs diferentes
   - Asegúrate de estar en el modo correcto

2. **Crear producto de prueba**:
   - Crea un producto simple primero
   - Precio: $1.00
   - Tipo: Subscription - Monthly
   - Publícalo
   - Prueba con ese ID

3. **Verificar permisos**:
   - Si trabajas en equipo, verifica que tengas permisos de admin en la tienda

## 📚 Recursos

- [Crear un Producto](./LEMON_SQUEEZY_SETUP.md#paso-3-crear-productos-de-suscripción)
- [Quick Start](./QUICK_START.md)
- [Lemon Squeezy Docs](https://docs.lemonsqueezy.com/)
