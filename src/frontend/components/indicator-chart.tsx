import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function buildChartData(names, targetValues, actualValues) {
  let dataArray = [];
  if(!names) {
    return [];
  }
  names.forEach((name, index) => {
    dataArray.push({
      name: name,
      Targets: targetValues[index],
      Actuals: actualValues[index],
    })
  })
  return dataArray
}

const IndicatorChart = ({names, targetValues, values, size}) => {
  let height = 300;
  let width = 600;
  if (!names || !targetValues || !values) {
    return null;
  }
  const data = buildChartData(names, targetValues, values);
  if (size === "small") {
    width = 300;
    height = 150;
  }
  return (
    <div>
      <LineChart width={width} height={height} data={data}>
        <Line type="monotone" dataKey="Targets" stroke="#162152" />
        <Line type="monotone" dataKey="Actuals" stroke="#E41B3C" />
        <CartesianGrid stroke="#ccc" />
        {size !== "small" && (
          <>
            <XAxis dataKey="name" />
            <YAxis
              tickFormatter={(value) =>
                new Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(value)
              }
            />
          </>
        )}
      </LineChart>
    </div>
  )
}

export default IndicatorChart;
