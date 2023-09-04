"use strict";

module.exports = {
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		[
			"@semantic-release/npm",
			{
				tarballDir: "release",
				pkgRoot: "packages/common",
			},
		],
		[
			"@semantic-release/npm",
			{
				tarballDir: "release",
				pkgRoot: "packages/express",
			},
		],
		[
			"@semantic-release/npm",
			{
				tarballDir: "release",
				pkgRoot: "packages/fastify",
			},
		],
		[
			"@semantic-release/github",
			{
				assets: "release/*.tgz",
			},
		],
		[
			"@semantic-release/git",
			{
				assets: [
					"packages/package.json",
					"packages/common/package.json",
					"packages/express/package.json",
					"packages/fastify/package.json",
				],
			},
		],
	],
	preset: "angular",
	branches: [{ name: "main" }, { name: "next", prerelease: true }],
};
