import React,{useEffect} from 'react';
import { BrowserRouter, Switch, Route  , Link , NavLink } from 'react-router-dom';
// import './App.scss';
import Home from './pages/Home';
import CoursesList from './pages/CoursesList';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import  DefaultTemplate from './components/DefaultTemplate';
import AdminTemplate from './components/AdminTemplate';
import CoursesManagement from './pages/CoursesManagement';
import UserManagement from './pages/UserManagement';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import  {ComponentAWithForm , ComponentBWithForm} from './pages/HOC/withForm.js'
import Couter from './Hooks/Counter.js';
import Form from './Hooks/Form'
import CourseDetail from './pages/CoursesDetail';
import {useSelector} from 'react-redux'
import { setToken } from './utils/axiosClient';

function App() {
  // const {userInfo} = useSelector((state)=>state.authReducer)
  // useEffect(() => {
  //  if(Object.keys(userInfo).length){
  //    setToken(userInfo.accessToken)
  //  }
  // }, [])
  return <BrowserRouter>
    {/* <Link to='/'>Home</Link>
    <Link to='/courses-list'>Courses List</Link>
    <Link to='/signin'>Signin</Link>
    <Link to='/signup'>Signup</Link> */}

    <Switch>

      <Route path='/couter-hook' component ={Couter}/>
      <Route path='/hoc-1' component={ComponentAWithForm} />
      <Route path='/hoc-2' component={ComponentBWithForm} />
      <Route path='/form-hook' component={Form} />
      <UserRoute exact path='/' component={Home}/>
      <UserRoute path="/courses/:id" component={CourseDetail} />
      <UserRoute path='/courses-list' component={CoursesList}/>
      <UserRoute path='/signin' component={Signin} />
      <UserRoute path='/signup' component={Signup} />

      {/* <UserRoute path='/signup'render={(routerProps) =>{
        console.log(routerProps);
        return (
          <DefaultTemplate>
            <Signup {...routerProps}> 
            Signup = {this.props.children}
          </Signup>
          </DefaultTemplate>
        );
      }} /> */}
     
      {/* <Route  path='/courses-management' render={(routerProps) =>{
          return (
            <AdminTemplate >
              <CoursesManagement {...routerProps}/>
            </AdminTemplate>
          )
      }}>
      </Route> */}

      {/* <Route  path='/user-management' render={(routerProps) =>{
          return (
            <AdminTemplate >
              <UserManagement {...routerProps}/>
            </AdminTemplate>
          )
      }}>
      </Route> */}
      <AdminRoute path='/courses-management' component={CoursesManagement} />
      <AdminRoute path='/user-management' component={UserManagement} />
    </Switch>
  </BrowserRouter>
}

export default App;
