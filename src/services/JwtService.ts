

class JwtService {
  static getToken(): string | undefined {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const authTokenCookie = cookies.find(cookie => cookie.startsWith('authToken='));
    return authTokenCookie?.split('=')[1];
  }

  static saveToken(token: string): void {
    document.cookie = `authToken=${token}`;
  }

  static destroyToken(): void {
    document.cookie = 'authToken=; expires=24h';
  }
}

export default JwtService;
