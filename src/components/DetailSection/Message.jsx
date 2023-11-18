import { Controller, useFieldArray, useFormContext } from "react-hook-form"

export const Message =()=>{
  const methods = useFormContext();
  const arr = useFieldArray({
    control: methods.control,
    name: "texts",
  });
    return(
        
        <div className="form--item">
        <label htmlFor="message">Text</label>
        <button onClick={()=>arr.append("")}> + </button>
        {arr.fields.map(({id},index)=>{
          
         return (<Controller
         key={id}
        name = {`texts[${index}]`}
        control={methods.control}
        render={({field})=> (
          <>
        <textarea {...field} cols="30" rows="10"></textarea>
        <button onClick={()=>arr.remove(index)}> - </button>
        </>)
        }
        />)
        })}
        
      </div>
    )
}