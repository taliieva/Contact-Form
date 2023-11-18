import { forwardRef, useContext } from "react";
import { ContactContext } from "../Contact";
import { Controller, useFormContext } from "react-hook-form";
//import { useContact } from "../hooks";

export const Phone = () => {
  const methods = useFormContext();
  //const { phone, setPhone } = useContact();
  return (
    <div className="form--item">
      <label htmlFor="phone">Phone</label>
      <input {...methods.register("phone")} type="tel" id="phone" />
      {/*<Controller
        name="phone"
        control={methods.control}
        render={({ field }) => <input {...field} type="tel" id="phone" />
        }
      />*/}
    </div>
  );
};
