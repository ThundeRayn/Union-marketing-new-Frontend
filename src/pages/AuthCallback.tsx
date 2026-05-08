import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from '@/context/AuthContext';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

const AuthCallback = () => {
  const navigate = useNavigate();
  const { setSession } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const tokenHash = params.get('token_hash');
  const type = params.get('type');

  useEffect(() => {
    const handle = async () => {
      let session = null;

      if (tokenHash) {
        const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: type as 'signup' });
        if (error || !data.session) { setError('Verification failed. The link may have expired.'); return; }
        session = data.session;
      } else if (code) {
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        if (error || !data.session) { setError('Verification failed. The link may have expired.'); return; }
        session = data.session;
      }

      if (!session) return;

      const user = session.user;
      setSession(session.access_token, {
        id: user.id,
        email: user.email!,
        firstName: user.user_metadata?.first_name ?? '',
        lastName: user.user_metadata?.last_name ?? '',
        isRealtor: user.user_metadata?.is_realtor ?? false,
      });

      navigate('/broker-portal', { replace: true });
    };

    handle();
  }, [code, tokenHash, type, navigate, setSession]);

  if (!code && !tokenHash || error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="text-red-400 mb-4">{!code ? 'Invalid verification link.' : error}</p>
          <a href="/login" className="text-(--color-primary) underline">Back to login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="text-white/60 tracking-widest uppercase text-sm">Verifying your email…</p>
    </div>
  );
};

export default AuthCallback;
