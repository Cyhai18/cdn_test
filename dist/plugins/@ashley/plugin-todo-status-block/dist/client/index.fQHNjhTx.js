(function(i,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("@nocobase/client"),require("react/jsx-runtime"),require("@nocobase/utils/client"),require("react"),require("dayjs"),require("react-i18next"),require("@nocobase/plugin-workflow/client"),require("@formily/react"),require("@formily/antd-v5"),require("lodash")):typeof define=="function"&&define.amd?define(["exports","@nocobase/client","react/jsx-runtime","@nocobase/utils/client","react","dayjs","react-i18next","@nocobase/plugin-workflow/client","@formily/react","@formily/antd-v5","lodash"],t):(i=typeof globalThis!="undefined"?globalThis:i||self,t(i["@ashley/plugin-todo-status-block"]={},i["@nocobase/client"],i.jsxRuntime,i["@nocobase/utils"],i.react,i.dayjs,i["react-i18next"],i["@nocobase/plugin-workflow"],i["@formily/react"],i["@formily/antd-v5"],i.lodash))})(this,function(i,t,s,B,g,z,M,p,x,I,G){"use strict";var ve=Object.defineProperty,ke=Object.defineProperties;var _e=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var F=(i,t,s)=>t in i?ve(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s,$=(i,t)=>{for(var s in t||(t={}))we.call(t,s)&&F(i,s,t[s]);if(Z)for(var s of Z(t))Ce.call(t,s)&&F(i,s,t[s]);return i},ee=(i,t)=>ke(i,_e(t));var te=(i,t,s)=>(F(i,typeof t!="symbol"?t+"":t,s),s);var J=(i,t,s)=>new Promise((B,g)=>{var z=x=>{try{p(s.next(x))}catch(I){g(I)}},M=x=>{try{p(s.throw(x))}catch(I){g(I)}},p=x=>x.done?B(x.value):Promise.resolve(x.value).then(z,M);p((s=s.apply(i,t)).next())});function oe(e){const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const c=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(o,n,c.get?c:{enumerable:!0,get:()=>e[n]})}}return o.default=e,Object.freeze(o)}const P=oe(g);function se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var q={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var o={}.hasOwnProperty;function n(){for(var c=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var d=typeof a;if(d==="string"||d==="number")c.push(a);else if(Array.isArray(a)){if(a.length){var l=n.apply(null,a);l&&c.push(l)}}else if(d==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){c.push(a.toString());continue}for(var u in a)o.call(a,u)&&a[u]&&c.push(u)}}}return c.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(q);var re=q.exports;const H=se(re);var R=new Map,L=new WeakMap,W=0,ne=void 0;function ae(e){return e?(L.has(e)||(W+=1,L.set(e,W.toString())),L.get(e)):"0"}function ie(e){return Object.keys(e).sort().filter(o=>e[o]!==void 0).map(o=>`${o}_${o==="root"?ae(e.root):e[o]}`).toString()}function ce(e){const o=ie(e);let n=R.get(o);if(!n){const c=new Map;let r;const a=new IntersectionObserver(d=>{d.forEach(l=>{var u;const h=l.isIntersecting&&r.some(m=>l.intersectionRatio>=m);e.trackVisibility&&typeof l.isVisible=="undefined"&&(l.isVisible=h),(u=c.get(l.target))==null||u.forEach(m=>{m(h,l)})})},e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:o,observer:a,elements:c},R.set(o,n)}return n}function le(e,o,n={},c=ne){if(typeof window.IntersectionObserver=="undefined"&&c!==void 0){const u=e.getBoundingClientRect();return o(c,{isIntersecting:c,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:r,observer:a,elements:d}=ce(n),l=d.get(e)||[];return d.has(e)||d.set(e,l),l.push(o),a.observe(e),function(){l.splice(l.indexOf(o),1),l.length===0&&(d.delete(e),a.unobserve(e)),d.size===0&&(a.disconnect(),R.delete(r))}}function de({threshold:e,delay:o,trackVisibility:n,rootMargin:c,root:r,triggerOnce:a,skip:d,initialInView:l,fallbackInView:u,onChange:h}={}){var m;const[y,k]=P.useState(null),T=P.useRef(),[E,N]=P.useState({inView:!!l,entry:void 0});T.current=h,P.useEffect(()=>{if(d||!y)return;let b;return b=le(y,(A,_)=>{N({inView:A,entry:_}),T.current&&T.current(A,_),_.isIntersecting&&a&&b&&(b(),b=void 0)},{root:r,rootMargin:c,threshold:e,trackVisibility:n,delay:o},u),()=>{b&&b()}},[Array.isArray(e)?e.toString():e,y,r,c,a,d,n,u,o]);const C=(m=E.entry)==null?void 0:m.target,D=P.useRef();!y&&C&&!a&&!d&&D.current!==C&&(D.current=C,N({inView:!!l,entry:void 0}));const S=[k,E.inView,E.entry];return S.ref=S[0],S.inView=S[1],S.entry=S[2],S}const v="@ashley/plugin-todo-status-block";function ue(e){return M.useTranslation(v,e)}const pe=t.createStyles(({token:e})=>({wrapper:t.css`
      margin: 18px 0;
      &:first-child {
        margin: 0;
      }
    `,todoTitleWrapper:t.css({display:"flex",marginBottom:"15px",alignItems:"center"}),point:t.css`
      display: flex;
      justify-content: center;
      align-items: center;
      content: ' ';
      width: 13px;
      height: 13px;
      border-radius: 50%;
      margin-right: 12px;
      flex-shrink: 0;

      &:after {
        display: block;
        content: ' ';
        width: 5px;
        height: 5px;
        border-radius: 50%;
      }
    `,todoTitle:t.css`
      font-size: 16px;
      font-weight: 700;
      color: #2f3036;
      line-height: 19px;
      margin-bottom: 0;
    `,todoDetailsWrapper:t.css`
      display: flex;
    `,line:t.css`
      border-radius: 2px;
      width: 2px;
      background: #fe4004;
      margin: 7px 12px 7px 5px;
    `,todoDetailsContentWrapper:t.css`
      flex: 1;
      border-radius: 4px;
      padding: 11px 16px;
      background: #fafafa;
      border: 1px solid ${e.colorBorder};
    `,usernameAndDateWrapper:t.css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 6px;
    `,username:t.css`
      font-weight: 700;
      font-size: 14px;
      color: #2e3238;
      margin-bottom: 0;
      word-break: break-word;
    `,date:t.css`
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 0;
      min-width: 75px;
      margin-top: 2px;
    `,status:t.css`
      font-size: 12px;
      font-weight: 700;
      margin: 4px 0;
    `,comment:t.css`
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 0;
      word-break: break-word;
    `})),V={[p.JOB_STATUS.PENDING]:`{{t('Waiting', { ns: "${v}" })}}`,[p.JOB_STATUS.REJECTED]:`{{t('Reject', { ns: "${v}" })}}`,[p.JOB_STATUS.RESOLVED]:`{{t('Approval', { ns: "${v}" })}}`},Y={[p.JOB_STATUS.PENDING]:"#EF9A1A",[p.JOB_STATUS.REJECTED]:"#EF341A",[p.JOB_STATUS.RESOLVED]:"#00AF91"};(()=>{p.JobStatusOptions.forEach(e=>{V[e.value]||(V[e.value]=e.label,Y[e.value]="#EF341A")})})();const U=z().format("YYYY-MM-DD HH:mm:ss"),me=[{id:"1",node_title:"Submitted",node_status:p.JOB_STATUS.RESOLVED,username:"Mock User",updated_at:U},{id:"2",node_title:"Assigned Tracking # (Mock)",node_status:p.JOB_STATUS.RESOLVED,username:"Mock User",updated_at:U},{id:"3",node_title:"Investigation (Mock)",node_status:p.JOB_STATUS.RESOLVED,username:"Mock User",updated_at:U,comment:"ok"},{id:"4",node_title:"Resolved (Mock)",node_status:p.JOB_STATUS.PENDING,username:"-",updated_at:U}].reverse(),fe=e=>{const{item:o}=e,{t:n}=M.useTranslation(),c=t.useCompile(),{styles:r}=pe(),{token:a}=t.useToken(),d=o.status_txt?o.status_txt:V[o.node_status];return s.jsxs("div",{className:r.wrapper,children:[s.jsxs("div",{className:r.todoTitleWrapper,children:[s.jsx("div",{className:H(r.point,t.css`
              background: ${o.node_status===p.JOB_STATUS.PENDING?"#ECECEC":a.xwColorPrimaryHighlight};
              &::after {
                background: ${o.node_status===p.JOB_STATUS.PENDING?"#fff":a.xwColorPrimaryHighlight};
              }
            `)}),s.jsx("h2",{className:r.todoTitle,children:o.node_title})]}),s.jsxs("div",{className:r.todoDetailsWrapper,children:[s.jsx("div",{className:H(r.line,t.css`
              background: ${o.node_status===p.JOB_STATUS.PENDING?"#ECECEC":a.xwColorPrimaryHighlight};
            `)}),s.jsxs("div",{className:r.todoDetailsContentWrapper,children:[B.isMobile?s.jsxs("div",{children:[s.jsx("p",{className:r.username,children:o.username||"-"}),s.jsx("p",{className:r.date,children:o.updated_at||"-"})]}):s.jsxs("div",{className:r.usernameAndDateWrapper,children:[s.jsx("p",{className:r.username,children:o.username||"-"}),s.jsx("p",{className:r.date,children:o.updated_at||"-"})]}),o.node_title!=="Submitted"&&s.jsx("p",{className:H(r.status,t.css`
                  color: ${Y[o.node_status]};
                `),children:c(d)}),s.jsx("p",{className:r.comment,children:o.comment&&n("Comments: {{comment}}",{ns:v,comment:o.comment,interpolation:{escapeValue:!1}})})]})]})]})},he=()=>{var b,A,_,O;const e=t.useCollection(),o=t.useCollectionRecordData(),[n,c]=g.useState([]),r=t.useAPIClient(),{name:a}=e,d=B.isEmpty(o),{designable:l}=t.useDesignable(),u=g.useContext(B.BlockPowerSettingDataContext),h=x.useFieldSchema(),m=(b=h==null?void 0:h.parent)==null?void 0:b["x-linkage-rules"];let y=!1;const k=typeof m=="undefined"||Array.isArray(m)&&m.length===0;let T=!1;const E=u.state.currentAuth.roles;if(m){for(const f of m)if(!f.disabled){f.roleGroup=(_=(A=B.parseParamPowerUtils(f.condition)[0])==null?void 0:A.roleGroup)!=null?_:[];for(const w of f.roleGroup){if(T)break;for(const j of E)if(w===j.name){T=!0,y=((O=f.actions[0])==null?void 0:O.operator)==="hidden";break}}}}const{ref:N,inView:C}=de({threshold:0,initialInView:!1,triggerOnce:!0});g.useEffect(()=>{d?c(me):C&&(l||T||k)&&r.request({url:"/public:getWorkflowExecutionAuditLogs",params:{collection:a,data_id:o.id,onlyRelated:l?!1:y}}).then(f=>{var w,j;Array.isArray((w=f.data)==null?void 0:w.data)&&c((j=f.data)==null?void 0:j.data.reverse())})},[r,C,l,d,a,o,y,T,k]);const D=h["x-decorator"]==="BlockItem",S=t.useDesigner();return s.jsxs("div",{ref:N,children:[D?null:s.jsx(S,{initializer:!1,draggable:!1}),n.map((f,w)=>s.jsx(fe,{item:f},w))]})},ge=()=>{const{insert:e}=t.useSchemaInitializer(),o=t.useSchemaInitializerItem();ue();const n=t.css`
    box-shadow: none !important;
    > .ant-card-head {
      padding: 0;
    }
    > .ant-card-body {
      padding: 0;
    }
  `;return s.jsx(t.SchemaInitializerItem,ee($({},o),{onClick:()=>{e({type:"void","x-component":"CardItem","x-settings":"todoStatusBlockSchemaSettings","x-component-props":{title:`{{t("Transaction History", {ns: "${v}"})}}`,className:`${n} todo-status`,style:{background:"transparent"}},properties:{todoStatus:{"x-component":"TodoStatus"}}})}}))},Se=e=>s.jsx(t.SchemaComponentOptions,{components:{TodoStatus:he,TodoStatusBlockInitializer:ge},children:e.children}),be=function(o){var A,_;const{collectionName:n,isSubTable:c}=o,r=x.useFieldSchema(),{form:a}=t.useFormBlockContext(),{dn:d}=t.useDesignable(),{t:l}=M.useTranslation(),u=t.useVariables(),h=t.useLocalVariables(),m=t.useRecord(),{type:y}=t.useFormBlockType(),k=t.findGridSchema(r)||r,{getTemplateById:T}=t.useSchemaTemplateManager(),E=g.useContext(B.BlockPowerSettingDataContext),N=[{type:"string",name:"roleGroup",title:'{{t("rolegrouppower")}}',schema:{type:"array",title:'{{t("rolegrouppower")}}',rawTitle:'{{t("rolegrouppower")}}',"x-component":"Select","x-component-props":{mode:"tags"},isPowerFlagBool:!0,enum:(_=(A=E.state)==null?void 0:A.roleList)==null?void 0:_.map(O=>({label:O.label,value:O.value,rawLabel:O.label}))},operators:[{label:'{{t("contains")}}',value:"$includes"}]}],C=[{label:l("Show All Related History"),value:"visible",schema:{},isTodoStatusBool:!0},{label:l("Show Own Related History"),value:"hidden",schema:{},isTodoStatusBool:!0}],D=g.useMemo(()=>({type:"object",title:l("Linkage rule"),properties:{fieldReaction:{"x-component":t.FormLinkageRules,"x-use-component-props":()=>({options:N,defaultValues:r==null?void 0:r["x-linkage-rules"],type:"button",linkageOptions:C,collectionName:n,form:a,variables:u,localVariables:h,record:m,formBlockType:y,isSubTable:c})}}}),[n,r,a,h,m,l,u]),S=g.useMemo(()=>({ArrayCollapse:I.ArrayCollapse,FormLayout:I.FormLayout}),[]),b=g.useCallback(O=>{var Q;const f=[];for(const Te of O.fieldReaction.rules)f.push(G.pickBy(Te,G.identity));const w=k["x-component"]==="BlockTemplate"&&((Q=k["x-component-props"])==null?void 0:Q.templateId),X={"x-uid":w&&T(w).uid||k["x-uid"]};k["x-linkage-rules"]=f,X["x-linkage-rules"]=f,d.emit("patch",{schema:X}),d.refresh()},[d]);return s.jsx(t.SchemaSettingsModalItem,{title:l("Linkage rules"),components:S,width:770,schema:D,onSubmit:b})},xe=new t.SchemaSettings({name:"todoStatusBlockSchemaSettings",items:[{name:"linkageRules",Component:be,useComponentProps(){const{name:e}=t.useCollection_deprecated();return{collectionName:e}}},{name:"delete",type:"remove",useComponentProps(){return{removeParentsIfNoChildren:!0,breakRemoveOn:{"x-component":"Grid"}}}}]}),ye=(e,{collection:o,dataPath:n,props:c})=>({type:"void",name:"transaction history","x-decorator":"DetailsBlockProvider","x-decorator-props":{collection:o,dataSource:`{{${n}}}`},"x-component":"CardItem","x-settings":"todoStatusBlockSchemaSettings","x-component-props":{title:e.title,className:c.cardItemClassName},properties:{todoStatus:{"x-component":"TodoStatus","x-decorator-props":{name:"todoStatus"}}}});class K extends t.Plugin{constructor(){super(...arguments);te(this,"createTransactionHistoryBlockSchema",ye)}afterAdd(){return J(this,null,function*(){})}beforeLoad(){return J(this,null,function*(){})}load(){return J(this,null,function*(){this.app.schemaSettingsManager.add(xe),this.app.use(Se);const n=this.app.schemaInitializerManager.get("FormItemInitializers");n==null||n.add("transactionHistory",{title:`{{t("Transaction History", {ns: "${v}"})}}`,icon:"UnorderedListOutlined",Component:"TodoStatusBlockInitializer"});const c=this.app.schemaInitializerManager.get("RecordBlockInitializers");c==null||c.add("dataBlocks.transactionHistory",{Component:"TodoStatusBlockInitializer",name:"transactionHistory",title:`{{t("Transaction History", {ns: "${v}"})}}`,icon:"UnorderedListOutlined"});const r=this.app.schemaInitializerManager.get("ReadPrettyFormItemInitializers");r==null||r.add("transactionHistory",{title:`{{t("Transaction History", {ns: "${v}"})}}`,icon:"UnorderedListOutlined",Component:"TodoStatusBlockInitializer"})})}}i.PluginTodoStatusBlockClient=K,i.default=K,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
