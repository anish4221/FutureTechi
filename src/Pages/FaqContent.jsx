import React,{ useState } from 'react';
import faq from '../Utils/faq'; // import the FAQ data
import './FaqContent.css'

const FaqContent = () => {
    
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      {faq.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          onClick={() => toggleIndex(index)}
        >
          <h3 className="faq-question">
            <span>Q{index + 1}. {item.question}</span>
            <span className="toggle-icon">{openIndex === index ? '-' : '+'}</span>
          </h3>

          {openIndex === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqContent;
