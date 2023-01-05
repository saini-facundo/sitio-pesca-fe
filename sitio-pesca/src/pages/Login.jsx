import { startClearErrorMessage, startSignIn } from "../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { AuthTemplate } from "../templates/Auth";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";

function LoginPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
    setModalOpen(true);
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

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {errorMsg}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Ok
          </Button>
        </Box>
      </Modal>
    </AuthTemplate>
  );
}

export default LoginPage;
