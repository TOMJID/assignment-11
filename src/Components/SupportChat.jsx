import { useState } from "react";
import { Button } from "@heroui/react";

function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const CIcon = () => (
    <span className="text-[28px] font-bold leading-none">C</span>
  );

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 h-[450px] bg-white rounded-xl shadow-lg flex flex-col mb-4 transition-all duration-300 ease-in-out">
          <div className="p-4 bg-orange-600 text-white rounded-t-xl flex justify-between items-center">
            <h3 className="m-0 text-lg font-semibold">Support Chat</h3>
          </div>
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="mb-4 text-left">
              <div className="inline-block bg-gray-200 rounded-lg py-2 px-3 max-w-[80%]">
                <p className="m-0 text-sm">
                  Welcome to support! How can we help you today?
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-300 flex bg-white rounded-b-xl">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow border border-gray-300 rounded-full py-2 px-4 mr-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button className="py-2 px-4 border-none bg-orange-600 text-white rounded-full cursor-pointer font-bold transition-colors">
              Send
            </Button>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-orange-600 text-white border-none rounded-full w-[60px] h-[60px] shadow-lg cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out ">
        {isOpen ? <CloseIcon /> : <CIcon />}
      </button>
    </div>
  );
}

export default SupportChat;
