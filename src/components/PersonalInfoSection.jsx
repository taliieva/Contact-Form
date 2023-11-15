import { Fullname } from "./Fullname";
import { Gender } from "./Gender";
import { Phone } from "./Phone";

export const PersonalInfoSection = ({
  fullnameValue,
  fullnameChangeHandler,
  phoneValue,
  phoneChangeHandler,
}) => {
  return (
    <>
      <Fullname value={fullnameValue} onChange={fullnameChangeHandler} />
      <Phone value={phoneValue} onChange={phoneChangeHandler} />
      <Gender />
    </>
  );
};
