import React, { useState } from 'react';

const Donate = () => {
  const [activeTab, setActiveTab] = useState('geyser');

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-black text-center mb-6">Support Bitcoin Africa Story</h1>
      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">Your donations help us produce educational content and support Bitcoin adoption across Africa. Choose a payment option below.</p>

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
              <p className="text-sm text-gray-400 mb-4 text-center">Use the compact Geyser widget to donate — fast and mobile-friendly.</p>
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
  );
};

export default Donate;
