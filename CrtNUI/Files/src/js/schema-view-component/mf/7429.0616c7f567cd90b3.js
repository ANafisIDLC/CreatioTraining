(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[7429,7654],{67654:(Z,u,o)=>{o.r(u),o.d(u,{COPILOT_INTENT_REPOSITORY_TOKEN:()=>h,CopilotActionCodeGeneratorService:()=>c,CopilotIntentManagerService:()=>l,CopilotUtilsModule:()=>d,copilotIntentMock:()=>f});var i=o(94450),n=o(75378),S=o(97600),t=o(21322);const h=new i.InjectionToken("COPILOT_INTENT_REPOSITORY_TOKEN");var p=o(33177),m=o(49475);class c{constructor(){this._copilotActionCodeMaxLength=41,this._defaultNewActionCode="Action",this._sysSettingsService=(0,i.inject)(n.SysSettingsService)}_checkCodeIsUnique(a,e){return!a?.includes(e)}_generateCode(a){if(a.generateFromName){const e=a.name;if(!m.ConfigurationItemCodeGenerationUtils.isTextUsableForCodeGeneration(e))return null;const s=a.prefix+this._defaultNewActionCode;return s+m.ConfigurationItemCodeGenerationUtils.generateCode(e,this._copilotActionCodeMaxLength-s.length)}return p.NameGenerator.generateUnique(this._defaultNewActionCode,a.prefix)}generate(a,e=null){const s={generateFromName:Boolean(e),name:e,prefix:null};return(0,t.from)(this._sysSettingsService.getByCode("SchemaNamePrefix")).pipe((0,t.map)(r=>r.value),(0,t.tap)(r=>s.prefix=r),(0,t.repeat)(s.generateFromName?1:void 0),(0,t.map)(()=>this._generateCode(s)),(0,t.filter)(r=>this._checkCodeIsUnique(a,r)),(0,t.take)(1),(0,t.defaultIfEmpty)(null))}static#e=this.\u0275fac=function(e){return new(e||c)};static#a=this.\u0275prov=i.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac})}class l{constructor(){this._repository=(0,i.inject)(h),this._actionCodeGenerator=(0,i.inject)(c)}_loadIntentUIdByActionUId(a){return(0,t.from)(n.Model.create("CopilotAction")).pipe((0,t.switchMap)(e=>e.load({attributes:["Intent"],parameters:[{type:n.ModelParameterType.Filter,value:new n.CompareFilter(n.ComparisonType.Equal,new n.ColumnExpression({columnPath:"Id"}),new n.ParameterExpression({value:a}))}]})),(0,t.map)(e=>{const s=e[0]||{};return(0,S.isEmpty)(s)?null:s.Intent?.value}))}_applyActionToIntent(a,e){const r=(a.Actions||[]).findIndex(Y=>Y.Id===e.Id);if(r===-1)return!1;const K=a.Actions[r];return a.Actions.splice(r,1,{...K,...e}),!0}getIntent(a){return this._repository.get(a)}createIntent(a){return this._repository.create(a.UId).pipe((0,t.map)(e=>(e.UId=a.UId,e.Title=a.Title,e.Code=a.Code,e.Status=a.Status,e.Description=a.Description,e.Prompt=a.Prompt,e)),(0,t.switchMap)(e=>this._repository.update(e)))}updateIntent(a){return this._repository.get(a.UId).pipe((0,t.map)(e=>({...e,...a})),(0,t.switchMap)(e=>this._repository.update(e)))}createAction(a){return this._repository.get(a.Intent.value).pipe((0,t.map)(e=>(e.Actions.push(a),e)),(0,t.switchMap)(e=>this._repository.update(e)))}getActionByUId(a){return this._loadIntentUIdByActionUId(a).pipe((0,t.switchMap)(e=>e?this._repository.get(e).pipe((0,t.map)(s=>s.Actions.filter(r=>r.Id===a)),(0,t.map)(s=>s[0])):(0,t.of)({})))}getIntentByActionUId(a){return this.getActionByUId(a).pipe((0,t.switchMap)(e=>e?.Intent?this.getIntent(e.Intent.value):(0,t.of)({})))}updateAction(a){return this._loadIntentUIdByActionUId(a.Id).pipe((0,t.switchMap)(e=>this._repository.get(e).pipe((0,t.switchMap)(s=>this._applyActionToIntent(s,a)?this._repository.update(s):(0,t.of)({})))))}generateActionCode(a,e=null){return this._actionCodeGenerator.generate(a,e)}static#e=this.\u0275fac=function(e){return new(e||l)};static#a=this.\u0275prov=i.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac})}const f={UId:"uid",Title:"Test intent",Description:"Test description",Code:"CopilotIntent_test",Prompt:null,Status:"InDevelopment",Actions:[{Code:"ActionCode",Id:"ActionIdentifier",UId:"ActionUid",Name:"ActionName",Description:"ActionDescription",Intent:{value:"uid"},ActionType:"actionSchemaTypeUIdA",Params:'{"processSchemaUId":"ProcessSchemaUId"}'}],ExtendParent:!1,PackageUId:"SomePackageUniqueIdentifier"};var v=o(31134);const g=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"\u062A\u0645 \u062D\u0641\u0638 \u0645\u062E\u0637\u0637 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0628\u0646\u062C\u0627\u062D\u060C \u0648\u0644\u0643\u0646 \u062A\u0645\u0646\u0639 \u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062A\u0634\u063A\u064A\u0644\u0647."}}'),_=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"\u0421\u0445\u0435\u043C\u0430\u0442\u0430 \u043D\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0430 \u0435 \u0437\u0430\u043F\u0430\u0437\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E, \u043D\u043E \u0433\u0440\u0435\u0448\u043A\u0438 \u043F\u0440\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0442\u0430 \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0432\u0430\u0442 \u0438\u0437\u043F\u044A\u043B\u043D\u0435\u043D\u0438\u0435\u0442\u043E \u0439."}}'),O=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),I=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"Das Prozessschema wurde erfolgreich gespeichert, aber Validierungsfehler verhindern, dass es ausgef\xFChrt wird."}}'),j=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),y=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),T=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),N=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),P=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"Shema procesa je uspje\u0161no spremljena, ali validacijske pogre\u0161ke sprje\u010Davaju njezvo izvr\u0161avanje."}}'),b=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),E=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"Skema proses berhasil disimpan, tetapi kesalahan validasi mencegahnya untuk dijalankan."}}'),C=JSON.parse(`{"Dialog":{"ProcessSchemaSavedWithValidationError":"Lo schema del processo \xE8 stato salvato con successo, ma gli errori di convalida impediscono l'esecuzione."}}`),D=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),A=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),U=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),V=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),J=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"Schemat procesu zapisany pomy\u015Blnie, ale b\u0142\u0119dy walidacji uniemo\u017Cliwiaj\u0105 jego uruchomienie."}}'),W=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"O esquema do processo foi salvo com \xEAxito, mas erros de valida\xE7\xE3o impedem sua execu\xE7\xE3o."}}'),M=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),R=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"Schema de proces a fost salvat\u0103 cu succes, dar erorile de validare o \xEEmpiedic\u0103 s\u0103 ruleze."}}'),k=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"\u0421\u0445\u0435\u043C\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430, \u043E\u0434\u043D\u0430\u043A\u043E \u043E\u0448\u0438\u0431\u043A\u0438 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0435\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0443."}}'),x=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"Procesi i skem\xEBs u ruajt me sukses, por gabimet e miratimit nuk e lejojn\xEB t\xEB vazhdoj\xEB."}}'),L=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),w=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),z=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),B=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"\u0421\u0445\u0435\u043C\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0443 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u043E, \u0430\u043B\u0435 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u0432\u0430\u043B\u0456\u0434\u0430\u0446\u0456\u0457 \u043F\u0435\u0440\u0435\u0448\u043A\u043E\u0434\u0436\u0430\u044E\u0442\u044C \u0457\u0457 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044E."}}'),F=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),G=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),H={"zh-TW":JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),"zh-CN":G,"vi-VN":F,"tr-TR":z,"th-TH":w,"sv-SE":L,"sq-AL":x,"ro-RO":R,"pt-PT":M,"pt-BR":W,"pl-PL":J,"nl-NL":V,"lv-LV":U,"ko-KR":A,"ja-JP":D,"it-IT":C,"id-ID":E,"hu-HU":b,"hr-HR":P,"he-IL":N,"fr-FR":T,"es-ES":y,"de-DE":I,"cs-CZ":O,"bg-BG":_,"ar-SA":g,"en-US":j,"uk-UA":B,"ru-RU":k};class d{static#e=this.\u0275fac=function(e){return new(e||d)};static#a=this.\u0275mod=i.\u0275\u0275defineNgModule({type:d});static#t=this.\u0275inj=i.\u0275\u0275defineInjector({providers:[c,l],imports:[v.CommonModule,p.CrtLibTranslateModule.forRoot({i18n:H})]})}(function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(d,{imports:[v.CommonModule,p.CrtLibTranslateModule]})})()}}]);