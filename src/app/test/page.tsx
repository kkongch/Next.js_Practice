"use client";

import {
  Checkbox,
  CheckboxGroup,
  Stack,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  useBoolean,
  useMediaQuery,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

const TestCheckboxes = () => {
  const [flag, setFlag] = useBoolean();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const mouseOn = () => {
    console.log("마우스가 올려졌어요");
  };
  const mouseOff = () => {
    console.log("마우스가 내려졌어요");
  };
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const calculater = useMemo(
    () => console.log("계산결과는?", value1 + value2),
    [value1, value2]
  );
  useEffect(() => {
    if (isLargerThan1280) {
      console.log("1280px 이상일 때");
      console.log(isLargerThan1280);
    } else {
      console.log("1280px 미만일 때");
    }
  }, [isLargerThan1280]);
  return (
    <>
      <Stack spacing={[1, 5]} direction={["column", "row"]}>
        <Checkbox size="sm" colorScheme="red">
          Checkbox
        </Checkbox>
        <Checkbox size="md" colorScheme="purple" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="lg" colorScheme="butter" defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>

      <StatGroup>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber color={"butter"}>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" color={"purple"} />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
        {flag ? "The flag is ON!" : "Hover me to turn ON"}
      </div>

      <Text>
        {isLargerThan1280 ? "larger than 1280px" : "smaller than 1280px"}
      </Text>
      <Slider
        isReadOnly
        aria-label="action slider"
        colorScheme="pink"
        orientation="horizontal"
        defaultValue={30}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
      </Slider>
    </>
  );
};

export default TestCheckboxes;
