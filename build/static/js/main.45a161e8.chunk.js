(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,n){t.exports=n(52)},31:function(t,e,n){},32:function(t,e,n){},35:function(t,e,n){},39:function(t,e,n){t.exports=n.p+"static/media/sonic.058bc01f.gif"},4:function(t,e){t.exports="AIzaSyCkF2kq7ElyH4OtWelckXaKktYWqIi86dU"},52:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),o=n(10),r=n.n(o),i=(n(31),n(11)),c=n(12),l=n(15),u=n(13),d=n(16),p=(n(32),n(5)),h=n.n(p),g=n(9),m=(n(35),n(56)),f=n(57),w=n(55),y=n(54),x=n(20),k=n(4),b=n.n(k);function v(t,e,n){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(h.a.mark(function t(e,n,a){var s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"https://cors-anywhere.herokuapp.com/",s="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins="+n+"&destinations="+a+"&key="+e,t.next=6,fetch(s).then(function(t){return t.json()}).then(function(t){return t.rows[0].elements[0].duration.value}).catch(function(t){console.log(t)});case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}var C=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).toggle=function(){n.setState({dropdownOpen:!n.state.dropdownOpen})},n.toggleButton1=function(){n.setState({message:1,on:!0,on2:!1,on3:!1,currentClick:1})},n.toggleButton2=function(){n.setState({message:2,on:!0,on2:!0,on3:!1,currentClick:2})},n.toggleButton3=function(){n.setState({message:3,on:!0,on2:!0,on3:!0,currentClick:3})},n.locations=function(){var t={};t.start=n.state.start,t.first=n.state.first,t.second=n.state.second,t.third=n.state.third},n.state={message:"Choose...",loading:!1,dropdownOpen:!1,msg:t.message,numItems:3,currentClick:0,on:!1,on2:!1,on3:!1,start:null,first:null,second:null,third:null,input1:"",input2:"",input3:""},n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"clicked",value:function(){var t=this;if(this.setState({loading:!0}),setTimeout(function(){t.setState({loading:!1})},3e3),0==this.state.currentClick){if(null==this.state.start)return void window.alert("Please enter an address for all the boxes");var e="https://www.google.com/maps/dir/"+this.state.start.place;window.open(e,"Google Maps")}if(1==this.state.currentClick){if(null==this.state.start||null==this.state.first)return void window.alert("Please enter an address for all the boxes");e="https://www.google.com/maps/dir/"+this.state.start.place+"/";var n=this.state.start.place,a=this.state.first.place;Object(g.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(b.a,n,a);case 2:o=t.sent,console.log("dist1 is "+o),e+=a,window.open(e,"Google Maps");case 6:case"end":return t.stop()}},t)}))()}else if(2==this.state.currentClick){if(null==this.state.start||null==this.state.first||null==this.state.second)return void window.alert("Please enter an address for all the boxes");e="https://www.google.com/maps/dir/"+this.state.start.place+"/";n=this.state.start.place,a=this.state.first.place;var s=this.state.second.place;Object(g.a)(h.a.mark(function t(){var i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(b.a,n,a);case 2:return o=t.sent,t.next=5,v(b.a,n,s);case 5:r=t.sent,console.log("dist1 is "+o),console.log("dist2 is "+r),(i=Math.min(o,r))==o?(console.log("bestDur is dist1: "+i),e=e+a+"/"+s,window.open(e,"Google Maps")):i==r&&(console.log("bestDur is dist2: "+i),e=e+s+"/"+a,window.open(e,"Google Maps"));case 10:case"end":return t.stop()}},t)}))()}else if(3==this.state.currentClick){if(null==this.state.start||null==this.state.first||null==this.state.second||null==this.state.third)return void window.alert("Please enter an address for all the boxes");var o,r,i;e="https://www.google.com/maps/dir/"+this.state.start.place+"/";n=this.state.start.place,a=this.state.first.place,s=this.state.second.place;var c=this.state.third.place;Object(g.a)(h.a.mark(function t(){var l;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(b.a,n,a);case 2:return o=t.sent,t.next=5,v(b.a,n,s);case 5:return r=t.sent,t.next=8,v(b.a,n,c);case 8:if(i=t.sent,console.log("dist1 is "+o),console.log("dist2 is "+r),console.log("dist3 is "+i),(l=Math.min(o,r,i))!=o){t.next=26;break}return console.log("bestDur is dist1: "+l),e=e+a+"/",t.next=18,v(b.a,a,s);case 18:return o=t.sent,t.next=21,v(b.a,a,c);case 21:r=t.sent,(l=Math.min(o,r))==o?(e=e+s+"/"+c,window.open(e,"Google Maps")):l==r&&(e=e+c+"/"+s,window.open(e,"Google Maps")),t.next=50;break;case 26:if(l!=r){t.next=39;break}return console.log("bestDur is dist2: "+l),e=e+s+"/",t.next=31,v(b.a,s,a);case 31:return o=t.sent,t.next=34,v(b.a,s,c);case 34:r=t.sent,(l=Math.min(o,r))===o?(e=e+a+"/"+c,window.open(e,"Google Maps")):l===r&&(e=e+c+"/"+a,window.open(e,"Google Maps")),t.next=50;break;case 39:if(l!=i){t.next=50;break}return console.log("bestDur is dist3: "+l),e=e+c+"/",t.next=44,v(b.a,c,s);case 44:return o=t.sent,t.next=47,v(b.a,c,a);case 47:r=t.sent,(l=Math.min(o,r))===o?(e=e+s+"/"+a,window.open(e,"Google Maps")):l===r&&(e=e+a+"/"+s,window.open(e,"Google Maps"));case 50:case"end":return t.stop()}},t)}))()}}},{key:"render",value:function(){var t=this;this.props.message;return s.a.createElement("div",{className:"Button"},s.a.createElement("h4",null,"Please enter a starting address :"),s.a.createElement("p",{id:"regionp"},"(Within United States, Canada, or Mexio)"),s.a.createElement(x.a,{type:"text",ref:this.inputStart,value:"Starting Address",apiKey:b.a,language:"en",country:"country:ca|country:us|country:mx",coordinates:!0,locationBoxStyle:"input",locationListStyle:"slide",placeholder:"Address, City, State ZIP",onChange:function(e){t.setState({start:e})}}),s.a.createElement("p",{id:"addressp"},"Select the number of stops in the route, followed by their addresses:"),s.a.createElement(m.a,{id:"dropDownSelect",isOpen:this.state.dropdownOpen,toggle:this.toggle},s.a.createElement(f.a,{caret:!0},this.state.message),s.a.createElement(w.a,null,s.a.createElement(y.a,{onClick:this.toggleButton1},"1"),s.a.createElement(y.a,{onClick:this.toggleButton2},"2"),s.a.createElement(y.a,{onClick:this.toggleButton3},"3"))),s.a.createElement("div",{className:"inputG"},this.state.on&&s.a.createElement(x.a,{apiKey:b.a,ref:"input1",language:"en",country:"country:ca|country:us|country:mx",coordinates:!0,locationBoxStyle:"inputA",locationListStyle:"slide",placeholder:"Address, City, State ZIP",onChange:function(e){t.setState({first:e})}}),this.state.on2&&s.a.createElement(x.a,{apiKey:b.a,ref:"input2",language:"en",country:"country:ca|country:us|country:mx",coordinates:!0,locationBoxStyle:"inputA",locationListStyle:"slide",placeholder:"Address, City, State ZIP",onChange:function(e){t.setState({second:e})}}),this.state.on3&&s.a.createElement(x.a,{apiKey:b.a,ref:"input3",key:1,language:"en",country:"country:ca|country:us|country:mx",coordinates:!0,locationBoxStyle:"inputA",locationListStyle:"slide",placeholder:"Address, City, State ZIP",onChange:function(e){t.setState({third:e})}})),s.a.createElement("div",{className:"Submission"},s.a.createElement("button",{onClick:function(e){t.clicked()}}," Submit")),this.state.loading&&s.a.createElement("h5",{className:"loading"},"Loading..."),this.state.loading&&s.a.createElement("img",{className:"image",src:n(39)}))}}]),e}(a.Component),E=n(19),O=(a.Component,function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(C,{message:"Choose..."})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.45a161e8.chunk.js.map