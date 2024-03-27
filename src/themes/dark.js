const theme = {
  id: 'dark',
  data: {
    main: {
      backgroundColor: '#000000',
    },
    welcome: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      content: {
        color: 'white',
        backgroundColor: '#000000',
      },
    },
    quiz: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      content: {
        color: 'white',
        backgroundColor: '#000000',
      },
    },
    result: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      content: {
        color: 'white',
        backgroundColor: '#000000',
      },
      apiWarningPage: {
        color: 'yellow',
        backgroundColor: 'black',
        borderColor: 'yellow',
      },
    },
  },
}

export const getTheme = () => theme
