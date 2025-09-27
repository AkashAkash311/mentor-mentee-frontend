// external Imports
import React from 'react'
import { GraduationCap, Lock, LogIn, Mail, User, UserPlus, Users } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

// project Imports
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { clearSlice, setDetail, setLoginDetails } from './reducer';
import PostApis from '@/services/api/postApi';

import { IRootType } from '@/store/storeType';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/types';

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { booleanToggles, registerSlice } = useSelector((state: IRootType) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response;
      if (booleanToggles?.isLogin){
        const payload = {
          email: registerSlice.email,
          password: registerSlice.password
        }
        response = await PostApis.login(payload);
        dispatch(setLoginDetails(response.data.responseObject))
        toast.success(response.data.message)
        navigate(ROUTES.HOME)
      } else {
        response = await PostApis.register(registerSlice);
        // dispatch(setLoginDetails(response.data.responseObject))
        toast.success(response.data.message)
        dispatch(clearSlice());
        handleInputChange('isLogin', booleanToggles?.isLogin ? false : true, 'booleanToggles')
        // navigate(ROUTES.HOME)
      }
      // toast.error(response)
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error('API Error:', error);
    }
  };
  const handleInputChange = (name: string, value: any, key: any): void => {
    dispatch(setDetail({key: key, name: name, value: value}));
  };

  return(
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
                <div className="bg-white rounded-full p-3 mr-3">
                <GraduationCap className="h-8 w-8 text-black" />
                </div>
                <h1 className="text-3xl font-bold">
                <span className="text-white">Mentor</span>{''}
                <span className="text-blue-600">Mentee</span>
                </h1>
            </div>
            <p className="text-gray-400">Connect. Learn. Grow together.</p>
          </div>

          {/* Main Card */}
          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white flex items-center justify-center">
                {booleanToggles?.isLogin ? (
                  <>
                    <LogIn className="h-6 w-6 mr-2" />
                    Welcome Back
                  </>
                ) : (
                  <>
                    <UserPlus className="h-6 w-6 mr-2" />
                    Join Our Community
                  </>
                )}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {booleanToggles?.isLogin 
                  ? "Sign in to your account to continue your learning journey"
                  : "Create your account and start connecting with mentors or mentees"
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!booleanToggles?.isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">User Name</Label>
                      <div className="relative">
                        <User className="icon-inside-input" />
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter your User name"
                          value={registerSlice?.userName}
                          onChange={(e: any) => handleInputChange('userName', e.target.value, "registerSlice")}
                          className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          required={!booleanToggles?.isLogin} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">first Name</Label>
                      <div className="relative">
                        <User className="icon-inside-input" />
                        <Input
                          id="firstname"
                          type="text"
                          placeholder="Enter your first name"
                          value={registerSlice?.firstName}
                          onChange={(e: any) => handleInputChange('firstName', e.target.value, "registerSlice")}
                          className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          required={!booleanToggles?.isLogin} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <div className="relative">
                        <User className="icon-inside-input" />
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          value={registerSlice?.lastName}
                          onChange={(e: any) => handleInputChange('lastName', e.target.value, "registerSlice")}
                          className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          required={!booleanToggles?.isLogin} />
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="icon-inside-input" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={registerSlice?.email}
                      onChange={(e: any) => handleInputChange('email', e.target.value, "registerSlice")}
                      className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="icon-inside-input" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={registerSlice?.password}
                      onChange={(e:any) => handleInputChange('password', e.target.value, "registerSlice")}
                      className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {!booleanToggles?.isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="icon-inside-input" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={registerSlice?.confirmPassword}
                          onChange={(e: any) => handleInputChange('confirmPassword', e.target.value, "registerSlice")}
                          className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          required={!booleanToggles?.isLogin}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-white">I want to be a</Label>
                      <Select key={registerSlice?.role.value} value={registerSlice?.role.value} onValueChange={(value: any) => handleInputChange('role', value, "registerSlice")}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="mentor" className="text-white hover:bg-gray-700">
                            <div className="flex items-center">
                              <GraduationCap className="h-4 w-4 mr-2" />
                              Mentor - I want to guide others
                            </div>
                          </SelectItem>
                          <SelectItem value="mentee" className="text-white hover:bg-gray-700">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              Mentee - I want to learn and grow
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-10 py-0 transition-colors"
                >
                  {booleanToggles?.isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              {booleanToggles?.isLogin && (
                <div className="text-center">
                  <a href="#" className="text-sm text-blue-400 hover:text-blue-300 underline">
                    Forgot your password?
                  </a>
                </div>
              )}

            </CardContent>
          </Card>

          {/* Toggle between login and register */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              {booleanToggles?.isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button 
              variant="link" 
              className="text-blue-400 hover:text-blue-300 font-medium"
              onClick={() => {
                dispatch(clearSlice());
                handleInputChange('isLogin', booleanToggles?.isLogin ? false : true, 'booleanToggles')
              }
            }
            >
              {booleanToggles?.isLogin ? "Sign up for free" : "Sign in instead"}
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2025 MentorMentee. All rights reserved.</p>
          </div>
        </div>
    </div>
  );
}

export default Index