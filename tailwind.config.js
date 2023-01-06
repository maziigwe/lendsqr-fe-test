module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    mode: 'jit',
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                '"Fira Sans"',
                '"Droid Sans"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ],
            mono: [
                'Consolas',
                '"Andale Mono WT"',
                '"Andale Mono"',
                '"Lucida Console"',
                '"Lucida Sans Typewriter"',
                '"DejaVu Sans Mono"',
                '"Bitstream Vera Sans Mono"',
                '"Liberation Mono"',
                '"Nimbus Mono L"',
                'Monaco',
                '"Courier New"',
                'Courier',
                'monospace'
            ]
        },
        extend: {
            colors: {
                primary_text_color: '#213F7D',
                secondary_text_color_1: '#545F7D',
                tertiary_color: '#39CDCC'
            },
            fontFamily: {
                sans: ['Avenir Next', 'sans-serif']
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('postcss-import')]
}
