module.exports = {
    parser : '@typescript-eslint/parser',
    parserOptions : {
        'project' : './tsconfig.json' 
    },
    settings: {
        react : {
            version: 'detect'
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-ally/recommended',
    ],
}