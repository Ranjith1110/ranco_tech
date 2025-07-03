import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const whatsappLink = "https://wa.me/918778597451";
  const message = encodeURIComponent("Hi! I'm interested in your services.");
  const sendMessageLink = `https://wa.me/918778597451?text=${message}`;

  return (
    <>
      {/* WhatsApp Logo – Bottom Left */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>



    </>
  );
};

export default FloatingButtons;
