(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[4851,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,9256,9795,1006,7571,6025,9424,885,7709,6662,9669],{24851:(te,R,d)=>{d.r(R),d.d(R,{CopilotChatService:()=>M,CopilotModule:()=>T});var r=d(74742),n=d(75378),f=d(29967),C=d(36780),c=d(8239),a=d(21322);let I=class{constructor(e){this._intentSchemaManager=e}convert(e,t,s){var o=this;return(0,c.Z)(function*(){const i=e.map(function(){var h=(0,c.Z)(function*(P){return yield P[s]});return function(P){return h.apply(this,arguments)}}()),l=yield Promise.all(i);return(0,a.lastValueFrom)(o._intentSchemaManager.generateActionCode(l))})()}};I=(0,r.__decorate)([(0,n.CrtConverter)({type:"crt.GenerateCopilotActionCode"}),(0,r.__metadata)("design:paramtypes",[C.CopilotIntentManagerService])],I);var x=d(34038),S=d(43820),g=d(97600);let _=class extends n.BaseRequest{};_=(0,r.__decorate)([(0,n.CrtRequest)({type:"crt.CopilotSayRequest"})],_);var m;(function(u){u.Assistant="assistant",u.User="user"})(m||(m={}));let z=class extends n.BaseRequest{};z=(0,r.__decorate)([(0,n.CrtRequest)({type:"crt.CopilotRestartSessionRequest"})],z);class Q{static get photo(){return"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikljb24gfCBBSSBDb3BpbG90IC0gMTZ4MTYgfCBoZWF2eSI+CjxwYXRoIGlkPSJTdWJ0cmFjdCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjIzNTc2MSA2LjA2NDM0QzAuMDgxNzQxOSA2LjY4NDE2IDAgNy4zMzI1MyAwIDhDMCAxMi40MTgzIDMuNTgxNzIgMTYgOCAxNkMxMC45NjExIDE2IDEzLjU0NjUgMTQuMzkxMiAxNC45Mjk3IDEySDEyLjczNjFDMTEuNTk5IDEzLjM0NSA5Ljg5OTIxIDE0LjE5OTEgOCAxNC4xOTkxQzQuNTc2MzMgMTQuMTk5MSAxLjgwMDg5IDExLjQyMzcgMS44MDA4OSA4QzEuODAwODkgNy42NTM3OSAxLjgyOTI3IDcuMzE0MjEgMS44ODM4MyA2Ljk4MzQ2TDAuMjM1NzYxIDYuMDY0MzRaTTEyLjczNjEgNC4wMDAwMUMxMS41OTkgMi42NTQ5OCA5Ljg5OTIzIDEuODAwODkgOCAxLjgwMDg5QzcuMzM1NjUgMS44MDA4OSA2LjY5NTcxIDEuOTA1NCA2LjA5NTcyIDIuMDk4ODdMMy41Mjg0NyAxLjM2NTM3QzQuODA1MDEgMC41MDMzMjcgNi4zNDM3MyAwIDggMEMxMC45NjExIDAgMTMuNTQ2NSAxLjYwODggMTQuOTI5OCA0LjAwMDAxSDEyLjczNjFaIiBmaWxsPSIjNEY0M0MyIi8+CjxwYXRoIGlkPSJzaGFwZSIgZD0iTTE2IDhMNyAxMS41TDguNSA4TDAgMkwxNiA4WiIgZmlsbD0iIzRGNDNDMiIvPgo8L2c+Cjwvc3ZnPgo="}static get title(){return"Copilot"}static get contact(){return{photo:this.photo,name:this.title}}}class A{static _getAuthorByRole(e,t){return e===m.Assistant?Q.contact:A._getUserAuthor(t)}static _getIsBotMessage(e){return e===m.Assistant}static _getMessageDirection(e){return e===m.User?S.MessageDirection.Outcoming:S.MessageDirection.Incoming}static _getUserAuthor(e){return{id:e.id,name:e.name,photoId:e.photoId}}static convertMessages(e,t){return e.filter(s=>(s.role===m.Assistant||s.role===m.User)&&!(0,g.isEmpty)(s.content)).map(s=>{const o=s.createdOnTicks*1e-4,i={text:s.content,type:x.ChatMessageTypeEnum.Text,date:new Date(o),isBotMessage:!0,id:s.id};return i.author=A._getAuthorByRole(s.role,t),i.isBotMessage=A._getIsBotMessage(s.role),i.direction=A._getMessageDirection(s.role),i})}}var p=d(94450),v=d(49475);let Y=class extends n.BaseRequest{};Y=(0,r.__decorate)([(0,n.CrtRequest)({type:"crt.GenerateCopilotActionCodeValueRequest"})],Y);let D=class extends n.BaseRequestHandler{constructor(e){super(),this.injector=e,this._cacheAttributeName="_ActionCodes_Cache",this._initialCodeValueAttributeName="_InitialCodeValue",this._intentManager=this.injector.get(C.CopilotIntentManagerService)}_getActionCodes(e,t){var s=this;return(0,c.Z)(function*(){const o=yield e[s._cacheAttributeName];if(o?.length>0)return(0,a.of)(o);const i=yield e[t];return s._intentManager.getIntent(i?.value).pipe((0,a.map)(l=>l.Actions.map(h=>h.Code)),(0,a.tap)(l=>e[s._cacheAttributeName]=l))})()}handle(e){var t=this;return(0,c.Z)(function*(){const s=e.$context;if(s.PrimaryModelMode!==v.ModelMode.Create){yield t.next?.handle(e);return}let o=yield s[t._initialCodeValueAttributeName];o||(o=yield s[e.codeAttributeName],s[t._initialCodeValueAttributeName]=o);const i=yield s[e.valueAttributeName];if(!i){s[e.codeAttributeName]=o;return}const l=(yield t._getActionCodes(s,e.intentAttributeName)).pipe((0,a.switchMap)(h=>t._intentManager.generateActionCode(h,i)));s[e.codeAttributeName]=(yield(0,a.lastValueFrom)(l))??(yield s[t._initialCodeValueAttributeName]),yield t.next?.handle(e)})()}};D=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.GenerateCopilotActionCodeValueHandler",requestType:"crt.GenerateCopilotActionCodeValueRequest"}),(0,r.__metadata)("design:paramtypes",[p.Injector])],D);var b=d(33177);const y={process:"ProcessSchemaUId",params:"PDS_Params"},W="CopilotChatInitMessagesSubscription";let H=class extends n.BaseRequestHandler{constructor(e){super(),this._customEventService=e}handle(e){var t=this;return(0,c.Z)(function*(){const s=e.$context;s[y.process]=null;const o=yield t.next?.handle(e),i=yield s.ProcessDesignerInstanceId;return yield new Promise(l=>{const h={designerInstanceId:i,callback:l};t._customEventService.createOutboundChannel("cancelProcessSchemaChanges").next(h)}),o})()}};H=(0,r.__decorate)([(0,n.CrtRequestHandler)({requestType:"crt.CancelRecordChangesRequest",type:"crt.CopilotProcessActionsCancelRecordHandler",scopes:["CopilotProcessActions_FormPage"]}),(0,r.__metadata)("design:paramtypes",[b.CustomEventService])],H);var se=d(77207);let j=class extends n.BaseRequestHandler{constructor(e,t){super(),this._customEventService=e,this._translateService=t}_performDesignerSave(e,t){var s=this;return(0,c.Z)(function*(){const o=yield e.ProcessDesignerInstanceId;return new Promise(i=>{const l={designerInstanceId:o,needSaveNewVersion:t,saveCallback:i};s._customEventService.createOutboundChannel("saveProcessSchema").next(l)})})()}_showDesignerValidationErrorNotification(e){var t=this;return(0,c.Z)(function*(){const s="Dialog.ProcessSchemaSavedWithValidationError",o=yield(0,a.lastValueFrom)(t._translateService.get(s)),i={type:"crt.NotificationRequest",$context:e,message:o,translate:!1};yield t.handlerChain.process(i)})()}handle(e){var t=this;return(0,c.Z)(function*(){const s=e.$context,o=e.config,i=o?o.needSaveNewVersion:!1;if(!(yield s.isValid()))return yield t.next?.handle(e);const h=yield t._performDesignerSave(s,i);return h.isCanceled?!1:(h.isValid||(yield t._showDesignerValidationErrorNotification(s)),yield t.next?.handle(e))})()}};j=(0,r.__decorate)([(0,n.CrtRequestHandler)({requestType:"crt.SaveRecordRequest",type:"crt.CopilotProcessActionsPageSaveHandler",scopes:["CopilotProcessActions_FormPage"]}),(0,r.__metadata)("design:paramtypes",[b.CustomEventService,se.TranslateService])],j);function k(u){return V.apply(this,arguments)}function V(){return V=(0,c.Z)(function*(u){const e="ProcessDesignerInstanceId";let t=yield u[e];t||(t=(0,n.generateGuid)(),u[e]=t)}),V.apply(this,arguments)}let O=class extends n.BaseRequestHandler{_subscribeParamsLoaded(e){const t=new a.Subscription;t.add(e.events$.pipe((0,a.filter)(({type:s})=>s==="finish-load-model-attributes"),(0,a.filter)(({payload:s})=>s[y.params]),(0,a.switchMap)(()=>e[y.params]),(0,a.filter)(s=>!!s)).subscribe({next:function(){var s=(0,c.Z)(function*(o){let i;try{i=JSON.parse(o).processSchemaUId}catch(P){console.error(`params = ${o}
${P?.message}`)}const l={silent:!0},h={[y.process]:i};e.setValue(h,l),yield k(e)});return function(i){return s.apply(this,arguments)}}(),complete:()=>{t.unsubscribe()}}))}handle(e){var t=this;return(0,c.Z)(function*(){yield t.next?.handle(e),t._subscribeParamsLoaded(e.$context)})()}};O=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotProcessActionsPageInitHandler",requestType:"crt.HandleViewModelInitRequest",scopes:["CopilotProcessActions_FormPage"]})],O);var J=d(24709);let L=class extends n.BaseRequestHandler{constructor(){super(...arguments),this._statusFlags=["ProcessSchemaIsChanged","HasUnsavedData",J.IS_CHANGED_SYSTEM_ATTRIBUTE_NAME,y.process]}_handleProcessChange(e){if(e.attributeName===y.process&&!e.silent){const t={processSchemaUId:e.value};e.$context[y.params]=JSON.stringify(t)}}_handleCreateModel(e){return(0,c.Z)(function*(){e.attributeName===J.PRIMARY_MODEL_MODE_SYSTEM_ATTRIBUTE_NAME&&e.value===v.ModelMode.Create&&(e.$context[y.process]=n.EMPTY_GUID,yield k(e.$context))})()}handle(e){var t=this;return(0,c.Z)(function*(){if(t._handleProcessChange(e),yield t._handleCreateModel(e),e.attributeName==="ProcessSchemaIsLoaded"&&e.value){const s=yield e.$context.getPrimaryModelName();e.$context.getModelByName(s).setLoadedState()}else if(t._statusFlags.includes(e.attributeName)){const s=yield e.$context[y.process],o=yield e.$context.ProcessSchemaIsLoaded,i=yield e.$context.ProcessSchemaIsChanged,l=yield e.$context.HasUnsavedData,h=yield e.$context.IsChanged;e.$context.ProcessActionHasUnsavedData=o&&s!==n.EMPTY_GUID&&(l||h||i)}return t.next?.handle(e)})()}};L=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotProcessActionsPageAttributeChangeHandler",requestType:"crt.HandleViewModelAttributeChangeRequest",scopes:["CopilotProcessActions_FormPage"]})],L);var K=d(2876),X=d(52045),q=d(27049);const oe="CopilotMsgChannelSender",ne="CopilotChatPart";class M{constructor(e,t,s,o){this._httpClient=e,this._messageChannelService=t,this._contextSchemaService=s,this._featureValues=o,this._apiUrl="/rest/CopilotService",this._copilotSession=null;const i=this._featureValues??{};this._isNeedToAddConsoleLog=Boolean(i.ShowSystemMessagesFromCopilot)}getInitialMessages$(){return this._loadInitialMessages()}copilotMessageEvent$(){return this._messageChannelService.messageEvent$.pipe((0,a.filter)(e=>e.header.sender===oe&&e.header.bodyTypeName===ne),(0,a.map)(e=>e.body.messages),(0,a.tap)(e=>{this._isNeedToAddConsoleLog&&(console.group("Copilot"),console.log(e),console.groupEnd())}))}_loadInitialMessages(){return this._getActiveCopilotSessions().pipe((0,a.mergeMap)(e=>this._handleActiveCopilotSessions(e).pipe((0,q.catchError)(t=>(console.error(t),(0,a.of)([]))))))}_handleActiveCopilotSessions(e){return e.length>0?(this._copilotSession=e[0],this._getCopilotSessionMessages(this._copilotSession.id)):(0,a.throwError)(()=>new Error("No active copilot sessions found"))}_getActiveCopilotSessions(){return this._httpClient.post(`${this._apiUrl}/GetActiveCopilotSessions`,{}).pipe((0,a.map)(e=>e.copilotSessions))}_getCopilotSessionMessages(e){return this._httpClient.post(`${this._apiUrl}/GetCopilotSessionMessage`,{copilotSessionId:e}).pipe((0,a.map)(t=>t.copilotMessages))}_sendUserMessage(e){return(0,a.from)(this._contextSchemaService.getContext()).pipe((0,a.switchMap)(t=>this._httpClient.post(`${this._apiUrl}/SendUserMessage`,{content:e,copilotContext:{parts:t||[]},copilotSessionId:this._copilotSession?.id})),(0,a.map)(t=>t?.copilotChatPart))}_closeCopilotSession(){return this._httpClient.post(`${this._apiUrl}/CloseSession`,{copilotSessionId:this._copilotSession?.id}).pipe((0,q.catchError)(e=>(0,a.throwError)(()=>new Error(`Server return status: ${e.status}`))))}sayWithResponse(e){var t=this;return(0,c.Z)(function*(){const s=yield(0,a.firstValueFrom)(t._sendUserMessage(e));return s&&(0,g.isEmpty)(s.errorCode)&&(0,g.isEmpty)(s.errorMessage)&&(t._copilotSession=s.copilotSession),s})()}closeSession(){var e=this;return(0,c.Z)(function*(){if(!e._copilotSession?.id)return Promise.reject("No active session");try{yield(0,a.firstValueFrom)(e._closeCopilotSession()),e._copilotSession=null}catch(t){return Promise.reject(`Server return status: ${t.status}`)}})()}static#e=this.\u0275fac=function(t){return new(t||M)(p.\u0275\u0275inject(K.HttpClient),p.\u0275\u0275inject(v.MessageChannelService),p.\u0275\u0275inject(X.ContextSchemaService),p.\u0275\u0275inject(v.FEATURE_VALUES,8))};static#t=this.\u0275prov=p.\u0275\u0275defineInjectable({token:M,factory:M.\u0275fac,providedIn:"root"})}let U=class extends n.BaseRequestHandler{constructor(e,t){super(),this._copilotChatService=e,this._userInfo=t}_getConvertedMessages(e){return A.convertMessages(e,{id:this._userInfo.contactId,name:this._userInfo.contactName,photoId:this._userInfo.photoId})}handle(e){var t=this;return(0,c.Z)(function*(){yield t.next?.handle(e);const s=e.$context;e.$context.ChatMessages=t._getConvertedMessages(yield(0,a.lastValueFrom)(t._copilotChatService.getInitialMessages$())),s[W]=t._copilotChatService.copilotMessageEvent$().subscribe(o=>{e.$context.ChatMessages=t._getConvertedMessages(o)}),e.$context.CopilotContact=Q.contact})()}};U=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotChatInitHandler",requestType:"crt.HandleViewModelInitRequest",scopes:["CopilotPanel"]}),(0,r.__metadata)("design:paramtypes",[M,v.UserInfo])],U);let ee=class extends n.BaseRequestHandler{constructor(){super()}handle(e){var t=this;return(0,c.Z)(function*(){const s=e.$context;for(const o of[W])(yield s[o])?.unsubscribe();yield t.next?.handle(e)})()}};ee=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotChatDestroyHandler",requestType:"crt.HandleViewModelDestroyRequest",scopes:["CopilotPanel"]}),(0,r.__metadata)("design:paramtypes",[])],ee);var ie=d(99293);class E{static#e=this.errorCodeGroups={ServiceUnavailable:["MissingApiKey","InvalidRequest","RateLimitReached","InsufficientQuota","QuotaExceeded","ModelNotFound","ModelError","InvalidResponse","UnauthorizedClient","UnsupportedGrantType","InvalidScope","InvalidJson","InvalidApiKey","Unknown","UnknownError","IncorrectConfiguration","NoEntities","Unauthorized","InvalidUri"],TryAgainLater:["ServerError","RequestTimeout","NetworkError","EngineOverloaded","InternalQuotaExceeded","ServerNotAvailable","LimitExceeded","ActionExecutionFailed"]};static#t=this.errorCodeToGroup=E._populateErrorCodeToGroupMap();static getErrorMessageKey(e){return`MessageEditor.ErrorCode.${E.errorCodeToGroup[e]||"TryAgainLater"}`}static _populateErrorCodeToGroupMap(){const e={};return Object.keys(E.errorCodeGroups).forEach(t=>{for(const s of E.errorCodeGroups[t])e[s]=t}),e}}class N extends M{constructor(e,t,s,o,i,l){super(e,t,s,o),this._copilotChatService=i,this._notifyService=l}_onError(e){var t=this;return(0,c.Z)(function*(){const s=E.getErrorMessageKey(e);yield t._notifyService.error({message:s})})()}_handleError(e){var t=this;return(0,c.Z)(function*(){return(0,g.isEmpty)(e.errorCode)?!1:(yield t._onError(e.errorCode),!0)})()}sayWithResponse(e){var t=this;return(0,c.Z)(function*(){try{const s=yield t._copilotChatService.sayWithResponse(e);if(!(yield t._handleError(s)))return s}catch{yield t._onError()}})()}static#e=this.\u0275fac=function(t){return new(t||N)(p.\u0275\u0275inject(K.HttpClient),p.\u0275\u0275inject(v.MessageChannelService),p.\u0275\u0275inject(X.ContextSchemaService),p.\u0275\u0275inject(v.FEATURE_VALUES,8),p.\u0275\u0275inject(M),p.\u0275\u0275inject(ie.NotifyService))};static#t=this.\u0275prov=p.\u0275\u0275defineInjectable({token:N,factory:N.\u0275fac,providedIn:"root"})}let $=class extends n.BaseRequestHandler{constructor(e){super(),this._userInfo=e.get(v.UserInfo),this._copilotChatService=e.get(N)}_getConvertedMessages(e){return A.convertMessages(e,{id:this._userInfo.contactId,name:this._userInfo.contactName,photoId:this._userInfo.photoId})}_addMessageToConversation(e,t,s){e.$context[s]=this._getConvertedMessages(t)}_setTypingVisible(e){this._context.IsTyping=e}handle(e){var t=this;return(0,c.Z)(function*(){t._context=e.$context;const s=e.attributesMapping,o=s?.chatInput;if(!(0,g.isEmpty)(o)){const i=yield e.$context[o];e.$context[o]="",t._setTypingVisible(!0);const l=yield t._copilotChatService.sayWithResponse(i);if(t._setTypingVisible(!1),!l)e.$context[o]=i;else if(l?.messages.length){const h=s?.chatMessages;(0,g.isEmpty)(h)||t._addMessageToConversation(e,l.messages,h)}}yield t.next?.handle(e)})()}};$=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotMessageEditorSendHandler",requestType:"crt.MessageEditorSendRequest",scopes:["CopilotPanel"]}),(0,r.__metadata)("design:paramtypes",[p.Injector])],$);var ae=d(16820);let Z=class extends n.BaseRequestHandler{constructor(e){super(),this._copilotChatService=e.get(M)}handle(e){var t=this;return(0,c.Z)(function*(){yield t._copilotChatService.closeSession();const s=e.chatMessagesAttributeName,o=e.conversationEventAttributeName;!(0,g.isEmpty)(s)&&!(0,g.isEmpty)(o)&&(e.$context[s]=[],e.$context[o]=[{name:ae.CONVERSATION_RESET_EVENT}]),yield t.next?.handle(e)})()}};Z=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotRestartSessionHandler",requestType:"crt.CopilotRestartSessionRequest",scopes:["CopilotPanel"]}),(0,r.__metadata)("design:paramtypes",[p.Injector])],Z);let G=class extends n.BaseRequestHandler{constructor(e){super(),this.injector=e,this._intentManager=this.injector.get(C.CopilotIntentManagerService)}_getModelInitConfig(e){return(0,c.Z)(function*(){const t=e.modelInitConfigs,s=yield e.getPrimaryModelName();return t?.find(o=>o.name===s)})()}_getIntent(e,t){var s=this;return(0,c.Z)(function*(){let o;const l=(yield e.getPrimaryDataSchema())?.name;return l==="CopilotIntent"?o=yield(0,a.firstValueFrom)(s._intentManager.getIntent(t)):l==="CopilotAction"&&(o=yield(0,a.firstValueFrom)(s._intentManager.getIntentByActionUId(t))),o})()}_disableCodeField(e){const t=e.getAttributeNameByViewItemName("Code");e.disableAttributeValidator(t,"CodePrefixValidator"),e.setAttributePropertyValue(t,"readonly",!0)}handle(e){var t=this;return(0,c.Z)(function*(){yield t.next?.handle(e);const s=e.$context,o=yield t._getModelInitConfig(s);if(!(o?.action===n.ModelInPageAction.Edit))return;(yield t._getIntent(s,o?.recordId))?.ExtendParent&&t._disableCodeField(s)})()}};G=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotPageDisableCodeFieldHandler",requestType:"crt.HandleViewModelInitRequest",scopes:["CopilotIntents_FormPage","CopilotProcessActions_FormPage"]}),(0,r.__metadata)("design:paramtypes",[p.Injector])],G);let B=class extends n.BaseRequestHandler{constructor(e){super(),this._copilotChatService=e.get(N)}handle(e){var t=this;return(0,c.Z)(function*(){const s=t._copilotChatService.sayWithResponse(e.prompt),o=t.handlerChain.process({type:"crt.OpenSidebarRequest",sidebarCode:"Copilot",$context:{}});yield Promise.all([s,o]),yield t.next?.handle(e)})()}};B=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotActionRequestHandler",requestType:"crt.CopilotActionRequest"}),(0,r.__metadata)("design:paramtypes",[p.Injector])],B);var re=d(83232);let F=class extends n.BaseRequestHandler{constructor(e){super(),this._broadcastChannelFactory=e,this._init()}_init(){this._workspaceReloadBroadcastService=this._broadcastChannelFactory.createInstance(re.WORKSPACE_EXPLORER_RELOAD_CHANNEL_NAME)}handle(e){var t=this;return(0,c.Z)(function*(){const s=yield t.next?.handle(e);return t._workspaceReloadBroadcastService.publish(),s})()}};F=(0,r.__decorate)([(0,n.CrtRequestHandler)({type:"crt.CopilotIntentSaveHandler",requestType:"crt.SaveRecordRequest",scopes:["CopilotIntents_FormPage"]}),(0,r.__metadata)("design:paramtypes",[b.BroadcastChannelFactory])],F);let T=class w{static#e=this.\u0275fac=function(t){return new(t||w)};static#t=this.\u0275mod=p.\u0275\u0275defineNgModule({type:w});static#s=this.\u0275inj=p.\u0275\u0275defineInjector({imports:[C.CopilotUtilsModule,f.CopilotIntentSchemaDesignerApiModule]})};T=(0,r.__decorate)([(0,n.CrtModule)({viewElements:[],requestHandlers:[B,U,F,$,G,H,L,O,j,Z,D],converters:[I]})],T),function(){(typeof ngJitMode>"u"||ngJitMode)&&p.\u0275\u0275setNgModuleScope(T,{imports:[C.CopilotUtilsModule,f.CopilotIntentSchemaDesignerApiModule]})}()},8239:(te,R,d)=>{d.d(R,{Z:()=>n});function r(f,C,c,a,I,x,S){try{var g=f[x](S),_=g.value}catch(m){c(m);return}g.done?C(_):Promise.resolve(_).then(a,I)}function n(f){return function(){var C=this,c=arguments;return new Promise(function(a,I){var x=f.apply(C,c);function S(_){r(x,a,I,S,g,"next",_)}function g(_){r(x,a,I,S,g,"throw",_)}S(void 0)})}}}}]);