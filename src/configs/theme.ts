import { createTheme, MantineColorsTuple } from '@mantine/core';

const brand: MantineColorsTuple = [
  '#E1FFF2',
  '#CFFCE6',
  '#A2F7CE',
  '#71F1B3',
  '#48EC9D',
  '#2DEA8F',
  '#19E887',
  '#00CE74',
  '#00B865',
  '#009F54'
];

const dark: MantineColorsTuple = [
  "#C1C2C5",
  "#A6A7AB",
  "#909296",
  "#5C5F66",
  "#373A40",
  "#2C2E33",
  "#25262B",
  "#1A1B1E",
  "#141517",
  "#101113",
]


export const theme = createTheme({
  primaryColor: "brand",
  colors: {
    brand,
    dark
  }
});
