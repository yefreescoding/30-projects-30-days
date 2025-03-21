import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
// hh@mail.com
export const FormInvite = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Reset error state when user types
    if (hasSubmitted) setIsValidEmail(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmitted(true);

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail || email.trim() === "") {
      setIsValidEmail(false);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    /* From Uiverse.io by themrsami */
    <motion.div
      initial={{ scale: 0.5, translateY: -80, translateX: 100 }}
      animate={{
        scale: 1,
        opacity: 1,
        translateY: 0,
        translateX: 0,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
      style={{
        width: isSubscribed ? "260px" : "320px",
        height: isSubscribed ? "250px" : "216px",
        transition: "width 120ms ease-in-out, height 120ms ease-in-out",
      }}
      className="z-50 absolute grid top-12 right-0 overflow-hidden w-full  max-w-[400px] bg-white rounded-4xl shadow-2xl"
    >
      <div className="flex items-center justify-center">
        <AnimatePresence initial={false}>
          {isSubscribed && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.1, delay: 0.18 }}
              className=" text-green-800  grid place-items-center h-full text-center p-6"
            >
              <h2 className="text-xl font-semibold text-green-800">
                Thank you for subscribing!
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="size-8"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <p className="text-green-700/70">
                We will notify you when we have something new to offer.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {!isSubscribed && (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center justify-center light"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-text-base mb-4">
                  Subscribe to Our Newsletter
                </h2>

                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    onChange={handleInputChange}
                    className={`bg-gray-100 text-gray-800 border-0 rounded-lg p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 transition ease-in-out duration-150 ${
                      isValidEmail
                        ? "focus:ring-blue-500"
                        : "focus:ring-red-500"
                    }`}
                    placeholder="Enter your email address"
                  />

                  <p className="text-red-500 text-xs ml-2 h-4">
                    {!isValidEmail && "This field can't be empty"}
                  </p>

                  <button
                    type="submit"
                    style={{}}
                    className={`overflow-hidden text-white font-bold py-2 px-4 rounded-4xl mt-2 transition-all transition-200ease-in-out duration-150 ${
                      isSubmitting
                        ? "bg-green-800 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-green-400 text-white hover:bg-indigo-600 hover:to-blue-600"
                    }`}
                  >
                    <AnimatePresence initial={false}>
                      {isSubmitting ? (
                        <motion.span
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center gap-2"
                        >
                          Subscribing
                          <div role="status">
                            <svg
                              aria-hidden="true"
                              className="w-4 h-4 text-green-400 animate-spin dark:text-gray-600 fill-green-100"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                            <span className="sr-only">Loading...</span>
                          </div>
                        </motion.span>
                      ) : (
                        <span>Subscribe</span>
                      )}
                    </AnimatePresence>
                  </button>
                </form>

                <div className="flex justify-center mt-2">
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
