'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import CustomInput from "../common/CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

export default function AuthForm({ type }: { type: string }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        console.log(values)
        setIsLoading(false)
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className="flex cursor-pointer items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                        Horizon
                    </h1>
                </Link>

                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">{user ? 'Link account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}</h1>
                    <p className="text-16 font-normal text-gray-600">
                        {user ? 'Link your account' : 'Please enter your details'}
                    </p>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/* Plaid Link */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            
                            {type === 'sign-up' ? (
                                <SignUpForm control={form.control} />
                            ) : (
                                <SignInForm control={form.control} />
                            )}

                            <div className="flex flex-col gap-4">
                                <Button disabled={isLoading} type="submit" className="form-btn">{isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                                        Loading...
                                    </>
                                ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}</Button>
                            </div>
                        </form>
                    </Form>

                    <footer className="flex justify-center items-center gap-1">
                        <p>{type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}</p>
                        <Link className="form-link" href={type === 'sign-in' ? '/sign-up' : 'sign-in'}>{type === 'sign-in' ? 'Sign Up' : 'Sign In'}</Link>
                    </footer>
                </>
            )}
        </section>
    );
}
