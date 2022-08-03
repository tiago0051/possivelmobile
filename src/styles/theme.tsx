import React, { ReactElement } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            BACKGROUND_COLOR: '#f5f5f5',
            PRIMARY_BUTTON_COLOR: '#e4dd15',
            TEXT_COLOR: 'black'
        }
    }
}

const theme: DefaultTheme = {
  colors: {
    BACKGROUND_COLOR: '#f5f5f5',
    PRIMARY_BUTTON_COLOR: '#e4dd15',
    TEXT_COLOR: 'black'
  }
};

export function Theme(data: {children: ReactElement[] | ReactElement}) {
  return <ThemeProvider theme={theme}>{data.children}</ThemeProvider>;
}