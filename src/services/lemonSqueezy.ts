/**
 * Lemon Squeezy Service
 * Handles checkout creation and redirects to Lemon Squeezy checkout page
 */

export interface CheckoutOptions {
  checkoutUrl: string;
  customData?: Record<string, any>;
}

/**
 * Creates a checkout and redirects the user to Lemon Squeezy checkout
 * @param checkoutUrl - The full checkout URL from Lemon Squeezy
 * @param customData - Optional custom data to pass to the checkout
 */
export const createCheckout = async (options: CheckoutOptions): Promise<void> => {
  const { checkoutUrl, customData } = options;

  // Use the provided checkout URL
  const url = new URL(checkoutUrl);

  // Add custom data as query parameters if provided
  if (customData) {
    Object.entries(customData).forEach(([key, value]) => {
      url.searchParams.append(`checkout[custom][${key}]`, String(value));
    });
  }

  // Redirect to the checkout page
  window.location.href = url.toString();
};
