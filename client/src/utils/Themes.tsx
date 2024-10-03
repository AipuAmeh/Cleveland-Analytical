import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            thistle: '#C8B8DB',
            purple: '#690375',
            snow: '#F8F7FF',
            violet: '#502F4C',
            chineseViolet: '#70587C',
            black: '#000000'
        },
        transparent: {
            thistle: 'rgba(200, 184, 219, 0.3)'
        }
    }
})

export default theme;