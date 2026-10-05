
const SignUpPage = () => {
  return (
    <div className="flex justify-center mt-8">
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">সাইন আপ</legend>

          <label className="label">ইমেইল</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">ইমেইল</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">সাইন আপ</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
