sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Docs.ZZZDocs.controller.Detalhes", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Docs.ZZZDocs.view.Detalhes
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detalhes").attachMatched(this._onRoute, this);
		
		},
		_onRoute: function (evt) {
			var oArgs = evt.getParameter("arguments"); //jogamntdo os argumenos do route( todos os paramentros )
			var oView = this.getView();

			var sURL = "/EkpoSet(Matnr='" + oArgs.Matnr + "',Ebeln='" + oArgs.Ebeln + "')";

			oView.bindElement({
				path: sURL,
				//qual a entidade que vou fazer a chamada.(caminho)
				parameters: {
					expand: "DetailsFornNav,DetailsMatNav" // pega as informacoes da categoria que pertence aquele produto
				},
				events: {
					dataRequested: function () {
						oView.setBusy(true);
					},
					dataReceived: function () {
						oView.setBusy(false);
					}
				}
			});
		
		},

		onBeforeRendering: function (evt) {
			// var oArgs = evt.getParameter("arguments"); //jogamntdo os argumenos do route( todos os paramentros )
			// var sURL2 = "/EkpoSet(Matnr='" + oArgs.Matnr + "',Ebeln='" + oArgs.Ebeln + "')";
			
			// this.getView().byId("SFormFornecedor").bindElement({
			// 	path: sURL2,
			// 	//qual a entidade que vou fazer a chamada.(caminho)
			// 	parameters: {
			// 		expand: "DetailsFornNav" // pega as informacoes da categoria que pertence aquele produto
			// 	},
			// 	events: {
			// 		dataRequested: function () {
			// 			this.getView().setBusy(true);
			// 		},
			// 		dataReceived: function () {
			// 			this.getView().setBusy(false);
			// 		}
			// 	}
			// });
			// console.log(sURL2);
		},
		
		onNavBack: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("App", {}, false);
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Docs.ZZZDocs.view.Detalhes
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Docs.ZZZDocs.view.Detalhes
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Docs.ZZZDocs.view.Detalhes
		 */
		//	onExit: function() {
		//
		//	}

	});

});