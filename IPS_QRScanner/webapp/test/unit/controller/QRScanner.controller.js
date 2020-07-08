/*global QUnit*/

sap.ui.define([
	"QRScanner/IPS_QRScanner/controller/QRScanner.controller"
], function (Controller) {
	"use strict";

	QUnit.module("QRScanner Controller");

	QUnit.test("I should test the QRScanner controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});