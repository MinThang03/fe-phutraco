import { authService } from '@/services/auth.service';

/**
 * Global fetch wrapper with automatic token refresh on 401
 * Handles authorization headers, token refresh, and redirects
 */
export async function fetchWithAuth(
  url: string,
  options: RequestInit = {},
  skipAuthRefresh: boolean = false
): Promise<Response> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  // Add Authorization header if token exists
  const accessToken = authService.getAccessToken();
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  let response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
  });

  // Handle 401 Unauthorized
  if (response.status === 401 && !skipAuthRefresh && accessToken) {
    try {
      // Try to refresh the token
      await authService.refresh();

      // Get new token and retry request
      const newAccessToken = authService.getAccessToken();
      if (newAccessToken) {
        const retryHeaders: Record<string, string> = {
          'Content-Type': 'application/json',
          ...(options.headers as Record<string, string> || {}),
          'Authorization': `Bearer ${newAccessToken}`,
        };

        response = await fetch(url, {
          ...options,
          headers: retryHeaders,
          credentials: 'include',
        });
      }
    } catch (refreshError) {
      // Refresh failed, clear auth and redirect to login
      authService.clearAccessToken();
      if (typeof window !== 'undefined') {
        window.location.href = '/admin/login';
      }
      throw new Error('Session expired. Please login again.');
    }
  } else if (response.status === 401 && skipAuthRefresh) {
    // If we explicitly skip auth refresh and get 401, redirect to login
    authService.clearAccessToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login';
    }
    throw new Error('Unauthorized');
  }

  return response;
}

/**
 * Helper to parse JSON response and handle common error patterns
 */
export async function fetchJsonWithAuth<T>(
  url: string,
  options: RequestInit = {},
  skipAuthRefresh: boolean = false
): Promise<T> {
  const response = await fetchWithAuth(url, options, skipAuthRefresh);

  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: `HTTP ${response.status}: ${response.statusText}`,
    }));
    throw new Error(error.message || `API Error: ${response.status}`);
  }

  return response.json();
}
