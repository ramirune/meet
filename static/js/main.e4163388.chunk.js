(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(31),s=n.n(c),o=(n(38),n(3)),i=n.n(o),u=n(12),l=n(5),d=n(6),h=n(8),p=n(7),m=(n(40),n(66)),f=n(67),j=n(68),v=(n(41),n(69)),b=n(0),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={event:{},collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(b.jsxs)("div",{className:"Event",children:[Object(b.jsx)("h3",{className:"summary",children:e.summary}),Object(b.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),!t&&Object(b.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(b.jsx)("h3",{children:"About Event"}),Object(b.jsx)("a",{href:e.htmlLink,role:"noopener",target:"_blank",children:"See deatails on Google calendar"}),Object(b.jsx)("p",{className:"event-description",children:e.description})]}),Object(b.jsx)(v.a,{variant:"primary",className:"".concat(t?"show":"hide","-details-btn"),onClick:this.handleClick,children:t?"show Details":"Hide Details"})]})}}]),n}(a.Component),g=O,w=(n(43),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)(m.a,{className:"eventlist-container",children:Object(b.jsx)(f.a,{className:"d-flex justify-content-center event-list",children:Object(b.jsx)(j.a,{md:10,sm:12,children:Object(b.jsx)("ul",{className:"EventList row",children:e.map((function(e){return Object(b.jsx)("li",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-12",children:Object(b.jsx)(g,{event:e})},e.id)}))})})})})}}]),n}(a.Component)),x=w,y=(n(44),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(m.a,{className:"CitySearch",children:Object(b.jsx)(f.a,{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)("p",{children:"Choose your nearest city"}),Object(b.jsx)("input",{type:"text",className:"city",placeholder:"Search for a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})})]})]})})})}}]),n}(a.Component)),k=y,S=(n(45),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(m.a,{className:"NumberOfEvents",children:Object(b.jsx)(f.a,{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)("p",{children:"Number of events to show:"}),Object(b.jsx)("input",{type:"number",value:this.props.numberOfEvents,className:"number-of-events",onChange:function(t){return e.props.updateNumberOfEvents(t)}})]})})})}}]),n}(a.Component)),E=S,N=n.p+"static/media/meet.85c3cf69.png";n(46);var T=function(e){return Object(b.jsx)(m.a,{className:"logo-container",children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(j.a,{}),Object(b.jsx)(j.a,{xs:6,children:Object(b.jsx)("img",{src:N,alt:"Meet app logo",className:"logo"})}),Object(b.jsx)(j.a,{})]})})},C=n(33),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],I=n(22),M=n.n(I),q=n(19),L=n.n(q),W=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},B=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://j34cd6uik1.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return L.a.done(),e.abrupt("return",Z);case 4:return e.next=6,R();case 6:if(!(t=e.sent)){e.next=16;break}return D(),n="https://j34cd6uik1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=12,M.a.get(n);case 12:return(a=e.sent).data&&(r=W(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),L.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,B(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,M.a.get("https://j34cd6uik1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return c=e.sent,s=c.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).updateEvents=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A().then((function(e){var n="all"===t?e:e.filter((function(e){return e.location===t}));a.mounted&&a.setState({events:n.slice(0,a.state.numberOfEvents),currentLocation:t})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.updateNumberOfEvents=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.target.value?parseInt(t.target.value):32)<1||n>32?a.setState({numberOfEvents:"32"}):(a.setState({errorText:"",numberOfEvents:n}),a.updateEvents(a.state.currentLocation,a.state.numberOfEvents));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getData=function(){if(a.mounted){var e=a.state,t=e.locations,n=e.events;return t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))}},a.state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.numberOfEvents;this.mounted=!0,A().then((function(n){e.setState({events:n.slice(0,t),locations:W(n)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(b.jsx)(m.a,{className:"app-container",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f.a,{children:Object(b.jsx)(T,{})}),Object(b.jsxs)(f.a,{children:[Object(b.jsx)(j.a,{children:Object(b.jsx)(k,{locations:this.state.locations,updateEvents:this.updateEvents})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(E,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents})})]}),Object(b.jsx)(f.a,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(x,{events:this.state.events})})})]})})}}]),n}(a.Component),F=U;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.e4163388.chunk.js.map