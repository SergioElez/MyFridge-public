(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{vLXL:function(e,t,i){"use strict";i.r(t),i.d(t,"RecipeModule",(function(){return T}));var c=i("ofXK"),r=i("tyNb"),n=i("fXoL"),s=i("OaWH"),o=i("ajt+"),a=i("Tr4x"),b=i("3Pt+"),l=i("NFeN");function d(e,t){if(1&e&&n.Lb(0,"img",25),2&e){const e=n.Zb();n.fc("src",e.recipeThumb,n.lc)}}function p(e,t){if(1&e&&(n.Pb(0,"div"),n.rc(1),n.Pb(2,"mat-icon"),n.rc(3,"add"),n.Ob(),n.Ob()),2&e){const e=n.Zb().$implicit;n.Ab(1),n.tc(" ",e.title," ")}}function g(e,t){if(1&e){const e=n.Qb();n.Pb(0,"li",28),n.Wb("click",(function(){n.kc(e);const i=t.$implicit;return n.Zb(2).addThisRecipeToUserList(i.title)})),n.qc(1,p,4,1,"div",23),n.Ob()}if(2&e){const e=t.$implicit;n.Ab(1),n.ec("ngIf","favourites"!=e.title)}}function u(e,t){if(1&e&&(n.Pb(0,"div",26),n.Pb(1,"li"),n.rc(2,"A\xf1adir esta receta a una de tus listas:"),n.Ob(),n.qc(3,g,2,1,"li",27),n.Ob()),2&e){const e=n.Zb();n.Ab(3),n.ec("ngForOf",e.userLists)}}function f(e,t){if(1&e){const e=n.Qb();n.Pb(0,"button",29),n.Wb("click",(function(){return n.kc(e),n.Zb().clickAddRecipeToFavourite()})),n.Pb(1,"mat-icon"),n.rc(2,"favorite_border"),n.Ob(),n.Ob()}}function h(e,t){if(1&e){const e=n.Qb();n.Pb(0,"button",30),n.Wb("click",(function(){return n.kc(e),n.Zb().removeFromFavourites()})),n.Pb(1,"mat-icon"),n.rc(2,"favorite"),n.Ob(),n.Ob()}}function m(e,t){if(1&e){const e=n.Qb();n.Pb(0,"button",30),n.Wb("click",(function(){return n.kc(e),n.Zb().addToCategory()})),n.Pb(1,"mat-icon"),n.rc(2,"library_add"),n.Ob(),n.Ob()}}function O(e,t){if(1&e){const e=n.Qb();n.Pb(0,"button",30),n.Wb("click",(function(){return n.kc(e),n.Zb().addToCategory()})),n.Pb(1,"span"),n.rc(2,"Cancelar"),n.Ob(),n.Pb(3,"mat-icon"),n.rc(4,"cancel"),n.Ob(),n.Ob()}}function v(e,t){if(1&e&&(n.Pb(0,"li"),n.rc(1),n.ac(2,"titlecase"),n.Pb(3,"b"),n.rc(4),n.Ob(),n.Ob()),2&e){const e=t.$implicit,i=t.index,c=n.Zb();n.Ab(1),n.tc(" ",n.bc(2,3,e)," - "),n.Ab(3),n.uc(" ",c.recipeMeasures[i]*c.numberOfDiners," ",c.recipeMeasuresString[i]," ")}}function P(e,t){if(1&e&&(n.Pb(0,"a",31),n.rc(1,"Ver tutorial en YouTube"),n.Ob()),2&e){const e=n.Zb();n.fc("href",e.recipeYoutubeLink,n.lc)}}function I(e,t){if(1&e){const e=n.Qb();n.Pb(0,"div",32),n.Pb(1,"p",33),n.rc(2,"Comparte la receta con tus amigos:"),n.Ob(),n.Lb(3,"input",34),n.Pb(4,"button",35),n.Wb("click",(function(){return n.kc(e),n.Zb().share()})),n.Pb(5,"mat-icon"),n.rc(6,"file_copy"),n.Ob(),n.Ob(),n.Ob()}if(2&e){const e=n.Zb();n.Ab(3),n.fc("value",e.enlaceReceta)}}function k(e,t){if(1&e&&(n.Pb(0,"h5"),n.rc(1,"Tags: "),n.Pb(2,"em"),n.rc(3),n.Ob(),n.Ob()),2&e){const e=n.Zb();n.Ab(3),n.sc(e.recipeTags)}}const y=[{path:":id",component:(()=>{class e{constructor(e,t,i,c,r){this.route=e,this.appService=t,this.dbService=i,this.clipboard=c,this.router=r,this.recipeIngredients=[],this.recipeMeasures=[],this.recipeMeasuresString=[],this.isFavorited=!1,this.clickAddToCategory=!1,this.numberOfDiners=1}ngOnInit(){console.log(this.router.url),this.getRecipeID(),this.fetchRecipe(this.recipeID),this.enlaceReceta=window.location.href,this.userLists=JSON.parse(localStorage.getItem("userRecipeList")),console.log(this.userLists),"true"===localStorage.getItem("logued")&&(this.logued=!0),"false"===localStorage.getItem("logued")&&(this.logued=!1),console.log("this.logued"+this.logued)}getRecipeID(){this.recipeID=this.route.snapshot.paramMap.get("id")}fetchRecipe(e){this.recipeIngredients=[],this.recipeMeasures=[],this.appService.getRecipe(e).subscribe(e=>{this.recipeThumb=(e=e.meals[0]).strMealThumb,this.recipeName=e.strMeal,this.recipeCategory=e.strCategory,this.recipeInstructions=e.strInstructions,this.recipeYoutubeLink=e.strYoutube,e.strTags&&(this.recipeTags=e.strTags.replaceAll(",",", "));for(let t=1;t<=20;t++){let i="strIngredient"+t,c="strMeasure"+t;if(e[i]&&e[c]){this.recipeIngredients.push(e[i]);let t=e[c].split(" ")[0];isNaN(parseInt(t))?t=1:(-1!=t.search("g")&&(t=e[c].split("g")[0]),-1!=t.search("tbs")&&(t=e[c].split("tbs")[0]),-1!=t.search("ml")&&(t=e[c].split("ml")[0]),-1!=t.search("l")&&(t=e[c].split("l")[0]),-1!=t.search("-")&&(t=e[c].split("-")[0]),-1!=t.search("rd")&&(t=e[c].split("rd")[0]),-1!=t.search("/")&&(t=parseInt(e[c].split("/")[0])/parseInt(e[c].split("/")[1])),isNaN(t)&&(t=1));let r="";for(let i=1;i<e[c].split(" ").length;i++)r=r+e[c].split(" ")[i]+" ";this.recipeMeasures.push(t),this.recipeMeasuresString.push(r)}else e[i]&&this.recipeIngredients.push(e[i])}console.log(e),this.appService.setSpecificRecipe(e)}),this.isThisRecipeFavourite()&&(this.isFavorited=!0)}isThisRecipeFavourite(){for(var e=JSON.parse(localStorage.getItem("userRecipeList")),t=0;t<e.length;t++)for(var i=0;i<e[t].list.length;i++)if(this.recipeID==e[t].list[i])return!0;return!1}clickAddRecipeToFavourite(){this.isFavorited=!0,this.dbService.addRecipeToCategory(this.recipeID,"favourites")}removeFromFavourites(){this.isFavorited=!1}addToCategory(){this.clickAddToCategory=!this.clickAddToCategory}share(){this.clipboard.copy(this.enlaceReceta)}addThisRecipeToUserList(e){this.dbService.addRecipeToCategory(this.recipeID,e),console.log(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(r.a),n.Kb(s.a),n.Kb(o.a),n.Kb(a.a),n.Kb(r.e))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-recipe"]],decls:39,vars:15,consts:[["id","recipe",1,"d-flex","flex-row"],[1,"container"],["id","randomWrapper",1,"d-flex"],[1,"flex-40"],[1,"d-flex","flex-col","flex-60"],[1,"btnGroup"],["tabindex","0",1,"button","btnSearchRecipe",3,"routerLink"],[1,"row"],[1,"four","columns"],["id","randomMealImg",3,"src",4,"ngIf"],["id","categories",4,"ngIf"],[2,"text-align","center"],["style","float: right; border: 0px; padding: 0px",3,"click",4,"ngIf"],["style","float: right; border: 0px; padding: 5px",3,"click",4,"ngIf"],["id","mealMetadata",1,"eight","columns","mealMetadata"],[4,"ngFor","ngForOf"],[1,"columns"],["target","_blank",3,"href",4,"ngIf"],[2,"float","right"],[2,"margin","0.8em"],["type","number","size","1","value","1","min","1",2,"text-align","center","width","5em",3,"ngModel","ngModelChange"],["style","margin-top:2em",4,"ngIf"],[1,"twelve","columns"],[4,"ngIf"],["id","recipeInstructions"],["id","randomMealImg",3,"src"],["id","categories"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[2,"float","right","border","0px","padding","0px",3,"click"],[2,"float","right","border","0px","padding","5px",3,"click"],["target","_blank",3,"href"],[2,"margin-top","2em"],[2,"margin","0"],["type","text","size","30",3,"value"],[2,"border","0px","padding","1em",3,"click"]],template:function(e,t){1&e&&(n.Pb(0,"section",0),n.Pb(1,"div",1),n.Pb(2,"div",2),n.Lb(3,"div",3),n.Pb(4,"div",4),n.Pb(5,"div",5),n.Pb(6,"a",6),n.Pb(7,"span"),n.rc(8),n.Ob(),n.Ob(),n.Lb(9,"br"),n.Lb(10,"br"),n.Ob(),n.Ob(),n.Ob(),n.Pb(11,"div",7),n.Pb(12,"div",8),n.qc(13,d,1,1,"img",9),n.Ob(),n.qc(14,u,4,1,"div",10),n.Pb(15,"div"),n.Pb(16,"h4",11),n.rc(17),n.qc(18,f,3,0,"button",12),n.qc(19,h,3,0,"button",13),n.qc(20,m,3,0,"button",13),n.qc(21,O,5,0,"button",13),n.Ob(),n.Ob(),n.Pb(22,"div",14),n.Pb(23,"ul"),n.qc(24,v,5,5,"li",15),n.Ob(),n.Pb(25,"div",7),n.Pb(26,"div",16),n.qc(27,P,2,1,"a",17),n.Lb(28,"br"),n.Pb(29,"div",18),n.Pb(30,"span",19),n.rc(31,"Cantidad de comensales:"),n.Ob(),n.Pb(32,"input",20),n.Wb("ngModelChange",(function(e){return t.numberOfDiners=e})),n.Ob(),n.Ob(),n.qc(33,I,7,1,"div",21),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(34,"div",7),n.Pb(35,"div",22),n.qc(36,k,4,1,"h5",23),n.Pb(37,"p",24),n.rc(38),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&e&&(n.Ab(6),n.gc("routerLink","/category/",t.recipeCategory,""),n.Ab(2),n.tc("M\xe1s recetas de ",t.recipeCategory,""),n.Ab(5),n.ec("ngIf",!t.clickAddToCategory),n.Ab(1),n.ec("ngIf",t.clickAddToCategory),n.Ab(3),n.tc("",t.recipeName," "),n.Ab(1),n.ec("ngIf",!t.isFavorited&&t.logued),n.Ab(1),n.ec("ngIf",t.isFavorited&&t.logued),n.Ab(1),n.ec("ngIf",!t.clickAddToCategory&&t.logued),n.Ab(1),n.ec("ngIf",t.clickAddToCategory&&t.logued),n.Ab(3),n.ec("ngForOf",t.recipeIngredients),n.Ab(3),n.ec("ngIf",t.recipeYoutubeLink),n.Ab(5),n.ec("ngModel",t.numberOfDiners),n.Ab(1),n.ec("ngIf",t.logued),n.Ab(3),n.ec("ngIf",t.recipeTags),n.Ab(2),n.sc(t.recipeInstructions))},directives:[r.f,c.j,c.i,b.j,b.a,b.g,b.i,l.a],pipes:[c.o],styles:["#recipe[_ngcontent-%COMP%]{margin-top:30px}#mealImg[_ngcontent-%COMP%]{height:80%;width:80%}#mealMetadata[_ngcontent-%COMP%]{font-size:.9em}#mealInstructions[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:0}.heading[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{margin-bottom:10px}img[_ngcontent-%COMP%]{border-radius:25%!important;margin:5%}#categories[_ngcontent-%COMP%]{text-align:center;display:inline!important;list-style:none}"]}),e})()}];let A=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(y)],r.g]}),e})(),T=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(t){return new(t||e)},imports:[[b.f,l.b,c.b,A]]}),e})()}}]);