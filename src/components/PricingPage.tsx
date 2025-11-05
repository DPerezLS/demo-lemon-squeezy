import { ProductCard } from './ProductCard';
import type { SubscriptionPlan } from '../types/subscription';
import './PricingPage.css';

// ========================================
// 🔧 CONFIGURACIÓN DE PLANES DE SUSCRIPCIÓN
// ========================================
// IMPORTANTE: Reemplaza las checkout URLs con las URLs reales de tu cuenta de Lemon Squeezy
//
// Cómo obtener tus Checkout URLs:
// 1. Ve a https://app.lemonsqueezy.com/products
// 2. Selecciona tu producto
// 3. Haz clic en "Share" o "Get checkout link"
// 4. Copia la URL completa que empieza con https://tutienda.lemonsqueezy.com/buy/...
//
// Guías de configuración:
// - Quick Start: Ver QUICK_START.md
// - Guía completa: Ver LEMON_SQUEEZY_SETUP.md
// ========================================

const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    checkoutUrl: 'https://danielperezorg.lemonsqueezy.com/buy/3814aa14-47c7-4c99-a0a5-85709c0eda80', // 👈 Checkout link del Plan Básico
    name: 'Básico',
    description: 'Perfecto para empezar',
    price: 34.707,
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
    checkoutUrl: 'https://danielperezorg.lemonsqueezy.com/buy/b3e270e4-c313-48fb-9b5a-158ec2c0d3ee', // 👈 Checkout link del Plan Pro
    name: 'Pro',
    description: 'Para profesionales',
    price: 111.808,
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
    checkoutUrl: 'https://danielperezorg.lemonsqueezy.com/buy/9251af30-2f71-4e55-b725-2f304e9b6d55', // 👈 Checkout link del Plan Enterprise
    name: 'Enterprise',
    description: 'Para equipos grandes',
    price: 371.848,
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

export const PricingPage = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Elige tu Plan</h1>
        <p>Selecciona el plan que mejor se adapte a tus necesidades</p>
      </div>

      <div className="pricing-cards">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <ProductCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className="pricing-footer">
        <p>Todos los planes incluyen una prueba gratuita de 14 días</p>
        <p className="footer-note">Puedes cancelar en cualquier momento. Sin preguntas.</p>
      </div>
    </div>
  );
};
