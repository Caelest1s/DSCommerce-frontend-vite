export default function FormInput(props: any) {

    // retiro(desestruturo) o validation do formData (input)
    const { validation, invalid, ...inputProps } = props;

    return (
        <input {...inputProps} data-invalid={invalid} />
    );
};