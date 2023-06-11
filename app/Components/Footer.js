import React from "react";

function Footer() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-4 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real state</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Papa fam</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Papa react</p>
        <p>Presents</p>
        <p>How react works</p>
        <p>With Nextjs</p>
        <p>Building Airbnb</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help center</p>
        <p>Working on this project</p>
        <p>Seems fun</p>
        <p>Unless error occurs</p>
        <p>Ofcourse</p>
      </div>
    </div>
  );
}

export default Footer;
