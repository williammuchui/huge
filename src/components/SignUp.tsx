import "./SignUp.css";
import {useState, FormEvent} from "react";
import {Link} from "react-router-dom";

export function SignUp(){
    type Form ={
        Username: string;
        Email: string;
        Password: string;
        RepeatPassword: string;
        AcceptTerms: boolean;
        AcceptPrivacyPolicy: boolean;
};
        
   const [userData, setUserData] = useState<Form>({
        Username:"",
        Email:"",
        Password:"",
        RepeatPassword:"",
        AcceptTerms:false,
        AcceptPrivacyPolicy: false,
});
    function updateData(data:Partial<Form>){
        setUserData({ ...userData,...data});
}
  function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const target = event.target as typeof event.target & Form;

        updateData({
        Username: target.Username,
        Email: target.Email,
        Password: target.Password,
        RepeatPassword: target.RepeatPassword,
        AcceptTerms: target.AcceptTerms,
        AcceptPrivacyPolicy: target.AcceptPrivacyPolicy,
});
}
    return (<>
    <form onSubmit={handleSubmit}>
    <fieldset>
    <legend>Sign Up</legend>
    <label htmlFor="Username">Username:</label><br/>
    <input name="Username" id="Username" type="text"/><br/>
    <label htmlFor="Email">Email:</label><br/>
    <input name="Email" id="Email" type="email"/><br/>
    <label htmlFor="Password">Password:</label><br/>
    <input name="Password" id="Password" type="text"/><br/>
    <label htmlFor="RepeatPassword">Repeat Password:</label><br/>
    <input name="RepeatPassword" id="RepeatPassword" type="text"/><br/>
    <div id="terms-policy">
    <input name="AcceptTerms" type="checkbox"/>Accept <Link to="terms">Terms and Conditions</Link><br/>
    <input name="AcceptPrivacyPolicy" type="checkbox"/>Accept <Link to="privacy">Privacy Policy</Link><br/>
    </div>
    <div id="register-reset">
    <input type="submit" value="Register"/>
    <input name="Reset" type="reset" value="Reset"/>
    </div>
    </fieldset>
    </form>

</>
)
}
