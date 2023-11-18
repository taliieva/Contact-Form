import { Controller, useFormContext } from "react-hook-form";

export const Gender = () => {
  const methods = useFormContext();
  return (
    <div className="form--item">
      <label htmlFor="">Gender</label>
      <div>
        <Controller
          name="gender"
          control={methods.control}
          rules={{
            required: "this field is mandotary!",
          }}
          render={({ field }) => (
            <>
              <label htmlFor="male">
                <input
                  checked={field.value === "male"}
                  //defaultChecked={field.value === "male"}
                  type="radio"
                  id="male"
                  {...field}
                  value="male"
                />
                Male
              </label>
              <label htmlFor="female">
                <input
                  checked={field.value === "female"}
                  //defaultChecked={field.value === "female"}
                  type="radio"
                  id="female"
                  {...field}
                  value="female"
                />
                Female
              </label>
            </>
          )}
        />
        {methods.formState.errors?.gender && 
        <div className="form-error">{methods.formState.errors?.gender?.message}</div>}
      </div>
    </div>
  );
};
