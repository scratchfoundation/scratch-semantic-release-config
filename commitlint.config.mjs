/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
    extends: ['@commitlint/config-conventional'],
    ignores: [message => message.startsWith('chore(release):')]
};
