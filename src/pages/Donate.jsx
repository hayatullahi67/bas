import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import ScrollToTop from '../components/ScrollToTop';

const Donate = () => {
  const [activeTab, setActiveTab] = useState('geyser');

  const BACKGROUND_IMAGE_URL = 'assets/dontebg.jpg';
  const DONATION_IMAGE_URL = 'assets/dontebg.jpg';
  return (
    <div className='mt-[110px]'>
    <section id="hero" className="relative  flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 text-left mt-12 md:mt-10 lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <span className="text-yellow-500 text-sm font-semibold">2+ Years of Proof-of-Quality-Works</span>
            </div>

            <h1 className="text-4xl sm:text-7xl md:text-6xl lg:text-7xl md:font-extrabold mb-4 leading-tight">
              <span>Support </span> <br className="sm:hidden"/> <span>Bitcoin </span> <br className="sm:hidden"/> <span>Adoption </span> <br className=""/> <span className="text-[#FAD604]">Across Africa.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Your donation fuels grassroots training, community building, real adoption stories, and local circular economy projects. Help us grow Africa's Bitcoin proof-of-work.
            </p>

            <div className="flex sm:flex-row gap-4 justify-start mb-6 w-full max-w-md">
              <button className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                Donate Now
              </button>
            </div>
          </div>
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

    <section className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 sm:py-20 md:py-24 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white border border-gray-700 shadow-2xl rounded-[none] overflow-hidden hover:shadow-yellow-500/20 transition-shadow duration-300">
          <CardHeader className="text-center pb-6 pt-8">
            <CardTitle className="text-4xl sm:text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              How To Donate
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center px-8 pb-8">
            <p className="text-lg sm:text-xl md:text-xl font-light mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Choose your preferred Bitcoin payment option above.
            </p>
            <p className="text-lg sm:text-xl md:text-xl font-light max-w-3xl mx-auto text-gray-300 leading-relaxed">
              All contributions are secure, transparent, and go directly to 
              community work, education and our efforts to drive Bitcoin 
              Adoption across Africa.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
    <ScrollToTop />
    </div>
  );
};

export default Donate;
