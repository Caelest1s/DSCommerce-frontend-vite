export default function FormInput(props: any) {

    // retiro(desestruturo) o validation do formData (input)
    const { validation, ...inputProps } = props;

    return (
        <input {...inputProps} />
    );
};