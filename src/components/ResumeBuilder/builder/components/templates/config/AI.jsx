  import React, { useState } from 'react';
  import OpenAI from 'openai';
  import { useEffect } from 'react';
  import { useResume } from "../../context/Resume";
  import Dropdown from 'react-bootstrap/Dropdown';
  import 'bootstrap/dist/css/bootstrap.min.css';
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

 


    const accessNestedProperty = (obj, path) => {
      return path.split('.').reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : undefined), obj);
    };

    const logDataForKey = (obj, key) => {
      let values = accessNestedProperty(obj, key); 
       
       
      return values[index]
    };


 


    const keypoint = async (e) => {
      setLoading(true);
      // e.preventDefault();
         // Log data based on sectionKey
      const ans =  await logDataForKey(data, sectionKey);
      
      try { 
        // Add user message to the conversation
        
        const completion = await openai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a resume maker, and helpfule for providing the data to bulid good resume according to user input ' },
            { role: 'system', content: 'Provide ans' },
            { role: 'system', content: 'Always Provide resoponse in 30 to 40 words' },
           
            // { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            // { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
            { role: 'user', content: ` job roles= ${input} . Provide me description regarding what did you do while doing this job roles `}   ,
            { role: 'user', content: ` job roles= ${input} . Provide me key point while working for this key role in poin wise `}   ,
            
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
      // setInput('');
        console.log('ai result',ansofai)
       setResult(ansofai)
        console.log(ans);
        ans.description = ansofai; 
        
         
        // localStorage.setItem("resume", JSON.stringify(data)); 
        console.log("hellow" , ans);
       
        
      } catch (error) {
        console.error(error);
      }
    };
  
    const desc = async (e) => {
      setLoading(true);
      // e.preventDefault();
         // Log data based on sectionKey
      const ans =  await logDataForKey(data, sectionKey);
      
      try { 
        // Add user message to the conversation
        
        const completion = await openai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a resume maker, and helpfule for providing the data to bulid good resume according to user input ' },
            { role: 'system', content: 'Provide ans' },
            { role: 'system', content: 'Always Provide resoponse in 30 to 40 words' },
           
            // { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            // { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
            { role: 'user', content: ` job roles= ${input} . Provide me description regarding what did you do while doing this job roles `}   ,
            // { role: 'user', content: ` job roles= ${input} . Provide me key point while working for this key role in poin wise `}   ,
            
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
 
        console.log('ai result',ansofai)
       setResult(ansofai)
        console.log(ans);
        ans.description = ansofai; 
        
         
        // localStorage.setItem("resume", JSON.stringify(data)); 
        console.log("hellow" , ans);
       
        
      } catch (error) {
        console.error(error);
      }
    };
    
    const projectTechStack = async (e) => {
      setLoading(true);
      // e.preventDefault();
         // Log data based on sectionKey
      const ans =  await logDataForKey(data, sectionKey);
      
      try { 
        // Add user message to the conversation
        
        const completion = await openai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a resume maker, and helpfule for providing the data to bulid good resume according to user input ' },
            { role: 'system', content: 'Provide ans' },
            { role: 'system', content: 'Always Provide resoponse in 30 to 40 words' },
           
            // { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            // { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
            { role: 'user', content: ` Tech Stack= ${input} . Provide me Tech Stack only `}   ,
            // { role: 'user', content: ` job roles= ${input} . Provide me key point while working for this key role in poin wise `}   ,
            
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

       
        console.log('ai result',ansofai)
       setResult(ansofai)
        console.log(ans);
        ans.description = ansofai; 
        
         
        // localStorage.setItem("resume", JSON.stringify(data)); 
        console.log("hellow" , ans);
       
        
      } catch (error) {
        console.error(error);
      }
    };
  
    const projectdesc = async (e) => {
      setLoading(true);
      // e.preventDefault();
         // Log data based on sectionKey
      const ans =  await logDataForKey(data, sectionKey);
      
      try { 
        // Add user message to the conversation
        
        const completion = await openai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a resume maker, and helpfule for providing the data to bulid good resume according to user input ' },
            { role: 'system', content: 'Provide ans' },
            { role: 'system', content: 'Always Provide resoponse in 30 to 40 words' },
           
            // { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            // { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
            { role: 'user', content: ` Tech stack ${input} . Provide me description regarding what did you do while doing this job roles `}   ,
            // { role: 'user', content: ` job roles= ${input} . Provide me key point while working for this key role in poin wise `}   ,
            
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

      
        console.log('ai result',ansofai)
       setResult(ansofai)
        console.log(ans);
        ans.description = ansofai; 
        
         
        // localStorage.setItem("resume", JSON.stringify(data)); 
        console.log("hellow" , ans);
       
        
      } catch (error) {
        console.error(error);
      }
    };
    
    const projectfeatures = async (e) => {
      setLoading(true);
      // e.preventDefault();
         // Log data based on sectionKey
      const ans =  await logDataForKey(data, sectionKey);
      
      try { 
        // Add user message to the conversation
        
        const completion = await openai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a resume maker, and helpfule for providing the data to bulid good resume according to user input ' },
            { role: 'system', content: 'Provide ans' },
              { role: 'system', content: 'Provide answers using some metrics in every sentences' },
            { role: 'system', content: 'Always Provide resoponse in 30 to 40 words' },
           
            // { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            // { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
            { role: 'user', content: ` Tech stack ${input} . Provide me Featured point regarding what did the feature point for this tech stack and provide ans in point wise`}   ,
            // { role: 'user', content: ` job roles= ${input} . Provide me key point while working for this key role in poin wise `}   ,
            
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

      
        console.log('ai result',ansofai)
       setResult(ansofai)
        console.log(ans);
        ans.description = ansofai; 
        
         
        // localStorage.setItem("resume", JSON.stringify(data)); 
        console.log("hellow" , ans);
       
        
      } catch (error) {
        console.error(error);
      }
    };

    const skillgenerate = async (e) => {
      setLoading(true);
      // e.preventDefault();
         // Log data based on sectionKey
      const ans =  await logDataForKey(data, sectionKey);
      
      try { 
        // Add user message to the conversation
        
        const completion = await openai.chat.completions.create({
          messages: [
            { role: 'system', content: 'You are a resume maker, and helpfule for providing the data to bulid good resume according to user input ' },
            { role: 'system', content: 'Provide ans' },
          
            { role: 'system', content: 'Always Provide resoponse in 30 to 40 words' },
           
            // { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            // { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
            { role: 'user', content: `Technolgy ${input} . Provide me skills regarding  this technology and provide ans in point wise and one one word`}   ,
            // { role: 'user', content: ` job roles= ${input} . Provide me key point while working for this key role in poin wise `}   ,
            
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

       
        console.log('ai result',ansofai)
       setResult(ansofai)
        console.log(ans);
        ans.description = ansofai; 
        
         
        // localStorage.setItem("resume", JSON.stringify(data)); 
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
        <div   style={{  padding:'20px'}}> 
        <div style={{backgroundColor:'hsl(222, 45%, 96%)'}} >
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
                <div key={index}>
                 {conversation!='' ? (
                   <textarea
                   rows="7"
                   cols="7"
                   className="form-control"
                   id="exampleInputEmail1"
                   value={conversation} 
                   readOnly
                   style={{ width: '100%', backgroundColor: 'hsl(222, 45%, 96%)', border: 'none', padding: '8px', marginBottom:'1rem' }}
               ></textarea>
                 )
                  : ''}    
                </div>
            </div>
          )}
        </div>
      </div>
        {console.log(typeof(input))}
        <form  >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={input}
              placeholder={name=="Experience" ? 'Enter Job Roles' : 'Enter  Technology (E.g Web Technology )'}
              onChange={(e) => setInput(e.target.value)}
                style={{width:'100%' ,   height:'3rem',backgroundColor:'hsl(222, 45%, 96%)', border:'none',  marginBottom:'1rem'}}
            />
          

      

      { name === 'Experience' && (
     <Dropdown>
     <Dropdown.Toggle style={{padding:'1rem' , color:'white' , fontWeight:'500',  minWidth:'120px' , borderRadius:'.5rem' , cursor:'pointer' , border:'none' ,background: 'linear-gradient(270deg,#a066ff 16.03%,#666cff 88.19%)'}} id="dropdown-basic">
        AI Writer
     </Dropdown.Toggle>
     <Dropdown.Menu>
       <Dropdown.Item onClick={keypoint}>Generate Key Point</Dropdown.Item>
       <Dropdown.Item  onClick={desc}> Generate Description</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown>
   )}


{ name === 'Projects' && (
     <Dropdown>
     <Dropdown.Toggle style={{padding:'1rem' , color:'white' , fontWeight:'500',  minWidth:'120px' , borderRadius:'.5rem' , cursor:'pointer' , border:'none' ,background: 'linear-gradient(270deg,#a066ff 16.03%,#666cff 88.19%)'}} id="dropdown-basic">
        AI Writer
     </Dropdown.Toggle>
     <Dropdown.Menu>
       <Dropdown.Item onClick={projectTechStack}>Generate Teach Stack</Dropdown.Item>
       <Dropdown.Item  onClick={projectdesc}> Generate Description</Dropdown.Item>
       <Dropdown.Item  onClick={projectfeatures}> Generate Feature Points</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown>
   )}
{ name === 'Technical Skills' && (
     <Dropdown>
     <Dropdown.Toggle style={{padding:'1rem' , color:'white' , fontWeight:'500',  minWidth:'120px' , borderRadius:'.5rem' , cursor:'pointer' , border:'none' ,background: 'linear-gradient(270deg,#a066ff 16.03%,#666cff 88.19%)'}} id="dropdown-basic">
        AI Writer
     </Dropdown.Toggle>
     <Dropdown.Menu>
       <Dropdown.Item onClick={skillgenerate}>Generate Skills</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown> 
   )}

          </div>
        </form>
        </div>
      </>
    );

  

  };

  export default AI;
