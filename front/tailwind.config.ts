import type {Config} from 'tailwindcss'


export default <Config>{
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md'
    ],
    theme: {
        extend: {
            colors: {
                base: '#F9F9F9',
                primary: '#586B4B',
                accent: '#7EFE3E'
            },
            fontFamily: {
                'body': ['Roboto Condensed'],
                'h': ['Oswald']
            }
        }
    },

}
