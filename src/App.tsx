import { useState } from 'react';
import './App.css';

function App() {
  const phnstr = `+2348134602562 +2349025502137 +2349071622937 +2347037258145 +23407068375567 +23408059092064 +23408137113182 +23408109238982 +233206657438 +447438713102 +23407013086832 +23409020584951 +23409034787471 +2348026764046 +23408155049053 +23408173160578 +23408025179367 +23408078271578 +23408146844177 +23407062541692 +23408102819693 +23408124798306 +23407032821992 +23408157322430 +23408169273808 +23409075840135`;

  const phone = phnstr.split(' ');
  const [phoneNumber, setPhoneNumber] = useState(phone);

  const message = `Welcome to Skydive Tech Hub Bootcamp Training!
    Congratulations on joining us for this transformative journey towards becoming a skilled software developer, with an initial focus on frontend development. Our comprehensive program is designed to equip you with the essential skills and knowledge needed to excel in the tech industry.

    Next Steps:
    Join Our WhatsApp Group: Connect with fellow participants via https://chat.whatsapp.com/BFPedjSDBb11oO7noBgUID\n
    Check Your Email: Get more details on your admission and what to expect in your inbox.
    facebook: skydive tech hub
    Instagram: @skydivetechhub
    Twitter: @skydivetechhub

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
