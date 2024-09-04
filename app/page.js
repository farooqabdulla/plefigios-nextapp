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
import BoxReveal from './components/BoxReveal'
const ScrollAnimation = dynamic(() => import('./components/ScrollAnimation'), { ssr: false });
import IconCloud from "@/components/magicui/icon-cloud";

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
      <section className='h-[92vh] z-10 relative flex justify-center items-center'>
        <video
          src="/assects/videos/blur2.mp4"
          autoPlay
          muted
          loop
          className='h-[92vh] w-full object-cover fixed z-0'>
        </video>
        <div className='absolute inset-0 bg-gradient-to-b from-[#061551a0] to-[#061551a0] z-[1]'></div>
        <div className='relative z-10 text-center py-[10vh] flex items-center justify-center flex-col'>
          <Image src={design} className='absolute animate-spin w-[10vw] md:w-[2vw] top-0 right-[14vw]' alt="" />
          <Image src={design1} className='absolute  w-[10vw] md:w-[2vw] animate-bounce bottom-[13vh] left-0' alt="" />
          <Image src={design2} className='absolute animate-pulse  w-[10vw] md:w-[2vw] bottom-0 right-0' alt="" />
          <BoxReveal boxColor="#854CFE" duration={0.8}>
            <h2 className='md:text-[1.3vw] w-[100%]  m-auto text-[5vw] font-[300] text-white hfont mb-[2vh] md:mb-0'>WELCOME TO PLEFIGOS,</h2>
          </BoxReveal>
          <BoxReveal boxColor="#854CFE" duration={0.8}>
            <h1 className='md:text-[4vw]  mb-[2vh] md:mb-0 px-[7vw] text-[10vw] font-bold text-white hfont'>We Develop Websites & Apps</h1>
          </BoxReveal>
          <BoxReveal boxColor="#854CFE" duration={0.8}>
            <p className='text-white text-[6vw] px-[7vw] font-[300] md:text-[1.2vw] pfont mb-[3vh] md:mb-[5vh] pt-[1vh]'>We make the best strategies for you, Enhancing your success. We complete each project with extra care as per the customer needs.!</p>
          </BoxReveal>
          <BoxReveal boxColor="#854CFE" duration={0.8}>
            <button className='bg-[#854CFE] delay-100 hover:bg-blue-100 hover:text-black px-[15vw] md:px-[5vw] py-[1.7vh] rounded-[30px] text-white pfont font-semibold'>Request Demo</button>
          </BoxReveal>
        </div>
      </section>
      <section className='relative z-20 h-[20vh] text-black bg-slate-50'>
        <section className='md:h-[30vh]  bg-white rounded-lg relative md:bottom-[15vh] md:shadow-xl shadow-none md:mt-0 md:flex items-center justify-between w-[90%] m-auto flex-wrap '>

          <article className='md:w-[33%] h-[20vh]  items-center flex md:justify-center justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mr-[1.5vw] text-[#384ea7]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
            <div className=''>
              <h1 className='text-[6vw] md:text-[1.2vw] pfont'>Happy Clients</h1>
              <h1 className='text-[7vw] md:text-[2vw] font-semibold hfont'>16</h1>
            </div>
          </article>
          <article className='md:w-[33%] h-[20vh] mt-[2vh] md:mt-0  items-center flex md:justify-center justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mr-[1.5vw] text-[#384ea7] ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <div className=''>
              <h1 className='text-[6vw] md:text-[1.2vw] pfont'>Project Done</h1>
              <h1 className='text-[7vw] md:text-[2vw] font-semibold hfont'>30</h1>
            </div>
          </article>
          <article className='md:w-[33%] h-[20vh] mt-[2vh] md:mt-0  items-center flex md:justify-center justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mr-[1.5vw] text-[#384ea7] ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>

            <div className=''>
              <h1 className='text-[6vw] md:text-[1.2vw] pfont'>Rating</h1>
              <h1 className='text-[7vw] md:text-[2vw] font-semibold hfont'>5/5</h1>
            </div>
          </article>
        </section>
      </section>
      <section>
      </section>
      <section className="relative z-10 bg-slate-50 py-[10vh]">
        <ScrollAnimation>
          <h1 className='pl-[5vw] md:text-[4vw]  font-bold text-[#384ea7] hfont text-[8vw] md:pt-[0vh]'>OUR SERVICES</h1>
          <h3 className='pl-[5vw] md:text-[1.3vw] font-normal md:font-[400] text-slate-700 hfont  text-[6vw] px-[6vw]  md:pb-[5vh]'>Custom IT Solutions for Your Successful Business</h3>
        </ScrollAnimation>
        <article className="md:flex justify-between px-[5vw] w-[100%]  ">
          <div className="card  card-compact bg-white md:w-[30%] shadow-xl">
            <figure className="">
              <Image
                src={facebook}
                alt="Shoes"
                className="h-[30vh] object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Facebook Ads</h2>
              <p className="text-slate-700 md:text-[1vw]">Facebook ads help businesses reach a wider audience and increase...</p>
              <div className="card-actions justify-end">
                <button className="btn text-white btn-primary">Know More</button>
              </div>
            </div>
          </div>
          <div className="card  card-compact bg-white md:w-[30%] shadow-xl">
            <figure className="">
              <Image
                src={google}
                alt="Shoes"
                className="h-[30vh] object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Google Ads</h2>
              <p className="text-slate-700 md:text-[1vw]">Google Ads helps businesses reach target audience, increase...</p>
              <div className="card-actions justify-end">
                <button className="btn text-white btn-primary">Know More</button>
              </div>
            </div>
          </div>
          <div className="card  card-compact bg-white md:w-[30%] shadow-xl">
            <figure className="">
              <Image
                src={graphic}
                alt="Shoes"
                className="h-[30vh] object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Graphic Designing</h2>
              <p className="text-slate-700 md:text-[1vw]">It plays a crucial role in creating brand identity, enhancing...</p>
              <div className="card-actions justify-end">
                <button className="btn text-white btn-primary">Know More</button>
              </div>
            </div>
          </div>
        </article>
        <article className="md:flex justify-between px-[5vw] mt-[5vh] w-[100%]  ">
          <div className="card card-compact bg-white md:w-[30%] shadow-xl">
            <figure className="">
              <Image
                src={web}
                alt="Shoes"
                className="h-[30vh] object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Web Development</h2>
              <p className="text-slate-700 md:text-[1vw]">We design and develop the best user-friendly website and most...</p>
              <div className="card-actions justify-end">
                <button className="btn text-white btn-primary">Know More</button>
              </div>
            </div>
          </div>
          <div className="card  card-compact bg-white md:w-[30%] shadow-xl">
            <figure className="">
              <Image
                src={business}
                alt="Shoes"
                className="h-[30vh] object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Google My Business</h2>
              <p className="text-slate-700 md:text-[1vw]">We design and develop the best user-friendly website and most...</p>
              <div className="card-actions justify-end">
                <button className="btn text-white btn-primary">Know More</button>
              </div>
            </div>
          </div>
          <div className="card  card-compact bg-white md:w-[30%] shadow-xl">
            <figure className="">
              <Image
                src={wordpress}
                alt="Shoes"
                className="h-[30vh] object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">WordPress</h2>
              <p className="text-slate-700 md:text-[1vw]">To create and manage websites, making it easy for individuals...</p>
              <div className="card-actions justify-end">
                <button className="btn text-white btn-primary">Know More</button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <div className='pt-[10vh] pb-[10vh] bg-slate-50 relative z-10'>
        <ScrollAnimation>
          <h1 className='pl-[5vw] md:text-[4.5vw]  font-bold text-[#384ea7] hfont text-[8vw] pt-[7vh] md:pt-0'>PRICING PLAN</h1>
          <h3 className='pl-[5vw] md:text-[1.3vw] font-[300] md:font-[400] text-slate-700 hfont  text-[6vw] px-[6vw]  md:pb-[5vh]'>Custom IT Solutions for Your Successful Business</h3>
        </ScrollAnimation>
        <section className='md:flex justify-center items-center mx-[6vw]'>
          <div className='shadow-md relative md:w-[30%] md:left-1 bg-white mt-[5vh] md:mt-0 md:top-[5vh] rounded-[20px]'>
            <figure className={`py-[7vh] flex flex-col items-center font-semibold ${s.imgpricing} text-white`}>
              <h1 className="md:text-[1.9vw] text-[8vw] hfont font-bold">Digital Marketing</h1>
              <p className="md:text-[1vw] pfont text-[5vw] font-normal">"DYNAMIC STRATEGIES"</p>
            </figure>
            <h2 className='text-center py-[1vh] md:text-[2vw] text-[8vw] font-bold text-slate-600 hfont'>Features</h2>
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
          <div className='shadow-xl md:w-[30%] relative z-10 mt-[5vh] bg-white md:mt-0 rounded-[20px]'>
            <figure className={`py-[7vh] flex flex-col items-center font-semibold ${s.imgpricing1} text-white`}>
              <h1 className="md:text-[1.9vw] text-[8vw] hfont font-bold">Website Development</h1>
              <p className="md:text-[1vw] pfont text-[5vw] font-normal">"WEB SOLUTIONS"</p>
            </figure>
            <h2 className='text-center py-[1vh] md:text-[2vw]  text-[8vw] font-bold text-slate-600 hfont'>Features</h2>
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
          <div className='shadow-md  md:w-[30%] right-1 bg-white z-0 relative mt-[5vh] md:mt-0 md:top-[5vh] rounded-[20px]'>
            <figure className={`py-[7vh] flex flex-col items-center font-semibold ${s.imgpricing2} text-white`}>
              <h1 className="md:text-[1.9vw] text-[8vw] hfont font-bold">App Development</h1>
              <p className="md:text-[1vw] pfont text-[5vw] font-normal">"INNOVATIVE APP"</p>
            </figure>
            <h2 className='text-center py-[1vh] md:text-[2vw]  text-[8vw] font-bold text-slate-600 hfont'>Features</h2>
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
      <section className="bg-slate-50 relative z-10 px-[5vw] flex justify-between">
        <div className="w-[50%]">
          <h1 className="pl-[5vw] md:text-[4.5vw]  font-bold text-[#384ea7] hfont text-[8vw] pt-[7vh] md:pt-0">TECHNOLOGY</h1>
          <h3 className='pl-[5vw] md:text-[1.3vw] font-normal md:font-[400] text-slate-700 hfont  text-[6vw] px-[6vw]  md:pb-[5vh]'>See What Technology We Use</h3>
        </div>
      <div className="relative z-10 flex h-full w-full max-w-[50%] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      </section>
      <section className='bg-slate-50 relative z-10 text-[#292929] pt-[0vh] md:py-2'>
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
      </section>
      
    </>
  )
}

export default Home