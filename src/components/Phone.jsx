import { forwardRef, useContext } from "react";
import { ContactContext } from "./Contact";
import { useContact } from "./hooks";

export const Phone = () => {
  const { phone, setPhone } = useContact();
  return (
    <div className="form--item">
      <label htmlFor="phone">Phone</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
        type="tel"
        id="phone"
      />
    </div>
  );
};
