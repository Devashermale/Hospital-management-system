import React from "react";

function AdminLogin() {
  return (
    <>
      <form  className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <div className="border-2 flex flex-col gap-4 p-6 rounded">
          <h1 className=" font-bold text-2xl text-center">admin login</h1>
          <label htmlFor="email">email</label>
          <input type="email" placeholder="john@gmail.com" className="w-full p-2 border border-gray-300 rounded" />
          <label htmlFor="password">password</label>
          <input type="password" placeholder="password" className="w-full p-2 border border-gray-300 rounded" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 cursor font-bold text-white p-2 rounded">login</button>
        </div>
      </form>
    </>
  );
}

export default AdminLogin;
