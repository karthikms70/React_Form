import { useState } from "react";
import './form.css'



const Form = () => {
        
        const [value,setValue] = useState({
            userName :"",
            userEmail:""

        })

        const[error,setError] = useState({
            userName:false,
            userEmail:false
        })

                    const onTheSubmit = (e) =>{
                                e.preventDefault();
                                checkValidation();
                            
                            
                    }

                    const changeEle =(event) =>{
                            setValue((pre)=> ({
                            ...pre,
                            [event.target.name] : event.target.value}))
                    }

                    const checkValidation = () =>{
                                // Method 1
                                // if(value.userName === ""){
                                //    setError((pre) =>({
                                //     ...pre,
                                //      userName : true
                                //    } ))}
                                   
                                // else{
                                //     setError((pre) =>({
                                //      ...pre,
                                //      userName : false
                                //     } ))}

                                // Method 2

                                const err = {
                                    userName:false,
                                    userEmail:false

                                }
                                
                                if(value.userName === ""){
                                    err.userName = true;
                                }
                                
                                if(value.userEmail === ""){
                                    err.userEmail = true;
                                }
                                setError(err)
                    }
   
   console.log(value)
    return (
        <>
    
        <form  onSubmit={onTheSubmit} autoComplete="off" className="form1">
            <h1>Personal Information</h1>
                <div className="main-div">
                        <label >Name</label>
                            <input type="text" name="userName"  onChange={(e) => changeEle(e)} />
                            {error.userName && <p>invalid</p>}
                </div>
                <div className="main-div">
                        <label>Email</label>
                            <input type="email" name="userEmail" onChange={(e) => changeEle(e)} />
                            {error.userEmail && <p>invalid</p>}
                </div>
                <div className="main-div">
                        <label>Phone Number</label>
                            <input type="email" name="userEmail" onChange={(e) => changeEle(e)} />
                            {error.userEmail && <p>invalid</p>}
                </div>
                <div className="main-div">
                        <label>Gender</label>
                            <div className="rad">
                            
                                <input type="radio" name="gender" value="male" onChange={(e) => changeEle(e)} />
                                {error.userEmail && <p>invalid</p>}
                                <label className="rad-grps">Male</label>
                                
                            
                                <input type="radio" name="gender" value="female" onChange={(e) => changeEle(e)} />
                                {error.userEmail && <p>invalid</p>}
                                <label className="rad-grps">Female</label>
                              

                                <input type="radio" name="gender"  value="others" onChange={(e) => changeEle(e)} />
                                {error.userEmail && <p>invalid</p>}                    
                                <label className="rad-grps">Others</label>
                                
                              
                             </div>
              
                </div>
                <div className="main-div">
                        <label>Email</label>
                            <input type="email" name="userEmail" onChange={(e) => changeEle(e)} />
                            {error.userEmail && <p>invalid</p>}
                </div>


                
                <button type="submit">Submit</button>
                
        </form>
    


        
        <form  onSubmit={onTheSubmit} autoComplete="off" className="form2">
                <h1>Address</h1>
               
               <div>
               <label>Name</label>
                   <input type="text" name="userName" placeholder="Enter your Name" onChange={(e) => changeEle(e)} />
                   {error.userName && <p>invalid</p>}
               </div>
               
               
               <div>
               <label>Email</label>
                   <input type="email" name="userEmail" onChange={(e) => changeEle(e)} />
                   {error.userEmail && <p>invalid</p>}
               </div>
               <input type="radio"></input>
               <label>hii</label>
                
                <label>hii</label>
                <input type="radio"></input>
                <label>hii</label>
                <input type="radio"></input>
               <button type="submit">Submit</button>
           
        </form>
        
        </>
    )
   
        
 
}

export default Form