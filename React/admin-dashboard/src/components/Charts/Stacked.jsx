import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, Chart } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { ToolBase } from '@syncfusion/ej2/diagrams'

const Stacked = (width, height) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    </ChartComponent>
  )
}

export default Stacked
