export type Props = {
    text: string
    path: string
}

export const Button = ({ text, path }: Props) => {
    return <button className=' sign-in_btn'>{text}</button>
}
