import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col justify-center py-12 px-6 lg:px-8 relative overflow-hidden">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal flex items-center justify-center font-black text-navy text-xl shadow-lg shadow-teal/30">
            H
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-2xl tracking-tight text-white">Horizon</span>
            <span className="text-xs text-teal font-semibold tracking-wider uppercase mt-1">NDIS Management Platform</span>
          </div>
        </Link>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Reset Password</h2>
        <p className="text-xs text-white/60">Enter your registered email to receive a password reset link.</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-navy-mid border border-white/10 py-8 px-6 shadow-2xl rounded-3xl sm:px-10">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald/20 text-emerald mx-auto flex items-center justify-center">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Check your email</h3>
              <p className="text-xs text-white/60">We have sent password reset instructions to <span className="text-teal font-semibold">{email}</span>.</p>
              <Link
                to="/platform/login"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:underline pt-2"
              >
                <ArrowLeft size={14} /> Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Registered Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    required
                    placeholder="name@horizonsupport.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-teal hover:bg-teal/90 text-white text-xs font-bold rounded-xl shadow-lg shadow-teal/20 transition-all"
              >
                Send Reset Link
              </button>

              <div className="text-center pt-2">
                <Link to="/platform/login" className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors">
                  <ArrowLeft size={14} /> Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
