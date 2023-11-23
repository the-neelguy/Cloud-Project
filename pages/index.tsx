//@ts-nocheck
import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useCurrentUser } from "app/users/hooks/useCurrentUser";
import logout from "app/auth/mutations/logout";
import { useMutation } from "@blitzjs/rpc";
import { Suspense } from "react";

const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation();
          }}
        >
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <Link href="/auth/signup" passHref>
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href="/auth/login" passHref>
          <a className="button small">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    );
  }
};

export default function Index() {
  return (
    <>
      <Head>
        <title>CLOUD PROJECT | Home</title>
      </Head>
      <Navbar color="black" />
      <div className="relative h-full overflow-hidden bg-indigo-900">
        <img
          src="/background.jpg"
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="container relative z-10 mx-auto my-24 flex w-4/5 items-center rounded-lg border-4 border-white py-16 md:my-32">
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4">
            <p className="flex flex-col items-center text-center text-6xl font-semibold text-white md:text-8xl pb-4">
              Real Time Agricultural System for Farmers
            </p>
            <p className="mt-6 flex max-w-lg flex-col items-center text-center text-xl font-semibold text-white">
              CLOUD COMPUTING <br />J Component
            </p>
            <Suspense fallback={<div>Loading...</div>}>
              <UserInfo />
            </Suspense>
            <p className="mt-6 flex max-w-lg flex-col items-center text-center text-3xl font-semibold text-white">
              Presented By <br />
              <div className="p-5 flex flex-row items-center justify-center gap-4 w-full font-bold">
                <p className="text-xl">Abhraneel Dey 20BPS1031</p>
                <p className="text-xl">Avni Ahuja 20BPS1043</p>
              </div>
            </p>
            <div className="p-5 flex flex-row gap-5 w-xl justify-between">
              <button
                type="button"
                className="shadow-white/50 py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                style={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/siddhsuresh/Cloud-Project-Frontend"
                  );
                }}
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
                Frond End Code
              </button>
              <button
                type="button"
                className="shadow-white/50 py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                style={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/siddhsuresh/Cloud-Project-Backend"
                  );
                }}
              >
                <svg
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
                API & Microcontroller Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black h-full">
        <div className="container mx-auto p-5">
          <div className="flex flex-wrap justify-center">
            <video className="w-[75%]" loop autoPlay muted>
              <source src="/Project_Trim.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="text-white bg-[#051367]">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold sm:text-6xl text-center sm:text-left">
              Features
            </h2>

            <p className="mt-4 sm:text-xl">
              Listing the various key aspects implemented for the working of the
              real time irrigation system
            </p>
          </div>

          {/* <ul className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-2">
            <li className="p-8 shadow-xl rounded-xl">
              <p className="text-3xl font-semibold">
                Implemented the BackEnd API using Fastify
              </p>
              <p className="mt-3 text-xl font-medium text-white flex flex-row gap-4">
                <svg
                  width="27"
                  height="30"
                  viewBox="0 0 27 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>heroku-logo</title>
                  <path
                    d="M3 0C1.13 0 0 1.11 0 2.903v24.194C0 28.883 1.13 30 3 30h21c1.863 0 3-1.11 3-2.903V2.903C26.994 1.11 25.863 0 24 0H3zm21.042 2c.508.006.958.448.958.929V27.07c0 .487-.45.929-.958.929H2.958C2.45 28 2 27.558 2 27.071V2.93c0-.488.45-.93.958-.93h21.084zM20 25h-2.781v-8.506c0-.774-.237-1.048-.468-1.208-1.396-.959-5.414-.042-7.834.916L7 17.012 7.006 5h2.816v7.917a20.99 20.99 0 0 1 1.882-.482c2.988-.643 5.184-.47 6.616.505.787.536 1.68 1.59 1.68 3.554V25zm-6-15h3.293A16.109 16.109 0 0 0 20 5h-3.287c-.49 1.188-1.385 3.188-2.713 5zM7 25v-7l3 3.5L7 25z"
                    fill="#79589f"
                    fill-rule="evenodd"
                  />
                </svg>
                Hosted in Heroku
              </p>
            </li>

            <li className="p-8 shadow-xl rounded-xl">
              <p className="text-3xl font-semibold">
                Implemented the Real Time <br />
                Bi-Directional Connection
              </p>
              <p className="mt-3 text-xl font-medium text-[#17D7A0] flex flex-row gap-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="114"
                    stroke="#010101"
                    stroke-width="20"
                    fill="#ffffff"
                  />
                  <path
                    d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z"
                    fill="#010101"
                  />
                </svg>
                Using Socket.IO
              </p>
            </li>

            <li className="p-8 shadow-xl rounded-xl">
              <p className="text-3xl font-semibold">
                Created This Website using Next and React
              </p>
              <p className="mt-3 text-xl font-medium text-[#ffffff] flex flex-row gap-2">
                Hosted in
                <svg
                  height="26"
                  viewBox="0 0 284 65"
                  fill="#ffffff"
                  aria-label="Vercel Logotype"
                >
                  <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
                </svg>
              </p>
            </li>

            <li className="p-8 shadow-xl rounded-xl">
              <p className="text-3xl font-semibold">
                Written the Microcontroller Code using the Arduino Framework
              </p>
              <p className="mt-3 text-xl font-medium text-[#17D7A0]">
                The Tasks in ESP32 is implemented using the ESP32 SDK{" "}
              </p>
            </li>
          </ul> */}
        </div>
      </section>
      <div>
        <aside>
          <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 bg-[#000B49]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-8 shadow-md shadow-white text-center text-white bg-[#01024E] sm:col-span-2 sm:p-16 lg:py-24 rounded-lg">
                <div className="max-w-lg mx-auto space-y-8">
                  <p className="text-3xl font-bold sm:text-4xl">
                    Microcontrollers Used
                  </p>

                  <p className="text-lg">
                    In this project, the microcontrollers used are the NodeMCU
                    ESP8266 & the ESP32 Microcontrollers.
                  </p>
                  <p className="text-lg">
                    The{" "}
                    <span className="font-bold text-[#F2A365]">
                      ESP8266 primarily acts as the actuator node{" "}
                    </span>
                    as it controlles the water pump for the irrigation System
                  </p>
                  <p className="text-lg">
                    The{" "}
                    <span className="font-bold text-[#F67280]">
                      ESP32 acts as the sensor node{" "}
                    </span>
                    as it measures the moisture level of the soil.
                  </p>
                  <div className="flex flex-row justify-between">
                    <button
                      className="inline-flex items-center px-5 py-3 mt-8 font-medium text-[#17D7A0] cursor-default shadow-xl  bg-white rounded-lg hover:opacity-75"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.05)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "20px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-4 h-4 mr-3 rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                      ESP8266
                    </button>
                    <button
                      className="inline-flex items-center px-5 py-3 mt-8 font-medium text-[#17D7A0] cursor-default shadow-xl bg-white rounded-lg hover:opacity-75"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.05)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "20px",
                      }}
                    >
                      ESP32
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-4 h-4 ml-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative h-64 lg:order-first lg:h-full rounded-lg">
                <Image
                  src="/NodeMCU-ESP8266-Pinout.jpg"
                  alt="Sunset with palm trees"
                  className="absolute inset-0 lg:object-fill r w-full h-full rounded-lg"
                  layout="fill"
                />
              </div>

              <div className="relative h-64 lg:h-full rounded-lg">
                <Image
                  src="/esp32.png"
                  alt="Man in a hat and yellow jumper"
                  className="absolute inset-0 object-cover lg:object-scale-down w-full h-full rounded-lg"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
      <aside className="p-5 relative text-gray-300 lg:flex h-full bg-black">
        <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
          <div className="max-w-xl mx-auto lg:ml-0">
            <p className="text-sm font-medium text-[#17D7A0]">
              Circuit Visulisation using Fritzing Software
            </p>

            <p className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              Visualising the ESP8266 Circuit
            </p>

            <p className="lg:mt-4 block text-white text-lg">
              The Components connected to the ESP8266 Microcontroller are the
              DHT11 Temperature and Humidity Sensors, the L298N Motor Driver
            </p>
            <p className="lg:mt-4 block text-white text-lg">
              The{" "}
              <span className="font-bold text-[#FF1E56]">
                L298N Motor Driver{" "}
              </span>
              controlles the State and the Power given to the Water Pump
            </p>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto rounded-lg">
          <Image
            src="/ESP8266_Connection.png"
            alt="ESP8266 Connection"
            className="p-1 rounded-xl absolute inset-0 object-scale-down w-full h-full hover:scale-105 ease-in-out duration-300"
            layout="fill"
          />
        </div>
      </aside>
      <aside className="p-5 relative overflow-hidden text-gray-300 bg-black lg:flex h-full">
        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto rounded-lg">
          <Image
            src="/ESP32_Connection.png"
            alt="ESP32 Connection"
            className="p-5 absolute inset-0 w-full h-full rounded-xl hover:scale-105 ease-in-out duration-300"
            layout="fill"
          />
        </div>
        <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
          <div className="max-w-xl mx-auto lg:ml-0">
            <p className="text-sm font-medium text-[#17D7A0]">
              Circuit Visulisation using Fritzing Software
            </p>

            <p className="mt-2 text-2xl font-bold text-white sm:text-4xl">
              Visualising the ESP32 Circuit
            </p>

            <p className="lg:mt-4 block text-white text-lg">
              The ESP32 is programmed using the{" "}
              <span className="font-bold text-[#FF1E56]">
                FreeRTOS implementation in the ESP32 SDK.
              </span>
            </p>
            <p className="lg:mt-4 block text-white text-lg">
              The ESP32 is connected to the{" "}
              <span className="font-bold text-[#21E6C1]">
                Capacitve Soil Moisture Sensor{" "}
              </span>
              to get the reading in voltage [0-4095] V
            </p>
          </div>
        </div>
      </aside>
      <style jsx global>
        {`
          .buttons {
            display: grid;
            grid-auto-flow: column;
            grid-gap: 0.5rem;
          }
          .button {
            font-size: 1rem;
            background-color: #6700eb;
            padding: 1rem 2rem;
            color: #f4f4f4;
            text-align: center;
          }

          .button.small {
            padding: 0.5rem 1rem;
          }

          .button:hover {
            background-color: #45009d;
          }

          .button-outline {
            border: 2px solid #6700eb;
            padding: 1rem 2rem;
            color: #6700eb;
            text-align: center;
          }

          .button-outline:hover {
            border-color: #45009d;
            color: #45009d;
          }
        `}
      </style>
    </>
  );
}

Index.suppressFirstRenderFlicker = true;
