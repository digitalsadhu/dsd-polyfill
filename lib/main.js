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

export function dsdPolyfill(root) {
	if (HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode")) return;
	root.querySelectorAll("template[shadowrootmode]").forEach((template) => {
		const mode = template.getAttribute("shadowrootmode");
		const delegatesFocus = template.hasAttribute("shadowrootdelegatesfocus");
		const shadowRoot = template.parentNode.attachShadow({ mode, delegatesFocus });
		shadowRoot.appendChild(template.content);
		template.remove();
		dsdPolyfill(shadowRoot);
	});
}
