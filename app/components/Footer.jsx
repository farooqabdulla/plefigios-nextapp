import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="relative z-10">
            <footer className="footer bg-[#061551] text-base-content p-10 py-[10vh]">
                <aside>
                    <Link href='/' className='h-[100%] mb-[2vh] flex items-center justify-center'>
                        <h1 className='text-slate-50 text-[7vw] md:text-[1.7vw] font-bold hfont'>
                            PLEFI<span className='text-[#854CFE]'>GOS</span>
                        </h1>
                    </Link>
                    <p className="pt-[0.5vh]">We Develop Websites & Apps .
                    </p>
                    <p className="">We make the best strategies for you, Enhancing your success.<br/> We complete each project with extra care as per the customer needs.!</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Facebook Ads</a>
                    <a className="link link-hover">Google Ads</a>
                    <a className="link link-hover">Graphic Designing</a>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Google My Business</a>
                    <a className="link link-hover">Wordpress</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Pricing Plan</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved PLEFIGOS</p>
                </aside>
            </footer>

        </div>
    )
}

export default Footer