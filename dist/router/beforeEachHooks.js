"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkRequiresAuth=checkRequiresAuth;function checkRequiresAuth(a,b,c){a.matched.some(function(a){return a.meta.requiresAuth})?this.$store.getters.getAccessToken?c():(localStorage.setItem(this.$store.getters.getOAuthState,a.fullPath),location.href=this.$store.getters.getAuthURL):c()}