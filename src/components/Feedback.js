import React, { useState } from "react";
import emailjs from "emailjs-com";

function Feedback() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendFeedback = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("Mohon isi feedback terlebih dahulu");
      return;
    }

    const templateParams = {
      name: "Anonymous",
      message: message,
      email: "fieldhoodblu@gmail.com",
    };

    emailjs
      .send(
        "service_cik36vn",
        "template_8unoh8k",
        templateParams,
        "POn856R5dzf4PF0Wi"
      )
      .then(
        () => {
          setStatus("Feedback terkirim. Terima kasih!");
          setMessage("");
        },
        () => {
          setStatus("Gagal mengirim. Coba lagi.");
        }
      );
  };

  return (
    <section
      className="w-full min-h-screen px-6 py-16 flex flex-col items-center
      bg-gradient-to-b from-[#0A0F1F] to-[#002A7A]"
    >
      
      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r 
        from-[#A9C9FF] to-[#4C8BFF]
        font-black leading-none
        text-[42px] sm:text-[36px] xs:text-[30px] text-center"
      >
        FEEDBACK
      </h1>

      
      <p
        className="text-white opacity-90 font-medium mt-4 mb-12
        text-[18px] sm:text-[17px] xs:text-[15px] text-center max-w-2xl"
      >
        Kirimkan kritik dan saran Anda untuk membantu FIELDHOOD.BLU menjadi lebih baik.
      </p>

      
      <form
        onSubmit={sendFeedback}
        className="w-full max-w-3xl backdrop-blur-xl bg-white/5
        border-[2px] border-transparent bg-clip-border
        p-8 sm:p-10 rounded-3xl shadow-[0_0_20px_#4C8BFF50]
        flex flex-col gap-6"
        style={{
          borderImage: "linear-gradient(90deg, #4C8BFF, #002A7A) 1",
        }}
      >
        
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis feedback Anda di sini..."
          className="w-full h-40 p-4 rounded-xl bg-black/20 text-white
          border border-white/10 outline-none resize-none
          text-[16px] sm:text-[15px]
          placeholder-white/40 leading-relaxed
          focus:border-[#4C8BFF] transition"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-black
          text-[18px] sm:text-[16px]
          bg-gradient-to-r from-[#002A7A] to-[#4C8BFF]
          hover:from-[#003FAD] hover:to-[#6DA9FF]
          text-white shadow-lg
          active:scale-95 transition-all"
        >
          KIRIM FEEDBACK
        </button>

        {status && (
          <p className="text-center text-white text-[15px] mt-1 opacity-90">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Feedback;