import { useState } from 'react';
import './App.css';

function App() {
  const phnstr = `+2348134602562 +2349025502137 +2349071622937 +2347037258145 +23407068375567 +23408059092064 +23408137113182 +23408109238982 +233206657438 +447438713102 +23407013086832 +23409020584951 +23409034787471 +2348026764046 +23408155049053 +23408173160578 +23408025179367 +23408078271578 +23408146844177 +23407062541692 +23408102819693 +23408124798306 +23407032821992 +23408157322430 +23408169273808 +23409075840135 +2349046169560 +2348128882708 +2348164703554 +2347036179591 +2348147589235 +2348160531899‬ +2348125069023 +2349020584951 +2349022430074 +2347047553969 +2348106978949 +2348140507295`;

  const phone = phnstr.split(' ');
  const [phoneNumber, setPhoneNumber] = useState(phone);

  const message = `
Dear Techie,
You are welcome to Skydive Frontend BootCamp

*Next Steps:*
Join Our WhatsApp Group: https://chat.whatsapp.com/BFPedjSDBb11oO7noBgUID
Check Your Email: Get more details on your admission and what to expect in your inbox.
facebook: skydive tech hub
Instagram: @skydivetechhub
Twitter: @skydivetechhub

*Onboarding Session* is happening tomorrow
Meeting Details: 
Onboarding to Skydive Bootcamp
Thursday, 1 Aug  •  19:00–20:00
Google Meet joining info
Video call link: https://meet.google.com/tbw-pkae-niq

NB: Kindly note that all information will be dispatched on the whatsapp group henceforth. Be kind enough to follow us on all our social media platforms.

We are excited to have you on board and look forward to your growth and success in the program!
  `;

  const handleRemoveItem = (index: number) => {
    const newItems = phoneNumber.filter((_, i) => i !== index);
    
    setPhoneNumber(newItems);
  };

  const handleSubmit = async (num: string, id: number) => {
    try {
      // setTimeout(() => {
        const url = `https://api.whatsapp.com/send?phone=${num}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      // }, 3000);

      handleRemoveItem(id);

    } catch (err: any) {
      console.log(err);
      console.log(err.message);
    }
  };

  return (
    <>
      <p>{message}</p>
      <div className='phn'>
        {phoneNumber.map((i: string, id: number) => (
          <button onClick={() => handleSubmit(i, id)} key={id}>{i}</button>
        ))}
      </div>

      
    </>
  );
}

export default App;
