!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var r=i[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QfxN:function(t,r,c){"use strict";c.r(r),c.d(r,"RandomrecipeModule",(function(){return F}));var n=c("ofXK"),a=c("tyNb"),o=c("fXoL"),s=c("OaWH"),b=c("ajt+"),l=c("Tr4x"),u=c("3Pt+"),d=c("NFeN");function p(e,i){if(1&e&&o.Lb(0,"img",25),2&e){var t=o.Zb();o.fc("src",t.recipeThumb,o.lc)}}function g(e,i){if(1&e&&(o.Pb(0,"div"),o.rc(1),o.Pb(2,"mat-icon"),o.rc(3,"add"),o.Ob(),o.Ob()),2&e){var t=o.Zb().$implicit;o.Ab(1),o.tc(" ",t.title," ")}}function f(e,i){if(1&e){var t=o.Qb();o.Pb(0,"li",28),o.Wb("click",(function(){o.kc(t);var e=i.$implicit;return o.Zb(2).addThisRecipeToUserList(e.title)})),o.qc(1,g,4,1,"div",23),o.Ob()}if(2&e){var r=i.$implicit;o.Ab(1),o.ec("ngIf","favourites"!=r.title)}}function h(e,i){if(1&e&&(o.Pb(0,"div",26),o.Pb(1,"li"),o.rc(2,"A\xf1adir esta receta a una de tus listas:"),o.Ob(),o.qc(3,f,2,1,"li",27),o.Ob()),2&e){var t=o.Zb();o.Ab(3),o.ec("ngForOf",t.userLists)}}function m(e,i){if(1&e){var t=o.Qb();o.Pb(0,"button",29),o.Wb("click",(function(){return o.kc(t),o.Zb().clickAddRecipeToFavourite()})),o.Pb(1,"mat-icon"),o.rc(2,"favorite_border"),o.Ob(),o.Ob()}}function v(e,i){if(1&e){var t=o.Qb();o.Pb(0,"button",30),o.Wb("click",(function(){return o.kc(t),o.Zb().removeFromFavourites()})),o.Pb(1,"mat-icon"),o.rc(2,"favorite"),o.Ob(),o.Ob()}}function O(e,i){if(1&e){var t=o.Qb();o.Pb(0,"button",30),o.Wb("click",(function(){return o.kc(t),o.Zb().addToCategory()})),o.Pb(1,"mat-icon"),o.rc(2,"library_add"),o.Ob(),o.Ob()}}function P(e,i){if(1&e){var t=o.Qb();o.Pb(0,"button",30),o.Wb("click",(function(){return o.kc(t),o.Zb().addToCategory()})),o.Pb(1,"span"),o.rc(2,"Cancelar"),o.Ob(),o.Pb(3,"mat-icon"),o.rc(4,"cancel"),o.Ob(),o.Ob()}}function I(e,i){if(1&e&&(o.Pb(0,"li"),o.rc(1),o.ac(2,"titlecase"),o.Pb(3,"b"),o.rc(4),o.Ob(),o.Ob()),2&e){var t=i.$implicit,r=i.index,c=o.Zb();o.Ab(1),o.tc(" ",o.bc(2,3,t)," - "),o.Ab(3),o.uc(" ",c.recipeMeasures[r]*c.numberOfDiners," ",c.recipeMeasuresString[r]," ")}}function k(e,i){if(1&e&&(o.Pb(0,"a",31),o.rc(1,"Ver tutorial en YouTube"),o.Ob()),2&e){var t=o.Zb();o.fc("href",t.recipeYoutubeLink,o.lc)}}function y(e,i){if(1&e){var t=o.Qb();o.Pb(0,"div",32),o.Pb(1,"p",33),o.rc(2,"Comparte la receta con tus amigos:"),o.Ob(),o.Lb(3,"input",34),o.Pb(4,"button",35),o.Wb("click",(function(){return o.kc(t),o.Zb().share()})),o.Pb(5,"mat-icon"),o.rc(6,"file_copy"),o.Ob(),o.Ob(),o.Ob()}if(2&e){var r=o.Zb();o.Ab(3),o.fc("value",r.enlaceReceta)}}function A(e,i){if(1&e&&(o.Pb(0,"h5"),o.rc(1,"Tags: "),o.Pb(2,"em"),o.rc(3),o.Ob(),o.Ob()),2&e){var t=o.Zb();o.Ab(3),o.sc(t.recipeTags)}}var T,C,M,x=[{path:"",component:(T=function(){function t(i,r,c,n){e(this,t),this.route=i,this.appService=r,this.dbService=c,this.clipboard=n,this.recipeIngredients=[],this.recipeMeasures=[],this.recipeMeasuresString=[],this.isFavorited=!1,this.clickAddToCategory=!1,this.logued=!1,this.numberOfDiners=1}var r,c,n;return r=t,(c=[{key:"ngOnInit",value:function(){this.fetchRandomRecipe(),this.userLists=JSON.parse(localStorage.getItem("userRecipeList")),"true"===localStorage.getItem("logued")&&(this.logued=!0),"false"===localStorage.getItem("logued")&&(this.logued=!1)}},{key:"fetchRandomRecipe",value:function(){var e=this;this.recipeIngredients=[],this.recipeMeasures=[],this.appService.getRandomRecipe().subscribe((function(i){e.recipeID=(i=i.meals[0]).idMeal,e.recipeThumb=i.strMealThumb,e.recipeName=i.strMeal,e.recipeCategory=i.strCategory,e.recipeInstructions=i.strInstructions,e.recipeYoutubeLink=i.strYoutube,e.enlaceReceta=window.location.href.replace("random","recipe/"+e.recipeID),i.strTags&&(e.recipeTags=i.strTags.replaceAll(",",", "));for(var t=1;t<=20;t++){var r="strIngredient"+t,c="strMeasure"+t;if(i[r]&&i[c]){e.recipeIngredients.push(i[r]);var n=i[c].split(" ")[0];isNaN(parseInt(n))?n=1:(-1!=n.search("g")&&(n=i[c].split("g")[0]),-1!=n.search("tbs")&&(n=i[c].split("tbs")[0]),-1!=n.search("ml")&&(n=i[c].split("ml")[0]),-1!=n.search("l")&&(n=i[c].split("l")[0]),-1!=n.search("-")&&(n=i[c].split("-")[0]),-1!=n.search("rd")&&(n=i[c].split("rd")[0]),-1!=n.search("/")&&(n=parseInt(i[c].split("/")[0])/parseInt(i[c].split("/")[1])),isNaN(n)&&(n=1));for(var a="",o=1;o<i[c].split(" ").length;o++)a=a+i[c].split(" ")[o]+" ";e.recipeMeasures.push(n),e.recipeMeasuresString.push(a)}else i[r]&&e.recipeIngredients.push(i[r])}console.log(i),e.appService.setSpecificRecipe(i)})),this.isThisRecipeFavourite()&&(this.isFavorited=!0)}},{key:"isThisRecipeFavourite",value:function(){for(var e=JSON.parse(localStorage.getItem("userRecipeList")),i=0;i<e.length;i++)for(var t=0;t<e[i].list.length;t++)if(this.recipeID==e[i].list[t])return!0;return!1}},{key:"clickAddRecipeToFavourite",value:function(){this.isFavorited=!0,this.dbService.addRecipeToCategory(this.recipeID,"favourites")}},{key:"removeFromFavourites",value:function(){this.isFavorited=!1}},{key:"addToCategory",value:function(){this.clickAddToCategory=!this.clickAddToCategory}},{key:"share",value:function(){this.clipboard.copy(this.enlaceReceta)}},{key:"addThisRecipeToUserList",value:function(e){console.log(this.recipeID),this.dbService.addRecipeToCategory(this.recipeID,e)}}])&&i(r.prototype,c),n&&i(r,n),t}(),T.\u0275fac=function(e){return new(e||T)(o.Kb(a.a),o.Kb(s.a),o.Kb(b.a),o.Kb(l.a))},T.\u0275cmp=o.Eb({type:T,selectors:[["app-randomrecipe"]],decls:39,vars:15,consts:[["id","recipe",1,"d-flex","flex-row"],[1,"container"],["id","randomWrapper",1,"d-flex"],[1,"flex-40"],[1,"d-flex","flex-col","flex-60"],[1,"btnGroup"],["tabindex","0",1,"button","btnSearchRecipe",3,"routerLink"],[1,"row"],[1,"four","columns"],["id","randomMealImg",3,"src",4,"ngIf"],["id","categories",4,"ngIf"],[2,"text-align","center"],["style","float: right; border: 0px; padding: 0px",3,"click",4,"ngIf"],["style","float: right; border: 0px; padding: 5px",3,"click",4,"ngIf"],["id","mealMetadata",1,"eight","columns","mealMetadata"],[4,"ngFor","ngForOf"],[1,"columns"],["target","_blank",3,"href",4,"ngIf"],[2,"float","right"],[2,"margin","0.8em"],["type","number","size","1","value","1","min","1",2,"text-align","center","width","5em",3,"ngModel","ngModelChange"],["style","margin-top:2em",4,"ngIf"],[1,"twelve","columns"],[4,"ngIf"],["id","recipeInstructions"],["id","randomMealImg",3,"src"],["id","categories"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[2,"float","right","border","0px","padding","0px",3,"click"],[2,"float","right","border","0px","padding","5px",3,"click"],["target","_blank",3,"href"],[2,"margin-top","2em"],[2,"margin","0"],["type","text","size","30",3,"value"],[2,"border","0px","padding","1em",3,"click"]],template:function(e,i){1&e&&(o.Pb(0,"section",0),o.Pb(1,"div",1),o.Pb(2,"div",2),o.Lb(3,"div",3),o.Pb(4,"div",4),o.Pb(5,"div",5),o.Pb(6,"a",6),o.Pb(7,"span"),o.rc(8),o.Ob(),o.Ob(),o.Lb(9,"br"),o.Lb(10,"br"),o.Ob(),o.Ob(),o.Ob(),o.Pb(11,"div",7),o.Pb(12,"div",8),o.qc(13,p,1,1,"img",9),o.Ob(),o.qc(14,h,4,1,"div",10),o.Pb(15,"div"),o.Pb(16,"h4",11),o.rc(17),o.qc(18,m,3,0,"button",12),o.qc(19,v,3,0,"button",13),o.qc(20,O,3,0,"button",13),o.qc(21,P,5,0,"button",13),o.Ob(),o.Ob(),o.Pb(22,"div",14),o.Pb(23,"ul"),o.qc(24,I,5,5,"li",15),o.Ob(),o.Pb(25,"div",7),o.Pb(26,"div",16),o.qc(27,k,2,1,"a",17),o.Lb(28,"br"),o.Pb(29,"div",18),o.Pb(30,"span",19),o.rc(31,"Cantidad de comensales:"),o.Ob(),o.Pb(32,"input",20),o.Wb("ngModelChange",(function(e){return i.numberOfDiners=e})),o.Ob(),o.Ob(),o.qc(33,y,7,1,"div",21),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(34,"div",7),o.Pb(35,"div",22),o.qc(36,A,4,1,"h5",23),o.Pb(37,"p",24),o.rc(38),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&e&&(o.Ab(6),o.gc("routerLink","/category/",i.recipeCategory,""),o.Ab(2),o.tc("M\xe1s recetas de ",i.recipeCategory,""),o.Ab(5),o.ec("ngIf",!i.clickAddToCategory),o.Ab(1),o.ec("ngIf",i.clickAddToCategory),o.Ab(3),o.tc("",i.recipeName," "),o.Ab(1),o.ec("ngIf",!i.isFavorited&&i.logued),o.Ab(1),o.ec("ngIf",i.isFavorited&&i.logued),o.Ab(1),o.ec("ngIf",!i.clickAddToCategory&&i.logued),o.Ab(1),o.ec("ngIf",i.clickAddToCategory&&i.logued),o.Ab(3),o.ec("ngForOf",i.recipeIngredients),o.Ab(3),o.ec("ngIf",i.recipeYoutubeLink),o.Ab(5),o.ec("ngModel",i.numberOfDiners),o.Ab(1),o.ec("ngIf",i.logued),o.Ab(3),o.ec("ngIf",i.recipeTags),o.Ab(2),o.sc(i.recipeInstructions))},directives:[a.f,n.j,n.i,u.j,u.a,u.g,u.i,d.a],pipes:[n.o],styles:["#recipe[_ngcontent-%COMP%]{margin-top:30px}#mealImg[_ngcontent-%COMP%]{height:80%;width:80%}#mealMetadata[_ngcontent-%COMP%]{font-size:.9em}#mealInstructions[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:0}.heading[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{margin-bottom:10px}img[_ngcontent-%COMP%]{border-radius:25%!important;margin:5%}#categories[_ngcontent-%COMP%]{text-align:center;display:inline!important;list-style:none}"]}),T)}],R=((M=function i(){e(this,i)}).\u0275mod=o.Ib({type:M}),M.\u0275inj=o.Hb({factory:function(e){return new(e||M)},imports:[[a.g.forChild(x)],a.g]}),M),F=((C=function i(){e(this,i)}).\u0275mod=o.Ib({type:C}),C.\u0275inj=o.Hb({factory:function(e){return new(e||C)},imports:[[u.f,d.b,n.b,R]]}),C)}}])}();