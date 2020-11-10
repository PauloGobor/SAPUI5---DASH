//@ui5-bundle Docs/ZZZDocs/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"Docs/ZZZDocs/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","Docs/ZZZDocs/model/models"],function(e,t,i){"use strict";return e.extend("Docs.ZZZDocs.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"Docs/ZZZDocs/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("Docs.ZZZDocs.controller.App",{onInit:function(){}})});
},
	"Docs/ZZZDocs/controller/Detalhes.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("Docs.ZZZDocs.controller.Detalhes",{onInit:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.getRoute("Detalhes").attachMatched(this._onRoute,this);console.log(e)},_onRoute:function(e){var t=e.getParameter("arguments");var n=this.getView();var o="/EkpoSet(Matnr='"+t.Matnr+"',Ebeln='"+t.Ebeln+"')";n.bindElement({path:o,parameters:{expand:"DetailsMatNav"},events:{dataRequested:function(){n.setBusy(true)},dataReceived:function(){n.setBusy(false)}}});console.log(o)},onNavBack:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.navTo("App",{},false)}})});
},
	"Docs/ZZZDocs/controller/Docs.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("Docs.ZZZDocs.controller.Docs",{onInit:function(){},funcListItemPress:function(e){var t=sap.ui.core.UIComponent.getRouterFor(this);var o=e.getSource().getBindingContext().getProperty("Ebeln");var n=e.getSource().getBindingContext().getProperty("Matnr");console.log(o);console.log(n);t.navTo("Detalhes",{Matnr:n,Ebeln:o})}})});
},
	"Docs/ZZZDocs/i18n/i18n.properties":'title=Title\nappTitle=ZZZDocs\nappDescription=App Description',
	"Docs/ZZZDocs/localService/metadata.xml":'<edmx:Edmx xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"\n\txmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:sap="http://www.sap.com/Protocols/SAPData" Version="1.0"><edmx:DataServices m:DataServiceVersion="2.0"><Schema xmlns="http://schemas.microsoft.com/ado/2008/09/edm" Namespace="ZTX_DOCS_DEMO_SRV_01" xml:lang="pt" sap:schema-version="1"><EntityType Name="Ekpo" sap:content-version="1"><Key><PropertyRef Name="Matnr"/><PropertyRef Name="Ebeln"/></Key><Property Name="Matnr" Type="Edm.String" Nullable="false" MaxLength="18" sap:label="Material"/><Property Name="Ebeln" Type="Edm.String" Nullable="false" MaxLength="10" sap:label="Doc.compras"/><Property Name="Ebelp" Type="Edm.String" Nullable="false" MaxLength="5" sap:label="Item" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Bukrs" Type="Edm.String" Nullable="false" MaxLength="4" sap:label="Empresa" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Werks" Type="Edm.String" Nullable="false" MaxLength="4" sap:label="Centro" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Kunnr" Type="Edm.String" Nullable="false" MaxLength="10" sap:label="Cliente" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Lifnr" Type="Edm.String" Nullable="false" MaxLength="10" sap:label="Fornecedor" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Name1" Type="Edm.String" Nullable="false" MaxLength="35" sap:label="Nome" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Txz01" Type="Edm.String" Nullable="false" MaxLength="40" sap:label="Texto breve" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Meins" Type="Edm.String" Nullable="false" MaxLength="3" sap:label="UM pedido" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false" sap:semantics="unit-of-measure"/><NavigationProperty Name="DetailsMatNav" Relationship="ZTX_DOCS_DEMO_SRV_01.DetailsMat" FromRole="FromRole_DetailsMat"\n\t\t\t\t\tToRole="ToRole_DetailsMat"/></EntityType><EntityType Name="Mara" sap:content-version="1"><Key><PropertyRef Name="Matnr"/><PropertyRef Name="Ebeln"/></Key><Property Name="Matnr" Type="Edm.String" Nullable="false" MaxLength="18" sap:label="Material"/><Property Name="Ebeln" Type="Edm.String" Nullable="false" MaxLength="10" sap:label="Doc.compras"/><Property Name="Ersda" Type="Edm.DateTime" Nullable="false" Precision="7" sap:label="Criado em" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Mtart" Type="Edm.String" Nullable="false" MaxLength="4" sap:label="Tipo material" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Matkl" Type="Edm.String" Nullable="false" MaxLength="9" sap:label="GrpMercads." sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Brgew" Type="Edm.Decimal" Nullable="false" Precision="13" Scale="3" sap:unit="Gewei" sap:label="Peso Total"\n\t\t\t\t\tsap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Ntgew" Type="Edm.Decimal" Nullable="false" Precision="13" Scale="3" sap:unit="Gewei" sap:label="Peso líquido"\n\t\t\t\t\tsap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Gewei" Type="Edm.String" Nullable="false" MaxLength="3" sap:label="Unidade de peso" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false" sap:semantics="unit-of-measure"/><Property Name="Volum" Type="Edm.Decimal" Nullable="false" Precision="13" Scale="3" sap:unit="Voleh" sap:label="Volume"\n\t\t\t\t\tsap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Voleh" Type="Edm.String" Nullable="false" MaxLength="3" sap:label="Unidade volume" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false" sap:semantics="unit-of-measure"/></EntityType><Association Name="DetailsMat" sap:content-version="1"><End Type="ZTX_DOCS_DEMO_SRV_01.Ekpo" Multiplicity="1" Role="FromRole_DetailsMat"/><End Type="ZTX_DOCS_DEMO_SRV_01.Mara" Multiplicity="0..1" Role="ToRole_DetailsMat"/><ReferentialConstraint><Principal Role="FromRole_DetailsMat"><PropertyRef Name="Ebeln"/><PropertyRef Name="Matnr"/></Principal><Dependent Role="ToRole_DetailsMat"><PropertyRef Name="Ebeln"/><PropertyRef Name="Matnr"/></Dependent></ReferentialConstraint></Association><EntityContainer Name="ZTX_DOCS_DEMO_SRV_01_Entities" m:IsDefaultEntityContainer="true" sap:supported-formats="atom json xlsx"><EntitySet Name="MaraSet" EntityType="ZTX_DOCS_DEMO_SRV_01.Mara" sap:creatable="false" sap:updatable="false" sap:deletable="false"\n\t\t\t\tsap:pageable="false" sap:content-version="1"/><EntitySet Name="EkpoSet" EntityType="ZTX_DOCS_DEMO_SRV_01.Ekpo" sap:pageable="false" sap:content-version="1"/><AssociationSet Name="DetailsMatSet" Association="ZTX_DOCS_DEMO_SRV_01.DetailsMat" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:deletable="false" sap:content-version="1"><End EntitySet="EkpoSet" Role="FromRole_DetailsMat"/><End EntitySet="MaraSet" Role="ToRole_DetailsMat"/></AssociationSet></EntityContainer><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="self" href="./sap/ZTX_DOCS_DEMO_SRV_01/$metadata"/><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="latest-version" href="./sap/ZTX_DOCS_DEMO_SRV_01/$metadata"/></Schema></edmx:DataServices></edmx:Edmx>',
	"Docs/ZZZDocs/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"Docs.ZZZDocs","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{"ZTX_DOCS_DEMO_SRV_01":{"uri":"/sap/opu/odata/sap/ZTX_DOCS_DEMO_SRV_01/","type":"OData","settings":{"localUri":"localService/metadata.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"Docs.ZZZDocs.view.App","type":"XML","async":true,"id":"App"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"Docs.ZZZDocs.i18n.i18n"}},"":{"type":"sap.ui.model.odata.v2.ODataModel","settings":{"defaultOperationMode":"Server","defaultBindingMode":"TwoWay","defaultCountMode":"Request"},"dataSource":"ZTX_DOCS_DEMO_SRV_01","preload":true}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"Docs.ZZZDocs.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"Docs","pattern":"","titleTarget":"","greedy":false,"target":["Docs"]},{"name":"Detalhes","pattern":"detalhe/{Matnr},{Ebeln}","titleTarget":"","greedy":false,"target":["Detalhes"]}],"targets":{"TargetApp":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"App","viewName":"App"},"Docs":{"viewType":"XML","viewName":"Docs","controlAggregation":"pages","controlId":"app","viewPath":"Docs.ZZZDocs.view"},"Detalhes":{"viewType":"XML","viewName":"Detalhes","controlAggregation":"pages","controlId":"app","viewPath":"Docs.ZZZDocs.view"}}}},"sap.platform.hcp":{"uri":"webapp","_version":"1.1.0"},"sap.platform.abap":{"uri":"/sap/bc/ui5_ui5/sap/zfirst/webapp","_version":"1.1.0"}}',
	"Docs/ZZZDocs/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"Docs/ZZZDocs/serviceBinding.js":'function initModel(){var a="/sap/opu/odata/sap/ZTX_DOCS_DEMO_SRV_01/";var e=new sap.ui.model.odata.ODataModel(a,true);sap.ui.getCore().setModel(e)}',
	"Docs/ZZZDocs/view/App.view.xml":'<mvc:View controllerName="Docs.ZZZDocs.controller.App" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content></content></Page></pages></App></Shell></mvc:View>',
	"Docs/ZZZDocs/view/Detalhes.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:html="http://www.w3.org/1999/xhtml" height="100%"\n\tcontrollerName="Docs.ZZZDocs.controller.Detalhes"><App><pages><Page title="Detalhes De Material"><content><ObjectHeader xmlns="sap.m" title="{DetailsMatNav/Matnr}"  id="header0"\n\t\t\t\t\t\ticon="sap-icon://product"><statuses><ObjectStatus text="Grupo: {DetailsMatNav/Matkl}" id="status0"/><ObjectStatus text="Tipo: {DetailsMatNav/Mtart}" id="status30"/></statuses><attributes><ObjectAttribute text="Peso Total: {DetailsMatNav/Brgew} {DetailsMatNav/Gewei}" id="attribute0"/><ObjectAttribute text="Peso Liquido: {DetailsMatNav/Ntgew} {DetailsMatNav/Gewei}" id="attribute20"/><ObjectAttribute text="Volume: {DetailsMatNav/Volum} {DetailsMatNav/Voleh}" id="attribute220"/></attributes></ObjectHeader></content></Page></pages></App></mvc:View>',
	"Docs/ZZZDocs/view/Docs.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:html="http://www.w3.org/1999/xhtml" controllerName="Docs.ZZZDocs.controller.Docs"><App><pages><Page title="Title"><content><Table noDataText="Drop column list items here and columns in the area above" id="table0" items="{path:\'/EkpoSet\'}"><items><ColumnListItem type="Active" id="item0" press="funcListItemPress"><cells><Text text="{Ebeln}" id="text2"/><Text text="{Ebelp}" id="text3"/><Text text="{Bukrs}" id="text4"/><Text xmlns="sap.m" text="{Werks}" id="text7"/><Text xmlns="sap.m" text="{Lifnr}" id="text8"/><Text xmlns="sap.m" text="{Name1}" id="text9"/><Text xmlns="sap.m" text="{Matnr}" id="text10"/><Text xmlns="sap.m" text="{Txz01}" id="text11"/><Text xmlns="sap.m" text="{Meins}" id="text12"/></cells></ColumnListItem></items><columns><Column id="column0"><header><Label text="Doc. Compras" id="label0"/></header></Column><Column id="column1"><header><Label text="Item" id="label1"/></header></Column><Column id="column2"><header><Label text="Empresa" id="label2"/></header></Column><Column id="column0_1598561064957"><header><Text text="Centro" id="text1"/></header></Column><Column id="column1_1598561164184"><header><Text text="Cod. Fornecedor" id="text2_1598561164184"/></header></Column><Column id="column2_1598561207548"><header><Text text="Fornecedor" id="text3_1598561207548"/></header></Column><Column id="column3"><header><Text text="Cod. Material" id="text4_1598561263465"/></header></Column><Column id="column4"><header><Text text="Descrição" id="text5"/></header></Column><Column id="column5"><header><Text text="UM pedido" id="text6"/></header></Column></columns></Table></content></Page></pages></App></mvc:View>'
}});
