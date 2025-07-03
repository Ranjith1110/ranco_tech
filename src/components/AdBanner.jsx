import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const AdBanner = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      const timer = setTimeout(() => {
        setShowAd(true);
        const hideTimer = setTimeout(() => setShowAd(false), 10000); // hide after 10s
        return () => clearTimeout(hideTimer);
      }, 20000); // show 20s after load

      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  if (!showAd) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
        {/* Banner Image */}
        <img
          src="/RancoBanner.png" 
          alt="Ad Banner"
          className="w-full h-auto object-cover rounded-2xl"
        />

        {/* Close Button */}
        <button
          onClick={() => setShowAd(false)}
          className="absolute top-4 right-4 bg-black/70 text-white hover:bg-red-600 p-2 rounded-full transition duration-300"
          aria-label="Close advertisement"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default AdBanner;



