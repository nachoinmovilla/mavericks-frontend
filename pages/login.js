import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { userLogin } from '@/services/users/users.service';
import Router from 'next/router';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        setIsLoading(true);
        setIsError(false);
        setErrorMessage('');
        
        try {
            const response = await userLogin({ email, password });
            setIsLoading(false);

            if (response?.data?.success) {
                const { token, name, photo, roles } = response.data.data;

                // Guardar en localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('name', name);
                localStorage.setItem('photo', photo || 'https://via.placeholder.com/150?text=No+Image');
                localStorage.setItem('role', roles?.[0] || 'User');

                Router.push('/');
            } else {
                setIsError(true);
                setErrorMessage(response?.data?.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setErrorMessage('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-2 bg-muted dark:bg-gray-950">
            <div className="hidden md:block">
                <img
                    alt="Sign in image logo"
                    className="h-full w-full object-cover rounded-tr-[50%]"
                    height={600}
                    src="https://images.unsplash.com/photo-1525683879097-8babce1c602a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{ aspectRatio: '800/600', objectFit: 'cover' }}
                    width={800}
                />
            </div>
            <div className="flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <div className="flex justify-center pb-12">
                            <img src="/logomavericks.png" className="w-64 mr-4" alt="Logo" />
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                                Email address
                            </Label>
                            <div className="mt-1">
                                <Input
                                    autoComplete="email"
                                    className={`block w-full appearance-none rounded-md border ${isError ? 'border-destructive' : 'border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500'} px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm`}
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                                Password
                            </Label>
                            <div className="mt-1">
                                <Input
                                    autoComplete="current-password"
                                    className={`block w-full appearance-none rounded-md border ${isError ? 'border-destructive' : 'border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500'} px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm`}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {isError && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
                        <Button disabled={!email || !password || isLoading} onClick={handleLogin} className="w-full">
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
