const BASE_URL = import.meta.env.VITE_API_URL as string;

type ApiOptions = {
  method?: string;
  body?: object;
  token?: string;
};

async function request<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body, token } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error ?? 'Request failed');
  }

  return data as T;
}

export const api = {
  signup: (body: { email: string; password: string; firstName: string; lastName: string; isRealtor: boolean }) =>
    request<{ message: string }>('/auth/signup', { method: 'POST', body }),

  login: (body: { email: string; password: string }) =>
    request<{ access_token: string; user: { id: string; email: string; firstName: string; lastName: string; isRealtor: boolean } }>(
      '/auth/login',
      { method: 'POST', body }
    ),

  logout: (token: string) =>
    request<{ message: string }>('/auth/logout', { method: 'POST', token }),

  me: (token: string) =>
    request<{ user: { id: string; email: string; firstName: string; lastName: string; isRealtor: boolean } }>('/auth/me', { token }),
};
