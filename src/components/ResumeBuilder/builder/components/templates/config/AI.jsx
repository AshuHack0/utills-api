  import React, { useState } from 'react';
  import OpenAI from 'openai';
  import { useEffect } from 'react';
  import { useResume } from "../../context/Resume";
 
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true 
  });

  const AI = ({name,index,sectionKey,ansofai}) => {
    
    const [input, setInput] = useState(''); 
    const {setLoading,setAi,loading} = useResume();
    const [result , setResult] = useState();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [conversation, setConversation] = useState([]);




    // const addMessageToConversation = (role, content) => {
    //   setConversation((prevConversation) => [...prevConversation, { role, content }]);
    //   setLoading(false);
    // };
  



    const accessNestedProperty = (obj, path) => {
      return path.split('.').reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : undefined), obj);
    };

    const logDataForKey = (obj, key) => {
      let values = accessNestedProperty(obj, key); 
       
       
      return values[index]
    };

    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
         // Log data based on sectionKey
      const ans =  await logDataForKey(data, sectionKey);
      
      try { 
        // Add user message to the conversation
        
        const completion = await openai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a resume maker, and helpfule for providing the data to bullit good resume according to user input ' },
            { role: 'system', content: 'MyFuse is placemnent providing platform where lots of job is posted there' },
            { role: 'system', content: 'Always Provide resoponse in 30 to 40 words' },
           
            // { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            // { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
            { role: 'user', content: input}   ,
            
          ],
          model: 'gpt-3.5-turbo',
          temperature: 1,
          max_tokens: 1000,
        });
         
        setAi(true);
        setLoading(false);
        ansofai=completion.choices[0].message.content;
        // Add AI response to the conversation
        setConversation(completion.choices[0].message.content);
      // addMessageToConversation('assistant', completion.choices[0].message.content);

      // Clear the input field
      setInput('');
        console.log('ai result',ansofai)
       setResult(ansofai)
        console.log(ans);
        ans.description = ansofai; 
        
         
        localStorage.setItem("resume", JSON.stringify(data)); 
        console.log("hellow" , ans);
       
        
      } catch (error) {
        console.error(error);
      }
    };
  
      
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("resume")))
    }, []); 
    

     
    
    return (
      <>
        <div   style={{backgroundColor:'hsl(222, 45%, 96%)', padding:'20px'}}> 
        <h2 style={{textAlign:'center'}}> AI Writer</h2>
        <div style={{backgroundColor:'hsl(222, 45%, 96%)'}} >
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {/* {conversation.map((message, index) => ( */}
                <div key={index}  >
                  {/* <strong>{message.role === 'user' ? 'User' : 'Assistant'}: </strong> */} 
                  <textarea
                          rows="10"
                          cols="10"
                          className="form-control"
                          id="exampleInputEmail1"
                          value={conversation} 
                          readOnly
                          placeholder='Hello! How can I assist you with your resume?'
                          style={{ width: '100%', backgroundColor: 'hsl(222, 45%, 96%)', border: 'none', padding: '8px' }}
                      ></textarea>
                   
                </div>
              {/* ))} */}
            </div>
          )}
        </div>
      </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          {/* <label htmlFor="exampleInputEmail1" className="form-label">
            Job Roles
          </label> */}
          
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={input}
              placeholder='Enter Job Roles'
              onChange={(e) => setInput(e.target.value)}
          style={{width:'100%' ,   height:'4rem',backgroundColor:'hsl(222, 45%, 96%)', border:'none', padding:'8px'}}
            />
          <button type="submit" style={{padding:'1rem' , color:'white' , fontWeight:'500',  minWidth:'120px' , borderRadius:'.5rem' , cursor:'pointer' , border:'none' ,background: 'linear-gradient(270deg,#a066ff 16.03%,#666cff 88.19%)'}} > 
           {loading ? 'Generating....' : 'Generate'}
           </button>
          </div>
          
        </form>
        </div>
      </>
    );

  

  };

  export default AI;
