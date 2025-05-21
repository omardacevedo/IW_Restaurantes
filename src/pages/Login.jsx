import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inicio de sesión simulado.");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registro:", registerForm);
    alert("Registro simulado.");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative">
      <div className="bg-white p-8 rounded shadow max-w-md w-full z-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Contraseña"
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-700 text-sm">o</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-50 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continuar con Google
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-blue-800 text-white rounded py-2 hover:bg-blue-900 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-5 h-5 mr-2 bg-white rounded-full p-0.5"
            />
            Continuar con Facebook
          </button>
        </div>

        <p className="text-center mt-4 text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-blue-600 hover:underline"
          >
            Regístrate
          </button>
        </p>
      </div>

      {/* Modal de Registro */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded shadow max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Registro</h2>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={registerForm.name}
                onChange={handleRegisterChange}
                required
                placeholder="Nombre completo"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                required
                placeholder="Correo electrónico"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              <input
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                required
                placeholder="Contraseña"
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
