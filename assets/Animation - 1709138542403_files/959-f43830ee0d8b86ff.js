"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{41844:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(17654),r=t(87709);function a(e,n){(0,r.Z)(2,arguments);var t=(0,o.Z)(e),a=(0,o.Z)(n);return t.getTime()===a.getTime()}},35863:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(27617),r=t(87709);function a(e,n){(0,r.Z)(2,arguments);var t=(0,o.Z)(e),a=(0,o.Z)(n);return t.getFullYear()===a.getFullYear()}function i(e){return(0,r.Z)(1,arguments),a(e,Date.now())}},98951:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(41844),r=t(87709);function a(e){return(0,r.Z)(1,arguments),(0,o.Z)(e,Date.now())}},51276:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(41844),r=t(27254),a=t(87709);function i(e){return(0,a.Z)(1,arguments),(0,o.Z)(e,(0,r.Z)(Date.now(),1))}},27254:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(83879),r=t(27617),a=t(87709);function i(e,n){(0,a.Z)(2,arguments);var t=(0,r.Z)(e),i=(0,o.Z)(n);return isNaN(i)?new Date(NaN):i?(t.setDate(t.getDate()+i),t):t}function l(e,n){(0,a.Z)(2,arguments);var t=(0,o.Z)(n);return i(e,-t)}},30891:function(e,n,t){t.d(n,{X:function(){return p}});var o=t(77916),r=t(51848),a=t(83849),i=t.n(a),l=t(29901),s=t(95893),c=t(99897),d=t(61250),u=["disabled","label","required","valueLabel","id","onChange","name","additionalClasses","checkboxSize","labelClass","icon","indeterminate"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e){var n=e.disabled,t=(e.label,e.required),o=e.valueLabel,a=void 0===o?"":o,f=e.id,p=void 0===f?(0,s.ZP)("checkbox-"):f,g=e.onChange,v=e.name,b=e.additionalClasses,h=e.checkboxSize,w=void 0===h?"small":h,x=e.labelClass,C=void 0===x?"text-sm":x,k=e.icon,j=e.indeterminate,y=void 0!==j&&j,I=(0,r.Z)(e,u),S=(0,l.useState)(!1),Z=S[0],M=S[1],D=(0,l.useState)(!1),O=D[0],L=D[1],A=(0,l.useState)(null),E=A[0],P=A[1],N=(0,l.useCallback)((function(){M(!0)}),[]),F=(0,l.useCallback)((function(){M(!1)}),[]);(0,l.useEffect)((function(){E&&(E.indeterminate=!!y)}),[E,y]);var _=(0,l.useCallback)((function(e){e.stopPropagation(),g(e.target.checked),e.target.checked?L(!0):L(!1)}),[L,g]),U=(0,d.jsxs)("div",{className:"inline-flex items-center justify-center space-x-1 ".concat(b),children:[(0,d.jsxs)("div",{className:i()({"relative inset-x-0 items-center":!0,"h-5 w-5 min-h-[1rem]":"extra-small"===w,"h-6 w-6 min-h-[1.75rem]":"small"===w,"h-10 w-10 min-h-[2.5rem] min-w-[2.5rem]":"large"===w}),children:[Z&&(0,d.jsx)("div",{className:i()({"absolute inset-0 m-auto rounded-full bg-gray-100":!0,"bg-teal-100":O,"h-5 w-5":"extra-small"===w,"h-6 w-6":"small"===w,"h-9 w-9":"large"===w})}),(0,d.jsx)("input",m(m({name:v||p,ref:P,type:"checkbox",id:p,required:t,disabled:n,"aria-labelledby":"label-".concat(p),onChange:_,onClick:function(e){e.stopPropagation()}},I),{},{className:i()({"bg-gray-100 text-gray-300 cursor-not-allowed":n,"absolute inset-0 m-auto border focus:ring-teal-300 focus:ring-offset-0 text-actionPrimary border-gray-300 bg-gray-100 hover:cursor-pointer checkbox":!0,indeterminate:y,"h-3 w-3 rounded-3":"extra-small"===w,"h-4 w-4 rounded-3":"small"===w,"h-6 w-6 rounded-5":"large"===w}),onMouseEnter:N,onMouseLeave:F}))]}),(0,d.jsxs)("label",{id:"label-".concat(p),htmlFor:p,className:i()(C,{"font-medium text-gray-500 dark:text-gray-300 flex flex-row items-center justify-start ml-0":!0}),children:[k&&(0,d.jsx)(c.J,{name:k,color:"text-gray-400",small:!0,className:"h-[16px] -ml-1"}),(0,d.jsx)("span",{className:"ml-1",children:a})]})]});return(0,d.jsx)(d.Fragment,{children:U})}},55510:function(e,n,t){t.r(n),t.d(n,{GridView:function(){return y},default:function(){return I}});var o=t(29901),r=t(24161),a=t(59715),i=t(62295),l=t(46717),s=t(83849),c=t.n(s),d=t(99871),u=t(45158),f=t(43601),m=t(35948),p=t(61250),g=(0,l.zo)("button",{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:32,fontSize:14,fontWeight:700,padding:"4px 12px",borderRadius:8,backgroundColor:"#00C1A2",border:"none",color:"#FFF",cursor:"pointer",transition:"all 0.3s ease-in-out","&:hover":{backgroundColor:"#00C1A2"},"&:focus":{outline:"none"},"&:active":{backgroundColor:"#00C1A2"}}),v=function(e){var n=e.workspaceId,t=(0,a.SS)(i.AD.FILE_UPLOAD_LIMIT),r=(0,f.Z)({workspaceId:n}).onClick,l=(0,m.g)(n).planName,s=(0,o.useState)(!1),d=s[0],u=s[1],v=(0,o.useCallback)((function(){u(!0)}),[]),b=(0,o.useCallback)((function(){u(!1)}),[]);return(0,p.jsx)("div",{onMouseEnter:v,onMouseLeave:b,className:c()({"absolute top-0 bottom-0 left-0 right-0 w-full h-full z-10 rounded-md":!0}),children:d&&(0,p.jsxs)("div",{className:"flex flex-col items-center h-full p-5 space-y-5 bg-white border rounded-md border-gray-50 bg-opacity-90",children:[(0,p.jsxs)("div",{className:"text-sm text-gray-700 line-clamp-5",children:["You can only access your ",t.value," most recently created files on your current ",l,". Upgrade to access all your files."]}),(0,p.jsx)(g,{onClick:r,children:"Upgrade"})]})})},b=function(e){var n,t,o,r,a,i,l,s=e.animation,c=e.disableMenu,f=e.isSelected,m=e.onClick,g=e.onSelectionChange,b=e.selectable,h=e.selectionMode,w=e.showAddToCollection,x=e.showStatus,C=void 0===x||x,k=e.showUpdatedUser,j=e.workspaceId,y=(0,u.Q)(j);return(0,p.jsxs)("div",{className:"relative rounded-md",children:[y.length>0&&!y.includes(s.id)&&(0,p.jsx)(v,{workspaceId:s.project.workspaceId}),(0,p.jsx)(d.K,{scopes:s.animationPermissionScopes,animation:s,backgroundColor:s.backgroundColor,thumbnail:null===(n=s.fileObject)||void 0===n||null===(t=n.thumbnails)||void 0===t||null===(o=t.webp)||void 0===o||null===(r=o.medium)||void 0===r?void 0:r.url,title:s.name,url:null===(a=s.fileObject)||void 0===a?void 0:a.url,showUpdatedUser:k,username:s.modifiedBy?s.modifiedBy.name:null===(i=s.createdBy)||void 0===i?void 0:i.name,project:null===(l=s.project)||void 0===l?void 0:l.title,date:s.updatedAt,selectable:b,selected:f,onSelectionChange:g,selectionMode:h,showStatus:C,status:s.status,onClick:m,disableMenu:c,showAddToCollection:w,upgradeRequired:y.length>0&&!y.includes(s.id)})]})},h=t(31637),w=t(47381),x=t(49736),C=t(97643),k=t(89012),j=t(34916),y=function(e){var n=e.canLoadMore,t=void 0!==n&&n,a=e.files,i=e.isLoadingMore,l=void 0!==i&&i,s=e.onLoadMore,c=void 0===s?function(){}:s,d=e.onSelectionChange,u=e.onFolderDownloadAllClick,f=e.selectable,m=void 0!==f&&f,g=e.selectedAnimations,v=e.selectionMode,y=e.showUpdatedUser,I=void 0===y||y,S=e.showAddToCollection,Z=void 0!==S&&S,M=e.showStatus,D=void 0===M||M,O=e.onItemClick,L=e.workspaceId,A=(0,r.useRecoilValue)(k.Y),E=(0,C.S)({onIntersecting:c}),P=(0,o.useCallback)((function(e){return function(){d&&d(e.id)}}),[d]),N=(0,o.useCallback)((function(e){return function(n){return O(e,n)}}),[O]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7",children:[a.map((function(e){var n,t,o="file-card-".concat(e.id);return(0,j.qR)(e)?(0,p.jsx)(x.A,{onClick:N(e),title:e.name,username:(null===(n=e.modifiedBy)||void 0===n?void 0:n.name)||(null===(t=e.createdBy)||void 0===t?void 0:t.name),date:e.updatedAt,folder:e,filesCount:e.filesCount,scopes:e.animationPermissionScopes,onDownloadAllClick:u,selectable:m,selectionMode:v,onSelectionChange:P(e),isSelected:!!g&&Boolean(g.some((function(n){return n.id===e.id})))},o):(0,j.QR)(e)?(0,p.jsx)(b,{animation:e,showUpdatedUser:I,showStatus:D,selectable:m,isSelected:!!g&&Boolean(g.some((function(n){return n.id===e.id}))),onSelectionChange:P(e),selectionMode:v,onClick:N(e),disableMenu:A>0,showAddToCollection:Z,workspaceId:L},o):(0,j.xK)(e)?(0,p.jsx)(h.r,{file:e,onClick:N(e),selectable:m,onSelectionChange:P(e),selected:!!g&&Boolean(g.includes(e)),selectionMode:v}):(0,p.jsx)(p.Fragment,{})})),l&&(0,p.jsx)(w.a,{type:"spinner"})]}),t&&!l&&(0,p.jsx)("span",{ref:E})]})},I=y},45158:function(e,n,t){t.d(n,{Q:function(){return d}});var o=t(89303),r=t(29901),a=t(389),i=t(98326),l=t(18807),s=t(80303),c=t(13485),d=function(e){var n=(0,i.hp)(e),t=(0,c.fK)(n),d=(0,a.aM)({query:l.Z$,pause:!e||!n||!t||t!==s.Q.FREE,variables:{workspaceId:e}}),u=(0,o.Z)(d,1)[0];return(0,r.useMemo)((function(){var e;return t===s.Q.FREE&&(null===(e=u.data)||void 0===e?void 0:e.fileIdsWithinLimit)||[]}),[u,t])}},43601:function(e,n,t){var o=t(89303),r=t(59715),a=t(62295),i=t(29901),l=t(389),s=t(98082),c=t(18807);n.Z=function(e){var n,t,d=e.workspaceId,u=(0,r.SS)(a.AD.FILE_UPLOAD_LIMIT),f=(0,l.aM)({query:c.wG,variables:{workspaceId:d},pause:!d}),m=null!==(n=null===(t=(0,o.Z)(f,1)[0].data)||void 0===t?void 0:t.fileCountByWorkspaceId)&&void 0!==n?n:0,p=u?Math.min(Math.round(m/u.value*100),100):0,g=p<80,v=p>=80&&p<=90,b=p>90,h=function(e){e.stopPropagation(),e.preventDefault(),g?(0,s.Z)({source:a.pj.FILE_UPLOAD_LIMIT,workspaceId:d}):v?(0,s.Z)({source:a.pj.FILE_UPLOAD_LIMIT_ALMOST_REACHED,workspaceId:d}):(0,s.Z)({source:a.pj.FILE_UPLOAD_LIMIT_EXCEEDED,workspaceId:d})};return(0,i.useMemo)((function(){return{fileCount:m,percentage:p,isDefaultState:g,isWarningState:v,isDangerState:b,onClick:h}}),[m,p,g,v,b,h])}}}]);