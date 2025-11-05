import { ProductCard } from './ProductCard';
import { SubscriptionPlan } from '../types/subscription';
import './PricingPage.css';

// Ejemplo de planes de suscripción
// IMPORTANTE: Reemplaza estos IDs con los variant IDs reales de tu cuenta de Lemon Squeezy
const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    variantId: 'YOUR_BASIC_VARIANT_ID', // Reemplaza con tu variant ID
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
    variantId: 'YOUR_PRO_VARIANT_ID', // Reemplaza con tu variant ID
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
    variantId: 'YOUR_ENTERPRISE_VARIANT_ID', // Reemplaza con tu variant ID
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
