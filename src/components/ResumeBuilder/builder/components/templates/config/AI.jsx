  import React, { useState } from 'react';
  import OpenAI from 'openai';
  import { useEffect } from 'react';
  import { useResume } from "../../context/Resume";
 
  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  const AI = ({name,index,sectionKey,ansofai}) => {
    
    const [input, setInput] = useState(''); 
    const {setLoading,setAi} = useResume();
    const [result , setResult] = useState();
      const [data, setData] = useState([]);

    

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
            { role: 'system', content: 'You are a myfuse Portal assistant, skilled in explaining job Roles in different domains.' },
            { role: 'system', content: 'MyFuse is placemnent providing platform where lots of job is posted there' },
            { role: 'user', content: `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`  },
            { role: 'user', content: name==="Projects" ? 'who are you' : `Give me a short description for ${name} in the company ${ans.company} for the job period ${ans.timePeriod} and role is ${ans.role} in 50 to 80 word , this will be added to the resume experience description`}   ,
          ],
          model: 'gpt-3.5-turbo',
          temperature: 1,
          max_tokens: 1000,
        });
        setAi(true);
        
        ansofai=completion.choices[0].message.content;
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
        <div>
          <div>
             
              <div style={{ backgroundColor: 'hsl(222, 45%, 96%)', padding:'1rem' , borderRadius:'.5rem'}}> 
                {result}
              </div>
             
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={name}
              onChange={(e) => setInput(e.target.value)}
              hidden
            />
          </div>
        <button type="submit" style={{padding:'1rem' , color:'white' , fontWeight:'500',  minWidth:'120px' , borderRadius:'.5rem' , cursor:'pointer' , border:'none' ,background: 'linear-gradient(270deg,#a066ff 16.03%,#666cff 88.19%)'}} > 
           AI Writter
           </button>
        </form>
      </>
    );

  

  };

  export default AI;
