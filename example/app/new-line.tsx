import React from "react";
import { LineChart } from "victory-native-skia";
import { SimpleData } from "../components/SimpleData";
import { Circle, Path } from "@shopify/react-native-skia";

export default function NewLinePage() {
  return (
    <SimpleData
      renderChart={({ data }) => (
        <LineChart
          data={data}
          xKey="x"
          yKeys={["y"]}
          padding={20}
          renderPaths={({ paths }) => (
            <React.Fragment>
              {paths.map((path, i) => (
                <Path
                  key={i}
                  path={path}
                  style="stroke"
                  color="black"
                  strokeWidth={4}
                />
              ))}
            </React.Fragment>
          )}
          renderTooltip={({ isActive, xPosition, yPositions }) =>
            isActive && (
              <Circle cx={xPosition} cy={yPositions[0]} r={5} color="red" />
            )
          }
        />
      )}
    ></SimpleData>
  );
}
