(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[3802,3851],{53802:(f,c,s)=>{s.r(c),s.d(c,{CrtIFrameComponent:()=>o,CrtIFrameModule:()=>l});var n=s(74742),d=s(31134),a=s(75378),r=s(94450);const u=`
::-webkit-scrollbar {
	width: 6px;
	height: 8px;
}

::-webkit-scrollbar-track {
	background: #f0f0f0;
}

::-webkit-scrollbar-thumb {
	background: #C8C8C8;
	border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
	background: #A8A8A8;
}

::-webkit-scrollbar:hover {
	width: 8px;
}
`,C=["iframe"];let o=class m{constructor(){this._htmlContentType="html",this._urlContentType="url",this._htmlContentProperty="htmlContent",this._urlContentProperty="urlContent",this._contentTypeProperty="contentType"}_setIframeStyles(t){const e=t.createElement("style");e.textContent=u,t.head.appendChild(e)}_updateIframe(t){const e=this.iframe?.nativeElement;if(e){const i=e.contentDocument||e.contentWindow?.document;i&&(i.open(),i.write(t),this._setIframeStyles(i),i.close())}}_loadIframeFromUrl(t){const e=this.iframe?.nativeElement;e&&(e.src=t)}set contentType(t){t&&(this._contentType=t.toLocaleLowerCase())}get contentType(){return this._contentType}set urlContent(t){t&&(this._urlValue=t)}set htmlContent(t){t&&(this._htmlValue=t)}ngOnChanges(t){(this._htmlContentProperty in t||this._urlContentProperty in t||this._contentTypeProperty in t)&&(this.contentType===this._htmlContentType&&this._htmlValue?this._updateIframe(this._htmlValue):this.contentType===this._urlContentType&&this._urlValue&&this._loadIframeFromUrl(this._urlValue))}static#t=this.\u0275fac=function(e){return new(e||m)};static#e=this.\u0275cmp=r.\u0275\u0275defineComponent({type:m,selectors:[["crt-i-frame"]],viewQuery:function(e,i){if(e&1&&r.\u0275\u0275viewQuery(C,7),e&2){let h;r.\u0275\u0275queryRefresh(h=r.\u0275\u0275loadQuery())&&(i.iframe=h.first)}},inputs:{contentType:"contentType",urlContent:"urlContent",htmlContent:"htmlContent"},features:[r.\u0275\u0275NgOnChangesFeature],decls:3,vars:0,consts:[[1,"iframe-container"],["title","HTML viewer",1,"responsive-iframe"],["iframe",""]],template:function(e,i){e&1&&(r.\u0275\u0275elementStart(0,"div",0),r.\u0275\u0275element(1,"iframe",1,2),r.\u0275\u0275elementEnd())},styles:[`:host{height:100%}.iframe-container{position:relative;width:100%;height:100%}.responsive-iframe{position:absolute;width:100%;height:100%;border:0}
`],encapsulation:3})};(0,n.__decorate)([(0,a.CrtInput)(),(0,n.__metadata)("design:type",String),(0,n.__metadata)("design:paramtypes",[String])],o.prototype,"contentType",null),(0,n.__decorate)([(0,a.CrtInput)(),(0,n.__metadata)("design:type",String),(0,n.__metadata)("design:paramtypes",[String])],o.prototype,"urlContent",null),(0,n.__decorate)([(0,a.CrtInput)(),(0,n.__metadata)("design:type",String),(0,n.__metadata)("design:paramtypes",[String])],o.prototype,"htmlContent",null),o=(0,n.__decorate)([(0,a.CrtViewElement)({selector:"crt-i-frame",type:"crt.IFrame"}),(0,n.__metadata)("design:paramtypes",[])],o);let l=class p{static#t=this.\u0275fac=function(e){return new(e||p)};static#e=this.\u0275mod=r.\u0275\u0275defineNgModule({type:p});static#n=this.\u0275inj=r.\u0275\u0275defineInjector({imports:[d.CommonModule]})};l=(0,n.__decorate)([(0,a.CrtModule)({includes:[],viewElements:[o],requestHandlers:[]})],l),function(){(typeof ngJitMode>"u"||ngJitMode)&&r.\u0275\u0275setNgModuleScope(l,{declarations:[o],imports:[d.CommonModule],exports:[o]})}()}}]);
