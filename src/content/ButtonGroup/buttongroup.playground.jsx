import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { ButtonGroup, Text } from "react-native-elements";

import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const ButtonGroupPlayground = () => {
  const params = useView({
    componentName: "ButtonGroup",
    props: {
      buttonStyle: {
        type: PropTypes.Object,
        value: `{width:100}`,
      },
      buttonContainerStyle: { type: PropTypes.Object, value: `{}` },
      buttons: {
        type: PropTypes.Array,
        value: `['Hello', 'World', 'React',"Native","Elements"]`,
      },
      Component: {
        type: PropTypes.ReactNode,
        description:
          "React Native Component	TouchableOpacity (ios) or TouchableNativeFeedback (android)",
        value: null,
      },
      containerStyle: { type: PropTypes.Object, value: `{}` },
      disabled: {
        type: PropTypes.Array,
        description:
          "boolean OR number[]. Controls if buttons are disabled. Setting true makes all of them disabled, while using an array only makes those indices disabled.",

        value: `[3,4]`,
      },
      disabledStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      disabledTextStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      disabledSelectedStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      disabledSelectedTextStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      innerBorderStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("onPress()")`,
      },
      selectMultiple: {
        type: PropTypes.Boolean,
        value: false,
      },
      selectedButtonStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      selectedIndex: {
        type: PropTypes.Number,
        value: `1`,
      },
      selectedIndexes: {
        type: PropTypes.Array,
        value: `[1,2]`,
      },
      selectedTextStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      textStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      underlayColor: {
        type: PropTypes.String,
        value: null,
      },
      vertical: {
        type: PropTypes.Boolean,
        value: false,
      },
    },
    scope: {
      ButtonGroup,
    },
    imports: {
      "react-native-elements": {
        named: ["ButtonGroup"],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default ButtonGroupPlayground;
