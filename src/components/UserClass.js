import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"DUMMY",
                location:"DEFAULT"
            }
        };
        // this.state={
        //     count:0,
        //     count2:2,
        // };
       console.log(this.props.name+"Child Constructor");
    }

   async componentDidMount(){
     //   console.log(this.props.name+"Child Component Did Mount"); 
     //API CALL

     const data=await fetch("https://api.github.com/users/Tanish-Tandon");
     const json=await data.json();

        this.setState({
            userInfo:json
        });
     console.log(json);
    }

    componentDidUpdate(){
        console.log("COMPONENT DID UPDATE");
    }
    componentWillUnmount(){
        console.log("COMPONENT WILL UNMOUNT");
    }
    render(){
        // const {name,location}=this.props;
        const {name,location,avatar_url}=this.state.userInfo;

        // const {count}=this.state;

       console.log(this.props.name+"Child Render")


         return(
        <div className="user-card">
            <img src={avatar_url} />
            {/* <h1>Count: {count}</h1>
            <button onClick={()=>{
                //Never do this.state.count = this.state.count + 1.   if there is count2 then add easily do not create seperate variable
                //whatever value passed react only update that count ,count2 if in constructor there is count 3 and count4 so it not update count3,4
                this.setState({
                    count:this.state.count+1,
                    //count2:this.state.count2+1,
                });

            }}>Count Increase</button> */}


   
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:7983462</h4>

        </div>
    );  
    }
}
export default UserClass;