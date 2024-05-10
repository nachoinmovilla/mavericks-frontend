import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const login = () => {
    return (
        <div className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-2 bg-muted dark:bg-gray-950">
            <div className="hidden md:block">
                <img
                alt="Sign in image"
                className="h-full w-full object-cover rounded-tr-[50%]"
                height={600}
                src="https://images.unsplash.com/photo-1525683879097-8babce1c602a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                    aspectRatio: "800/600",
                    objectFit: "cover",
                }}
                width={800}
                />
            </div>
            <div className="flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                        Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Or
                        <a
                            className="ml-2 font-medium text-primary hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                            href="#"
                        >
                            start your 14-day free trial
                        </a>
                        </p>
                    </div>
                    <div className="space-y-6" >
                        <div>
                        <Label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                            Email address
                        </Label>
                        <div className="mt-1">
                            <Input
                            autoComplete="email"
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            type="email"
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
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            type="password"
                            />
                        </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-800 dark:focus:ring-indigo-400"
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                />
                                <Label className="ml-2 block text-sm text-gray-900 dark:text-gray-300" htmlFor="remember-me">
                                    Remember me
                                </Label>
                            </div>
                            <div className="text-sm">
                                <a
                                className="font-medium text-primary hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                href="#"
                                >
                                Forgot your password?
                                </a>
                            </div>
                        </div>
                        <Button className="w-full">
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;