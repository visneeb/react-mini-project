export function getErrorInputClassName(error?: string): string {
  return error ? "border-red-500" : "";
}

export function getErrorInputProps(error?: string) {
  return {
    "aria-invalid": !!error,
    "data-invalid": !!error,
    className: getErrorInputClassName(error),
  };
}
