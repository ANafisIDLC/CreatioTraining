(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[8522,5411],{95411:(M,g,r)=>{r.r(g),r.d(g,{LEGACY_VERSION:()=>e.VERSION,LegacyAnimationCurves:()=>e.AnimationCurves,LegacyAnimationDurations:()=>e.AnimationDurations,LegacyDateAdapter:()=>e.DateAdapter,LegacyErrorStateMatcher:()=>e.ErrorStateMatcher,LegacyNativeDateAdapter:()=>e.NativeDateAdapter,LegacyNativeDateModule:()=>e.NativeDateModule,LegacyRippleRef:()=>e.RippleRef,LegacyRippleRenderer:()=>e.RippleRenderer,LegacyShowOnDirtyErrorStateMatcher:()=>e.ShowOnDirtyErrorStateMatcher,MATERIAL_LEGACY_SANITY_CHECKS:()=>e.MATERIAL_SANITY_CHECKS,MAT_LEGACY_DATE_FORMATS:()=>e.MAT_DATE_FORMATS,MAT_LEGACY_DATE_LOCALE:()=>e.MAT_DATE_LOCALE,MAT_LEGACY_DATE_LOCALE_FACTORY:()=>e.MAT_DATE_LOCALE_FACTORY,MAT_LEGACY_NATIVE_DATE_FORMATS:()=>e.MAT_NATIVE_DATE_FORMATS,MAT_LEGACY_OPTGROUP:()=>e.MAT_OPTGROUP,MAT_LEGACY_OPTION_PARENT_COMPONENT:()=>e.MAT_OPTION_PARENT_COMPONENT,MAT_LEGACY_RIPPLE_GLOBAL_OPTIONS:()=>e.MAT_RIPPLE_GLOBAL_OPTIONS,MatLegacyCommonModule:()=>e.MatCommonModule,MatLegacyLine:()=>e.MatLine,MatLegacyLineModule:()=>e.MatLineModule,MatLegacyNativeDateModule:()=>e.MatNativeDateModule,MatLegacyOptgroup:()=>n,MatLegacyOption:()=>l,MatLegacyOptionModule:()=>p,MatLegacyOptionSelectionChange:()=>e.MatOptionSelectionChange,MatLegacyPseudoCheckbox:()=>e.MatPseudoCheckbox,MatLegacyPseudoCheckboxModule:()=>e.MatPseudoCheckboxModule,MatLegacyRipple:()=>e.MatRipple,MatLegacyRippleModule:()=>e.MatRippleModule,_MatLegacyOptgroupBase:()=>e._MatOptgroupBase,_MatLegacyOptionBase:()=>e._MatOptionBase,_countGroupLabelsBeforeLegacyOption:()=>e._countGroupLabelsBeforeOption,_getLegacyOptionScrollPosition:()=>e._getOptionScrollPosition,legacyDefaultRippleAnimationConfig:()=>e.defaultRippleAnimationConfig,legacyMixinColor:()=>e.mixinColor,legacyMixinDisableRipple:()=>e.mixinDisableRipple,legacyMixinDisabled:()=>e.mixinDisabled,legacyMixinErrorState:()=>e.mixinErrorState,legacyMixinInitialized:()=>e.mixinInitialized,legacyMixinTabIndex:()=>e.mixinTabIndex,legacySetLines:()=>e.setLines});var t=r(94450),d=r(31134),e=r(66385);const m=["*",[["mat-option"],["ng-container"]]],u=["*","mat-option, ng-container"];function h(i,o){if(i&1&&t.\u0275\u0275element(0,"mat-pseudo-checkbox",5),i&2){const a=t.\u0275\u0275nextContext();t.\u0275\u0275property("state",a.selected?"checked":"unchecked")("disabled",a.disabled)}}function b(i,o){if(i&1&&(t.\u0275\u0275elementStart(0,"span",6),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),i&2){const a=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1("(",a.group.label,")")}}const _=["*"];/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class n extends e._MatOptgroupBase{}n.\u0275fac=function(){let i;return function(a){return(i||(i=t.\u0275\u0275getInheritedFactory(n)))(a||n)}}(),n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-optgroup"],hostVars:5,hostBindings:function(o,a){o&2&&(t.\u0275\u0275attribute("role",a._inert?null:"group")("aria-disabled",a._inert?null:a.disabled.toString())("aria-labelledby",a._inert?null:a._labelId),t.\u0275\u0275classProp("mat-optgroup-disabled",a.disabled))},inputs:{disabled:"disabled"},exportAs:["matOptgroup"],features:[t.\u0275\u0275ProvidersFeature([{provide:e.MAT_OPTGROUP,useExisting:n}]),t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:u,decls:4,vars:2,consts:[["aria-hidden","true",1,"mat-optgroup-label",3,"id"]],template:function(o,a){o&1&&(t.\u0275\u0275projectionDef(m),t.\u0275\u0275elementStart(0,"span",0),t.\u0275\u0275text(1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275projection(3,1)),o&2&&(t.\u0275\u0275property("id",a._labelId),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1("",a.label," "))},styles:[".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(n,[{type:t.Component,args:[{selector:"mat-optgroup",exportAs:"matOptgroup",encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,inputs:["disabled"],host:{class:"mat-optgroup","[attr.role]":'_inert ? null : "group"',"[attr.aria-disabled]":"_inert ? null : disabled.toString()","[attr.aria-labelledby]":"_inert ? null : _labelId","[class.mat-optgroup-disabled]":"disabled"},providers:[{provide:e.MAT_OPTGROUP,useExisting:n}],template:`<span class="mat-optgroup-label" aria-hidden="true" [id]="_labelId">{{ label }} <ng-content></ng-content></span>
<ng-content select="mat-option, ng-container"></ng-content>
`,styles:[".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class l extends e._MatOptionBase{constructor(o,a,s,c){super(o,a,s,c)}}l.\u0275fac=function(o){return new(o||l)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(e.MAT_OPTION_PARENT_COMPONENT,8),t.\u0275\u0275directiveInject(e.MAT_OPTGROUP,8))},l.\u0275cmp=t.\u0275\u0275defineComponent({type:l,selectors:[["mat-option"]],hostAttrs:["role","option",1,"mat-option","mat-focus-indicator"],hostVars:12,hostBindings:function(o,a){o&1&&t.\u0275\u0275listener("click",function(){return a._selectViaInteraction()})("keydown",function(c){return a._handleKeydown(c)}),o&2&&(t.\u0275\u0275hostProperty("id",a.id),t.\u0275\u0275attribute("tabindex",a._getTabIndex())("aria-selected",a.selected)("aria-disabled",a.disabled.toString()),t.\u0275\u0275classProp("mat-selected",a.selected)("mat-option-multiple",a.multiple)("mat-active",a.active)("mat-option-disabled",a.disabled))},exportAs:["matOption"],features:[t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:_,decls:6,vars:4,consts:[["class","mat-option-pseudo-checkbox",3,"state","disabled",4,"ngIf"],[1,"mat-option-text"],["text",""],["class","cdk-visually-hidden",4,"ngIf"],["mat-ripple","",1,"mat-option-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-option-pseudo-checkbox",3,"state","disabled"],[1,"cdk-visually-hidden"]],template:function(o,a){o&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275template(0,h,1,2,"mat-pseudo-checkbox",0),t.\u0275\u0275elementStart(1,"span",1,2),t.\u0275\u0275projection(3),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(4,b,2,1,"span",3),t.\u0275\u0275element(5,"div",4)),o&2&&(t.\u0275\u0275property("ngIf",a.multiple),t.\u0275\u0275advance(4),t.\u0275\u0275property("ngIf",a.group&&a.group._inert),t.\u0275\u0275advance(1),t.\u0275\u0275property("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disabled||a.disableRipple))},dependencies:[e.MatRipple,d.NgIf,e.MatPseudoCheckbox],styles:['.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option.mat-active::before{content:""}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{right:auto;left:16px}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}'],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(l,[{type:t.Component,args:[{selector:"mat-option",exportAs:"matOption",host:{role:"option","[attr.tabindex]":"_getTabIndex()","[class.mat-selected]":"selected","[class.mat-option-multiple]":"multiple","[class.mat-active]":"active","[id]":"id","[attr.aria-selected]":"selected","[attr.aria-disabled]":"disabled.toString()","[class.mat-option-disabled]":"disabled","(click)":"_selectViaInteraction()","(keydown)":"_handleKeydown($event)",class:"mat-option mat-focus-indicator"},encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,template:`<mat-pseudo-checkbox *ngIf="multiple" class="mat-option-pseudo-checkbox"
    [state]="selected ? 'checked' : 'unchecked'" [disabled]="disabled"></mat-pseudo-checkbox>

<span class="mat-option-text" #text><ng-content></ng-content></span>

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
<span class="cdk-visually-hidden" *ngIf="group && group._inert">({{ group.label }})</span>

<div class="mat-option-ripple" mat-ripple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disabled || disableRipple">
</div>
`,styles:['.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option.mat-active::before{content:""}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{right:auto;left:16px}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}']}]}],function(){return[{type:t.ElementRef},{type:t.ChangeDetectorRef},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[e.MAT_OPTION_PARENT_COMPONENT]}]},{type:n,decorators:[{type:t.Optional},{type:t.Inject,args:[e.MAT_OPTGROUP]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class p{}p.\u0275fac=function(o){return new(o||p)},p.\u0275mod=t.\u0275\u0275defineNgModule({type:p}),p.\u0275inj=t.\u0275\u0275defineInjector({imports:[e.MatRippleModule,d.CommonModule,e.MatCommonModule,e.MatPseudoCheckboxModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(p,[{type:t.NgModule,args:[{imports:[e.MatRippleModule,d.CommonModule,e.MatCommonModule,e.MatPseudoCheckboxModule],exports:[l,n],declarations:[l,n]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);