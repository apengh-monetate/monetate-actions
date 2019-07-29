/**
 * Copyright 2008-2019 Monetate, Inc.
 *
 * @fileoverview Inserts expandable/collapsible promo drawer with slider.
 */

goog.provide('mps.cornerstone.promoDrawer');

goog.require('mc.action');
goog.require('mc.creative');
goog.require('mc.display');
goog.require('mc.dom');
goog.require('mc.error');
goog.require('mc.event');
goog.require('mc.op');
goog.require('mc.ops.creative');
goog.require('mc.ops.slider');
goog.require('mc.slider');
goog.require('mc.state');

/**
 * Promo cookie to determine if the action has run on a previous load.
 * @type {string}
 */
mps.cornerstone.promoDrawer.COOKIE = 'promoViewed';


/**
 * Stores banner element for use in shared functions.
 * @type {Element?}
 */
mps.cornerstone.promoDrawer.wrapper = null;


/**
 * Inserts promo slider.
 * @param {mc.action.FlexibleCreative} css CSS to append.
 * @param {string} tabTemplate Html template for tab.
 * @param {string} sliderTemplate Html template to build slider.
 * @param {Object|string} slidesVisible JSON or JSON parsable string to determine breakpoints and peeking slides.
 * @param {boolean} infiniteSlide Should the slider scroll infinitely or stop at the end?
 * @param {number=} opt_autoRotateDuration Optional duration in ms before auto rotating.
 * @param {boolean=} opt_pauseOnHover Optionally pause auto rotation on slider hover.
 * @param {number=} opt_transitionDuration Optional slide transition animation duration in ms.
 * @param {number=} opt_collapseDelay Number of seconds before the banner should be collapsed.
 * @param {string=} opt_slideInc Slide by page or single item.
 * @param {!mc.action.FlexibleCreative=} opt_js An optional js creative to 'install' and run after html insertion.
 * @param {boolean=} opt_runOnce Whether to prevent multiple executions on subsequent retracks. Default = false.
 * @param {Function=} opt_afterSlider Function to run after the slider is created
 * @param {string=} opt_slideBody1 Slide 1 body html.
 * @param {string=} opt_slideBody2 Slide 2 body html.
 * @param {string=} opt_slideBody3 Slide 3 body html.
 * @param {string=} opt_slideBody4 Slide 4 body html.
 * @param {string=} opt_slideBody5 Slide 5 body html.
 * @param {string=} opt_slideBody6 Slide 6 body html.
 * @param {string=} opt_slideBody7 Slide 1 body html.
 * @param {string=} opt_slideBody8 Slide 2 body html.
 * @param {string=} opt_slideBody9 Slide 3 body html.
 * @param {string=} opt_slideBody10 Slide 4 body html.
 * @param {string=} opt_slideBody11 Slide 5 body html.
 * @param {string=} opt_slideBody12 Slide 6 body html.
 */
mps.cornerstone.promoDrawer.init = (css, tabTemplate, sliderTemplate, slidesVisible, infiniteSlide,
        opt_autoRotateDuration, opt_pauseOnHover, opt_transitionDuration, opt_collapseDelay, opt_slideInc, opt_js,
        opt_runOnce, opt_afterSlider, opt_slideBody1, opt_slideBody2, opt_slideBody3, opt_slideBody4, opt_slideBody5,
        opt_slideBody6, opt_slideBody7, opt_slideBody8, opt_slideBody9, opt_slideBody10, opt_slideBody11,
        opt_slideBody12) => {
    mc.log.group('promoDrawer.init');

    const id = 'mt-promo-drawer';
    mps.cornerstone.promoDrawer.initWrappers(id, css, function(wrappers) {
        if (tabTemplate) {
            var templateFragment = mc.display.htmlStringToDocumentFragment(/** @type {!string} */(tabTemplate));
            wrappers.titleWrapper.appendChild(templateFragment);
        }
        document.body.appendChild(wrappers.wrapper);

        // Set needed global vars
        mps.cornerstone.promoDrawer.wrapper = wrappers.wrapper;

        // Create body slider
        const bodySlider = mps.cornerstone.promoDrawer.createBodySlider(id, sliderTemplate, slidesVisible,
                infiniteSlide, opt_autoRotateDuration, opt_pauseOnHover, opt_transitionDuration,
                opt_slideInc || 'page', opt_slideBody1, opt_slideBody2, opt_slideBody3, opt_slideBody4,
                opt_slideBody5, opt_slideBody6, opt_slideBody7, opt_slideBody8, opt_slideBody9, opt_slideBody10,
                opt_slideBody11, opt_slideBody12);
        bodySlider.insert(wrappers.bodyWrapper, 'last');

        // Bind Expand/Collapse
        mc.event.bind(wrappers.titleWrapper, 'click', function() {
            mc.dom.toggleClass(wrappers.wrapper, 'mt-expanded');
        });

        if (opt_afterSlider) {
            opt_afterSlider(wrappers, opt_collapseDelay, opt_slideInc);
        }

        if (opt_js) {
            mc.ops.creative.insertJavascript(opt_js, opt_runOnce);
        }
    });

    mc.log.groupEnd();
};


/**
 * Inserts promo drawer with collapsed state options and collapse on delay.
 * @param {mc.action.FlexibleCreative} css CSS to append.
 * @param {string} tabTemplate Html template for tab.
 * @param {string} sliderTemplate Html template to build slider.
 * @param {Object|string} slidesVisible JSON or JSON parsable string to determine breakpoints and peeking slides.
 * @param {boolean} infiniteSlide Should the slider scroll infinitely or stop at the end?
 * @param {boolean=} opt_collapseOnLanding Collapse on first page load.
 * @param {boolean=} opt_collapseAfter Collapse after first page load.
 * @param {number=} opt_collapseDelay Number of seconds before the banner should be collapsed.
 * @param {number=} opt_autoRotateDuration Optional duration in ms before auto rotating.
 * @param {boolean=} opt_pauseOnHover Optionally pause auto rotation on slider hover.
 * @param {number=} opt_transitionDuration Optional slide transition animation duration in ms.
 * @param {string=} opt_slideInc Slide by page or single item.
 * @param {!mc.action.FlexibleCreative=} opt_js An optional js creative to 'install' and run after html insertion.
 * @param {boolean=} opt_runOnce Whether to prevent multiple executions on subsequent retracks. Default = false.
 * @param {string=} opt_slideBody1 Slide 1 body html.
 * @param {string=} opt_slideBody2 Slide 2 body html.
 * @param {string=} opt_slideBody3 Slide 3 body html.
 * @param {string=} opt_slideBody4 Slide 4 body html.
 * @param {string=} opt_slideBody5 Slide 5 body html.
 * @param {string=} opt_slideBody6 Slide 6 body html.
 * @param {string=} opt_slideBody7 Slide 1 body html.
 * @param {string=} opt_slideBody8 Slide 2 body html.
 * @param {string=} opt_slideBody9 Slide 3 body html.
 * @param {string=} opt_slideBody10 Slide 4 body html.
 * @param {string=} opt_slideBody11 Slide 5 body html.
 * @param {string=} opt_slideBody12 Slide 6 body html.
 */
mps.cornerstone.promoDrawer.initCollapseDelay = (css, tabTemplate, sliderTemplate, slidesVisible, infiniteSlide,
        opt_collapseOnLanding, opt_collapseAfter, opt_collapseDelay, opt_autoRotateDuration, opt_pauseOnHover,
        opt_transitionDuration, opt_slideInc, opt_js, opt_runOnce, opt_slideBody1, opt_slideBody2,
        opt_slideBody3, opt_slideBody4, opt_slideBody5, opt_slideBody6, opt_slideBody7, opt_slideBody8, opt_slideBody9,
        opt_slideBody10, opt_slideBody11, opt_slideBody12) => {
    mc.log.group('mps.cornerstone.promoDrawer.initCollapseDelay');

    const opt_afterSlider = (wrappers, opt_collapseDelay, opt_slideInc) => {
        mc.event.bind(wrappers.wrapper, 'mouseenter mouseleave', () => {
            mc.dom.toggleClass(wrappers.wrapper, 'mt-hovered');
        });

        mc.event.bind(wrappers.wrapper, 'touchstart click', () => {
            mc.dom.addClass(wrappers.wrapper, 'mt-touched');
        });

        const collapse = mps.cornerstone.promoDrawer.isCollapsedState(opt_collapseOnLanding, opt_collapseAfter);
        wrappers.wrapper.className = collapse.state ? '' : 'mt-expanded';

        if (opt_collapseDelay) {
            const delayCollapse = () => {
                // if banner has already been shown AND it is collapsed on pageload, then we want to ignore
                // any delay collapse.  Banner should not collapse once we interact with it on second+ load
                if (opt_collapseAfter && !collapse.firstViewing) {
                    return;
                }
                if (!mc.dom.hasClass(wrappers.wrapper, 'mt-touched')) {
                    if (!mc.dom.hasClass(wrappers.wrapper, 'mt-hovered')) {
                        mc.dom.removeClass(wrappers.wrapper, 'mt-expanded');
                    }
                    // once the timeout has passed, if we hover off the thing, close it
                    mc.event.bind(wrappers.wrapper, 'mouseleave', () => {
                        if (!mc.dom.hasClass(wrappers.wrapper, 'mt-touched')) {
                            mc.dom.removeClass(wrappers.wrapper, 'mt-hovered');
                            mc.dom.removeClass(wrappers.wrapper, 'mt-expanded');
                        }
                    });
                };
            };
            mc.error.isolateTimeout(delayCollapse, opt_collapseDelay * 1000);
        }
    };

    mps.cornerstone.promoDrawer.init(css, tabTemplate, sliderTemplate, slidesVisible, infiniteSlide,
            opt_autoRotateDuration, opt_pauseOnHover, opt_transitionDuration, opt_collapseDelay, opt_slideInc, opt_js,
            opt_runOnce, opt_afterSlider, opt_slideBody1, opt_slideBody2, opt_slideBody3, opt_slideBody4,
            opt_slideBody5, opt_slideBody6, opt_slideBody7, opt_slideBody8, opt_slideBody9, opt_slideBody10,
            opt_slideBody11, opt_slideBody12);

    mc.log.groupEnd();
};


/**
 * Makes sure the action doesn't already exist, inserts css, builds content wrappers, and fires a callback.
 * @param {string} id Banner id.
 * @param {mc.action.FlexibleCreative} css Css to insert.
 * @param {function(Object.<Element>)} callback Callback function passing the newly created wrapper elements.
 */
mps.cornerstone.promoDrawer.initWrappers = (id, css, callback) => {
    mc.creative.appendCSS(css, () => {
        if (!document.getElementById(id)) {
            // Wrapper
            const wrapper = document.createElement('div');
            wrapper.id = id;

            // Title Wrapper
            const titleWrapper = document.createElement('div');
            titleWrapper.className = 'mt-title-wrapper';
            wrapper.appendChild(titleWrapper);

            // Body Wrapper
            const bodyWrapper = document.createElement('div');
            bodyWrapper.className = 'mt-body-wrapper';
            wrapper.appendChild(bodyWrapper);

            callback({
                wrapper: wrapper,
                titleWrapper: titleWrapper,
                bodyWrapper: bodyWrapper
            });
        }
    });
};


/**
 * Creates the body slider
 *
 * @param {string} id Banner id.
 * @param {string} sliderTemplate Html template to build slider.
 * @param {Object|string} slidesVisible JSON or JSON parsable string to determine breakpoints and peeking slides.
 * @param {boolean} infiniteSlide Should the slider scroll infinitely or stop at the end?
 * @param {number=} opt_autoRotateDuration Optional duration in ms before auto rotating.
 * @param {boolean=} opt_pauseOnHover Optionally pause auto rotation on slider hover.
 * @param {number=} opt_transitionDuration Optional slide transition animation duration in ms.
 * @param {string=} opt_slideBy     Slide by page or single
 *
 * @return {mc.slider.Slider} The created slider
 */
mps.cornerstone.promoDrawer.createBodySlider = (id, sliderTemplate, slidesVisible, infiniteSlide,
        opt_autoRotateDuration, opt_pauseOnHover, opt_transitionDuration, opt_slideBy, ...items) => {
    items = items.filter((item) => !!item);

    const sliderLayout = mc.slider.createBreakpointsObject(slidesVisible);
    const bodySlides = mc.ops.slider.createSlideElements(id + '-body', [...items]);
    const bodySettings = mc.slider.createSettingsObject('horizontal', infiniteSlide, opt_slideBy || 'page',
            sliderLayout, undefined, undefined, undefined, false, opt_transitionDuration, 'push');
    const bodyTemplate = sliderTemplate || mc.slider.DEFAULT_TEMPLATE;
    const bodySlider = new mc.slider.Slider(id + '-body', bodySlides, bodySettings, undefined, undefined,
            bodyTemplate);

    return bodySlider;
};


/**
 * Checks cookie values and determines if the promo drawer should be collapsed or not.
 * @param {boolean=} opt_collapseOnLanding Collapse on first page load.
 * @param {boolean=} opt_collapseAfter Collapse after first page load.
 * @return {Object} state: true if banner should be collapsed, firstViewing: true if this is the 1st time banner viewed
 */
mps.cornerstone.promoDrawer.isCollapsedState = function(opt_collapseOnLanding, opt_collapseAfter) {
    const cookie = mc.state.get(mps.cornerstone.promoDrawer.COOKIE);
    const collapsed = (cookie && opt_collapseAfter) || (!cookie && opt_collapseOnLanding);
    const firstViewing = !cookie;
    mc.state.set(mps.cornerstone.promoDrawer.COOKIE, 't');

    return {'state': !!collapsed, 'firstViewing': firstViewing};
};


// Register the op.
mc.op.registerOperation('promoDrawer', mps.cornerstone.promoDrawer.init);
mc.op.registerOperation('promoDrawerCollapseDelay', mps.cornerstone.promoDrawer.initCollapseDelay);
