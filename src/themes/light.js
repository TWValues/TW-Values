const theme = {
  id: 'light',
  data: {
    main: {
      backgroundColor: 'white',
    },
    welcome: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      content: {
        color: 'black',
        backgroundColor: 'white',
      },
    },
    quiz: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      content: {
        color: 'black',
        backgroundColor: 'white',
      },
    },
    result: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      content: {
        color: 'black',
        backgroundColor: 'white',
      },
      apiWarningPage: {
        color: 'orangered',
        backgroundColor: 'white',
        borderColor: 'black',
      },
    },
  },
}

export const getTheme = () => theme
