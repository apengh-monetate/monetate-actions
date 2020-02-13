/**
 * Copyright 2008-2020 Monetate, Inc.
 *
 * @fileoverview Register merch modifiers.
 *
 */

goog.provide('mps.brake.merchGrid');

goog.require('mc.action');
goog.require('mc.merch');
goog.require('mc.log');
goog.require('mc.op');
goog.require('mc.ops.merchGrid');
goog.require('mc.sizzle');
goog.require('mc.util');


/**
 * Creates a grid using items created from merchandiser/itelligent recommendation data or inserted into a template.
 * @action-title Intelligent Recommendations Grid - Manual
 * @action-description Inserts a grid of iRec items
 * @action-category Recommendations
 * @action-subcategory Index/Search pages
 * @action-slot-type none
 * @action-slot none
 * @action-op iRecGrid
 * @param {!mc.action.Char} sel='.product__listing.product__grid' Selector.
 * @param {!mc.action.StringSelect} imeth='before' Insert Method.
 * @param {!mc.action.CheckboxArrayAsString} insertOptions='RecheckForElement' Poll for element and multi select options.
 * @param {!mc.action.JsonCode} productsJson='./productsJson.json' Json of reco product data to put in the grid.
 * @param {mc.action.Integer} maxItems=4 Maximum number of products to have in the grid.
 * @param {!mc.action.Html} gridTemplate='./merchGridTemplate.html' Html template to build grid.
 * @param {!mc.action.Html} itemTemplate='./merchGridItemTemplate.html' Html template to build merch items.
 * @param {mc.action.FlexibleCreative} css='./merchGrid.css' Css to append.
 * @param {Array.<Object>=} opt_pinnedPids  Optional, pids to pin to the front.
 * @param {Function=} opt_feedCallback Optional, function to run after retrieving the feed response.
 * @param {Function=} opt_itemCallback Optional, function to run on each grid item before styles are added.
 * @param {Function=} opt_postDisplay Optional, function to run after the grid displays if it can display.
 */
mps.brake.merchGrid.merchGrid = (sel, imeth, insertOptions, productsJson, maxItems, gridTemplate,
        itemTemplate, css, opt_pinnedPids, opt_feedCallback, opt_itemCallback, opt_postDisplay) => {
    mc.ops.merchGrid.iRecGrid(sel, imeth, insertOptions, productsJson, maxItems, gridTemplate,
            itemTemplate, css, opt_pinnedPids, opt_feedCallback, opt_itemCallback, opt_postDisplay);
};


/**
 * Update the CSRFToken for product add-to-cart form
 * @param {mc.ops.merchGrid.Grid} grid grid object.
 */
mps.brake.merchGrid.CSRFToken = (grid) => {
    mc.log.groupCollapsed('merchModifiers.CSRFToken');
    mc.log.log(grid);

    const CSRFToken = mc.util.getNestedValue('ACC.config.CSRFToken');
    const items = grid.items;
    items.forEach((item) => {
        const CSRFinput = mc.sizzle('input[name="CSRFToken"]', item)[0];
        if (CSRFinput) {
            CSRFinput.value = CSRFToken;
        }
    });

    mc.log.groupEnd();
};

// Register the complete hook
mc.ops.merchGrid.registerCompleteHook(mps.brake.merchGrid.CSRFToken);

// Register the ops
mc.op.registerOperation('iRecGrid', mps.brake.merchGrid.iRecGrid);
