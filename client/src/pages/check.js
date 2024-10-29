import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Use faSearch instead of faMagnifyingGlass
import NavBar from '../components/navbar';
import './check.css';
import img1 from '../images/0.png'
import img2 from '../images/1.png'
import img3 from '../images/40.png'
import img4 from '../images/70.png'


const Check = () => {

    const [ currurl, seturl ] = useState('');
    const [ result, setresult ] = useState(0);
    const [ pop, setpop ] = useState(false);
    const [ img, setimg ] = useState(img1);
    const [ abc , setabc]  = useState();
    const [toggle,settog] = useState(false);
    const [error, seterror] = useState(false);
    const [intial,setinit] = useState(true);
    
<<<<<<< HEAD

    

    const CheckURL = async(url) => {
        try {
=======
    
    

    const CheckURL = async(url) => {
        
        setTimeout(() => {
        window.location.reload(); // This will reload the page after the changes
        }, 5000);
        
        try {
            
>>>>>>> main
            const response = await fetch(`http://127.0.0.1:8000/checkurl?url=${currurl}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setinit(false)
            setresult(await response.json());
            setpop(true);
            settog(!toggle);
<<<<<<< HEAD
=======
            // Reload the page after updating the state
        
>>>>>>> main
          } catch (error) {
            console.error('Fetch error:', error);
            seterror(true);
            setpop(false);
          }
        //   console.log("working");
    }

   
    const handleurl = (event) => {
        seturl(event.target.value);
        // console.log(currurl);
    }


    const renderParagraphs = () => {
<<<<<<< HEAD
=======

>>>>>>> main
        if(pop){
            if( 40 <= result  && result < 60){
                setimg(img3) ;
                setabc(<h1 className="block">🫤 Unclear if it is a phishing website</h1>);
            }
            else if( result >= 1 && result < 40){
                setimg(img2);
                setabc(<h1 className="block">✅ Phew! this website looks Safe</h1>);
            }
            else if(result===0){
                setimg(img1);
                setabc(<h1 className="block">✅ Phew! this website looks Safe</h1>);
            }
            else{
                setimg(img4);
                setabc(<h1 className="block">❌ Hope you didn't click the URL looks Unsafe!!!</h1>);
            }
            // console.log(img);
        }
        else{
            if(error){
                seterror(false)
                setimg(img4);
                setabc(<h1 className="block">Hold Tight fault is on our side... Retry</h1>)
            }
            else{
                
                setabc(<h1 className="block" id="e">🌐 Please enter the URL you'd like to check </h1>)
                
                
            }
            
        }
    };

    useEffect(()=>{
       renderParagraphs()
    }, [ toggle ] );

   

    return (
        <div>
            <NavBar active="home" />
            <div className="search-wrapper">
                <div>
                    <img src={img} alt="mascot"></img>
                </div>
                <div >
                <div><p id="ab">powered by BERT </p></div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={CheckURL}/>
                                </td>
                                <td>
                                    <input type="search" placeholder="Enter the URL" id="search"  onChange={handleurl} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                   
                </div>
                <div id="table-1">
                    {intial && abc }
                    {pop && abc}
                    {pop && <p id="para" className="block">Phishing Probability: {result}</p>}
                </div>
            </div>
        </div>
    );
}

export default Check;
