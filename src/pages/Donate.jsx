import React, { useState } from 'react';

const Donate = () => {
  const [activeTab, setActiveTab] = useState('geyser');

  const BACKGROUND_IMAGE_URL = 'assets/dontebg.jpg';
  const DONATION_IMAGE_URL = 'assets/dontebg.jpg';
  return (
    <div className='mt-[110px]'>
    <section 
      className="relative max-md:mt-[100px] mt-[40px] md:min-h-screen flex items-center justify-start overflow-hidden"
      // Applying the background image directly via style
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* Dark Overlay for Text Contrast */}
      {/* We still need an absolute/inset div for the color overlay to cover the background */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Content Container */}
      <div className="relative z-10 p-6 sm:p-10 md:p-16 lg:p-24 max-w-7xl mx-auto w-full">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">

          {/* Golden Badge */}
          <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-white bg-[#FFD70061] rounded-[100px]">
            2+ Years of Proof-of-Quality-Works
          </span>

          {/* Main Title - Responsive sizing for impact */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Support <br className="md:hidden" />
            Bitcoin <br className="md:hidden" /> Adoption <br className="md:hidden" />
            Across <br className="-md:hidden" />
            <span className="text-yellow-400"> Africa.</span>
          </h1>

          {/* Subtext/Body */}
          <p className="text-white text-lg sm:text-xl font-light max-w-md">
            Your donation fuels grassroots training, community building, real adoption stories, 
            and local circular economy projects. Help us grow Africa's Bitcoin proof-of-work.
          </p>

          {/* Add a Call-to-Action button here if needed */}
        </div>
      </div>
    </section>
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* <h1 className="text-3xl font-black text-center mb-6">Support Bitcoin Africa Story</h1>
      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">Your donations help us produce educational content and support Bitcoin adoption across Africa. Choose a payment option below.</p> */}

      {/* Tabs */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 border-b border-gray-800">
          <nav role="tablist" className="flex gap-2">
            <button
              role="tab"
              aria-selected={activeTab === 'geyser'}
              onClick={() => setActiveTab('geyser')}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === 'geyser' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-gray-800'}`}>
              Geyser
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'btcpay'}
              onClick={() => setActiveTab('btcpay')}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === 'btcpay' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-gray-800'}`}>
              BTCPay Server
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'info'}
              onClick={() => setActiveTab('info')}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === 'info' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-gray-800'}`}>
              Static QR Codes
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'geyser' && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Geyser Donation Widget</h2>
              <p className="text-sm text-gray-400 mb-4 text-center">Support our ongoing Storytelling, Bitcoin education, circular economy, and Community Building Initiatives.</p>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-[400px]">
                  <iframe
                    src="https://geyser.fund/widget/project/bitcoinafricastory/contribution?view=compact&colorMode=light"
                    title="Geyser Project Contribution Widget"
                    style={{
                      width: '100%',
                      minHeight: '264px',
                      border: 'none',
                      maxWidth: '400px',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'btcpay' && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">BTCPay Server</h2>
              <p className="text-sm text-gray-400 mb-4 text-center">Pay directly with Bitcoin using our self-hosted BTCPay Server.</p>

              {/* Preserve the original styles provided by the user */}
              <style>{`
.btcpay-form { display: inline-flex; align-items: center; justify-content: center; }
.btcpay-form--inline { flex-direction: row; }
.btcpay-form--block { flex-direction: column; }
.btcpay-form--inline .submit { margin-left: 15px; }
.btcpay-form--block select { margin-bottom: 10px; }
.btcpay-form .btcpay-custom-container{ text-align: center; }
.btcpay-custom { display: flex; align-items: center; justify-content: center; }
.btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; }
.btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; }
.btcpay-form select:hover { border-color: #ccc; }
.btcpay-form option { color: #000; background: rgba(0,0,0,.1); }
.btcpay-input-price { -moz-appearance: textfield; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; }
.btcpay-input-price::-webkit-outer-spin-button, .btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
              `}</style>

              <div className="flex justify-center">
                <form
                  method="POST"
                  action="https://btcpay.ideasarelikeflames.org/api/v1/invoices"
                  className="btcpay-form btcpay-form--block"
                >
                  <input type="hidden" name="storeId" value="3dCgxFoFx9P8RaoetmngFa32H3PVXZRNykJgSat83fsc" />
                  <input type="hidden" name="currency" value="USD" />
                  <input
                    type="image"
                    className="submit"
                    name="submit"
                    src="https://btcpay.ideasarelikeflames.org/img/paybutton/pay.svg"
                    style={{ width: '209px' }}
                    alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
                  />
                </form>
              </div>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Static QR Code</h2>
              <p className="text-sm text-gray-400 mb-4 text-center">Scan the QR code below to donate. If you don't see the image, ensure the file is located at <code className="text-xs">/assets/qrrcode.png</code>.</p>
              <div className="w-full flex justify-center">
                <img
                  src="/assets/qrcode.jpg"
                  alt="Static QR Code for donations"
                  className="w-full w-[700px] w-[700px]  rounded-lg shadow-md  p-4"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <section className="max-w-6xl mx-auto bg-black text-white py-16 sm:py-20 md:py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Grid Container: Stacks on mobile, two columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content (Left Column on Desktop) */}
          <div className="md:order-1 order-2"> 
            
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
              How To Donate
            </h2>

            {/* Paragraph 1 */}
            <p className="text-lg sm:text-xl font-light mb-8 max-w-lg">
              Choose your preferred Bitcoin payment option above.
            </p>

            {/* Paragraph 2 - Emphasizing security/mission */}
            <p className="text-lg sm:text-xl font-light max-w-lg">
              All contributions are secure, transparent, and go directly to 
              community work, education and our efforts to drive Bitcoin 
              Adoption across Africa.
            </p>
            
            {/* Note: The original design implies the Bitcoin payment options 
                 are listed *above* this section. You would integrate them 
                 elsewhere on the page. */}
          </div>

          {/* Image Content (Right Column on Desktop) */}
          {/* We use md:order-2 order-1 to make the image appear first on mobile 
             if preferred, otherwise use md:order-2 order-2 to keep text first. 
             Based on the sample image, text-first on mobile is cleaner. 
             I'll stick to text-first on both by setting md:order-1 and md:order-2 
             for the columns. If you want the image first on mobile, swap the order-1/2 classes. */}
          <div className="md:order-2 order-1"> 
            <img 
              src={DONATION_IMAGE_URL}
              alt="Group holding a Bitcoin Africa Story banner"
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Donate;
