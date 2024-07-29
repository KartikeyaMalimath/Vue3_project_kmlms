// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { md3 } from 'vuetify/blueprints'
import colors from 'vuetify/util/colors'

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
    blueprint: md3,
    theme: {
        defaultTheme: "CustomDarkTheme",
        themes: {
            CustomDarkTheme: {
                dark: true,
                colors: {
                    primary: colors.purple.darken3
                }
            },
            CustomLightTheme: {
                light: true,
                colors: {
                    primary: colors.purple.darken3
                }
            }
        }
    }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
