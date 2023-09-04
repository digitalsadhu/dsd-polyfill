/* eslint-disable no-prototype-builtins */
/*
 * Polyfill for attaching shadow trees for declarative Shadow DOM for
 * implementations that do not support declarative Shadow DOM.
 *
 * Note: this polyfill will feature-detect the native feature, and do nothing
 *       if supported.
 *
 * See: https://github.com/whatwg/html/pull/5465, https://github.com/web-platform-tests/wpt/blob/master/resources/declarative-shadow-dom-polyfill.js
 *
 * root: The root of the subtree in which to upgrade shadow roots
 *
 */

/**
 * Polyfill function for declarative Shadow DOM.
 * Add polyfill to the page and pass it the root node to start from.
 * This could be the document body element if you need to polyfill the entire page or it could be a specific scoped area of the page if you only need to polyfill a specific area.
 *
 * if applying 1x to entire page starting from the node given, child nodes will be traversed...
 *
 * @example
 * ```js
 * dsdPolyfill(document.body);
 * ```
 *
 * if applying multiple times to target specific elements...
 *
 * @example
 * ```js
 * dsdPolyfill(document.querySelector("some-custom-element-1"));
 * dsdPolyfill(document.querySelector("some-custom-element-2"));
 * ```
 *
 * @param {HTMLElement | ShadowRoot | Element} root
 * @returns {void}
 */
export function dsdPolyfill(root) {
	if (HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode")) return;
	root.querySelectorAll("template[shadowrootmode]").forEach(
		/**
		 * HTML Template Element
		 * @param {HTMLTemplateElement} template
		 */
		(template) => {
			const mode = /**@type {ShadowRootMode}*/ (template.getAttribute("shadowrootmode"));
			const delegatesFocus = template.hasAttribute("shadowrootdelegatesfocus");
			const parentNode = /**@type {Element}*/ (template.parentNode);
			const shadowRoot = parentNode.attachShadow({ mode, delegatesFocus });
			shadowRoot.appendChild(template.content);
			template.remove();
			dsdPolyfill(shadowRoot);
		},
	);
}
