sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("br.com.infoprodutos.Produtos.controller.OrdemVenda",{onInit:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.getRoute("OrdemVenda").attachMatched(this._onRoute,this)},_onRoute:function(e){var t=e.getParameter("arguments");var r=this.getView();var n="/Orders("+t.idOrder+")";r.bindElement({path:n,parameters:{expand:"Order_Details"},events:{dataRequested:function(){r.setBusy(true)},dataReceived:function(){r.setBusy(false)}}})},onNavBack:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.navTo("Detalhes",{},false)}})});