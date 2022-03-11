import Stripe from 'stripe'

// Also tried:
// import * as Stripe from 'stripe';

const stripe = new Stripe('sk_test_xyz', {
  apiVersion: null
});
