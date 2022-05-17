import * as React from "react";
import { UseFormMethods } from "react-hook-form";

export default ({ reset }: { reset: UseFormMethods["reset"] }) => (
  <>
    <button
      className="button buttonBlack"
      type="button"
      onClick={() => {
        reset({
          Native: "",
          TextField: "",
          Select: "",
          ReactSelect: { value: "vanilla", label: "Vanilla" },
          Checkbox: false,
          switch: false,
          RadioGroup: "",
          ReactDatepicker: new Date(),
          numberFormat: 123456789,
          downShift: "apple",
          country: { code: "AF", label: "Afghanistan", phone: "93" }
        });
      }}
    >
      Reset Form
    </button>
    <button className="button">submit</button>
  </>
);
