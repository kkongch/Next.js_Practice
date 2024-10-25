"use client";
import { type ChakraTheme, extendTheme } from "@chakra-ui/react";

import colors from "./foundation/color";

const overrides: Partial<ChakraTheme> = {
  colors,
};

export default extendTheme(overrides);
