import React from "react";
import { View } from "react-native";
import color from "../../styles/color";

const DotIndicator = ({ currentPage, totalPages }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:"center", marginVertical: 16 }}>
        {[...Array(totalPages).keys()].map((i) => (
          <View
            key={i}
            style={{
              width: currentPage === i ? 20 : 10,
              height: currentPage === i ? 20 : 10,
              borderRadius: 10,
              backgroundColor: currentPage === i ? color.blue : "#3682d3",
              marginHorizontal: 6,
            }}
          />
        ))}
      </View>
    );
  };
  //"#3682d3"
export default DotIndicator;
  