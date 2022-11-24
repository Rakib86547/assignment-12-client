import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mx-auto w-full mt-5 p-10 bg-secondary text-base-content">
            <div>
                <span className="footer-title">CONTACT INFO</span>
                <Link className="link link-hover">20/F Green Road, Dhanmondi, Dhaka</Link>
                <Link className="link link-hover">contact.antor.bd@gmail.com</Link>
                <Link className="link link-hover">+0477 85X6 552</Link>
                <Link className="link link-hover">+0477 85X6 552</Link>
            </div>
            <div>
                <span className="footer-title">USEFUL LINKS</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            {/* <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div> */}
            <div>
                <span className="footer-title">SUBSCRIBE</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;