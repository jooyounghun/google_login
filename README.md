# Google Login App (Next.js + Vercel)

구글 로그인(OAuth 2.0) 기능이 포함된 Next.js 예제입니다.  
Vercel 배포 후 커스텀 도메인에 연결할 수 있습니다.

## 1) 로컬 실행

```bash
npm install
cp .env.example .env.local
npm run dev
```

브라우저: `http://localhost:3000`

## 2) Google Cloud Console 설정

`Google Cloud Console > APIs & Services > Credentials > OAuth 2.0 Client ID`에서 아래 값 등록:

- Authorized JavaScript origins
  - `http://localhost:3000`
  - `https://YOUR_VERCEL_DOMAIN`
- Authorized redirect URIs
  - `http://localhost:3000/api/auth/callback/google`
  - `https://YOUR_VERCEL_DOMAIN/api/auth/callback/google`

## 3) 환경 변수

`.env.local`에 아래 변수 설정:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=랜덤하고_긴_문자열
GOOGLE_CLIENT_ID=Google에서_발급받은_Client_ID
GOOGLE_CLIENT_SECRET=Google에서_발급받은_Client_Secret
```

`NEXTAUTH_SECRET` 생성 예시:

```bash
openssl rand -base64 32
```

## 4) Vercel 배포

1. GitHub에 이 저장소 푸시
2. Vercel에서 해당 GitHub 레포 Import
3. Vercel Project Settings > Environment Variables에 아래 추가
   - `NEXTAUTH_URL=https://YOUR_VERCEL_DOMAIN`
   - `NEXTAUTH_SECRET`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
4. 재배포 후 로그인 테스트

## 5) 도메인 연결

Vercel Project > Settings > Domains에서 도메인 추가 후 DNS 레코드 연결합니다.  
도메인 확정 후 Google OAuth의 `Authorized JavaScript origins`와 `Authorized redirect URIs`에도 동일 도메인을 반드시 반영하세요.
