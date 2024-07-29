export default function FormTextArea(props: any) {

    // retiro(desestruturo) o validation do formData (input)
    const {
        validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...textareaProps
    } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return (
        <textarea
            {...textareaProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}
        />
    );
};