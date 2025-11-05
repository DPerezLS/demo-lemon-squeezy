export interface SubscriptionPlan {
  id: string;
  checkoutUrl: string; // URL completa del checkout de Lemon Squeezy
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  popular?: boolean;
}
