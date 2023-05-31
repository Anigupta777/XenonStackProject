import React from "react";
export default function Registration() {
    return (
        <>l
            <h1>REGISTRATION FORM </h1>

            <form className="content" action="connect1.php" method="post">

                <div >
                    <label for="name">Enter your name:</label>
                    <input type="text" id="name" name="name" placeholder="ex:abcd" /><br></br>
                    <label for="mail">E mail:</label>
                    <input type="email" id="mail" name="emailid" placeholder="abcd@gmail.com" /><br></br>
                    <label for="password">Enter your password:</label>
                    <input type="password" id="password" name="password" placeholder="enter a strong password" /><br></br>
                    <label for="confirm password">Confirm Password:</label>
                    <input type="password" id="password" name="confirmpassword" placeholder="confirm password " /><br></br>
                    <label for="telephone">Telephone No:</label>
                    <input type="tel" id="telephone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}" name="number" /><br></br>
                    <label for="gender">Gender:</label>
                    <input type="radio" id="Male" name="gender" value="Male" />
                    <label for="Male">Male</label>
                    <input type="radio" id="female" name="gender" value="Female" />
                    <label for="female">Female</label>
                    <input type="radio" id="others" name="gender" value="Others" />
                    <label for="others">Others</label><br></br>
                    <label for="date">Date Of Birth:</label>
                    <input type="date" id="date" name="dateofbirth" placeholder="raman" /><br></br>
                   
                    <marquee >
                        <a href="login.html" name="already" target="blank" marquee width="60%" height="100px">Already have an account:) LOGIN
                            ?</a><br />
                    </marquee>
                    <input type="SUBMIT" name="save" value="SUBMIT" />
                    <input type="RESET" value="RESET" />


                </div>
            </form>


        </>
    )
}