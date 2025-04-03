(function(l,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("@nocobase/client"),require("react/jsx-runtime"),require("@ant-design/icons"),require("@nocobase/plugin-workflow/client"),require("@formily/react"),require("antd"),require("react-i18next"),require("lodash")):typeof define=="function"&&define.amd?define(["exports","@nocobase/client","react/jsx-runtime","@ant-design/icons","@nocobase/plugin-workflow/client","@formily/react","antd","react-i18next","lodash"],t):(l=typeof globalThis!="undefined"?globalThis:l||self,t(l["@ashley/plugin-workflow-generate-file"]={},l["@nocobase/client"],l.jsxRuntime,l["@ant-design/icons"],l["@nocobase/plugin-workflow"],l["@formily/react"],l.antd,l["react-i18next"],l.lodash))})(this,function(l,t,e,g,h,C,u,w,y){"use strict";var P=Object.defineProperty;var D=(l,t,e)=>t in l?P(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var m=(l,t,e)=>(D(l,typeof t!="symbol"?t+"":t,e),e);var W=(l,t,e)=>new Promise((g,h)=>{var C=y=>{try{w(e.next(y))}catch(T){h(T)}},u=y=>{try{w(e.throw(y))}catch(T){h(T)}},w=y=>y.done?g(y.value):Promise.resolve(y.value).then(C,u);w((e=e.apply(l,t)).next())});const T=t.css`
  display: flex;
  align-items: center;
  background: #0000000d;
  height: 30px;
  border-radius: 8px;
  padding: 4px 8px;
  user-select: none;

  .ant-typography-copy {
    color: #000000d9;

    &:hover {
      color: #000000d9;
    }
  }

  &.ant-typography .ant-typography-copy-success,
  &.ant-typography .ant-typography-copy-success:hover,
  &.ant-typography .ant-typography-copy-success:focus {
    color: #000000d9;
  }
`,F={tableItemWrapper:t.css`
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 19px 17px;
    margin-bottom: 16px;
  `,tableItemTitleWrapper:t.css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,tableItemTitle:t.css`
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 0;
  `,tableItemValueWrapper:t.css`
    padding: 16px 8px;
    border-bottom: 1px solid #d9d9d9;
  `,tableItemValuesWrapper:t.css`
    padding: 16px 8px 0 8px;
  `},A=o=>{const{itemKey:s,itemShowKey:n,itemValue:f,scope:p,changeOnSelect:a,onKeyChange:d,onValueChange:i,onDelete:x}=o;return e.jsxs(u.Space,{style:{width:"100%",marginBottom:16},size:16,children:[e.jsx(u.Input,{value:s,style:{width:150},onChange:V=>{const r=V.target.value.replace(/[{}]/g,"");d(r)}}),e.jsx("div",{style:{minWidth:220},children:e.jsx(t.Variable.TextArea,{changeOnSelect:a,scope:p,value:f,onChange:i})}),n&&e.jsx(u.Typography.Text,{className:T,copyable:{format:"text/plain",text:n,icon:[n,n]}}),x&&e.jsx(u.Button,{"aria-label":"icon-close",type:"link",icon:e.jsx(g.CloseCircleOutlined,{}),onClick:()=>{x(s)}})]})},q=C.observer(({value:o,onChange:s})=>{const n=h.useWorkflowVariableOptions(),{t:f}=w.useTranslation();return e.jsxs("fieldset",{style:{marginTop:8},children:[Array.isArray(o)&&o.map((p,a)=>e.jsx(A,{itemKey:p.key,itemShowKey:p.showKey,itemValue:p.value,scope:n,onKeyChange:d=>{const i=[...o];i[a].key=d,i[a].showKey=d?`{${d}}`:"",s([...i])},onValueChange:d=>{const i=[...o];i[a].value=d,s([...i])},onDelete:()=>{o.splice(a,1),s([...o])}},a)),e.jsx(u.Button,{icon:e.jsx(g.PlusOutlined,{}),onClick:()=>{s([...o||[],{key:"",showKey:"",value:""}])},children:f("Add field")})]})},{displayName:"FieldValue"}),I=o=>{var f;return((f=o.target)!=null?f:"").replace(/\{\{(.*?)\}\}/g,"$1").split(".")[1]},v=C.observer(({value:o=[],onChange:s})=>{const{t:n}=w.useTranslation(),f=h.useWorkflowVariableOptions();return e.jsxs("fieldset",{style:{marginTop:8},children:[o.map((p,a)=>{const d=I(p);let i=y.cloneDeep(f.filter(r=>r.key==="$jobsMapByNodeKey"));const x=o.map(r=>I(r));Array.isArray(x)&&x.length>0&&(i[0].children=i[0].children.filter(r=>r.value===d?!0:!x.includes(r.value)));let V=[];return d&&(V=y.cloneDeep(i),V[0].children=V[0].children.filter(r=>r.value===d)),e.jsxs("div",{className:F.tableItemWrapper,children:[e.jsxs("div",{className:F.tableItemTitleWrapper,children:[e.jsx("p",{className:F.tableItemTitle,children:`Sub table #${a+1}`}),e.jsx(u.Button,{"aria-label":"icon-close",type:"link",icon:e.jsx(g.CloseCircleOutlined,{}),onClick:()=>{o.splice(a,1),s([...o])}})]}),e.jsx("div",{className:F.tableItemValueWrapper,children:e.jsx(A,{itemKey:p.key,itemShowKey:p.showKey,itemValue:p.target,scope:i,changeOnSelect:!0,onKeyChange:r=>{const c=[...o];c[a].key=r,c[a].showKey=r?`{{${r}}}`:"",s([...c])},onValueChange:r=>{const c=[...o];c[a].target=r,s([...c])}})}),e.jsxs("div",{className:F.tableItemValuesWrapper,children:[p.values.map((r,c)=>e.jsx(A,{itemKey:r.key,itemShowKey:r.showKey,itemValue:r.value,scope:V,onKeyChange:b=>{const k=[...o];k[a].values[c].key=b,k[a].values[c].showKey=b?`{{{${b}}}}`:"",s([...k])},onValueChange:b=>{const k=[...o];k[a].values[c].value=b,s([...k])},onDelete:()=>{const b=[...o];b[a].values.splice(c,1),s([...b])}},c)),e.jsx(u.Button,{icon:e.jsx(g.PlusOutlined,{}),onClick:()=>{const r=[...o];r[a].values=[...r[a].values,{key:"",showKey:"",value:""}],s([...r])},children:n("Add field")})]})]},a)}),e.jsx(u.Button,{icon:e.jsx(g.PlusOutlined,{}),onClick:()=>{s([...o||[],{key:"",showKey:"",target:"",values:[]}])},children:n("Add sub table")})]})},{displayName:"SubTableFieldValue"}),S="@ashley/plugin-workflow-generate-file",N="/storage/upload/";class O extends h.Instruction{constructor(){super(...arguments);m(this,"title",`{{t("Generate File", { ns: "${S}" })}}`);m(this,"type","generate-file");m(this,"group","extended");m(this,"description",`{{t("Replace the content of the uploaded template file and generate a new file", { ns: "${S}" })}}`);m(this,"icon",e.jsx(g.FileOutlined,{}));m(this,"fieldset",{params:{type:"object",properties:{values:{type:"array",required:!1,title:'{{t("Main fields")}}',"x-decorator":"FormItem","x-decorator-props":{labelAlign:"left",className:t.css`
              flex-direction: column;
            `},"x-component":"FieldValue"},tableValues:{type:"array",required:!1,title:'{{t("Sub table fields")}}',"x-decorator":"FormItem","x-decorator-props":{labelAlign:"left"},"x-component":"SubTableFieldValue"},template:{type:"string",required:!0,title:`{{t("Upload template", { ns: "${S}" })}}`,description:"Tips: Only template files with xlsx 、 plist 、docx suffixes are supported","x-decorator":"FormItem","x-component":"Upload.DraggerV2","x-component-props":{action:"attachments:create",accept:".docx, .plist, .xlsx",subTitle:"",multiple:!1,maxCount:1}},outFileName:{type:"string",required:!0,title:`{{t("File name", { ns: "${S}" })}}`,"x-decorator":"FormItem","x-component":"WorkflowVariableTextArea"},outPath:{type:"string",required:!0,title:`{{t("File path", { ns: "${S}" })}}`,"x-decorator":"FormItem","x-component":"Input","x-component-props":{addonBefore:N}}}}});m(this,"scope",{useCollectionDataSource:t.useCollectionDataSource});m(this,"components",{FilterDynamicComponent:h.FilterDynamicComponent,FieldValue:q,SubTableFieldValue:v,IndividualHooksRadioWithTooltip:h.IndividualHooksRadioWithTooltip,WorkflowVariableTextArea:h.WorkflowVariableTextArea,Upload:t.Upload})}useVariables({key:n,title:f}){return{value:n,label:f}}}class K extends t.Plugin{afterAdd(){return W(this,null,function*(){})}beforeLoad(){return W(this,null,function*(){})}load(){return W(this,null,function*(){this.app.pm.get("workflow").registerInstruction("generate-file",O)})}}l.PluginWorkflowGenerateFileClient=K,l.default=K,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
