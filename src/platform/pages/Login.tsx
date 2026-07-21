import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '../context/AuthContext';
import { ShieldCheck, Lock, Mail, ArrowRight, KeyRound, CheckCircle2 } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('brooke.s@horizonsupport.com.au');
  const [password, setPassword] = useState('••••••••••••');
  const [role, setRole] = useState<UserRole>('coordinator');
  const [mfaCode, setMfaCode] = useState('');
  const [step, setStep] = useState<'login' | 'mfa'>('login');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('mfa');
  };

  const handleMfaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, role);
    if (role === 'participant') {
      navigate('/platform/portal');
    } else if (role === 'worker') {
      navigate('/platform/mobile-worker');
    } else {
      navigate('/platform');
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col justify-center py-12 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10">
        <Link to="/" className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-teal flex items-center justify-center font-black text-navy text-xl shadow-lg shadow-teal/30">
            H
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-2xl tracking-tight text-white">Horizon</span>
            <span className="text-xs text-teal font-semibold tracking-wider uppercase mt-1">NDIS Management Platform</span>
          </div>
        </Link>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
          {step === 'login' ? 'Sign in to Horizon Platform' : 'Two-Factor Verification'}
        </h2>
        <p className="text-xs text-white/60">
          {step === 'login'
            ? 'Secure NDIS Provider Operating System · Practice Standards Compliant'
            : 'Enter the 6-digit code sent to your mobile device'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-navy-mid border border-white/10 py-8 px-6 shadow-2xl rounded-3xl sm:px-10">
          {step === 'login' ? (
            <form className="space-y-5" onSubmit={handleLoginSubmit}>
              {/* Role Picker */}
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">Select Portal Role</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['coordinator', 'worker', 'participant'] as UserRole[]).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                        role === r
                          ? 'bg-teal border-teal text-white shadow-md shadow-teal/20'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-wider">Password</label>
                  <Link to="/platform/forgot-password" className="text-xs font-bold text-teal hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-teal hover:bg-teal/90 text-white text-xs font-bold rounded-xl shadow-lg shadow-teal/20 flex items-center justify-center gap-2 transition-all mt-2"
              >
                <span>Continue to Verification</span>
                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleMfaSubmit}>
              <div className="p-3 rounded-2xl bg-teal/10 border border-teal/20 text-center">
                <p className="text-xs text-teal font-semibold">Verification code sent to +61 412 *** 890</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2 text-center">Enter 6-Digit Code</label>
                <div className="relative max-w-xs mx-auto">
                  <KeyRound size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    maxLength={6}
                    required
                    placeholder="849201"
                    value={mfaCode}
                    onChange={(e) => setMfaCode(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-base tracking-widest font-mono text-white placeholder-white/30 focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-emerald hover:bg-emerald/90 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald/20 flex items-center justify-center gap-2 transition-all"
              >
                <CheckCircle2 size={16} />
                <span>Authenticate & Access Dashboard</span>
              </button>

              <button
                type="button"
                onClick={() => setStep('login')}
                className="w-full text-center text-xs text-white/50 hover:text-white transition-colors"
              >
                ← Back to login
              </button>
            </form>
          )}

          {/* Compliance Footer inside card */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-white/40">
            <ShieldCheck size={14} className="text-emerald" />
            <span>NDIS Practice Standards & Privacy Act 1988</span>
          </div>
        </div>
      </div>
    </div>
  );
};
