"use strict";

module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		["@semantic-release/npm", { tarballDir: "release" }],
		["@semantic-release/github", { assets: "release/*.tgz" }],
		["@semantic-release/git", { assets: ["package.json"] }],
	],
	preset: "angular",
	branches: [{ name: "main" }, { name: "next", prerelease: true }],
};
