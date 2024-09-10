// semantic-release parses curly-brace template items in plain strings:
/* eslint-disable no-template-curly-in-string */

module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.'
            }
        ],
        [
            '@semantic-release/npm',
            {
                // Do not set 'tarballDir' to a relative path without considering this issue:
                // https://github.com/semantic-release/npm/issues/535
                // If the tarball is within the package directory, it will be included in the second 'prepack' run.
                tarballDir: '/tmp/semantic-release-${nextRelease.gitHead}/'
            }
        ],
        [
            '@semantic-release/git',
            {
                // eslint-disable-next-line no-template-curly-in-string
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n' +
                    '${(nextRelease.notes.length < 32000) ? ' +
                    'nextRelease.notes : (nextRelease.notes.slice(0,32000) + "...\\n\\n(Notes too long. Truncated.)")}'
            }
        ],
        [
            '@semantic-release/github',
            {
                assets: '/tmp/semantic-release-${nextRelease.gitHead}/*.tgz'
            }
        ]
    ]
};
