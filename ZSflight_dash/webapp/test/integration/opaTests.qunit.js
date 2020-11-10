/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZSflight_dash/ZSflight_dash/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});