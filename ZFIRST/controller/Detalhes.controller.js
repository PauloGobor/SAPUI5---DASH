sap.ui.define(["sap/ui/core/mvc/Controller"], function (e) {
	"use strict";
	return e.extend("Docs.ZZZDocs.controller.Detalhes", {
		onInit: function () {
			var e = sap.ui.core.UIComponent.getRouterFor(this);
			e.getRoute("Detalhes").attachMatched(this._onRoute, this);
			
		},
		_onRoute: function (e) {
			var t = e.getParameter("arguments");
			var n = this.getView();
			var o = "/EkpoSet(Matnr='" + t.Matnr + "',Ebeln='" + t.Ebeln + "')";
			n.bindElement({
				path: o,
				parameters: {
					expand: "DetailsMatNav"
				},
				events: {
					dataRequested: function () {
						n.setBusy(true);
					},
					dataReceived: function () {
						n.setBusy(false);
					}
				}
			});
			console.log(o)
		},
		onNavBack: function () {
			var e = sap.ui.core.UIComponent.getRouterFor(this);
			e.navTo("App", {}, false);
		}
	})
});