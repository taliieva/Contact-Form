import { useContext } from "react";
import { ContactContext } from "../Contact";
import { Controller, useFormContext } from "react-hook-form";
//import { useContact } from "../hooks";

export const Fullname = () => {
  const methods = useFormContext();
  //const { fullName, setFullName } = useContact();
  return (
    <div className="form--item">
      <label htmlFor="name">Name</label>

      <Controller
        control={methods.control}
        name="fullname.name"
        rules={{
          required: "this field is mandotary!",
          pattern: {
            value: /[A-Z]$/,
            message: "Pattern-e uygun deyil",
          },
          validate: (value) => {
            return (
              !value.includes("Terane") && "the value should contain Terane"
            );
          },
        }}
        render={({ field }) => <input {...field} type="text" id="name" />}
      />

      {methods.formState.errors?.fullname && (
        <div className="form-error">
          {methods.formState.errors?.fullname?.message}
        </div>
      )}
      <label htmlFor="surname">Surname</label>
  <Controller
        control={methods.control}
        name="fullname.surname"
        rules={{
          required: "this field is mandotary!",
          pattern: {
            value: /[A-Z]$/,
            message: "Pattern-e uygun deyil",
          },
          validate: (value) => {
            return (
              !value.includes("Terane") && "the value should contain Terane"
            );
          },
        }}
        render={({ field }) => <input {...field} type="text" id="surname" />}
      />
      {/*fullName.error && <div style={{color:"red"}}>{fullName.error}</div>*/}
    </div>
  );
};
