import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = '917416506826';
    const message = 'Hi! I would like to know more about your services.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="floating-actions">
            <a
                href="tel:7416506826"
                className="float-btn call-btn"
                aria-label="Call Now"
            >
                <FaPhoneAlt className="action-icon" />
                <span className="action-tooltip">Call Now</span>
            </a>

            <button
                className="float-btn whatsapp-btn"
                onClick={handleClick}
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="action-icon" />
                <span className="action-tooltip">Chat on WhatsApp</span>
            </button>
        </div>
    );
};

export default WhatsAppButton;
