(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(7),r=n.n(a),i=n(8),o=n(2),l=n(3),j=n(5),u=n(4),b=(n(13),n(0)),d=function(){return Object(b.jsx)("div",{className:"header"})},m=(n(15),function(e){var t=e.children;return Object(b.jsx)("div",{className:"container",children:t})}),h=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(m,{children:t})]})},O=(n(16),function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)("h2",{className:"title",children:t}),n]})}),p=(n(17),n(24)),f=function(e){var t=e.onIncrement,n=e.options;return Object(b.jsx)("div",{className:"controls",children:n.map((function(e){return Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return t(e)},children:e},Object(p.a)())}))})},x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)(f,{onIncrement:this.props.onIncrement,options:this.props.options})}}]),n}(s.Component),v=(n(18),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,s=e.bad,c=e.total,a=e.positivePercentage;return Object(b.jsxs)("ul",{className:"assessment_list",children:[Object(b.jsxs)("li",{className:"assessment_item",children:[Object(b.jsx)("p",{className:"mark_title",children:"Neutral: "}),Object(b.jsx)("span",{className:"mark",children:n})]}),Object(b.jsxs)("li",{className:"assessment_item",children:[Object(b.jsx)("p",{className:"mark_title",children:"Bad: "}),Object(b.jsx)("span",{className:"mark",children:s})]}),Object(b.jsxs)("li",{className:"assessment_item",children:[Object(b.jsx)("p",{className:"mark_title",children:"Total: "}),Object(b.jsx)("span",{className:"mark",children:c})]}),Object(b.jsxs)("li",{className:"assessment_item",children:[Object(b.jsx)("p",{className:"mark_title",children:"Good: "}),Object(b.jsx)("span",{className:"mark",children:t})]}),Object(b.jsxs)("li",{className:"assessment_item",children:[Object(b.jsx)("p",{className:"mark_title",children:"Positive feedback:"}),Object(b.jsxs)("span",{className:"mark",children:[a,"%"]})]})]})}}]),n}(c.a.Component));v.defaultProps={};var k=v,N=(n(19),function(e){var t=e.message;return Object(b.jsx)("p",{className:"notification",children:t})}),g=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onIncrement=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state,t=e.good,n=e.neutral,s=e.bad;return Math.round(100*t/(t+n+s))}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,s=e.bad,c=this.countTotalFeedback(),a=this.countPositiveFeedbackPercentage(),r=Object.keys(this.state);return Object(b.jsxs)(h,{children:[Object(b.jsx)(O,{title:"Please leave feedback",children:Object(b.jsx)(x,{onIncrement:this.onIncrement,options:r})}),Object(b.jsx)(O,{title:"Statistics",children:0===c?Object(b.jsx)(N,{message:"No feedback given"}):Object(b.jsx)(k,{good:t,neutral:n,bad:s,total:c,positivePercentage:a})})]})}}]),n}(s.Component);n(20),n(21);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.cf1aa0b4.chunk.js.map