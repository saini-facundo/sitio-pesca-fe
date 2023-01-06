import {
  startClearErrorMessage,
  startRegisterUser,
} from "../store/auth/thunks";
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
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      password2: "",
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
    dispatch(startRegisterUser(data));
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setTimeout(() => {
      dispatch(startClearErrorMessage());
    }, 200);
  };

  return (
    <AuthTemplate
      title="Registro"
      linkText1="¿Ya tenes cuenta?"
      linkText2="Ingresá"
      linkHref="/"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("name", {
                required: "Nombre obligatorio",
              })}
              label="Nombre"
              type="text"
              placeholder=""
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("surname", {
                required: "Apellido obligatorio",
              })}
              label="Apellido"
              type="text"
              placeholder=""
              fullWidth
              error={!!errors.surname}
              helperText={errors.surname?.message}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("username", {
                required: "Nombre de usuario obligatorio",
              })}
              label="Nombre de Usuario"
              type="text"
              placeholder=""
              fullWidth
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register("email", {
                required: "Email obligatorio",
              })}
              label="Email"
              type="text"
              placeholder=""
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
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
            <TextField
              {...register("password2", {
                required: "Debe confirmar la contraseña",
                validate: (value) =>
                  value === getValues("password") ||
                  "Las contraseñas deben coincidir",
              })}
              label="Confirmar Contraseña"
              type="password"
              placeholder=""
              fullWidth
              error={!!errors.password2}
              helperText={errors.password2?.message}
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
