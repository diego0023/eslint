import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const onSubmit = () => {
    console.log('Bienvenido');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Correo</p>
          <input
            type="text"
            {...register('email', {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              required: true,
            })}
          />
          {errors.email?.type === 'required' && <p>El email es requerido</p>}
          {errors.email?.type === 'pattern' && <p>El email no es correcto</p>}
        </div>
        <div>
          <p>Contraseña</p>
          <input
            type="text"
            {...register('password', {
              required: true,
              minLength: 8,
            })}
          />
          {errors.password?.type === 'required' && <p>El campo es requerido</p>}
          {errors.password?.type === 'minLength' && (
            <p>El campo necesita 8 caracteres</p>
          )}
        </div>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
}
