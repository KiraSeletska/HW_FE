
export const Button = ({border, background, borderRadius, padding, color, fontWeight, fontSize }) => {
    return (
        <button style={
            {
                border,
                background,
                borderRadius,
                padding,
                color,
                fontWeight,
                fontSize
            }
        }>Contact Us</button>
    )
}