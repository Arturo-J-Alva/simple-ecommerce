const purgecss = [
    '@fullhuman/postcss-purgecss',
    {
        // Specify the paths to all of the template files
        content: [
            './src/pages/**/*.{js,jsx,ts,tsx}',
            './src/g_components/**/*.{js,jsx,ts,tsx}',
        ],
        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    },
];
module.exports = {
    plugins: [
        'tailwindcss',
        process.env.NODE_ENV === 'production' ? purgecss : undefined,
        'postcss-preset-env',
    ],
};