import { useAuth } from '@/context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import useIsMobile from '@/hooks/useIsMobile';

const BrokerPortal = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  const bgImage = isMobile
    ? 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1777108265/building_outside_street_q1ncta.png)'
    : 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277530/2021_09_28_12_28_44_thomson-c-1024x682-1_wonxfk.jpg)';

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: bgImage }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">

        <div
          className="h-px w-10 bg-(--color-primary) mb-8"
          style={{ animation: 'slideUpFadeIn 0.6s ease-out both', animationDelay: '0.1s' }}
        />

        <p
          className="text-xs tracking-[0.3em] uppercase text-(--color-primary) mb-4"
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '0.85rem',
            animation: 'slideUpFadeIn 0.6s ease-out both',
            animationDelay: '0.2s',
          }}
        >
          Broker Portal
        </p>

        <h1
          className="text-4xl md:text-6xl font-normal text-white mb-3 leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            animation: 'slideUpFadeIn 0.7s ease-out both',
            animationDelay: '0.3s',
          }}
        >
          Welcome Back
        </h1>

        <p
          className="text-xl md:text-2xl font-normal mb-2"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-primary)',
            animation: 'slideUpFadeIn 0.7s ease-out both',
            animationDelay: '0.4s',
          }}
        >
          {user?.firstName} {user?.lastName}
        </p>

        {user?.isRealtor && (
          <p
            className="text-sm text-white/40 mb-14 tracking-widest uppercase"
            style={{
              fontFamily: 'var(--font-label)',
              animation: 'slideUpFadeIn 0.6s ease-out both',
              animationDelay: '0.5s',
            }}
          >
            Realtor
          </p>
        )}
        {!user?.isRealtor && <div className="mb-14" />}

        {/* CTA — View Projects */}
        <Link
          to="/project"
          className="group relative inline-flex items-center gap-3 border border-(--color-primary) px-10 py-4 overflow-hidden transition-all duration-300"
          style={{
            animation: 'slideUpFadeIn 0.6s ease-out both',
            animationDelay: '0.6s',
          }}
        >
          <span className="absolute inset-0 bg-(--color-primary) translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span
            className="relative z-10 tracking-[0.2em] uppercase text-(--color-primary) group-hover:text-black transition-colors duration-300"
            style={{ fontFamily: 'var(--font-label)', fontSize: '0.95rem' }}
          >
            View Projects
          </span>
          <svg
            className="relative z-10 w-4 h-4 text-(--color-primary) group-hover:text-black group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>

        {/* Sign out */}
        <button
          onClick={handleLogout}
          className="mt-10 text-xs tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-label)',
            animation: 'slideUpFadeIn 0.5s ease-out both',
            animationDelay: '0.75s',
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default BrokerPortal;
