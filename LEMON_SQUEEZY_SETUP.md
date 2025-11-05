# Guía: Configurar Productos en Lemon Squeezy

Esta guía te ayudará a configurar tus productos de suscripción en Lemon Squeezy y conectarlos con tu aplicación.

## Paso 1: Crear Cuenta en Lemon Squeezy

1. Ve a https://app.lemonsqueezy.com/register
2. Regístrate con tu email
3. Verifica tu email
4. Completa la información de tu tienda (nombre, URL, etc.)

## Paso 2: Configurar tu Tienda

1. Ve a **Settings → General**
2. Configura:
   - Store Name (nombre de tu tienda)
   - Store URL (URL única para tu tienda)
   - Store Avatar/Logo
   - Store Description

## Paso 3: Crear Productos de Suscripción

### Para cada plan (Básico, Pro, Enterprise):

1. **Ir a Products**:
   - En el menú lateral, haz clic en **Products**
   - Haz clic en **New Product**

2. **Configurar el Producto**:
   ```
   Product Name: Plan Básico
   Description: Perfecto para empezar con tu negocio
   ```

3. **Pricing Settings**:
   - Selecciona **Subscription** (NO one-time payment)
   - **Billing Period**: Monthly (o Yearly según necesites)
   - **Price**: $9.00 USD
   - **Renewal behavior**: Renew automatically (para suscripciones recurrentes)

4. **Variants (Variantes)**:
   - Lemon Squeezy creará automáticamente una variante por defecto
   - Puedes crear múltiples variantes si quieres ofrecer diferentes periodos de facturación

   Ejemplo:
   - Variant 1: "Monthly" - $9/mes
   - Variant 2: "Yearly" - $90/año (opcional)

5. **Guardar**:
   - Haz clic en **Create Product**

6. **Repetir para los otros planes**:
   - Plan Pro: $29/mes
   - Plan Enterprise: $99/mes

## Paso 4: Obtener los Variant IDs

Después de crear cada producto:

1. Ve a **Products** en el menú
2. Haz clic en el producto que creaste
3. Busca la sección **Variants**
4. Verás algo como:

   ```
   Variant: Monthly Plan
   Variant ID: 123456
   ```

5. **Copia el Variant ID** - lo necesitarás para la app

### Ejemplo de lo que verás:

```
Product: Plan Básico
├── Variant: Monthly
│   ├── Variant ID: 123456
│   └── Price: $9.00 USD/month

Product: Plan Pro
├── Variant: Monthly
│   ├── Variant ID: 789012
│   └── Price: $29.00 USD/month

Product: Plan Enterprise
├── Variant: Monthly
│   ├── Variant ID: 345678
│   └── Price: $99.00 USD/month
```

## Paso 5: Obtener API Key (Opcional para esta app)

**NOTA**: Para esta aplicación simple, NO necesitas la API key porque usamos checkout directo.
Pero si en el futuro quieres hacer integraciones más avanzadas:

1. Ve a **Settings → API**
2. Haz clic en **Create API Key**
3. Dale un nombre: "Mi App de Suscripciones"
4. Copia y guarda la API key de forma segura

## Paso 6: Configurar la Aplicación

### 6.1 Editar el archivo de configuración

Abre el archivo `src/components/PricingPage.tsx` y actualiza los `variantId`:

```typescript
const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    variantId: '123456', // ⬅️ TU VARIANT ID del Plan Básico
    name: 'Básico',
    description: 'Perfecto para empezar',
    price: 9,
    interval: 'month',
    features: [
      'Hasta 10 proyectos',
      'Soporte por email',
      '5GB de almacenamiento',
      'Actualizaciones básicas',
    ],
  },
  {
    id: 'pro',
    variantId: '789012', // ⬅️ TU VARIANT ID del Plan Pro
    name: 'Pro',
    description: 'Para profesionales',
    price: 29,
    interval: 'month',
    popular: true,
    features: [
      'Proyectos ilimitados',
      'Soporte prioritario 24/7',
      '50GB de almacenamiento',
      'Todas las características',
      'API access',
      'Análisis avanzados',
    ],
  },
  {
    id: 'enterprise',
    variantId: '345678', // ⬅️ TU VARIANT ID del Plan Enterprise
    name: 'Enterprise',
    description: 'Para equipos grandes',
    price: 99,
    interval: 'month',
    features: [
      'Todo lo de Pro',
      'Soporte dedicado',
      'Almacenamiento ilimitado',
      'Gestión de equipos',
      'SSO y seguridad avanzada',
      'SLA garantizado',
      'Onboarding personalizado',
    ],
  },
];
```

### 6.2 Personalizar los planes

Puedes personalizar:
- `name`: Nombre del plan
- `description`: Descripción corta
- `price`: Precio mostrado (debe coincidir con Lemon Squeezy)
- `interval`: 'month' o 'year'
- `popular`: true/false para destacar un plan
- `features`: Array de características

## Paso 7: Probar el Checkout

1. **Modo Test** (recomendado primero):
   ```
   - Lemon Squeezy automáticamente está en modo test
   - Los pagos de prueba NO cobran dinero real
   - Usa tarjetas de prueba para testing
   ```

2. **Iniciar la app**:
   ```bash
   npm run dev
   ```

3. **Probar un plan**:
   - Abre http://localhost:5173
   - Haz clic en "Suscribirse" en cualquier plan
   - Serás redirigido a Lemon Squeezy checkout
   - El checkout mostrará tu producto con el precio correcto

4. **Tarjeta de prueba**:
   ```
   Número: 4242 4242 4242 4242
   Fecha: Cualquier fecha futura
   CVC: Cualquier 3 dígitos
   ```

## Paso 8: Configurar Checkout (Opcional)

### Personalizar la página de checkout:

1. Ve a **Settings → Checkout**
2. Configura:
   - **Logo**: Tu logo para el checkout
   - **Primary Color**: Color principal del checkout
   - **Button Text**: Texto del botón (ej: "Suscribirse ahora")
   - **Success URL**: URL a donde redirigir después del pago exitoso
     - Ejemplo: `https://tuapp.com/success`
   - **Cancel URL**: URL si el usuario cancela
     - Ejemplo: `https://tuapp.com/pricing`

### Ejemplo de URLs de redirección:

```
Success URL: https://tuapp.com/dashboard?payment=success
Cancel URL: https://tuapp.com/pricing?payment=cancelled
```

## Paso 9: Modo Producción

Cuando estés listo para aceptar pagos reales:

1. Ve a **Settings → General**
2. Completa toda la información requerida:
   - Tax information
   - Business details
   - Payment information (cuenta bancaria)
3. Activa **Live Mode**
4. Los pagos ahora serán reales

## Paso 10: Webhooks (Avanzado - Opcional)

Para recibir notificaciones de eventos (nueva suscripción, renovación, cancelación):

1. Ve a **Settings → Webhooks**
2. Haz clic en **Create Webhook**
3. Configura:
   ```
   URL: https://tu-backend.com/webhooks/lemonsqueezy
   Secret: [Genera uno seguro]
   Events: Selecciona los eventos que necesites
   ```

### Eventos importantes:
- `subscription_created`: Nueva suscripción
- `subscription_updated`: Suscripción actualizada
- `subscription_cancelled`: Suscripción cancelada
- `subscription_resumed`: Suscripción reanudada
- `subscription_expired`: Suscripción expirada
- `subscription_payment_success`: Pago exitoso
- `subscription_payment_failed`: Pago fallido

## Resumen de IDs Necesarios

| Concepto | Dónde encontrarlo | Para qué sirve |
|----------|-------------------|----------------|
| **Variant ID** | Products → [Tu Producto] → Variants | **REQUERIDO**: Para crear el checkout |
| Store ID | Settings → General | Opcional en esta app |
| API Key | Settings → API | Opcional en esta app |

## Solución de Problemas

### Error: "Product not found"
- Verifica que el Variant ID sea correcto
- Asegúrate de que el producto esté publicado (no en draft)

### El precio no coincide
- El precio en la app es solo visual
- El precio real viene de Lemon Squeezy
- Actualiza el precio en `PricingPage.tsx` para que coincida

### Checkout no se abre
- Verifica la consola del navegador para errores
- Asegúrate de que el Variant ID sea válido
- Verifica que no haya bloqueadores de popups

## Recursos Útiles

- [Documentación de Lemon Squeezy](https://docs.lemonsqueezy.com/)
- [API Reference](https://docs.lemonsqueezy.com/api)
- [Webhooks Guide](https://docs.lemonsqueezy.com/guides/developer-guide/webhooks)
- [Testing Guide](https://docs.lemonsqueezy.com/guides/developer-guide/testing)

## Notas Importantes

1. **No necesitas backend** para esta app básica
2. **Lemon Squeezy maneja todo**:
   - Procesamiento de pagos
   - Gestión de suscripciones
   - Facturación
   - Emails a clientes
   - Dashboard de clientes
3. **Seguridad**: Los pagos son procesados completamente por Lemon Squeezy (PCI compliant)
