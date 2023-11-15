export const Gender = ()=>{
    return(
        <div className="form--item">
          <label htmlFor="">Gender</label>
          <div>
            <label htmlFor="male">
              <input type="radio" name="gender" id="male" />
              Male
            </label>
            <label htmlFor="female">
              <input type="radio" name="gender" id="female" />
              Female
            </label>
          </div>
        </div>
    )
}