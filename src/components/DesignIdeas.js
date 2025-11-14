import React, { useState } from "react";
import emailjs from "emailjs-com";

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const EMAILJS_SERVICE = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function DesignIdeas() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;

    if (!["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(f.type)) {
      setStatus("Format tidak didukung.");
      return;
    }
    if (f.size > 6 * 1024 * 1024) {
      setStatus("Maksimal ukuran 6MB.");
      return;
    }

    setFile(f);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(f);
    setStatus("");
  };

  const uploadToCloudinary = async (fileToUpload, onProgress) => {
    if (!fileToUpload) return null;

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
    const formData = new FormData();
    formData.append("file", fileToUpload);
    formData.append("upload_preset", UPLOAD_PRESET);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && onProgress) {
          const pct = Math.round((event.loaded / event.total) * 100);
          onProgress(pct);
        }
      };

      xhr.onload = () => {
        try {
          const res = JSON.parse(xhr.responseText);
          if (xhr.status >= 200) resolve(res);
          else reject(res);
        } catch (err) {
          reject(err);
        }
      };

      xhr.onerror = () => reject("Network error");
      xhr.send(formData);
    });
  };

  const sendEmail = async ({ imageUrl, filename }) => {
    const params = {
      name: "Anonymous",
      message: message || "(tanpa deskripsi)",
      image_url: imageUrl || "",
      filename: filename || "",
      email: "fieldhoodblu@gmail.com",
    };

    return emailjs.send(
      EMAILJS_SERVICE,
      EMAILJS_TEMPLATE,
      params,
      EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!file && !message.trim()) {
      setStatus("Mohon isi deskripsi atau upload gambar.");
      return;
    }

    try {
      setUploading(true);
      setProgress(0);

      let imageUrl = "";
      let filename = "";

      if (file) {
        setStatus("Mengunggah gambar...");
        const res = await uploadToCloudinary(file, (pct) => setProgress(pct));
        imageUrl = res.secure_url;
        filename = res.original_filename || file.name;
      }

      setStatus("Mengirim ke email...");
      await sendEmail({ imageUrl, filename });

      setStatus("Ide berhasil dikirim!");
      setMessage("");
      setFile(null);
      setPreview(null);
      setProgress(0);
    } catch {
      setStatus("Gagal mengirim. Coba lagi.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section
      className="w-full px-6 py-24 flex flex-col items-center
      bg-gradient-to-b from-[#002A7A] to-[#0A0F1F]"
    >
      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r
        from-[#A9C9FF] to-[#4C8BFF]
        font-black text-[40px] sm:text-[36px] xs:text-[30px] mb-6 text-center"
      >
        DESIGN IDEAS
      </h1>

      <p className="text-white opacity-80 text-[15px] max-w-2xl text-center mb-10">
        Kirimkan ide atau referensi desain untuk FIELDHOOD.BLU
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-8 rounded-2xl backdrop-blur-xl bg-white/5
        border-[2px] border-transparent bg-clip-border shadow-[0_0_20px_#4C8BFF50]"
        style={{ borderImage: "linear-gradient(90deg, #4C8BFF, #002A7A) 1" }}
      >
        <div className="flex flex-col sm:flex-row gap-8">

          <div className="w-full sm:w-2/5 flex flex-col items-center gap-3">
            {preview ? (
              <div className="bg-white/10 p-2 rounded-xl w-full backdrop-blur-sm">
                <img
                  src={preview}
                  alt="preview"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-40 bg-white/10 rounded-xl flex items-center justify-center text-white/50 text-sm">
                Preview akan muncul di sini
              </div>
            )}

            {preview && (
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                }}
                className="px-4 py-2 rounded-lg text-white text-sm 
                bg-gradient-to-r from-[#4C8BFF] to-[#002A7A]
                shadow-[0_0_12px_#4C8BFF80]
                hover:shadow-[0_0_18px_#4C8BFF] active:scale-95 transition"
              >
                Hapus Gambar
              </button>
            )}
          </div>

          
          <div className="w-full sm:w-3/5 flex flex-col gap-4">
            <label className="text-white font-medium text-[14px]">
              Upload Gambar (opsional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-white
                file:py-2 file:px-4 file:rounded-lg
                file:border-0 file:font-semibold cursor-pointer
                file:bg-gradient-to-r file:from-[#002A7A] file:to-[#4C8BFF]"
            />

            <label className="text-white font-medium text-[14px]">
              Deskripsi Ide (opsional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Contoh: warna desain, posisi gambar, ukuran, untuk produk apa..."
              className="w-full min-h-[120px] p-4 rounded-xl bg-black/20 text-white
              placeholder-white/40 text-[15px] resize-none"
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={uploading}
                className="px-6 py-3 rounded-xl font-black text-white
                bg-gradient-to-r from-[#002A7A] to-[#4C8BFF]
                shadow-[0_0_12px_#4C8BFF80]
                hover:shadow-[0_0_20px_#4C8BFF]
                hover:scale-105 active:scale-95 transition-all text-[16px]"
              >
                {uploading ? "Mengirim..." : "Kirim Ide"}
              </button>

              {uploading && <p className="text-white text-sm">Progress: {progress}%</p>}
            </div>

            {status && <p className="text-white/90 text-sm mt-1">{status}</p>}
          </div>
        </div>
      </form>
    </section>
  );
}

export default DesignIdeas;