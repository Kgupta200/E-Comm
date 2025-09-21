import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 px-6 py-12">
      
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
        
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-bold mb-4">E-Comm</h3>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever. Since the 1500s,
            when an unknown printer.
          </p>
        </div>

       
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <p className="text-sm mb-3">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm font-bold">F</div>
            <div className="w-8 h-8 bg-blue-400 text-white flex items-center justify-center rounded-full text-sm font-bold">T</div>
          </div>
        </div>

        
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-md font-semibold mb-2">Contact Us</h4>
          <p className="text-sm leading-relaxed">
            E-Comm, 4578<br />
            Marmora Road,<br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>

      
      <div className="border-t border-gray-300 pt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {['Infomation', 'Service', 'My Account', 'Our Offers'].map((section, idx) => (
          <div key={idx}>
            <h4 className="text-md font-semibold mb-3">{section}</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Infomation</li> 
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        ))}
      </div>

      
      <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-4 md:mb-0">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </p>
        <div className="flex space-x-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
