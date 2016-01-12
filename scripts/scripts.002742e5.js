"use strict";angular.module("decretometroApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("decretometroApp").controller("MainCtrl",["$scope","Decree",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.decrees=[],a.decreSheet={},a.loadAll=function(){b.query(function(b){a.decrees=b.feed.entry,a.decreeSheet=b.feed;var c=new Date(Date.parse(b.feed.updated.$t));a.lastUpdated=c,a.totalDecrees=b.feed.openSearch$totalResults.$t})},a.loadAll(),a.showTable=!1,a.toggleDecreeTable=function(){a.showTable=!a.showTable}}]),angular.module("decretometroApp").factory("Decree",["$resource",function(a){return a("https://spreadsheets.google.com/feeds/list/1bPMcY2EaFmUwJpLc9fqT9L6HSITb4EZ-byRaUOZuoes/od6/public/values?alt=json",{},{query:{method:"GET",isArray:!1},get:{method:"GET",transformResponse:function(a){return a=angular.fromJson(a)}},update:{method:"PUT"}})}]),angular.module("decretometroApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="jumbotron"> <h1>Azo, Azo, Azo, Se viene el decretazo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>&Uacute;ltima Actualizaci&oacute;n</h4> <p> {{lastUpdated.toString()}} </p> <h4>Decretos relevados</h4> <p> {{totalDecrees}} </p> <p> <button type="submit" class="btn btn-lg btn-success" ng-click="toggleDecreeTable()">Ver decretos!<span class="glyphicon glyphicon-ok"></span></button></p> <div class="panel panel-default" ng-show="showTable"> <!-- Default panel contents --> <div class="panel-heading">Decretos del Ejecutivo nacional desde el 10 de diciembre de 2015</div> <!-- Table --> <table class="table"> <thead> <th>n&uacute;mero</th> <th>fecha</th> <th>t&iacute;tulo</th> <th>descripci&oacute;n</th> <th>bolet&iacute;n oficial</th> <th>art&iacute;culo period&iacute;stico</th> <th></th> </thead> <tbody> <tr ng-repeat="decree in decrees"> <td>{{decree[\'gsx$nrodecreto\'][\'$t\']}}</td> <td>{{decree[\'gsx$fechapublicaciónbol.of.\'][\'$t\']}}</td> <td>{{decree[\'gsx$título\'][\'$t\']}}</td> <td>{{decree[\'gsx$descripción\'][\'$t\']}}</td> <td><a ng-show="decree[\'gsx$linkoficial\'][\'$t\']" ng-href="decree[\'gsx$linkoficial\'][\'$t\']"><span title="link bolet&iacute;n oficial" class="glyphicon glyphicon-book"></span></a></td> <td><a ng-show="decree[\'gsx$articulo\'][\'$t\']" ng-href="decree[\'gsx$articulo\'][\'$t\']"><span title="art&iacute;culo period&iacute;stico" class="glyphicon glyphicon-info-sign"></span></a></td> <td><span ng-show="decree[\'gsx$esdnu\'][\'$t\']" class="label label-danger">DNU</span></td> </tr> </tbody> </table></div> </div>')}]);