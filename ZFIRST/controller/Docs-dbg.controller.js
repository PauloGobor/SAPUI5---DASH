sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Docs.ZZZDocs.controller.Docs", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Docs.ZZZDocs.view.Docs
		 */
		onInit: function () {

		},
			funcListItemPress: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//acessa o router
			var selectedIdDoc = evt.getSource().getBindingContext().getProperty("Ebeln");
			var selectedIdMat = evt.getSource().getBindingContext().getProperty("Matnr");
			//acesso o contexto de selecao
			console.log(selectedIdDoc);
			console.log(selectedIdMat);
			oRouter.navTo("Detalhes", {
				///acessa o router detalhes
				Matnr: selectedIdMat,
				Ebeln: selectedIdDoc
				
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Docs.ZZZDocs.view.Docs
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Docs.ZZZDocs.view.Docs
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Docs.ZZZDocs.view.Docs
		 */
		//	onExit: function() {
		//
		//	}

	});

});