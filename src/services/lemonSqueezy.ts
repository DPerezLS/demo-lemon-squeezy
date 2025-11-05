/**
 * Lemon Squeezy Service
 * Handles checkout creation and redirects to Lemon Squeezy checkout page
 */

const LEMON_SQUEEZY_CHECKOUT_URL = 'https://checkout.lemonsqueezy.com';

export interface CheckoutOptions {
  variantId: string;
  customData?: Record<string, any>;
}

/**
 * Creates a checkout URL and redirects the user to Lemon Squeezy checkout
 * @param variantId - The product variant ID from Lemon Squeezy
 * @param customData - Optional custom data to pass to the checkout
 */
export const createCheckout = async (options: CheckoutOptions): Promise<void> => {
  const { variantId, customData } = options;

  // Construct the checkout URL with the variant ID
  const checkoutUrl = new URL(`${LEMON_SQUEEZY_CHECKOUT_URL}/buy/${variantId}`);

  // Add custom data as query parameters if provided
  if (customData) {
    Object.entries(customData).forEach(([key, value]) => {
      checkoutUrl.searchParams.append(`checkout[custom][${key}]`, String(value));
    });
  }

  // Redirect to the checkout page
  window.location.href = checkoutUrl.toString();
};
