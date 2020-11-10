sap.ui.define(["sap/ui/core/mvc/Controller"], function (e) {
	"use strict";
	return e.extend("Docs.ZZZDocs.controller.Docs", {
		onInit: function () {},
		funcListItemPress: function (e) {
			var t = sap.ui.core.UIComponent.getRouterFor(this);
			var o = e.getSource().getBindingContext().getProperty("Ebeln");
			var n = e.getSource().getBindingContext().getProperty("Matnr");
			console.log(o);
			console.log(n);
			t.navTo("Detalhes", {
				Matnr: n,
				Ebeln: o
			})
		}
	})
});