function groupClasses(...args) {
    return args.filter(Boolean).join(" ");
}

export default groupClasses;