sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(t,e,o){"use strict";return t.extend("br.com.infoprodutos.Produtos.controller.Produtos",{onInit:function(){},funcListItemPress:function(t){var e=sap.ui.core.UIComponent.getRouterFor(this);var o=t.getSource().getBindingContext().getProperty("ProductID");e.navTo("Detalhes",{idProd:o})},onFilter:function(t){var r=t.getSource().getValue();var n=[];n.push(new e("ProductName",o.Contains,r));var i=this.getView().byId("tbProdutos");var u=i.getBinding("items");u.filter(n)}})});