import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/",
    });
    if (result.error) {
      console.error("Failed to login", result.error);
    } else {
      console.log("Logged in successfully");
    }
  };

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.firstName}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
