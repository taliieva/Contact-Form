import React, { useRef } from "react";
import "../components/Contact.css";
import { useEffect } from "react";
import { Phone } from "./PersonalInfoSection/Phone";
import { Fullname } from "./PersonalInfoSection/Fullname";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { createContext } from "react";
import { DetailSection } from "./DetailSection";
import { FormProvider, useForm } from "react-hook-form";
//import {ContactContext} from "./hooks"
import { DevTool } from "@hookform/devtools";

export function Contact() {
  const fetchInitialData = async()=>{
    const res = await fetch("http://localhost:3001/");
    const data = await res.json();
    return data;
  };

  React.useEffect(()=>{
    async function fetchData(){
      const data = await fetchInitialData();
      console.log(data);
    }
    fetchData();
  }, []);

  const methods = useForm({
    mode: "all",
    defaultValues: fetchInitialData,
  });

  //const [file, setFile] = useState();
  /*const [fullName, setFullName] = useState({
    value: "",
    error:null,
    
  }); 
  const [phone, setPhone] = useState("");
  //const data = useRef(null);
  //const fileRef = useRef();
  //const fullnameRef = useRef();
  //const phoneRef = useRef(null);

  //console.log("contact");
*/
  const formHandler = methods.handleSubmit((values) => {
      console.log(values);
      console.log(methods.formState.errors);
  });
  /*
  const uploaderClickHandler = () => {
    fileRef.current.click();
  };
  const uploaderChangeHandler = (e) => {
    setFile(e.target.files[0]);
    console.log(data.current)
  };
*/

  return (
    /*<ContactContext.Provider
     value={{
        fullName,
        setFullName,
        phone,
        setPhone,
    }}>*/
    <FormProvider {...methods}>
      <h1>Contact Form</h1>
      <form onSubmit={formHandler}>
        <PersonalInfoSection />
        <DetailSection />

        {/*  <div className="form--item">
          <label htmlFor="file">File</label>
          <div className="uploader" onClick={uploaderClickHandler}>
            <svg
              className="uploader-icon"
              viewBox="0 0 190 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.4167 139.873C44.6029 139.174 34.328 135.616 26.059 129.706C17.79 123.796 11.9498 115.837 9.37223 106.966C6.7947 98.0942 7.61166 88.7637 11.7064 80.3065C15.8012 71.8493 22.9645 64.6979 32.1734 59.8733C34.1328 47.0072 41.5926 35.1833 53.1566 26.6144C64.7207 18.0454 79.5964 13.3186 95 13.3186C110.404 13.3186 125.279 18.0454 136.843 26.6144C148.407 35.1833 155.867 47.0072 157.827 59.8733C167.036 64.6979 174.199 71.8493 178.294 80.3065C182.388 88.7637 183.205 98.0942 180.628 106.966C178.05 115.837 172.21 123.796 163.941 129.706C155.672 135.616 145.397 139.174 134.583 139.873V140H55.4167V139.873ZM102.917 86.6667H126.667L95 53.3333L63.3334 86.6667H87.0834V113.333H102.917V86.6667Z"
                fill="#1E77CC"
              />
            </svg>
            Click to upload
          </div>
          {file && <span>{file.name}</span>}
          <input
            ref={fileRef}
            onChange={uploaderChangeHandler}
            name="file"
            type="file"
            id="file"
            accept=".png,.jpg"
          />
  </div>*/}
        <input value="Submit" type="submit" />
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
    // </ContactContext.Provider>
  );
}
