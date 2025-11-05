# App de Suscripciones con Lemon Squeezy

Una aplicación sencilla de página de precios y suscripciones construida con Vite, React y TypeScript, integrada con Lemon Squeezy para procesar pagos de suscripción.

## Características

- ✨ Interfaz moderna y responsive para mostrar planes de suscripción
- 💳 Integración directa con Lemon Squeezy para checkout
- 🎨 Diseño oscuro con gradientes y animaciones suaves
- 📱 Totalmente responsive (móvil, tablet, desktop)
- ⚡ Construido con Vite para desarrollo rápido
- 🔒 TypeScript para mayor seguridad de tipos

## Requisitos Previos

- Node.js (versión 18 o superior)
- Una cuenta en [Lemon Squeezy](https://www.lemonsqueezy.com/)
- Productos/variantes creados en tu tienda de Lemon Squeezy

## Configuración

### 1. Instalación

```bash
npm install
```

### 2. Configurar Lemon Squeezy

1. Crea una cuenta en [Lemon Squeezy](https://app.lemonsqueezy.com/register)
2. Crea tu tienda y productos/variantes de suscripción
3. Obtén tu API key desde: `Settings → API`
4. Obtén el Store ID desde tu dashboard
5. Copia los **Variant IDs** de cada producto que quieras ofrecer

### 3. Variables de Entorno

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales:

```env
VITE_LEMON_SQUEEZY_API_KEY=tu_api_key_aqui
VITE_LEMON_SQUEEZY_STORE_ID=tu_store_id_aqui
```

### 4. Configurar los Planes de Suscripción

Edita el archivo `src/components/PricingPage.tsx` y reemplaza los `variantId` con los IDs reales de tus productos:

```typescript
const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    variantId: '123456', // ⬅️ Reemplaza con tu variant ID real
    name: 'Básico',
    // ... resto de la configuración
  },
  // ... más planes
];
```

Para encontrar el Variant ID:
1. Ve a tu dashboard de Lemon Squeezy
2. Selecciona tu producto
3. Encuentra el Variant ID en la página del producto

## Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Producción

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── ProductCard.tsx       # Componente de tarjeta de producto
│   ├── ProductCard.css       # Estilos de ProductCard
│   ├── PricingPage.tsx       # Página principal de precios
│   └── PricingPage.css       # Estilos de PricingPage
├── services/
│   └── lemonSqueezy.ts       # Servicio para integración con Lemon Squeezy
├── types/
│   └── subscription.ts       # Tipos TypeScript para suscripciones
├── App.tsx                   # Componente principal
├── App.css                   # Estilos de App
├── main.tsx                  # Punto de entrada
└── index.css                 # Estilos globales
```

## Cómo Funciona

1. **Mostrar Productos**: La aplicación muestra los planes de suscripción configurados en `PricingPage.tsx`
2. **Checkout**: Cuando el usuario hace clic en "Suscribirse", se crea una URL de checkout de Lemon Squeezy
3. **Redirección**: El usuario es redirigido a la página de checkout de Lemon Squeezy
4. **Pago**: Lemon Squeezy maneja todo el proceso de pago de forma segura
5. **Confirmación**: Después del pago, Lemon Squeezy puede redirigir al usuario de vuelta a tu aplicación

## Personalización

### Modificar Planes

Edita el array `SUBSCRIPTION_PLANS` en `src/components/PricingPage.tsx`:

```typescript
{
  id: 'mi-plan',
  variantId: 'TU_VARIANT_ID',
  name: 'Nombre del Plan',
  description: 'Descripción del plan',
  price: 29,
  interval: 'month', // o 'year'
  popular: true, // destacar como popular
  features: [
    'Característica 1',
    'Característica 2',
    // ...
  ],
}
```

### Estilos

Los estilos están organizados en archivos CSS separados:
- `ProductCard.css`: Estilos de las tarjetas de productos
- `PricingPage.css`: Estilos de la página de precios
- `index.css`: Estilos globales

## Webhooks (Opcional)

Para recibir notificaciones de eventos de suscripción (renovaciones, cancelaciones, etc.), configura webhooks en Lemon Squeezy:

1. Ve a `Settings → Webhooks` en tu dashboard
2. Crea un nuevo webhook
3. Selecciona los eventos que quieres recibir
4. Implementa un endpoint en tu backend para procesarlos

## Tecnologías Utilizadas

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Lemon Squeezy](https://www.lemonsqueezy.com/) - Payments

## Licencia

MIT

## Soporte

Para problemas con Lemon Squeezy, consulta su [documentación oficial](https://docs.lemonsqueezy.com/).
