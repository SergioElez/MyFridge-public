(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{UrDz:function(r,t,s){"use strict";s.r(t),s.d(t,"RegisterModule",(function(){return L}));var e=s("ofXK"),n=s("tyNb"),i=s("mrSG"),o=s("3Pt+"),a=s("fXoL"),b=s("lGQG"),c=s("ajt+"),l=s("Wp6s");function m(r,t){1&r&&(a.Pb(0,"span",9),a.rc(1,"*Ya existe una cuenta con el mismo correo "),a.Lb(2,"br"),a.Lb(3,"br"),a.Ob())}function g(r,t){1&r&&(a.Pb(0,"span",9),a.rc(1,"*Faltan campos por rellenar "),a.Lb(2,"br"),a.Lb(3,"br"),a.Ob())}function d(r,t){1&r&&(a.Pb(0,"span",9),a.rc(1,"*El correo no es valido "),a.Lb(2,"br"),a.Lb(3,"br"),a.Ob())}function u(r,t){1&r&&(a.Pb(0,"span",9),a.rc(1,"*Las contrase\xf1as no son iguales "),a.Lb(2,"br"),a.Lb(3,"br"),a.Ob())}function w(r,t){1&r&&(a.Pb(0,"span",9),a.rc(1,"*Las contrase\xf1as deben tener minimo 6 caracteres "),a.Lb(2,"br"),a.Lb(3,"br"),a.Ob())}const h=function(){return["/login"]},p=[{path:"",component:(()=>{class r{constructor(r,t,s){this.authService=r,this.dbService=t,this.router=s,this.registerForm=new o.d({name:new o.b(""),email:new o.b(""),password:new o.b(""),password2:new o.b("")}),this.submit=!1,this.sameEmail=!1,this.wrongFields=!0,this.wrongEmail=!0,this.wrongPasswords=!0,this.wrongPasswordsLength=!0}ngOnInit(){}onRegister(){return Object(i.a)(this,void 0,void 0,(function*(){const{name:r,email:t,password:s}=this.registerForm.value;if(this.validRegister()){var e=yield this.authService.register(t,s);"auth/email-already-in-use"===e?(this.wrongFields=!1,this.wrongEmail=!1,this.wrongPasswords=!1,this.wrongPasswordsLength=!1,this.sameEmail=!0):(this.dbService.createUser({id:e.user.uid,name:r,email:t}),localStorage.setItem("logued","true"),this.router.navigate(["/profile"]))}}))}validRegister(){const{name:r,email:t,password:s,password2:e}=this.registerForm.value;return this.submit=!0,""===r||""===t||""===s||""===e?(this.wrongFields=!0,this.wrongEmail=!1,this.wrongPasswords=!1,this.wrongPasswordsLength=!1,!1):this.validateEmail(t)?s!==e?(this.wrongFields=!1,this.wrongEmail=!1,this.wrongPasswords=!0,this.wrongPasswordsLength=!1,!1):s.length<6&&e.length<6?(this.wrongFields=!1,this.wrongEmail=!1,this.wrongPasswords=!1,this.wrongPasswordsLength=!0,!1):(this.wrongFields=!1,this.wrongEmail=!1,this.wrongPasswords=!1,this.wrongPasswordsLength=!1,!0):(this.wrongFields=!1,this.wrongEmail=!0,this.wrongPasswords=!1,this.wrongPasswordsLength=!1,!1)}validateEmail(r){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase())}}return r.\u0275fac=function(t){return new(t||r)(a.Kb(b.a),a.Kb(c.a),a.Kb(n.e))},r.\u0275cmp=a.Eb({type:r,selectors:[["app-register"]],decls:25,vars:8,consts:[[1,"container"],[3,"formGroup","ngSubmit"],["matInput","","type","text","placeholder","Nombre","formControlName","name","required",""],["matInput","","type","email","placeholder","Correo","formControlName","email","required",""],["matInput","","type","password","placeholder","Contrase\xf1a","formControlName","password","required",""],["matInput","","type","password","placeholder","Contrase\xf1a otra vez","formControlName","password2","required",""],["class","wrongField",4,"ngIf"],["type","submit","color","primary",1,"buttonSubmit"],["tabindex","0",1,"link",3,"routerLink"],[1,"wrongField"]],template:function(r,t){1&r&&(a.Pb(0,"div",0),a.Pb(1,"mat-card"),a.Pb(2,"mat-card-content"),a.Pb(3,"form",1),a.Wb("ngSubmit",(function(){return t.onRegister()})),a.Pb(4,"h2"),a.rc(5,"Registro"),a.Ob(),a.Pb(6,"div"),a.Lb(7,"input",2),a.Ob(),a.Pb(8,"div"),a.Lb(9,"input",3),a.Ob(),a.Pb(10,"div"),a.Lb(11,"input",4),a.Ob(),a.Pb(12,"div"),a.Lb(13,"input",5),a.Ob(),a.qc(14,m,4,0,"span",6),a.qc(15,g,4,0,"span",6),a.qc(16,d,4,0,"span",6),a.qc(17,u,4,0,"span",6),a.qc(18,w,4,0,"span",6),a.Pb(19,"button",7),a.rc(20,"Registrar"),a.Ob(),a.Ob(),a.Ob(),a.Pb(21,"p"),a.rc(22,"Ya tienes cuenta? "),a.Pb(23,"a",8),a.rc(24," Logueate"),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&r&&(a.Ab(3),a.ec("formGroup",t.registerForm),a.Ab(11),a.ec("ngIf",t.sameEmail&&t.submit),a.Ab(1),a.ec("ngIf",t.wrongFields&&t.submit),a.Ab(1),a.ec("ngIf",t.wrongEmail&&t.submit),a.Ab(1),a.ec("ngIf",t.wrongPasswords&&t.submit),a.Ab(1),a.ec("ngIf",t.wrongPasswordsLength&&t.submit),a.Ab(5),a.ec("routerLink",a.hc(7,h)))},directives:[l.a,l.c,o.m,o.h,o.e,o.a,o.g,o.c,o.l,e.j,n.f],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2em auto;text-align:center}"]}),r})()}];let f=(()=>{class r{}return r.\u0275mod=a.Ib({type:r}),r.\u0275inj=a.Hb({factory:function(t){return new(t||r)},imports:[[n.g.forChild(p)],n.g]}),r})();var P=s("7of8");let L=(()=>{class r{}return r.\u0275mod=a.Ib({type:r}),r.\u0275inj=a.Hb({factory:function(t){return new(t||r)},imports:[[e.b,f,P.a,o.k]]}),r})()}}]);