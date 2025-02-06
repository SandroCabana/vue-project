/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@fortawesome/fontawesome-free/css/all.css";
import 'vuetify/styles'
import { fa } from "vuetify/iconsets/fa";
import { aliases } from "vuetify/lib/iconsets/fa";
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {

      fa,
    },
  },
})
