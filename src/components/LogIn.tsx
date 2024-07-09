import "./LogIn.css"
import {FormEvent, useState} from "react";

export function LogIn(){
    type Form ={
        Email: string;
        Password: string;
};

    const [userData, setUserData] =useState<Form>({
        Email: '',
        Password: '',
});

    function handleSubmit(event: FormEvent<HTMLFormElement>):void{
        event.preventDefault();
        const target = event.target as typeof event.target & Form;
        setUserData({
        ...userData,
        Email: target.Email,
        Password: target.Password,
});
}
    return (<>
    <form onSubmit={handleSubmit}>
    <fieldset>
    <legend>Log In</legend>
    <label htmlFor="Email">Email:</label><br/>
    <input name="Email" type="email" id="Email"/><br/>
    <label htmlFor="Password">Password:</label><br/>
    <input name="Password" type="text" id="Password"/><br/>
    <input type="submit" value="Log In"/>
    </fieldset>
    </form>
    </>
)
}
