import React from "react";

export default function About(props){
    return(
        <>
        <div className={`container text-${props.mode ==='light'? 'black' : 'white'}`} style={{display:`flex`,justifyContent: `center`}}>
            <h1 className="my-3">About Us</h1>
        </div>
        
        <div className="container myCont"  style={{ display:'flex',justifyContent:'center',alignItems:'center',marginTop:`4rem`}}>
        
            <div className={`content container text-${props.mode ==='light'? 'black' : 'white'}`} >
                <h3>Our Services</h3>
                <p>Lorem ipsum dolor sit amet consectetfdgdfgfgdfgur dg dgf fd g dfgf fd gfdgdffg fhh gf hfshj adipisicing elit. Odio ea, provident aliquid consequatur odit ipsa itaque obcaecati aspernatur non repellat cupiditate beatae pariatur ullam quis voluptas mollitia! Optio quo esse corporis possimus dolorum modi, nostrum dolorem accusantium beatae, consectetur mollitia commodi deleniti aut sunt ullam impedit cum dignissimos, repudiandae ipsum!</p>
            </div>
            <div className="image container" style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src="services.png" alt="" style={{width:`50%`}}/>
            </div>

        </div>
        <div className="container myCont " style={{marginTop:`5rem`}}>

        <div className="image container " style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src="clients.png" alt="" style={{width:`50%`}}/>
            </div>
            <div className={` content container text-${props.mode ==='light'? 'black' : 'white'}`} style={{}}>
                <h3>Clients</h3>
                <p>Lorem ipsum dolor sit amet consectetfdgdfgfgdfgur dg dgf fd g dfgf fd gfdgdffg fhh gf hfshj adipisicing elit. Odio ea, provident aliquid consequatur odit ipsa itaque obcaecati aspernatur non repellat cupiditate beatae pariatur ullam quis voluptas mollitia! Optio quo esse corporis possimus dolorum modi, nostrum dolorem accusantium beatae, consectetur mollitia commodi deleniti aut sunt ullam impedit cum dignissimos, repudiandae ipsum!</p>
            </div>

        </div>
        <div className="container myCont"  style={{ justifyContent:'center',alignItems:'center',marginTop:`6rem`}}>
        
        <div className={`content container text-${props.mode ==='light'? 'black' : 'white'}`} >
            <h3>Reviews</h3>
            <p>Lorem ipsum dolor sit amet consectetfdgdfgfgdfgur dg dgf fd g dfgf fd gfdgdffg fhh gf hfshj adipisicing elit. Odio ea, provident aliquid consequatur odit ipsa itaque obcaecati aspernatur non repellat cupiditate beatae pariatur ullam quis voluptas mollitia! Optio quo esse corporis possimus dolorum modi, nostrum dolorem accusantium beatae, consectetur mollitia commodi deleniti aut sunt ullam impedit cum dignissimos, repudiandae ipsum!</p>
        </div>
        <div className="image container" style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src="review.png" alt="" style={{width:`40%`}} />
        </div>

    </div>
        
        </>

    )
}