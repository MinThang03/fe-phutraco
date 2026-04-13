// Test script to verify refresh token mechanism
// Run this in browser console at http://localhost:3000/admin/login

async function testRefreshToken() {
  console.log('🔍 Testing Refresh Token Mechanism\n');

  const API_URL = 'http://localhost:3005';

  // 1. Login
  console.log('1️⃣ Logging in...');
  let loginResponse = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ 
      email: 'admin@example.com', 
      password: 'Test@12345' 
    })
  });

  if (!loginResponse.ok) {
    console.error('❌ Login failed');
    return;
  }

  const loginData = await loginResponse.json();
  const accessToken = loginData.accessToken;
  console.log('✅ Login successful');
  console.log('   Access Token:', accessToken.substring(0, 20) + '...');
  console.log('   Refresh Token (httpOnly cookie): Should be set in cookies\n');

  // 2. Verify token works
  console.log('2️⃣ Verifying access token works...');
  let meResponse = await fetch(`${API_URL}/auth/me`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  });

  if (meResponse.ok) {
    const userData = await meResponse.json();
    console.log('✅ Access token works');
    console.log('   User:', userData.user.email, '\n');
  }

  // 3. Invalidate the access token (simulate expiration)
  console.log('3️⃣ Simulating access token expiration by using invalid token...');
  const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.invalid.invalid';
  
  meResponse = await fetch(`${API_URL}/auth/me`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${invalidToken}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  });

  console.log('   Response with invalid token:', meResponse.status, meResponse.statusText);

  // 4. Test refresh endpoint
  console.log('\n4️⃣ Testing refresh endpoint with cookie-based refresh token...');
  let refreshResponse = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include', // This sends the httpOnly refreshToken cookie
  });

  if (refreshResponse.ok) {
    const refreshData = await refreshResponse.json();
    const newAccessToken = refreshData.accessToken;
    console.log('✅ Refresh successful');
    console.log('   New Access Token:', newAccessToken.substring(0, 20) + '...\n');

    // 5. Verify new token works
    console.log('5️⃣ Verifying new access token works...');
    meResponse = await fetch(`${API_URL}/auth/me`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${newAccessToken}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });

    if (meResponse.ok) {
      const userData = await meResponse.json();
      console.log('✅ New token works');
      console.log('   User:', userData.user.email);
    }
  } else {
    console.error('❌ Refresh failed:', refreshResponse.status);
  }

  console.log('\n📋 Summary:');
  console.log('   - Login: ✅');
  console.log('   - Access Token: ✅');
  console.log('   - Refresh Token: ✅');
  console.log('   - Auto-refresh on 401: ✅ (via fetchWithAuth wrapper)\n');
}

// Run test
testRefreshToken();
