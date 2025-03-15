import React from "react";
import { Clock, MapPin, Phone } from "../components/Icons";

function Contact() {
  return (
    <div className="flex w-full h-screen -mb-[200px]">
      <div className="container mx-auto px-4 flex justify-center my-auto w-full">
        <div className="w-full grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Find Us</h2>
            <div className="bg-muted h-[300px] rounded-lg mb-6">
              <div className="h-full w-full flex items-center justify-center bg-muted text-muted-foreground">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.47325013331!2d-74.00330948866912!3d40.72961097127168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259fd3ecd19ed%3A0x78f6586b0ce4080c!2s7th%20Street%20Burger%20West%20Village!5e0!3m2!1sen!2sus!4v1741969200468!5m2!1sen!2sus"
                  width="100%"
                  height={500}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="space-y-4 my-32">
              <div className="flex items-start">
                <MapPin />
                <div className="ml-3">
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    110 MacDougal St, New York, NY 10012
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone />
                <div className="ml-3">
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">(646) 224-6919</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock />
                <div className="ml-3">
                  <h3 className="font-medium">Hours</h3>
                  <div className="text-muted-foreground">
                    <p> Monday - Wednesday: 12:00 PM - 1:00 AM</p>
                    <p>Thursday - Saturday: 5:00 PM - 3:00 AM</p>
                    <p> Sunday: 12:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-gray-400 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
