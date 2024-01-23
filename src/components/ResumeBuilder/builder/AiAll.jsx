import React, { useEffect, useRef, useState } from "react";
import styles from "./ResumeBuilder.module.css";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const AiAll = () => {
  const [open, setOpen] = useState(true);

  const [currentInput, setCurrentInput] = useState("");

  const [ans, setAns] = useState([
    {
      data: "Hello! How can I assist you today with your resume?",
      type: "bot",
    },
  ]);
  const [loading , setLoader] = useState(false);
  const messageContainerRef = useRef();
  // Scroll to bottom function
  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  // Call scrollToBottom on each render (you might want to limit this to specific conditions)
  useEffect(() => {
    scrollToBottom();
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected spelling
    setAns((prevAns) => [...prevAns, { data: currentInput, type: "user" }]);
    setCurrentInput("");
    chatbot();
  };

  const chatbot = async (e) => {

    const localStorageData = localStorage.getItem('resume'); // Replace 'yourLocalStorageKey' with the actual key\
    const jsondata = JSON.parse(localStorageData)
    let  profiledata = jsondata.sections.profile.data
    try {
      // Add user message to the conversation
         setLoader(true);
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a resume maker, and helpfule for providing the data to bulid good resume according to user input ",
          },
          {
            role: "system",
            content:
              "and this resume builder is in myfuse portal which is placement portal where company is listed and job is listed in the compay dashboard and also give ans in 30 to 40 words",
          },
          {
            role: "system",
            content: `${profiledata.name} .  this is user name  ` ,
          },
          {
            role: "system",
            content: `${profiledata.branch} .  this is the my branch` ,
          },
          {
            role: "system",
            content: `${profiledata.college} .  this is the my  college` ,
          },
          {
            role: "system",
            content: `Before giving ans provide  add their name as suffix` ,
          },
          { role: "user", content: `${currentInput} .` },
        ],
        model: "gpt-3.5-turbo",
        temperature: 1,
        max_tokens: 1000,
      });

      // setConversation(completion.choices[0].message.content);
      console.log(completion.choices[0].message.content);
      setAns((prevAns) => [
        ...prevAns,
        { data: completion.choices[0].message.content, type: "bot" },
      ]);

      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {open ? (
        <div
          id={styles.settingstrigger}
          onClick={() => {
            setOpen(false);
          }}
          className={styles.trigger}
        >
          <img
            src="https://jungleworks.com/wp-content/uploads/2021/04/1_9I6EIL5NG20A8se5afVmOg.gif"
            alt=""
            srcSet=""
            height="120px"
            width="120px"
          />
        </div>
      ) : (
        <div
          className={`${styles.chatBot} ${
            open ? styles.openingAnimation : styles.closingAnimation
          }`}
        >
          <div className={styles.header}>
            <div className={styles.heading}>
               <img src="https://pnghq.com/wp-content/uploads/call-center-png-free-png-images-62062.png" alt="" srcset="" width={40} />
               <span className={styles.livedot}></span>
               < span style={{marginLeft:'.5rem'}}>
                Need Help ?
                
                </span> 
              </div>
            <div className={styles.closeButton}>
              <img
                src="https://www.freepnglogos.com/uploads/x-png/x-mark-logo-transparent-image-png-22.png"
                alt=""
                srcSet=""
                width={30}
                style={{ borderRadius: "50%", cursor: "pointer" }}
                onClick={() => {
                  setOpen(true);
                }}
              />
            </div>
          </div>
          <div className={styles.messageDiv} ref={messageContainerRef}>
            {ans.map((currentElement, index) =>
              currentElement.type === "bot" ? (
                <> 
                <div className={styles.message}> 
                {currentElement.data}
                </div>
                 
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/WhatsApp-BOT-Image-2_2.gif" alt=""  width={60} style={{borderRadius:'100%' , marginTop:'-1rem' }}/>
                </>
                  // </div>
              ) : (
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <div className={styles.inputMessage}>
                    {currentElement.data} 
                    <img src="https://images.vexels.com/media/users/3/129823/isolated/preview/6c2c3f6ac65e06d69dbc446a72420656-cloud-bubbles-flat-icon.png" alt="" srcset="" width={20} style={{marginLeft:'.5rem'}} />
                  </div>
                </div>
              )
            )}

                    {loading?(
                      <img src="https://assets-v2.lottiefiles.com/a/77ca8c60-1170-11ee-bd9a-5beea4e54103/9Ea6yVcSbs.gif" alt="" srcset="" width={90} height={90}/>
                    ) :''}
          </div>
          <form className={styles.sendDiv} onSubmit={handleSubmit}>
            <input
              value={currentInput}
              type="text"
              style={{ width: "80%", height: "100%", padding: ".4rem" }}
              placeholder="Ask me anything..."
              onChange={(e) => setCurrentInput(e.target.value)}
            />
            <button type="submit" className={styles.sendButton}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3814/3814305.png"
                alt=""
                srcset=""
                width={30}
                height={24}
              />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AiAll;
