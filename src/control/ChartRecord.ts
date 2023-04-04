import UI5Element from "sap/ui/core/Element";

/**
 * @name com.myorg.tsexo1.control.ChartRecord
 */
export default class ChartRecord extends UI5Element {
  constructor(idOrSettings?: string | $ChartRecordSettings);
  constructor(id?: string, settings?: $ChartRecordSettings);
  constructor(id?: string, settings?: $ChartRecordSettings) {
    super(id, settings);
  }
  static readonly metadata = {
    properties: {
      label: "string",
      value: "float",
    },
  };
}
