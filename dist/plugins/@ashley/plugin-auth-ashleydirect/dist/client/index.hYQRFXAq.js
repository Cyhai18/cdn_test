(function(s,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("@nocobase/client"),require("@nocobase/plugin-auth/client"),require("react/jsx-runtime"),require("@formily/react"),require("antd"),require("react-router-dom"),require("@nocobase/utils/client"),require("react-i18next")):typeof define=="function"&&define.amd?define(["exports","@nocobase/client","@nocobase/plugin-auth/client","react/jsx-runtime","@formily/react","antd","react-router-dom","@nocobase/utils/client","react-i18next"],t):(s=typeof globalThis!="undefined"?globalThis:s||self,t(s["@ashley/plugin-auth-ashleydirect"]={},s["@nocobase/client"],s["@nocobase/plugin-auth"],s.jsxRuntime,s["@formily/react"],s.antd,s["react-router-dom"],s["@nocobase/utils"],s["react-i18next"]))})(this,function(s,t,o,e,a,g,c,l,i){"use strict";var $=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var z=(s,t,o)=>t in s?$(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,u=(s,t)=>{for(var o in t||(t={}))Z.call(t,o)&&z(s,o,t[o]);if(b)for(var o of b(t))E.call(t,o)&&z(s,o,t[o]);return s},f=(s,t)=>W(s,X(t));var v=(s,t,o)=>new Promise((e,a)=>{var g=i=>{try{l(o.next(i))}catch(h){a(h)}},c=i=>{try{l(o.throw(i))}catch(h){a(h)}},l=i=>i.done?e(i.value):Promise.resolve(i.value).then(g,c);l((o=o.apply(s,t)).next())});const h="AshleyDirect",x="/authenticators/ashleydirect/signin",P=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_10425_20949)",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5847 14.5845H10.6905L9.56847 13.467L8.44869 14.5845H3.55444L9.56847 8.59473L15.5847 14.5845Z",fill:"#F68C2C"}),e.jsx("path",{d:"M15.9708 1C15.9013 1.04712 15.8452 1.08303 15.7913 1.12342C13.637 2.72118 11.4827 4.31968 9.32847 5.91893C9.28309 5.96808 9.22013 5.99731 9.1533 6.00025C9.08647 6.0032 9.02119 5.97961 8.97167 5.93464C7.06872 4.63011 5.16204 3.33305 3.25161 2.04348C3.14481 1.97423 3.01984 1.93829 2.89257 1.94025C2.00841 1.96493 1.12426 2.00308 0.24011 2.03898C0.175033 2.03898 0.109958 2.05245 0 2.06143L6.78597 10.0233L1.75259 15.0544H2.34277L15.8295 1.59018C15.9086 1.51671 15.9642 1.42148 15.9894 1.31647C16.0145 1.21145 16.0081 1.10135 15.9708 1Z",fill:"#071424"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_10425_20949",children:e.jsx("rect",{width:"16",height:"16",fill:"white"})})})]}),M=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 11.9995H9.49077L7.99851 10.5072L6.50923 11.9995H0L7.99851 4.00098L16 11.9995Z",fill:"#F68C2C"})}),S=()=>e.jsxs("svg",{width:"133.2",height:"15.8",viewBox:"0 0 133.2 15.8",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{id:"ASHLEYDIRECT",children:[e.jsxs("g",{children:[e.jsx("path",{d:"M34.3,10.2H30l-0.8,2h-2.2l4.2-9.3h2.1l4.2,9.3h-2.3L34.3,10.2z M33.6,8.6L32.1,5l-1.5,3.6H33.6z"}),e.jsx("path",{d:`M37.6,11.3l0.7-1.6c0.8,0.6,2,1,3.1,1c1.3,0,1.8-0.4,1.8-1c0-1.7-5.4-0.5-5.4-4c0-1.6,1.3-2.9,3.9-2.9
          c1.2,0,2.4,0.3,3.2,0.8l-0.7,1.6c-0.9-0.5-1.8-0.7-2.6-0.7C40.5,4.5,40,5,40,5.5c0,1.7,5.4,0.5,5.4,4c0,1.6-1.3,2.9-4,2.9
          C40,12.4,38.5,12,37.6,11.3z`}),e.jsx("path",{d:"M55.5,2.9v9.3h-2.2V8.4h-4.2v3.8h-2.2V2.9h2.2v3.7h4.2V2.9H55.5z"}),e.jsx("path",{d:"M57.7,2.9h2.2v7.6h4.7v1.8h-6.8V2.9z"})]}),e.jsx("g",{children:e.jsx("path",{d:"M73,10.5v1.7h-7.2V2.9h7.1v1.7h-4.9v2h4.3v1.7h-4.3v2.2H73z"})}),e.jsx("g",{children:e.jsx("path",{d:"M79.1,8.9v3.3h-2.2V8.9l-3.6-6h2.3l2.5,4.2l2.5-4.2h2.1L79.1,8.9z"})}),e.jsxs("g",{children:[e.jsx("path",{d:"M84,2.9h3.8c3,0,5,1.9,5,4.7c0,2.8-2,4.7-5,4.7H84V2.9z M87.8,11.4c2.5,0,4.1-1.6,4.1-3.8s-1.6-3.8-4.1-3.8H85v7.6H87.8z"}),e.jsx("path",{d:"M95.1,2.9h1v9.3h-1V2.9z"}),e.jsx("path",{d:`M105.5,12.2l-2.1-3c-0.2,0-0.5,0-0.7,0h-2.5v3h-1V2.9h3.5c2.4,0,3.8,1.2,3.8,3.2c0,1.5-0.8,2.5-2.1,2.9l2.3,3.2H105.5z
          M105.4,6.1c0-1.5-1-2.3-2.9-2.3h-2.5v4.7h2.5C104.4,8.4,105.4,7.6,105.4,6.1z`})]}),e.jsx("g",{children:e.jsx("path",{d:"M115.4,11.4v0.9h-6.6V2.9h6.4v0.9h-5.4v3.3h4.8v0.8h-4.8v3.5H115.4z"})}),e.jsx("g",{children:e.jsx("path",{d:`M116.8,7.6c0-2.7,2.1-4.8,4.9-4.8c1.4,0,2.6,0.5,3.4,1.4l-0.6,0.6c-0.8-0.8-1.7-1.1-2.8-1.1c-2.3,0-4,1.7-4,3.9
          c0,2.2,1.7,3.9,4,3.9c1.1,0,2-0.3,2.8-1.1l0.6,0.6c-0.8,0.9-2.1,1.4-3.4,1.4C118.9,12.3,116.8,10.3,116.8,7.6z`})}),e.jsx("g",{children:e.jsx("path",{d:"M128.9,3.8h-3.3V2.9h7.6v0.9h-3.3v8.5h-1V3.8z"})})]}),e.jsx("path",{id:"Path_2",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#F68C2C"},d:"M24.5,12.3h-10L12.2,10L10,12.3H0L12.2,0L24.5,12.3z"})]}),L=()=>e.jsx(t.Icon,{component:()=>e.jsx(P,{})}),I=()=>e.jsx(t.Icon,{component:()=>e.jsx(M,{})}),A=()=>e.jsx(t.Icon,{component:()=>e.jsx(S,{})}),H=t.css`
  display: relative;
  padding: 119px 0 40px 0;
  max-width: 327px;
  margin: 0 auto;

  .logo {
    width: 100%;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 266px;
      height: 32px;
    }
  }
`,V=t.css`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #1e1e1e;
  font-size: 15px;

  &::after {
    content: '';
    width: 42%;
    height: 1px;
    background: #d9d9d9;
    display: block;
  }

  &::before {
    content: '';
    width: 42%;
    height: 1px;
    background: #d9d9d9;
    display: block;
  }
`;function k(){return e.jsx("div",{className:V,children:"OR"})}const F=t.css`
  border: 1px solid #d9d9d9;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: #1e1e1e;
  font-size: 15px;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`;function D(r){const n=c.useNavigate();return e.jsxs("div",{onClick:()=>{n(`${r.router}`)},className:F,children:[e.jsx(L,{}),e.jsx("span",{children:r.title})]})}function N(){const r=c.useNavigate(),[n]=c.useSearchParams();return()=>{const d=n.get("redirect");if(d){r(d,{replace:!0});return}r(l.isMobile?"/app/apps":"/app",{replace:!0})}}const j=()=>{const r=a.useForm(),n=t.useAPIClient(),d=N(),{refreshAsync:O}=t.useCurrentUserContext(),[U]=c.useSearchParams(),p=a.useField(),w=a.useFieldSchema(),C=t.useCompile();return{run(){return v(this,null,function*(){try{p.setComponentProps(f(u({},p.componentProps),{loading:!0})),w.title=C('{{t("Authorizing")}}'),yield r.submit();const m=U.get("uid");yield n.auth.signIn(r.values,m),yield O(),d()}catch(m){}finally{p.setComponentProps(f(u({},p.componentProps),{loading:!1})),w.title=C('{{t("Authorize")}}')}})}}},q={type:"object",name:"ashleyDirectForm","x-component":"FormV2",properties:{userId:{type:"string","x-component":"Input","x-validator":`{{(value) => {
        if (!value) {
          return 'Please input your User ID';
        }
        return /^[^@.<>"'/]{2,50}$/.test(value) || 'Please enter a valid User ID';
      }}}`,"x-decorator":"FormItem","x-decorator-props":{label:"User ID:",className:t.css`
          font-size: 12px !important;

          .ant-formily-item-label {
            font-weight: 700;
            line-height: 12px;
            min-height: 15px;
          }
        `},"x-component-props":{style:{height:40},size:"large"}},password:{type:"string","x-component":"Password",required:!0,"x-decorator":"FormItem","x-decorator-props":{label:"Password",className:t.css`
          font-size: 12px !important;

          .ant-formily-item-label {
            font-weight: 700;
            line-height: 12px;
            min-height: 15px;
          }
          .ant-formily-item-asterisk {
            display: none;
          }
        `},"x-component-props":{style:{height:40},size:"large"}},actions:{type:"void","x-component":"div",properties:{submit:{title:'{{t("Authorize")}}',type:"void","x-component":"Action","x-component-props":{htmlType:"submit",block:!0,useAction:"{{ useAshleyDirectSignIn }}",style:{width:"100%",background:"#F68C2C",border:"none",color:"#fff",height:40,marginTop:10},size:"large",loading:!1}}}}}};function T(){const{t:r}=i.useTranslation("@ashley/plugin-auth-ashleydirect");return e.jsxs("div",{className:H,children:[e.jsx("div",{className:"logo",children:e.jsx(A,{})}),e.jsx(g.ConfigProvider,{children:e.jsx(t.SchemaComponent,{schema:q,scope:{useAshleyDirectSignIn:j,t:r}})}),e.jsx(k,{}),e.jsx(D,{router:"/signin",title:"Continue with X Work"})]})}const B=t.css`
  border: 1px solid #d9d9d9;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 10px;
  color: #1e1e1e;
  font-size: 15px;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`,_=({authenticator:r})=>{const n=c.useNavigate();return e.jsxs("div",{onClick:()=>{n(`${x}?uid=${r.name}`)},className:B,children:[e.jsx(I,{}),e.jsx("span",{children:r.title||"Continue with Ashley Direct"})]})};class y extends t.Plugin{load(){return v(this,null,function*(){this.app.pm.get(o).registerType(h,{components:{SignInButton:_}}),this.app.router.add("auth.ashleydirectSignin",{path:x,Component:T})})}}s.AshleyDirectPlugin=y,s.default=y,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
