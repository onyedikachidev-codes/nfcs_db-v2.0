function SignInButton() {
  return (
    <button className="flex items-center gap-6 text-lg border bg-blue-600 text-gray-100  hover:text-gray-300 shadow-lg transform transition-transform duration-300 hover:scale-105 border-primary-300 px-[3.3rem] py-2 rounded-md font-medium mt-10">
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
        className=""
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
