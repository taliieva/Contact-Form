import { useContext } from "react";
import { ContactContext } from "./Contact";
import { useContact } from "./hooks";

export const Fullname = () => {
  const { fullName, setFullName } = useContact();
  return (
    <div className="form--item">
      <label htmlFor="fullname">Fullname</label>
      <input
      style={{borderColor:fullName.error ? "red" :"green"}}
        value={fullName.value}
        onChange={(e) =>
          setFullName((prevState) => ({
            ...prevState,
            value: e.target.value,
            error: false,
          }))
        }
        onBlur={()=>{
          if(!fullName.value.trim().length){
            setFullName(prevState =>({...prevState,error:"This field is required"}))
          }
        }}
        name="fullname"
        type="text"
        id="fullname"
      />
      {fullName.error && <div style={{color:"red"}}>{fullName.error}</div>}
    </div>
  );
};
