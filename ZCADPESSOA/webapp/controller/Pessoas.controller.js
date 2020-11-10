sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/model/Filter"
], function (Controller, JSONModel, MessageToast, Filter) {
	"use strict";

	return Controller.extend("ZCADPESSOA.ZCADPESSOA.controller.Pessoas", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Pessoas
		 */
		onInit: function () {

		},

		onPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//acessa o router
			var idSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Id;

			//	var selectedIdProd = oEvent.getSource().getBindingContext().getProperty("P");
			//acesso o contexto de selecao
			oRouter.navTo("Detalhes", {
				///acessa o router detalhes
				Id: idSelec
			});
			//var idSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Id;
			/*	var nomeSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Nome;
				var cpfSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Cpf;
				var rgSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Rg;
				var paisSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Pais;
				var estadoSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Estado;
				var cidadeSelec = oEvent.getSource().getSelectedItem().getBindingContext().getObject().Cidade;

				this.getView().byId("__input01").setValue(idSelec);
				this.getView().byId("__input1").setValue(nomeSelec);
				this.getView().byId("__input2").setValue(cpfSelec);
				this.getView().byId("__input3").setValue(rgSelec);
				this.getView().byId("__input4").setValue(paisSelec);
				this.getView().byId("__input5").setValue(estadoSelec);
				this.getView().byId("__input6").setValue(cidadeSelec); */

		},
		onSave: function () {

			var var1 = this.getView().byId("__input1").getValue();
			var var2 = this.getView().byId("__input2").getValue();
			var var3 = this.getView().byId("__input3").getValue();
			var var4 = this.getView().byId("__input4").getValue();
			var var5 = this.getView().byId("__input5").getValue();
			var var6 = this.getView().byId("__input6").getValue();
			var postData = {};

			var valida = 0;
			if (!var1) {
				this.byId("__input1").setValueState(sap.ui.core.ValueState.Error);
				valida = 1;
			}
			if (!var2) {
				this.byId("__input2").setValueState(sap.ui.core.ValueState.Error);
				valida = 1;
			}
			if (!var3) {
				this.byId("__input3").setValueState(sap.ui.core.ValueState.Error);
				valida = 1;
			}
			if (!var4) {
				this.byId("__input1").setValueState(sap.ui.core.ValueState.Error);
				valida = 1;
			}
			if (!var5) {
				this.byId("__input5").setValueState(sap.ui.core.ValueState.Error);
				valida = 1;
			}
			if (!var6) {
				this.byId("__input6").setValueState(sap.ui.core.ValueState.Error);
				valida = 1;
			}

			postData.Nome = var1;
			postData.Cpf = var2;
			postData.Rg = var3;
			postData.Pais = var4;
			postData.Estado = var5;
			postData.Cidade = var6;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			console.log(postData);
			if (valida == 0) {
				this.getOwnerComponent().getModel().
				create("/CadPessoaSet",
					postData, {
						method: "POST",
						success: function (data) {
							MessageToast.show("Usuario Criado: " + var1);
							var mylocation = location; mylocation.reload();
								oRouter.navTo("Pessoas");
						},
						error: function (e) {
							MessageToast.show("User deletion Failed  " + var1);
						}
					});
				oRouter.navTo("Pessoas");
			} else {
				MessageToast.show("Prencha os campos   " + var1);
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Pessoas
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Pessoas
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZCADPESSOA.ZCADPESSOA.view.Pessoas
		 */
		//	onExit: function() {
		//
		//	}

	});

});