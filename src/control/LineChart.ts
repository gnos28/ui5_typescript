import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";

/**
 * @name com.myorg.tsexo1.control.LineChart
 */
export default class LineChart extends Control {
  constructor(idOrSettings?: string | $LineChartSettings);
  constructor(id?: string, settings?: $LineChartSettings);
  constructor(id?: string, settings?: $LineChartSettings) {
    super(id, settings);
  }

  static readonly metadata = {
    properties: {
      title: "string",
      color: "sap.ui.core.CSSColor",
    },
    aggregations: {
      records: {
        type: "com.myorg.tsexo1.control.ChartRecord",
      },
    },
    defaultAggregation: "records",
  };

  renderer = {
    apiVersion: 2,
    render: (rm: RenderManager, chart: LineChart) => {
      rm.openStart("div", chart);
      rm.style("color", chart.getColor());
      rm.style("padding", "2em");
      rm.openEnd();

      chart.getRecords().forEach((record) => {
        rm.unsafeHtml(`${record.getValue()}<br>`);
      });

      rm.close("div");
    },
  };
}
