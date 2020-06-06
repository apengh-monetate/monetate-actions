/**
 * Copyright 2008-2019 Monetate, Inc.
 *
 * @fileoverview Creates a slider (see: mc.ops.slider.create) using slides created from merchandiser data inserted into
 * a template.
 */

/**
 * Wrapper for mc.ops.merchSlider.init with a settings object.
 * @action-title Intelligent Recommendation
 * @action-description Shows an intelligent recommendation.
 * @action-category endcap
 * @action-subcategory Any page
 * @action-slot-type none
 * @action-slot none
 * @action-action-events op_click,op_impression
 *
 * @param {!mc.action.Char} sel='#section-productcarousel' Selector.
 * @param {!mc.action.StringSelect} imeth='after'
        [First=first, Last=last, After=after, Before=before, Replace=replace] Insert method.
 * @param {!mc.action.CheckboxArrayAsString} insertOptions=RecheckForElement [RecheckForElement,SelectMultipleElements]
 *    Poll for element and multi select options.
 * @param {!mc.action.RecommendationSet} productsJson='productFeed.json' Json of reco product data to put in the grid.
 * @param {!mc.action.Integer} maxItems=20 Maximum number of products to have in the grid.
 * @param {!mc.action.StringSelect} orientation='horizontal' [horizontal,vertical] Slider orientation.
 * @param {!mc.action.HtmlCode} sliderTemplate='sliderTemplate.html' Html template to build grid.
 * @param {!mc.action.HtmlCode} itemTemplate='itemTemplate.html' Html template to build merch items.
 * @param {!mc.action.CssCode} css='merchSlider.css' Css to append.
 * @param {!mc.action.JsonCode} settings='sliderSettings.json' Slider settings object - Breakpoints, transition, pagination, sizing, etc.
 * @param {!mc.action.RawImageCreative=} opt_prev Optional, previous arrow image.
 * @param {!mc.action.RawImageCreative=} opt_next Optional, next arrow image.
 * @param {Function=} opt_feedCallback Optional, function to run after retrieving the feed response.
 * @param {Function=} opt_itemCallback Optional, function to run on each slider item before styles are added.
 * @param {Function=} opt_postDisplay Optional, function to run after the endcap displays if it can display.
 */
mc.ops.merchSlider.iRecSlider(sel, imeth, insertOptions, productsJson, maxItems, orientation,
        sliderTemplate, itemTemplate, css, settings, opt_prev, opt_next, opt_feedCallback,
        opt_itemCallback, opt_postDisplay);
