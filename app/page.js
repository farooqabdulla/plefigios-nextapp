import React from 'react'
import s from '../styles/home.module.css'
import design from '/assects/images/design1.webp'
import design1 from '/assects/images/design2.webp'
import design2 from '/assects/images/design3.webp'
import business from '/assects/images/business.webp'
import facebook from '/assects/images/facebook.jpg'
import google from '/assects/images/google.jpg'
import graphic from '/assects/images/graphic.webp'
import wordpress from '/assects/images/wordpress.jpg'
import web from '/assects/images/web.webp'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import IconCloud from "@/components/magicui/icon-cloud";
import ClientWrapper from './components/ClientWrapper'
import Link from 'next/link'
import { MarqueeDemo } from './components/MarqueeDemo'

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "google",
  "facebook",
  "wordpress",
];
const Home = () => {
  return (
    <>
      <ClientWrapper>
        <section className='h-[110vh] z-10 relative flex justify-center items-center'>
          <video
            src="/assects/videos/team.webm"
            autoPlay
            muted
            loop
            className='h-[110vh] w-full object-cover fixed z-0'>
          </video>
          <div className='absolute inset-0 bg-gradient-to-b from-[#061551a0] to-[#061551a0] z-[1]'></div>
          <div className='relative z-10 text-center py-[10vh] flex items-center justify-center flex-col'>
            <Image src={design} className='absolute animate-spin w-[10vw] md:w-[2vw] top-0 right-[14vw]' alt="" />
            <Image src={design1} className='absolute  w-[10vw] md:w-[2vw] animate-bounce bottom-[13vh] left-0' alt="" />
            <Image src={design2} className='absolute animate-pulse  w-[10vw] md:w-[2vw] bottom-0 right-0' alt="" />
            <span data-aos="fade-up">
              <h2 className='md:text-[1.3vw] w-[100%]  m-auto text-[5vw] font-[300] text-white hfont mb-[2vh] md:mb-0'>WELCOME TO PLEFIGOS,</h2>
              <h1 className='md:text-[4vw] font-thin mb-[2vh] md:mb-0 px-[7vw] text-[10vw]  text-white hfont'>We Develop Websites & Apps</h1>
              <p className='text-gray-200 text-[6vw] px-[7vw] font-[300] md:text-[1.2vw] pfont mb-[3vh] md:mb-[5vh] pt-[1vh]'>We make the best strategies for you, Enhancing your success. We complete each project with extra care as per the customer needs.!</p>
              <button className='bg-[#854CFE] mb-[20vh] delay-100 hover:bg-blue-100 hover:text-black px-[15vw] md:px-[5vw] py-[1.7vh] rounded-[30px] text-white pfont font-semibold'>Request Demo</button>
            </span>
          </div>
        </section>
        <section className='relative z-20 md:h-[20vh] text-black bg-slate-50'>
          <section data-aos="fade-right" className='md:h-[30vh]  bg-white rounded-lg relative md:bottom-[35vh] md:shadow-xl shadow-none md:mt-0 md:flex items-center justify-between w-[90%] m-auto flex-wrap '>
            <article className='md:w-[33%] h-[20vh]  items-center flex md:justify-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mr-[1.5vw] text-[#384ea7]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <div className='ml-[4vw] md:ml-0'>
                <h1 className='text-[6vw] md:text-[1.2vw] pfont'>Happy Clients</h1>
                <h1 className='text-[7vw] md:text-[2vw] font-semibold hfont'>16</h1>
              </div>
            </article>
            <article className='md:w-[33%] h-[20vh] mt-[2vh] md:mt-0  items-center flex md:justify-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mr-[1.5vw] text-[#384ea7] ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
              </svg>
              <div className='ml-[4vw] md:ml-0'>
                <h1 className='text-[6vw] md:text-[1.2vw] pfont'>Project Done</h1>
                <h1 className='text-[7vw] md:text-[2vw] font-semibold hfont'>30</h1>
              </div>
            </article>
            <article className='md:w-[33%] h-[20vh] mt-[2vh] md:mt-0  items-center flex md:justify-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mr-[1.5vw] text-[#384ea7] ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <div className='ml-[4vw] md:ml-0'>
                <h1 className='text-[6vw] md:text-[1.2vw] pfont'>Our Rating</h1>
                <h1 className='text-[7vw] md:text-[2vw] font-semibold hfont'>5/5</h1>
              </div>
            </article>
          </section>
        </section>
        <section>
        </section>
        <section className="relative z-10 bg-slate-50 py-[5vh] md:pb-[10vh] md:pt-0">
          <h1 data-aos="fade-right" className='pl-[5vw] md:text-[4vw] pt-[2vh] md:py-0 font-bold text-[#384ea7] hfont text-[10vw] md:pt-[0vh]'>OUR SERVICES</h1>
          <h3 data-aos="fade-right" className='pl-[5vw] md:text-[1.3vw] font-normal md:font-[400] text-slate-700 hfont text-[5vw] px-[6vw]  pb-[5vh]'>Custom IT Solutions for Your Successful Business</h3>

          <article className="md:flex justify-between px-[5vw] w-[100%]  ">
            <Link href="/services" data-aos="fade-up" className="card rounded-lg card-compact md:w-[30%] mb-[3vh] md:mb-0">
              <div>
                <figure className="">
                  <Image
                    src={facebook}
                    alt="Shoes"
                    className="h-[30vh] rounded-md object-cover" />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title text-[5.5vw] md:text-[1.17vw] text-[#384EA7] font-[500] mt-[1vh]">Facebook Ads</h2>
                  <p className="text-slate-700 text-[4.5vw] md:text-[1vw] my-[0.7vh]">Facebook ads help businesses reach a wider audience and increase brand...</p>
                  <p className="flex text-blue-500 md:text-[0.9vw]">Read more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-[0.9vw] w-[5vw] ml-[2vw] md:ml-[0.3vw] text-blue-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services" data-aos="fade-up" className="card rounded-lg card-compact md:w-[30%] mb-[3vh] md:mb-0">
              <div>
                <figure className="">
                  <Image
                    src={google}
                    alt="Shoes"
                    className="h-[30vh] object-cover rounded-lg" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-[5.5vw] md:text-[1.17vw] text-[#384EA7] font-[500] mt-[1vh]">Google Ads</h2>
                  <p className="text-slate-700 text-[4.5vw] md:text-[1vw] my-[0.7vh]">Google Ads helps businesses reach target audience, increase online...</p>
                  <p className="flex text-blue-500 md:text-[0.9vw]">Read more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-[0.9vw] w-[5vw] ml-[2vw] md:ml-[0.3vw] text-blue-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services" data-aos="fade-up" className="card rounded-lg card-compact md:w-[30%] mb-[3vh] md:mb-0">
              <div >
                <figure className="">
                  <Image
                    src={graphic}
                    alt="Shoes"
                    className="h-[30vh] rounded-lg object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="text-[5.5vw] md:text-[1.17vw] text-[#384EA7] font-[500] mt-[1vh]">Graphic Designing</h2>
                  <p className="text-slate-700 text-[4.5vw] md:text-[1vw] my-[0.7vh]">It plays a crucial role in creating brand identity, enhancing your...</p>
                  <p className="flex text-blue-500 md:text-[0.9vw]">Read more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-[0.9vw] w-[5vw] ml-[2vw] md:ml-[0.3vw] text-blue-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  </p>
                </div>
              </div>
            </Link>
          </article>
          <article className="md:flex justify-between px-[5vw] mt-[3vh] md:mt-[5vh] w-[100%]  ">
            <Link href="/services" data-aos="fade-up" className="card rounded-lg card-compact md:w-[30%] mb-[3vh] md:mb-0">
              <div>
                <figure className="">
                  <Image
                    src={web}
                    alt="Shoes"
                    className="h-[30vh] object-cover rounded-lg" />
                </figure>
                <div className="card-body ">
                  <h2 className="text-[5.5vw] md:text-[1.17vw] text-[#384EA7] font-[500] mt-[1vh]">Web Development</h2>
                  <p className="text-slate-700 text-[4.5vw] md:text-[1vw] my-[0.7vh]">We design and develop the best user-friendly website and most...</p>
                  <p className="flex text-blue-500 md:text-[0.9vw]">Read more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-[0.9vw] w-[5vw] ml-[2vw] md:ml-[0.3vw] text-blue-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services" data-aos="fade-up" className="card rounded-lg card-compact md:w-[30%] mb-[3vh] md:mb-0">
              <div>
                <figure className="">
                  <Image
                    src={business}
                    alt="Shoes"
                    className="h-[30vh] rounded-lg object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="text-[5.5vw] md:text-[1.17vw] text-[#384EA7] font-[500] mt-[1vh]">Google My Business</h2>
                  <p className="text-slate-700 text-[4.5vw] md:text-[1vw] my-[0.7vh]">It helps businesses to enhance their online presence by creating a...</p>
                  <p className="flex text-blue-500 md:text-[0.9vw]">Read more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-[0.9vw] w-[5vw] ml-[2vw] md:ml-[0.3vw] text-blue-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services" data-aos="fade-up" className="card rounded-lg card-compact md:w-[30%] mb-[3vh] md:mb-0">
            <div>
              <figure className="">
                <Image
                  src={wordpress}
                  alt="Shoes"
                  className="h-[30vh] rounded-md mt-[3vh] md:mt-0 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="text-[5.5vw] md:text-[1.17vw] text-[#384EA7] font-[500] mt-[1vh]">WordPress</h2>
                <p className="text-slate-700 text-[4.5vw] md:text-[1vw] my-[0.7vh]">To create and manage websites, making it easy for individuals...</p>
                <p className="flex text-blue-500 md:text-[0.9vw]">Read more<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-[0.9vw] w-[5vw] ml-[2vw] md:ml-[0.3vw] text-blue-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  </p>
              </div>
            </div>
            </Link>
          </article>
        </section>
        {/* <MarqueeDemo/> */}
        <div className='md:pt-[10vh] pb-[10vh] bg-slate-50 relative z-10'>
          <h1 data-aos="fade-right" className='pl-[5vw] md:text-[4vw] pt-[2vh] md:py-0 font-bold text-[#384ea7] hfont text-[10vw] md:pt-[0vh]'>PRICING PLAN</h1>
          <h3 data-aos="fade-right" className='pl-[5vw] md:text-[1.3vw] font-normal md:font-[400] text-slate-700 hfont text-[5vw] px-[6vw]  pb-[5vh]'>Custom IT Solutions for Your Successful Business</h3>

          <section className='md:flex justify-between items-center  mx-[5vw]'>
            <div data-aos="fade-up" className='shadow-md relative md:w-[30%] md:left-1 bg-white mt-[0vh] md:mt-0 md:top-[0vh] rounded-[10px]'>
              <figure className={`py-[7vh] flex flex-col items-center font-semibold ${s.imgpricing} text-white`}>
                <h1 className="md:text-[1.9vw] text-[8vw] hfont font-bold">Digital Marketing</h1>
                <p className="md:text-[1vw] pfont text-[5vw] font-normal">"DYNAMIC STRATEGIES"</p>
              </figure>
              <h2 className='text-center pt-[1vh] md:text-[2vw] text-[8vw] font-bold text-slate-600 hfont'>Features</h2>
              <ul className='px-[6vw] text-[5vw] md:text-[1.1vw] md:px-[2vw] md:py-[0vh] pfont'>
                <li className='pt-[5vh]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block mr-[0.5vw] mb-[0.6vh]  text-[#384ea7]">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                  15 posters for all the social media platforms</li>
                <li className='pt-[4vh]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block mr-[0.5vw] mb-[0.6vh] text-[#384ea7]">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                  Facebook, Instagram, LinkedIn and Pinterest account creation</li>
                <button className='my-[7vh] pfont md:text-[1.3vw] bg-[#854CFE] md:bg-[#854CFE] hover:bg-purple-600 w-[100%] py-[1vh] rounded-lg text-white'>See more features...</button>
              </ul>
            </div>
            <div data-aos="fade-up" className='shadow-xl md:w-[30%] relative z-10 mt-[5vh] bg-white md:mt-0 rounded-[10px]'>
              <figure className={`py-[7vh] flex flex-col items-center font-semibold ${s.imgpricing1} text-white`}>
                <h1 className="md:text-[1.9vw] text-[8vw] hfont font-bold">Website Development</h1>
                <p className="md:text-[1vw] pfont text-[5vw] font-normal">"WEB SOLUTIONS"</p>
              </figure>
              <h2 className='text-center pt-[1vh] md:text-[2vw]  text-[8vw] font-bold text-slate-600 hfont'>Features</h2>
              <ul className='px-[5vw] text-[5vw] md:text-[1.1vw] md:px-[2vw] md:py-[0vh] pfont'>
                <li className='pt-[5vh]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block mr-[0.5vw] mb-[0.6vh] text-[#384ea7]">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                  Customizable Design & Social  Media  Integration</li>
                <li className='pt-[4vh]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block mr-[0.5vw] mb-[0.6vh] text-[#384ea7]">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                  Desktop and Mobile Version &  Free  Web Hosting</li>
                <button className='my-[7vh] pfont md:text-[1.3vw] bg-[#854CFE] hover:bg-[#854CFE] w-[100%] py-[1vh] rounded-lg text-white'>See more features...</button>
              </ul>
            </div>
            <div data-aos="fade-up" className='shadow-md  md:w-[30%] right-1 bg-white z-0 relative mt-[5vh] md:mt-0 md:top-[0vh] rounded-[10px]'>
              <figure className={`py-[7vh] flex flex-col items-center font-semibold ${s.imgpricing2} text-white`}>
                <h1 className="md:text-[1.9vw] text-[8vw] hfont font-bold">App Development</h1>
                <p className="md:text-[1vw] pfont text-[5vw] font-normal">"INNOVATIVE APP"</p>
              </figure>
              <h2 className='text-center pt-[1vh] md:text-[2vw]  text-[8vw] font-bold text-slate-600 hfont'>Features</h2>
              <ul className='px-[5vw] text-[5vw] md:text-[1.1vw] md:px-[2vw] md:py-[0vh] pfont'>
                <li className='pt-[5vh]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block mr-[0.5vw] mb-[0.6vh] text-[#384ea7]">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                  Platform Compatibility & Customizable Design</li>
                <li className='pt-[4vh]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 inline-block mr-[0.5vw] mb-[0.6vh] text-[#384ea7]">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                  Publishing Android App on Google Play Store</li>
                <button className='my-[7vh] pfont md:text-[1.3vw] bg-[#854CFE] md:bg-[#854CFE] hover:bg-[#854CFE] w-[100%] py-[1vh] rounded-lg text-white'>See more features...</button>
              </ul>
            </div>

          </section>
        </div>
        <section className="bg-slate-50 md:flex items-start relative z-10 justify-between">
          <div data-aos="fade-up" className="md:pt-[5vh] md:w-[50%]">
            <h1 className="pl-[5vw] md:text-[4vw] pt-[0vh] md:py-0 font-bold text-[#384ea7] hfont text-[10vw] md:pt-[0vh]">TECHNOLOGY</h1>
            <h3 className='pl-[5vw] md:text-[1.3vw] font-normal md:font-[400] text-slate-700 hfont text-[5vw] md:px-[5vw]  pb-[5vh]'>See What Technology We Use</h3>
            <p className="px-[5vw] text-gray-600 md:text-[1.3vw]">We leverage cutting-edge technologies to deliver exceptional solutions that meet your needs and exceed your expectations. Our technology stack is carefully chosen to ensure the highest performance, scalability, and reliability for our applications.</p>
          </div>
          <div data-aos="fade-in" className="relative  md:w-[50%] z-10 flex h-full w-[100%] md:max-w-[100%] items-center justify-center overflow-hidden rounded-lg  bg-background  ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </section>
        {/* <section className='bg-slate-50 relative z-10 text-[#292929] pt-[0vh] md:py-2'>
          <article className={`${s.whychoosebg} md:text-white md:py-[2vh] md:h-[40vh] flex flex-col md:items-center md:justify-center`}>
            <h1 className='text-[7vw] md:text-[1.5vw] ml-[8vw] md:ml-0 hfont mt-[5vh] md:mt-0 font-[700]'>WHY CHOOSE <span className='text-[#854CFE] '>US</span> ?</h1>
            <p className=' text-[5vw]  md:text-[2.5vw] ml-[8vw] md:ml-0 hfont font-[600] md:text-center'>We Are Here to Grow Your Business Exponentially</p>
          </article>
          <article className='w-[100%] md:flex justify-evenly text-[#292929] items-center md:py-[2vh]'>
            <div className='mt-3 w-[85%] m-auto md:m-0 md:w-[24%] p-[5vw] md:p-[2vw] bg-[#dcd2fa] text-center'>
              <i className="fa-solid fa-cubes text-[9vw] md:text-[2.3vw] mb-3"></i>
              <h2 className=' md:text-[2vw] text-[7vw] hfont text-center'>Carefully Planned</h2>
              <p className=' text-[5vw] md:text-[1vw] pfont'>We ensure meticulous attention to detail for every project.</p>
            </div>
            <div className='mt-3 w-[85%] m-auto md:m-0 md:w-[24%] p-[5vw] md:p-[2vw] bg-[#dcd2fa] text-center'>
              <i className="fa-brands fa-sketch text-[9vw] md:text-[2.3vw] mb-3"></i>
              <h2 className=' md:text-[2vw] text-[7vw] hfont text-center'>Perfect Design</h2>
              <p className=' md:text-[1vw] pfont'>we initially plan the vision of project design to ensure its success.</p>
            </div>
            <div className='mt-3 w-[85%] m-auto md:m-0 md:w-[24%] p-[5vw] md:p-[2vw] bg-[#dcd2fa] text-center'>
              <i className="fa-solid fa-medal text-[9vw] md:text-[2.3vw] mb-3"></i>
              <h2 className=' md:text-[2vw] text-[7vw] hfont text-center'>Smartly Execute</h2>
              <p className=' md:text-[1vw] pfont'>We execute our clients' projects smartly, ensuring efficiency and success.</p>
            </div>
            <div className='mt-3 w-[85%] m-auto md:m-0 md:w-[24%] p-[5vw] md:p-[2vw] bg-[#dcd2fa] text-center'>
              <i className="fa-solid fa-phone-volume text-[9vw] md:text-[2.3vw] mb-3"></i>
              <h2 className=' md:text-[2vw] hfont text-[7vw] text-center'>24/7 Support</h2>
              <p className=' md:text-[1vw] pfont'>We're Committed to Resolving Your Issues Day and Night.</p>
            </div>
          </article>
        </section> */}
        <section className="py-16 relative z-10 bg-white">
          <div className="container">
            <div className="mb-8">
              <h2 className="md:text-[4vw] pt-[0vh] md:py-0 font-bold text-[#384ea7] hfont text-[10vw] md:pt-[0vh]">Why Choose Us?</h2>
              <p className="md:text-[1.3vw] font-normal md:font-[400] text-slate-700 hfont text-[5vw]   pb-[5vh]">We Are Here to Grow Your Business Exponentially</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-200 rounded-lg p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Carefully Planned</h3>
                <p className="text-muted-foreground">
                  We ensure meticulous attention to detail for every project.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg p-6">
                {/* <InfoIcon className="h-12 w-12 mb-4 text-primary" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Perfect Design</h3>
                <p className="text-muted-foreground">
                  We execute our clients' projects smartly, ensuring efficiency and success.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                {/* <CombineIcon className="h-12 w-12 mb-4 text-primary" /> */}
                <h3 className="text-2xl font-bold mb-2">Smartly Execute</h3>
                <p className="text-muted-foreground">
                  We execute our clients' projects smartly, ensuring efficiency and success.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg p-6">
                {/* <CombineIcon className="h-12 w-12 mb-4 text-primary" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>

                <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  We're Committed to Resolving Your Issues Day and Night.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ClientWrapper>
    </>
  )
}

export default Home