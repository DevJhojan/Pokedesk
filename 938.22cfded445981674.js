"use strict";(self.webpackChunkpokedesk=self.webpackChunkpokedesk||[]).push([[938],{8938:(Ln,ct,l)=>{l.r(ct),l.d(ct,{HomeModule:()=>Un});var w=l(6814),V=l(6419),dt={domain:["#5AA454","#E44D25","#CFC0BB","#7aa3e5","#a8385d","#aae3f5"]},r=l(4769),S=l(9862);const ht="https://pokeapi.co/api/v2/pokemon";let O=(()=>{class e{constructor(t){this.http=t}getAllPokemons(){const i={headers:new S.WM({Authorization:"Bearer "})};return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0/",i)}getPokemon(t){const o={headers:new S.WM({Authorization:"Bearer "})};return this.http.get(`${ht}/${t}`,o)}getSearchPokemon(t){const o={headers:new S.WM({Authorization:"Bearer "})};return this.http.get(`${ht}/${t}`,o)}static#t=this.\u0275fac=function(i){return new(i||e)(r.LFG(S.eN))};static#e=this.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ft=l(1231);let Ce=(()=>{class e{constructor(t,i){this.activatedRoute=t,this.pokemonService=i,this.view=[500,400],this.stats_pokemon=[],this.stats=[],this.color="white",this.colors=dt,this.activatedRoute.paramMap.subscribe(o=>{this.name=o.get("name")??""}),this.pokemonService.getPokemon(this.name).subscribe(o=>{o.stats.forEach(s=>{this.stats_pokemon.push({name:s.stat.name,value:s.base_stat})}),this.stats=this.stats_pokemon,this.pokemon=o})}onSelect(t){}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(V.gz),r.Y36(O))};static#e=this.\u0275cmp=r.Xpm({type:e,selectors:[["app-pokemon-detail"]],decls:3,vars:5,consts:[[1,"detail"],[3,"src","alt"],[3,"view","scheme","results","select"]],template:function(i,o){1&i&&(r.TgZ(0,"article",0),r._UZ(1,"img",1),r.TgZ(2,"ngx-charts-pie-grid",2),r.NdJ("select",function(a){return o.onSelect(a)}),r.qZA()()),2&i&&(r.xp6(1),r.Q6J("src",null==o.pokemon||null==o.pokemon.sprites?null:o.pokemon.sprites.other.dream_world.front_default,r.LSH)("alt",null==o.pokemon?null:o.pokemon.name),r.xp6(1),r.Q6J("view",o.view)("scheme",o.colors)("results",o.stats))},dependencies:[ft.Nm],encapsulation:2})}return e})();var Ve=l(7715),Me=l(5592),Ae=l(7453),De=l(4829),be=l(9940),Fe=l(8251),Ee=l(7400),we=l(2714),Oe=l(7398);function bt(e){return null!=e}function Ft(e){return(0,r.QGY)(e)?(0,Ve.D)(e):e}function Et(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function wt(e,n){return n.map(t=>t(e))}function St(e){return e.map(n=>function Pe(e){return!e.validate}(n)?n:t=>n.validate(t))}function z(e){return null!=e?function Ot(e){if(!e)return null;const n=e.filter(bt);return 0==n.length?null:function(t){return Et(wt(t,n))}}(St(e)):null}function Y(e){return null!=e?function xt(e){if(!e)return null;const n=e.filter(bt);return 0==n.length?null:function(t){return function Se(...e){const n=(0,be.jO)(e),{args:t,keys:i}=(0,Ae.D)(e),o=new Me.y(s=>{const{length:a}=t;if(!a)return void s.complete();const u=new Array(a);let f=a,y=a;for(let E=0;E<a;E++){let j=!1;(0,De.Xf)(t[E]).subscribe((0,Fe.x)(s,_e=>{j||(j=!0,y--),u[E]=_e},()=>f--,void 0,()=>{(!f||!j)&&(y||s.next(i?(0,we.n)(i,u):u),s.complete())}))}});return n?o.pipe((0,Ee.Z)(n)):o}(wt(t,n).map(Ft)).pipe((0,Oe.U)(Et))}}(St(e)):null}function q(e){return e?Array.isArray(e)?e:[e]:[]}function N(e,n){return Array.isArray(e)?e.includes(n):e===n}function Tt(e,n){const t=q(n);return q(e).forEach(o=>{N(t,o)||t.push(o)}),t}function Pt(e,n){return q(n).filter(t=>!N(e,t))}const M="VALID",I="INVALID",C="PENDING",A="DISABLED";function Z(e){return(T(e)?e.validators:e)||null}function J(e,n){return(T(n)?n.asyncValidators:e)||null}function T(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class jt{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===I}get pending(){return this.status==C}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Tt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Tt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Pt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Pt(n,this._rawAsyncValidators))}hasValidator(n){return N(this._rawValidators,n)}hasAsyncValidator(n){return N(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=C,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=A,this.errors=null,this._forEachChild(i=>{i.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=M,this._forEachChild(i=>{i.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===C)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const t=Ft(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){const i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(I)?I:M}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){T(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function je(e){return Array.isArray(e)?z(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Le(e){return Array.isArray(e)?Y(e):e||null}(this._rawAsyncValidators)}}class P extends jt{constructor(n,t,i){super(Z(t),J(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function Ut(e,n,t){e._forEachChild((i,o)=>{if(void 0===t[o])throw new r.vHH(1002,"")})})(this,0,n),Object.keys(n).forEach(i=>{(function Rt(e,n,t){const i=e.controls;if(!(n?Object.keys(i):i).length)throw new r.vHH(1e3,"");if(!i[t])throw new r.vHH(1001,"")})(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(i=>{const o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>!!i._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,s)=>{i=t(i,o,s)}),i}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}function qt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function $t(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const U=class extends jt{constructor(n=null,t,i){super(Z(t),J(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=$t(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){qt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){qt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){$t(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};let On=(()=>{class e{constructor(t){this.pokemonService=t,this.view=[500,400],this.stats_pokemon=[],this.stats=[],this.colors=dt}onSelect(t){}ngOnInit(){this.pokemonService.getPokemon(this.namePokemon).subscribe(t=>{t.stats.forEach(i=>{this.stats_pokemon.push({name:i.stat.name,value:i.base_stat})}),this.stats=this.stats_pokemon,this.pokemon=t})}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(O))};static#e=this.\u0275cmp=r.Xpm({type:e,selectors:[["app-pokemon-front"]],inputs:{namePokemon:"namePokemon"},decls:1,vars:2,consts:[[1,"img-list",3,"src","alt"]],template:function(i,o){1&i&&r._UZ(0,"img",0),2&i&&r.Q6J("src",null==o.pokemon||null==o.pokemon.sprites?null:o.pokemon.sprites.other.dream_world.front_default,r.LSH)("alt",null==o.pokemon?null:o.pokemon.name)},encapsulation:2})}return e})();function xn(e,n){if(1&e){const t=r.EpF();r.TgZ(0,"article",5),r._UZ(1,"app-pokemon-front",6),r.TgZ(2,"button",7),r.NdJ("click",function(){const s=r.CHM(t).$implicit,a=r.oxw();return r.KtG(a.detail_pokemon(s.name))}),r._uU(3),r.qZA()()}if(2&e){const t=n.$implicit;r.xp6(1),r.Q6J("namePokemon",t.name),r.xp6(2),r.hij(" Detail of ",t.name," ")}}const Nn=[{path:"",component:(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=r.Xpm({type:e,selectors:[["app-pages-home"]],decls:1,vars:0,template:function(i,o){1&i&&r._UZ(0,"router-outlet")},dependencies:[V.lC],encapsulation:2})}return e})(),children:[{path:"search",component:(()=>{class e{constructor(t,i){this.pokemonService=t,this.router=i,this.pokemonsNames=[],this.search=new U(""),this.getPokemons(),this.searchGroup=new P({searchInput:new U("")})}ngOnInit(){}getPokemons(){this.pokemonService.getAllPokemons().subscribe(t=>{this.pokemonsNames=t.results})}detail_pokemon(t){this.router.navigate([`pokedesk/pokemon/${t}`])}searchPokemon(t){this.search.setValue(t),""==this.search.value?this.getPokemons():(this.pokemonsNames=[],this.pokemonService.getSearchPokemon(this.search.value??"").subscribe(i=>{this.pokemonsNames.push({name:i.name,url:""})}))}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(O),r.Y36(V.F0))};static#e=this.\u0275cmp=r.Xpm({type:e,selectors:[["app-search-pokemon"]],decls:6,vars:2,consts:[[1,"searchContend"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png",1,"logo-pokemon"],["type","search","placeholder","search Pokemon",1,"searchInput",3,"formControl","keyup.enter"],["input",""],["class","article-list",4,"ngFor","ngForOf"],[1,"article-list"],[3,"namePokemon"],[1,"button-list",3,"click"]],template:function(i,o){if(1&i){const s=r.EpF();r.TgZ(0,"div",0),r._UZ(1,"img",1),r.TgZ(2,"input",2,3),r.NdJ("keyup.enter",function(){r.CHM(s);const u=r.MAs(3);return r.KtG(o.searchPokemon(u.value))}),r.qZA()(),r.TgZ(4,"main"),r.YNc(5,xn,4,2,"article",4),r.qZA()}2&i&&(r.xp6(2),r.Q6J("formControl",o.search),r.xp6(3),r.Q6J("ngForOf",o.pokemonsNames))},dependencies:[w.sg,On],encapsulation:2})}return e})()},{path:"pokemon/:name",component:Ce},{path:"**",redirectTo:"search"}]}];let kn=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[V.Bz.forChild(Nn),V.Bz]})}return e})();var In=l(9538),ut=l(1043);let Pn=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({})}return e})();var ge=l(4557);let Bn=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[ge.BQ,ut.lN,ut.lN,Pn,ge.BQ]})}return e})();var Gn=l(2296),Hn=l(6916),Rn=l(4643);let Un=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({providers:[O],imports:[w.ez,kn,In.p0,ut.lN,Gn.ot,Bn,ft.a4,Hn.Cl,Rn.HT]})}return e})()}}]);