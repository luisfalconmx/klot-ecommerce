"use client";

import { signOut } from "next-auth/react";

export default function Account() {
  return (
    <div>
      <h1>Account</h1>
      <p>This page is protected with middleware.</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
