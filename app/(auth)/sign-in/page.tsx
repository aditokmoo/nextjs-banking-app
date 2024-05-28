import AuthForm from "@/components/group/AuthForm";

export default function SignInPage() {
    return (
        <section className="flex-center size-full max-sm:px-6">
            <AuthForm
                type="sign-in"
            />
        </section>
    )
}
