import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Lock, LogIn, Mail, User, UserPlus, Users } from 'lucide-react'
import React, { useState } from 'react'

const Index = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    rememberMe: false,
    agreeToTerms: false
  });

  const handleSubmit = () => {};
  const handleInputChange = (name: string, value: any) => {};

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
                {isLogin ? (
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
                {isLogin 
                  ? "Sign in to your account to continue your learning journey"
                  : "Create your account and start connecting with mentors or mentees"
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white">Full Name</Label>
                    <div className="relative">
                      <User className="icon-inside-input" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e: any) => handleInputChange('fullName', e.target.value)}
                        className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="icon-inside-input" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e: any) => handleInputChange('email', e.target.value)}
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
                      value={formData.password}
                      onChange={(e:any) => handleInputChange('password', e.target.value)}
                      className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="icon-inside-input" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e: any) => handleInputChange('confirmPassword', e.target.value)}
                          className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          required={!isLogin}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-white">I want to be a</Label>
                      <Select value={formData.role} onValueChange={(value: any) => handleInputChange('role', value)}>
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
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              {isLogin && (
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
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button 
              variant="link" 
              className="text-blue-400 hover:text-blue-300 font-medium"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up for free" : "Sign in instead"}
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2025 MentorConnect. All rights reserved.</p>
          </div>
        </div>
    </div>
  );
}

export default Index