import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const registrationSchema = object({
    email: string().email("Invalid email"),
    gender: string(),
    password: string().min(6, "Password must be at least 6 characters"),
    phone: string()
});

type RegistrationInput = TypeOf<typeof registrationSchema>;

const RegistrationComponent = () => {
    const navigate = useNavigate()
    const methods = useForm<RegistrationInput>({
        resolver: zodResolver(registrationSchema),
    });


    async function signUpService() {
        const signUpPayload = {
            email: methods.getValues("email"),
            gender: methods.getValues("gender"),
            password: methods.getValues("password"),
            phone: methods.getValues("phone"),
        }

        try {
            const result = await axios.post("http://localhost:4000/auth/sign-up", signUpPayload)
            alert(result.data.message)
            setTimeout(() => { navigate("/login") }, 3000)
        } catch (ex) {
            alert("Something went wrong!")
        }

    }

    return (
        <FormProvider {...methods}>
            <form>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    Email
                    <input type="email" {...methods.register("email")} />
                    {methods.formState.errors.email && <span>{methods.formState.errors.email.message}</span>}
                    Gender
                    <input type="text" {...methods.register("gender")} />
                    {methods.formState.errors.gender && <span>{methods.formState.errors.gender.message}</span>}
                    Password
                    <input type="password" {...methods.register("password")} />
                    {methods.formState.errors.password && <span>{methods.formState.errors.password.message}</span>}
                    Phone
                    <input type="text" {...methods.register("phone")} />
                    {methods.formState.errors.phone && <span>{methods.formState.errors.phone.message}</span>}

                </div>
                <button type="button" onClick={signUpService}>Sign Up</button>
            </form>
        </FormProvider>
    );
};

export default RegistrationComponent;