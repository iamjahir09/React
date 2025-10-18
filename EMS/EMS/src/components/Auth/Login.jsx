import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is ",email,"and password is ",password)
    setEmail("")
    setPassword("")
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-white/80">Sign in to access your account</p>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className="flex flex-col gap-5">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 w-full outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition placeholder-white/60 text-white"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <h3 className="text-yellow-300 hover:text-yellow-200 text-sm cursor-pointer transition font-medium">
                Forgot password?
              </h3>
            </div>
            <input
              id="password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              required
              type="password"
              placeholder="Enter your password"
              className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 w-full outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition placeholder-white/60 text-white"
            />
          </div>

          <div className="flex items-center gap-3">
            <input 
              id="terms" 
              required 
              type="checkbox" 
              className="h-5 w-5 text-yellow-500 border-white/30 rounded focus:ring-yellow-400 bg-white/20" 
            />
            <label htmlFor="terms" className="text-white text-sm">
              I agree to Terms and Services
            </label>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl px-4 py-3 mt-2 text-lg transition-all w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Log in
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-white/80 text-center text-sm">
            Don't have an account? 
            <span className="text-yellow-300 hover:text-yellow-200 font-bold cursor-pointer ml-1 transition">
              Sign up now
            </span>
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <span className="text-white font-bold">f</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <span className="text-white font-bold">G</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <span className="text-white font-bold">in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;