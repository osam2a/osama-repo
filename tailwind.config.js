/** @type {import('tailwindcss').Config} */
import plugin from './node_modules/tailwindcss/plugin';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#179957',
        accentDark: '#184d42',
      },

      container: {
        center: true,
        padding: '15px',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      const components = {
        '.buttonContainer': {
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem',
          border: '1px solid black',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        },

        '.google-sign-in': {
          backgroundColor: '#4285f4',
          color: ' white',

          ' &:hover': {
            backgroundColor: ' #357ae8',
          },
        },

        '.inverted': {
          backgroundColor: 'white',
          color: 'black',
          '&:hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        },
      };

      const Utilities = {
        ' .shrinkLabel': {
          top: '-1.5rem ',
          fontSize: ' 1rem',
          color: 'gray',
        },
      };

      addComponents({ ...components });
      addUtilities({ ...Utilities });
    }),
  ],
};
