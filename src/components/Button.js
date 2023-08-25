import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    const classes = className("flex items-center px-3 py-1.5 border-2 my-1.5 mx-1.5 font-bold", {
        "border-blue-600 bg-blue-500 text-white-900": primary,
        "border-gray-300 bg-gray-900 text-blue-900": secondary,
        "border-green-800 bg-green-600 text-white-900": success,
        "border-yellow-100 bg-yellow-400 text-gray-900": warning,
        "border-red-800 bg-red-500 text-white-900": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-800': outline && success,
        'text-yellow-900': outline && warning,
        'text-red-800': outline && danger,
    });
    
    return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

        if(count > 1){
            return new Error("Only one of primary, secondary, warning, success & danger is allowed");
        }
    },
};

export default Button;