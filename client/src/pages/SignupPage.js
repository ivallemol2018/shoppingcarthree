import React from 'react'
import {Formik} from 'formik'
import { useCartContext } from '../context/CartContext'

const SignupPage = () => {

  const { signup } = useCartContext();


  const onSubmit = (register) =>{
      signup(register)
  }

  return (
    <>
    <div className='bg-white h-screen w-screen flex flex-col justify-center items-center'>
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="flex flex-col items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-2xl font-bold">Join us Now</h2>
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>
        <div className="mt-10">
        <Formik
            initialValues={{
                username:'',
                password:'',
                name:'',
                address:'',
            }}
            onSubmit={onSubmit}
        >
            {({values,handleSubmit,handleChange,handleBlur})=>(
          <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-5">
                  <label for="username" className="mb-1 text-xs tracking-wide text-gray-600">Username</label>
                  <div className="relative">
                    <div
                      className="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <i className="fas fa-at text-blue-500"></i>
                    </div>                  
                    <input 
                      id="username"
                      className="
                            text-sm
                            placeholder-gray-500
                            pl-10
                            pr-4
                            rounded-2xl
                            border border-gray-400
                            w-full
                            py-2
                            focus:outline-none focus:border-blue-400
                            "
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="Enter your email"/>
                  </div>

              </div>

              <div className="flex flex-col mb-6">
                  <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password</label>
                    <div className="relative">
                        <div className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-gray-400
                        ">
                          <span>
                            <i className="fas fa-lock text-blue-500"></i>
                          </span>
                        </div>                  
                        <input 
                        className="
                          text-sm
                          placeholder-gray-500
                          pl-10
                          pr-4
                          rounded-2xl
                          border border-gray-400
                          w-full
                          py-2
                          focus:outline-none focus:border-blue-400"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                        type="password"
                        placeholder="Enter your password"
                        />
                  </div>
              </div>

              <div className="flex flex-col mb-6">
                  <label for="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Name</label>
                    <div className="relative">
                        <div className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-gray-400
                        ">
                          <span>
                            <i className="fas fa-lock text-blue-500"></i>
                          </span>
                        </div>                  
                        <input 
                        className="
                          text-sm
                          placeholder-gray-500
                          pl-10
                          pr-4
                          rounded-2xl
                          border border-gray-400
                          w-full
                          py-2
                          focus:outline-none focus:border-blue-400"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Enter your name"
                        />
                  </div>
              </div>  

              <div className="flex flex-col mb-6">
                  <label for="address" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Address</label>
                    <div className="relative">
                        <div className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-gray-400
                        ">
                          <span>
                            <i className="fas fa-lock text-blue-500"></i>
                          </span>
                        </div>                  
                        <input 
                        className="
                          text-sm
                          placeholder-gray-500
                          pl-10
                          pr-4
                          rounded-2xl
                          border border-gray-400
                          w-full
                          py-2
                          focus:outline-none focus:border-blue-400"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Enter your address"
                        />
                  </div>
              </div>         

              <div className="mt-4 text-xl sm:text-sm text-red-500">
              </div> 

              <div className="flex w-full">
                  <button 
                    className="
                      flex
                      mt-2
                      items-center
                      justify-center
                      focus:outline-none
                      text-white text-sm
                      sm:text-base
                      bg-blue-500
                      hover:bg-blue-600
                      rounded-2xl
                      py-2
                      w-full
                      transition
                      duration-150
                      ease-in"
                    type="submit">
                      <span className="mr-2 uppercase">Sign Up</span>
                      <span>
                        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                  </button>              
              </div>
          </form>
            )}

          </Formik>
        </div>
        </div>
    <div className="flex justify-center items-center mt-6">
      <a
        href="#"
        target="_blank"
        className="
          inline-flex
          items-center
          text-gray-700
          font-medium
          text-xs text-center
        "
      >
        <span className="ml-2"
          >You have an account?
          <a
            href="/"
            className="text-xs ml-2 text-blue-500 font-semibold"
            >Login here</a
          ></span
        >
      </a>
    </div>    
</div>
</>
  )
}

export default SignupPage