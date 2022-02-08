export const config = {
  name: `n2k`,                // Application's name

  logo: {
    icon: `logo_icon.png`,      // A filename in ~/static/
    // text: `logo_text.png`,   // This is needed if you want to use a text logo.
  },

  webApiUrl: ``,

  consoleLocation: 'bottom',    // Placing the console.
  keepState: false,

  messages: {
    initialMsg: [{ text: `Please refer to the DOCUMENT on the upper right of this page for the instructions.` }],
    connectionErrorMsg: [{ text: `An error occurred while communicating with the server.` }],
    cancelRequestMsg: [{ text: `Canceled by the user.` }],
    readErrorMsg: [{ text: `An error occured while reading the file.` }]
  },

  features: {
    clear: {
      enable: true,
      icon: 'mdi-delete'
    },
    history: {
      enable: true,
      icon: 'mdi-history'
    },
    examples: {
      enable: false,
      icon: 'mdi-alpha-e-box'
    },
    files: {
      enable: false,
      icon: 'mdi-file-multiple',
      webApiUrl: '',
    },
    variables: {
      enable: false,
      icon: 'mdi-order-alphabetical-ascending'
    },
    sendReq: {
      enable: true,
      icon: 'mdi-play',
      after: (webcui, result) => {
        webcui.addLine({ html: '' })
        webcui.addLine({ html: result })
      }
    }
  }
}
