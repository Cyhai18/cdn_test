"use strict";(self.webpackChunknocode=self.webpackChunknocode||[]).push([[9227],{48764:function(yr,B,k){var I=k(79742),m=k(80645),L=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;B.Buffer=u,B.SlowBuffer=O,B.INSPECT_MAX_BYTES=50;var F=2147483647;B.kMaxLength=F,u.TYPED_ARRAY_SUPPORT=V(),!u.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function V(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),t.foo()===42}catch(i){return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function x(t){if(t>F)throw new RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,u.prototype),r}function u(t,r,i){if(typeof t=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return g(t)}return D(t,r,i)}u.poolSize=8192;function D(t,r,i){if(typeof t=="string")return Z(t,r);if(ArrayBuffer.isView(t))return $(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(s(t,ArrayBuffer)||t&&s(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer!="undefined"&&(s(t,SharedArrayBuffer)||t&&s(t.buffer,SharedArrayBuffer)))return S(t,r,i);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return u.from(n,r,i);var e=q(t);if(e)return e;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return u.from(t[Symbol.toPrimitive]("string"),r,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}u.from=function(t,r,i){return D(t,r,i)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function b(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function K(t,r,i){return b(t),t<=0?x(t):r!==void 0?typeof i=="string"?x(t).fill(r,i):x(t).fill(r):x(t)}u.alloc=function(t,r,i){return K(t,r,i)};function g(t){return b(t),x(t<0?0:v(t)|0)}u.allocUnsafe=function(t){return g(t)},u.allocUnsafeSlow=function(t){return g(t)};function Z(t,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var i=M(t,r)|0,n=x(i),e=n.write(t,r);return e!==i&&(n=n.slice(0,e)),n}function T(t){for(var r=t.length<0?0:v(t.length)|0,i=x(r),n=0;n<r;n+=1)i[n]=t[n]&255;return i}function $(t){if(s(t,Uint8Array)){var r=new Uint8Array(t);return S(r.buffer,r.byteOffset,r.byteLength)}return T(t)}function S(t,r,i){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(i||0))throw new RangeError('"length" is outside of buffer bounds');var n;return r===void 0&&i===void 0?n=new Uint8Array(t):i===void 0?n=new Uint8Array(t,r):n=new Uint8Array(t,r,i),Object.setPrototypeOf(n,u.prototype),n}function q(t){if(u.isBuffer(t)){var r=v(t.length)|0,i=x(r);return i.length===0||t.copy(i,0,0,r),i}if(t.length!==void 0)return typeof t.length!="number"||C(t.length)?x(0):T(t);if(t.type==="Buffer"&&Array.isArray(t.data))return T(t.data)}function v(t){if(t>=F)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+F.toString(16)+" bytes");return t|0}function O(t){return+t!=t&&(t=0),u.alloc(+t)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,i){if(s(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),s(i,Uint8Array)&&(i=u.from(i,i.offset,i.byteLength)),!u.isBuffer(r)||!u.isBuffer(i))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===i)return 0;for(var n=r.length,e=i.length,o=0,h=Math.min(n,e);o<h;++o)if(r[o]!==i[o]){n=r[o],e=i[o];break}return n<e?-1:e<n?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,i){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);var n;if(i===void 0)for(i=0,n=0;n<r.length;++n)i+=r[n].length;var e=u.allocUnsafe(i),o=0;for(n=0;n<r.length;++n){var h=r[n];if(s(h,Uint8Array))o+h.length>e.length?u.from(h).copy(e,o):Uint8Array.prototype.set.call(e,h,o);else if(u.isBuffer(h))h.copy(e,o);else throw new TypeError('"list" argument must be an Array of Buffers');o+=h.length}return e};function M(t,r){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||s(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var i=t.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&i===0)return 0;for(var e=!1;;)switch(r){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return R(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return z(t).length;default:if(e)return n?-1:R(t).length;r=(""+r).toLowerCase(),e=!0}}u.byteLength=M;function Q(t,r,i){var n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,r>>>=0,i<=r))return"";for(t||(t="utf8");;)switch(t){case"hex":return hr(this,r,i);case"utf8":case"utf-8":return N(this,r,i);case"ascii":return ur(this,r,i);case"latin1":case"binary":return or(this,r,i);case"base64":return nr(this,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fr(this,r,i);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}u.prototype._isBuffer=!0;function E(t,r,i){var n=t[r];t[r]=t[i],t[i]=n}u.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var i=0;i<r;i+=2)E(this,i,i+1);return this},u.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var i=0;i<r;i+=4)E(this,i,i+3),E(this,i+1,i+2);return this},u.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var i=0;i<r;i+=8)E(this,i,i+7),E(this,i+1,i+6),E(this,i+2,i+5),E(this,i+3,i+4);return this},u.prototype.toString=function(){var r=this.length;return r===0?"":arguments.length===0?N(this,0,r):Q.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){var r="",i=B.INSPECT_MAX_BYTES;return r=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(r+=" ... "),"<Buffer "+r+">"},L&&(u.prototype[L]=u.prototype.inspect),u.prototype.compare=function(r,i,n,e,o){if(s(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(i===void 0&&(i=0),n===void 0&&(n=r?r.length:0),e===void 0&&(e=0),o===void 0&&(o=this.length),i<0||n>r.length||e<0||o>this.length)throw new RangeError("out of range index");if(e>=o&&i>=n)return 0;if(e>=o)return-1;if(i>=n)return 1;if(i>>>=0,n>>>=0,e>>>=0,o>>>=0,this===r)return 0;for(var h=o-e,f=n-i,p=Math.min(h,f),a=this.slice(e,o),w=r.slice(i,n),c=0;c<p;++c)if(a[c]!==w[c]){h=a[c],f=w[c];break}return h<f?-1:f<h?1:0};function _(t,r,i,n,e){if(t.length===0)return-1;if(typeof i=="string"?(n=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,C(i)&&(i=e?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(e)return-1;i=t.length-1}else if(i<0)if(e)i=0;else return-1;if(typeof r=="string"&&(r=u.from(r,n)),u.isBuffer(r))return r.length===0?-1:d(t,r,i,n,e);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(t,r,i):Uint8Array.prototype.lastIndexOf.call(t,r,i):d(t,[r],i,n,e);throw new TypeError("val must be string, number or Buffer")}function d(t,r,i,n,e){var o=1,h=t.length,f=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(t.length<2||r.length<2)return-1;o=2,h/=2,f/=2,i/=2}function p(H,J){return o===1?H[J]:H.readUInt16BE(J*o)}var a;if(e){var w=-1;for(a=i;a<h;a++)if(p(t,a)===p(r,w===-1?0:a-w)){if(w===-1&&(w=a),a-w+1===f)return w*o}else w!==-1&&(a-=a-w),w=-1}else for(i+f>h&&(i=h-f),a=i;a>=0;a--){for(var c=!0,A=0;A<f;A++)if(p(t,a+A)!==p(r,A)){c=!1;break}if(c)return a}return-1}u.prototype.includes=function(r,i,n){return this.indexOf(r,i,n)!==-1},u.prototype.indexOf=function(r,i,n){return _(this,r,i,n,!0)},u.prototype.lastIndexOf=function(r,i,n){return _(this,r,i,n,!1)};function P(t,r,i,n){i=Number(i)||0;var e=t.length-i;n?(n=Number(n),n>e&&(n=e)):n=e;var o=r.length;n>o/2&&(n=o/2);for(var h=0;h<n;++h){var f=parseInt(r.substr(h*2,2),16);if(C(f))return h;t[i+h]=f}return h}function j(t,r,i,n){return U(R(r,t.length-i),t,i,n)}function rr(t,r,i,n){return U(cr(r),t,i,n)}function ir(t,r,i,n){return U(z(r),t,i,n)}function tr(t,r,i,n){return U(lr(r,t.length-i),t,i,n)}u.prototype.write=function(r,i,n,e){if(i===void 0)e="utf8",n=this.length,i=0;else if(n===void 0&&typeof i=="string")e=i,n=this.length,i=0;else if(isFinite(i))i=i>>>0,isFinite(n)?(n=n>>>0,e===void 0&&(e="utf8")):(e=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o=this.length-i;if((n===void 0||n>o)&&(n=o),r.length>0&&(n<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var h=!1;;)switch(e){case"hex":return P(this,r,i,n);case"utf8":case"utf-8":return j(this,r,i,n);case"ascii":case"latin1":case"binary":return rr(this,r,i,n);case"base64":return ir(this,r,i,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tr(this,r,i,n);default:if(h)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),h=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function nr(t,r,i){return r===0&&i===t.length?I.fromByteArray(t):I.fromByteArray(t.slice(r,i))}function N(t,r,i){i=Math.min(t.length,i);for(var n=[],e=r;e<i;){var o=t[e],h=null,f=o>239?4:o>223?3:o>191?2:1;if(e+f<=i){var p,a,w,c;switch(f){case 1:o<128&&(h=o);break;case 2:p=t[e+1],(p&192)===128&&(c=(o&31)<<6|p&63,c>127&&(h=c));break;case 3:p=t[e+1],a=t[e+2],(p&192)===128&&(a&192)===128&&(c=(o&15)<<12|(p&63)<<6|a&63,c>2047&&(c<55296||c>57343)&&(h=c));break;case 4:p=t[e+1],a=t[e+2],w=t[e+3],(p&192)===128&&(a&192)===128&&(w&192)===128&&(c=(o&15)<<18|(p&63)<<12|(a&63)<<6|w&63,c>65535&&c<1114112&&(h=c))}}h===null?(h=65533,f=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|h&1023),n.push(h),e+=f}return er(n)}var W=4096;function er(t){var r=t.length;if(r<=W)return String.fromCharCode.apply(String,t);for(var i="",n=0;n<r;)i+=String.fromCharCode.apply(String,t.slice(n,n+=W));return i}function ur(t,r,i){var n="";i=Math.min(t.length,i);for(var e=r;e<i;++e)n+=String.fromCharCode(t[e]&127);return n}function or(t,r,i){var n="";i=Math.min(t.length,i);for(var e=r;e<i;++e)n+=String.fromCharCode(t[e]);return n}function hr(t,r,i){var n=t.length;(!r||r<0)&&(r=0),(!i||i<0||i>n)&&(i=n);for(var e="",o=r;o<i;++o)e+=wr[t[o]];return e}function fr(t,r,i){for(var n=t.slice(r,i),e="",o=0;o<n.length-1;o+=2)e+=String.fromCharCode(n[o]+n[o+1]*256);return e}u.prototype.slice=function(r,i){var n=this.length;r=~~r,i=i===void 0?n:~~i,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),i<0?(i+=n,i<0&&(i=0)):i>n&&(i=n),i<r&&(i=r);var e=this.subarray(r,i);return Object.setPrototypeOf(e,u.prototype),e};function l(t,r,i){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>i)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,i,n){r=r>>>0,i=i>>>0,n||l(r,i,this.length);for(var e=this[r],o=1,h=0;++h<i&&(o*=256);)e+=this[r+h]*o;return e},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,i,n){r=r>>>0,i=i>>>0,n||l(r,i,this.length);for(var e=this[r+--i],o=1;i>0&&(o*=256);)e+=this[r+--i]*o;return e},u.prototype.readUint8=u.prototype.readUInt8=function(r,i){return r=r>>>0,i||l(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,i){return r=r>>>0,i||l(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,i){return r=r>>>0,i||l(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,i){return r=r>>>0,i||l(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,i){return r=r>>>0,i||l(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readIntLE=function(r,i,n){r=r>>>0,i=i>>>0,n||l(r,i,this.length);for(var e=this[r],o=1,h=0;++h<i&&(o*=256);)e+=this[r+h]*o;return o*=128,e>=o&&(e-=Math.pow(2,8*i)),e},u.prototype.readIntBE=function(r,i,n){r=r>>>0,i=i>>>0,n||l(r,i,this.length);for(var e=i,o=1,h=this[r+--e];e>0&&(o*=256);)h+=this[r+--e]*o;return o*=128,h>=o&&(h-=Math.pow(2,8*i)),h},u.prototype.readInt8=function(r,i){return r=r>>>0,i||l(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,i){r=r>>>0,i||l(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n},u.prototype.readInt16BE=function(r,i){r=r>>>0,i||l(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n},u.prototype.readInt32LE=function(r,i){return r=r>>>0,i||l(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,i){return r=r>>>0,i||l(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readFloatLE=function(r,i){return r=r>>>0,i||l(r,4,this.length),m.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,i){return r=r>>>0,i||l(r,4,this.length),m.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,i){return r=r>>>0,i||l(r,8,this.length),m.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,i){return r=r>>>0,i||l(r,8,this.length),m.read(this,r,!1,52,8)};function y(t,r,i,n,e,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<o)throw new RangeError('"value" argument is out of bounds');if(i+n>t.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,i,n,e){if(r=+r,i=i>>>0,n=n>>>0,!e){var o=Math.pow(2,8*n)-1;y(this,r,i,n,o,0)}var h=1,f=0;for(this[i]=r&255;++f<n&&(h*=256);)this[i+f]=r/h&255;return i+n},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,i,n,e){if(r=+r,i=i>>>0,n=n>>>0,!e){var o=Math.pow(2,8*n)-1;y(this,r,i,n,o,0)}var h=n-1,f=1;for(this[i+h]=r&255;--h>=0&&(f*=256);)this[i+h]=r/f&255;return i+n},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,1,255,0),this[i]=r&255,i+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,2,65535,0),this[i]=r&255,this[i+1]=r>>>8,i+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,2,65535,0),this[i]=r>>>8,this[i+1]=r&255,i+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,4,4294967295,0),this[i+3]=r>>>24,this[i+2]=r>>>16,this[i+1]=r>>>8,this[i]=r&255,i+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,4,4294967295,0),this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255,i+4},u.prototype.writeIntLE=function(r,i,n,e){if(r=+r,i=i>>>0,!e){var o=Math.pow(2,8*n-1);y(this,r,i,n,o-1,-o)}var h=0,f=1,p=0;for(this[i]=r&255;++h<n&&(f*=256);)r<0&&p===0&&this[i+h-1]!==0&&(p=1),this[i+h]=(r/f>>0)-p&255;return i+n},u.prototype.writeIntBE=function(r,i,n,e){if(r=+r,i=i>>>0,!e){var o=Math.pow(2,8*n-1);y(this,r,i,n,o-1,-o)}var h=n-1,f=1,p=0;for(this[i+h]=r&255;--h>=0&&(f*=256);)r<0&&p===0&&this[i+h+1]!==0&&(p=1),this[i+h]=(r/f>>0)-p&255;return i+n},u.prototype.writeInt8=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,1,127,-128),r<0&&(r=255+r+1),this[i]=r&255,i+1},u.prototype.writeInt16LE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,2,32767,-32768),this[i]=r&255,this[i+1]=r>>>8,i+2},u.prototype.writeInt16BE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,2,32767,-32768),this[i]=r>>>8,this[i+1]=r&255,i+2},u.prototype.writeInt32LE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,4,2147483647,-2147483648),this[i]=r&255,this[i+1]=r>>>8,this[i+2]=r>>>16,this[i+3]=r>>>24,i+4},u.prototype.writeInt32BE=function(r,i,n){return r=+r,i=i>>>0,n||y(this,r,i,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255,i+4};function Y(t,r,i,n,e,o){if(i+n>t.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function X(t,r,i,n,e){return r=+r,i=i>>>0,e||Y(t,r,i,4,34028234663852886e22,-34028234663852886e22),m.write(t,r,i,n,23,4),i+4}u.prototype.writeFloatLE=function(r,i,n){return X(this,r,i,!0,n)},u.prototype.writeFloatBE=function(r,i,n){return X(this,r,i,!1,n)};function G(t,r,i,n,e){return r=+r,i=i>>>0,e||Y(t,r,i,8,17976931348623157e292,-17976931348623157e292),m.write(t,r,i,n,52,8),i+8}u.prototype.writeDoubleLE=function(r,i,n){return G(this,r,i,!0,n)},u.prototype.writeDoubleBE=function(r,i,n){return G(this,r,i,!1,n)},u.prototype.copy=function(r,i,n,e){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!e&&e!==0&&(e=this.length),i>=r.length&&(i=r.length),i||(i=0),e>0&&e<n&&(e=n),e===n||r.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-i<e-n&&(e=r.length-i+n);var o=e-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(i,n,e):Uint8Array.prototype.set.call(r,this.subarray(n,e),i),o},u.prototype.fill=function(r,i,n,e){if(typeof r=="string"){if(typeof i=="string"?(e=i,i=0,n=this.length):typeof n=="string"&&(e=n,n=this.length),e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);if(r.length===1){var o=r.charCodeAt(0);(e==="utf8"&&o<128||e==="latin1")&&(r=o)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(i<0||this.length<i||this.length<n)throw new RangeError("Out of range index");if(n<=i)return this;i=i>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);var h;if(typeof r=="number")for(h=i;h<n;++h)this[h]=r;else{var f=u.isBuffer(r)?r:u.from(r,e),p=f.length;if(p===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(h=0;h<n-i;++h)this[h+i]=f[h%p]}return this};var pr=/[^+/0-9A-Za-z-_]/g;function ar(t){if(t=t.split("=")[0],t=t.trim().replace(pr,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function R(t,r){r=r||1/0;for(var i,n=t.length,e=null,o=[],h=0;h<n;++h){if(i=t.charCodeAt(h),i>55295&&i<57344){if(!e){if(i>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(h+1===n){(r-=3)>-1&&o.push(239,191,189);continue}e=i;continue}if(i<56320){(r-=3)>-1&&o.push(239,191,189),e=i;continue}i=(e-55296<<10|i-56320)+65536}else e&&(r-=3)>-1&&o.push(239,191,189);if(e=null,i<128){if((r-=1)<0)break;o.push(i)}else if(i<2048){if((r-=2)<0)break;o.push(i>>6|192,i&63|128)}else if(i<65536){if((r-=3)<0)break;o.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((r-=4)<0)break;o.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return o}function cr(t){for(var r=[],i=0;i<t.length;++i)r.push(t.charCodeAt(i)&255);return r}function lr(t,r){for(var i,n,e,o=[],h=0;h<t.length&&!((r-=2)<0);++h)i=t.charCodeAt(h),n=i>>8,e=i%256,o.push(e),o.push(n);return o}function z(t){return I.toByteArray(ar(t))}function U(t,r,i,n){for(var e=0;e<n&&!(e+i>=r.length||e>=t.length);++e)r[e+i]=t[e];return e}function s(t,r){return t instanceof r||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===r.name}function C(t){return t!==t}var wr=function(){for(var t="0123456789abcdef",r=new Array(256),i=0;i<16;++i)for(var n=i*16,e=0;e<16;++e)r[n+e]=t[i]+t[e];return r}()}}]);
