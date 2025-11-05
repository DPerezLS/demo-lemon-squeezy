export interface SubscriptionPlan {
  id: string;
  variantId: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  popular?: boolean;
}
