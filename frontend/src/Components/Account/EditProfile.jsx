import { useEffect, useState } from "react";
import DetailsForm from "../Login/Details";
function EditProfile(){
  const [formData, setFormData] = useState({
   
    nameValue: "",
    emailValue: '',
    phoneValue: '',
    passwordValue: '', 
  })

  useEffect(() => {
    setFormData(
      {
        nameValue: "Smriti",
        emailValue: 'smriti123@gmail.com',
        phoneValue: '3940490489',
        passwordValue: 'helloWorld2',
      }
    )
  }, [formData.nameValue, formData.emailValue, formData.emailValue, formData.passwordValue])

    return(
        <DetailsForm className="edit-profile"
        header="Edit Profile"
        name={formData.nameValue}
        email={formData.emailValue}
        phone={formData.phoneValue}
        password={formData.passwordValue}
        />
    )
}
export default EditProfile;