import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const BrokerPortal = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center max-w-md">
        <div className="h-px w-12 bg-(--color-primary) mx-auto mb-8" />
        <h1
          className="text-3xl font-normal mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Broker Portal
        </h1>
        <p
          className="text-sm tracking-[0.15em] uppercase text-(--color-primary) mb-8"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          Welcome, {user?.fullName}
        </p>
        <p className="text-white/40 text-sm mb-12" style={{ fontFamily: 'var(--font-body)' }}>
          {user?.brokerName}
        </p>
        <button
          onClick={handleLogout}
          className="text-xs tracking-[0.15em] uppercase text-white/40 hover:text-white/70 transition-colors"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default BrokerPortal;
