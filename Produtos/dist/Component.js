sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","br/com/infoprodutos/Produtos/model/models"],function(e,o,t){"use strict";return e.extend("br.com.infoprodutos.Produtos.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});