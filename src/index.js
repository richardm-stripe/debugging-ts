"use strict";
exports.__esModule = true;
var stripe_1 = require("stripe");
// Also tried:
// import * as Stripe from 'stripe';
var stripe = new stripe_1["default"]('sk_test_xyz', {
    apiVersion: null
});
