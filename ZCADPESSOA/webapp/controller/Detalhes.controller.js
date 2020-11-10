sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/model/Filter"
], function (Controller, JSONModel, MessageToast, Filter) {
	"use strict";

	return Controller.extend("ZCADPESSOA.ZCADPESSOA.controller.Detalhes", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Detalhes
		 */
		onInit: function () {
			var e = sap.ui.core.UIComponent.getRouterFor(this);
			e.getRoute("Detalhes").attachMatched(this._onRoute, this);

		},
		_onRoute: function (e) {
			var t = e.getParameter("arguments");
			var n = this.getView();
			var o = "/CadPessoaSet(Id='" + t.Id + "')";
			n.bindElement({
				path: o,
				events: {
					dataRequested: function () {
						n.setBusy(true);
					},
					dataReceived: function () {
						n.setBusy(false);
					}
				}
			});
			//	console.log(o)
		},
		onNavBack: function () {
			var e = sap.ui.core.UIComponent.getRouterFor(this);
			e.navTo("Pessoas", {}, false);
		},
		onUpdate: function () {
			var id = this.getView().byId("__input01").getValue();
			var var1 = this.getView().byId("__input1").getValue();
			var var2 = this.getView().byId("__input2").getValue();
			var var3 = this.getView().byId("__input3").getValue();
			var var4 = this.getView().byId("__input4").getValue();
			var var5 = this.getView().byId("__input5").getValue();
			var var6 = this.getView().byId("__input6").getValue();
			var postData = {};

			postData.Nome = var1;
			postData.Cpf = var2;
			postData.Rg = var3;
			postData.Pais = var4;
			postData.Estado = var5;
			postData.Cidade = var6;
		
		
			this.getOwnerComponent().getModel().
			update("/CadPessoaSet('" + id + "')",
				postData, {
					method: "UPDATE",
					success: function (data) {
						MessageToast.show("Informaçoes Atualizado usuario:  " + var1);
						
					},
					error: function (e) {
						MessageToast.show("Atualizaçao de dados falhou.  " + var1);
					}

				});
				

		},
		onDelete: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oCust1 = this.getView().byId("__input01").getValue();
			this.getOwnerComponent().getModel().
			remove("/CadPessoaSet('" + oCust1 + "')", {
				method: "DELETE",
				success: function (data) {
					MessageToast.show("Usuario Deletado: " + oCust1);
					oRouter.navTo("Pessoas");
				},
				error: function (e) {
					MessageToast.show("Customer deletion Failed  " + oCust1);
				}
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Detalhes
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Detalhes
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Detalhes
		 */
		//	onExit: function() {
		//
		//	}

	});

});