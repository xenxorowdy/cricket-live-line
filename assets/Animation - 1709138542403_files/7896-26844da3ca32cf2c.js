"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7896],{43642:function(e,t,n){n.d(t,{pf:function(){return l},jV:function(){return f},ud:function(){return h}});var l,r=n(83849),s=n.n(r),i=n(90292),o=n.n(i),a=n(29901),c=n(38068),d=n(99897),u=n(52700),m=n(61250);!function(e){e.LEFT="left",e.RIGHT="right"}(l||(l={}));var x=function(e){var t=e.children,n=e.description,r=e.descriptionColor,i=e.destructiveAction,o=e.href,c=e.icon,u=e.label,x=e.labelClasses,f=e.noSelection,h=e.onClick,p=e.rightControl,v=e.selected,b=e.selectionSide,g=void 0===b?l.RIGHT:b,j=e.tag,y=void 0===j?"a":j,C=e.wrapperCssClasses,w=void 0===C?"flex text-gray-600 hover:bg-gray-50 hover:text-gray-600 transition-colors rounded-md items-center px-2 font-lf-regular":C,N=(0,a.useMemo)((function(){return g===l.LEFT?(0,m.jsxs)("div",{className:"flex items-center justify-start w-full space-x-2 text-sm cursor-pointer",children:[!f&&(0,m.jsx)("div",{className:"flex items-center w-5",children:(0,m.jsx)(d.J,{name:"tick",color:"text-gray-600",small:!0,className:s()({"opacity-0":!v})})}),(0,m.jsx)("div",{className:"flex items-center w-full h-8 space-x-2",children:t||(0,m.jsxs)(m.Fragment,{children:[c,(0,m.jsx)("div",{className:"text-sm whitespace-nowrap",children:u}),p&&(0,m.jsx)("div",{className:"flex items-center ml-auto",children:p})]})})]}):(0,m.jsxs)("div",{className:"flex items-center w-full h-8 space-x-2 text-sm cursor-pointer",children:[t||(0,m.jsxs)(m.Fragment,{children:[c,(0,m.jsx)("div",{className:"text-sm",children:u})]}),v&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"flex-grow"}),(0,m.jsx)("div",{className:"flex items-center ml-auto",children:(0,m.jsx)(d.J,{name:"tick",color:"text-gray-600",small:!0})})]}),p&&(0,m.jsx)("div",{className:"flex items-center ml-auto",children:p})]})}),[v,p,u,t,c,f,g]),k=a.createElement(y,{className:w+(i?"text-red-500 hover:bg-red-100 hover:text-red-500":""),href:o,onClick:h},(0,m.jsx)(m.Fragment,{children:n?(0,m.jsxs)("div",{className:"flex flex-col w-full py-2 text-sm cursor-pointer",children:[(0,m.jsxs)("div",{className:"".concat(x||""," flex items-center w-full space-x-2"),children:[(0,m.jsx)("div",{className:"text-sm",children:u}),v&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"flex-grow"}),(0,m.jsx)("div",{className:"flex items-center ml-auto",children:(0,m.jsx)(d.J,{name:"tick",color:"text-gray-600",small:!0})})]})]}),(0,m.jsx)("p",{className:"".concat(r||"text-gray-900"),children:n})]}):N}));return(0,m.jsx)("div",{children:k})},f=function(e){return e&&e.value&&"string"==typeof e.value},h=(0,a.forwardRef)((function(e,t){var n=e.button,r=e.buttonType,i=void 0===r?"SelectorType":r,h=e.interaction,p=void 0===h?"click":h,v=e.noPadding,b=void 0!==v&&v,g=e.multiSelection,j=void 0===g?[]:g,y=e.onChange,C=e.onMultiselectChange,w=e.options,N=e.placement,k=void 0===N?"top":N,O=e.selection,S=e.staticButton,E=void 0!==S&&S,M=e.width,P=void 0===M?"w-48":M,A=e.wrapperCssClasses,F=e.selectionSide,T=void 0===F?l.RIGHT:F,J=(0,a.useState)(O),L=J[0],D=J[1],I=(0,a.useState)(j),R=I[0],H=I[1],_=(0,a.useState)(!1),q=_[0],G=_[1],V=(0,a.useMemo)((function(){return"dropdown-selector-".concat(Math.round(1e3*Math.random()))}),[]);(0,a.useEffect)((function(){q&&G(!1)}),[q]),(0,a.useEffect)((function(){D(O)}),[O]);var X=(0,a.useMemo)((function(){return w.reduce((function(e,t){return t.multiSelect?e.nonMutuallyExclusiveOptions.push(t):e.mutuallyExclusiveOptions.push(t),e}),{mutuallyExclusiveOptions:[],nonMutuallyExclusiveOptions:[]})}),[w]);(0,a.useImperativeHandle)(t,(function(){return{close:function(){G(!0)},open:function(){G(!1)}}}),[]);var Z=function(e){e.stateless||D(e),y&&y(e)},z=function(e,t){H((function(n){if(!n)return n;if(t)n.push(e);else{var l=n.findIndex((function(t){return t.label===e.label}));-1!==l&&n.splice(l,1)}return o()(n)})),null==C||C(e,t)},B=X.nonMutuallyExclusiveOptions.map((function(e,t){var n="".concat(V,"-key-nme-").concat(t),l=Boolean(R&&R.find((function(t){return t.label===e.label})));return a.isValidElement(e.element)?(0,m.jsx)(x,{label:e.label,icon:e.icon,onClick:function(){z(e,!l),G(!0)},selected:l,description:e.description,labelClasses:e.labelClasses,descriptionColor:e.descriptionColor,destructiveAction:e.destructiveAction,selectionSide:T,children:e.element},n):(0,m.jsx)(x,{label:e.label,icon:e.icon,onClick:function(){z(e,!l),G(!0)},selected:l,description:e.description,labelClasses:e.labelClasses,descriptionColor:e.descriptionColor,destructiveAction:e.destructiveAction,selectionSide:T},n)})),K=X.mutuallyExclusiveOptions.map((function(e,t){var n="".concat(V,"-key-me-").concat(t),l=(null==L?void 0:L.label)===e.label;return a.isValidElement(e.element)?(0,m.jsx)(x,{label:e.label,icon:e.icon,onClick:function(){Z(e),G(!0)},selected:l,description:e.description,labelClasses:"".concat(e.labelClasses,"w-full"),descriptionColor:e.descriptionColor,destructiveAction:e.destructiveAction,selectionSide:T,children:e.element},n):(0,m.jsx)(x,{label:e.label,icon:e.icon,onClick:function(){Z(e),G(!0)},selected:l,description:e.description,labelClasses:e.labelClasses,descriptionColor:e.descriptionColor,destructiveAction:e.destructiveAction,selectionSide:T},n)})),Q=(0,a.useMemo)((function(){return E?n||(0,m.jsx)("div",{}):L?"MenuType"===i?(0,m.jsx)(u.Xi,{icon:L.icon,rightControl:(0,m.jsx)(d.J,{name:"chevron-right",color:"text-gray-500"}),label:L.label}):(0,m.jsx)(x,{wrapperCssClasses:s()("flex text-gray-600 hover:bg-gray-50 hover:text-gray-600 transition-colors rounded-md h-8 items-center font-lf-regular",{"px-4":!b}),label:L.label,icon:L.icon,noSelection:!0,rightControl:(0,m.jsx)("div",{className:"text-gray-500",children:(0,m.jsx)(d.J,{name:"chevron-down-fill",small:!0})})}):f(n)?"MenuType"===i?(0,m.jsx)(u.Xi,{icon:n.icon,rightControl:(0,m.jsx)(d.J,{name:"chevron-right",color:"text-gray-500"}),label:n.label}):(0,m.jsx)(x,{noSelection:!0,wrapperCssClasses:s()("flex text-gray-900 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md h-8 items-center font-lf-regular",{"px-4":!b}),label:n.label,icon:n.icon,rightControl:(0,m.jsx)("div",{className:"text-gray-500",children:(0,m.jsx)(d.J,{name:"chevron-down-fill",small:!0})})}):n||(0,m.jsx)("div",{})}),[n,i,L,b,E]),U=(0,a.useMemo)((function(){return(0,m.jsxs)("div",{className:"bg-white border border-gray-100 shadow-md rounded-md outline-none ".concat(P),children:[(0,m.jsx)("div",{className:"p-2 px-1",children:K}),B.length>0&&(0,m.jsx)("div",{className:"p-2 px-1 border-t border-gray-100",children:B})]})}),[P,K,B]),W=(0,c.x)().containerRef;return(0,m.jsx)(c.L,{container:null==W?void 0:W.current,wrapperCssClasses:A,placement:k,button:Q,forceClose:q,interaction:p,menu:U})}));h.displayName="DropdownSelector"},30891:function(e,t,n){n.d(t,{X:function(){return f}});var l=n(77916),r=n(51848),s=n(83849),i=n.n(s),o=n(29901),a=n(95893),c=n(99897),d=n(61250),u=["disabled","label","required","valueLabel","id","onChange","name","additionalClasses","checkboxSize","labelClass","icon","indeterminate"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.disabled,n=(e.label,e.required),l=e.valueLabel,s=void 0===l?"":l,m=e.id,f=void 0===m?(0,a.ZP)("checkbox-"):m,h=e.onChange,p=e.name,v=e.additionalClasses,b=e.checkboxSize,g=void 0===b?"small":b,j=e.labelClass,y=void 0===j?"text-sm":j,C=e.icon,w=e.indeterminate,N=void 0!==w&&w,k=(0,r.Z)(e,u),O=(0,o.useState)(!1),S=O[0],E=O[1],M=(0,o.useState)(!1),P=M[0],A=M[1],F=(0,o.useState)(null),T=F[0],J=F[1],L=(0,o.useCallback)((function(){E(!0)}),[]),D=(0,o.useCallback)((function(){E(!1)}),[]);(0,o.useEffect)((function(){T&&(T.indeterminate=!!N)}),[T,N]);var I=(0,o.useCallback)((function(e){e.stopPropagation(),h(e.target.checked),e.target.checked?A(!0):A(!1)}),[A,h]),R=(0,d.jsxs)("div",{className:"inline-flex items-center justify-center space-x-1 ".concat(v),children:[(0,d.jsxs)("div",{className:i()({"relative inset-x-0 items-center":!0,"h-5 w-5 min-h-[1rem]":"extra-small"===g,"h-6 w-6 min-h-[1.75rem]":"small"===g,"h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]":"large"===g}),children:[S&&(0,d.jsx)("div",{className:i()({"absolute inset-0 m-auto rounded-full bg-gray-100":!0,"bg-teal-100":P,"h-5 w-5":"extra-small"===g,"h-6 w-6":"small"===g,"h-9 w-9":"large"===g})}),(0,d.jsx)("input",x(x({name:p||f,ref:J,type:"checkbox",id:f,required:n,disabled:t,"aria-labelledby":"label-".concat(f),onChange:I,onClick:function(e){e.stopPropagation()}},k),{},{className:i()({"bg-gray-100 text-gray-300 cursor-not-allowed":t,"absolute inset-0 m-auto border focus:ring-teal-300 focus:ring-offset-0 text-actionPrimary border-gray-300 bg-gray-100 hover:cursor-pointer checkbox":!0,indeterminate:N,"h-3 w-3 rounded-3":"extra-small"===g,"h-4 w-4 rounded-3":"small"===g,"h-6 w-6 rounded-5":"large"===g}),onMouseEnter:L,onMouseLeave:D}))]}),(0,d.jsxs)("label",{id:"label-".concat(f),htmlFor:f,className:i()(y,{"font-medium text-gray-500 dark:text-gray-300 flex flex-row items-center justify-start ml-0":!0}),children:[C&&(0,d.jsx)(c.J,{name:C,color:"text-gray-400",small:!0,className:"h-[16px] -ml-1"}),(0,d.jsx)("span",{className:"ml-1",children:s})]})]});return(0,d.jsx)(d.Fragment,{children:R})}}}]);