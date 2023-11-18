import { Controller, useFormContext } from "react-hook-form";

export const Priority = () => {
  const methods = useFormContext();
  return (
    <div className="form--item">
      <label htmlFor="priority">Priority</label>
      <Controller
        name="priority"
        control={methods.control}
        render={({ field }) => (
          <select {...field} id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        )}
      />
    </div>
  );
};
