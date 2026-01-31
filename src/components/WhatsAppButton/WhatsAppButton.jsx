import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = '917416506826';
    const message = 'Hi! I would like to know more about your services.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            className="whatsapp-float-btn"
            onClick={handleClick}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
            <span className="whatsapp-tooltip">Chat with us</span>
        </button>
    );
};

export default WhatsAppButton;
