const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

class AuthService {
  private accessToken: string | null = null;

  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important: send cookies
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Login failed' }));
      throw new Error(error.message || 'Login failed');
    }

    const data: LoginResponse = await response.json();
    this.accessToken = data.accessToken;
    return data;
  }

  async refresh(): Promise<string> {
    const response = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      this.accessToken = null;
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    this.accessToken = data.accessToken;
    return data.accessToken;
  }

  async logout(): Promise<void> {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        credentials: 'include',
      });
    } finally {
      this.accessToken = null;
    }
  }

  async logoutAll(): Promise<void> {
    try {
      await fetch(`${API_URL}/auth/logout-all`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        credentials: 'include',
      });
    } finally {
      this.accessToken = null;
    }
  }

  async getCurrentUser(): Promise<User | null> {
    // If no access token, try to refresh from cookie first
    if (!this.accessToken) {
      try {
        await this.refresh();
        // After refresh, access token should be set
      } catch (error) {
        // No valid refresh token cookie
        return null;
      }
    }

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        // Try to refresh token once
        await this.refresh();
        return this.getCurrentUser();
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      this.accessToken = null;
      return null;
    }
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  clearAccessToken(): void {
    this.accessToken = null;
  }

  isAuthenticated(): boolean {
    return this.accessToken !== null;
  }
}

export const authService = new AuthService();
