import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import Chart from "chart.js/auto";
import ChartRecord from "./ChartRecord";

const recordToDate = (record: ChartRecord) => {
  return new Date(record.getLabel()).toDateString();
};

/**
 * @name com.myorg.tsexo1.control.LineChart
 */
export default class LineChart extends Control {
  constructor(idOrSettings?: string | $LineChartSettings);
  constructor(id?: string, settings?: $LineChartSettings);
  constructor(id?: string, settings?: $LineChartSettings) {
    super(id, settings);
  }

  private _chart: Chart;

  _getChartData() {
    const aRecords = this.getRecords();
    return {
      labels: aRecords.map((record) => recordToDate(record)),
      datasets: [
        {
          label: this.getTitle(),
          backgroundColor: this.getColor(),
          borderColor: this.getColor(),
          data: aRecords.map((record) => record.getValue()),
        },
      ],
    };
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

      rm.openStart("canvas", chart.getId() + "-canvas");
      rm.openEnd();
      rm.close("canvas");

      rm.close("div");
    },
  };

  onAfterRendering() {
    if (!this._chart) {
      this._chart = new Chart(this.getDomRef("canvas") as HTMLCanvasElement, {
        type: "line",
        data: this._getChartData(),
        options: {
          responsive: true,
        },
      });
    } else {
      this._chart.data = this._getChartData();
      this._chart.update();
    }
  }
}
