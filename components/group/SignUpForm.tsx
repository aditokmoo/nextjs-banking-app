import { SignUpInputs } from '@/constants'
import React from 'react'
import CustomInput from '../common/CustomInput'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface PropTypes {
    control: Control<z.infer<typeof formSchema>>
}

export default function SignUpForm({ control }: PropTypes) {
    return (
        <div className='w-full grid gap-6'>
            <div className="flex w-full gap-4">
                <CustomInput control={control} name='firstName' label='First Name' placeholder='Enter your first name' type='text' />
                <CustomInput control={control} name='lastName' label='Last Name' placeholder='Enter your last name' type='text' />
            </div>
            <CustomInput control={control} name='address1' label='Address 1' placeholder='Enter your address' type='text' />
            <div className="flex gap-4">
                <CustomInput control={control} name='state' label='State' placeholder='Example: NY' type='text' />
                <CustomInput control={control} name='postalCode' label='Postal Code' placeholder='Example: 11101' type='text' />
            </div>
            <div className="flex gap-4">
                <CustomInput control={control} name='dateOfBirth' label='DateOfBirth' placeholder='YYYY-MM-DD' type='text' />
                <CustomInput control={control} name='ssn' label='SSN' placeholder='Example: 1234' type='text' />
            </div>
            <CustomInput control={control} name='email' label='Email' placeholder='Enter your email' type='text' />
            <CustomInput control={control} name='password' label='Password' placeholder='Enter your password' type='password' />
        </div>
    )
}
