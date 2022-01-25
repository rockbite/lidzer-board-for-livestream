(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"01b4":function(t,e){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=n},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),s=n("40d5"),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ks})),n.d(e,"b",(function(){return Do})),n.d(e,"c",(function(){return Ys})),n.d(e,"d",(function(){return Po})),n.d(e,"e",(function(){return Lo}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class _{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class C{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new I(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */x.I=-1;class N{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=j(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function R(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new L(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function F(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===U.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof U?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends U{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends U{construct(t,e,n){return new $(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $(e)}static emptyPath(){return new $([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.fields=t,t.sort($.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return R(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new G(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new G(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const z=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(t){if(v(!!t),"string"==typeof t){let e=0;const n=z.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:W(t.seconds),nanos:W(t.nanos)}}function W(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Q(t){return"string"==typeof t?G.fromBase64String(t):G.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Y(t){const e=t.mapValue.fields.__previous_value__;return X(e)?Y(e):e}function J(t){const e=K(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return null==t}function tt(t){return 0===t&&1/t==-1/0}function et(t){return"number"==typeof t&&Number.isInteger(t)&&!tt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.path=t}static fromPath(t){return new nt(B.fromString(t))}static fromName(t){return new nt(B.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new nt(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?X(t)?4:10:y()}function it(t,e){if(t===e)return!0;const n=rt(t);if(n!==rt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return J(t).isEqual(J(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=K(t.timestampValue),r=K(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Q(t.bytesValue).isEqual(Q(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return W(t.geoPointValue.latitude)===W(e.geoPointValue.latitude)&&W(t.geoPointValue.longitude)===W(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return W(t.integerValue)===W(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=W(t.doubleValue),r=W(e.doubleValue);return n===r?tt(n)===tt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return R(t.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!it(n[i],r[i])))return!1;return!0}(t,e);default:return y()}}function st(t,e){return void 0!==(t.values||[]).find(t=>it(t,e))}function ot(t,e){if(t===e)return 0;const n=rt(t),r=rt(e);if(n!==r)return D(n,r);switch(n){case 0:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=W(t.integerValue||t.doubleValue),r=W(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return at(t.timestampValue,e.timestampValue);case 4:return at(J(t),J(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Q(t),r=Q(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=D(n[i],r[i]);if(0!==t)return t}return D(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(W(t.latitude),W(e.latitude));return 0!==n?n:D(W(t.longitude),W(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ot(n[i],r[i]);if(t)return t}return D(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=D(r[o],s[o]);if(0!==t)return t;const e=ot(n[r[o]],i[s[o]]);if(0!==e)return e}return D(r.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function at(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=K(t),r=K(e),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function ct(t){return ut(t)}function ut(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=K(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Q(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,nt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ut(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ut(t.fields[i])}`;return n+"}"}(t.mapValue):y();var e,n}function lt(t){return!!t&&"integerValue"in t}function ht(t){return!!t&&"arrayValue"in t}function ft(t){return!!t&&"nullValue"in t}function dt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pt(t){return!!t&&"mapValue"in t}function gt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return F(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=gt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!pt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gt(e)}setAll(t){let e=$.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=gt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());pt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return it(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];pt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){F(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new mt(gt(this.value))}}function yt(t){const e=[];return F(t.fields,(t,n)=>{const r=new $([t]);if(pt(n)){const t=yt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new H(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new vt(t,0,P.min(),mt.empty(),0)}static newFoundDocument(t,e,n){return new vt(t,1,e,n,0)}static newNoDocument(t,e){return new vt(t,2,e,mt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function wt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bt(t,e,n,r,i,s,o)}function Et(t){const e=b(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Ct(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Z(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Pt(e.startAt)),e.endAt&&(t+="|ub:",t+=Pt(e.endAt)),e.R=t}return e.R}function Tt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ct(e.value)}`;var e}).join(", ")}]`),Z(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Pt(t.startAt)),t.endAt&&(e+=", endAt: "+Pt(t.endAt)),`Target(${e})`}function St(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ft(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!it(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ut(t.startAt,e.startAt)&&Ut(t.endAt,e.endAt)}function Ot(t){return nt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class _t extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new At(t,e,n):"array-contains"===e?new jt(t,n):"in"===e?new Nt(t,n):"not-in"===e?new Dt(t,n):"array-contains-any"===e?new Rt(t,n):new _t(t,e,n)}static P(t,e,n){return"in"===e?new It(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ot(e,this.value)):null!==e&&rt(this.value)===rt(e)&&this.v(ot(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ct(t){return t.field.canonicalString()+t.op.toString()+ct(t.value)}class At extends _t{constructor(t,e,n){super(t,e,n),this.key=nt.fromName(n.referenceValue)}matches(t){const e=nt.comparator(t.key,this.key);return this.v(e)}}class It extends _t{constructor(t,e){super(t,"in",e),this.keys=xt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends _t{constructor(t,e){super(t,"not-in",e),this.keys=xt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function xt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>nt.fromName(t.referenceValue))}class jt extends _t{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ht(e)&&st(e.arrayValue,this.value)}}class Nt extends _t{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&st(this.value.arrayValue,e)}}class Dt extends _t{constructor(t,e){super(t,"not-in",e)}matches(t){if(st(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!st(this.value.arrayValue,e)}}class Rt extends _t{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ht(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>st(this.value.arrayValue,t))}}class Lt{constructor(t,e){this.position=t,this.before=e}}function Pt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ct(t)).join(",")}`}class Mt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ft(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?nt.comparator(nt.fromName(o.referenceValue),n.key):ot(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ut(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!it(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function qt(t,e,n,r,i,s,o,a){return new Bt(t,e,n,r,i,s,o,a)}function $t(t){return new Bt(t)}function Ht(t){return!Z(t.limit)&&"F"===t.limitType}function Gt(t){return!Z(t.limit)&&"L"===t.limitType}function zt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kt(t){for(const e of t.filters)if(e.V())return e.field;return null}function Wt(t){return null!==t.collectionGroup}function Qt(t){const e=b(t);if(null===e.S){e.S=[];const t=Kt(e),n=zt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Mt(t)),e.S.push(new Mt($.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Mt($.keyField(),t))}}}return e.S}function Xt(t){const e=b(t);if(!e.D)if("F"===e.limitType)e.D=wt(e.path,e.collectionGroup,Qt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Qt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Mt(i.field,e))}const n=e.endAt?new Lt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Lt(e.startAt.position,!e.startAt.before):null;e.D=wt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function Yt(t,e,n){return new Bt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jt(t,e){return St(Xt(t),Xt(e))&&t.limitType===e.limitType}function Zt(t){return`${Et(Xt(t))}|lt:${t.limitType}`}function te(t){return`Query(target=${Tt(Xt(t))}; limitType=${t.limitType})`}function ee(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):nt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Vt(t.startAt,Qt(t),e))&&(!t.endAt||!Vt(t.endAt,Qt(t),e))}(t,e)}function ne(t){return(e,n)=>{let r=!1;for(const i of Qt(t)){const t=re(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function re(t,e,n){const r=t.field.isKeyField()?nt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ot(r,i):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tt(e)?"-0":e}}function se(t){return{integerValue:""+t}}function oe(t,e){return et(e)?se(e):ie(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this._=void 0}}function ce(t,e,n){return t instanceof he?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof fe?de(t,e):t instanceof pe?ge(t,e):function(t,e){const n=le(t,e),r=ye(n)+ye(t.N);return lt(n)&&lt(t.N)?se(r):ie(t.k,r)}(t,e)}function ue(t,e,n){return t instanceof fe?de(t,e):t instanceof pe?ge(t,e):n}function le(t,e){return t instanceof me?lt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class he extends ae{}class fe extends ae{constructor(t){super(),this.elements=t}}function de(t,e){const n=ve(e);for(const r of t.elements)n.some(t=>it(t,r))||n.push(r);return{arrayValue:{values:n}}}class pe extends ae{constructor(t){super(),this.elements=t}}function ge(t,e){let n=ve(e);for(const r of t.elements)n=n.filter(t=>!it(t,r));return{arrayValue:{values:n}}}class me extends ae{constructor(t,e){super(),this.k=t,this.N=e}}function ye(t){return W(t.integerValue||t.doubleValue)}function ve(t){return ht(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof fe&&e instanceof fe||t instanceof pe&&e instanceof pe?R(t.elements,e.elements,it):t instanceof me&&e instanceof me?it(t.N,e.N):t instanceof he&&e instanceof he}(t.transform,e.transform)}class we{constructor(t,e){this.version=t,this.transformResults=e}}class Ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ee}static exists(t){return new Ee(void 0,t)}static updateTime(t){return new Ee(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Te(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Se{}function Oe(t,e,n){t instanceof ke?function(t,e,n){const r=t.value.clone(),i=Ne(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof xe?function(t,e,n){if(!Te(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ne(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(je(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function _e(t,e,n){t instanceof ke?function(t,e,n){if(!Te(t.precondition,e))return;const r=t.value.clone(),i=De(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Ie(e),r).setHasLocalMutations()}(t,e,n):t instanceof xe?function(t,e,n){if(!Te(t.precondition,e))return;const r=De(t.fieldTransforms,n,e),i=e.data;i.setAll(je(t)),i.setAll(r),e.convertToFoundDocument(Ie(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Te(t.precondition,e)&&e.convertToNoDocument(P.min())}(t,e)}function Ce(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=le(r.transform,t||null);null!=i&&(null==n&&(n=mt.empty()),n.set(r.field,i))}return n||null}function Ae(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&R(t,e,(t,e)=>be(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ie(t){return t.isFoundDocument()?t.version:P.min()}class ke extends Se{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class xe extends Se{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function je(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ne(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ue(o,a,n[i]))}return r}function De(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ce(t,s,e))}return r}class Re extends Se{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Le extends Se{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,Fe;function Ve(t){switch(t){default:return y();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Ue(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case Me.OK:return w.OK;case Me.CANCELLED:return w.CANCELLED;case Me.UNKNOWN:return w.UNKNOWN;case Me.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Me.INTERNAL:return w.INTERNAL;case Me.UNAVAILABLE:return w.UNAVAILABLE;case Me.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Me.NOT_FOUND:return w.NOT_FOUND;case Me.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Me.ABORTED:return w.ABORTED;case Me.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Me.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(Fe=Me||(Me={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(t,e){this.comparator=t,this.root=e||$e.EMPTY}insert(t,e){return new Be(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(t){return new Be(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$e.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qe(this.root,t,this.comparator,!0)}}class qe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $e{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:$e.RED,this.left=null!=r?r:$e.EMPTY,this.right=null!=i?i:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new $e(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return $e.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1,$e.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(t){this.comparator=t,this.data=new Be(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ge(this.data.getIterator())}getIteratorFrom(t){return new Ge(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof He))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new He(this.comparator);return e.data=t,e}}class Ge{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Be(nt.comparator);function Ke(){return ze}const We=new Be(nt.comparator);function Qe(){return We}const Xe=new Be(nt.comparator);function Ye(){return Xe}const Je=new He(nt.comparator);function Ze(...t){let e=Je;for(const n of t)e=e.add(n);return e}const tn=new He(D);function en(){return tn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,rn.createSynthesizedTargetChangeForCurrentChange(t,e)),new nn(P.min(),n,en(),Ke(),Ze())}}class rn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new rn(G.EMPTY_BYTE_STRING,e,Ze(),Ze(),Ze())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.O=r}}class on{constructor(t,e){this.targetId=t,this.M=e}}class an{constructor(t,e,n=G.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class cn{constructor(){this.F=0,this.L=hn(),this.B=G.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=Ze(),e=Ze(),n=Ze();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new rn(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=hn()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class un{constructor(t){this.et=t,this.nt=new Map,this.st=Ke(),this.it=ln(),this.rt=new He(D)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.M.count,r=this.wt(e);if(r){const t=r.target;if(Ot(t))if(0===n){const n=new nt(t.path);this.at(e,n,vt.newNoDocument(n,P.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Ot(i.target)){const e=new nt(i.target.path);null!==this.st.get(e)||this.yt(r,e)||this.at(r,e,vt.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}});let n=Ze();this.it.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new nn(t,e,this.rt,this.st,n);return this.st=Ke(),this.it=ln(),this.rt=new He(D),r}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new cn,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new He(D),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new cn),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function ln(){return new Be(nt.comparator)}function hn(){return new Be(nt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),dn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class pn{constructor(t,e){this.databaseId=t,this.C=e}}function gn(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mn(t,e){return t.C?e.toBase64():e.toUint8Array()}function yn(t,e){return gn(t,e.toTimestamp())}function vn(t){return v(!!t),P.fromTimestamp(function(t){const e=K(t);return new L(e.seconds,e.nanos)}(t))}function bn(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function wn(t){const e=B.fromString(t);return v(Gn(e)),e}function En(t,e){return bn(t.databaseId,e.path)}function Tn(t,e){const n=wn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new nt(Cn(n))}function Sn(t,e){return bn(t.databaseId,e)}function On(t){const e=wn(t);return 4===e.length?B.emptyPath():Cn(e)}function _n(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function An(t,e,n){return{name:En(t,e),fields:n.value.mapValue.fields}}function In(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),G.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),G.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?w.UNKNOWN:Ue(t.code);return new E(e,t.message||"")}(o);n=new an(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tn(t,r.document.name),s=vn(r.document.updateTime),o=new mt({mapValue:{fields:r.document.fields}}),a=vt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new sn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Tn(t,r.document),s=r.readTime?vn(r.readTime):P.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Tn(t,r.document),s=r.removedTargetIds||[];n=new sn([],s,i,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Pe(r),s=t.targetId;n=new on(s,i)}}return n}function kn(t,e){let n;if(e instanceof ke)n={update:An(t,e.key,e.value)};else if(e instanceof Re)n={delete:En(t,e.key)};else if(e instanceof xe)n={update:An(t,e.key,e.data),updateMask:Hn(e.fieldMask)};else{if(!(e instanceof Le))return y();n={verify:En(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof he)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof me)return{fieldPath:e.field.canonicalString(),increment:n.N};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:yn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function xn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?vn(t.updateTime):vn(e);return n.isEqual(P.min())&&(n=vn(e)),new we(n,t.transformResults||[])}(t,e))):[]}function jn(t,e){return{documents:[Sn(t,e.path)]}}function Nn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Sn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(dt(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NAN"}};if(ft(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(dt(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NAN"}};if(ft(t.value))return{unaryFilter:{field:Un(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(t.field),op:Vn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Un(t.field),direction:Fn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||Z(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Pn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Pn(e.endAt)),n}function Dn(t){let e=On(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Ln(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Mt(Bn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Z(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Mn(n.startAt));let u=null;return n.endAt&&(u=Mn(n.endAt)),qt(e,i,o,s,a,"F",c,u)}function Rn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ln(t){return t?void 0!==t.unaryFilter?[$n(t)]:void 0!==t.fieldFilter?[qn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Ln(t)).reduce((t,e)=>t.concat(e)):y():[]}function Pn(t){return{before:t.before,values:t.position}}function Mn(t){const e=!!t.before,n=t.values||[];return new Lt(n,e)}function Fn(t){return fn[t]}function Vn(t){return dn[t]}function Un(t){return{fieldPath:t.canonicalString()}}function Bn(t){return $.fromServerFormat(t.fieldPath)}function qn(t){return _t.create(Bn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function $n(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bn(t.unaryFilter.field);return _t.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bn(t.unaryFilter.field);return _t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bn(t.unaryFilter.field);return _t.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bn(t.unaryFilter.field);return _t.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function Hn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wn(e)),e=Kn(t.get(n),e);return Wn(e)}function Kn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Wn(t){return t+""}class Qn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Qn.store="owner",Qn.key="owner";class Xn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Xn.store="mutationQueues",Xn.keyPath="userId";class Yn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Yn.store="mutations",Yn.keyPath="batchId",Yn.userMutationsIndex="userMutationsIndex",Yn.userMutationsKeyPath=["userId","batchId"];class Jn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,zn(e)]}static key(t,e,n){return[t,zn(e),n]}}Jn.store="documentMutations",Jn.PLACEHOLDER=new Jn;class Zn{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Zn.store="remoteDocuments",Zn.readTimeIndex="readTimeIndex",Zn.readTimeIndexPath="readTime",Zn.collectionReadTimeIndex="collectionReadTimeIndex",Zn.collectionReadTimeIndexPath=["parentPath","readTime"];class tr{constructor(t){this.byteSize=t}}tr.store="remoteDocumentGlobal",tr.key="remoteDocumentGlobalKey";class er{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}er.store="targets",er.keyPath="targetId",er.queryTargetsIndexName="queryTargetsIndex",er.queryTargetsKeyPath=["canonicalId","targetId"];class nr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}nr.store="targetDocuments",nr.keyPath=["targetId","path"],nr.documentTargetsIndex="documentTargetsIndex",nr.documentTargetsKeyPath=["path","targetId"];class rr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}rr.key="targetGlobalKey",rr.store="targetGlobal";class ir{constructor(t,e){this.collectionId=t,this.parent=e}}ir.store="collectionParents",ir.keyPath=["collectionId","parent"];class sr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}sr.store="clientMetadata",sr.keyPath="clientId";class or{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}or.store="bundles",or.keyPath="bundleId";class ar{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}ar.store="namedQueries",ar.keyPath="name";Xn.store,Yn.store,Jn.store,Zn.store,er.store,Qn.store,rr.store,nr.store,sr.store,tr.store,ir.store,or.store,ar.store;const cr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ur{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new lr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof lr?e:lr.resolve(e)}catch(t){return lr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):lr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):lr.reject(e)}static resolve(t){return new lr((e,n)=>{e(t)})}static reject(t){return new lr((e,n)=>{n(t)})}static waitFor(t){return new lr((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=lr.resolve(!1);for(const n of t)e=e.next(t=>t?lr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Oe(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&_e(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&_e(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ze())}isEqual(t){return this.batchId===t.batchId&&R(this.mutations,t.mutations,(t,e)=>Ae(t,e))&&R(this.baseMutations,t.baseMutations,(t,e)=>Ae(t,e))}}class dr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=Ye();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new dr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,n,r,i=P.min(),s=P.min(),o=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new pr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.Gt=t}}function mr(t){const e=Dn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Yt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(){this.zt=new vr}addToCollectionParentIndex(t,e){return this.zt.add(e),lr.resolve()}getCollectionParents(t,e){return lr.resolve(this.zt.getEntries(e))}}class vr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new He(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new He(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new br(t,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br.DEFAULT_COLLECTION_PERCENTILE=10,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,br.DEFAULT=new br(41943040,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),br.DISABLED=new br(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new wr(0)}static re(){return new wr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Er(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==cr)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){F(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return V(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.changes=new Tr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:P.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:vt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?lr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.bn(t,e,n))}bn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Pn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Pn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return nt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):Wt(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new nt(e)).next(t=>{let e=Qe();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const r=e.collectionGroup;let i=Qe();return this.Jt.getCollectionParents(t,r).next(s=>lr.forEach(s,s=>{const o=function(t,e){return new Bt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Cn(t,e,n){let r,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Nn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=vt.newInvalidDocument(n),r=r.insert(n,i)),_e(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{ee(e,n)||(r=r.remove(t))}),r))}Nn(t,e,n){let r=Ze();for(const s of e)for(const t of s.mutations)t instanceof xe&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=Ze(),r=Ze();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new _r(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(P.min())?this.Fn(t,e):this.Mn.vn(t,r).next(i=>{const o=this.Ln(e,i);return(Ht(e)||Gt(e))&&this.Bn(e.limitType,o,r,n)?this.Fn(t,e):(f()<=s["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),te(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new He(ne(t));return e.forEach((e,r)=>{ee(t,r)&&(n=n.add(r))}),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return f()<=s["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",te(e)),this.Mn.getDocumentsMatchingQuery(t,e,P.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new Be(D),this.Kn=new Tr(t=>Et(t),St),this.jn=P.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Or(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function Ir(t,e,n,r){return new Ar(t,e,n,r)}async function kr(t,e){const n=b(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Or(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Ze();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function xr(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=lr.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.An.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}function jr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function Nr(t,e){const n=b(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.He.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(G.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.He.updateTargetData(t,u))});let a=Ke();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Dr(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(P.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return lr.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=i,t))}function Dr(t,e,n,r,i){let s=Ze();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Ke();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(P.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Rr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e)))}function Lr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.He.getTargetData(t,e).next(i=>i?(r=i,lr.resolve(r)):n.He.allocateTargetId(t).next(i=>(r=new pr(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function Pr(t,e,n){const r=b(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!hr(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function Mr(t,e,n){const r=b(t);let i=P.min(),s=Ze();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.Kn.get(n);return void 0!==i?lr.resolve(r.qn.get(i)):r.He.getTargetData(e,n)}(r,t,Xt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Un.getDocumentsMatchingQuery(t,e,n?i:P.min(),n?s:Ze())).next(t=>({documents:t,zn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return lr.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:vn(n.createTime)}),lr.resolve()}getNamedQuery(t,e){return lr.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:mr(t.bundledQuery),readTime:vn(t.readTime)}}(e)),lr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.ts=new He(Ur.es),this.ns=new He(Ur.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Ur(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new Ur(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new nt(new B([])),n=new Ur(e,t),r=new Ur(e,t+1),i=[];return this.ns.forEachInRange([n,r],t=>{this.os(t),i.push(t.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new nt(new B([])),n=new Ur(e,t),r=new Ur(e,t+1);let i=Ze();return this.ns.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Ur(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ur{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return nt.comparator(t.key,e.key)||D(t.fs,e.fs)}static ss(t,e){return D(t.fs,e.fs)||nt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new He(Ur.es)}checkEmpty(t){return lr.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new fr(i,e,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new Ur(o.key,i)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return lr.resolve(s)}lookupMutationBatch(t,e){return lr.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),i=r<0?0:r;return lr.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return lr.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return lr.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ur(e,0),r=new Ur(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],t=>{const e=this._s(t.fs);i.push(e)}),lr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new He(D);return e.forEach(t=>{const e=new Ur(t,0),r=new Ur(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],t=>{n=n.add(t.fs)})}),lr.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;nt.isDocumentKey(i)||(i=i.child(""));const s=new Ur(new nt(i),0);let o=new He(D);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)},s),lr.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return lr.forEach(e.mutations,r=>{const i=new Ur(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new Ur(e,0),r=this.ws.firstAfterOrEqual(n);return lr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,lr.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Be(nt.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return lr.resolve(n?n.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let n=Ke();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():vt.newInvalidDocument(t))}),lr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ke();const i=new nt(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||ee(e,i)&&(r=r.insert(i.key,i.mutableCopy()))}return lr.resolve(r)}Es(t,e){return lr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new $r(this)}getSize(t){return lr.resolve(this.size)}}class $r extends Sr{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),lr.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t){this.persistence=t,this.Is=new Tr(t=>Et(t),St),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.As=0,this.Rs=new Vr,this.targetCount=0,this.bs=wr.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),lr.resolve()}getLastRemoteSnapshotVersion(t){return lr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return lr.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),lr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),lr.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new wr(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,lr.resolve()}updateTargetData(t,e){return this.ae(e),lr.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,lr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),lr.waitFor(i).next(()=>r)}getTargetCount(t){return lr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return lr.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),lr.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),lr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),lr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return lr.resolve(n)}containsKey(t,e){return lr.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e){this.Ps={},this.Be=new x(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Hr(this),this.Jt=new yr,this.Je=function(t,e){return new qr(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new gr(e),this.Ye=new Fr(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new Br(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new zr(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(t=>this.referenceDelegate.Ss(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ds(t,e){return lr.or(Object.values(this.Ps).map(n=>()=>n.containsKey(t,e)))}}class zr extends ur{constructor(t){super(),this.currentSequenceNumber=t}}class Kr{constructor(t){this.persistence=t,this.Cs=new Vr,this.Ns=null}static ks(t){return new Kr(t)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),lr.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),lr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),lr.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lr.forEach(this.xs,n=>{const r=nt.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return lr.or([()=>lr.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.activeTargetIds=en()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qr{constructor(){this.pi=new Wr,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Wr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,i){const s=this.Ui(t,e);d("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(t,s,o,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,r,i){return this.Bi(t,e,n,r,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=Jr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),s(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);s(new E(e,t.message))}else s(new E(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["l"])()||Object(o["m"])()||Object(o["i"])()||Object(o["j"])()||Object(o["o"])()||Object(o["h"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");d("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,f=!1;const p=new Zr({Vi:t=>{f?d("Connection","Not sending because WebChannel is closed:",t):(h||(d("Connection","Opening WebChannel transport."),l.open(),h=!0),d("Connection","WebChannel sending:",t),l.send(t))},Si:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{f||d("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{f||(f=!0,d("Connection","WebChannel transport closed"),p.Oi())}),m(l,a["f"].EventType.ERROR,t=>{f||(f=!0,g("Connection","WebChannel transport errored:",t),p.Oi(new E(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!f){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){d("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Me[t];if(void 0!==e)return Ue(e)}(t),n=i.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),f=!0,p.Oi(new E(e,n)),l.close()}else d("Connection","WebChannel received:",n),p.Mi(n)}}),m(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.$i()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){return new pn(t,!0)}class ri{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n,r,i,s,o,a){this.Me=t,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new ri(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new E(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget(()=>this.rr===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class si extends ii{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=In(this.k,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?vn(e.readTime):P.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=_n(this.k),e.addTarget=function(t,e){let n;const r=e.target;return n=Ot(r)?{documents:jn(t,r)}:{query:Nn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=mn(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=gn(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=Rn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=_n(this.k),e.removeTarget=t,this.gr(e)}}class oi extends ii{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=xn(t.writeResults,t.commitTime),n=vn(t.commitTime);return this.listener.Cr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=_n(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>kn(this.k,t))};this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Or(){if(this.$r)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class ci{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(p(e),this.Lr=!1):d("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{vi(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Gr.add(4),await hi(e),e.Jr.set("Unknown"),e.Gr.delete(4),await li(e)}(this))})}),this.Jr=new ci(n,r)}}async function li(t){if(vi(t))for(const e of t.zr)await e(!0)}async function hi(t){for(const e of t.zr)await e(!1)}function fi(t,e){const n=b(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),yi(n)?mi(n):Li(n).lr()&&pi(n,e))}function di(t,e){const n=b(t),r=Li(n);n.Wr.delete(e),r.lr()&&gi(n,e),0===n.Wr.size&&(r.lr()?r._r():vi(n)&&n.Jr.set("Unknown"))}function pi(t,e){t.Yr.X(e.targetId),Li(t).Pr(e)}function gi(t,e){t.Yr.X(e),Li(t).vr(e)}function mi(t){t.Yr=new un({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Li(t).start(),t.Jr.Br()}function yi(t){return vi(t)&&!Li(t).hr()&&t.Wr.size>0}function vi(t){return 0===b(t).Gr.size}function bi(t){t.Yr=void 0}async function wi(t){t.Wr.forEach((e,n)=>{pi(t,e)})}async function Ei(t,e){bi(t),yi(t)?(t.Jr.Kr(e),mi(t)):t.Jr.set("Unknown")}async function Ti(t,e,n){if(t.Jr.set("Online"),e instanceof an&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Si(t,n)}else if(e instanceof sn?t.Yr.ot(e):e instanceof on?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(P.min()))try{const e=await jr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(r);i&&t.Wr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),gi(t,e);const r=new pr(n.target,e,1,n.sequenceNumber);pi(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await Si(t,e)}}async function Si(t,e,n){if(!hr(e))throw e;t.Gr.add(1),await hi(t),t.Jr.set("Offline"),n||(n=()=>jr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await li(t)})}function Oi(t,e){return e().catch(n=>Si(t,n,e))}async function _i(t){const e=b(t),n=Pi(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;Ci(e);)try{const t=await Rr(e.localStore,r);if(null===t){0===e.Qr.length&&n._r();break}r=t.batchId,Ai(e,t)}catch(t){await Si(e,t)}Ii(e)&&ki(e)}function Ci(t){return vi(t)&&t.Qr.length<10}function Ai(t,e){t.Qr.push(e);const n=Pi(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Ii(t){return vi(t)&&!Pi(t).hr()&&t.Qr.length>0}function ki(t){Pi(t).start()}async function xi(t){Pi(t).kr()}async function ji(t){const e=Pi(t);for(const n of t.Qr)e.Dr(n.mutations)}async function Ni(t,e,n){const r=t.Qr.shift(),i=dr.from(r,e,n);await Oi(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _i(t)}async function Di(t,e){e&&Pi(t).Sr&&await async function(t,e){if(n=e.code,Ve(n)&&n!==w.ABORTED){const n=t.Qr.shift();Pi(t).wr(),await Oi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await _i(t)}var n}(t,e),Ii(t)&&ki(t)}async function Ri(t,e){const n=b(t);e?(n.Gr.delete(2),await li(n)):e||(n.Gr.add(2),await hi(n),n.Jr.set("Unknown"))}function Li(t){return t.Xr||(t.Xr=function(t,e,n){const r=b(t);return r.Or(),new si(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:wi.bind(null,t),Ni:Ei.bind(null,t),br:Ti.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),yi(t)?mi(t):t.Jr.set("Unknown")):(await t.Xr.stop(),bi(t))})),t.Xr}function Pi(t){return t.Zr||(t.Zr=function(t,e,n){const r=b(t);return r.Or(),new oi(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(t.datastore,t.asyncQueue,{Di:xi.bind(null,t),Ni:Di.bind(null,t),Nr:ji.bind(null,t),Cr:Ni.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await _i(t)):(await t.Zr.stop(),t.Qr.length>0&&(d("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mi{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Mi(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fi(t,e){if(p("AsyncQueue",`${e}: ${t}`),hr(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.comparator=t?(e,n)=>t(e,n)||nt.comparator(e.key,n.key):(t,e)=>nt.comparator(t.key,e.key),this.keyedMap=Qe(),this.sortedSet=new Be(this.comparator)}static emptySet(t){return new Vi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Vi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.eo=new Be(nt.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):y():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class Bi{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Bi(t,e,Vi.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.so=void 0,this.listeners=[]}}class $i{constructor(){this.queries=new Tr(t=>Zt(t),Jt),this.onlineState="Unknown",this.io=new Set}}async function Hi(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qi),i)try{s.so=await n.onListen(r)}catch(t){const n=Fi(t,`Initialization of query '${te(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&Wi(n)}async function Gi(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zi(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(i)&&(r=!0);e.so=i}}r&&Wi(n)}function Ki(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Wi(t){t.io.forEach(t=>{t.next()})}class Qi{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Bi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=Bi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(t){this.key=t}}class Yi{constructor(t){this.key=t}}class Ji{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=Ze(),this.mutatedKeys=Ze(),this.Ao=ne(t),this.Ro=new Vi(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new Ui,r=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ht(this.query)&&r.size===this.query.limit?r.last():null,c=Gt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ee(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Ht(this.query)||Gt(this.query))for(;s.size>this.query.limit;){const t=Ht(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new Bi(this.query,t.Ro,r,i,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Ui,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=Ze(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Yi(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new Xi(n))}),e}ko(t){this.To=t.zn,this.Io=Ze();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return Bi.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Zi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ts{constructor(t){this.key=t,this.$o=!1}}class es{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Mo=new Tr(t=>Zt(t),Jt),this.Fo=new Map,this.Lo=new Set,this.Bo=new Be(nt.comparator),this.Uo=new Map,this.qo=new Vr,this.Ko={},this.jo=new Map,this.Qo=wr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function ns(t,e){const n=Es(t);let r,i;const s=n.Mo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await Lr(n.localStore,Xt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await rs(n,e,r,"current"===s),n.isPrimaryClient&&fi(n.remoteStore,t)}return i}async function rs(t,e,n,r){t.Go=(e,n,r)=>async function(t,e,n,r){let i=e.view.Po(n);i.Bn&&(i=await Mr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Po(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return gs(t,e.targetId,o.Co),o.snapshot}(t,e,n,r);const i=await Mr(t.localStore,e,!0),s=new Ji(e,i.zn),o=s.Po(i.documents),a=rn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);gs(t,n,c.Co);const u=new Zi(e,n,s);return t.Mo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function is(t,e){const n=b(t),r=n.Mo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(t=>!Jt(t,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),di(n.remoteStore,r.targetId),ds(n,r.targetId)}).catch(Er)):(ds(n,r.targetId),await Pr(n.localStore,r.targetId,!0))}async function ss(t,e,n){const r=Ts(t);try{const t=await function(t,e){const n=b(t),r=L.now(),i=e.reduce((t,e)=>t.add(e.key),Ze());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Wn.vn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Ce(t,s.get(t.key));null!=e&&o.push(new xe(t.key,e,yt(e.value.mapValue),Ee.exists(!0)))}return n.An.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ko[t.currentUser.toKey()];r||(r=new Be(D)),r=r.insert(e,n),t.Ko[t.currentUser.toKey()]=r}(r,t.batchId,n),await vs(r,t.changes),await _i(r.remoteStore)}catch(t){const e=Fi(t,"Failed to persist write");n.reject(e)}}async function os(t,e){const n=b(t);try{const t=await Nr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Uo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?v(r.$o):t.removedDocuments.size>0&&(v(r.$o),r.$o=!1))}),await vs(n,t,e)}catch(t){await Er(t)}}function as(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Mo.forEach((n,r)=>{const i=r.view.ro(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.ro(e)&&(r=!0)}),r&&Wi(n)}(r.eventManager,e),t.length&&r.Oo.br(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cs(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let t=new Be(nt.comparator);t=t.insert(s,vt.newNoDocument(s,P.min()));const n=Ze().add(s),i=new nn(P.min(),new Map,new He(D),t,n);await os(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(e),ys(r)}else await Pr(r.localStore,e,!1).then(()=>ds(r,e,n)).catch(Er)}async function us(t,e){const n=b(t),r=e.batch.batchId;try{const t=await xr(n.localStore,e);fs(n,r,null),hs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vs(n,t)}catch(t){await Er(t)}}async function ls(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.An.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.An.removeMutationBatch(t,e))).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}(r.localStore,e);fs(r,e,n),hs(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vs(r,t)}catch(n){await Er(n)}}function hs(t,e){(t.jo.get(e)||[]).forEach(t=>{t.resolve()}),t.jo.delete(e)}function fs(t,e,n){const r=b(t);let i=r.Ko[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function ds(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||ps(t,e)})}function ps(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(di(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),ys(t))}function gs(t,e,n){for(const r of n)r instanceof Xi?(t.qo.addReference(r.key,e),ms(t,r)):r instanceof Yi?(d("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||ps(t,r.key)):y()}function ms(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(d("SyncEngine","New document in limbo: "+n),t.Lo.add(r),ys(t))}function ys(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new nt(B.fromString(e)),r=t.Qo.next();t.Uo.set(r,new ts(n)),t.Bo=t.Bo.insert(n,r),fi(t.remoteStore,new pr(Xt($t(n.path)),r,2,x.I))}}async function vs(t,e,n){const r=b(t),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((t,a)=>{o.push(r.Go(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=_r.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Oo.br(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>lr.forEach(e,e=>lr.forEach(e.kn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>lr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!hr(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function bs(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await kr(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new E(w.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await vs(n,t.Gn)}}function ws(t,e){const n=b(t),r=n.Uo.get(e);if(r&&r.$o)return Ze().add(r.key);{let t=Ze();const r=n.Fo.get(e);if(!r)return t;for(const e of r){const r=n.Mo.get(e);t=t.unionWith(r.view.bo)}return t}}function Es(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=os.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ws.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cs.bind(null,e),e.Oo.br=zi.bind(null,e.eventManager),e.Oo.zo=Ki.bind(null,e.eventManager),e}function Ts(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=us.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ls.bind(null,e),e}class Ss{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=ni(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return Ir(this.persistence,new Cr,t.initialUser,this.k)}Yo(t){return new Gr(Kr.ks,this.k)}Jo(t){return new Qr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Os{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>as(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=bs.bind(null,this.syncEngine),await Ri(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $i}createDatastore(t){const e=ni(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new ti(r));var r;return function(t,e,n,r){return new ai(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>as(this.syncEngine,t,0),s=Yr.Pt()?new Yr:new Xr,new ui(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new es(t,e,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await hi(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _s{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=N.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function As(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await kr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Is(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ks(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=vi(n);n.Gr.add(3),await hi(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await li(n)}(e.remoteStore,t)),t.onlineComponents=e}async function ks(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await As(t,new Ss)),t.offlineComponents}async function xs(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await Is(t,new Os)),t.onlineComponents}function js(t){return xs(t).then(t=>t.syncEngine)}async function Ns(t){const e=await xs(t),n=e.eventManager;return n.onListen=ns.bind(null,e.syncEngine),n.onUnlisten=is.bind(null,e.syncEngine),n}function Ds(t,e,n={}){const r=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new _s({next:s=>{e.enqueueAndForget(()=>Gi(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new E(w.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new E(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Qi($t(n.path),s,{includeMetadataChanges:!0,wo:!0});return Hi(t,o)}(await Ns(t),t.asyncQueue,e,n,r)),r.promise}class Rs{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ls{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ls&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Fs(t,e,n,r){if(!0===e&&!0===r)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vs(t){if(!nt.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Us(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Bs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Us(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Fs("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qs({}),this._settingsFrozen=!1,t instanceof Ls?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qs(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new O;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new A(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ps.get(t);e&&(d("ComponentProvider","Removing Datastore"),Ps.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Hs(this.firestore,t,this._key)}}class Gs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Gs(this.firestore,t,this._query)}}class zs extends Gs{constructor(t,e,n){super(t,e,$t(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Hs(this.firestore,null,new nt(t))}withConverter(t){return new zs(this.firestore,t,this._path)}}function Ks(t,e,...n){if(t=Object(o["f"])(t),1===arguments.length&&(e=N.A()),Ms("doc","path",e),t instanceof $s){const r=B.fromString(e,...n);return Vs(r),new Hs(t,null,new nt(r))}{if(!(t instanceof Hs||t instanceof zs))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Vs(r),new Hs(t.firestore,t instanceof zs?t.converter:null,new nt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new ri(this,"async_queue_retry"),this.bc=()=>{const t=ei();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=ei();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=ei();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const e=new T;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!hr(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const e=this.mc.then(()=>(this.Ic=!0,t().catch(t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ic=!1,t))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const r=Mi.createAndSchedule(this,t,e,n,t=>this.Sc(t));return this.Tc.push(r),r}Pc(){this.Ec&&y()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}function Qs(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Xs extends $s{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Ws,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Zs(this),this._firestoreClient.terminate()}}function Ys(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Js(t){return t._firestoreClient||Zs(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zs(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Rs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Cs(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new eo(G.fromBase64String(t))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new eo(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=/^__.*__$/;class so{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new xe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function oo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class ao{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new ao(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Oc({path:n,Fc:!1});return r.Lc(t),r}Bc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Oc({path:n,Fc:!1});return r.xc(),r}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return Eo(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(oo(this.$c)&&io.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class co{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||ni(t)}Qc(t,e,n,r=!1){return new ao({$c:t,methodName:e,jc:n,path:$.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function uo(t){const e=t._freezeSettings(),n=ni(t._databaseId);return new co(t._databaseId,!!e.ignoreUndefinedProperties,n)}class lo extends no{_toFieldTransform(t){if(2!==t.$c)throw 1===t.$c?t.qc(this._methodName+"() can only appear at the top level of your update data"):t.qc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof lo}}function ho(t,e,n,r){const i=t.Qc(1,e,n);yo("Data must be an object, but it was:",i,r);const s=[],a=mt.empty();F(r,(t,r)=>{const c=wo(e,t,n);r=Object(o["f"])(r);const u=i.Bc(c);if(r instanceof lo)s.push(c);else{const t=po(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new H(s);return new so(a,c,i.fieldTransforms)}function fo(t,e,n,r,i,s){const a=t.Qc(1,e,n),c=[vo(e,r,n)],u=[i];if(s.length%2!=0)throw new E(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(vo(e,s[o])),u.push(s[o+1]);const l=[],h=mt.empty();for(let d=c.length-1;d>=0;--d)if(!To(l,c[d])){const t=c[d];let e=u[d];e=Object(o["f"])(e);const n=a.Bc(t);if(e instanceof lo)l.push(t);else{const r=po(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new H(l);return new so(h,f,a.fieldTransforms)}function po(t,e){if(mo(t=Object(o["f"])(t)))return yo("Unsupported field value:",e,t),go(t,e);if(t instanceof no)return function(t,e){if(!oo(e.$c))throw e.qc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.qc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.$c)throw e.qc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=po(i,e.Uc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["f"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return oe(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:gn(e.k,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:gn(e.k,n)}}if(t instanceof ro)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof eo)return{bytesValue:mn(e.k,t._byteString)};if(t instanceof Hs){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:bn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.qc("Unsupported field value: "+Us(t))}(t,e)}function go(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):F(t,(t,r)=>{const i=po(r,e.Mc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function mo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof ro||t instanceof eo||t instanceof Hs||t instanceof no)}function yo(t,e,n){if(!mo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Us(n);throw"an object"===r?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function vo(t,e,n){if((e=Object(o["f"])(e))instanceof to)return e._internalPath;if("string"==typeof e)return wo(t,e);throw Eo("Field path arguments must be of type string or ",t,!1,void 0,n)}const bo=new RegExp("[~\\*/\\[\\]]");function wo(t,e,n){if(e.search(bo)>=0)throw Eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new to(...e.split("."))._internalPath}catch(r){throw Eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}function To(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Hs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Oo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_o("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Oo extends So{data(){return super.data()}}function _o(t,e){return"string"==typeof e?wo(t,e):e instanceof to?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ao extends So{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_o("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Io extends Ao{data(t={}){return super.data(t)}}class ko{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Co(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Io(this._firestore,this._userDataWriter,n.key,n,new Co(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Io(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Co(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Io(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Co(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:xo(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jo(t){if(Gt(t)&&0===t.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{convertValue(t,e="none"){switch(rt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Q(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return F(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new ro(W(t.latitude),W(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Y(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(J(t));default:return null}}convertTimestamp(t){const e=K(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);v(Gn(n));const r=new Ls(n.get(1),n.get(3)),i=new nt(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Do(t){t=Bs(t,Hs);const e=Bs(t.firestore,Xs);return Ds(Js(e),t._key).then(n=>Fo(e,t,n))}class Ro extends No{constructor(t){super(),this.firestore=t}convertBytes(t){return new eo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Hs(this.firestore,null,e)}}function Lo(t,e,n,...r){t=Bs(t,Hs);const i=Bs(t.firestore,Xs),s=uo(i);let a;return a="string"==typeof(e=Object(o["f"])(e))||e instanceof to?fo(s,"updateDoc",t._key,e,n,r):ho(s,"updateDoc",t._key,e),Mo(i,[a.toMutation(t._key,Ee.exists(!0))])}function Po(t,...e){var n,r,i;t=Object(o["f"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||Qs(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Qs(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof Hs)l=Bs(t.firestore,Xs),h=$t(t._key.path),u={next:n=>{e[a]&&e[a](Fo(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Bs(t,Gs);l=Bs(n.firestore,Xs),h=n._query;const r=new Ro(l);u={next:t=>{e[a]&&e[a](new ko(l,r,n,t))},error:e[a+1],complete:e[a+2]},jo(t._query)}return function(t,e,n,r){const i=new _s(r),s=new Qi(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Hi(await Ns(t),s)),()=>{i.nc(),t.asyncQueue.enqueueAndForget(async()=>Gi(await Ns(t),s))}}(Js(l),h,c,u)}function Mo(t,e){return function(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>ss(await js(t),e,n)),n.promise}(Js(t),e)}function Fo(t,e,n){const r=n.docs.get(e._key),i=new Ro(t);return new Ao(t,i,e._key,r,new Co(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Xs(r,new _(t.getProvider("auth-internal")),new k(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.3",t),Object(r["g"])(c,"3.4.3","esm2017")}()}).call(this,n("4362"))},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return A})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return g})),n.d(e,"j",(function(){return m})),n.d(e,"k",(function(){return b})),n.d(e,"l",(function(){return h})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return y}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return l().indexOf("Electron/")>=0}function m(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return l().indexOf("MSAppHost/")>=0}function v(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new E(r,o,n);return a}}function S(t,e){return t.replace(O,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(C(n)&&C(s)){if(!_(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),f=n("35a1"),d=n("2a62"),p=r.TypeError,g=function(t,e){this.stopped=t,this.result=e},m=g.prototype;t.exports=function(t,e,n){var r,y,v,b,w,E,T,S=n&&n.that,O=!(!n||!n.AS_ENTRIES),_=!(!n||!n.IS_ITERATOR),C=!(!n||!n.INTERRUPTED),A=i(e,S),I=function(t){return r&&d(r,"normal",t),new g(!0,t)},k=function(t){return O?(o(t),C?A(t[0],t[1],I):A(t[0],t[1])):C?A(t,I):A(t)};if(_)r=t;else{if(y=f(t),!y)throw p(a(t)+" is not iterable");if(c(y)){for(v=0,b=u(t);b>v;v++)if(w=k(t[v]),w&&l(m,w))return w;return new g(!1)}r=h(t,y)}E=r.next;while(!(T=s(E,r)).done){try{w=k(T.value)}catch(x){d(r,"throw",x)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",s="9.6.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,s,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},"2ba4":function(t,e,n){var r=n("40d5"),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),f=n("d039"),d=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("1cdc"),y=n("605d"),v=a.setImmediate,b=a.clearImmediate,w=a.process,E=a.Dispatch,T=a.Function,S=a.MessageChannel,O=a.String,_=0,C={},A="onreadystatechange";try{r=a.location}catch(N){}var I=function(t){if(h(C,t)){var e=C[t];delete C[t],e()}},k=function(t){return function(){I(t)}},x=function(t){I(t.data)},j=function(t){a.postMessage(O(t),r.protocol+"//"+r.host)};v&&b||(v=function(t){var e=p(arguments,1);return C[++_]=function(){c(l(t)?t:T(t),void 0,e)},i(_),_},b=function(t){delete C[t]},y?i=function(t){w.nextTick(k(t))}:E&&E.now?i=function(t){E.now(k(t))}:S&&!m?(s=new S,o=s.port2,s.port1.onmessage=x,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(j)?(i=j,a.addEventListener("message",x,!1)):i=A in g("script")?function(t){d.appendChild(g("script"))[A]=function(){d.removeChild(this),I(t)}}:function(t){setTimeout(k(t),0)}),t.exports={set:v,clear:b}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f8c":function(t,e){t.exports={}},"40d5":function(t,e,n){var r=n("d039");t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return X}));var r=n("22e5"),i=n("e691"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.14",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",E="@firebase/functions-compat",T="@firebase/installations",S="@firebase/installations-compat",O="@firebase/messaging",_="@firebase/messaging-compat",C="@firebase/performance",A="@firebase/performance-compat",I="@firebase/remote-config",k="@firebase/remote-config-compat",x="@firebase/storage",j="@firebase/storage-compat",N="@firebase/firestore",D="@firebase/firestore-compat",R="firebase",L="9.6.4",P="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[E]:"fire-fn-compat",[T]:"fire-iid",[S]:"fire-iid-compat",[O]:"fire-fcm",[_]:"fire-fcm-compat",[C]:"fire-perf",[A]:"fire-perf-compat",[I]:"fire-rc",[k]:"fire-rc-compat",[x]:"fire-gcs",[j]:"fire-gcs-compat",[N]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},F=new Map,V=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(V.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of F.values())U(n,t);return!0}function q(t,e){return t.container.getProvider(e)}function $(t,e,n=P){q(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s["b"]("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=L;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["e"])(t,o.options)&&Object(s["e"])(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of V.values())a.addComponent(r);const c=new z(t,n,a);return F.set(i,c),c}function Q(t=P){const e=F.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function X(t,e,n){var i;let s=null!==(i=M[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),X(c,u,t),X(c,u,"esm2017"),X("fire-js","")}Y("")},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),f=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!f||o((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||a(f({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,o=1,f=c.f,d=u.f;while(i>o){var g,m=h(arguments[o++]),y=f?p(a(m),f(m)):a(m),v=y.length,b=0;while(v>b)g=y[b++],r&&!s(d,m,g)||(n[g]=m[g])}return n}:f},6547:function(t,e,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=s(o(e)),f=i(n),d=h.length;return f<0||f>=d?t?"":void 0:(r=c(h,f),r<55296||r>56319||f+1===d||(l=c(h,f+1))<56320||l>57343?t?a(h,f):r:t?u(h,f,f+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(u),g=function(t){if(!s(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},m=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,c(t))}catch(e){return!0}};m.sham=!0,t.exports=!h||i((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?m:g},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),f=n("c6cd"),d=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,y=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||f.state){var w=f.state||(f.state=new y),E=c(w.get),T=c(w.has),S=c(w.set);r=function(t,e){if(T(w,t))throw new m(g);return e.facade=t,S(w,t,e),e},i=function(t){return E(w,t)||{}},s=function(t){return T(w,t)}}else{var O=d("state");p[O]=!0,r=function(t,e){if(h(t,O))throw new m(g);return e.facade=t,l(t,O,e),e},i=function(t){return h(t,O)?t[O]:{}},s=function(t){return h(t,O)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:b}},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return te})),n.d(e,"b",(function(){return G}));var r=n("7a23");n("abc5");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=t=>i?Symbol(t):"_vr_"+t,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const m=/\/$/,y=t=>t.replace(m,"");function v(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=C(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function E(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&T(e.matched[r],n.matched[i])&&S(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function T(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function S(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!O(t[n],e[n]))return!1;return!0}function O(t,e){return Array.isArray(t)?_(t,e):Array.isArray(e)?_(e,t):t===e}function _(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function C(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,I;(function(t){t["pop"]="pop",t["push"]="push"})(A||(A={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(I||(I={}));function k(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),y(t)}const x=/^[^#]+#/;function j(t,e){return t.replace(x,"#")+e}function N(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=N(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function L(t,e){const n=history.state?history.state.position-e:-1;return n+t}const P=new Map;function M(t,e){P.set(t,e)}function F(t){const e=P.get(t);return P.delete(t),e}let V=()=>location.protocol+"//"+location.host;function U(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,t);return o+r+i}function B(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=U(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:A.pop,direction:l?l>0?I.forward:I.back:I.unknown})})};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:D()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?D():null}}function $(t){const{history:e,location:n}=window,r={value:U(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:V()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=d({},e.state,q(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=d({},i.value,e.state,{forward:t,scroll:D()});s(o.current,o,!0);const a=d({},q(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function H(t){t=k(t);const e=$(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:j.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function G(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),H(t)}function z(t){return"string"===typeof t||t&&"object"===typeof t}function K(t){return"string"===typeof t||"symbol"===typeof t}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=s("nf");var X;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(X||(X={}));function Y(t,e){return d(new Error,{type:t,[Q]:!0},e)}function J(t,e){return t instanceof Error&&Q in t&&(null==e||!!(t.type&e))}const Z="[^/]+?",tt={sensitive:!1,strict:!1,start:!0,end:!0},et=/[.+*?^${}()[\]/\\]/g;function nt(t,e){const n=d({},tt,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(et,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function rt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function it(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=rt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const st={type:0,value:""},ot=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[st]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ot.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ct(t,e,n){const r=nt(at(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ut(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=ht(t);a.aliasOf=r&&r.record;const u=gt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=ct(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!dt(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{o(f)}:g}function o(t){if(K(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&it(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!dt(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw Y(1,{location:t});o=i.record.name,a=d(lt(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find(t=>t.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw Y(1,{location:t,currentLocation:e});o=i.record.name,a=d({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:pt(c)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>s(t)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function lt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ht(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ft(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ft(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function dt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function gt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const mt=/#/g,yt=/&/g,vt=/\//g,bt=/=/g,wt=/\?/g,Et=/\+/g,Tt=/%5B/g,St=/%5D/g,Ot=/%5E/g,_t=/%60/g,Ct=/%7B/g,At=/%7C/g,It=/%7D/g,kt=/%20/g;function xt(t){return encodeURI(""+t).replace(At,"|").replace(Tt,"[").replace(St,"]")}function jt(t){return xt(t).replace(Ct,"{").replace(It,"}").replace(Ot,"^")}function Nt(t){return xt(t).replace(Et,"%2B").replace(kt,"+").replace(mt,"%23").replace(yt,"%26").replace(_t,"`").replace(Ct,"{").replace(It,"}").replace(Ot,"^")}function Dt(t){return Nt(t).replace(bt,"%3D")}function Rt(t){return xt(t).replace(mt,"%23").replace(wt,"%3F")}function Lt(t){return null==t?"":Rt(t).replace(vt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Mt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(Et," "),n=t.indexOf("="),s=Pt(n<0?t:t.slice(0,n)),o=n<0?null:Pt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ft(t){let e="";for(let n in t){const r=t[n];if(n=Dt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&Nt(t)):[r&&Nt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Vt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(Y(4,{from:n,to:e})):t instanceof Error?a(t):z(t)?a(Y(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function qt(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if($t(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(Bt(c,n,r,s,t))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&Bt(c,n,r,s,t)()}))}}return i}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=Object(r["j"])(c),n=Object(r["j"])(u),i=Object(r["a"])(()=>e.resolve(Object(r["x"])(t.to))),s=Object(r["a"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(T.bind(null,r));if(o>-1)return o;const a=Qt(t[e-2]);return e>1&&Qt(r)===a&&s[s.length-1].path!==a?s.findIndex(T.bind(null,t[e-2])):o}),o=Object(r["a"])(()=>s.value>-1&&Wt(n.params,i.value.params)),a=Object(r["a"])(()=>s.value>-1&&s.value===n.matched.length-1&&S(n.params,i.value.params));function l(n={}){return Kt(n)?e[Object(r["x"])(t.replace)?"replace":"push"](Object(r["x"])(t.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["a"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const Gt=Object(r["g"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=Object(r["s"])(Ht(t)),{options:i}=Object(r["j"])(c),s=Object(r["a"])(()=>({[Xt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["i"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zt=Gt;function Kt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Qt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=Object(r["g"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["j"])(l),s=Object(r["a"])(()=>t.route||i.value),c=Object(r["j"])(a,0),u=Object(r["a"])(()=>s.value.matched[c]);Object(r["q"])(a,c+1),Object(r["q"])(o,u),Object(r["q"])(l,s);const h=Object(r["t"])();return Object(r["z"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&T(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[t.name],c=t.name;if(!a)return Jt(n.default,{Component:a,route:i});const l=o.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["i"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Jt(n.default,{Component:g,route:i})||g}}});function Jt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Zt=Yt;function te(t){const e=ut(t.routes,t),n=t.parseQuery||Mt,i=t.stringifyQuery||Ft,s=t.history;const o=Ut(),a=Ut(),f=Ut(),m=Object(r["v"])(W);let y=W;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,t=>""+t),T=p.bind(null,Lt),S=p.bind(null,Pt);function O(t,n){let r,i;return K(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function _(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map(t=>t.record)}function I(t){return!!e.getRecordMatcher(t)}function k(t,r){if(r=d({},r||m.value),"string"===typeof t){const i=v(n,t,r.path),o=e.resolve({path:i.path},r),a=s.createHref(i.fullPath);return d(i,o,{params:S(o.params),hash:Pt(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in t)o=d({},t,{path:v(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];o=d({},t,{params:T(t.params)}),r.params=T(r.params)}const a=e.resolve(o,r),c=t.hash||"";a.params=w(S(a.params));const u=b(i,d({},t,{hash:jt(c),path:a.path})),l=s.createHref(u);return d({fullPath:u,hash:c,query:i===Ft?Vt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function x(t){return"string"===typeof t?v(n,t,m.value.path):d({},t)}function j(t,e){if(y!==t)return Y(8,{from:e,to:t})}function N(t){return U(t)}function P(t){return N(d(x(t),{replace:!0}))}function V(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function U(t,e){const n=y=k(t),r=m.value,s=t.state,o=t.force,a=!0===t.replace,c=V(n);if(c)return U(d(x(c),{state:s,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&E(i,r,n)&&(l=Y(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(t=>J(t)?t:tt(t,u,r)).then(t=>{if(t){if(J(t,2))return U(d(x(t.to),{state:s,force:o,replace:a}),e||u)}else t=H(u,r,!0,a,s);return $(u,r,t),t})}function B(t,e){const n=j(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=ne(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Bt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),ee(n).then(()=>{n=[];for(const r of o.list())n.push(Bt(r,t,e));return n.push(c),ee(n)}).then(()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Bt(r,t,e))});return n.push(c),ee(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Bt(i,t,e));else n.push(Bt(r.beforeEnter,t,e));return n.push(c),ee(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=qt(s,"beforeRouteEnter",t,e),n.push(c),ee(n))).then(()=>{n=[];for(const r of a.list())n.push(Bt(r,t,e));return n.push(c),ee(n)}).catch(t=>J(t,8)?t:Promise.reject(t))}function $(t,e,n){for(const r of f.list())r(t,e,n)}function H(t,e,n,r,i){const o=j(t,e);if(o)return o;const a=e===W,c=h?history.state:{};n&&(r||a?s.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):s.push(t.fullPath,i)),m.value=t,rt(t,e,n,a),nt()}let G;function z(){G=s.listen((t,e,n)=>{const r=k(t),i=V(r);if(i)return void U(d(i,{replace:!0}),r).catch(g);y=r;const o=m.value;h&&M(L(o.fullPath,n.delta),D()),q(r,o).catch(t=>J(t,12)?t:J(t,2)?(U(t.to,r).then(t=>{J(t,20)&&!n.delta&&n.type===A.pop&&s.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),tt(t,r,o))).then(t=>{t=t||H(r,o,!1),t&&(n.delta?s.go(-n.delta,!1):n.type===A.pop&&J(t,20)&&s.go(-1,!1)),$(r,o,t)}).catch(g)})}let Q,X=Ut(),Z=Ut();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return Q&&m.value!==W?Promise.resolve():new Promise((t,e)=>{X.add([t,e])})}function nt(t){Q||(Q=!0,z(),X.list().forEach(([e,n])=>t?n(t):e()),X.reset())}function rt(e,n,i,s){const{scrollBehavior:o}=t;if(!h||!o)return Promise.resolve();const a=!i&&F(L(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["k"])().then(()=>o(e,n,a)).then(t=>t&&R(t)).catch(t=>tt(t,e,n))}const it=t=>s.go(t);let st;const ot=new Set,at={currentRoute:m,addRoute:O,removeRoute:_,hasRoute:I,getRoutes:C,resolve:k,options:t,push:N,replace:P,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:o.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",zt),t.component("RouterView",Zt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["x"])(m)}),h&&!st&&m.value===W&&(st=!0,N(s.location).catch(t=>{0}));const n={};for(const s in W)n[s]=Object(r["a"])(()=>m.value[s]);t.provide(c,e),t.provide(u,Object(r["s"])(n)),t.provide(l,m);const i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(y=W,G&&G(),m.value=W,st=!1,Q=!1),i()}}};return at}function ee(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ne(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>T(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>T(t,a))||i.push(a))}return[n,r,i]}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==m)&&o(n,"name",m),u=f(n),u.source||(u.source=d.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"7a23":function(t,e,n){"use strict";n.d(e,"s",(function(){return St})),n.d(e,"t",(function(){return Ft})),n.d(e,"v",(function(){return Vt})),n.d(e,"x",(function(){return qt})),n.d(e,"w",(function(){return r["L"]})),n.d(e,"a",(function(){return bi})),n.d(e,"c",(function(){return Dr})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return Vr})),n.d(e,"f",(function(){return Ur})),n.d(e,"g",(function(){return rn})),n.d(e,"h",(function(){return ri})),n.d(e,"i",(function(){return wi})),n.d(e,"j",(function(){return Ue})),n.d(e,"k",(function(){return le})),n.d(e,"l",(function(){return cn})),n.d(e,"m",(function(){return un})),n.d(e,"n",(function(){return En})),n.d(e,"o",(function(){return Ar})),n.d(e,"p",(function(){return ke})),n.d(e,"q",(function(){return Ve})),n.d(e,"r",(function(){return Ie})),n.d(e,"u",(function(){return yr})),n.d(e,"z",(function(){return qe})),n.d(e,"A",(function(){return nr})),n.d(e,"b",(function(){return Os})),n.d(e,"y",(function(){return ws}));var r=n("9ff4");let i;const s=[];class o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30,y=[];let v;const b=Symbol(""),w=Symbol("");class E{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!y.length||!y.includes(this))try{return y.push(v=this),C(),g=1<<++p,p<=m?h(this):T(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,A(),y.pop();const t=y.length;v=t>0?y[t-1]:void 0}}stop(){this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let S=!0;const O=[];function _(){O.push(S),S=!1}function C(){O.push(S),S=!0}function A(){const t=O.pop();S=void 0===t||t}function I(t,e,n){if(!k())return;let r=d.get(t);r||d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;x(i,s)}function k(){return S&&void 0!==v}function x(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(v),n&&(t.add(v),v.deps.push(t))}function j(t,e,n,i,s,o){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["o"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["o"])(t)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(w)));break;case"delete":Object(r["o"])(t)||(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(w)));break;case"set":Object(r["t"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&N(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);N(c(t))}}function N(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const D=Object(r["H"])("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["E"])),L=U(),P=U(!1,!0),M=U(!0),F=V();function V(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=jt(this);for(let e=0,i=this.length;e<i;e++)I(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(jt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){_();const n=jt(this)[e].apply(this,t);return A(),n}}),t}function U(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?wt:bt:e?vt:yt).get(n))return n;const o=Object(r["o"])(n);if(!t&&o&&Object(r["k"])(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);if(Object(r["E"])(i)?R.has(i):D(i))return a;if(t||I(n,"get",i),e)return a;if(Mt(a)){const t=!o||!Object(r["s"])(i);return t?a.value:a}return Object(r["v"])(a)?t?_t(a):St(a):a}}const B=$(),q=$(!0);function $(t=!1){return function(e,n,i,s){let o=e[n];if(It(o)&&Mt(o)&&!Mt(i))return!1;if(!t&&!It(i)&&(kt(i)||(i=jt(i),o=jt(o)),!Object(r["o"])(e)&&Mt(o)&&!Mt(i)))return o.value=i,!0;const a=Object(r["o"])(e)&&Object(r["s"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,i,s);return e===jt(s)&&(a?Object(r["j"])(i,o)&&j(e,"set",n,i,o):j(e,"add",n,i)),c}}function H(t,e){const n=Object(r["k"])(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&j(t,"delete",e,void 0,i),s}function G(t,e){const n=Reflect.has(t,e);return Object(r["E"])(e)&&R.has(e)||I(t,"has",e),n}function z(t){return I(t,"iterate",Object(r["o"])(t)?"length":b),Reflect.ownKeys(t)}const K={get:L,set:B,deleteProperty:H,has:G,ownKeys:z},W={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},Q=Object(r["h"])({},K,{get:P,set:q}),X=t=>t,Y=t=>Reflect.getPrototypeOf(t);function J(t,e,n=!1,r=!1){t=t["__v_raw"];const i=jt(t),s=jt(e);e!==s&&!n&&I(i,"get",e),!n&&I(i,"get",s);const{has:o}=Y(i),a=r?X:n?Rt:Dt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function Z(t,e=!1){const n=this["__v_raw"],r=jt(n),i=jt(t);return t!==i&&!e&&I(r,"has",t),!e&&I(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function tt(t,e=!1){return t=t["__v_raw"],!e&&I(jt(t),"iterate",b),Reflect.get(t,"size",t)}function et(t){t=jt(t);const e=jt(this),n=Y(e),r=n.has.call(e,t);return r||(e.add(t),j(e,"add",t,t)),this}function nt(t,e){e=jt(e);const n=jt(this),{has:i,get:s}=Y(n);let o=i.call(n,t);o||(t=jt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?Object(r["j"])(e,a)&&j(n,"set",t,e,a):j(n,"add",t,e),this}function rt(t){const e=jt(this),{has:n,get:r}=Y(e);let i=n.call(e,t);i||(t=jt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&j(e,"delete",t,void 0,s),o}function it(){const t=jt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&j(t,"clear",void 0,void 0,n),r}function st(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=jt(s),a=e?X:t?Rt:Dt;return!t&&I(o,"iterate",b),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ot(t,e,n){return function(...i){const s=this["__v_raw"],o=jt(s),a=Object(r["t"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?X:e?Rt:Dt;return!e&&I(o,"iterate",u?w:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&this}}function ct(){const t={get(t){return J(this,t)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!1)},e={get(t){return J(this,t,!1,!0)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!0)},n={get(t){return J(this,t,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!1)},r={get(t){return J(this,t,!0,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ot(i,!1,!1),n[i]=ot(i,!0,!1),e[i]=ot(i,!1,!0),r[i]=ot(i,!0,!0)}),[t,n,e,r]}const[ut,lt,ht,ft]=ct();function dt(t,e){const n=e?t?ft:ht:t?lt:ut;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["k"])(n,i)&&i in e?n:e,i,s)}const pt={get:dt(!1,!1)},gt={get:dt(!1,!0)},mt={get:dt(!0,!1)};const yt=new WeakMap,vt=new WeakMap,bt=new WeakMap,wt=new WeakMap;function Et(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Et(Object(r["O"])(t))}function St(t){return It(t)?t:Ct(t,!1,K,pt,yt)}function Ot(t){return Ct(t,!1,Q,gt,vt)}function _t(t){return Ct(t,!0,W,mt,bt)}function Ct(t,e,n,i,s){if(!Object(r["v"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Tt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function At(t){return It(t)?At(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function kt(t){return!(!t||!t["__v_isShallow"])}function xt(t){return At(t)||It(t)}function jt(t){const e=t&&t["__v_raw"];return e?jt(e):t}function Nt(t){return Object(r["g"])(t,"__v_skip",!0),t}const Dt=t=>Object(r["v"])(t)?St(t):t,Rt=t=>Object(r["v"])(t)?_t(t):t;function Lt(t){k()&&(t=jt(t),t.dep||(t.dep=c()),x(t.dep))}function Pt(t,e){t=jt(t),t.dep&&N(t.dep)}function Mt(t){return Boolean(t&&!0===t.__v_isRef)}function Ft(t){return Ut(t,!1)}function Vt(t){return Ut(t,!0)}function Ut(t,e){return Mt(t)?t:new Bt(t,e)}class Bt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:jt(t),this._value=e?t:Dt(t)}get value(){return Lt(this),this._value}set value(t){t=this.__v_isShallow?t:jt(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Dt(t),Pt(this,t))}}function qt(t){return Mt(t)?t.value:t}const $t={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Mt(i)&&!Mt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ht(t){return At(t)?t:new Proxy(t,$t)}class Gt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new E(t,()=>{this._dirty||(this._dirty=!0,Pt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=jt(this);return Lt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function zt(t,e,n=!1){let i,s;const o=Object(r["p"])(t);o?(i=t,s=r["d"]):(i=t.get,s=t.set);const a=new Gt(i,s,o||!s,n);return a}Promise.resolve();function Kt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Qt(s,e,n)}return i}function Wt(t,e,n,i){if(Object(r["p"])(t)){const s=Kt(t,e,n,i);return s&&Object(r["y"])(s)&&s.catch(t=>{Qt(t,e,n)}),s}const s=[];for(let r=0;r<t.length;r++)s.push(Wt(t[r],e,n,i));return s}function Qt(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void Kt(o,null,10,[t,i,s])}Xt(t,n,i,r)}function Xt(t,e,n,r=!0){console.error(t)}let Yt=!1,Jt=!1;const Zt=[];let te=0;const ee=[];let ne=null,re=0;const ie=[];let se=null,oe=0;const ae=Promise.resolve();let ce=null,ue=null;function le(t){const e=ce||ae;return t?e.then(this?t.bind(this):t):e}function he(t){let e=te+1,n=Zt.length;while(e<n){const r=e+n>>>1,i=we(Zt[r]);i<t?e=r+1:n=r}return e}function fe(t){Zt.length&&Zt.includes(t,Yt&&t.allowRecurse?te+1:te)||t===ue||(null==t.id?Zt.push(t):Zt.splice(he(t.id),0,t),de())}function de(){Yt||Jt||(Jt=!0,ce=ae.then(Ee))}function pe(t){const e=Zt.indexOf(t);e>te&&Zt.splice(e,1)}function ge(t,e,n,i){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),de()}function me(t){ge(t,ne,ee,re)}function ye(t){ge(t,se,ie,oe)}function ve(t,e=null){if(ee.length){for(ue=e,ne=[...new Set(ee)],ee.length=0,re=0;re<ne.length;re++)ne[re]();ne=null,re=0,ue=null,ve(t,e)}}function be(t){if(ie.length){const t=[...new Set(ie)];if(ie.length=0,se)return void se.push(...t);for(se=t,se.sort((t,e)=>we(t)-we(e)),oe=0;oe<se.length;oe++)se[oe]();se=null,oe=0}}const we=t=>null==t.id?1/0:t.id;function Ee(t){Jt=!1,Yt=!0,ve(t),Zt.sort((t,e)=>we(t)-we(e));r["d"];try{for(te=0;te<Zt.length;te++){const t=Zt[te];t&&!1!==t.active&&Kt(t,null,14)}}finally{te=0,Zt.length=0,be(t),Yt=!1,ce=null,(Zt.length||ee.length||ie.length)&&Ee(t)}}new Set;new Map;function Te(t,e,...n){const i=t.vnode.props||r["b"];let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=i[t]||r["b"];o?s=n.map(t=>t.trim()):e&&(s=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(e)]||i[c=Object(r["M"])(Object(r["e"])(e))];!u&&o&&(u=i[c=Object(r["M"])(Object(r["l"])(e))]),u&&Wt(u,t,6,s);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Wt(l,t,6,s)}}function Se(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!Object(r["p"])(t)){const i=t=>{const n=Se(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),i.set(t,a),a):(i.set(t,null),null)}function Oe(t,e){return!(!t||!Object(r["w"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let _e=null,Ce=null;function Ae(t){const e=_e;return _e=t,Ce=t&&t.type.__scopeId||null,e}function Ie(t){Ce=t}function ke(){Ce=null}function xe(t,e=_e,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&xr(-1);const i=Ae(e),s=t(...n);return Ae(i),r._d&&xr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function je(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y,v;const b=Ae(t);try{if(4&n.shapeFlag){const t=s||i;y=Gr(h.call(t,t,f,o,p,d,g)),v=u}else{const t=e;0,y=Gr(t.length>1?t(o,{attrs:u,slots:c,emit:l}):t(o,null)),v=e.props?u:Ne(u)}}catch(E){_r.length=0,Qt(E,t,1),y=Ur(Sr)}let w=y;if(v&&!1!==m){const t=Object.keys(v),{shapeFlag:e}=w;t.length&&7&e&&(a&&t.some(r["u"])&&(v=De(v,a)),w=$r(w,v))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,Ae(b),y}const Ne=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["w"])(n))&&((e||(e={}))[n]=t[n]);return e},De=(t,e)=>{const n={};for(const i in t)Object(r["u"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function Re(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Le(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Le(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Oe(u,n))return!0}}return!1}function Le(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Oe(n,s))return!0}return!1}function Pe({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const Me=t=>t.__isSuspense;function Fe(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):ye(t)}function Ve(t,e){if(ni){let n=ni.provides;const r=ni.parent&&ni.parent.provides;r===n&&(n=ni.provides=Object.create(r)),n[t]=e}else 0}function Ue(t,e,n=!1){const i=ni||_e;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Object(r["p"])(e)?e.call(i.proxy):e}else 0}const Be={};function qe(t,e,n){return $e(t,e,n)}function $e(t,e,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=ni;let u,l,h=!1,f=!1;if(Mt(t)?(u=()=>t.value,h=kt(t)):At(t)?(u=()=>t,i=!0):Object(r["o"])(t)?(f=!0,h=t.some(At),u=()=>t.map(t=>Mt(t)?t.value:At(t)?ze(t):Object(r["p"])(t)?Kt(t,c,2):void 0)):u=Object(r["p"])(t)?e?()=>Kt(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Wt(t,c,3,[d])}:r["d"],e&&i){const t=u;u=()=>ze(t())}let d=t=>{l=y.onStop=()=>{Kt(t,c,4)}};if(ui)return d=r["d"],e?n&&Wt(e,c,3,[u(),f?[]:void 0,d]):u(),r["d"];let p=f?[]:Be;const g=()=>{if(y.active)if(e){const t=y.run();(i||h||(f?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),Wt(e,c,3,[t,p===Be?void 0:p,d]),p=t)}else y.run()};let m;g.allowRecurse=!!e,m="sync"===s?g:"post"===s?()=>ur(g,c&&c.suspense):()=>{!c||c.isMounted?me(g):g()};const y=new E(u,m);return e?n?g():p=y.run():"post"===s?ur(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,y)}}function He(t,e,n){const i=this.proxy,s=Object(r["D"])(t)?t.includes(".")?Ge(i,t):()=>i[t]:t.bind(i,i);let o;Object(r["p"])(e)?o=e:(o=e.handler,n=e);const a=ni;ii(this);const c=$e(s,o.bind(i),n);return a?ii(a):si(),c}function Ge(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function ze(t,e){if(!Object(r["v"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Mt(t))ze(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)ze(t[n],e);else if(Object(r["B"])(t)||Object(r["t"])(t))t.forEach(t=>{ze(t,e)});else if(Object(r["x"])(t))for(const n in t)ze(t[n],e);return t}function Ke(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yn(()=>{t.isMounted=!0}),wn(()=>{t.isUnmounting=!0}),t}const We=[Function,Array],Qe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},setup(t,{slots:e}){const n=ri(),r=Ke();let i;return()=>{const s=e.default&&nn(e.default(),!0);if(!s||!s.length)return;const o=jt(t),{mode:a}=o;const c=s[0];if(r.isLeaving)return Ze(c);const u=tn(c);if(!u)return Ze(c);const l=Je(u,o,r,n);en(u,l);const h=n.subTree,f=h&&tn(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Sr&&(!Lr(u,f)||d)){const t=Je(f,o,r,n);if(en(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},Ze(c);"in-out"===a&&u.type!==Sr&&(t.delayLeave=(t,e,n)=>{const i=Ye(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},Xe=Qe;function Ye(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Je(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=e,b=String(t.key),w=Ye(n,t),E=(t,e)=>{t&&Wt(t,r,9,e)},T={mode:s,persisted:o,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const s=w[b];s&&Lr(t,s)&&s.el._leaveCb&&s.el._leaveCb(),E(r,[e])},enter(t){let e=c,r=u,s=l;if(!n.isMounted){if(!i)return;e=m||c,r=y||u,s=v||l}let o=!1;const a=t._enterCb=e=>{o||(o=!0,E(e?s:r,[t]),T.delayedLeave&&T.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();E(h,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),E(n?p:d,[e]),e._leaveCb=void 0,w[i]===t&&delete w[i])};w[i]=t,f?(f(e,o),f.length<=1&&o()):o()},clone(t){return Je(t,e,n,r)}};return T}function Ze(t){if(on(t))return t=$r(t),t.children=null,t}function tn(t){return on(t)?t.children?t.children[0]:void 0:t}function en(t,e){6&t.shapeFlag&&t.component?en(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nn(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===Er?(128&s.patchFlag&&r++,n=n.concat(nn(s.children,e))):(e||s.type!==Sr)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function rn(t){return Object(r["p"])(t)?{setup:t,name:t.name}:t}const sn=t=>!!t.type.__asyncLoader;const on=t=>t.type.__isKeepAlive;RegExp,RegExp;function an(t,e){return Object(r["o"])(t)?t.some(t=>an(t,e)):Object(r["D"])(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function cn(t,e){ln(t,"a",e)}function un(t,e){ln(t,"da",e)}function ln(t,e,n=ni){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(pn(e,r,n),n){let t=n.parent;while(t&&t.parent)on(t.parent.vnode)&&hn(r,e,n,t),t=t.parent}}function hn(t,e,n,i){const s=pn(e,t,i,!0);En(()=>{Object(r["K"])(i[e],s)},n)}function fn(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function dn(t){return 128&t.shapeFlag?t.ssContent:t}function pn(t,e,n=ni,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;_(),ii(n);const i=Wt(e,n,t,r);return si(),A(),i});return r?i.unshift(s):i.push(s),s}}const gn=t=>(e,n=ni)=>(!ui||"sp"===t)&&pn(t,e,n),mn=gn("bm"),yn=gn("m"),vn=gn("bu"),bn=gn("u"),wn=gn("bum"),En=gn("um"),Tn=gn("sp"),Sn=gn("rtg"),On=gn("rtc");function _n(t,e=ni){pn("ec",t,e)}let Cn=!0;function An(t){const e=jn(t),n=t.proxy,i=t.ctx;Cn=!1,e.beforeCreate&&kn(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:E,render:T,renderTracked:S,renderTriggered:O,errorCaptured:_,serverPrefetch:C,expose:A,inheritAttrs:I,components:k,directives:x,filters:j}=e,N=null;if(l&&In(l,i,N,t.appContext.config.unwrapInjectedRef),a)for(const R in a){const t=a[R];Object(r["p"])(t)&&(i[R]=t.bind(n))}if(s){0;const e=s.call(n,n);0,Object(r["v"])(e)&&(t.data=St(e))}if(Cn=!0,o)for(const R in o){const t=o[R],e=Object(r["p"])(t)?t.bind(n,n):Object(r["p"])(t.get)?t.get.bind(n,n):r["d"];0;const s=!Object(r["p"])(t)&&Object(r["p"])(t.set)?t.set.bind(n):r["d"],a=bi({get:e,set:s});Object.defineProperty(i,R,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)xn(c[r],i,n,r);if(u){const t=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{Ve(e,t[e])})}function D(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&kn(h,t,"c"),D(mn,f),D(yn,d),D(vn,p),D(bn,g),D(cn,m),D(un,y),D(_n,_),D(On,S),D(Sn,O),D(wn,b),D(En,E),D(Tn,C),Object(r["o"])(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});T&&t.render===r["d"]&&(t.render=T),null!=I&&(t.inheritAttrs=I),k&&(t.components=k),x&&(t.directives=x)}function In(t,e,n=r["d"],i=!1){Object(r["o"])(t)&&(t=Pn(t));for(const s in t){const n=t[s];let o;o=Object(r["v"])(n)?"default"in n?Ue(n.from||s,n.default,!0):Ue(n.from||s):Ue(n),Mt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function kn(t,e,n){Wt(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function xn(t,e,n,i){const s=i.includes(".")?Ge(n,i):()=>n[i];if(Object(r["D"])(t)){const n=e[t];Object(r["p"])(n)&&qe(s,n)}else if(Object(r["p"])(t))qe(s,t.bind(n));else if(Object(r["v"])(t))if(Object(r["o"])(t))t.forEach(t=>xn(t,e,n,i));else{const i=Object(r["p"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["p"])(i)&&qe(s,i,t)}else 0}function jn(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Nn(c,t,o,!0)),Nn(c,e,o)):c=e,s.set(e,c),c}function Nn(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Nn(t,s,n,!0),i&&i.forEach(e=>Nn(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Dn[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Dn={data:Rn,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:Mn,created:Mn,beforeMount:Mn,mounted:Mn,beforeUpdate:Mn,updated:Mn,beforeDestroy:Mn,beforeUnmount:Mn,destroyed:Mn,unmounted:Mn,activated:Mn,deactivated:Mn,errorCaptured:Mn,serverPrefetch:Mn,components:Fn,directives:Fn,watch:Vn,provide:Rn,inject:Ln};function Rn(t,e){return e?t?function(){return Object(r["h"])(Object(r["p"])(t)?t.call(this,this):t,Object(r["p"])(e)?e.call(this,this):e)}:e:t}function Ln(t,e){return Fn(Pn(t),Pn(e))}function Pn(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mn(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function Vn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=Mn(t[r],e[r]);return n}function Un(t,e,n,i=!1){const s={},o={};Object(r["g"])(o,Pr,1),t.propsDefaults=Object.create(null),qn(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:Ot(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Bn(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=jt(s),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;qn(t,e,s,o)&&(l=!0);for(const o in c)e&&(Object(r["k"])(e,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(e,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=$n(u,c,o,void 0,t,!0)):delete s[o]);if(o!==c)for(const t in o)e&&Object(r["k"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);s[e]=$n(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&j(t,"set","$attrs")}function qn(t,e,n,i){const[s,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["z"])(u))continue;const l=e[u];let h;s&&Object(r["k"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:Oe(t.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(o){const e=jt(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=$n(s,e,c,i[c],t,!Object(r["k"])(i,c))}}return c}function $n(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["p"])(t)){const{propsDefaults:r}=s;n in r?i=r[n]:(ii(s),i=r[n]=t.call(null,e),si())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Hn(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!Object(r["p"])(t)){const i=t=>{u=!0;const[n,i]=Hn(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);Gn(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(Gn(e)){const n=o[t],i=a[e]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const t=Wn(Boolean,i.type),n=Wn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["k"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function Gn(t){return"$"!==t[0]}function zn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function Kn(t,e){return zn(t)===zn(e)}function Wn(t,e){return Object(r["o"])(e)?e.findIndex(e=>Kn(e,t)):Object(r["p"])(e)&&Kn(e,t)?0:-1}const Qn=t=>"_"===t[0]||"$stable"===t,Xn=t=>Object(r["o"])(t)?t.map(Gr):[Gr(t)],Yn=(t,e,n)=>{const r=xe((...t)=>Xn(e(...t)),n);return r._c=!1,r},Jn=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Qn(s))continue;const n=t[s];if(Object(r["p"])(n))e[s]=Yn(s,n,i);else if(null!=n){0;const t=Xn(n);e[s]=()=>t}}},Zn=(t,e)=>{const n=Xn(e);t.slots.default=()=>n},tr=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=jt(e),Object(r["g"])(e,"_",n)):Jn(e,t.slots={})}else t.slots={},e&&Zn(t,e);Object(r["g"])(t.slots,Pr,1)},er=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(s,e),n||1!==t||delete s._):(o=!e.$stable,Jn(e,s)),a=e}else e&&(Zn(t,e),a={default:1});if(o)for(const r in s)Qn(r)||r in a||delete s[r]};function nr(t,e){const n=_e;if(null===n)return t;const i=n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=r["b"]]=e[o];Object(r["p"])(t)&&(t={mounted:t,updated:t}),t.deep&&ze(n),s.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function rr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(_(),Wt(c,n,8,[t.el,a,t,e]),A())}}function ir(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sr=0;function or(t,e){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const s=ir(),o=new Set;let a=!1;const c=s.app={_uid:sr++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Ei,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["p"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["p"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(r,o,u){if(!a){const l=Ur(n,i);return l.appContext=s,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,mi(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function ar(t,e,n,i,s=!1){if(Object(r["o"])(t))return void t.forEach((t,o)=>ar(t,e&&(Object(r["o"])(e)?e[o]:e),n,i,s));if(sn(i)&&!s)return;const o=4&i.shapeFlag?mi(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Mt(l)&&(l.value=null)),Object(r["p"])(u))Kt(u,c,12,[a,h]);else{const e=Object(r["D"])(u),i=Mt(u);if(e||i){const i=()=>{if(t.f){const n=e?h[u]:u.value;s?Object(r["o"])(n)&&Object(r["K"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):e?h[u]=[o]:(u.value=[o],t.k&&(h[t.k]=u.value))}else e?(h[u]=a,Object(r["k"])(f,u)&&(f[u]=a)):Mt(u)&&(u.value=a,t.k&&(h[t.k]=a))};a?(i.id=-1,ur(i,n)):i()}else 0}}function cr(){}const ur=Fe;function lr(t){return hr(t)}function hr(t,e){cr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:d,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Lr(t,e)&&(r=W(t),$(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Tr:v(t,e,n,r);break;case Sr:b(t,e,n,r);break;case Or:null==t&&w(e,n,r,o);break;case Er:D(t,e,n,r,i,s,o,a,c);break;default:1&h?O(t,e,n,r,i,s,o,a,c):6&h?R(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,X)}null!=l&&i&&ar(l,t&&t.ref,s,e||t,!e)},v=(t,e,n,r)=>{if(null==t)i(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=d(t),i(t,n,r),t=s;i(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=d(t),s(t),t=n;s(e)},O=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?C(e,n,r,i,s,o,a,c):x(t,e,i,s,o,a,c)},C=(t,e,n,s,c,u,l,f)=>{let d,p;const{type:m,props:y,shapeFlag:v,transition:b,patchFlag:w,dirs:E}=t;if(t.el&&void 0!==g&&-1===w)d=t.el=g(t.el);else{if(d=t.el=a(t.type,u,y&&y.is,y),8&v?h(d,t.children):16&v&&k(t.children,d,null,s,c,u&&"foreignObject"!==m,l,f),E&&rr(t,null,s,"created"),y){for(const e in y)"value"===e||Object(r["z"])(e)||o(d,e,null,y[e],u,t.children,s,c,K);"value"in y&&o(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&Qr(p,s,t)}I(d,t,t.scopeId,l,s)}E&&rr(t,null,s,"beforeMount");const T=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;T&&b.beforeEnter(d),i(d,e,n),((p=y&&y.onVnodeMounted)||T||E)&&ur(()=>{p&&Qr(p,s,t),T&&b.enter(d),E&&rr(t,null,s,"mounted")},c)},I=(t,e,n,r,i)=>{if(n&&p(t,n),r)for(let s=0;s<r.length;s++)p(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;I(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},k=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?zr(t[u]):Gr(t[u]);y(null,c,e,n,r,i,s,o,a)}},x=(t,e,n,i,s,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;n&&fr(n,!1),(m=g.onVnodeBeforeUpdate)&&Qr(m,n,e,t),d&&rr(e,t,n,"beforeUpdate"),n&&fr(n,!0);const y=s&&"foreignObject"!==e.type;if(f?j(t.dynamicChildren,f,u,n,i,y,a):c||V(t,e,u,null,n,i,y,a,!1),l>0){if(16&l)N(u,e,p,g,n,i,s);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,s),4&l&&o(u,"style",p.style,g.style,s),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,s,t.children,n,i,K)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||N(u,e,p,g,n,i,s);((m=g.onVnodeUpdated)||d)&&ur(()=>{m&&Qr(m,n,e,t),d&&rr(e,t,n,"updated")},i)},j=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Er||!Lr(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},N=(t,e,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,s,a,K)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||o(t,u,n[u],null,c,e.children,s,a,K);"value"in i&&o(t,"value",n.value,i.value)}},D=(t,e,n,r,s,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(i(h,n,r),i(f,n,r),k(e.children,n,f,s,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(j(t.dynamicChildren,p,n,s,o,a,u),(null!=e.key||s&&e===s.subTree)&&dr(t,e,!0)):V(t,e,n,f,s,o,a,u,l)},R=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):L(e,n,r,i,s,o,c):P(t,e,c)},L=(t,e,n,r,i,s,o)=>{const a=t.component=ei(t,r,i);if(on(t)&&(a.ctx.renderer=X),li(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=Ur(Sr);b(null,t,e,n)}}else M(a,t,e,n,i,s,o)},P=(t,e,n)=>{const r=e.component=t.component;if(Re(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,pe(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,i,s,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:u,vnode:l}=t,h=n;0,fr(t,!1),n?(n.el=l.el,F(t,n,a)):n=l,i&&Object(r["n"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Qr(e,u,n,l),fr(t,!0);const d=je(t);0;const p=t.subTree;t.subTree=d,y(p,d,f(p.el),W(p),t,s,o),n.el=d.el,null===h&&Pe(t,d.el),c&&ur(c,s),(e=n.props&&n.props.onVnodeUpdated)&&ur(()=>Qr(e,u,n,l),s)}else{let a;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=sn(e);if(fr(t,!1),l&&Object(r["n"])(l),!d&&(a=u&&u.onVnodeBeforeMount)&&Qr(a,f,e),fr(t,!0),c&&J){const n=()=>{t.subTree=je(t),J(c,t.subTree,t,s,null)};d?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=je(t);0,y(null,r,n,i,t,s,o),e.el=r.el}if(h&&ur(h,s),!d&&(a=u&&u.onVnodeMounted)){const t=e;ur(()=>Qr(a,f,t),s)}256&e.shapeFlag&&t.a&&ur(t.a,s),t.isMounted=!0,e=n=i=null}},u=t.effect=new E(c,()=>fe(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,fr(t,!0),l()},F=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,Bn(t,e.props,r,n),er(t,e.children,n),_(),ve(void 0,t.update),A()},V=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void B(u,f,n,r,i,s,o,a,c);if(256&d)return void U(u,f,n,r,i,s,o,a,c)}8&p?(16&l&&K(u,i,s),f!==u&&h(n,f)):16&l?16&p?B(u,f,n,r,i,s,o,a,c):K(u,i,s,!0):(8&l&&h(n,""),16&p&&k(f,n,r,i,s,o,a,c))},U=(t,e,n,i,s,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?zr(e[d]):Gr(e[d]);y(t[d],r,n,null,s,o,a,c,u)}l>h?K(t,s,o,!0,!1,f):k(e,n,i,s,o,a,c,u,f)},B=(t,e,n,i,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?zr(e[l]):Gr(e[l]);if(!Lr(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?zr(e[d]):Gr(e[d]);if(!Lr(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:i;while(l<=d)y(null,e[l]=u?zr(e[l]):Gr(e[l]),n,r,s,o,a,c,u),l++}}else if(l>d)while(l<=f)$(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?zr(e[l]):Gr(e[l]);null!=t.key&&m.set(t.key,l)}let v,b=0;const w=d-g+1;let E=!1,T=0;const S=new Array(w);for(l=0;l<w;l++)S[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){$(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===S[v-g]&&Lr(r,e[v])){i=v;break}void 0===i?$(r,s,o,!0):(S[i-g]=l+1,i>=T?T=i:E=!0,y(r,e[i],n,null,s,o,a,c,u),b++)}const O=E?pr(S):r["a"];for(v=O.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:i;0===S[l]?y(null,r,n,f,s,o,a,c,u):E&&(v<0||l!==O[v]?q(r,n,f,2):v--)}}},q=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void q(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,X);if(a===Er){i(o,e,n);for(let t=0;t<u.length;t++)q(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Or)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),ur(()=>c.enter(o),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,()=>{a(),s&&s()})};r?r(o,a,u):u()}else i(o,e,n)},$=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&ar(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!sn(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Qr(g,e,t),6&l)z(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&rr(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,X,r):u&&(s!==Er||h>0&&64&h)?K(u,e,n,!1,!0):(s===Er&&384&h||!i&&16&l)&&K(c,e,n),r&&H(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&ur(()=>{g&&Qr(g,e,t),d&&rr(t,null,e,"unmounted")},n)},H=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Er)return void G(n,r);if(e===Or)return void S(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},G=(t,e)=>{let n;while(t!==e)n=d(t),s(t),t=n;s(e)},z=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=t;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,$(a,t,e,n)),c&&ur(c,e),ur(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},K=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)$(t[o],e,n,r,i)},W=t=>6&t.shapeFlag?W(t.component.subTree):128&t.shapeFlag?t.suspense.next():d(t.anchor||t.el),Q=(t,e,n)=>{null==t?e._vnode&&$(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),be(),e._vnode=t},X={p:y,um:$,m:q,r:H,mt:L,mc:k,pc:V,pbc:j,n:W,o:t};let Y,J;return e&&([Y,J]=e(X)),{render:Q,hydrate:Y,createApp:or(Q,Y)}}function fr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dr(t,e,n=!1){const i=t.children,s=e.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=zr(s[r]),e.el=t.el),n||dr(t,e))}}function pr(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const gr=t=>t.__isTeleport;const mr="components";function yr(t,e){return br(mr,t,!0,e)||t}const vr=Symbol();function br(t,e,n=!0,i=!1){const s=_e||ni;if(s){const n=s.type;if(t===mr){const t=yi(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=wr(s[t]||n[t],e)||wr(s.appContext[t],e);return!o&&i?n:o}}function wr(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Er=Symbol(void 0),Tr=Symbol(void 0),Sr=Symbol(void 0),Or=Symbol(void 0),_r=[];let Cr=null;function Ar(t=!1){_r.push(Cr=t?null:[])}function Ir(){_r.pop(),Cr=_r[_r.length-1]||null}let kr=1;function xr(t){kr+=t}function jr(t){return t.dynamicChildren=kr>0?Cr||r["a"]:null,Ir(),kr>0&&Cr&&Cr.push(t),t}function Nr(t,e,n,r,i,s){return jr(Vr(t,e,n,r,i,s,!0))}function Dr(t,e,n,r,i){return jr(Ur(t,e,n,r,i,!0))}function Rr(t){return!!t&&!0===t.__v_isVNode}function Lr(t,e){return t.type===e.type&&t.key===e.key}const Pr="__vInternal",Mr=({key:t})=>null!=t?t:null,Fr=({ref:t,ref_key:e,ref_for:n})=>null!=t?Object(r["D"])(t)||Mt(t)||Object(r["p"])(t)?{i:_e,r:t,k:e,f:!!n}:t:null;function Vr(t,e=null,n=null,i=0,s=null,o=(t===Er?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mr(e),ref:e&&Fr(e),scopeId:Ce,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Kr(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),kr>0&&!a&&Cr&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Cr.push(u),u}const Ur=Br;function Br(t,e=null,n=null,i=0,s=null,o=!1){if(t&&t!==vr||(t=Sr),Rr(t)){const r=$r(t,e,!0);return n&&Kr(r,n),r}if(vi(t)&&(t=t.__vccOpts),e){e=qr(e);let{class:t,style:n}=e;t&&!Object(r["D"])(t)&&(e.class=Object(r["I"])(t)),Object(r["v"])(n)&&(xt(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["J"])(n))}const a=Object(r["D"])(t)?1:Me(t)?128:gr(t)?64:Object(r["v"])(t)?4:Object(r["p"])(t)?2:0;return Vr(t,e,n,i,s,a,o,!0)}function qr(t){return t?xt(t)||Pr in t?Object(r["h"])({},t):t:null}function $r(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=t,c=e?Wr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Mr(c),ref:e&&e.ref?n&&s?Object(r["o"])(s)?s.concat(Fr(e)):[s,Fr(e)]:Fr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Er?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$r(t.ssContent),ssFallback:t.ssFallback&&$r(t.ssFallback),el:t.el,anchor:t.anchor};return u}function Hr(t=" ",e=0){return Ur(Tr,null,t,e)}function Gr(t){return null==t||"boolean"===typeof t?Ur(Sr):Object(r["o"])(t)?Ur(Er,null,t.slice()):"object"===typeof t?zr(t):Ur(Tr,null,String(t))}function zr(t){return null===t.el||t.memo?t:$r(t)}function Kr(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),Kr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Pr in e?3===r&&_e&&(1===_e.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=_e}}else Object(r["p"])(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),64&i?(n=16,e=[Hr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["I"])([e.class,i.class]));else if("style"===t)e.style=Object(r["J"])([e.style,i.style]);else if(Object(r["w"])(t)){const n=e[t],s=i[t];!s||n===s||Object(r["o"])(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function Qr(t,e,n,r=null){Wt(t,e,7,[n,r])}const Xr=t=>t?oi(t)?mi(t)||t.proxy:Xr(t.parent):null,Yr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xr(t.parent),$root:t=>Xr(t.root),$emit:t=>t.emit,$options:t=>jn(t),$forceUpdate:t=>()=>fe(t.update),$nextTick:t=>le.bind(t.proxy),$watch:t=>He.bind(t)}),Jr={get({_:t},e){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=1,i[e];if(s!==r["b"]&&Object(r["k"])(s,e))return a[e]=2,s[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=3,o[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=4,n[e];Cn&&(a[e]=0)}}const h=Yr[e];let f,d;return h?("$attrs"===e&&I(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=4,n[e]):(d=u.config.globalProperties,Object(r["k"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;if(s!==r["b"]&&Object(r["k"])(s,e))s[e]=n;else if(i!==r["b"]&&Object(r["k"])(i,e))i[e]=n;else if(Object(r["k"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(Yr,a)||Object(r["k"])(s.config.globalProperties,a)}};const Zr=ir();let ti=0;function ei(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Zr,a={uid:ti++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hn(i,s),emitsOptions:Se(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Te.bind(null,a),t.ce&&t.ce(a),a}let ni=null;const ri=()=>ni||_e,ii=t=>{ni=t,t.scope.on()},si=()=>{ni&&ni.scope.off(),ni=null};function oi(t){return 4&t.vnode.shapeFlag}let ai,ci,ui=!1;function li(t,e=!1){ui=e;const{props:n,children:r}=t.vnode,i=oi(t);Un(t,n,i,e),tr(t,r);const s=i?hi(t,e):void 0;return ui=!1,s}function hi(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Nt(new Proxy(t.ctx,Jr));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?gi(t):null;ii(t),_();const s=Kt(i,t,0,[t.props,n]);if(A(),si(),Object(r["y"])(s)){if(s.then(si,si),e)return s.then(n=>{fi(t,n,e)}).catch(e=>{Qt(e,t,0)});t.asyncDep=s}else fi(t,s,e)}else di(t,e)}function fi(t,e,n){Object(r["p"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["v"])(e)&&(t.setupState=Ht(e)),di(t,n)}function di(t,e,n){const i=t.type;if(!t.render){if(!e&&ai&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=ai(e,c)}}t.render=i.render||r["d"],ci&&ci(t)}ii(t),_(),An(t),A(),si()}function pi(t){return new Proxy(t.attrs,{get(e,n){return I(t,"get","$attrs"),e[n]}})}function gi(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=pi(t))},slots:t.slots,emit:t.emit,expose:e}}function mi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ht(Nt(t.exposed)),{get(e,n){return n in e?e[n]:n in Yr?Yr[n](t):void 0}}))}function yi(t){return Object(r["p"])(t)&&t.displayName||t.name}function vi(t){return Object(r["p"])(t)&&"__vccOpts"in t}const bi=(t,e)=>zt(t,e,ui);function wi(t,e,n){const i=arguments.length;return 2===i?Object(r["v"])(e)&&!Object(r["o"])(e)?Rr(e)?Ur(t,null,[e]):Ur(t,e):Ur(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Rr(n)&&(n=[n]),Ur(t,e,n))}Symbol("");const Ei="3.2.29",Ti="http://www.w3.org/2000/svg",Si="undefined"!==typeof document?document:null,Oi=Si&&Si.createElement("template"),_i={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Si.createElementNS(Ti,t):Si.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>Si.createTextNode(t),createComment:t=>Si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{Oi.innerHTML=r?`<svg>${t}</svg>`:t;const i=Oi.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ci(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ai(t,e,n){const i=t.style,s=Object(r["D"])(n);if(n&&!s){for(const t in n)ki(i,t,n[t]);if(e&&!Object(r["D"])(e))for(const t in e)null==n[t]&&ki(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Ii=/\s*!important$/;function ki(t,e,n){if(Object(r["o"])(n))n.forEach(n=>ki(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=Ni(t,e);Ii.test(n)?t.setProperty(Object(r["l"])(i),n.replace(Ii,""),"important"):t[i]=n}}const xi=["Webkit","Moz","ms"],ji={};function Ni(t,e){const n=ji[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return ji[e]=i;i=Object(r["f"])(i);for(let r=0;r<xi.length;r++){const n=xi[r]+i;if(n in t)return ji[e]=n}return e}const Di="http://www.w3.org/1999/xlink";function Ri(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Di,e.slice(6,e.length)):t.setAttributeNS(Di,e,n);else{const i=Object(r["C"])(e);null==n||i&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Li(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["m"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let Pi=Date.now,Mi=!1;if("undefined"!==typeof window){Pi()>document.createEvent("Event").timeStamp&&(Pi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Mi=!!(t&&Number(t[1])<=53)}let Fi=0;const Vi=Promise.resolve(),Ui=()=>{Fi=0},Bi=()=>Fi||(Vi.then(Ui),Fi=Pi());function qi(t,e,n,r){t.addEventListener(e,n,r)}function $i(t,e,n,r){t.removeEventListener(e,n,r)}function Hi(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=zi(e);if(r){const o=s[e]=Ki(r,i);qi(t,n,o,a)}else o&&($i(t,n,o,a),s[e]=void 0)}}const Gi=/(?:Once|Passive|Capture)$/;function zi(t){let e;if(Gi.test(t)){let n;e={};while(n=t.match(Gi))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function Ki(t,e){const n=t=>{const r=t.timeStamp||Pi();(Mi||r>=n.attached-1)&&Wt(Wi(t,n.value),e,5,[t])};return n.value=t,n.attached=Bi(),n}function Wi(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const Qi=/^on[a-z]/,Xi=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?Ci(t,i,s):"style"===e?Ai(t,n,i):Object(r["w"])(e)?Object(r["u"])(e)||Hi(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Yi(t,e,i,s))?Li(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),Ri(t,e,i,s))};function Yi(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&Qi.test(e)&&Object(r["p"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Qi.test(e)||!Object(r["D"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Ji="transition",Zi="animation",ts=(t,{slots:e})=>wi(Xe,is(t),e);ts.displayName="Transition";const es={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ns=(ts.props=Object(r["h"])({},Xe.props,es),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),rs=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function is(t){const e={};for(const r in t)r in es||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=ss(s),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:E,onLeaveCancelled:T,onBeforeAppear:S=v,onAppear:O=b,onAppearCancelled:_=w}=e,C=(t,e,n)=>{cs(t,e?h:c),cs(t,e?l:a),n&&n()},A=(t,e)=>{cs(t,p),cs(t,d),e&&e()},I=t=>(e,n)=>{const r=t?O:b,s=()=>C(e,t,n);ns(r,[e,s]),us(()=>{cs(e,t?u:o),as(e,t?h:c),rs(r)||hs(e,i,m,s)})};return Object(r["h"])(e,{onBeforeEnter(t){ns(v,[t]),as(t,o),as(t,a)},onBeforeAppear(t){ns(S,[t]),as(t,u),as(t,l)},onEnter:I(!1),onAppear:I(!0),onLeave(t,e){const n=()=>A(t,e);as(t,f),gs(),as(t,d),us(()=>{cs(t,f),as(t,p),rs(E)||hs(t,i,y,n)}),ns(E,[t,n])},onEnterCancelled(t){C(t,!1),ns(w,[t])},onAppearCancelled(t){C(t,!0),ns(_,[t])},onLeaveCancelled(t){A(t),ns(T,[t])}})}function ss(t){if(null==t)return null;if(Object(r["v"])(t))return[os(t.enter),os(t.leave)];{const e=os(t);return[e,e]}}function os(t){const e=Object(r["N"])(t);return e}function as(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function cs(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function us(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ls=0;function hs(t,e,n,r){const i=t._endId=++ls,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=fs(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function fs(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(Ji+"Delay"),s=r(Ji+"Duration"),o=ds(i,s),a=r(Zi+"Delay"),c=r(Zi+"Duration"),u=ds(a,c);let l=null,h=0,f=0;e===Ji?o>0&&(l=Ji,h=o,f=s.length):e===Zi?u>0&&(l=Zi,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?Ji:Zi:null,f=l?l===Ji?s.length:c.length:0);const d=l===Ji&&/\b(transform|all)(,|$)/.test(n[Ji+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function ds(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>ps(e)+ps(t[n])))}function ps(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function gs(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ms=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["o"])(e)?t=>Object(r["n"])(e,t):e};function ys(t){t.target.composing=!0}function vs(t){const e=t.target;e.composing&&(e.composing=!1,bs(e,"input"))}function bs(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ws={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=ms(s);const o=i||s.props&&"number"===s.props.type;qi(t,e?"change":"input",e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():o&&(i=Object(r["N"])(i)),t._assign(i)}),n&&qi(t,"change",()=>{t.value=t.value.trim()}),e||(qi(t,"compositionstart",ys),qi(t,"compositionend",vs),qi(t,"change",vs))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=ms(o),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&Object(r["N"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const Es=Object(r["h"])({patchProp:Xi},_i);let Ts;function Ss(){return Ts||(Ts=lr(Es))}const Os=(...t)=>{const e=Ss().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=_s(t);if(!i)return;const s=e._component;Object(r["p"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function _s(t){if(Object(r["D"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),s=r.Object;t.exports=function(t){return s(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var t=o.length;while(t--)delete w[d][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:s.f(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),f=n("9112"),d=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),y=o.PROPER,v=o.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,E=p("iterator"),T="keys",S="values",O="entries",_=function(){return this};t.exports=function(t,e,n,o,p,m,C){c(n,e,o);var A,I,k,x=function(t){if(t===p&&L)return L;if(!w&&t in D)return D[t];switch(t){case T:return function(){return new n(this,t)};case S:return function(){return new n(this,t)};case O:return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",N=!1,D=t.prototype,R=D[E]||D["@@iterator"]||p&&D[p],L=!w&&R||x(p),P="Array"==e&&D.entries||R;if(P&&(A=u(P.call(new t)),A!==Object.prototype&&A.next&&(s||u(A)===b||(l?l(A,b):a(A[E])||d(A,E,_)),h(A,j,!0,!0),s&&(g[j]=_))),y&&p==S&&R&&R.name!==S&&(!s&&v?f(D,"name",S):(N=!0,L=function(){return i(R,this)})),p)if(I={values:x(S),keys:m?L:x(T),entries:x(O)},C)for(k in I)(w||N||!(k in D))&&d(D,k,I[k]);else r({target:e,proto:!0,forced:w||N},I);return s&&!C||D[E]===L||d(D,E,L,{name:p}),g[e]=L,I}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ir})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return kr})),n.d(e,"d",(function(){return Nr})),n.d(e,"e",(function(){return jr})),n.d(e,"f",(function(){return Dr})),n.d(e,"g",(function(){return Rr})),n.d(e,"h",(function(){return Cr})),n.d(e,"i",(function(){return Ar}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,E={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete E[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},S=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function O(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function _(t){return Array.prototype.concat.apply([],arguments)}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var I,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function j(t,e){return t<e?-1:t>e?1:0}t:{var N=a.navigator;if(N){var D=N.userAgent;if(D){I=D;break t}}I=""}function R(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<P.length;e++)n=P[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function V(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var U,B=x(I,"Opera"),q=x(I,"Trident")||x(I,"MSIE"),$=x(I,"Edge"),H=$||q,G=x(I,"Gecko")&&!(x(I.toLowerCase(),"webkit")&&!x(I,"Edge"))&&!(x(I,"Trident")||x(I,"MSIE"))&&!x(I,"Edge"),z=x(I.toLowerCase(),"webkit")&&!x(I,"Edge");function K(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=I;return G?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),q){var X=K();if(null!=X&&X>parseFloat(W)){U=String(X);break t}}U=W}var Y,J={};function Z(){return V((function(){let t=0;const e=k(String(U)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=j(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||j(0==i[2].length,0==s[2].length)||j(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=K();Y=tt||(parseInt(U,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{F(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=T(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ft(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=_t(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=St(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);return null}return n=_t(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=_t(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ft(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=St(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=St(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function St(t){return t=t[dt],t instanceof lt?t:null}var Ot="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[Ot]||(t[Ot]=function(e){return t.handleEvent(e)}),t[Ot])}function Ct(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function At(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=It(o,r,!0,e)&&i}if(o=e.g=t,i=It(o,r,!0,e)&&i,i=It(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=It(o,r,!1,e)&&i}function It(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(Ct,b),Ct.prototype[ot]=!0,Ct.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},Ct.prototype.M=function(){if(Ct.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var kt=a.JSON.stringify;function xt(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jt{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Rt,t=>t.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function Pt(t,e){Nt||Mt(),Ft||(Nt(),Ft=!0),Vt.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);Nt=function(){t.then(Ut)}}var Ft=!1,Vt=new jt;function Ut(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){Ct.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ht(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,Ht(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Bt,Ct),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),At(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class Gt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){b.call(this),this.h=t,this.g={}}v(zt,b);var Kt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var s=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){R(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return kt(n)}catch(a){return e}}zt.prototype.M=function(){zt.Z.M.call(this),Qt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new Ct}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();At(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();At(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(se,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new zt(this),this.P=Se,t=H?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(be,rt),v(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Se=45e3,Oe={},_e={};function Ce(t,e,n){t.K=1,t.v=Ye(Ge(e)),t.s=n,t.U=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),je(t),t.A=Ge(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Te,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ke(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==_e){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Oe){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Pe(t,r)}Ie(t)&&r!=_e&&r!=Oe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),Re(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_e:(n=Number(e.substring(n,r)),isNaN(n)?Oe:(r+=1,r+n>e.length?_e:(e=e.substr(r,n),t.C=r+n,e)))}function je(t){t.Y=Date.now()+t.P,Ne(t,t.P)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function De(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Re(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&dr(n),!A(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Tn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){Sn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(De(a),je(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)S(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ve(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ve)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ee.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||H||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=f?3:2),De(this);var n=this.g.ba();this.N=n;e:if(Ie(this)){var r=Qn(this.g);t="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),Re(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Le(this),Re(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.U?(ke(this,h,o),H&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Pe(this,o)),4==h&&Le(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,je(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),Re(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(De(this),ke(this,t,e),this.i&&4!=t&&je(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,Re(this)):Ne(this,this.Y-t)},r=Ve.prototype,r.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ue(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function He(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof He){this.g=void 0!==e?e:t.g,ze(this,t.j),this.s=t.s,Ke(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ve(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,ze(this,n[1]||"",!0),this.s=tn(n[2]||""),Ke(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ge(t){return new He(t)}function ze(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ke(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof He?Ge(t):new He(t,void 0)}function Ze(t,e,n,r){var i=new He(null,void 0);return t&&ze(i,t),e&&Ke(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}He.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ve,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function fn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function dn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),C(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){S(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=_(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function Sn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function On(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function _n(){}function Cn(){this.g=new _n}function An(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=kt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function In(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=y(kn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(kn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(kn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(kn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function kn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function jn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=On(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},_n.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},_n.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(xn,de),xn.prototype.g=function(){return new jn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),v(jn,Ct);var Nn=0;function Dn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Rn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=jn.prototype,r.open=function(t,e){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rn(this)),this.readyState=Nn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rn(this):Ln(this),3==this.readyState&&Dn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Rn(this))},r.Ta=function(t){this.g&&(this.response=t,Rn(this))},r.ha=function(){this.g&&Rn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Pn=a.JSON.parse;function Mn(t){Ct.call(this),this.headers=new Ve,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(Mn,Ct);var Fn="",Vn=/^https?$/i,Un=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hn(t),zn(t)}function Hn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))$t(t.Fa,0,t);else if(At(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Hn(t)}}finally{zn(t)}}}function zn(t,e){if(t.g){Kn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||At(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Kn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return R(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new Cn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ge(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ye(Ge(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),je(e)}yr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function sr(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=Ge(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Yn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),Ce(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{An(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(Ge(e)),n.s=null,n.U=!0,Ae(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),hr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,Sn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),At(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new He("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||ze(n,"https"),Ye(n)),In(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==On(t.i).length&&0==t.l.length||(t.i.i.length=0,C(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&Ke(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&R(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new xn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function wr(){}function Er(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Tr(t,e){Ct.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _r(this)}function Sr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Or(){be.call(this),this.status=1}function _r(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void $n(this,s)}t=n||"";const i=new Ve(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=O(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=T(Un,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$n(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),zn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ee(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=Ge(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Yn(n,this.o,s),Tn(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Ce(i,n,null)):Ce(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Er.prototype.g=function(t,e){return new Tr(t,e)},v(Tr,Ct),Tr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),ir(t)},Tr.prototype.close=function(){tr(this.g)},Tr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=kt(t),rr(this.g,e)):rr(this.g,t)},Tr.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Tr.Z.M.call(this)},v(Sr,ve),v(Or,be),v(_r,wr),_r.prototype.xa=function(){At(this.g,"a")},_r.prototype.wa=function(t){At(this.g,new Sr(t))},_r.prototype.va=function(t){At(this.g,new Or(t))},_r.prototype.ua=function(){At(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,Tr.prototype.send=Tr.prototype.u,Tr.prototype.open=Tr.prototype.m,Tr.prototype.close=Tr.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Cr=s.createWebChannelTransport=function(){return new Er},Ar=s.getStatEventTarget=function(){return ie()},Ir=s.ErrorCode=he,kr=s.EventType=fe,xr=s.Event=ne,jr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=s.FetchXmlHttpFactory=xn,Dr=s.WebChannel=ge,Rr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(s(n))return o(i(n,t));throw u(a(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";e.f=i?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:s(+!u,n)}),o(t,l,!1,!0),a[l]=c,t}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return tt})),n.d(e,"g",(function(){return it})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return at})),n.d(e,"j",(function(){return nt})),n.d(e,"k",(function(){return D})),n.d(e,"l",(function(){return Z})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return rt})),n.d(e,"o",(function(){return R})),n.d(e,"p",(function(){return F})),n.d(e,"q",(function(){return s})),n.d(e,"r",(function(){return m})),n.d(e,"s",(function(){return K})),n.d(e,"t",(function(){return L})),n.d(e,"u",(function(){return k})),n.d(e,"v",(function(){return B})),n.d(e,"w",(function(){return I})),n.d(e,"x",(function(){return z})),n.d(e,"y",(function(){return q})),n.d(e,"z",(function(){return W})),n.d(e,"A",(function(){return y})),n.d(e,"B",(function(){return P})),n.d(e,"C",(function(){return a})),n.d(e,"D",(function(){return V})),n.d(e,"E",(function(){return U})),n.d(e,"F",(function(){return b})),n.d(e,"G",(function(){return w})),n.d(e,"H",(function(){return r})),n.d(e,"I",(function(){return d})),n.d(e,"J",(function(){return u})),n.d(e,"K",(function(){return j})),n.d(e,"L",(function(){return E})),n.d(e,"M",(function(){return et})),n.d(e,"N",(function(){return st})),n.d(e,"O",(function(){return G}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=V(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return V(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(V(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),y=r(g);function v(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=M(t),r=M(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=R(t),r=R(e),n||r)return!(!n||!r)&&v(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const E=t=>null==t?"":R(t)||B(t)&&(t.toString===$||!F(t.toString))?JSON.stringify(t,T,2):String(t),T=(t,e)=>e&&e.__v_isRef?T(t,e.value):L(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:P(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||R(e)||z(e)?e:String(e),S={},O=[],_=()=>{},C=()=>!1,A=/^on[^a-z]/,I=t=>A.test(t),k=t=>t.startsWith("onUpdate:"),x=Object.assign,j=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},N=Object.prototype.hasOwnProperty,D=(t,e)=>N.call(t,e),R=Array.isArray,L=t=>"[object Map]"===H(t),P=t=>"[object Set]"===H(t),M=t=>t instanceof Date,F=t=>"function"===typeof t,V=t=>"string"===typeof t,U=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,q=t=>B(t)&&F(t.then)&&F(t.catch),$=Object.prototype.toString,H=t=>$.call(t),G=t=>H(t).slice(8,-1),z=t=>"[object Object]"===H(t),K=t=>V(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},X=/-(\w)/g,Y=Q(t=>t.replace(X,(t,e)=>e?e.toUpperCase():"")),J=/\B([A-Z])/g,Z=Q(t=>t.replace(J,"-$1").toLowerCase()),tt=Q(t=>t.charAt(0).toUpperCase()+t.slice(1)),et=Q(t=>t?"on"+tt(t):""),nt=(t,e)=>!Object.is(t,e),rt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ot;const at=()=>ot||(ot="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),f=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var d=a("Promise").prototype["finally"];s.prototype["finally"]!==d&&h(s.prototype,"finally",d,{unsafe:!0})}},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),f=n("c430"),d=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var t={};return r[d].call(t)!==t}));g?r={}:f&&(r=c(r)),a(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(t,e,n){var r=n("83ab"),i=n("d039");t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),f=n("0366"),d=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),y=n("a4b4"),v=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,E=h.process,T=h.Promise,S=d(h,"queueMicrotask"),O=S&&S.value;O||(r=function(){var t,e;v&&(t=E.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},g||v||y||!b||!w?!m&&T&&T.resolve?(u=T.resolve(void 0),u.constructor=T,l=f(u.then,u),o=function(){l(r)}):v?o=function(){E.nextTick(r)}:(p=f(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=O||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c65b:function(t,e,n){var r=n("40d5"),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),s=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,f=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(r){t[n]=o[n]}}};for(var d in i)f(r[d]&&r[d].prototype,d);f(s,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",f=o.set,d=o.getterFor(h);t.exports=c(Array,"Array",(function(t,e){f(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=d(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e,n){var r=n("40d5"),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),f=n("fea9"),d=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),y=n("2626"),v=n("59ed"),b=n("1626"),w=n("861d"),E=n("19aa"),T=n("8925"),S=n("2266"),O=n("1c7e"),_=n("4840"),C=n("2cf4").set,A=n("b575"),I=n("cdf9"),k=n("44de"),x=n("f069"),j=n("e667"),N=n("01b4"),D=n("69f3"),R=n("94ca"),L=n("b622"),P=n("6069"),M=n("605d"),F=n("2d00"),V=L("species"),U="Promise",B=D.getterFor(U),q=D.set,$=D.getterFor(U),H=f&&f.prototype,G=f,z=H,K=u.TypeError,W=u.document,Q=u.process,X=x.f,Y=X,J=!!(W&&W.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,rt=1,it=2,st=1,ot=2,at=!1,ct=R(U,(function(){var t=T(G),e=t!==String(G);if(!e&&66===F)return!0;if(c&&!z["finally"])return!0;if(F>=51&&/native code/.test(t))return!1;var n=new G((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[V]=r,at=n.then((function(){}))instanceof r,!at||!e&&P&&!Z})),ut=ct||!O((function(t){G.all(t)["catch"]((function(){}))})),lt=function(t){var e;return!(!w(t)||!b(e=t.then))&&e},ht=function(t,e){var n,r,i,s=e.value,o=e.state==rt,a=o?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(o||(e.rejection===ot&&mt(e),e.rejection=st),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===t.promise?u(K("Promise-chain cycle")):(r=lt(n))?h(r,n,c,u):c(n)):u(s)}catch(f){l&&!i&&l.exit(),u(f)}},ft=function(t,e){t.notified||(t.notified=!0,A((function(){var n,r=t.reactions;while(n=r.get())ht(n,t);t.notified=!1,e&&!t.rejection&&pt(t)})))},dt=function(t,e,n){var r,i;J?(r=W.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Z&&(i=u["on"+t])?i(r):t===tt&&k("Unhandled promise rejection",n)},pt=function(t){h(C,u,(function(){var e,n=t.facade,r=t.value,i=gt(t);if(i&&(e=j((function(){M?Q.emit("unhandledRejection",r,n):dt(tt,n,r)})),t.rejection=M||gt(t)?ot:st,e.error))throw e.value}))},gt=function(t){return t.rejection!==st&&!t.parent},mt=function(t){h(C,u,(function(){var e=t.facade;M?Q.emit("rejectionHandled",e):dt(et,e,t.value)}))},yt=function(t,e,n){return function(r){t(e,r,n)}},vt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=it,ft(t,!0))},bt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw K("Promise can't be resolved itself");var r=lt(e);r?A((function(){var n={done:!1};try{h(r,e,yt(bt,n,t),yt(vt,n,t))}catch(i){vt(n,i,t)}})):(t.value=e,t.state=rt,ft(t,!1))}catch(i){vt({done:!1},i,t)}}};if(ct&&(G=function(t){E(this,z),v(t),h(r,this);var e=B(this);try{t(yt(bt,e),yt(vt,e))}catch(n){vt(e,n)}},z=G.prototype,r=function(t){q(this,{type:U,done:!1,notified:!1,parent:!1,reactions:new N,rejection:!1,state:nt,value:void 0})},r.prototype=p(z,{then:function(t,e){var n=$(this),r=X(_(this,G));return n.parent=!0,r.ok=!b(t)||t,r.fail=b(e)&&e,r.domain=M?Q.domain:void 0,n.state==nt?n.reactions.add(r):A((function(){ht(r,n)})),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=B(t);this.promise=t,this.resolve=yt(bt,e),this.reject=yt(vt,e)},x.f=X=function(t){return t===G||t===s?new i(t):Y(t)},!c&&b(f)&&H!==Object.prototype)){o=H.then,at||(d(H,"then",(function(t,e){var n=this;return new G((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0}),d(H,"catch",z["catch"],{unsafe:!0}));try{delete H.constructor}catch(wt){}g&&g(H,z)}a({global:!0,wrap:!0,forced:ct},{Promise:G}),m(G,U,!1,!0),y(U),s=l(U),a({target:U,stat:!0,forced:ct},{reject:function(t){var e=X(this);return h(e.reject,void 0,t),e.promise}}),a({target:U,stat:!0,forced:c||ct},{resolve:function(t){return I(c&&this===s?G:this,t)}}),a({target:U,stat:!0,forced:ut},{all:function(t){var e=this,n=X(e),r=n.resolve,i=n.reject,s=j((function(){var n=v(e.resolve),s=[],o=0,a=1;S(t,(function(t){var c=o++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=X(e),r=n.reject,i=j((function(){var i=v(e.resolve);S(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.a5b37782.js.map