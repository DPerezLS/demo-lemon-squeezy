import { ProductCard } from './ProductCard';
import type { SubscriptionPlan } from '../types/subscription';
import './PricingPage.css';

// ========================================
// 🔧 CONFIGURACIÓN DE PLANES DE SUSCRIPCIÓN
// ========================================
// IMPORTANTE: Reemplaza los variant IDs con los IDs reales de tu cuenta de Lemon Squeezy
//
// Cómo obtener tus Variant IDs:
// 1. Ve a https://app.lemonsqueezy.com/products
// 2. Selecciona tu producto
// 3. Copia el "Variant ID" que aparece en la página
//
// Guías de configuración:
// - Quick Start: Ver QUICK_START.md
// - Guía completa: Ver LEMON_SQUEEZY_SETUP.md
// ========================================

const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    variantId: '1073875', // 👈 PASO 1: Reemplaza con tu variant ID del Plan Básico
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
    variantId: '1073882', // 👈 PASO 2: Reemplaza con tu variant ID del Plan Pro
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
    variantId: '1073889', // 👈 PASO 3: Reemplaza con tu variant ID del Plan Enterprise
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
