import{_ as p}from"./iframe-a19f03a5.js";import{R as e,r as c}from"./index-9fa1aa67.js";import{af as l,ag as h,ah as u,ai as E}from"./index-864f7ee2.js";import{renderElement as d,unmountElement as x}from"./react-18-2eeed4ca.js";import"./jsx-runtime-50395f49.js";import"./index-34b8b243.js";import"./index-f1ee927b.js";import"./index-356e4a49.js";var _={code:l,a:h,...u},f=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},A=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=E;return new Promise((a,m)=>{p(()=>import("./index-e677f581.js"),["./index-e677f581.js","./index-c254ec5c.js","./index-9fa1aa67.js"],import.meta.url).then(({MDXProvider:i})=>d(e.createElement(f,{showException:m,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>a())})},this.unmount=t=>{x(t)}}};export{A as DocsRenderer,_ as defaultComponents};
