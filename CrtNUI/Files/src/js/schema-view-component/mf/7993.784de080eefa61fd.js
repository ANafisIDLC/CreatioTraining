(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[7993],{77993:(J,v,h)=>{h.r(v),h.d(v,{CLIPBOARD_OPTIONS:()=>P,ClipboardButtonComponent:()=>_,ExtendedRenderer:()=>Z,KatexSpecificOptions:()=>X,LanguagePipe:()=>C,MARKED_EXTENSIONS:()=>k,MARKED_OPTIONS:()=>w,MarkdownComponent:()=>x,MarkdownModule:()=>b,MarkdownPipe:()=>I,MarkdownService:()=>c,MarkedRenderer:()=>g.Renderer,MermaidAPI:()=>R,PrismPlugin:()=>S,SECURITY_CONTEXT:()=>D,errorClipboardNotLoaded:()=>F,errorClipboardViewContainerRequired:()=>U,errorJoyPixelsNotLoaded:()=>A,errorKatexNotLoaded:()=>L,errorMermaidNotLoaded:()=>B,errorSrcWithoutHttpClient:()=>$,provideMarkdown:()=>z});var N=h(8239),f=h(31134),t=h(94450),O=h(21322),y=h(27049),g=h(6379),j=h(2876),T=h(54514);const K=["*"],W="Copy",V="Copied";class _{constructor(){this._buttonClick$=new O.Subject,this.copied$=this._buttonClick$.pipe((0,y.switchMap)(()=>(0,O.merge)((0,O.of)(!0),(0,O.timer)(3e3).pipe((0,y.mapTo)(!1)))),(0,y.distinctUntilChanged)(),(0,y.shareReplay)(1)),this.copiedText$=this.copied$.pipe((0,y.startWith)(!1),(0,y.map)(e=>e?V:W))}onCopyToClipboardClick(){this._buttonClick$.next()}static#e=this.\u0275fac=function(n){return new(n||_)};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:_,selectors:[["markdown-clipboard"]],standalone:!0,features:[t.\u0275\u0275StandaloneFeature],decls:4,vars:7,consts:[[1,"markdown-clipboard-button",3,"click"]],template:function(n,i){n&1&&(t.\u0275\u0275elementStart(0,"button",0),t.\u0275\u0275listener("click",function(){return i.onCopyToClipboardClick()}),t.\u0275\u0275pipe(1,"async"),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"async"),t.\u0275\u0275elementEnd()),n&2&&(t.\u0275\u0275classProp("copied",t.\u0275\u0275pipeBind1(1,3,i.copied$)),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,5,i.copiedText$)))},dependencies:[f.AsyncPipe],encapsulation:2,changeDetection:0})}(function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(_,[{type:t.Component,args:[{selector:"markdown-clipboard",template:`
    <button
      class="markdown-clipboard-button"
      [class.copied]="copied$ | async"
      (click)="onCopyToClipboardClick()"
    >{{ copiedText$ | async }}</button>
  `,changeDetection:t.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[f.AsyncPipe]}]}],null,null)})();const P=new t.InjectionToken("CLIPBOARD_OPTIONS");class X{}class C{transform(e,n){return e==null&&(e=""),n==null&&(n=""),typeof e!="string"?(console.error(`LanguagePipe has been invoked with an invalid value type [${typeof e}]`),e):typeof n!="string"?(console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof n}]`),e):"```"+n+`
`+e+"\n```"}static#e=this.\u0275fac=function(n){return new(n||C)};static#t=this.\u0275pipe=t.\u0275\u0275definePipe({name:"language",type:C,pure:!0,standalone:!0})}(function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(C,[{type:t.Pipe,args:[{name:"language",standalone:!0}]}],null,null)})();var S;(function(s){s.CommandLine="command-line",s.LineHighlight="line-highlight",s.LineNumbers="line-numbers"})(S||(S={}));const k=new t.InjectionToken("MARKED_EXTENSIONS"),w=new t.InjectionToken("MARKED_OPTIONS"),A="[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information",L="[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information",B="[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information",F="[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information",U="[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function",$="[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information",D=new t.InjectionToken("SECURITY_CONTEXT");class Z extends g.Renderer{constructor(){super(...arguments),this.\u0275NgxMarkdownRendererExtendedForExtensions=!1,this.\u0275NgxMarkdownRendererExtendedForMermaid=!1}}class c{get options(){return this._options}set options(e){this._options={...this.DEFAULT_MARKED_OPTIONS,...e}}get renderer(){return this.options.renderer}set renderer(e){this.options.renderer=e}constructor(e,n,i,r,o,a,d){this.clipboardOptions=e,this.extensions=n,this.platform=r,this.securityContext=o,this.http=a,this.sanitizer=d,this.DEFAULT_MARKED_OPTIONS={renderer:new g.Renderer},this.DEFAULT_KATEX_OPTIONS={delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\begin{equation}",right:"\\end{equation}",display:!0},{left:"\\begin{align}",right:"\\end{align}",display:!0},{left:"\\begin{alignat}",right:"\\end{alignat}",display:!0},{left:"\\begin{gather}",right:"\\end{gather}",display:!0},{left:"\\begin{CD}",right:"\\end{CD}",display:!0},{left:"\\[",right:"\\]",display:!0}]},this.DEFAULT_MERMAID_OPTIONS={startOnLoad:!1},this.DEFAULT_CLIPBOARD_OPTIONS={buttonComponent:void 0},this.DEFAULT_PARSE_OPTIONS={decodeHtml:!1,inline:!1,emoji:!1,mermaid:!1,markedOptions:void 0,disableSanitizer:!1},this.DEFAULT_RENDER_OPTIONS={clipboard:!1,clipboardOptions:void 0,katex:!1,katexOptions:void 0,mermaid:!1,mermaidOptions:void 0},this._reload$=new O.Subject,this.reload$=this._reload$.asObservable(),this.options=i}parse(e,n=this.DEFAULT_PARSE_OPTIONS){const{decodeHtml:i,inline:r,emoji:o,mermaid:a,disableSanitizer:d}=n,l={...this.options,...n.markedOptions},u=l.renderer||this.renderer||new g.Renderer;this.extensions&&(this.renderer=this.extendsRendererForExtensions(u)),a&&(this.renderer=this.extendsRendererForMermaid(u));const p=this.trimIndentation(e),E=i?this.decodeHtml(p):p,M=o?this.parseEmoji(E):E,m=this.parseMarked(M,l,r);return(d?m:this.sanitizer.sanitize(this.securityContext,m))||""}render(e,n=this.DEFAULT_RENDER_OPTIONS,i){const{clipboard:r,clipboardOptions:o,katex:a,katexOptions:d,mermaid:l,mermaidOptions:u}=n;a&&this.renderKatex(e,{...this.DEFAULT_KATEX_OPTIONS,...d}),l&&this.renderMermaid(e,{...this.DEFAULT_MERMAID_OPTIONS,...u}),r&&this.renderClipboard(e,i,{...this.DEFAULT_CLIPBOARD_OPTIONS,...this.clipboardOptions,...o}),this.highlight(e)}reload(){this._reload$.next()}getSource(e){if(!this.http)throw new Error($);return this.http.get(e,{responseType:"text"}).pipe((0,y.map)(n=>this.handleExtension(e,n)))}highlight(e){if(!(0,f.isPlatformBrowser)(this.platform)||typeof Prism>"u"||typeof Prism.highlightAllUnder>"u")return;e||(e=document);const n=e.querySelectorAll('pre code:not([class*="language-"])');Array.prototype.forEach.call(n,i=>i.classList.add("language-none")),Prism.highlightAllUnder(e)}decodeHtml(e){if(!(0,f.isPlatformBrowser)(this.platform))return e;const n=document.createElement("textarea");return n.innerHTML=e,n.value}extendsRendererForExtensions(e){const n=e;return n.\u0275NgxMarkdownRendererExtendedForExtensions===!0||(this.extensions?.length>0&&g.marked.use(...this.extensions),n.\u0275NgxMarkdownRendererExtendedForExtensions=!0),e}extendsRendererForMermaid(e){const n=e;if(n.\u0275NgxMarkdownRendererExtendedForMermaid===!0)return e;const i=e.code;return e.code=function(r,o,a){return o==="mermaid"?`<div class="mermaid">${r}</div>`:i.call(this,r,o,a)},n.\u0275NgxMarkdownRendererExtendedForMermaid=!0,e}handleExtension(e,n){const i=e.lastIndexOf("://"),r=i>-1?e.substring(i+4):e,o=r.lastIndexOf("/"),a=o>-1?r.substring(o+1).split("?")[0]:"",d=a.lastIndexOf("."),l=d>-1?a.substring(d+1):"";return!!l&&l!=="md"?"```"+l+`
`+n+"\n```":n}parseMarked(e,n,i=!1){if(n.renderer){const r={...n.renderer};delete r.\u0275NgxMarkdownRendererExtendedForExtensions,delete r.\u0275NgxMarkdownRendererExtendedForMermaid,delete n.renderer,g.marked.use({renderer:r})}return i?g.marked.parseInline(e,n):g.marked.parse(e,n)}parseEmoji(e){if(!(0,f.isPlatformBrowser)(this.platform))return e;if(typeof joypixels>"u"||typeof joypixels.shortnameToUnicode>"u")throw new Error(A);return joypixels.shortnameToUnicode(e)}renderKatex(e,n){if(!!(0,f.isPlatformBrowser)(this.platform)){if(typeof katex>"u"||typeof renderMathInElement>"u")throw new Error(L);renderMathInElement(e,n)}}renderClipboard(e,n,i){if(!(0,f.isPlatformBrowser)(this.platform))return;if(typeof ClipboardJS>"u")throw new Error(F);if(!n)throw new Error(U);const{buttonComponent:r,buttonTemplate:o}=i,a=e.querySelectorAll("pre");for(let d=0;d<a.length;d++){const l=a.item(d),u=document.createElement("div");u.style.position="relative",l.parentNode.insertBefore(u,l),u.appendChild(l);const p=document.createElement("div");p.classList.add("markdown-clipboard-toolbar"),p.style.position="absolute",p.style.top=".5em",p.style.right=".5em",p.style.zIndex="1",u.insertAdjacentElement("beforeend",p),u.onmouseenter=()=>p.classList.add("hover"),u.onmouseleave=()=>p.classList.remove("hover");let E;if(r){const m=n.createComponent(r);E=m.hostView,m.changeDetectorRef.markForCheck()}else if(o)E=n.createEmbeddedView(o);else{const m=n.createComponent(_);E=m.hostView,m.changeDetectorRef.markForCheck()}let M;E.rootNodes.forEach(m=>{p.appendChild(m),M=new ClipboardJS(m,{text:()=>l.innerText})}),E.onDestroy(()=>M.destroy())}}renderMermaid(e,n=this.DEFAULT_MERMAID_OPTIONS){if(!(0,f.isPlatformBrowser)(this.platform))return;if(typeof mermaid>"u"||typeof mermaid.initialize>"u")throw new Error(B);const i=e.querySelectorAll(".mermaid");i.length!==0&&(mermaid.initialize(n),mermaid.run({nodes:i}))}trimIndentation(e){if(!e)return"";let n;return e.split(`
`).map(i=>{let r=n;return i.length>0&&(r=isNaN(r)?i.search(/\S|$/):Math.min(i.search(/\S|$/),r)),isNaN(n)&&(n=r),r?i.substring(r):i}).join(`
`)}static#e=this.\u0275fac=function(n){return new(n||c)(t.\u0275\u0275inject(P,8),t.\u0275\u0275inject(k,8),t.\u0275\u0275inject(w,8),t.\u0275\u0275inject(t.PLATFORM_ID),t.\u0275\u0275inject(D),t.\u0275\u0275inject(j.HttpClient,8),t.\u0275\u0275inject(T.DomSanitizer))};static#t=this.\u0275prov=t.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac})}(function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(c,[{type:t.Injectable}],()=>[{type:void 0,decorators:[{type:t.Inject,args:[P]},{type:t.Optional}]},{type:void 0,decorators:[{type:t.Inject,args:[k]},{type:t.Optional}]},{type:void 0,decorators:[{type:t.Inject,args:[w]},{type:t.Optional}]},{type:Object,decorators:[{type:t.Inject,args:[t.PLATFORM_ID]}]},{type:t.SecurityContext,decorators:[{type:t.Inject,args:[D]}]},{type:j.HttpClient,decorators:[{type:t.Optional}]},{type:T.DomSanitizer}],null)})();class x{get disableSanitizer(){return this._disableSanitizer}set disableSanitizer(e){this._disableSanitizer=this.coerceBooleanProperty(e)}get inline(){return this._inline}set inline(e){this._inline=this.coerceBooleanProperty(e)}get clipboard(){return this._clipboard}set clipboard(e){this._clipboard=this.coerceBooleanProperty(e)}get emoji(){return this._emoji}set emoji(e){this._emoji=this.coerceBooleanProperty(e)}get katex(){return this._katex}set katex(e){this._katex=this.coerceBooleanProperty(e)}get mermaid(){return this._mermaid}set mermaid(e){this._mermaid=this.coerceBooleanProperty(e)}get lineHighlight(){return this._lineHighlight}set lineHighlight(e){this._lineHighlight=this.coerceBooleanProperty(e)}get lineNumbers(){return this._lineNumbers}set lineNumbers(e){this._lineNumbers=this.coerceBooleanProperty(e)}get commandLine(){return this._commandLine}set commandLine(e){this._commandLine=this.coerceBooleanProperty(e)}constructor(e,n,i){this.element=e,this.markdownService=n,this.viewContainerRef=i,this.error=new t.EventEmitter,this.load=new t.EventEmitter,this.ready=new t.EventEmitter,this._clipboard=!1,this._commandLine=!1,this._disableSanitizer=!1,this._emoji=!1,this._inline=!1,this._katex=!1,this._lineHighlight=!1,this._lineNumbers=!1,this._mermaid=!1,this.destroyed$=new O.Subject}ngOnChanges(){this.loadContent()}loadContent(){if(this.data!=null){this.handleData();return}if(this.src!=null){this.handleSrc();return}}ngAfterViewInit(){!this.data&&!this.src&&this.handleTransclusion(),this.markdownService.reload$.pipe((0,y.takeUntil)(this.destroyed$)).subscribe(()=>this.loadContent())}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}render(e,n=!1){var i=this;return(0,N.Z)(function*(){const r={decodeHtml:n,inline:i.inline,emoji:i.emoji,mermaid:i.mermaid,disableSanitizer:i.disableSanitizer},o={clipboard:i.clipboard,clipboardOptions:{buttonComponent:i.clipboardButtonComponent,buttonTemplate:i.clipboardButtonTemplate},katex:i.katex,katexOptions:i.katexOptions,mermaid:i.mermaid,mermaidOptions:i.mermaidOptions},a=yield i.markdownService.parse(e,r);i.element.nativeElement.innerHTML=a,i.handlePlugins(),i.markdownService.render(i.element.nativeElement,o,i.viewContainerRef),i.ready.emit()})()}coerceBooleanProperty(e){return e!=null&&`${String(e)}`!="false"}handleData(){this.render(this.data)}handleSrc(){this.markdownService.getSource(this.src).subscribe({next:e=>{this.render(e).then(()=>{this.load.emit(e)})},error:e=>this.error.emit(e)})}handleTransclusion(){this.render(this.element.nativeElement.innerHTML,!0)}handlePlugins(){this.commandLine&&(this.setPluginClass(this.element.nativeElement,S.CommandLine),this.setPluginOptions(this.element.nativeElement,{dataFilterOutput:this.filterOutput,dataHost:this.host,dataPrompt:this.prompt,dataOutput:this.output,dataUser:this.user})),this.lineHighlight&&this.setPluginOptions(this.element.nativeElement,{dataLine:this.line,dataLineOffset:this.lineOffset}),this.lineNumbers&&(this.setPluginClass(this.element.nativeElement,S.LineNumbers),this.setPluginOptions(this.element.nativeElement,{dataStart:this.start}))}setPluginClass(e,n){const i=e.querySelectorAll("pre");for(let r=0;r<i.length;r++){const o=n instanceof Array?n:[n];i.item(r).classList.add(...o)}}setPluginOptions(e,n){const i=e.querySelectorAll("pre");for(let r=0;r<i.length;r++)Object.keys(n).forEach(o=>{const a=n[o];if(a){const d=this.toLispCase(o);i.item(r).setAttribute(d,a.toString())}})}toLispCase(e){const n=e.match(/([A-Z])/g);if(!n)return e;let i=e.toString();for(let r=0,o=n.length;r<o;r++)i=i.replace(new RegExp(n[r]),"-"+n[r].toLowerCase());return i.slice(0,1)==="-"&&(i=i.slice(1)),i}static#e=this.\u0275fac=function(n){return new(n||x)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(c),t.\u0275\u0275directiveInject(t.ViewContainerRef))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:x,selectors:[["markdown"],["","markdown",""]],inputs:{data:"data",src:"src",disableSanitizer:"disableSanitizer",inline:"inline",clipboard:"clipboard",clipboardButtonComponent:"clipboardButtonComponent",clipboardButtonTemplate:"clipboardButtonTemplate",emoji:"emoji",katex:"katex",katexOptions:"katexOptions",mermaid:"mermaid",mermaidOptions:"mermaidOptions",lineHighlight:"lineHighlight",line:"line",lineOffset:"lineOffset",lineNumbers:"lineNumbers",start:"start",commandLine:"commandLine",filterOutput:"filterOutput",host:"host",prompt:"prompt",output:"output",user:"user"},outputs:{error:"error",load:"load",ready:"ready"},standalone:!0,features:[t.\u0275\u0275NgOnChangesFeature,t.\u0275\u0275StandaloneFeature],ngContentSelectors:K,decls:1,vars:0,template:function(n,i){n&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275projection(0))},encapsulation:2})}(function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(x,[{type:t.Component,args:[{selector:"markdown, [markdown]",template:"<ng-content></ng-content>",standalone:!0}]}],()=>[{type:t.ElementRef},{type:c},{type:t.ViewContainerRef}],{data:[{type:t.Input}],src:[{type:t.Input}],disableSanitizer:[{type:t.Input}],inline:[{type:t.Input}],clipboard:[{type:t.Input}],clipboardButtonComponent:[{type:t.Input}],clipboardButtonTemplate:[{type:t.Input}],emoji:[{type:t.Input}],katex:[{type:t.Input}],katexOptions:[{type:t.Input}],mermaid:[{type:t.Input}],mermaidOptions:[{type:t.Input}],lineHighlight:[{type:t.Input}],line:[{type:t.Input}],lineOffset:[{type:t.Input}],lineNumbers:[{type:t.Input}],start:[{type:t.Input}],commandLine:[{type:t.Input}],filterOutput:[{type:t.Input}],host:[{type:t.Input}],prompt:[{type:t.Input}],output:[{type:t.Input}],user:[{type:t.Input}],error:[{type:t.Output}],load:[{type:t.Output}],ready:[{type:t.Output}]})})();class I{constructor(e,n,i,r,o){this.domSanitizer=e,this.elementRef=n,this.markdownService=i,this.viewContainerRef=r,this.zone=o}transform(e,n){var i=this;return(0,N.Z)(function*(){if(e==null)return"";if(typeof e!="string")return console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof e}]`),e;const r=yield i.markdownService.parse(e,n);return i.zone.onStable.pipe((0,y.first)()).subscribe(()=>i.markdownService.render(i.elementRef.nativeElement,n,i.viewContainerRef)),i.domSanitizer.bypassSecurityTrustHtml(r)})()}static#e=this.\u0275fac=function(n){return new(n||I)(t.\u0275\u0275directiveInject(T.DomSanitizer,16),t.\u0275\u0275directiveInject(t.ElementRef,16),t.\u0275\u0275directiveInject(c,16),t.\u0275\u0275directiveInject(t.ViewContainerRef,16),t.\u0275\u0275directiveInject(t.NgZone,16))};static#t=this.\u0275pipe=t.\u0275\u0275definePipe({name:"markdown",type:I,pure:!0,standalone:!0})}(function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(I,[{type:t.Pipe,args:[{name:"markdown",standalone:!0}]}],()=>[{type:T.DomSanitizer},{type:t.ElementRef},{type:c},{type:t.ViewContainerRef},{type:t.NgZone}],null)})();function z(s){return[c,s?.loader??[],s?.clipboardOptions??[],s?.markedOptions??[],{provide:k,useValue:s?.markedExtensions??[]},{provide:D,useValue:s?.sanitize??t.SecurityContext.HTML}]}const H=[_,C,x,I];class b{static forRoot(e){return{ngModule:b,providers:[z(e)]}}static forChild(){return{ngModule:b}}static#e=this.\u0275fac=function(n){return new(n||b)};static#t=this.\u0275mod=t.\u0275\u0275defineNgModule({type:b});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[f.CommonModule]})}(function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(b,[{type:t.NgModule,args:[{imports:[f.CommonModule,...H],exports:H}]}],null,null)})();var R;(function(s){let e;(function(r){r.Strict="strict",r.Loose="loose",r.Antiscript="antiscript",r.Sandbox="sandbox"})(e=s.SecurityLevel||(s.SecurityLevel={}));let n;(function(r){r.Base="base",r.Forest="forest",r.Dark="dark",r.Default="default",r.Neutral="neutral"})(n=s.Theme||(s.Theme={}));let i;(function(r){r[r.Debug=1]="Debug",r[r.Info=2]="Info",r[r.Warn=3]="Warn",r[r.Error=4]="Error",r[r.Fatal=5]="Fatal"})(i=s.LogLevel||(s.LogLevel={}))})(R||(R={}))}}]);