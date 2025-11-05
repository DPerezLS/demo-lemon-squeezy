import { SubscriptionPlan } from '../types/subscription';
import { createCheckout } from '../services/lemonSqueezy';
import './ProductCard.css';

interface ProductCardProps {
  plan: SubscriptionPlan;
}

export const ProductCard = ({ plan }: ProductCardProps) => {
  const handleSubscribe = async () => {
    try {
      await createCheckout({
        variantId: plan.variantId,
        customData: {
          plan_name: plan.name,
        },
      });
    } catch (error) {
      console.error('Error creating checkout:', error);
      alert('Error al procesar el pago. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className={`product-card ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <div className="badge">Más Popular</div>}

      <div className="product-header">
        <h3 className="product-name">{plan.name}</h3>
        <p className="product-description">{plan.description}</p>
      </div>

      <div className="product-price">
        <span className="price-amount">${plan.price}</span>
        <span className="price-interval">/{plan.interval === 'month' ? 'mes' : 'año'}</span>
      </div>

      <ul className="product-features">
        {plan.features.map((feature, index) => (
          <li key={index} className="feature-item">
            <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className="subscribe-button"
        onClick={handleSubscribe}
      >
        Suscribirse
      </button>
    </div>
  );
};
