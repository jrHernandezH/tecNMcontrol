import React from 'react'
import { useParams } from 'react-router-dom';
import Head from '../components/Head'
import StudentLogin from '../components/login/StudentLogin'
import TeacherLogin from '../components/login/TeacherLogin';
import Footer from '../components/Footer';
function Login() {

  const { role } = useParams();
  
  return (
    <>
    <div className="container">
      <Head/>
      {role === 'student' ? <StudentLogin /> : <TeacherLogin />}
      <Footer />
    </div>
    </>
  )
}

export default Login