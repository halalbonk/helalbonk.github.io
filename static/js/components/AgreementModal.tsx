import { useState, useEffect } from 'react';
import "../style/global/modal.css";
import "../style/global/text.css";
import "../style/global/global.css";

const AgreementModal = () => {
  const [showModal, setShowModal] = useState(
    localStorage.getItem('agreementAccepted') !== 'true'
  );

  useEffect(() => {
    const bodyElement = document.querySelector('body');

    if (bodyElement && showModal) {
      bodyElement.style.overflow = 'hidden';
    }

    return () => {
      if (bodyElement) {
        bodyElement.style.overflow = 'auto';
      }
    };
  }, [showModal]);

  const accept = () => {
    setShowModal(false);
    localStorage.setItem('agreementAccepted', 'true');
  };

  return (
    <div>
      {showModal && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-text bonk-font-500">AGREEMENT:<br/><br/>"I HEREBY CONFIRM THAT BY ACCESSING THE WHITEPAPER AND OTHER INFORMATIONAL MATERIALS, I WILL BE DEEMED TO HAVE REVIEWED AND ACCEPTED CERTAIN TERMS THEREIN, INCLUDING CONFIRMATIONS THAT I AM NOT BASED IN A JURISDICTION WHERE SUCH ACCESS WOULD BE PROHIBITED OR RESTRICTED IN ANY MANNER".</div>
            </div>
            <button onClick={accept} className="agreement-button bonk-font-500">CONFIRM</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgreementModal;