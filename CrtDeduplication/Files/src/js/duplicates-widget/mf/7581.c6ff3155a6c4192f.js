(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[7581,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,5686],{17581:(m,c,a)=>{a.r(c),a.d(c,{RemoteEntryLoader:()=>d,createGlobalRemoteEntryLoader:()=>l,getGlobalRemoteEntryLoader:()=>s});var i=a(8239),y=a(75378);function u(o){return import(o)}class d{constructor(e){this._sharingContext=e,this._loadedContainers={},this._initializedRemotes={},this._initializedShareScopes={}}_lookupExposedModule(e,n){var t=this;return(0,i.Z)(function*(){return(yield t._loadedContainers[e].get(n))()})()}_initRemote(e,n,t){var r=this;return(0,i.Z)(function*(){r._initializedRemotes[n]||(r._initializedShareScopes[t]||(yield r._sharingContext.initSharing(t),r._initializedShareScopes[t]=!0),yield e.init(r._sharingContext.shareScopes[t]),r._initializedRemotes[n]=!0)})()}_loadRemoteScriptEntry(e,n,t){return new Promise((r,_)=>{if(this._loadedContainers[n]){r();return}const h=document.createElement("script");h.src=e,h.onerror=_,h.onload=()=>{const p=window[n];this._initRemote(p,n,t),this._loadedContainers[n]=p,r()},document.body.appendChild(h)})}_loadRemoteModuleEntry(e,n){var t=this;return(0,i.Z)(function*(){if(t._loadedContainers[e])return Promise.resolve();yield u(e).then(r=>{t._initRemote(r,e,n),t._loadedContainers[e]=r})})()}load(e){var n=this;return(0,i.Z)(function*(){let t;return e.remoteEntryType===y.RemoteEntryType.Module?(yield n._loadRemoteModuleEntry(e.remoteEntry,e.shareScope),t=e.remoteEntry):(yield n._loadRemoteScriptEntry(e.remoteEntry,e.remoteName,e.shareScope),t=e.remoteName),n._lookupExposedModule(t,e.exposedModule)})()}}function s(){return window.creatio?._remoteEntryLoader}function l(o){if(s())throw new Error("Global RemoteEntryLoader instance already created");const e=new d(o);return(window.creatio??={})._remoteEntryLoader=e,e}},8239:(m,c,a)=>{a.d(c,{Z:()=>y});function i(u,d,s,l,o,e,n){try{var t=u[e](n),r=t.value}catch(_){s(_);return}t.done?d(r):Promise.resolve(r).then(l,o)}function y(u){return function(){var d=this,s=arguments;return new Promise(function(l,o){var e=u.apply(d,s);function n(r){i(e,l,o,n,t,"next",r)}function t(r){i(e,l,o,n,t,"throw",r)}n(void 0)})}}}}]);