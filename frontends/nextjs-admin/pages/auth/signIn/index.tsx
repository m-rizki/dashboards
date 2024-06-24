import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  signinsx_actions_container,
  signinsx_container,
} from "@/styles/pages/auth/signin-style";
import { useRouter } from "next/router";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="#">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  interface FormData {
    username: string;
    password: string;
  }
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const result: any = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (result.error) {
      setFormError(result.error);
    } else {
      setFormError("");
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (session) {
    return (
      <Container component="section" maxWidth="xs">
        <Box sx={signinsx_container}>
          <h1>Welcome, {session.user.firstName}</h1>
          <Box sx={signinsx_actions_container}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => router.push("/dashboard")}
            >
              Dashboard
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Container component="section" maxWidth="xs">
      <Box sx={signinsx_container}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            name="username"
            control={control}
            disabled={loading}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                autoComplete="username"
                autoFocus
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            disabled={loading}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />
          {formError && (
            <Typography color="error" variant="body2">
              {formError}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? `Sign In...` : `Sign In`}
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
