(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{aSRr:function(t,e,r){"use strict";r.r(e),r.d(e,"CategoryModule",(function(){return y}));var c=r("ofXK"),a=r("tyNb"),o=r("fXoL"),i=r("OaWH"),n=r("Wp6s"),s=r("bTqV");function g(t,e){if(1&t&&o.Lb(0,"img",9),2&t){const t=o.Zb();o.fc("src",t.categoryInfo.strCategoryThumb,o.lc)}}function b(t,e){if(1&t&&(o.Pb(0,"mat-card"),o.Lb(1,"img",10),o.Pb(2,"mat-card-content"),o.Pb(3,"h5"),o.rc(4),o.Ob(),o.Ob(),o.Pb(5,"mat-card-actions"),o.Pb(6,"a",11),o.rc(7,"Recipe"),o.Ob(),o.Ob(),o.Ob()),2&t){const t=e.$implicit;o.Ab(1),o.fc("src",t.strMealThumb,o.lc),o.fc("alt",t.strMealThumb),o.Ab(3),o.sc(t.strMeal),o.Ab(2),o.gc("routerLink","/recipe/",t.idMeal,"")}}const p=[{path:":category",component:(()=>{class t{constructor(t,e){this.route=t,this.appService=e,this.recipesBySpecificCategory=[]}ngOnInit(){this.getCategory(),this.getRecipesByCategory(this.categoryName),this.categoryInfo=this.appService.getCategoryData(this.categoryName)}getCategory(){this.categoryName=this.route.snapshot.paramMap.get("category")}getRecipesByCategory(t){this.appService.getRecipesByCategory(t).subscribe(t=>{t.meals.forEach((t,e)=>{this.recipesBySpecificCategory[e]=t}),this.appService.setRecipesByCategory(this.recipesBySpecificCategory)})}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(a.a),o.Kb(i.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-category"]],decls:16,vars:6,consts:[["id","category"],[1,"container"],[1,"row"],[1,"four","columns"],["id","categoryThumb",3,"src",4,"ngIf"],[1,"eight","columns"],[1,"twelve","columns"],["id","grid"],[4,"ngFor","ngForOf"],["id","categoryThumb",3,"src"],["mat-card-image","",3,"src","alt"],["mat-raised-button","",3,"routerLink"]],template:function(t,e){1&t&&(o.Pb(0,"section",0),o.Pb(1,"div",1),o.Pb(2,"div",2),o.Pb(3,"div",3),o.qc(4,g,1,1,"img",4),o.Ob(),o.Pb(5,"div",5),o.Pb(6,"aside"),o.Pb(7,"h3"),o.rc(8),o.ac(9,"uppercase"),o.Ob(),o.Pb(10,"p"),o.rc(11),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(12,"div",2),o.Pb(13,"div",6),o.Pb(14,"div",7),o.qc(15,b,8,4,"mat-card",8),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t&&(o.Ab(4),o.ec("ngIf",e.categoryInfo.strCategoryThumb),o.Ab(4),o.sc(o.bc(9,4,e.categoryName)),o.Ab(3),o.sc(e.categoryInfo.strCategoryDescription),o.Ab(4),o.ec("ngForOf",e.recipesBySpecificCategory))},directives:[c.j,c.i,n.a,n.d,n.c,n.b,s.a,a.f],pipes:[c.p],styles:["#category[_ngcontent-%COMP%]{margin-top:20px}#categoryThumb[_ngcontent-%COMP%]{height:100%;width:100%}#category[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:10px}.mat-card[_ngcontent-%COMP%]{margin-bottom:20px}.mat-card-content[_ngcontent-%COMP%], .mat-card-image[_ngcontent-%COMP%]{margin-bottom:0}#grid[_ngcontent-%COMP%]{margin-top:20px;height:100%;display:grid;grid-gap:10px 10px;grid-auto-rows:auto;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(p)],a.g]}),t})(),y=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[c.b,n.e,s.b,m]]}),t})()}}]);