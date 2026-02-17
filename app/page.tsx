"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./page.module.css";

export default function Home() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isLoggedIn = !!session?.user;

  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <span className={styles.badge}>Secure Access</span>
        <h1 className={styles.title}>계정을 안전하게 연결하세요</h1>
        <p className={styles.subtitle}>
          Google 계정으로 빠르게 로그인하고 개인화된 대시보드를 이용할 수 있습니다.
        </p>
        <div className={styles.featureList}>
          <p className={styles.featureItem}>실시간 인증 상태 동기화</p>
          <p className={styles.featureItem}>안전한 세션 기반 로그인</p>
          <p className={styles.featureItem}>모든 기기에서 동일한 접근 경험</p>
        </div>

        {isLoading && <p className={styles.status}>세션 확인 중...</p>}

        {!isLoading && !isLoggedIn && (
          <button
            type="button"
            onClick={() => signIn("google")}
            className={`${styles.button} ${styles.googleButton}`}
          >
            Google로 로그인
          </button>
        )}

        {!isLoading && isLoggedIn && (
          <div className={styles.userPanel}>
            <p>
              <strong>로그인이 완료되었습니다</strong>
            </p>
            <p className={styles.userRow}>이름: {session.user?.name ?? "-"}</p>
            <p className={styles.userRow}>이메일: {session.user?.email ?? "-"}</p>
            <button
              type="button"
              onClick={() => signOut()}
              className={`${styles.button} ${styles.logoutButton}`}
            >
              로그아웃
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
