// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi' 

const myCustomTheme = {
  dark: false, // Set to `true` for dark mode
  colors: {
    primary: "#9652ff",
    success: "#3cd1c2",
    info: "#ffaa2c",
    error: "#f83e70",
    myCustomColor: '#9C27B0' 
  }
}

export default createVuetify({
  // icons: {
  //   defaultSet: 'mdi', // Use Material Design Icons
  // },
  icons: {
    defaultSet: 'mdi',
    sets: { mdi } // ✅ Add MDI set explicitly
  },
  
  theme: {
    defaultTheme: 'customTheme', // Set this as the default theme
    themes: {
      customTheme: myCustomTheme,
    }
  }
}
)
