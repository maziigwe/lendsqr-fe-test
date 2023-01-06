export type Props = {
    name: string
    id?: string
    type?: string
    label?: string
    placeholder?: string
}

export const FormInput = ({ name, id, type, label, placeholder }: Props) => {
    return (
        <div className='flex flex-col my-5 relative'>
            <input
                className='form-input px-3 focus:outline-none focus:shadow-outline'
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
            />
            {type === 'password' ? (
                <div className='forgot-password mt-5'>forgot password?</div>
            ) : (
                <></>
            )}
            {type === 'password' ? (
                <div className='show-password top-1/3 right-2'>SHOW</div>
            ) : (
                <></>
            )}
        </div>
    )
}
