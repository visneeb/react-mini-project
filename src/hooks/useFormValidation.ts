import { useState } from "react";
import type { FormData, FormErrors } from "@/utils/validation";
import { validateFormData, hasErrors } from "@/utils/validation";

export function useFormValidation(initialData: FormData) {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    selectMovie: "",
  });

  const validate = (): boolean => {
    const newErrors = validateFormData(formData);
    setErrors(newErrors);
    return !hasErrors(newErrors);
  };

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const reset = () => {
    setFormData(initialData);
    setErrors({ name: "", email: "", selectMovie: "" });
  };

  return {
    formData,
    errors,
    validate,
    updateField,
    reset,
  };
}
