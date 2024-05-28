import React from 'react'
import CustomInput from '../common/CustomInput'
import { SignInInputs } from '@/constants'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-in');

interface PropTypes {
    control: Control<z.infer<typeof formSchema>>
}

export default function SignInForm({ control }: PropTypes) {
    return (
        <div>
            {SignInInputs.map((input) => (
                <CustomInput key={input.id} control={control} name={input.name} label={input.label} placeholder={input.placeholder} type={input.type} />
            ))}
        </div>
    )
}
