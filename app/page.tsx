"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isLoggedIn = !!session?.user;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 520,
          border: "1px solid #dcdcdc",
          borderRadius: 12,
          padding: 24
        }}
      >
        <h1 style={{ marginTop: 0 }}>Google Login</h1>
        <p>Vercel 배포용 구글 로그인 예제</p>

        {isLoading && <p>세션 확인 중...</p>}

        {!isLoading && !isLoggedIn && (
          <button
            type="button"
            onClick={() => signIn("google")}
            style={{ padding: "10px 14px", cursor: "pointer" }}
          >
            Google로 로그인
          </button>
        )}

        {!isLoading && isLoggedIn && (
          <div>
            <p>
              <strong>로그인 완료</strong>
            </p>
            <p>이름: {session.user?.name ?? "-"}</p>
            <p>이메일: {session.user?.email ?? "-"}</p>
            <button
              type="button"
              onClick={() => signOut()}
              style={{ padding: "10px 14px", cursor: "pointer" }}
            >
              로그아웃
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
