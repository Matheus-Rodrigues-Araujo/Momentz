"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const PostForm = () => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({
    content: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!content.trim()) {
      newErrors.content = "Username is required";
      valid = false;
    } else {
      newErrors.content = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      const payload = {
        content: content,
      };

      await axios.post("/api/auth/post", payload);

      router.push("/next");
    } catch (error) {
      console.error("Error processing login:", error);
    }
  };

  return (
    <div className="sm:flex my-10 mx-auto flex-col justify-center px-2 py-8 rounded-md  md:w-[500px] md:bg-customGray px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href={"/"}>
          <Image src={Logo} alt="Your Company" className="w-auto h-50" />
        </Link>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2 className="text-customYellow font-bold text-center text-[20px] uppercase">
            Create Post
          </h2>
          <div>
            <label className="block text-sm font-medium leading-6 text-white">
              Content
            </label>
            <div className="mt-2">
              <textarea
                id="content"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                className="
                    form-input block w-full rounded-md border-0 p-3 text-white
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                    focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5
                    "
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">{errors.content}</p>
              )}
            </div>
          </div>

          {/* <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-white">Image</label>
                </div>
                <div className="mt-2">
                  <input
                    id="image"
                    name="image"
                    type="image"
                    required={false}
                    placeholder="Uploud"
                    className="
                    form-input block w-full rounded-md border-0 p-3 text-white
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                    focus:ring-2 focus:ring-inset focus:ring-yellow-100 sm:text-sm sm:leading-6 md:p-5
                    "
                  />
                  {errors.image && <p className="text-red-500 text-sm mt-1" >{errors.image}</p>}
                </div>
              </div> */}

          <div className="flex justify-evenly items-center gap-5">
            {/* <button
                    onClick={() => router.push('/next')}
                    className="
                    sign-btn flex w-full bg-red-600 justify-center
                    rounded-md p-3 text-sm font-semibold uppercase leading-6
                    text-white shadow-sm focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:p-5 "
                    >
                    Cancel
                    </button> */}

            <button
              type="submit"
              className="
                    sign-btn flex w-full bg-customLightbrown justify-center
                    rounded-md p-3 text-sm font-semibold uppercase leading-6
                    text-white shadow-sm focus-visible:outline focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:p-5 "
            >
              Submit
            </button>
          </div>
        </form>

        <p className="text-sm mt-10 text-center text-gray-400 md:text-md">
          Wish to return to feed?
          <Link
            href="/next"
            className="font-semibold leading-6 text-sm text-indigo-600 text-yellow-100 hover:text-yellow-200 underline md:text-md"
          >
            Click Here
          </Link>
        </p>
      </div>
    </div>
  );
};
