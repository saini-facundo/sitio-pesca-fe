import { startClearErrorMessage, startSignIn } from "../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { AuthTemplate } from "../templates/Auth";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Dialog,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function LoginPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { status, errorMsg } = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    if (errorMsg) {
      setModalOpen(true);
    }
  }, [errorMsg]);

  const dispatch = useDispatch();

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const onSubmit = (data) => {
    dispatch(startSignIn(data));
  };

  const handleModalClose = () => {
    setModalOpen(false);
    dispatch(startClearErrorMessage());
  };

  return (
    <AuthTemplate
      title="Login"
      linkText1="¿No tenes cuenta?"
      linkText2="Registrate"
      linkHref="/register"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("username", {
                required: "Email/Nombre de usuario obligatorio",
              })}
              label="Email/Nombre de Usuario"
              type="text"
              placeholder=""
              fullWidth
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe ser de 6 caracteres o mas",
                },
              })}
              label="Contraseña"
              type="password"
              placeholder=""
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              disabled={isCheckingAuthentication}
              type="submit"
              variant="contained"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </form>

      <Dialog
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ p: "20px" }}>
          <Typography id="modal-modal-title" variant="h6">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {errorMsg}
          </Typography>

          <Button sx={{ mt: 2 }} variant="contained" onClick={handleModalClose}>
            Ok
          </Button>
        </Box>
      </Dialog>
    </AuthTemplate>
  );
}

export default LoginPage;
