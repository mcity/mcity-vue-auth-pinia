"use strict";var _session=require("../store/session");Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkRequiresAuth=checkRequiresAuth;function checkRequiresAuth(a,b,c){// const authStore = useAuthStore()
// this.$store = useAuthStore()
console.log("ROUTE",a),a.matched.some(function(a){return a.meta.requiresAuth})?this.$store.session.accessToken?(console.log("STORE: accessToken",this.$store.session.accessToken),c()):(console.log("STORE: else accessToken",this.$store.session),localStorage.setItem(this.$store.session.oAuthState,a.fullPath),console.log("STORAGE ITEM",localStorage.getItem(this.$store.session.oAuthState)),console.log("LOCATION:",this.$store.getAuthURL),location.href=this.$store.getAuthURL,console.log("DONE")):(console.log("STORE: else",this.$store.session),c())}