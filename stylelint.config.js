module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules',
        'stylelint-scss',
        'stylelint-config-standard-scss'
    ],
    rules: {
        'at-rule-no-unknown': null,
        'no-descending-specificity': null,
        'scss/dollar-variable-pattern': null,
        'scss/at-mixin-pattern': null,
        'selector-class-pattern': null
    },
};
