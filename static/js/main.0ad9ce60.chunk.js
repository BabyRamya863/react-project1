(this["webpackJsonpreact-project1"]=this["webpackJsonpreact-project1"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(23),t(24),t(8)),i=t(9),s=t.n(i),m=t(11),u=t(1);function d(e){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return console.log(e)}));var a=o.profile[e.location.data.id];return console.log(a.basics.name),r.a.createElement("div",{className:"row justify-content-center",style:{backgroundColor:"black"}},r.a.createElement("div",{className:"col-lg-3 m-2"},r.a.createElement("div",{className:"card shadow",style:{backgroundColor:"#A9A9A9"}},r.a.createElement("div",{class:"card-body text-center"},r.a.createElement("div",null,r.a.createElement("img",{src:s.a,alt:"profileicon",style:{width:"30%"}}),r.a.createElement("h2",null,a.basics.name),r.a.createElement("h4",{className:"text-secondary"},a.basics.role),r.a.createElement("a",{href:"tel:"+a.basics.phone},r.a.createElement("h4",{style:{color:"white"}},a.basics.phone)),r.a.createElement("a",{href:"mailto::"+a.basics.email},r.a.createElement("h4",{style:{color:"white"}},a.basics.email)))))),r.a.createElement("div",{className:"col-lg-8 m-2"},r.a.createElement("div",{className:"card shadow",style:{backgroundColor:"#A9A9A9"}},r.a.createElement("div",{class:"card body",style:{backgroundColor:"#A9A9A9"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Resume"),r.a.createElement("h4",null,"Career Objective:"),r.a.createElement("hr",null),r.a.createElement("p",null,a.career),r.a.createElement("h4",null,"Education:"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Qualification:"+a.Education.qualification),r.a.createElement("li",null,"Course:"+a.Education.course),r.a.createElement("li",null,"University:"+a.Education.university),r.a.createElement("li",null,"PassingYear:"+a.Education.passingyear)),r.a.createElement("h4",null,"Skills And Interest"),r.a.createElement("hr",null),r.a.createElement("ol",null,r.a.createElement("li",null,a.SkillsandInterest.s1),r.a.createElement("li",null,a.SkillsandInterest.s2),r.a.createElement("li",null,a.SkillsandInterest.s3),r.a.createElement("li",null,a.SkillsandInterest.s4)),r.a.createElement("h4",null,"Projects"),r.a.createElement("hr",null),r.a.createElement("p",null,"*"+a.projects.p1),r.a.createElement("p",null,"*"+a.projects.p2),r.a.createElement("h4",null,"Personal Information"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"DateofBirth:"+a.personal.DOB),r.a.createElement("li",null,"Age:"+a.personal.age),r.a.createElement("li",null,"Gender:"+a.personal.Gender),r.a.createElement("li",null,"Mother:"+a.personal.Mother),r.a.createElement("li",null,"Father:"+a.personal.Father),r.a.createElement("li",null,"Place_of_Birth:"+a.personal.Place_of_Birth))))))}var h=function(){var e=o.profile;return console.log(e),r.a.createElement("container",null,r.a.createElement("div",{className:"row"},e.map((function(e,a){return r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-10 mt-1",key:a},r.a.createElement("div",{className:"card",style:{backgroundColor:"#A9A9A9"}},r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("img",{src:s.a,alt:"profileicon",style:{width:"30%"}}),r.a.createElement("h2",null,e.basics.name),r.a.createElement("h4",{className:"text-secondary"},e.basics.role),r.a.createElement("a",{href:"tel:"+e.basics.phone},r.a.createElement("h4",{style:{color:"white"}},e.basics.phone)),r.a.createElement("a",{href:"mailto::"+e.basics.email},r.a.createElement("h4",{style:{color:"white"}},e.basics.email)),r.a.createElement(m.b,{to:{pathname:"/resume",data:{id:a}},className:"btn btn-primary"},"View Profile"))))}))))},p=function(){return r.a.createElement(m.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:h}),r.a.createElement(u.a,{exact:!0,path:"/resume",component:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"profile":[{"basics":{"name":"K.Baby Ramya","role":"Engineer","phone":"8761394810","email":"ramyaroyal@gmail.com"},"career":"As a fresher to give my Software Carrier a solid start by joining,eminent and highly professional software company and contribute to the success of the company by outstanding performances and there advancing my career","Education":{"qualification":"Under Graduate","course":"B-tech","university":"Rgukt,Rk Valley","passingyear":"2022","CGPA":"9.3"},"SkillsandInterest":{"s1":"*Computer literate(Programming,Web Development)","s2":"1.C-Langauge","s3":"2.Java","s4":"3.Front-end Developer(HTML,CSS,Java Script,Jquery)"},"projects":{"p1":"* I did a project in my B-Tech(1st year)regarding IPL cricket match","p2":"* I develop a website regarding Coding Club(regarding full stack developement)"},"personal":{"DOB":"May17,2000","age":"20","Gender":"Female","Mother":"Swarnalatha.k","Father":"Muniraja.k","place_of_Birth":"Rompicherla,Chittoor District"}},{"basics":{"name":"K.Maneesha","role":"Charted Accountant","phone":"8761393419","email":"maneesha1@gmail.com"},"career":"As a fresher to give my Software Carrier a solid start by joining,eminent and highly professional software company and contribute to the success of the company by outstanding performances and there advancing my career","Education":{"qualification":"Under Graduate","course":"CA","university":"ICAI Institue","passingyear":"2022","CGPA":"8.0%"},"SkillsandInterest":{"s1":"*Accountant","s2":"1.FinancialReporter","s3":"2.Cost Accountant","s4":"3.Good Communication Skills"},"projects":{"p1":"* I did a 3 years articleship in VishnuDaya","p2":"* Auditing and Accounting services for product and service based companies."},"personal":{"DOB":"April7th,1998","age":"22","Gender":"Female","Mother":"Swarnalatha.k","Father":"Muniraja.k","place_of_Birth":"Rompicherla,Chittoor District"}},{"basics":{"name":"A.Vamsi Krishna","role":"Charted Accountant","phone":"9661394810","email":"vamsi0128@gmial.com"},"career":"As a fresher to give my Software Carrier a solid start by joining,eminent and highly professional software company and contribute to the success of the company by outstanding performances and there advancing my career","Education":{"qualification":"Under Graduate","course":"CA","university":"ICAI Institue","passingyear":"2022","CGPA":"8.0%"},"SkillsandInterest":{"s1":"*Accountant","s2":"1.FinancialReporter","s3":"2.Cost Accountant","s4":"3.Good Communication Skills"},"projects":{"p1":"* I did a 3 years articleship in VishnuDaya","p2":"* Auditing and Accounting services for product and service based companies."},"personal":{"DOB":"August19th,1997","age":"23","Gender":"Male","Mother":"Surekha.A","Father":"Ramesh.A","place_of_Birth":"Renigunta,Chittoor District"}}]}')},9:function(e,a,t){e.exports=t.p+"static/media/profileicon.6f88fc6b.svg"}},[[18,1,2]]]);
//# sourceMappingURL=main.0ad9ce60.chunk.js.map