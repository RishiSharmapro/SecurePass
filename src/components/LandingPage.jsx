/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Shield, Key, RefreshCw, Eye } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

function App() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      // Display the toast after authentication
      toast("Loged in successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        theme: "dark",
        transition: Bounce,
      });
    }
  }, [isAuthenticated]);
  const handleLogin = () => {
    loginWithRedirect();  
  };
  const handleNavigation = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      handleLogin();
    }
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="flex flex-col min-h-screen ">
        {/* Hero Section */}
        <section className="bg-[#f0f7f0] py-16 md:py-24 flex-grow">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-[#1a2235]">&lt;Secure</span>
                  <span className="text-[#4CAF50]">Pass/&gt;</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                  Handling your passwords with care
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Secure, simple, and smart password management for individuals
                  and teams. Keep all your logins safe and accessible from any
                  device.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {isAuthenticated ? (
                    <button onClick={handleNavigation} className="px-6 py-3 rounded bg-[#4CAF50] text-white text-center hover:bg-[#3e8e41] transition-colors">Go to Dashboard</button>
                  ) : (
                    <Link
                      onClick={() => handleLogin()}
                      className="px-6 py-3 rounded bg-[#4CAF50] text-white text-center hover:bg-[#3e8e41] transition-colors"
                    >
                      Get Started - Its Free
                    </Link>
                  )}
                  <a
                    href="#how-it-works"
                    className="px-6 py-3 rounded border border-[#1a2235] text-[#1a2235] text-center hover:bg-[#1a2235] hover:text-white transition-colors"
                  >
                    See How It Works
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                  <div className="text-center mb-6">
                    <span className="text-[#1a2235] text-xl font-semibold">
                      &lt;Secure
                    </span>
                    <span className="text-[#4CAF50] text-xl font-semibold">
                      Pass/&gt;
                    </span>
                    <p className="text-gray-600 mt-2">
                      Handling your passwords with care
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter website URL"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Enter username"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                        />
                      </div>
                      <div className="relative flex-1">
                        <input
                          type="password"
                          placeholder="Enter password"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                        />
                        <Eye className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button className="px-6 py-2 bg-[#4CAF50] text-white rounded-md hover:bg-[#3e8e41] transition-colors flex items-center gap-2">
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-2">
                      Your passwords
                    </h3>
                    <p className="text-gray-500">No passwords to show</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-[#1a2235]">Powerful </span>
              <span className="text-[#4CAF50]">Features</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#f0f7f0] p-6 rounded-lg">
                <div className="bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Secure Encryption
                </h3>
                <p className="text-gray-600">
                  Your data is encrypted with AES-256, one of the strongest
                  encryption methods available.
                </p>
              </div>
              <div className="bg-[#f0f7f0] p-6 rounded-lg">
                <div className="bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <RefreshCw className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Auto-Sync</h3>
                <p className="text-gray-600">
                  Your passwords automatically sync across all your devices in
                  real-time.
                </p>
              </div>
              <div className="bg-[#f0f7f0] p-6 rounded-lg">
                <div className="bg-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Key className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Password Generator
                </h3>
                <p className="text-gray-600">
                  Create strong, unique passwords with our built-in password
                  generator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-[#f0f7f0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-[#1a2235]">How </span>
              <span className="text-[#4CAF50]">It Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#1a2235] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-gray-600">
                  Create your free account with a strong master password.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a2235] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Add Passwords</h3>
                <p className="text-gray-600">
                  Store your existing passwords or create new secure ones.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a2235] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Access Anywhere</h3>
                <p className="text-gray-600">
                  Use your passwords on any device, anytime you need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-[#1a2235]">What Our </span>
              <span className="text-[#4CAF50]">Users Say</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#f0f7f0] p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  SecurePass has completely transformed how I manage my online
                  accounts. I no longer worry about forgetting passwords!
                </p>
                <p className="font-semibold">- Sarah J.</p>
              </div>
              <div className="bg-[#f0f7f0] p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  The auto-fill feature saves me so much time. It &apos s
                  incredibly convenient and secure at the same time.
                </p>
                <p className="font-semibold">- Michael T.</p>
              </div>
              <div className="bg-[#f0f7f0] p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  As a business owner, I needed a solution for my team.
                  SecurePass Enterprise has been perfect for our needs.
                </p>
                <p className="font-semibold">- David R.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1a2235] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to secure your digital life?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust SecurePass to keep their
              passwords safe.
            </p>
            <Link
              href="/signup"
              className="px-8 py-3 rounded bg-[#4CAF50] text-white text-lg font-semibold hover:bg-[#3e8e41] transition-colors inline-block"
            >
              Get Started For Free
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required
            </p>
          </div>
        </section>

        {/* Footer */}
      </div>
    </>
  );
}

export default App;
