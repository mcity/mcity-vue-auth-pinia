"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useAuthStore=void 0;var _utils=require("../utils"),_pinia=require("pinia"),useAuthStore=(0,_pinia.defineStore)("authStore",{state:function state(){return{user:{},userRoles:"true"===process.env.VUE_APP_TESTING?["MCITY"]:null,accessToken:"true"===process.env.VUE_APP_TESTING?"test":null,oAuthServer:process.env.VUE_APP_OAUTH_SERVER,oAuthKey:process.env.VUE_APP_OAUTH_KEY,redirectURI:process.env.VUE_APP_REDIRECT_URI,silentRedirectURI:"".concat(process.env.VUE_APP_HOST,"/refresh.html"),oAuthScope:process.env.VUE_APP_OAUTH_SCOPE,oAuthState:(0,_utils.uuidv4)(),iframeRef:null,showIframe:!1}},actions:{setUser:function setUser(a,b){a.user=b},setUserRoles:function setUserRoles(a,b){a.userRoles=b},setAccessToken:function setAccessToken(a,b){a.accessToken=b},setIframeRef:function setIframeRef(a,b){a.iframeRef=b},setShowIframe:function setShowIframe(a,b){a.showIframe=b}},getters:{getUser:function getUser(a){return a.user},getFullName:function getFullName(a){return"".concat(a.user.first_name," ").concat(a.user.last_name)},getUserRoles:function getUserRoles(a){return a.userRoles},getAccessToken:function getAccessToken(a){return a.accessToken},getAuthURL:function getAuthURL(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:state,b=a.oAuthServer,c=a.oAuthKey,d=a.redirectURI,e=a.oAuthScope,f=a.oAuthState;return"".concat(b,"oauth/authorize?response_type=token&client_id=").concat(c,"&redirect_uri=").concat(d,"&scope=").concat(e,"&state=").concat(f)},getOAuthState:function getOAuthState(a){return a.oAuthState},getOAuthServer:function getOAuthServer(a){return a.oAuthServer},getRefreshAuthURL:function getRefreshAuthURL(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:state,b=a.oAuthServer,c=a.oAuthKey,d=a.silentRedirectURI,e=a.oAuthScope,f=a.oAuthState;return"".concat(b,"oauth/authorize?response_type=token&client_id=").concat(c,"&redirect_uri=").concat(d,"&scope=").concat(e,"&state=").concat(f)},getIframeRef:function getIframeRef(a){return a.iframeRef},getShowIframe:function getShowIframe(a){return a.showIframe},getSilentRedirect:function getSilentRedirect(a){return a.silentRedirectURI}}});exports.useAuthStore=useAuthStore;