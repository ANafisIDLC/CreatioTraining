(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[450,7683],{87683:(V,v,a)=>{a.r(v),a.d(v,{ErrorListDialogService:()=>s,RestValidationErrorHandler:()=>n,WorkspaceErrorsDialogModule:()=>l});var E=a(31134),d=a(99293),S=a(54514),o=a(75378),D=a(77207),y=a(31234),p=a(96923),m=a(49475),f=a(27049),i=a(94450);class s{constructor(r,e,t,h){this._dialogService=r,this._translateService=e,this._academyHelpUrlService=t,this._domSanitizer=h,this._codeErrorDataSchema={columns:[new p.ErrorTypeIconColumnSchema({name:"errorTypeIcon",formatter:(g,c)=>c.warning?m.MessageType.Warning:m.MessageType.Error}),{name:"fileName",caption:this._translateService.instant("ErrorListDialogService.FileNameColumn"),valueType:o.DataValueType.Text},{name:"errorText",caption:this._translateService.instant("ErrorListDialogService.ErrorTextColumn"),valueType:o.DataValueType.Text},{name:"errorNumber",caption:this._translateService.instant("ErrorListDialogService.ErrorNumberColumn"),valueType:o.DataValueType.Text},{name:"line",caption:this._translateService.instant("ErrorListDialogService.LineColumn"),valueType:o.DataValueType.Text}]},this._codeValidationErrorDataSchema={columns:[{name:"source",caption:this._translateService.instant("ErrorListDialogService.SourceColumn"),valueType:o.DataValueType.Text},{name:"reference",caption:this._translateService.instant("ErrorListDialogService.ReferenceColumn"),valueType:o.DataValueType.Text},{name:"package",caption:this._translateService.instant("ErrorListDialogService.PackageColumn"),valueType:o.DataValueType.Text}]}}_getCompilationErrorsDialogData(r){return{title:this._translateService.instant("ErrorListDialogService.CodeErrorListDialogCaption"),dataSchema:this._codeErrorDataSchema,data:r,sortColumn:"fileName"}}_getValidationErrorsDialogData(r,e){return{title:this._translateService.instant("ErrorListDialogService.CodeValidationErrorListDialogCaption"),dataSchema:this._codeValidationErrorDataSchema,data:e,sortColumn:"source",additionalText:r,helpLinkUrl:this._getHelpLinkUrl()}}_getHelpLinkUrl(){return{url:this._domSanitizer.bypassSecurityTrustUrl(this._academyUrl),caption:this._translateService.instant("ErrorListDialogService.AcademyHelpUrlCaption")}}_getAcademyHelpUrl(){return this._academyHelpUrlService.getAcademyHelpUrl("PackageHierarchyLoops")}showCompilationErrors(r){return this._dialogService.open(p.TableDialogComponent,{data:this._getCompilationErrorsDialogData(r),panelClass:"compilation-error-dialog",disableClose:!0})}showValidationErrors(r,e){return this._getAcademyHelpUrl().pipe((0,f.switchMap)(t=>(this._academyUrl=t,this._dialogService.open(p.TableDialogComponent,{data:this._getValidationErrorsDialogData(r,e),panelClass:"validation-error-dialog",disableClose:!0}))))}static{this.\u0275fac=function(e){return new(e||s)(i.\u0275\u0275inject(d.DialogService),i.\u0275\u0275inject(D.TranslateService),i.\u0275\u0275inject(y.AcademyService),i.\u0275\u0275inject(S.DomSanitizer))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}}var u=a(97600),T=a(21322);class n extends m.RestAccumulatingErrorHandler{constructor(r,e){super(),this._dialogService=r,this._errorListDialogService=e,this._subscription=new T.Subscription}_showValidationErrors(r,e){this._subscription.add(this._errorListDialogService.showValidationErrors(r,e).subscribe())}processAccumulatedResponse(r){const e=r;e.success=!0,delete e.errorInfo,delete e.validationErrors}canAccumulate(r){return r?.errorInfo?.errorCode==="AutoAddPackageDependenciesValidateException"}showAccumulatedErrors(){const r=(0,u.cloneDeep)(this.accumulatedErrorResponses),e=r.shift();if(r.forEach(t=>{const h=t,g=e.validationErrors??[],c=h.validationErrors,C=g.some(x=>c?.find(L=>(0,u.isEqual)(L,x)));!(0,u.isEmpty)(c)&&!C&&(e.validationErrors=[...g,...c])}),e){const t=e.errorInfo?.message;this._showValidationErrors(t,e.validationErrors)}}processSeparatedResponse(r){const{validationErrors:e,errorInfo:t}=r||{};e?.length>0?this._showValidationErrors(t.message,e):t&&t.message&&this.processErrorMessage(t.message)}processErrorMessage(r){this._dialogService.openInfoDialog(r)}ngOnDestroy(){this._subscription.unsubscribe()}static{this.\u0275fac=function(e){return new(e||n)(i.\u0275\u0275inject(d.DialogService),i.\u0275\u0275inject(s))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}class l{static{this.\u0275fac=function(e){return new(e||l)}}static{this.\u0275mod=i.\u0275\u0275defineNgModule({type:l})}static{this.\u0275inj=i.\u0275\u0275defineInjector({providers:[s,n],imports:[E.CommonModule,d.DialogModule]})}}(function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(l,{imports:[E.CommonModule,d.DialogModule]})})()}}]);